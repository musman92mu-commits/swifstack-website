/* Tiny template runtime: renders <template id="tpl"> against Component.renderVals() and diffs the DOM. */
(function () {
  var HOLE = /\{\{\s*([^}]+?)\s*\}\}/g, WHOLE = /^\s*\{\{\s*([^}]+?)\s*\}\}\s*$/;
  function get(scope, path) {
    if (path === 'true') return true; if (path === 'false') return false;
    var o = scope, p = path.split('.');
    for (var i = 0; i < p.length; i++) { if (o == null) return undefined; o = o[p[i]]; }
    return o;
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  function escA(s) { return esc(s).replace(/"/g, '&quot;'); }
  var VOID = /^(br|hr|img|input|meta|link)$/i;
  function walk(node, scope, handlers, out) {
    if (node.nodeType === 3) { out.push(node.data.indexOf('{{') < 0 ? esc(node.data) : esc(node.data).replace(HOLE, function (_, p) { var v = get(scope, p.replace(/&amp;/g,'&')); return v == null ? '' : esc(v); })); return; }
    if (node.nodeType !== 1) return;
    var tag = node.tagName.toLowerCase();
    if (tag === 'sc-if') {
      var m = WHOLE.exec(node.getAttribute('value') || ''); var v = m ? get(scope, m[1]) : false;
      if (v) { var ch = []; kids(node, scope, handlers, ch); var s = ch.join('');
        s = s.replace(/^(\s*<[a-zA-Z][^\s>\/]*)/, '$1 data-k="' + (m[1]) + '"'); out.push(s); }
      return;
    }
    if (tag === 'sc-for') {
      var lm = WHOLE.exec(node.getAttribute('list') || ''); var list = (lm && get(scope, lm[1])) || []; var as = node.getAttribute('as') || 'item';
      for (var i = 0; i < list.length; i++) { var sc = Object.create(scope); sc[as] = list[i]; sc.__path = (lm[1]) + '.' + i + '.'; sc.__as = as; kids(node, sc, handlers, out); }
      return;
    }
    if (node.outerHTML.indexOf('{{') < 0 && node.outerHTML.indexOf('<sc-') < 0) { out.push(node.outerHTML); return; }
    var a = '';
    for (var j = 0; j < node.attributes.length; j++) {
      var at = node.attributes[j], n = at.name, val = at.value;
      if (/^hint-/.test(n)) continue;
      if (n.toLowerCase() === 'onclick') {
        var hm = WHOLE.exec(val); if (hm) { var fn = get(scope, hm[1]); if (typeof fn === 'function') { handlers.push(fn); a += ' data-h="' + (handlers.length - 1) + '"'; } }
        continue;
      }
      if (val.indexOf('{{') >= 0) {
        var w = WHOLE.exec(val);
        if (w) { var r = get(scope, w[1]); val = r == null ? '' : String(r); }
        else val = val.replace(HOLE, function (_, p) { var r2 = get(scope, p); return r2 == null ? '' : r2; });
      }
      a += ' ' + n + '="' + escA(val) + '"';
    }
    out.push('<' + tag + a + '>');
    if (!VOID.test(tag)) { kids(node, scope, handlers, out); out.push('</' + tag + '>'); }
  }
  function kids(node, scope, handlers, out) { for (var c = node.firstChild; c; c = c.nextSibling) walk(c, scope, handlers, out); }

  window.DCLogic = function () { this.state = {}; };
  window.DCLogic.prototype.setState = function (p) { Object.assign(this.state, p); if (this.__render) this.__render(); };

  window.mountDC = function (Cls, root, tpl) {
    var inst = new Cls(), handlers = [], pending = false;
    root.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('[data-h]') : null;
      if (t && root.contains(t)) { var f = handlers[+t.getAttribute('data-h')]; if (f) { e.preventDefault(); f(e); } }
    });
    function render() {
      handlers = [];
      var out = []; kids(tpl.content, inst.renderVals(), handlers, out);
      var html = out.join('');
      var next = root.cloneNode(false); next.innerHTML = html;
      if (!root.firstChild) root.innerHTML = html; else morphdom(root, next, { childrenOnly: true, getNodeKey: function (n) { return n.getAttribute ? (n.getAttribute('data-k') || n.id || undefined) : undefined; } });
    }
    inst.__render = function () { if (pending) return; pending = true; Promise.resolve().then(function () { pending = false; render(); }); };
    render();
    if (inst.componentDidMount) inst.componentDidMount();
    return inst;
  };
})();
