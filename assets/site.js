/* Homepage extras: demo-only booking form (no backend yet). */
document.addEventListener('click', function (e) {
  var b = e.target.closest && e.target.closest('#contact button[type=button]');
  if (!b) return;
  var n = document.getElementById('f-name'), m = document.getElementById('f-email'), g = document.getElementById('f-goal');
  if (!n.value.trim() || !m.value.trim() || !g.value.trim()) { (n.value.trim() ? (m.value.trim() ? g : m) : n).focus(); return; }
  b.textContent = 'Thanks, we will be in touch'; b.disabled = true;
});
