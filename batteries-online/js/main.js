// Cart
let cartCount = 0;
function updateCart(n = 1) {
  cartCount += n;
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = cartCount);
  showToast('Added to cart!');
}

// Toast
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.querySelector('.toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2800);
}

// Tabs
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.detail-tabs');
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab)?.classList.add('active');
    });
  });
}

// Pills / options
function initPills() {
  document.querySelectorAll('.option-pills').forEach(group => {
    group.querySelectorAll('.pill').forEach(pill => {
      pill.addEventListener('click', () => {
        group.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
      });
    });
  });
}

// Qty
function initQty() {
  document.querySelectorAll('.qty-control').forEach(ctrl => {
    const span = ctrl.querySelector('span');
    ctrl.querySelector('.qty-minus')?.addEventListener('click', () => {
      let v = parseInt(span.textContent);
      if (v > 1) span.textContent = v - 1;
    });
    ctrl.querySelector('.qty-plus')?.addEventListener('click', () => {
      let v = parseInt(span.textContent);
      span.textContent = v + 1;
    });
  });
}

// Category tabs
function initCatTabs() {
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

// Wishlist
function initWishlist() {
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const active = btn.classList.toggle('wishlisted');
      btn.textContent = active ? '❤️' : '🤍';
      showToast(active ? 'Saved to wishlist!' : 'Removed from wishlist');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTabs(); initPills(); initQty(); initCatTabs(); initWishlist();
});
