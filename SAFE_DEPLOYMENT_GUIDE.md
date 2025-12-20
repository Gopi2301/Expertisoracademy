# Safe Deployment Guide - Zero Downtime Strategy

## Overview

This guide ensures your **live website remains untouched** while you set up and test the new CMS system on Yash Host.

---

## Strategy: Subdomain Staging Environment

We'll deploy the CMS to a **staging subdomain** (e.g., `staging.yourdomain.com` or `cms-test.yourdomain.com`) first, test everything, then migrate to production.

---

## Step 1: Create Staging Subdomain (via cPanel)

### 1.1 Add Subdomain

1. Login to **Yash Host cPanel**
2. Go to **Domains** > **Subdomains**
3. Create new subdomain:
   - **Subdomain**: `staging` (or `cms-test`)
   - **Document Root**: `public_html/staging`
   - Click **Create**

This creates a completely separate directory that won't affect your live site.

### 1.2 Verify Subdomain

- Visit `http://staging.yourdomain.com`
- Should show empty directory or default page
- Your live site at `yourdomain.com` remains unchanged

---

## Step 2: Create Separate Database for Staging

### 2.1 Create Staging Database

1. Go to cPanel > **MySQL® Databases**
2. Create new database:
   - Name: `staging_cms` (or similar)
   - Click **Create Database**
3. Create new user:
   - Username: `staging_user`
   - Password: Generate strong password
   - Click **Create User**
4. Add user to database:
   - Select user and database
   - Grant **ALL PRIVILEGES**
   - Click **Make Changes**

**Important**: This is a separate database from your live site, so zero risk!

---

## Step 3: Deploy to Staging

### 3.1 Build for Staging

Update `.env` for staging:

```env
VITE_API_URL=https://staging.yourdomain.com/api
VITE_SITE_URL=https://staging.yourdomain.com
```

Build the project:

```bash
npm run build
```

### 3.2 Upload to Staging Directory

**Option A: Via SSH (Recommended)**

```bash
# Navigate to deploy package
cd deploy_package

# Upload to staging subdomain
scp -r * username@yourdomain.com:~/public_html/staging/
```

**Option B: Via cPanel File Manager**

1. Go to **File Manager**
2. Navigate to `public_html/staging/`
3. Upload all files from `deploy_package/`

**Option C: Via FTP**

- Connect to FTP
- Navigate to `/public_html/staging/`
- Upload all files

### 3.3 Configure Staging Database

Edit `public_html/staging/api/config.php`:

```php
// Staging database credentials
define('DB_HOST', 'localhost');
define('DB_NAME', 'staging_cms');  // Your staging database
define('DB_USER', 'staging_user');  // Your staging user
define('DB_PASS', 'your_staging_password');

// Generate a unique JWT secret for staging
define('JWT_SECRET', 'staging_secret_change_this_to_random_string_32_chars');

// Update allowed origins
$allowedOrigins = [
    'http://localhost:5173',
    'https://staging.yourdomain.com',
    'https://yourdomain.com'  // For future migration
];
```

### 3.4 Import Database Schema

1. Go to cPanel > **phpMyAdmin**
2. Select `staging_cms` database
3. Click **Import** tab
4. Upload `public_html/staging/api/schema.sql`
5. Click **Go**

---

## Step 4: Test on Staging

### 4.1 Access Staging CMS

Visit: `https://staging.yourdomain.com/cms/login`

Login with:
- Username: `admin`
- Password: `admin123`

### 4.2 Test All Features

- [ ] Login/logout works
- [ ] Create a template
- [ ] Edit the template
- [ ] Publish the template
- [ ] View published template at `/landing/{slug}`
- [ ] Create a course
- [ ] Edit course details
- [ ] Publish course
- [ ] View course on public page
- [ ] Test categories CRUD
- [ ] Test all API endpoints

### 4.3 Verify Live Site Unaffected

- Visit your live site: `https://yourdomain.com`
- Should work exactly as before
- No changes, no downtime

---

## Step 5: Migrate to Production (When Ready)

### Option A: Gradual Migration (Recommended)

Keep both systems running:

1. **Live site stays at**: `yourdomain.com`
2. **CMS stays at**: `staging.yourdomain.com/cms`
3. **API stays at**: `staging.yourdomain.com/api`

Update your live site to fetch data from staging API:

