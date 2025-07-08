
@echo off
echo 🚀 Building Vishal Decor & Event Website for production...

rem Install dependencies
echo 📦 Installing dependencies...
call npm install

rem Build the project
echo 🔨 Building project...
call npm run build

rem Copy htaccess file
echo 📄 Copying .htaccess file...
copy public\.htaccess dist\.htaccess

rem Create installation package (requires 7-Zip or similar)
echo 📦 Creating installation package...
if exist "C:\Program Files\7-Zip\7z.exe" (
  "C:\Program Files\7-Zip\7z.exe" a -tzip vishal-decor-installation.zip dist INSTALLATION.md
  echo ✅ Build complete! The installation package is ready: vishal-decor-installation.zip
  echo 📄 Please read INSTALLATION.md for deployment instructions
) else (
  echo ⚠️ 7-Zip not found. Please install 7-Zip or manually zip the dist folder and INSTALLATION.md
  echo ✅ Build is complete. Please manually create a zip file containing the dist folder and INSTALLATION.md
)
