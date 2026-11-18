(function () {
  'use strict';

  /* ── NAV CSS ── */
  var CSS = [
    'a{color:inherit;text-decoration:none}a:hover{opacity:.88}',
    '.sw-hdr{position:relative;background:#111827;padding:0 5%;z-index:100}',
    '.sw-hdr-inner{max-width:1200px;margin:0 auto;display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;gap:8px 20px;min-height:68px}',
    '.sw-logo{font-size:21px;font-weight:700;color:#fff;letter-spacing:-.02em;flex-shrink:0}',
    '.sw-nav{display:flex;flex-wrap:nowrap;align-items:center;gap:0 24px;font-size:14px;font-weight:500;color:rgba(255,255,255,.78)}',
    '.sw-cta{background:#3b66f0;color:#fff;padding:10px 22px;border-radius:8px;font-size:14px;font-weight:600;white-space:nowrap}',
    /* mega-menu */
    '.mm{position:static}',
    '.mm-t{display:inline-flex;align-items:center;gap:6px;padding:24px 0;cursor:pointer}',
    '.mm-t svg{transition:transform .2s ease}',
    '.mm:hover .mm-t svg,.mm:focus-within .mm-t svg{transform:rotate(180deg)}',
    '.mm-p{display:none;position:absolute;left:0;right:0;top:100%;z-index:50;background:#f4f2ec;color:#111827;border-bottom:1px solid #e7e5e4;box-shadow:0 24px 48px rgba(5,12,24,.28);padding:48px 5% 44px;font-size:14px;font-weight:400}',
    '.mm:hover .mm-p,.mm:focus-within .mm-p{display:block}',
    '.mm-in{max-width:1200px;margin:0 auto;display:flex;gap:48px}',
    '.mm-l{flex:0 0 300px;border-right:1px solid #d6d3d1;padding-right:40px}',
    '.mm-r{flex:1;display:grid;gap:36px 40px}',
    '.mm-g h4{margin:0 0 16px;padding-bottom:14px;border-bottom:1px solid #d6d3d1;font-family:\'Plus Jakarta Sans\',system-ui,sans-serif;font-size:12px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:#57534e}',
    '.mm-g a{display:block;padding:7px 0;font-size:15px;font-weight:500;color:#111827}',
    '.mm-g a small{display:block;margin-top:2px;font-size:13px;font-weight:400;line-height:1.4;color:#78716c}',
    '.mm-g a:hover{color:#3b66f0;opacity:1}',
    '.svl-wrap{display:block!important;position:relative;min-height:340px}',
    '.svl{width:340px}',
    '.sv-t{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-radius:10px;font-size:16px;font-weight:600;color:#111827}',
    '.sv-t svg{opacity:.45}',
    '.sv-sub{display:none;position:absolute;left:380px;right:0;top:0;bottom:0;padding:6px 0 0}',
    '.sv-sub h4{margin:0 0 16px;padding-bottom:14px;border-bottom:1px solid #d6d3d1;font-family:\'Plus Jakarta Sans\',system-ui,sans-serif;font-size:12px;font-weight:500;letter-spacing:.12em;text-transform:uppercase;color:#57534e}',
    '.sv-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 40px}',
    '.sv-grid a{display:block;padding:9px 0;font-size:15px;font-weight:500;color:#111827}',
    '.sv-grid a:hover{color:#3b66f0;opacity:1}',
    '.sv:hover .sv-t,.sv:focus-within .sv-t,.svl:not(:hover):not(:focus-within) .sv:first-child .sv-t{background:#ebe8e1}',
    '.sv:hover .sv-t svg,.sv:focus-within .sv-t svg,.svl:not(:hover):not(:focus-within) .sv:first-child .sv-t svg{opacity:1;color:#3b66f0}',
    '.sv:hover .sv-sub,.sv:focus-within .sv-sub,.svl:not(:hover):not(:focus-within) .sv:first-child .sv-sub{display:block}',
    /* mobile */
    '#sw-mob-btn{display:none;background:none;border:none;color:#fff;cursor:pointer;padding:8px;margin-left:auto}',
    '#sw-mob-menu{display:none;position:absolute;left:0;right:0;top:100%;background:#111827;border-top:1px solid rgba(255,255,255,.08);padding:16px 5%;z-index:99}',
    '#sw-mob-menu a{display:block;padding:12px 0;font-size:15px;font-weight:500;color:rgba(255,255,255,.85);border-bottom:1px solid rgba(255,255,255,.06)}',
    '#sw-mob-menu a:last-child{border-bottom:none}',
    '@media(max-width:768px){.sw-nav{display:none}#sw-mob-btn{display:flex}.sw-cta{display:none}.mm-p{display:none!important}}',
    '@media(max-width:900px){.mm-p{display:none!important}}',
    /* footer */
    '.sw-footer{background:#0b0c0e;color:#fff;padding:56px 5% 28px}',
    '.sw-footer a{color:rgba(255,255,255,.72);text-decoration:underline;text-decoration-color:rgba(255,255,255,.2);text-underline-offset:4px}',
    '.sw-footer a:hover{color:#fff;opacity:1}'
  ].join('');

  /* ── NAV HTML ── */
  var NAV = '<header class="sw-hdr"><div class="sw-hdr-inner"><a href="index.html" class="sw-logo" aria-label="Swifstack"><img src="assets/logo-dark.svg" alt="Swifstack" height="30" style="display:block;height:30px;width:auto"></a>'
    + '<nav class="sw-nav" aria-label="Main">'
    + '<div class="mm"><a class="mm-t" href="index.html#services">Services <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></a><div class="mm-p"><div class="mm-in"><div class="mm-l"><p style="margin:0 0 14px;font-size:28px;line-height:1.2;font-weight:600;letter-spacing:-.02em;color:#111827">AI-native engineering that ships.</p><p style="margin:0;font-size:15px;line-height:1.65;color:#57534e">Six services, one team: strategy, architecture, and delivery under one roof.</p><a href="index.html#stackclarity" style="display:block;margin-top:28px;background:#ebe8e1;border-radius:14px;padding:20px 22px"><span style="display:block;font-family:\'Plus Jakarta Sans\',system-ui,sans-serif;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#4f7bf5;margin-bottom:10px">Start here</span><span style="display:block;font-size:16px;font-weight:600;color:#111827;margin-bottom:6px">StackClarity assessment</span><span style="display:block;font-size:14px;line-height:1.55;color:#57534e">A fixed-scope assessment that ends in a prioritized roadmap.</span></a></div><div class="mm-r svl-wrap"><div class="svl"><div class="sv"><a class="sv-t" href="service-agents.html"><span>AI Agents &amp; Multi-Agent Systems</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></a><div class="sv-sub"><h4>AI Agents &amp; Multi-Agent Systems</h4><div class="sv-grid"><a href="service-agents.html">Generative AI</a><a href="service-agents.html">AI Agents</a><a href="service-agents.html">Multi-Agent Systems</a><a href="service-agents.html">AI Copilots</a><a href="service-agents.html">LLM Integrations</a><a href="service-agents.html">RAG Systems</a></div></div></div><div class="sv"><a class="sv-t" href="service-voice.html"><span>Voice AI &amp; Calling Systems</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></a><div class="sv-sub"><h4>Voice AI &amp; Calling Systems</h4><div class="sv-grid"><a href="service-voice.html">Inbound voice agents</a><a href="service-voice.html">Outbound calling agents</a><a href="service-voice.html">Appointment booking</a><a href="service-voice.html">Call routing &amp; handoff</a><a href="service-voice.html">Call analytics and QA</a><a href="service-voice.html">Telephony integrations</a></div></div></div><div class="sv"><a class="sv-t" href="service-software.html"><span>AI-assisted Software Engineering</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></a><div class="sv-sub"><h4>AI-assisted Software Engineering</h4><div class="sv-grid"><a href="service-software.html">Custom web &amp; mobile apps</a><a href="service-software.html">Legacy modernization</a><a href="service-software.html">API integrations</a><a href="service-software.html">AI-assisted code review</a><a href="service-software.html">MVP builds</a><a href="service-software.html">Technical architecture</a></div></div></div><div class="sv"><a class="sv-t" href="service-cloud.html"><span>Cloud &amp; DevOps</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></a><div class="sv-sub"><h4>Cloud &amp; DevOps</h4><div class="sv-grid"><a href="service-cloud.html">Cloud migration</a><a href="service-cloud.html">CI/CD pipelines</a><a href="service-cloud.html">Infrastructure as code</a><a href="service-cloud.html">Kubernetes &amp; containers</a><a href="service-cloud.html">Monitoring</a><a href="service-cloud.html">Cost optimization</a></div></div></div><div class="sv"><a class="sv-t" href="service-workflow.html"><span>Workflow Automations</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></a><div class="sv-sub"><h4>Workflow Automations</h4><div class="sv-grid"><a href="service-workflow.html">Document processing</a><a href="service-workflow.html">Approval workflows</a><a href="service-workflow.html">CRM &amp; ERP automation</a><a href="service-workflow.html">Data sync</a><a href="service-workflow.html">Human-in-the-loop review</a><a href="service-workflow.html">No-code automations</a></div></div></div><div class="sv"><a class="sv-t" href="service-gtm.html"><span>GTM Engineering</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg></a><div class="sv-sub"><h4>GTM Engineering</h4><div class="sv-grid"><a href="service-gtm.html">Outbound sequencing</a><a href="service-gtm.html">Lead enrichment</a><a href="service-gtm.html">CRM automation</a><a href="service-gtm.html">Lead routing</a><a href="service-gtm.html">Email deliverability</a><a href="service-gtm.html">Pipeline reporting</a></div></div></div></div></div></div></div></div>'
    + '<a href="work.html" style="color:rgba(255,255,255,.78)">Work</a>'
    + '<div class="mm"><a class="mm-t" href="industries.html">StackClarity <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg></a><div class="mm-p"><div class="mm-in"><div class="mm-l"><p style="margin:0 0 14px;font-size:28px;line-height:1.2;font-weight:600;letter-spacing:-.02em;color:#111827">Where StackClarity applies.</p><p style="margin:0;font-size:15px;line-height:1.65;color:#57534e">Each industry has its own AI playbook. We bring the patterns, you bring the domain.</p><a href="index.html#contact" style="display:block;margin-top:28px;background:#ebe8e1;border-radius:14px;padding:20px 22px"><span style="display:block;font-family:\'Plus Jakarta Sans\',system-ui,sans-serif;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#4f7bf5;margin-bottom:10px">Get started</span><span style="display:block;font-size:16px;font-weight:600;color:#111827;margin-bottom:6px">Book a StackClarity session</span><span style="display:block;font-size:14px;line-height:1.55;color:#57534e">Map your systems and leave with a prioritized roadmap.</span></a></div><div class="mm-r" style="grid-template-columns:repeat(3,minmax(0,1fr))"><div class="mm-g"><h4>Regulated</h4><a href="industry-insurance.html">Insurance<small>Submissions, claims, loss runs.</small></a><a href="industry-healthcare.html">Healthcare<small>Intake, scheduling, voice agents.</small></a><a href="industry-financialservices.html">Financial services<small>Underwriting and onboarding.</small></a><a href="industry-legal.html">Legal services<small>First-pass review copilots.</small></a></div><div class="mm-g"><h4>Commerce &amp; hospitality</h4><a href="industry-retail.html">Retail and e-commerce<small>Returns, stockouts, shipping.</small></a><a href="industry-realestate.html">Real estate<small>Leases, addenda, vendor contracts.</small></a><a href="industry-hospitality.html">Hospitality<small>After-hours booking agents.</small></a></div><div class="mm-g"><h4>Operations &amp; software</h4><a href="industry-logistics.html">Logistics and transport<small>Carrier exceptions, routing.</small></a><a href="industry-construction.html">Construction management<small>Submittals, RFIs, change orders.</small></a><a href="industry-saas.html">SaaS<small>Support copilots with product context.</small></a></div></div></div></div></div>'
    + '<a href="index.html#contact" style="color:rgba(255,255,255,.78)">Contact us</a>'
    + '</nav>'
    + '<a href="index.html#contact" class="sw-cta">Get in touch</a>'
    + '<button id="sw-mob-btn" aria-label="Open menu" aria-expanded="false"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12h18M3 6h18M3 18h18"/></svg></button>'
    + '</div>'
    + '<div id="sw-mob-menu" aria-hidden="true">'
    + '<a href="index.html#services">Services</a>'
    + '<a href="work.html">Work</a>'
    + '<a href="industries.html">Industries</a>'
    + '<a href="index.html#contact">Contact us</a>'
    + '<a href="index.html#contact" style="margin-top:8px;display:inline-block;background:#3b66f0;color:#fff;padding:10px 22px;border-radius:8px;font-weight:600">Get in touch</a>'
    + '</div>'
    + '</header>';

  /* ── FOOTER HTML ── */
  var FOOTER = '<footer class="sw-footer"><div style="max-width:1200px;margin:0 auto">'
    + '<div style="display:flex;flex-wrap:wrap;gap:40px 64px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,.1)">'
    + '<div style="flex:1 1 260px"><a href="index.html" aria-label="Swifstack" style="text-decoration:none;display:inline-block"><img src="assets/logo-dark.svg" alt="Swifstack" height="28" style="display:block;height:28px;width:auto"></a><p style="margin:16px 0 0;font-size:15px;line-height:1.6;color:rgba(255,255,255,.55)">AI-native product engineering.<br>Agents, voice AI, and software<br>that ships.</p></div>'
    + '<div style="flex:1 1 140px"><h4 style="margin:0 0 20px;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.45)">Services</h4><div style="display:flex;flex-direction:column;gap:12px;font-size:14px"><a href="service-agents.html">AI Agents</a><a href="service-voice.html">Voice AI</a><a href="service-software.html">Software Eng.</a><a href="service-cloud.html">Cloud &amp; DevOps</a><a href="service-workflow.html">Workflow Auto.</a><a href="service-gtm.html">GTM Eng.</a></div></div>'
    + '<div style="flex:1 1 140px"><h4 style="margin:0 0 20px;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.45)">Industries</h4><div style="display:flex;flex-direction:column;gap:12px;font-size:14px"><a href="industry-insurance.html">Insurance</a><a href="industry-healthcare.html">Healthcare</a><a href="industry-financialservices.html">Financial services</a><a href="industry-logistics.html">Logistics</a><a href="industry-retail.html">Retail</a><a href="industries.html">All industries →</a></div></div>'
    + '<div style="flex:1 1 140px"><h4 style="margin:0 0 20px;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.45)">Work</h4><div style="display:flex;flex-direction:column;gap:12px;font-size:14px"><a href="case-insurance.html">Insurance claims</a><a href="case-healthcare.html">Healthcare voice</a><a href="case-financialservices.html">Financial onboarding</a><a href="case-logistics.html">Logistics exceptions</a><a href="work.html">All case studies →</a></div></div>'
    + '<div style="flex:1 1 200px"><h4 style="margin:0 0 20px;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.45)">Contact</h4><a href="mailto:nick@swifstack.com" style="font-size:15px;color:#a7d7a0">nick@swifstack.com</a><div style="margin-top:24px"><a href="index.html#contact" style="display:inline-block;background:#3b66f0;color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600">Book a call</a></div></div>'
    + '</div>'
    + '<div style="padding-top:24px;display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;font-size:13px;color:rgba(255,255,255,.4)">'
    + '<span>&#169; 2026 Swifstack. All rights reserved.</span>'
    + '<span style="display:flex;gap:20px"><a href="index.html" style="text-decoration:none;color:rgba(255,255,255,.4)">Privacy policy</a><a href="index.html" style="text-decoration:none;color:rgba(255,255,255,.4)">Terms of service</a></span>'
    + '</div></div></footer>';

  function run() {
    /* inject CSS */
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    /* replace / insert header */
    var h = document.querySelector('body > div > header, body > header');
    if (!h) h = document.querySelector('header');
    if (h) {
      h.outerHTML = NAV;
    } else {
      document.body.insertAdjacentHTML('afterbegin', NAV);
    }

    /* replace / insert footer */
    var f = document.querySelector('body > div > footer, body > footer');
    if (!f) f = document.querySelector('footer');
    if (f) {
      f.outerHTML = FOOTER;
    } else {
      document.body.insertAdjacentHTML('beforeend', FOOTER);
    }

    /* active page highlight */
    var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var all = document.querySelectorAll('.sw-nav a, #sw-mob-menu a');
    all.forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
      if (href && href === page) {
        a.style.color = '#ffffff';
        a.style.fontWeight = '700';
      }
    });

    /* mobile toggle */
    var btn = document.getElementById('sw-mob-btn');
    var menu = document.getElementById('sw-mob-menu');
    if (btn && menu) {
      btn.addEventListener('click', function () {
        var open = menu.style.display === 'block';
        menu.style.display = open ? 'none' : 'block';
        menu.setAttribute('aria-hidden', open ? 'true' : 'false');
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
