<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); global $product; ?>

<?php
  $cats     = wp_get_post_terms( $product->get_id(), 'product_cat' );
  $cat_name = ! empty( $cats ) ? $cats[0]->name : '';
  $cat_link = ! empty( $cats ) ? get_term_link( $cats[0] ) : get_permalink( wc_get_page_id('shop') );
?>

<style>
.pd-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; padding: 56px 0; }
.pd-img-box { background: var(--white); border: 1px solid var(--border); border-radius: 20px; min-height: 380px; display: flex; align-items: center; justify-content: center; font-size: 96px; overflow: hidden; }
.pd-img-box img { width: 100%; height: 380px; object-fit: cover; }
.pd-breadcrumb { font-size: 12px; color: var(--text-muted); margin-bottom: 16px; display: flex; gap: 8px; align-items: center; }
.pd-breadcrumb a { color: var(--text-muted); } .pd-breadcrumb a:hover { color: var(--green); }
.pd-cat { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sage); margin-bottom: 10px; }
.pd-title { font-family: 'Lora', serif; font-size: clamp(24px,4vw,34px); font-weight: 600; color: var(--text); margin-bottom: 12px; line-height: 1.2; }
.pd-price { font-size: 32px; font-weight: 700; color: var(--green); margin-bottom: 20px; }
.pd-desc { font-size: 15px; color: var(--text-muted); line-height: 1.7; margin-bottom: 24px; }
.pd-doctor { background: #EDF5EB; border-left: 3px solid var(--sage); border-radius: 8px; padding: 14px 16px; font-size: 13px; color: var(--green-dark); line-height: 1.5; margin-bottom: 24px; font-style: italic; }
.pd-add-row { display: flex; gap: 12px; align-items: center; margin: 20px 0; flex-wrap: wrap; }
.pd-benefits { display: flex; flex-direction: column; gap: 8px; margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--border); }
.pd-benefit { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--text-muted); }
.pd-tabs { margin-top: 64px; padding-top: 48px; border-top: 1px solid var(--border); }
.tab-btns { display: flex; gap: 4px; margin-bottom: 32px; border-bottom: 2px solid var(--border); }
.tab-btn { padding: 12px 20px; font-size: 14px; font-weight: 600; color: var(--text-muted); border: none; background: none; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -2px; font-family: 'Inter', sans-serif; transition: all 0.15s; }
.tab-btn.active { color: var(--green); border-bottom-color: var(--green); }
.tab-panel { display: none; } .tab-panel.active { display: block; }
.tab-content { font-size: 15px; color: var(--text-muted); line-height: 1.75; }
@media(max-width:768px){ .pd-layout { grid-template-columns: 1fr; gap: 32px; } }
</style>

<!-- PAGE HERO -->
<div class="page-hero" style="padding:32px 16px">
  <div class="page-hero-inner">
    <div class="pd-breadcrumb">
      <a href="<?php echo esc_url( home_url('/') ); ?>">Home</a> /
      <a href="<?php echo esc_url( get_permalink( wc_get_page_id('shop') ) ); ?>">Products</a> /
      <?php if ( $cat_name ) : ?>
        <a href="<?php echo esc_url( $cat_link ); ?>"><?php echo esc_html( $cat_name ); ?></a> /
      <?php endif; ?>
      <span style="color:var(--sage-light)"><?php the_title(); ?></span>
    </div>
  </div>
</div>

