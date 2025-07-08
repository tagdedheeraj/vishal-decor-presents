
# Vishal Decor & Event Installation Guide

This guide will help you install your Vishal Decor website on shared hosting.

## Prerequisites

- Access to your shared hosting control panel (cPanel, Plesk, etc.)
- FTP access or File Manager access in your hosting control panel
- A domain or subdomain pointing to your hosting account

## Installation Steps

### 1. Upload Files

1. Download the `dist.zip` file from this package and extract it on your computer
2. Upload all files and folders from the extracted `dist` folder to your hosting:
   - If you want to install in the root directory (e.g., `yourdomain.com`), upload to the `public_html` folder
   - If you want to install in a subdirectory (e.g., `yourdomain.com/vishaldecor`), create that folder and upload there

### 2. Configure .htaccess

The `.htaccess` file is already included in the upload. It handles URL rewrites needed for React Router to work properly.
If you're installing in a subdirectory, you may need to edit the .htaccess file to specify the subdirectory.

### 3. Testing Your Installation

1. Open your browser and navigate to your domain (or subdirectory if installed there)
2. You should see the Vishal Decor homepage with the image slider
3. Test navigation by clicking on different menu items

### Troubleshooting

If you encounter any issues:

1. **404 Page Not Found errors**: Make sure the .htaccess file was uploaded and your server supports URL rewriting
2. **Missing images or styles**: Check that all files from the dist folder were uploaded completely
3. **Server errors**: Check your hosting error logs for specific details

## Support

If you need further assistance, please contact your web developer or hosting provider.
