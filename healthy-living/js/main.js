/* ============ SHARED STATE ============ */
let cart = JSON.parse(localStorage.getItem('hl_cart') || '[]');

function saveCart() { localStorage.setItem('hl_cart', JSON.stringify(cart)); }

function getTotal() {
  return cart.reduce((s, i) => s + parseFloat(i.price.replace(/[$,]/g, '')) * i.qty, 0);
}

/* ============ CART COUNT ============ */
function updateCartCount() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count > 0 ? `🛒 Cart (${count})` : '🛒 Cart';
  });
}

/* ============ CART DRAWER ============ */
function openCart() {
  document.getElementById('cartOverlay')?.classList.add('open');
  document.getElementById('cartDrawer')?.classList.add('open');
  renderCartDrawer();
}
function closeCart() {
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.getElementById('cartDrawer')?.classList.remove('open');
}

function renderCartDrawer() {
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div class="cart-empty">
      <div style="font-size:40px;margin-bottom:12px">🌿</div>
      <div style="font-weight:600;color:var(--text);margin-bottom:8px">Your cart is empty</div>
      <div>Add some products to get started</div>
    </div>`;
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div style="flex:1">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button onclick="updateQty('${item.id}', -1)" style="background:var(--cream);border:none;width:26px;height:26px;border-radius:50%;cursor:pointer;font-size:14px">−</button>
        <span style="font-size:13px;font-weight:600">${item.qty}</span>
        <button onclick="updateQty('${item.id}', 1)" style="background:var(--cream);border:none;width:26px;height:26px;border-radius:50%;cursor:pointer;font-size:14px">+</button>
      </div>
      <button class="cart-item-remove" onclick="removeItem('${item.id}')">✕</button>
    </div>`).join('');

  if (footerEl) {
    footerEl.style.display = 'block';
    document.getElementById('cartTotal').textContent = '$' + getTotal().toFixed(2);
  }
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartCount(); renderCartDrawer();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartCount(); renderCartDrawer();
}

/* ============ ADD TO CART ============ */
function addToCart(product) {
  const existing = cart.find(i => i.id === product.id);
  if (existing) { existing.qty += product.qty || 1; }
  else { cart.push({ ...product, qty: product.qty || 1 }); }
  saveCart(); updateCartCount(); showToast(`${product.name} added to cart`);
}

/* ============ TOAST ============ */
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<span>✅</span> ${msg}`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ============ MOBILE NAV TOGGLE ============ */
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.style.display === 'flex';
      links.style.display = open ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.position = 'absolute';
      links.style.top = '64px';
      links.style.left = '0'; links.style.right = '0';
      links.style.background = 'var(--green-dark)';
      links.style.padding = '16px';
      links.style.gap = '4px';
    });
  }

  // Cart overlay close
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  document.getElementById('cartCloseBtn')?.addEventListener('click', closeCart);
});
