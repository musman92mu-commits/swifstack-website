<?php get_header(); ?>

<style>
.hero { background: linear-gradient(135deg, #1A3A16 0%, #2D5A27 60%, #4A7A42 100%); min-height: 580px; display: flex; align-items: center; padding: 80px 16px; }
.hero-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 420px; gap: 64px; align-items: center; width: 100%; }
.hero-eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--sage-light); margin-bottom: 14px; }
.hero-title { font-family: 'Lora', serif; font-size: clamp(32px, 5vw, 52px); font-weight: 600; color: var(--white); line-height: 1.15; margin-bottom: 18px; text-wrap: balance; }
.hero-title em { font-style: italic; color: var(--gold-light); }
.hero-subtitle { font-size: 16px; color: var(--sage-light); line-height: 1.7; margin-bottom: 32px; max-width: 480px; }
.hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
.hero-img-card { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 24px; padding: 36px 28px; text-align: center; }
.hero-product-emoji { font-size: 72px; margin-bottom: 16px; }
.hero-product-name { font-family: 'Lora', serif; font-size: 18px; font-weight: 600; color: var(--white); margin-bottom: 6px; }
.hero-product-price { font-size: 24px; font-weight: 700; color: var(--gold-light); margin-bottom: 20px; }
.hero-stars { color: var(--gold-light); margin-bottom: 16px; font-size: 15px; }
.hero-kent { display: flex; align-items: center; gap: 12px; background: rgba(255,255,255,0.1); border-radius: 100px; padding: 8px 16px 8px 8px; margin-top: 24px; }
.hero-kent-avatar { width: 38px; height: 38px; background: var(--sage); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; }
.hero-kent-text { font-size: 12px; color: var(--white); }
.hero-kent-text strong { display: block; font-size: 13px; }
.stat-band { background: var(--green); padding: 24px 16px; }
.stat-band-inner { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-around; text-align: center; flex-wrap: wrap; gap: 16px; }
.stat-item { color: var(--white); }
.stat-num { font-family: 'Lora', serif; font-size: 28px; font-weight: 600; color: var(--gold-light); line-height: 1; }
.stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--sage-light); margin-top: 4px; }
.featured-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
@media(max-width:900px){ .hero-inner { grid-template-columns: 1fr; } .hero-img-card { display: none; } .featured-grid { grid-template-columns: 1fr 1fr; } }
@media(max-width:600px){ .featured-grid { grid-template-columns: 1fr; } }
</style>

<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div>
      <div class="hero-eyebrow">Dr. Kellas's Formulas · Since 2002</div>
      <h1 class="hero-title">
        Eliminate <em>toxicities</em> &amp; deficiencies.<br>
        Restore your health.
      </h1>
      <p class="hero-subtitle">
        Premium natural supplements formulated by Dr. William R. Kellas.
        55+ research-backed products trusted by customers for up to 19 years.
        Real human support — no automated systems.
      </p>
      <div class="hero-btns">
        <a href="<?php echo esc_url( get_permalink( wc_get_page_id( 'shop' ) ) ); ?>" class="btn btn-gold">Shop All Products →</a>
        <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'coaching' ) ) ); ?>" class="btn btn-ghost">Free Health Consultation</a>
      </div>
      <div class="hero-kent">
        <div class="hero-kent-avatar">👤</div>
        <div class="hero-kent-text">
          <strong>Kent Hinkson, Owner</strong>
          Personally available · 800-704-0986
        </div>
      </div>
    </div>
    <div class="hero-img-card">
      <div class="hero-product-emoji">🌾</div>
      <div class="hero-product-name">E7 — Seven Essentials</div>
      <div class="hero-product-price">$59.95</div>
      <div class="hero-stars">★★★★★</div>
      <?php
        $e7 = get_page_by_title( 'E7 — Seven Essentials', OBJECT, 'product' );
        $e7_url = $e7 ? get_permalink( $e7->ID ) : get_permalink( wc_get_page_id( 'shop' ) );
      ?>
      <a href="<?php echo esc_url( $e7_url ); ?>" class="btn btn-gold" style="width:100%;justify-content:center">View Product →</a>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:14px">Flagship food powder · 5 flavors</div>
    </div>
  </div>