<div class="container">
  <div class="pd-layout">
    <!-- IMAGE -->
    <div>
      <div class="pd-img-box">
        <?php if ( has_post_thumbnail() ) : ?>
          <?php the_post_thumbnail( 'large' ); ?>
        <?php else : ?>
          🌿
        <?php endif; ?>
      </div>
    </div>

    <!-- INFO -->
    <div>
      <div class="pd-cat"><?php echo esc_html( $cat_name ); ?></div>
      <h1 class="pd-title"><?php the_title(); ?></h1>
      <div style="color:var(--gold);margin-bottom:16px">★★★★★</div>

      <div class="pd-price"><?php echo $product->get_price_html(); ?></div>

      <div class="pd-desc"><?php echo $product->get_short_description(); ?></div>

      <div class="pd-doctor">
        🌿 Dr. Kellas's formulation — developed to address the root causes of health challenges, not just the symptoms.
      </div>

      <!-- ADD TO CART FORM -->
      <?php woocommerce_template_single_add_to_cart(); ?>

      <!-- BENEFITS -->
      <div class="pd-benefits">
        <div class="pd-benefit"><span style="color:var(--sage)">✓</span> Free from synthetic fillers and additives</div>
        <div class="pd-benefit"><span style="color:var(--sage)">✓</span> Formulated by Dr. William R. Kellas</div>
        <div class="pd-benefit"><span style="color:var(--sage)">✓</span> Ships to US, Canada, Australia, Singapore, France</div>
        <div class="pd-benefit"><span style="color:var(--sage)">✓</span> Personal support from Kent — 800-704-0986</div>
      </div>
    </div>
  </div>

  <!-- TABS: Description / How to Use / Ingredients -->
  <div class="pd-tabs">
    <div class="tab-btns">
      <button class="tab-btn active" onclick="switchTab(this,'tab-desc')">Description</button>
      <button class="tab-btn" onclick="switchTab(this,'tab-use')">How to Use</button>
      <button class="tab-btn" onclick="switchTab(this,'tab-ing')">Ingredients</button>
    </div>
    <div id="tab-desc" class="tab-panel active tab-content">
      <?php the_content(); ?>
    </div>
    <div id="tab-use" class="tab-panel tab-content">
      <?php
        $usage = get_post_meta( $product->get_id(), '_how_to_use', true );
        echo $usage ? wp_kses_post( $usage ) : '<p>Please refer to product label for dosage instructions, or call Kent at 800-704-0986 for personalized guidance.</p>';
      ?>
    </div>
    <div id="tab-ing" class="tab-panel tab-content">
      <?php
        $ingredients = get_post_meta( $product->get_id(), '_ingredients', true );
        echo $ingredients ? wp_kses_post( $ingredients ) : '<p>Full ingredient list available on product label. Contact us for detailed information.</p>';
      ?>
    </div>
  </div>

  <!-- RELATED PRODUCTS -->
  <section style="padding: 64px 0 48px">
    <div class="eyebrow">You May Also Like</div>
    <h2 class="section-heading" style="margin-bottom:32px">Related Products</h2>
    <div class="prod-grid">
      <?php
        $related = wc_get_related_products( $product->get_id(), 3 );
        foreach ( $related as $related_id ) :
          $rp = wc_get_product( $related_id );
          if ( ! $rp ) continue;
          $rcats = wp_get_post_terms( $related_id, 'product_cat' );
          $rcat  = ! empty($rcats) ? $rcats[0]->name : '';
      ?>
      <div class="prod-card">
        <a href="<?php echo esc_url( get_permalink( $related_id ) ); ?>">
          <div class="prod-img" style="background:linear-gradient(135deg,#EDF5EB,#D4EDCA)">
            <?php echo get_the_post_thumbnail( $related_id, 'woocommerce_thumbnail', ['style'=>'width:100%;height:180px;object-fit:cover'] ); ?>
          </div>
        </a>
        <div class="prod-body">
          <div class="prod-cat"><?php echo esc_html( $rcat ); ?></div>
          <div class="prod-name"><a href="<?php echo esc_url( get_permalink( $related_id ) ); ?>" style="color:inherit"><?php echo esc_html( $rp->get_name() ); ?></a></div>
          <div class="prod-footer">
            <span class="prod-price"><?php echo $rp->get_price_html(); ?></span>
            <a href="<?php echo esc_url( $rp->add_to_cart_url() ); ?>" class="prod-add ajax_add_to_cart add_to_cart_button" data-product_id="<?php echo $related_id; ?>" data-quantity="1">Add to Cart</a>
          </div>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </section>
</div>

<script>
function switchTab(btn, id) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}
</script>

<?php endwhile; ?>
<?php get_footer(); ?>
