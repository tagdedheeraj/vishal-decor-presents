
#!/bin/bash

# Build script for Vishal Decor & Event Website

echo "🚀 Building Vishal Decor & Event Website for production..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Create installation package
echo "📦 Creating installation package..."
cd dist
cp ../public/.htaccess .
cd ..
zip -r vishal-decor-installation.zip dist INSTALLATION.md

echo "✅ Build complete! The installation package is ready: vishal-decor-installation.zip"
echo "📄 Please read INSTALLATION.md for deployment instructions"
