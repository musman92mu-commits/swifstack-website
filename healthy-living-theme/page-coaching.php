<?php get_header(); ?>

<!-- PAGE HERO -->
<div class="page-hero">
  <div class="page-hero-inner">
    <div class="eyebrow" style="color:var(--sage-light)">Personal Health Support</div>
    <h1 class="page-title">Free Health Consultation with Kent</h1>
    <p class="page-subtitle">Real guidance — no automated systems, no scripts.</p>
  </div>
</div>

<section class="section" style="padding: 64px 16px;">
  <div class="container">
    <div class="coaching-grid">
      <!-- LEFT: Features -->
      <div>
        <div class="eyebrow">What to Expect</div>
        <h2 class="section-heading">Personalized support from someone who knows these products</h2>
        <p style="color:var(--text-muted);line-height:1.7;margin-bottom:36px">
          Kent Hinkson personally reviews your health goals and recommends the right products for your situation.
          This is not a scripted sales call — it is a real conversation about your health.
        </p>
        <div class="coaching-features">
          <div class="cf-item">
            <div class="cf-icon">🌿</div>
            <div>
              <div class="cf-title">Symptom-to-Product Matching</div>
              <div class="cf-desc">Kent listens to your concerns and maps them to the right products — no guessing, no upselling.</div>
            </div>
          </div>
          <div class="cf-item">
            <div class="cf-icon">📋</div>
            <div>
              <div class="cf-title">Product Stack Review</div>
              <div class="cf-desc">Already taking supplements? Kent will review what you are on and identify gaps or conflicts.</div>
            </div>
          </div>
          <div class="cf-item">
            <div class="cf-icon">🔄</div>
            <div>
              <div class="cf-title">Ongoing Support</div>
              <div class="cf-desc">Kent is available by phone and email after your purchase. You are never left on your own.</div>
            </div>
          </div>
          <div class="cf-item">
            <div class="cf-icon">🌍</div>
            <div>
              <div class="cf-title">International Customers Welcome</div>
              <div class="cf-desc">Kent serves customers in the US, Canada, Australia, Singapore, and France. Email for after-hours support.</div>
            </div>
          </div>
        </div>
        <div style="margin-top:36px;padding:20px;background:#EDF5EB;border-radius:12px;">
          <div style="font-size:13px;font-weight:600;color:var(--green-dark);margin-bottom:8px">📞 Prefer to call directly?</div>
          <div style="font-size:13px;color:var(--text-muted)">Toll Free: <strong style="color:var(--text)">800-704-0986</strong></div>
          <div style="font-size:13px;color:var(--text-muted)">Local: <strong style="color:var(--text)">801-331-5260</strong></div>
          <div style="font-size:13px;color:var(--text-muted);margin-top:4px">Email: <strong style="color:var(--text)">info@healthy-living.org</strong></div>
        </div>
      </div>

      <!-- RIGHT: Contact Form -->
      <div>
        <div class="contact-form">
          <div class="form-title">Request a Free Consultation</div>
          <div class="form-sub">Kent typically responds within 24 hours. All fields are optional except your name and contact info.</div>

          <?php
            // Handle form submission
            if ( isset( $_POST['hl_coaching_submit'] ) && wp_verify_nonce( $_POST['hl_coaching_nonce'], 'hl_coaching_form' ) ) {
              $name    = sanitize_text_field( $_POST['hl_name'] ?? '' );
              $email   = sanitize_email( $_POST['hl_email'] ?? '' );
              $phone   = sanitize_text_field( $_POST['hl_phone'] ?? '' );
              $concern = sanitize_textarea_field( $_POST['hl_concern'] ?? '' );
              $products = sanitize_textarea_field( $_POST['hl_products'] ?? '' );

              $to      = 'info@healthy-living.org';
              $subject = 'New Coaching Request from ' . $name;
              $body    = "Name: $name\nEmail: $email\nPhone: $phone\n\nHealth Concern:\n$concern\n\nCurrent Products:\n$products";
              $headers = [ 'Content-Type: text/plain; charset=UTF-8', 'Reply-To: ' . $email ];

              wp_mail( $to, $subject, $body, $headers );
              echo '<div style="background:#EDF5EB;border-radius:10px;padding:16px;margin-bottom:20px;font-size:14px;color:var(--green-dark);">✅ Thank you ' . esc_html($name) . '! Kent will be in touch within 24 hours.</div>';
            }
          ?>

          <form method="POST" action="">
            <?php wp_nonce_field( 'hl_coaching_form', 'hl_coaching_nonce' ); ?>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="hl_name">Full Name *</label>
                <input class="form-input" type="text" id="hl_name" name="hl_name" required placeholder="Your name">
              </div>
              <div class="form-group">
                <label class="form-label" for="hl_email">Email Address *</label>
                <input class="form-input" type="email" id="hl_email" name="hl_email" required placeholder="your@email.com">
              </div>
            </div>
            <div class="form-group">
              <label class="form-label" for="hl_phone">Phone Number</label>
              <input class="form-input" type="tel" id="hl_phone" name="hl_phone" placeholder="+1 (555) 000-0000">
            </div>
            <div class="form-group">
              <label class="form-label" for="hl_concern">What is your primary health concern?</label>
              <textarea class="form-textarea" id="hl_concern" name="hl_concern" placeholder="e.g. low energy, digestive issues, joint pain..."></textarea>
            </div>
            <div class="form-group">
              <label class="form-label" for="hl_products">Are you currently taking any supplements?</label>
              <textarea class="form-textarea" id="hl_products" name="hl_products" style="min-height:80px" placeholder="List any supplements, vitamins, or medications you currently take."></textarea>
            </div>
            <button type="submit" name="hl_coaching_submit" class="btn btn-primary" style="width:100%;justify-content:center">
              Send My Request →
            </button>
            <p style="font-size:11px;color:var(--text-muted);text-align:center;margin-top:12px">
              Your information is private and will never be shared or sold.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>
