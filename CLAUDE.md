# Website Intelligence Brief — healthy-living.org

**Prepared for:** Call with Kent Hinkson, Owner  
**Entity:** Healthy Living International, LLC  
**Location:** Orem, Utah 84097 | **Founded:** 2002  
**Phone:** 800-704-0986 | **Local:** 801-331-5260  
**Email:** info@healthy-living.org | orders@healthy-living.org

---

## Site Overview

- **Site Type:** Custom PHP ecommerce (hand-built since 2002, no CMS)
- **Hosting:** cPanel shared hosting, PHP backend
- **CDN/Security:** Cloudflare
- **Analytics:** Google Analytics 4 via Google Tag Manager (ID: G-RC32Q8V516)
- **Cart:** Custom-built PHP, credit cards only (no PayPal/Apple Pay)
- **Search:** AddSearch.com (third-party)
- **Products:** 55+ SKUs across 16 categories, price range $13–$1,495, avg ~$45
- **Markets:** US, Canada, Australia, Singapore, France (ships globally except UK)

## Brand Philosophy (CRITICAL)

- Kent's brand explicitly markets **"Real human support — no automated systems"** on the homepage
- Built on Dr. William R. Kellas's principle: *"The key to health is eliminating toxicities and deficiencies"*
- Business model: **trust-building through education → purchase** (not impulse buying)
- Customers treated as long-term relationships; loyalty spans 3–19 years
- **When pitching AI: frame as amplification, not replacement**

## Product Catalog

16 categories: Anti-Aging, Anti-Parasites, Blood Sugar, Brain, Cardiovascular, Detoxification, Digestive, Energy, Eyes, Gut, Immune, Joints, Minerals, Skin, Sleep, Weight Loss

### Key Products
| Product | Price | Notes |
|---|---|---|
| E7 — Seven Essentials | $59.95 | Flagship food powder, 5 flavors |
| Ricotriene | $57.95 | Stabilized rice bran |
| Paragon (anti-parasite) | $69.00 | 25-herb, 180 caps |
| Cleanzym | $49.95 | Dr. Kellas's "most important" supplement |
| CoQ10 400mg | $64.25 | Premium potency |
| PXP Forte/Royale | $199.95 | High-end energy/healing |
| Eight Day Cleanse (bundle) | $199.95 | Kit: E7, enzymes, parasite, silver, pH strips |
| Relax FIR Sauna | $1,495.00 | Highest-ticket item |
| Silver Biotics | $10–$55 | 12 variants (sprays, gels, lozenges) |

## Technology Stack

- Backend: PHP, cPanel shared hosting
- Frontend: Vanilla HTML + jQuery (ProjectSeven plugin suite — legacy, mid-2000s)
- No modern API layer, no webhooks, no event-driven architecture
- **Implication:** Any AI integration must be a front-end widget/embed — NOT a backend integration

## Risks & Flags

### Critical
- **Active PHP Bug in Checkout:** `Warning: A non-numeric value encountered in new_checkout.php on line 2030` — visible to customers
- **"No Automated Systems" brand position:** Must frame AI as augmentation, not replacement

### Important
- **Health Claim Compliance Risk:** Product descriptions mention specific conditions (MS, arthritis, Alzheimer's, blood sugar) — FDA disclaimer present but FTC compliance questionable. AI must not compound this.
- **No Email Automation / CRM detected** — repeat revenue fragile, dependent on customers self-initiating
- **No retargeting infrastructure** — no Facebook Pixel, no Google Ads tag; paid ads attribution likely broken
- **International Support Gap** — customers in 8–17 time zones, sole-operator manual support (12–24+ hr response)
- **Copyright inconsistency** — Products page says "2002–2019", About Us says "2002–2026" (products page untouched since 2019)

## AI Opportunity Signals

1. **Product Selection Triage** — 55+ SKUs, customers need symptom-to-product matching; currently falls on Kent personally
2. **After-Hours International Coverage** — Customers in Singapore, AU, France while Kent sleeps in Utah
3. **Health Coaching Pre-Qualification** — AI intake before calls saves Kent's time
4. **Cart Abandonment Recovery** — Active bug + no recovery mechanism = revenue leak
5. **Repeat Customer Retention** — Long-term customers, no drip sequences
6. **Low Integration Complexity** — No existing chat, no CRM; AI widget sits on top with zero backend changes

## Call Framing Note

> Kent's brand says "no automated systems" — lead with **amplification, not replacement**.  
> The AI handles routine questions interrupting Kent's day, so his personal attention goes to customers who genuinely need it.  
> Brand promise stays intact: every person who reaches Kent gets a human. The AI ensures they only reach him when they need him.

## Contact & Social
- Facebook: Healthy-Livingorg-133401606684266
- Instagram: @healthy.for.a.lifetime
- External supplier: aseaglobal.com (redox signaling molecules)
