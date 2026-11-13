/* Contact form — submits to /api/contact */
(function () {
  var form = document.getElementById('sw-contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = form.querySelector('[name="name"]');
    var email = form.querySelector('[name="email"]');
    var goal = form.querySelector('[name="message"]');
    var btn = document.getElementById('sw-submit-btn');
    var msg = document.getElementById('sw-form-msg');

    if (!name.value.trim()) { name.focus(); return; }
    if (!email.value.trim()) { email.focus(); return; }
    if (!goal.value.trim()) { goal.focus(); return; }

    btn.disabled = true;
    btn.textContent = 'Sending…';
    msg.style.display = 'none';

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.value.trim(),
        email: email.value.trim(),
        topic: (form.querySelector('[name="topic"]') || {}).value || '',
        budget: (form.querySelector('[name="budget"]') || {}).value || '',
        message: goal.value.trim(),
      }),
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.ok) {
          btn.textContent = 'Message sent ✓';
          form.reset();
          msg.style.display = 'block';
          msg.style.color = '#16a34a';
          msg.textContent = 'Thanks! We'll be in touch within 1 business day.';
        } else {
          throw new Error(data.error || 'Failed');
        }
      })
      .catch(function () {
        btn.disabled = false;
        btn.innerHTML = 'Send message <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
        msg.style.display = 'block';
        msg.style.color = '#dc2626';
        msg.textContent = 'Something went wrong. Please email nick@swifstack.com directly.';
      });
  });
})();
