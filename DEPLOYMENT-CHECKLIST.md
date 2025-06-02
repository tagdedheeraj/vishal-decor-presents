
# 📋 Deployment Checklist for Vishal Decor Website

Use this checklist to ensure a smooth deployment to your shared hosting.

## 🏗️ Pre-Deployment

### Local Build Process
- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Run `npm run build` to create production build
- [ ] Verify `dist` folder is created successfully
- [ ] Run build script (`build.sh` or `build.bat`) to create deployment package
- [ ] Verify `vishal-decor-deployment.zip` is created

### Files Verification
- [ ] `.htaccess` file is included in deployment package
- [ ] `check-installation.html` is included
- [ ] All asset files are present in assets folder
- [ ] All image files are present in lovable-uploads folder

## 🌐 Hosting Setup

### cPanel Access
- [ ] cPanel login credentials are available
- [ ] Domain is pointing to hosting account
- [ ] DNS propagation is complete (24-48 hours after domain setup)

### File Upload
- [ ] Access cPanel File Manager
- [ ] Navigate to correct directory (public_html for main domain)
- [ ] Upload `vishal-decor-deployment.zip`
- [ ] Extract zip file to current directory
- [ ] Delete zip file after extraction
- [ ] Verify all files are extracted properly

## ✅ Post-Deployment Testing

### Basic Website Tests
- [ ] Homepage loads without errors
- [ ] All navigation links work correctly
- [ ] About page displays properly
- [ ] Services pages load correctly
- [ ] Gallery images display properly
- [ ] Contact page is functional
- [ ] 404 page works for invalid URLs

### Admin Panel Tests
- [ ] Admin panel accessible at `/admin`
- [ ] Login with credentials (aadi / Socilet@123)
- [ ] Firebase connection shows status
- [ ] Maintenance mode toggle works
- [ ] Admin logout functions properly

### Mobile Responsiveness
- [ ] Website displays correctly on mobile devices
- [ ] Navigation menu works on mobile
- [ ] Images scale properly on small screens
- [ ] Touch interactions work smoothly

### Performance Tests
- [ ] Page load times are acceptable (under 3 seconds)
- [ ] Images load quickly
- [ ] No console errors in browser developer tools
- [ ] WhatsApp popup appears and functions

## 🔧 Technical Verification

### URL Rewriting
- [ ] Direct page URLs work (e.g., /about, /services)
- [ ] No 404 errors on page refresh
- [ ] Back/forward browser buttons work correctly

### Firebase Integration
- [ ] Firebase connection test passes in admin panel
- [ ] No Firebase-related errors in console
- [ ] Admin authentication persists across sessions

### Security Checks
- [ ] Admin panel requires proper authentication
- [ ] Maintenance mode works as expected
- [ ] No sensitive information exposed in source code

## 📱 Cross-Browser Testing

### Desktop Browsers
- [ ] Chrome (latest version)
- [ ] Firefox (latest version)
- [ ] Safari (if available)
- [ ] Edge (latest version)

### Mobile Browsers
- [ ] Chrome Mobile
- [ ] Safari Mobile (iOS)
- [ ] Samsung Internet (Android)

## 🔍 Final Verification

### Installation Checker
- [ ] Visit `/check-installation.html`
- [ ] All checks pass successfully
- [ ] No warnings or errors displayed

### SEO and Meta Tags
- [ ] Page titles display correctly in browser tabs
- [ ] Meta descriptions are present
- [ ] Favicon displays correctly

### Content Verification
- [ ] All images display properly
- [ ] Text content is readable and formatted correctly
- [ ] Contact information is accurate
- [ ] WhatsApp number is correct and functional

## 📋 Launch Checklist

### Pre-Launch
- [ ] All tests above completed successfully
- [ ] Backup of website files created
- [ ] SSL certificate installed (if available)
- [ ] Analytics tracking set up (if required)

### Launch Day
- [ ] Final smoke test of all functionality
- [ ] Monitor website for first few hours
- [ ] Test from different locations/networks
- [ ] Verify social media links work

### Post-Launch
- [ ] Set up monitoring for uptime
- [ ] Schedule regular backups
- [ ] Document any custom configurations
- [ ] Create maintenance schedule

## 🚨 Emergency Contacts

### Technical Support
- **Hosting Provider Support**: [Your hosting provider's contact]
- **Domain Registrar**: [Your domain registrar's contact]
- **Developer/Technical Contact**: [Your technical contact]

### Backup Plan
- [ ] Know how to restore from backup
- [ ] Have emergency contact for technical issues
- [ ] Understand basic troubleshooting steps

## 📝 Notes Section

**Hosting Provider**: _______________
**Domain Name**: _______________
**Deployment Date**: _______________
**SSL Certificate**: _______________
**Backup Schedule**: _______________

**Additional Notes**:
_________________________________
_________________________________
_________________________________

---

**✅ Deployment Complete!** 

Once all items are checked off, your Vishal Decor website is successfully deployed and ready for visitors!
