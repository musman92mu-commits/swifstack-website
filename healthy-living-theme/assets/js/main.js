/* ============ MOBILE NAV TOGGLE ============ */
document.addEventListener('DOMContentLoaded', function () {

  const toggle = document.getElementById('navToggle');
  const links  = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const isOpen = links.classList.contains('nav-open');
      if (isOpen) {
        links.classList.remove('nav-open');
        links.style.display = '';
      } else {
        links.classList.add('nav-open');
        links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:64px;left:0;right:0;background:var(--green-dark);padding:16px;gap:4px;z-index:99;';
      }
    });
  }

  /* ============ WOOCOMMERCE ADD-TO-CART TOAST ============ */
  document.body.addEventListener('added_to_cart', function (e) {
    showToast('Product added to cart ✓');
  });

});

/* ============ TOAST ============ */
function showToast(msg) {
  let t = document.getElementById('hl-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'hl-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = '<span>✅</span> ' + msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(function () { t.classList.remove('show'); }, 3000);
}
