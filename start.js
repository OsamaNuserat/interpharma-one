// Wrapper script for cPanel deployment - Debug version
// This ensures NODE_ENV is set to production before starting the Next.js server

process.env.NODE_ENV = 'production';

// Add error handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

console.log('Starting Next.js application...');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('API_BASE_URL:', process.env.API_BASE_URL);

require('./server.js');