</section>

<!-- STAT BAND -->
<div class="stat-band">
  <div class="stat-band-inner">
    <div class="stat-item"><div class="stat-num">22+</div><div class="stat-label">Years in Business</div></div>
    <div class="stat-item"><div class="stat-num">55+</div><div class="stat-label">Natural Products</div></div>
    <div class="stat-item"><div class="stat-num">16</div><div class="stat-label">Health Categories</div></div>
    <div class="stat-item"><div class="stat-num">19yr</div><div class="stat-label">Longest Customer</div></div>
    <div class="stat-item"><div class="stat-num">7</div><div class="stat-label">Countries Served</div></div>
  </div>
</div>

<!-- TRUST BAR -->
<div class="trust-bar">
  <div class="trust-inner">
    <div class="trust-item"><div class="trust-icon">🌿</div><div><div class="trust-title">Natural Formulas</div><div class="trust-desc">No synthetics or fillers</div></div></div>
    <div class="trust-item"><div class="trust-icon">👤</div><div><div class="trust-title">Real Human Support</div><div class="trust-desc">Kent answers personally</div></div></div>
    <div class="trust-item"><div class="trust-icon">🚚</div><div><div class="trust-title">Ships Globally</div><div class="trust-desc">US, CA, AU, Singapore, France</div></div></div>
    <div class="trust-item"><div class="trust-icon">🔒</div><div><div class="trust-title">Secure Checkout</div><div class="trust-desc">SSL encrypted, cards only</div></div></div>
    <div class="trust-item"><div class="trust-icon">📦</div><div><div class="trust-title">Quality Guaranteed</div><div class="trust-desc">Dr. Kellas formulations</div></div></div>
  </div>
</div>

<!-- CATEGORIES -->
<section class="section" style="padding: 64px 16px;">
  <div class="container">
    <div class="eyebrow">Browse by Category</div>
    <h2 class="section-heading">Find what your body needs</h2>
    <div class="cats-grid">
      <?php
        $categories = [
          ['slug'=>'energy',         'emoji'=>'⚡', 'name'=>'Energy'],
          ['slug'=>'digestive',      'emoji'=>'🌱', 'name'=>'Digestive'],
          ['slug'=>'immune',         'emoji'=>'🛡️', 'name'=>'Immune'],
          ['slug'=>'anti-aging',     'emoji'=>'⏳', 'name'=>'Anti-Aging'],
          ['slug'=>'detoxification', 'emoji'=>'💧', 'name'=>'Detoxification'],
          ['slug'=>'brain',          'emoji'=>'🧠', 'name'=>'Brain'],
          ['slug'=>'cardiovascular', 'emoji'=>'❤️', 'name'=>'Cardiovascular'],
          ['slug'=>'sleep',          'emoji'=>'🌙', 'name'=>'Sleep'],
        ];
        foreach ( $categories as $cat ) :
          $term = get_term_by( 'slug', $cat['slug'], 'product_cat' );
          $url  = $term ? get_term_link( $term ) : get_permalink( wc_get_page_id('shop') );
          $count = $term ? $term->count : 0;
      ?>
      <a href="<?php echo esc_url( $url ); ?>" class="cat-card">
        <div class="cat-emoji"><?php echo $cat['emoji']; ?></div>
        <div class="cat-name"><?php echo esc_html( $cat['name'] ); ?></div>
        <div class="cat-count"><?php echo $count; ?> products</div>
      </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- FEATURED PRODUCTS -->
