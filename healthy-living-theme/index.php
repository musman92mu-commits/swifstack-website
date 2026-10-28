<?php get_header(); ?>

<div class="container" style="padding: 64px 16px; text-align:center;">
  <h1 class="section-heading">Welcome to Healthy Living International</h1>
  <p style="color:var(--text-muted); margin-bottom:32px;">Please visit our shop to browse all products.</p>
  <a href="<?php echo esc_url( get_permalink( wc_get_page_id( 'shop' ) ) ); ?>" class="btn btn-primary">Shop All Products →</a>
</div>

<?php get_footer(); ?>
