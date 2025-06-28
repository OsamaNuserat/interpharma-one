# 🚀 InterPharma One - Deployment Guide

## 📁 Project Structure
```
interpharma-one/
├── dist/           # Built React app (upload to cPanel)
├── server.js       # Express server (upload to cPanel)
├── package.json    # Dependencies (upload to cPanel)
├── .env            # Environment variables (upload to cPanel)
├── src/            # Source files (do NOT upload)
├── public/         # Source assets (do NOT upload)
└── node_modules/   # Dependencies (run npm install on server)
```

## 🎯 Local Development

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Test Production Build Locally
```bash
npm start
```

## 🌐 cPanel Deployment

### Files to Upload
- `dist/` (entire folder)
- `server.js`
- `package.json`
- `.env`

### cPanel Node.js Settings
- **Node.js Version**: 16.20.2 or higher
- **Application Root**: Your app directory
- **Application Startup File**: `server.js`
- **Application URL**: Your domain

### Environment Variables
The `.env` file contains:
```
EMAIL_USER=osamanuserat3@gmail.com
EMAIL_PASS=dwpk sxlj ytrq hlvd
NODE_ENV=development  # Change to 'production' on cPanel
PORT=3000
```

### Installation Steps
1. Upload the required files
2. Set `NODE_ENV=production` in cPanel environment variables (or in .env)
3. Run: `npm install --production`
4. Start the application in cPanel Node.js interface

## 📧 Email Configuration

The server tries multiple email methods:
1. **Gmail SMTP** (works in development and some production)
2. **sendmail** (Linux servers - production only)
3. **cPanel mail server** (localhost - production only)

If all methods fail, form submissions are logged in the console.

## 🔧 Troubleshooting

### Contact Form Issues
- Check cPanel logs for email attempts
- Verify `.env` file is uploaded
- Ensure Gmail app password is correct

### App Won't Start
- Verify `server.js` is set as startup file
- Check all dependencies are installed
- Ensure `dist/` folder exists

## ✅ Clean Project State

Removed unused files:
- ❌ `package-react.json`
- ❌ `postcss.config.react.js`
- ❌ `server-react.js`
- ❌ `emailService.js`
- ❌ Old deployment guides
- ❌ `.env.production`

Only essential files remain for clean deployment.