```javascript
// In your live site code
const API_URL = 'https://staging.yourdomain.com/api';
```

Benefits:
- Zero downtime
- Live site continues working
- CMS is separate and secure
- Easy rollback if needed

### Option B: Full Migration (Later)

When you're 100% confident:

1. **Backup everything**:
   ```bash
   # Backup live site
   cd ~/public_html
   tar -czf backup-live-$(date +%Y%m%d).tar.gz *
   ```

2. **Move staging to production**:
   ```bash
   # Backup current live site
   mv public_html public_html_backup
   
   # Move staging to live
   mv public_html/staging public_html
   ```

3. **Update database config** to use production database

4. **Test thoroughly**

5. **If issues occur**, restore backup:
   ```bash
   mv public_html public_html_failed
   mv public_html_backup public_html
   ```

---

## Step 6: Ongoing Development Workflow

### Development → Staging → Production

```
┌─────────────┐      ┌──────────────┐      ┌────────────┐
│   Local     │ ───> │   Staging    │ ───> │ Production │
│ localhost   │      │ staging.com  │      │ yourdomain │
└─────────────┘      └──────────────┘      └────────────┘
    Test here         Test here             Live users
```

**Workflow**:
1. Develop locally (`npm run dev`)
2. Test at `localhost:5173`
3. Deploy to staging
4. Test on staging subdomain
5. When stable, deploy to production
6. Live site gets updates

---

## Current State Protection Checklist

Before making ANY changes to live site:

- [ ] Live site is at `yourdomain.com` (untouched)
- [ ] Staging is at `staging.yourdomain.com` (new)
- [ ] Separate databases (live vs staging)
- [ ] Separate file directories
- [ ] Can access both simultaneously
- [ ] Staging changes don't affect live
- [ ] Have backup of live site

---

## Recommended Next Steps (Safe Order)

### Phase 1: Setup Staging (Today)

1. ✅ Create staging subdomain
2. ✅ Create staging database
3. ✅ Deploy to staging
4. ✅ Test CMS on staging
5. ✅ Verify live site unchanged

**Time**: 30-60 minutes  
**Risk**: Zero (separate environment)

### Phase 2: Integrate with Live Site (This Week)

1. Update live site to fetch courses from staging API
2. Test that live site displays CMS-managed content
3. Keep both systems running in parallel
4. Monitor for issues

**Time**: 1-2 hours  
**Risk**: Low (can rollback easily)

### Phase 3: Full Migration (When Confident)

1. Backup everything
2. Migrate staging to production
3. Update DNS if needed
4. Monitor closely

**Time**: 2-3 hours  
**Risk**: Medium (have backups)

---

## Emergency Rollback Plan

If anything goes wrong:

### Rollback Staging

```bash
# Delete staging subdomain
rm -rf ~/public_html/staging

# Drop staging database
# Via phpMyAdmin: Drop database 'staging_cms'
```

Live site remains unaffected!

### Rollback Production (if you migrated)

```bash
# Restore from backup
cd ~
tar -xzf backup-live-YYYYMMDD.tar.gz -C public_html/
```

---

## What NOT to Do

❌ **Don't** upload directly to `public_html/` (your live site)  
❌ **Don't** modify your live database  
❌ **Don't** delete anything from live site  
❌ **Don't** test on production first  
❌ **Don't** skip backups  

✅ **Do** use staging subdomain  
✅ **Do** use separate database  
✅ **Do** test thoroughly on staging  
✅ **Do** keep backups  
✅ **Do** migrate gradually  

---

## Summary

**Safe Deployment Path**:

```
1. Create staging.yourdomain.com ← START HERE
2. Deploy CMS to staging
3. Test everything on staging
4. Live site remains untouched
5. When ready, integrate or migrate
```

**Your live website is 100% safe** because:
- Staging is a separate subdomain
- Staging uses a separate database
- Staging files are in a separate directory
- No changes to live site files
- No changes to live database
- Can delete staging anytime without affecting live

---

## Quick Start Commands

```bash
# 1. Build for staging
npm run build

# 2. Create staging package
./deploy.sh

# 3. Upload to staging (via SSH)
cd deploy_package
scp -r * username@yourdomain.com:~/public_html/staging/

# 4. Test staging
# Visit: https://staging.yourdomain.com/cms/login
```

**Your live site at `yourdomain.com` remains completely untouched!** 🎉
