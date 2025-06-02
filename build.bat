
@echo off
echo 🚀 Building Vishal Decor & Event Website for shared hosting deployment...

rem Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

rem Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

rem Install dependencies
echo 📦 Installing dependencies...
call npm install

rem Build the project
echo 🔨 Building project for production...
call npm run build

rem Check if build was successful
if not exist "dist" (
    echo ❌ Build failed! Please check for errors.
    pause
    exit /b 1
)

rem Copy necessary files
echo 📄 Copying deployment files...
copy public\.htaccess dist\.htaccess
copy public\check-installation.html dist\check-installation.html

rem Create deployment package (requires 7-Zip or WinRAR)
echo 📦 Creating deployment package...
cd dist
if exist "C:\Program Files\7-Zip\7z.exe" (
    "C:\Program Files\7-Zip\7z.exe" a -tzip ..\vishal-decor-deployment.zip *
) else if exist "C:\Program Files\WinRAR\WinRAR.exe" (
    "C:\Program Files\WinRAR\WinRAR.exe" a -afzip ..\vishal-decor-deployment.zip *
) else (
    echo ⚠️ 7-Zip or WinRAR not found. Please manually zip the dist folder contents.
)
cd ..

rem Create complete package
if exist "C:\Program Files\7-Zip\7z.exe" (
    "C:\Program Files\7-Zip\7z.exe" a -tzip vishal-decor-complete-package.zip dist INSTALLATION.md build.sh build.bat
) else if exist "C:\Program Files\WinRAR\WinRAR.exe" (
    "C:\Program Files\WinRAR\WinRAR.exe" a -afzip vishal-decor-complete-package.zip dist INSTALLATION.md build.sh build.bat
)

echo ✅ Build complete!
echo.
echo 📁 Files created:
echo    • dist\ - Production files ready for upload
echo    • vishal-decor-deployment.zip - Zip file for easy upload
echo    • vishal-decor-complete-package.zip - Complete package with documentation
echo.
echo 🌐 Next steps for cPanel hosting:
echo    1. Download vishal-decor-deployment.zip
echo    2. Login to your cPanel
echo    3. Go to File Manager
echo    4. Navigate to public_html
echo    5. Upload and extract the zip file
echo    6. Visit your domain to see the website
echo    7. Visit yourdomain.com/admin for admin panel
echo.
echo 📄 Please read INSTALLATION.md for detailed instructions
pause
