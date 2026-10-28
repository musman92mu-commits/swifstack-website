<footer class="footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">Healthy Living International</div>
        <p class="footer-tagline">Premium natural health supplements based on Dr. Kellas's principle: eliminate toxicities and deficiencies to restore your body's natural vitality.</p>
        <div class="footer-contact">
          <div class="footer-contact-item">📞 800-704-0986 (Toll Free)</div>
          <div class="footer-contact-item">📞 801-331-5260 (Local)</div>
          <div class="footer-contact-item">📧 info@healthy-living.org</div>
          <div class="footer-contact-item">📍 Orem, Utah 84097</div>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Shop</div>
        <div class="footer-links">
          <a href="<?php echo esc_url( get_permalink( wc_get_page_id( 'shop' ) ) ); ?>" class="footer-link">All Products</a>
          <a href="<?php echo esc_url( get_term_link( 'energy', 'product_cat' ) ); ?>" class="footer-link">Energy</a>
          <a href="<?php echo esc_url( get_term_link( 'digestive', 'product_cat' ) ); ?>" class="footer-link">Digestive</a>
          <a href="<?php echo esc_url( get_term_link( 'immune', 'product_cat' ) ); ?>" class="footer-link">Immune</a>
          <a href="<?php echo esc_url( get_term_link( 'anti-aging', 'product_cat' ) ); ?>" class="footer-link">Anti-Aging</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Company</div>
        <div class="footer-links">
          <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'about' ) ) ); ?>" class="footer-link">About Us</a>
          <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'coaching' ) ) ); ?>" class="footer-link">Health Coaching</a>
          <a href="mailto:info@healthy-living.org" class="footer-link">Contact</a>
        </div>
      </div>
      <div>
        <div class="footer-col-title">Account</div>
        <div class="footer-links">
          <a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="footer-link">Cart</a>
          <a href="<?php echo esc_url( wc_get_checkout_url() ); ?>" class="footer-link">Checkout</a>
          <a href="<?php echo esc_url( get_permalink( wc_get_page_id( 'myaccount' ) ) ); ?>" class="footer-link">My Account</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy">© 2002–<?php echo date('Y'); ?> Healthy Living International, LLC · Orem, Utah</div>
      <div class="footer-copy">
        <a href="<?php echo esc_url( get_privacy_policy_url() ); ?>" class="footer-link" style="margin-right:16px">Privacy Policy</a>
        <a href="<?php echo esc_url( home_url( '/terms' ) ); ?>" class="footer-link">Terms</a>
      </div>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
