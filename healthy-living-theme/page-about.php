<?php get_header(); ?>

<!-- PAGE HERO -->
<div class="page-hero">
  <div class="page-hero-inner">
    <div class="eyebrow" style="color:var(--sage-light)">Our Story</div>
    <h1 class="page-title">About Healthy Living International</h1>
    <p class="page-subtitle">Built on science. Driven by care. Since 2002.</p>
  </div>
</div>

<div class="container">
  <!-- KENT INTRO -->
  <div class="about-hero">
    <div>
      <h2 class="about-title">A mission built on eliminating toxicities and deficiencies</h2>
      <p class="about-body">Healthy Living International was founded in 2002 by Kent Hinkson, inspired by the life's work of Dr. William R. Kellas. Kent built this company on one principle: that the body can heal itself when given the right tools — real nutrition without synthetic fillers, and the removal of the toxins that block your health.</p>
      <blockquote class="about-quote">"The key to health is eliminating toxicities and deficiencies." — Dr. William R. Kellas</blockquote>
      <p class="about-body">For over 22 years, Healthy Living International has served customers across the US, Canada, Australia, Singapore, and France. Many customers have been with us for 8–19 years — not because of marketing, but because the products work and because Kent is always there when you need him.</p>
      <p class="about-body">Kent personally handles customer questions, product recommendations, and orders. There are no automated phone systems here — when you call 800-704-0986, you reach a real person who knows these products inside and out.</p>
      <div style="margin-top:32px;display:flex;gap:14px;flex-wrap:wrap">
        <a href="<?php echo esc_url( get_permalink( wc_get_page_id( 'shop' ) ) ); ?>" class="btn btn-primary">Shop Our Products</a>
        <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'coaching' ) ) ); ?>" class="btn btn-outline">Talk to Kent</a>
      </div>
    </div>
    <div>
      <div class="kent-card">
        <div class="kent-img">👤</div>
        <div class="kent-body">
          <div class="kent-name">Kent Hinkson</div>
          <div class="kent-role">Founder &amp; Owner · Healthy Living International</div>
          <div class="kent-contact">
            <div class="kent-contact-item"><strong>Toll Free:</strong> 800-704-0986</div>
            <div class="kent-contact-item"><strong>Local:</strong> 801-331-5260</div>
            <div class="kent-contact-item"><strong>Email:</strong> info@healthy-living.org</div>
            <div class="kent-contact-item"><strong>Location:</strong> Orem, Utah 84097</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- PHILOSOPHY BAND -->
<div class="philosophy">
  <div class="container">
    <div class="eyebrow" style="color:var(--gold-light)">Our Founding Principle</div>
    <blockquote class="phil-quote">"The key to health is eliminating toxicities and deficiencies."</blockquote>
    <div class="phil-attr">— Dr. William R. Kellas, Founder</div>
    <div>
      <span class="habit-chip">Eliminate Toxicities</span>
      <span class="habit-chip">Restore Nutrients</span>
      <span class="habit-chip">Support Detox</span>
      <span class="habit-chip">Strengthen Immunity</span>
      <span class="habit-chip">Boost Energy</span>
      <span class="habit-chip">Improve Digestion</span>
    </div>
  </div>
</div>

<!-- STATS -->
<section class="section" style="padding: 64px 16px; background: var(--surface);">
  <div class="container">
    <div class="eyebrow">By the Numbers</div>
    <h2 class="section-heading" style="margin-bottom:48px">22 years of real results</h2>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;">
      <div style="background:var(--white);border:1px solid var(--border);border-radius:16px;padding:28px;text-align:center">
        <div style="font-family:'Lora',serif;font-size:40px;font-weight:600;color:var(--green);line-height:1">2002</div>
        <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-top:8px">Founded</div>
      </div>
      <div style="background:var(--white);border:1px solid var(--border);border-radius:16px;padding:28px;text-align:center">
        <div style="font-family:'Lora',serif;font-size:40px;font-weight:600;color:var(--green);line-height:1">55+</div>
        <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-top:8px">Products</div>
      </div>
      <div style="background:var(--white);border:1px solid var(--border);border-radius:16px;padding:28px;text-align:center">
        <div style="font-family:'Lora',serif;font-size:40px;font-weight:600;color:var(--green);line-height:1">7</div>
        <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-top:8px">Countries</div>
      </div>
      <div style="background:var(--white);border:1px solid var(--border);border-radius:16px;padding:28px;text-align:center">
        <div style="font-family:'Lora',serif;font-size:40px;font-weight:600;color:var(--green);line-height:1">19yr</div>
        <div style="font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);margin-top:8px">Longest Customer</div>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
