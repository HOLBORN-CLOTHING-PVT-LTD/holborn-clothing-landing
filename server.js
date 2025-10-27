const express = require('express');
const path = require('path');
const fs = require('fs-extra');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static site from repo root
app.use(express.static(path.join(__dirname)));

const DATA_FILE = path.join(__dirname, 'data', 'emails.json');

async function ensureDataFile(){
  await fs.ensureDir(path.dirname(DATA_FILE));
  if(!(await fs.pathExists(DATA_FILE))){
    await fs.writeJson(DATA_FILE, []);
  }
}

// Simple email validator
function isValidEmail(email){
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// POST /api/subscribe
app.post('/api/subscribe', async (req, res) => {
  try{
    const { email, product } = req.body || {};
    if(!isValidEmail(email)){
      return res.status(400).json({ success:false, message: 'Invalid email' });
    }

    await ensureDataFile();
    const list = await fs.readJson(DATA_FILE);
    const entry = { email, product: product || null, ts: new Date().toISOString() };

    // Avoid duplicate entries (naive)
    const exists = list.find(e => e.email.toLowerCase() === email.toLowerCase());
    if(!exists){
      list.push(entry);
      await fs.writeJson(DATA_FILE, list, { spaces: 2 });
    }

    // Confirmation email sending is controlled by the SEND_CONFIRMATION_EMAILS
    // environment variable. By default it's disabled to avoid sending real
    // emails during development. To enable set SEND_CONFIRMATION_EMAILS=true
    // and provide SMTP_* env vars.
    if(process.env.SEND_CONFIRMATION_EMAILS === 'true'){
      try{
        // Default FROM address set per user request; can be overridden with env var
        const from = process.env.FROM_ADDRESS || 'hello@abhiranda21@gmail.com';
        const siteName = process.env.SITE_NAME || 'Holborn Clothing';

        const mailOptions = {
          from,
          to: email,
          subject: `Thanks for joining ${siteName}`,
          text: `Thanks for joining ${siteName}!\n\nWe'll keep you updated about our launch and new arrivals.\n\n— The ${siteName} Team`,
          html: `<p>Thanks for joining <strong>${siteName}</strong>!</p><p>We'll keep you updated about our launch and new arrivals.</p><p>— The ${siteName} Team</p>`
        };

        if(process.env.SMTP_HOST){
          // Real SMTP provided
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: process.env.SMTP_SECURE === 'true',
            auth: process.env.SMTP_USER ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS
            } : undefined
          });

          await transporter.sendMail(mailOptions);
          console.log('Confirmation email sent to', email);
        }else{
          // No SMTP configured — create an Ethereal test account and send there.
          const testAccount = await nodemailer.createTestAccount();
          const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
              user: testAccount.user,
              pass: testAccount.pass
            }
          });

          const info = await transporter.sendMail(mailOptions);
          const preview = nodemailer.getTestMessageUrl(info);
          console.log('Sent test confirmation email for', email);
          console.log('Preview URL:', preview);
        }
      }catch(err){
        console.error('Failed to send confirmation email:', err && err.message);
      }
    } else {
      console.log('SEND_CONFIRMATION_EMAILS !== true — skipping confirmation email.');
    }

    return res.json({ success:true, message: 'Subscribed' });
  }catch(err){
    console.error('subscribe error', err);
    return res.status(500).json({ success:false, message: 'Server error' });
  }
});

// Basic health
app.get('/health', (req, res) => res.json({ ok:true }));

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
