<?php
// ============================================================
// Healthy Living International — functions.php
// ============================================================

function hl_theme_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'woocommerce' );
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'gallery', 'caption' ] );
    register_nav_menus( [ 'primary' => __( 'Primary Menu', 'healthy-living' ) ] );
}
add_action( 'after_setup_theme', 'hl_theme_setup' );

function hl_enqueue_assets() {
    wp_enqueue_style( 'google-fonts',
        'https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap',
        [], null );
    wp_enqueue_style( 'hl-style', get_stylesheet_uri(), [ 'google-fonts' ], '1.0.0' );
    wp_enqueue_script( 'hl-main', get_template_directory_uri() . '/assets/js/main.js', [], '1.0.0', true );
    wp_localize_script( 'hl-main', 'hlData', [
        'cartUrl'     => function_exists('wc_get_cart_url') ? wc_get_cart_url() : '/cart',
        'checkoutUrl' => function_exists('wc_get_checkout_url') ? wc_get_checkout_url() : '/checkout',
        'ajaxUrl'     => admin_url( 'admin-ajax.php' ),
        'nonce'       => wp_create_nonce( 'wc_store_api' ),
    ] );
}
add_action( 'wp_enqueue_scripts', 'hl_enqueue_assets' );

// Remove default WooCommerce wrappers
remove_action( 'woocommerce_before_main_content', 'woocommerce_output_content_wrapper', 10 );
remove_action( 'woocommerce_after_main_content',  'woocommerce_output_content_wrapper_end', 10 );
add_action( 'woocommerce_before_main_content', function() { echo '<div class="container"><div class="woo-content">'; }, 10 );
add_action( 'woocommerce_after_main_content',  function() { echo '</div></div>'; }, 10 );

// Guest checkout — no forced account creation
add_filter( 'woocommerce_checkout_registration_required', '__return_false' );
add_filter( 'woocommerce_checkout_registration_enabled',  '__return_true' );

// 16 products per page, 4 columns
add_filter( 'loop_shop_per_page', function() { return 16; }, 20 );
add_filter( 'loop_shop_columns',  function() { return 4; } );

// Breadcrumb delimiter
add_filter( 'woocommerce_breadcrumb_defaults', function( $d ) {
    $d['delimiter'] = ' / '; return $d;
} );

function hl_register_sidebars() {
    register_sidebar( [
        'name'          => 'Shop Sidebar',
        'id'            => 'shop-sidebar',
        'before_widget' => '<div class="widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ] );
}
add_action( 'widgets_init', 'hl_register_sidebars' );
