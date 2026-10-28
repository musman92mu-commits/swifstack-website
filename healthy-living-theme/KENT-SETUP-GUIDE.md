# Healthy Living International — WordPress Setup Guide
**For Kent Hinkson · Prepared by Healthy Living Dev Team**

---

## What Has Been Built

A complete custom WordPress theme that:
- Matches your Forest & Harvest brand design exactly
- Uses WooCommerce for the store, cart, and checkout
- Supports guest checkout (no forced account creation)
- Auto-processes payments in real time (no more manual ProPay entry)
- Works on mobile, tablet, and desktop
- Is fully yours — hosted on your own server, no monthly platform fees

---

## Files in This Theme Folder

```
healthy-living-theme/
├── style.css              ← All design styles (Forest & Harvest colors)
├── functions.php          ← Theme settings and WooCommerce configuration
├── header.php             ← Navigation bar (appears on every page)
├── footer.php             ← Footer (appears on every page)
├── front-page.php         ← Homepage
├── index.php              ← Fallback template
├── page-about.php         ← About Us page
├── page-coaching.php      ← Health Coaching / Consultation page
├── woocommerce/
│   ├── archive-product.php   ← Products listing page (your shop)
│   └── single-product.php    ← Individual product page
└── assets/js/main.js      ← Mobile nav and cart notifications
```

---

## How to Install on WordPress

### Step 1 — Install WordPress
- Download WordPress from wordpress.org
- Upload to your server via cPanel File Manager or FTP
- Run the WordPress installer (creates your database)

### Step 2 — Install WooCommerce
- In WordPress Dashboard → Plugins → Add New
- Search: WooCommerce
- Install and Activate
- Run the WooCommerce Setup Wizard

### Step 3 — Install This Theme
- Zip this entire `healthy-living-theme` folder
- WordPress Dashboard → Appearance → Themes → Add New → Upload Theme
- Upload the zip file and click Activate

### Step 4 — Configure WooCommerce Settings

**Payments:**
- WooCommerce → Settings → Payments
- Enable Stripe (credit cards — recommended) or your payment processor
- Guest checkout is already enabled in the theme

**Shipping:**
- WooCommerce → Settings → Shipping
- Add zones: United States, Canada, Australia, Singapore, France
- International shipping rates can be entered per zone

**Checkout:**
- Guest checkout = already ON (customers do not need an account)
- Account creation after purchase = optional (not forced)

### Step 5 — Add Your Pages
In WordPress Dashboard → Pages → Add New, create these pages:
| Page Title | Page Template |
|---|---|
| Home | Front Page (set in Settings → Reading) |
| About | Default (uses page-about.php automatically) |
| Coaching | Default (uses page-coaching.php automatically) |

### Step 6 — Add Your Products
- WooCommerce → Products → Add New
- Add product name, description, price, category, image
- Categories to create: Energy, Digestive, Immune, Anti-Aging, Detoxification, Brain, Cardiovascular, Sleep, Blood Sugar, Joints, Skin, Weight Loss, Minerals, Eyes, Gut, Anti-Parasites

---

## How Checkout Works Now (vs Before)

| Before (Manual) | Now (Automated) |
|---|---|
| Customer submits order | Customer submits order |
| Card stored in database | Card processed immediately via Stripe |
| Kent manually enters card into ProPay | Payment confirmed instantly |
| Kent records transaction number | Order automatically confirmed |
| Kent ships and enters tracking | Kent ships and enters tracking |
| Order marked complete manually | Order marked complete (can be automated) |

**Duplicate order protection:** WooCommerce prevents duplicate submissions automatically — the submit button disables after the first click.

---

## How to Manage Your Store Day-to-Day

**View orders:** WooCommerce → Orders  
**Add a product:** WooCommerce → Products → Add New  
**See revenue:** WooCommerce → Reports  
**Update prices:** WooCommerce → Products → click the product → change price  
**Edit homepage text:** Pages → Home → Edit  
**Edit About page:** Pages → About → Edit  

---

## Contact for Support

If you need help with the website after handoff, all code is documented and a new developer can pick it up from this guide.

For WordPress/WooCommerce questions: wordpress.org/support  
For Stripe (payments): support.stripe.com

---

*Theme Version 1.0 · Built October 2026*
