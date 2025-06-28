#!/bin/bash

# cPanel deployment script for Node.js 16.20.2

echo "Starting cPanel deployment..."

# Set Node.js version
source ~/.nvm/nvm.sh
nvm use 16.20.2

# Install dependencies
echo "Installing dependencies..."
npm install --production=false

# Build the application
echo "Building application..."
npm run build

# Start the application
echo "Starting application..."
npm start

echo "Deployment complete!"
