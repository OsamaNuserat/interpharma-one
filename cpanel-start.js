#!/usr/bin/env node

// Simple startup script for cPanel
const { spawn } = require('child_process');

console.log('Starting InterPharma application...');

// Run npm start
const child = spawn('npm', ['start'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'production'
  }
});

child.on('error', (err) => {
  console.error('Failed to start application:', err);
  process.exit(1);
});

child.on('close', (code) => {
  console.log(`Application exited with code ${code}`);
  process.exit(code);
});
