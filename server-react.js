const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local'
});

const app = express();
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Contact Form - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Serve static data
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: "Product 1", description: "Description 1" },
    { id: 2, name: "Product 2", description: "Description 2" }
  ]);
});

app.get('/api/services', (req, res) => {
  res.json([
    { id: 1, name: "Service 1", description: "Description 1" },
    { id: 2, name: "Service 2", description: "Description 2" }
  ]);
});

// Catch all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`> Ready on http://localhost:${port}`);
  console.log(`> Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`> Node.js version: ${process.version}`);
});
