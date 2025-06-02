
#!/bin/bash

# Enhanced Build script for Vishal Decor & Event Website - Shared Hosting Deployment

echo "🚀 Building Vishal Decor & Event Website for shared hosting deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project for production..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed! Please check for errors."
    exit 1
fi

# Copy necessary files to dist
echo "📄 Copying deployment files..."
cp public/.htaccess dist/
cp public/check-installation.html dist/

# Create deployment package
echo "📦 Creating deployment package..."
cd dist
zip -r ../vishal-decor-deployment.zip .
cd ..

# Create complete installation package
echo "📦 Creating complete installation package..."
zip -r vishal-decor-complete-package.zip dist INSTALLATION.md build.sh build.bat

echo "✅ Build complete!"
echo ""
echo "📁 Files created:"
echo "   • dist/ - Production files ready for upload"
echo "   • vishal-decor-deployment.zip - Zip file for easy upload"
echo "   • vishal-decor-complete-package.zip - Complete package with documentation"
echo ""
echo "🌐 Next steps for cPanel hosting:"
echo "   1. Download vishal-decor-deployment.zip"
echo "   2. Login to your cPanel"
echo "   3. Go to File Manager"
echo "   4. Navigate to public_html"
echo "   5. Upload and extract the zip file"
echo "   6. Visit your domain to see the website"
echo "   7. Visit yourdomain.com/admin for admin panel"
echo ""
echo "📄 Please read INSTALLATION.md for detailed instructions"
