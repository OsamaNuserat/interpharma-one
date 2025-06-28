const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// API Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, topic, message } = req.body;
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Create email content
    const fullName = `${firstName} ${lastName}`.trim();
    const emailContent = `
Contact Form Submission from InterPharma Website

Name: ${fullName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Topic: ${topic}
Message: ${message}

---
This email was sent from the InterPharma contact form.
    `.trim();

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🧬 InterPharma Contact Form - ${topic} | ${fullName}`,
      text: emailContent,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #ea580c 0%, #f97316 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">
                🧬 InterPharma One
              </h1>
              <p style="color: #fed7aa; margin: 10px 0 0 0; font-size: 16px;">
                Contact Form Submission
              </p>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
              
              <!-- Alert Badge -->
              <div style="background-color: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 12px; margin-bottom: 30px; text-align: center;">
                <span style="color: #92400e; font-weight: 600; font-size: 14px;">
                  📧 New Contact Form Submission
                </span>
              </div>

              <!-- Contact Details -->
              <div style="background-color: #f8fafc; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">
                  Contact Information
                </h2>
                
                <div style="margin-bottom: 15px;">
                  <span style="color: #6b7280; font-weight: 600; display: inline-block; width: 80px;">Name:</span>
                  <span style="color: #1f2937; font-weight: 500;">${fullName}</span>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <span style="color: #6b7280; font-weight: 600; display: inline-block; width: 80px;">Email:</span>
                  <a href="mailto:${email}" style="color: #ea580c; text-decoration: none; font-weight: 500;">${email}</a>
                </div>
                
                <div style="margin-bottom: 15px;">
                  <span style="color: #6b7280; font-weight: 600; display: inline-block; width: 80px;">Phone:</span>
                  <span style="color: #1f2937; font-weight: 500;">${phone || 'Not provided'}</span>
                </div>
                
                <div style="margin-bottom: 0;">
                  <span style="color: #6b7280; font-weight: 600; display: inline-block; width: 80px;">Topic:</span>
                  <span style="background-color: #ea580c; color: #ffffff; padding: 4px 12px; border-radius: 16px; font-size: 12px; font-weight: 600;">
                    ${topic}
                  </span>
                </div>
              </div>

              <!-- Message -->
              <div style="margin-bottom: 30px;">
                <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                  Message
                </h3>
                <div style="background-color: #f9fafb; border-left: 4px solid #ea580c; padding: 20px; border-radius: 0 8px 8px 0; line-height: 1.6;">
                  <p style="color: #374151; margin: 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>

              <!-- Action Button -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${email}?subject=Re: ${topic} - InterPharma Response" 
                   style="background: linear-gradient(135deg, #ea580c 0%, #f97316 100%); 
                          color: #ffffff; 
                          text-decoration: none; 
                          padding: 12px 30px; 
                          border-radius: 25px; 
                          font-weight: 600; 
                          display: inline-block;
                          box-shadow: 0 4px 6px rgba(234, 88, 12, 0.2);">
                  📧 Reply to ${fullName.split(' ')[0]}
                </a>
              </div>

            </div>

            <!-- Footer -->
            <div style="background-color: #f3f4f6; padding: 25px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">
                This email was automatically generated from the InterPharma One contact form.
              </p>
              <p style="color: #9ca3af; margin: 0; font-size: 12px;">
                📅 Received: ${new Date().toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </p>
              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
                <p style="color: #9ca3af; margin: 0; font-size: 11px;">
                  🌐 <strong>InterPharma One</strong> - Leading Pharmaceutical Quality Assurance
                  <br>
                  📍 Amman, Jordan | 📞 +(962) 6515 1133 | 📧 info@interpharmaone.com
                </p>
              </div>
            </div>

          </div>
        </body>
        </html>
      `
    });

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Serve static data
const { products, services } = require('./src/data/index.js');

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/services', (req, res) => {
  res.json(services);
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
