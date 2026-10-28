<?php get_header(); ?>

<?php
  $current_cat = is_product_category() ? get_queried_object() : null;
  $page_title  = $current_cat ? $current_cat->name : 'All Products';
  $page_desc   = $current_cat ? $current_cat->description : '55+ premium natural supplements formulated by Dr. William R. Kellas.';
?>

<!-- PAGE HERO -->
<div class="page-hero">
  <div class="page-hero-inner">
    <div class="eyebrow" style="color:var(--sage-light)">Natural Supplements</div>
    <h1 class="page-title"><?php echo esc_html( $page_title ); ?></h1>
    <?php if ( $page_desc ) : ?>
      <p class="page-subtitle"><?php echo esc_html( $page_desc ); ?></p>
    <?php endif; ?>
  </div>
</div>

<!-- CATEGORY FILTER BAR -->
<div class="filters-bar">
  <div class="filters-inner">
    <a href="<?php echo esc_url( get_permalink( wc_get_page_id( 'shop' ) ) ); ?>"
       class="filter-btn <?php echo ! is_product_category() ? 'active' : ''; ?>">All</a>
    <?php
      $cats = get_terms( [ 'taxonomy' => 'product_cat', 'hide_empty' => true, 'orderby' => 'name' ] );
      foreach ( $cats as $cat ) :
        $is_active = $current_cat && $current_cat->slug === $cat->slug;
    ?>
    <a href="<?php echo esc_url( get_term_link( $cat ) ); ?>"
       class="filter-btn <?php echo $is_active ? 'active' : ''; ?>">
      <?php echo esc_html( $cat->name ); ?>
    </a>
    <?php endforeach; ?>
  </div>
</div>

<!-- PRODUCTS GRID -->
<section style="padding: 48px 16px;">
  <div class="container">
    <?php if ( woocommerce_product_loop() ) : ?>
      <div class="prod-grid">
        <?php while ( have_posts() ) : the_post(); global $product; ?>
          <?php
            $cats     = wp_get_post_terms( $product->get_id(), 'product_cat' );
            $cat_name = ! empty( $cats ) ? $cats[0]->name : '';
          ?>
          <div class="prod-card">
            <a href="<?php echo esc_url( get_permalink() ); ?>">
              <div class="prod-img" style="background:linear-gradient(135deg,#EDF5EB,#D4EDCA)">
                <?php if ( has_post_thumbnail() ) : ?>
                  <?php the_post_thumbnail( 'woocommerce_thumbnail', ['style'=>'width:100%;height:180px;object-fit:cover'] ); ?>
                <?php else : ?>
                  <span style="font-size:56px">🌿</span>
                <?php endif; ?>
                <?php if ( $product->is_featured() ) : ?>
                  <span class="prod-badge badge-best">Best Seller</span>
                <?php elseif ( $product->is_on_sale() ) : ?>
                  <span class="prod-badge badge-new">Sale</span>
                <?php endif; ?>
              </div>
            </a>
            <div class="prod-body">
              <div class="prod-cat"><?php echo esc_html( $cat_name ); ?></div>
              <div class="prod-name">
                <a href="<?php echo esc_url( get_permalink() ); ?>" style="color:inherit">
                  <?php the_title(); ?>
                </a>
              </div>
              <div class="prod-desc"><?php echo wp_trim_words( $product->get_short_description(), 18 ); ?></div>
              <div class="prod-footer">
                <span class="prod-price"><?php echo $product->get_price_html(); ?></span>
                <a href="<?php echo esc_url( $product->add_to_cart_url() ); ?>"
                   data-product_id="<?php echo $product->get_id(); ?>"
                   class="prod-add ajax_add_to_cart add_to_cart_button"
                   data-quantity="1">Add to Cart</a>
              </div>
            </div>
          </div>
        <?php endwhile; ?>
      </div>

      <!-- PAGINATION -->
      <div style="margin-top:48px;text-align:center">
        <?php woocommerce_pagination(); ?>
      </div>

    <?php else : ?>
      <div style="text-align:center;padding:80px 0">
        <div style="font-size:48px;margin-bottom:16px">🌿</div>
        <h2 class="section-heading">No products found</h2>
        <p style="color:var(--text-muted);margin-bottom:24px">Try a different category or browse all products.</p>
        <a href="<?php echo esc_url( get_permalink( wc_get_page_id( 'shop' ) ) ); ?>" class="btn btn-primary">View All Products</a>
      </div>
    <?php endif; ?>
  </div>
</section>

<?php get_footer(); ?>