<section class="section" style="background: var(--surface); padding: 64px 16px;">
  <div class="container">
    <div class="eyebrow">Best Sellers</div>
    <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:36px;flex-wrap:wrap;gap:12px;">
      <h2 class="section-heading" style="margin-bottom:0">Our most trusted products</h2>
      <a href="<?php echo esc_url( get_permalink( wc_get_page_id( 'shop' ) ) ); ?>" class="btn btn-outline" style="font-size:13px;padding:10px 20px">View All →</a>
    </div>
    <div class="featured-grid">
      <?php
        $featured = wc_get_products( [ 'limit' => 3, 'featured' => true, 'status' => 'publish' ] );
        if ( empty( $featured ) ) {
          $featured = wc_get_products( [ 'limit' => 3, 'status' => 'publish' ] );
        }
        foreach ( $featured as $product ) :
          $cats = wp_get_post_terms( $product->get_id(), 'product_cat' );
          $cat_name = ! empty( $cats ) ? $cats[0]->name : '';
      ?>
      <div class="prod-card">
        <div class="prod-img" style="background:linear-gradient(135deg,#EDF5EB,#D4EDCA)">
          <?php if ( $product->get_image_id() ) : ?>
            <?php echo $product->get_image( 'woocommerce_thumbnail' ); ?>
          <?php else : ?>
            <span style="font-size:56px">🌿</span>
          <?php endif; ?>
        </div>
        <div class="prod-body">
          <div class="prod-cat"><?php echo esc_html( $cat_name ); ?></div>
          <div class="prod-name"><?php echo esc_html( $product->get_name() ); ?></div>
          <div class="prod-desc"><?php echo wp_trim_words( $product->get_short_description(), 18 ); ?></div>
          <div class="prod-footer">
            <span class="prod-price"><?php echo $product->get_price_html(); ?></span>
            <a href="<?php echo esc_url( $product->add_to_cart_url() ); ?>" class="prod-add">Add to Cart</a>
          </div>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
    <div style="text-align:center;margin-top:40px">
      <a href="<?php echo esc_url( get_permalink( wc_get_page_id( 'shop' ) ) ); ?>" class="btn btn-primary">View All 55+ Products →</a>
    </div>
  </div>
</section>

<!-- PHILOSOPHY -->
<div class="philosophy">
  <div class="container">
    <div class="eyebrow" style="color:var(--gold-light)">Dr. Kellas's Founding Principle</div>
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

<!-- TESTIMONIALS -->
<section class="section" style="padding: 64px 16px;">
  <div class="container">
    <div class="eyebrow">Customer Stories</div>
    <h2 class="section-heading" style="margin-bottom:40px">Trusted for decades</h2>
    <div class="testi-grid">
      <div class="testi-card">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-text">"I've been using E7 for over 12 years. My energy levels are consistently high and my doctor is always impressed by my bloodwork."</p>
        <div class="testi-author">Margaret S.</div>
        <div class="testi-location">Phoenix, Arizona</div>
        <span class="testi-years">Customer 12 years</span>
      </div>
      <div class="testi-card">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-text">"Kent personally helped me find the right supplement stack. That kind of real, human attention is why I keep coming back year after year."</p>
        <div class="testi-author">David L.</div>
        <div class="testi-location">Melbourne, Australia</div>
        <span class="testi-years">Customer 8 years</span>
      </div>
      <div class="testi-card">
        <div class="testi-stars">★★★★★</div>
        <p class="testi-text">"The Eight Day Cleanse was transformative. After the first cleanse I noticed better digestion, clearer thinking, and more restful sleep."</p>
        <div class="testi-author">Sarah T.</div>
        <div class="testi-location">Vancouver, BC</div>
        <span class="testi-years">Customer 5 years</span>
      </div>
    </div>
  </div>
</section>

<!-- KENT CTA -->
<section style="background:var(--cream-dark); padding: 64px 16px; text-align:center;">
  <div class="container" style="max-width:620px">
    <div style="font-size:48px;margin-bottom:20px">👤</div>
    <div class="eyebrow">Personal Support</div>
    <h2 class="section-heading">Talk to Kent directly</h2>
    <p style="color:var(--text-muted);margin-bottom:32px;line-height:1.7">
      No chatbots. No automated phone trees. Kent Hinkson personally answers questions
      about your health goals and helps you find the right products.
      This is real human support — it's what makes us different.
    </p>
    <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
      <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'coaching' ) ) ); ?>" class="btn btn-primary">Schedule a Consultation</a>
      <a href="tel:+18007040986" class="btn btn-outline">📞 800-704-0986</a>
    </div>
  </div>
</section>

<?php get_footer(); ?>
