<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="nav">
  <div class="nav-inner">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="nav-logo">
      Healthy Living International
      <span>Since 2002 · Real Human Support</span>
    </a>
    <div class="nav-links" id="navLinks">
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="nav-link <?php echo is_front_page() ? 'active' : ''; ?>">Home</a>
      <a href="<?php echo esc_url( get_permalink( wc_get_page_id( 'shop' ) ) ); ?>" class="nav-link <?php echo is_shop() || is_product_category() || is_product() ? 'active' : ''; ?>">Products</a>
      <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'about' ) ) ); ?>" class="nav-link <?php echo is_page( 'about' ) ? 'active' : ''; ?>">About</a>
      <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'coaching' ) ) ); ?>" class="nav-link <?php echo is_page( 'coaching' ) ? 'active' : ''; ?>">Coaching</a>
    </div>
    <a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="nav-cart">
      🛒 Cart
      <?php if ( WC()->cart && WC()->cart->get_cart_contents_count() > 0 ) : ?>
        <span>(<?php echo WC()->cart->get_cart_contents_count(); ?>)</span>
      <?php endif; ?>
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">☰</button>
  </div>
</nav>
