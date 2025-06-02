
# Vishal Decor & Event Website - cPanel Shared Hosting Installation Guide

This comprehensive guide will help you deploy your Vishal Decor website on shared hosting using cPanel.

## 📋 Prerequisites

- Shared hosting account with cPanel access
- Domain or subdomain pointing to your hosting account
- FTP access or File Manager access in cPanel
- The deployment files (vishal-decor-deployment.zip)

## 🚀 Quick Installation Steps

### Step 1: Prepare Your Files
1. Run `build.sh` (Linux/Mac) or `build.bat` (Windows) to create deployment files
2. This will create `vishal-decor-deployment.zip` containing all necessary files

### Step 2: Access cPanel
1. Login to your hosting provider's cPanel
2. Look for "File Manager" in the Files section
3. Click on File Manager

### Step 3: Navigate to Website Directory
- **For main domain**: Navigate to `public_html` folder
- **For subdomain**: Navigate to `public_html/subdomain-name` folder
- **For addon domain**: Navigate to the folder assigned to your addon domain

### Step 4: Upload Files
1. Click "Upload" button in File Manager
2. Select `vishal-decor-deployment.zip`
3. Wait for upload to complete
4. Go back to File Manager

### Step 5: Extract Files
1. Right-click on `vishal-decor-deployment.zip`
2. Select "Extract"
3. Choose "Extract Files" (extract to current directory)
4. Delete the zip file after extraction

### Step 6: Verify Installation
1. Visit your domain in a browser
2. You should see the Vishal Decor homepage
3. Test navigation between different pages
4. Visit `yourdomain.com/admin` to access admin panel
5. Visit `yourdomain.com/check-installation.html` to run installation checker

## 🔧 Configuration

### Admin Panel Access
- **URL**: `yourdomain.com/admin`
- **Username**: `aadi`
- **Password**: `Socilet@123`

### Firebase Connection
- Firebase is pre-configured and will work automatically
- No additional server setup required
- Test Firebase connection in admin panel

### Maintenance Mode
- Can be toggled from admin panel
- Shows custom message: "वेबसाइट को वापस लाइव करने के लिए due amount clear करिये"

## 📱 Testing Your Installation

### 1. Basic Functionality Test
- [ ] Homepage loads correctly
- [ ] Navigation menu works
- [ ] All pages are accessible
- [ ] Images load properly
- [ ] Contact form works

### 2. Admin Panel Test
- [ ] Admin login works
- [ ] Maintenance mode toggle functions
- [ ] Firebase connection shows as connected

### 3. Mobile Responsiveness Test
- [ ] Website looks good on mobile devices
- [ ] Navigation menu works on mobile
- [ ] Images scale properly

## 🔍 Troubleshooting

### Common Issues and Solutions

#### 1. 404 Errors on Page Navigation
**Problem**: Getting 404 errors when navigating to different pages
**Solution**: 
- Ensure `.htaccess` file is uploaded and in the root directory
- Check if your hosting supports URL rewriting
- Contact hosting provider if issue persists

#### 2. Images Not Loading
**Problem**: Images show as broken links
**Solution**:
- Verify all files from `dist` folder were uploaded
- Check file permissions (should be 644 for files, 755 for folders)
- Ensure proper folder structure is maintained

#### 3. Admin Panel Not Working
**Problem**: Cannot access admin panel or login fails
**Solution**:
- Verify admin route is working: `yourdomain.com/admin`
- Check browser console for JavaScript errors
- Clear browser cache and try again

#### 4. Maintenance Mode Issues
**Problem**: Maintenance mode not working properly
**Solution**:
- Clear browser localStorage
- Test from different browser or incognito mode
- Check admin panel for proper toggle functionality

#### 5. Firebase Connection Issues
**Problem**: Firebase shows as disconnected
**Solution**:
- This is normal - Firebase will work when needed
- No server-side configuration required
- Test specific features that use Firebase

## 📋 File Structure After Installation

```
public_html/
├── assets/           # CSS, JS, and other assets
├── lovable-uploads/  # Image files
├── .htaccess        # URL rewriting rules
├── index.html       # Main application file
├── check-installation.html  # Installation checker
└── other files...
```

## 🔐 Security Considerations

### 1. Admin Panel Security
- Change admin credentials after first login
- Use strong passwords
- Limit admin panel access to trusted IPs if possible

### 2. File Permissions
- Files: 644
- Directories: 755
- Never set permissions to 777

### 3. SSL Certificate
- Install SSL certificate for HTTPS
- Most hosting providers offer free SSL
- Force HTTPS redirection in cPanel if available

## 🚀 Performance Optimization

### 1. Enable Compression
- Most hosting providers enable Gzip automatically
- Check with your hosting provider for optimization options

### 2. Cache Configuration
- Browser caching is configured in `.htaccess`
- Consider CloudFlare for additional caching

### 3. Image Optimization
- Images are already optimized for web
- Consider WebP format for better compression

## 📞 Support

### If You Need Help:
1. Check this guide thoroughly
2. Run the installation checker: `yourdomain.com/check-installation.html`
3. Contact your hosting provider for server-specific issues
4. Check browser console for JavaScript errors

### Hosting Provider Checklist:
- [ ] PHP support (not required but good to have)
- [ ] URL rewriting support (.htaccess)
- [ ] SSL certificate availability
- [ ] Sufficient disk space (minimum 100MB)
- [ ] Regular backups

## 🎉 Congratulations!

If you've followed this guide, your Vishal Decor & Event website should now be live on your shared hosting! 

Remember to:
- Test all functionality thoroughly
- Set up regular backups
- Monitor website performance
- Keep admin credentials secure

Your website is now ready to showcase your event decoration services to the world! 🌟
