'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>
);
const ChevronRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
);

const services = [
  { href: '/service-agents', label: 'AI Agents & Multi-Agent Systems', items: ['Generative AI','AI Agents','Multi-Agent Systems','AI Copilots','LLM Integrations','RAG Systems'] },
  { href: '/service-voice', label: 'Voice AI & Calling Systems', items: ['Inbound voice agents','Outbound calling agents','Appointment booking','Call routing & handoff','Call analytics and QA','Telephony integrations'] },
  { href: '/service-software', label: 'AI-assisted Software Engineering', items: ['Custom web & mobile apps','Legacy modernization','API integrations','AI-assisted code review','MVP builds','Technical architecture'] },
  { href: '/service-cloud', label: 'Cloud & DevOps', items: ['Cloud migration','CI/CD pipelines','Infrastructure as code','Kubernetes & containers','Monitoring','Cost optimization'] },
  { href: '/service-workflow', label: 'Workflow Automations', items: ['Document processing','Approval workflows','CRM & ERP automation','Data sync','Human-in-the-loop review','No-code automations'] },
  { href: '/service-gtm', label: 'GTM Engineering', items: ['Outbound sequencing','Lead enrichment','CRM automation','Lead routing','Email deliverability','Pipeline reporting'] },
];

const industries = [
  { href: '/industry-insurance', label: 'Insurance', desc: 'Submissions, claims, loss runs.' },
  { href: '/industry-healthcare', label: 'Healthcare', desc: 'Intake, scheduling, voice agents.' },
  { href: '/industry-financialservices', label: 'Financial services', desc: 'Underwriting and onboarding.' },
  { href: '/industry-legal', label: 'Legal services', desc: 'First-pass review copilots.' },
  { href: '/industry-retail', label: 'Retail and e-commerce', desc: 'Returns, stockouts, shipping.' },
  { href: '/industry-realestate', label: 'Real estate', desc: 'Leases, addenda, vendor contracts.' },
  { href: '/industry-hospitality', label: 'Hospitality', desc: 'After-hours booking agents.' },
  { href: '/industry-logistics', label: 'Logistics and transport', desc: 'Carrier exceptions, routing.' },
  { href: '/industry-construction', label: 'Construction management', desc: 'Submittals, RFIs, change orders.' },
  { href: '/industry-saas', label: 'SaaS', desc: 'Support copilots with product context.' },
];

export default function Nav() {
  const [mobOpen, setMobOpen] = useState(false);
  const [activeSv, setActiveSv] = useState(0);

  return (
    <header className="hdr" style={{ background: '#111827', padding: '0 5%' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-between', gap: '0 20px', minHeight: 68 }}>
        <Link href="/" aria-label="Swifstack" style={{ flexShrink: 0 }}>
          <Image src="/assets/logo-dark.svg" alt="Swifstack" width={120} height={30} style={{ display: 'block', height: 30, width: 'auto' }} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="sw-nav" aria-label="Main" style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center', gap: '0 24px', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,.78)' }}>

          {/* Services mega-menu */}
          <div className="mm">
            <Link className="mm-t" href="/#services" style={{ color: 'rgba(255,255,255,.78)' }}>Services <ChevronDown /></Link>
            <div className="mm-p">
              <div className="mm-in">
                <div className="mm-l">
                  <p style={{ margin: '0 0 14px', fontSize: 28, lineHeight: 1.2, fontWeight: 600, letterSpacing: '-.02em', color: '#111827' }}>AI-native engineering that ships.</p>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: '#57534e' }}>Six services, one team: strategy, architecture, and delivery under one roof.</p>
                  <Link href="/#stackclarity" style={{ display: 'block', marginTop: 28, background: '#ebe8e1', borderRadius: 14, padding: '20px 22px' }}>
                    <span style={{ display: 'block', fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif", fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#4f7bf5', marginBottom: 10 }}>Start here</span>
                    <span style={{ display: 'block', fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 6 }}>StackClarity assessment</span>
                    <span style={{ display: 'block', fontSize: 14, lineHeight: 1.55, color: '#57534e' }}>A fixed-scope assessment that ends in a prioritized roadmap.</span>
                  </Link>
                </div>
                <div className="mm-r svl-wrap">
                  <div className="svl">
                    {services.map((sv, i) => (
                      <div key={sv.href} className="sv" onMouseEnter={() => setActiveSv(i)}>
                        <Link className="sv-t" href={sv.href}>
                          <span>{sv.label}</span><ChevronRight />
                        </Link>
                        <div className="sv-sub" style={activeSv === i ? { display: 'block' } : {}}>
                          <h4>{sv.label}</h4>
                          <div className="sv-grid">
                            {sv.items.map(item => <Link key={item} href={sv.href}>{item}</Link>)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link href="/work" style={{ color: 'rgba(255,255,255,.78)' }}>Work</Link>

          {/* StackClarity / Industries mega-menu */}
          <div className="mm">
            <Link className="mm-t" href="/industries" style={{ color: 'rgba(255,255,255,.78)' }}>StackClarity <ChevronDown /></Link>
            <div className="mm-p">
              <div className="mm-in">
                <div className="mm-l">
                  <p style={{ margin: '0 0 14px', fontSize: 28, lineHeight: 1.2, fontWeight: 600, letterSpacing: '-.02em', color: '#111827' }}>Where StackClarity applies.</p>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: '#57534e' }}>Each industry has its own AI playbook. We bring the patterns, you bring the domain.</p>
                  <Link href="/#contact" style={{ display: 'block', marginTop: 28, background: '#ebe8e1', borderRadius: 14, padding: '20px 22px' }}>
                    <span style={{ display: 'block', fontFamily: "'Plus Jakarta Sans',system-ui,sans-serif", fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#4f7bf5', marginBottom: 10 }}>Get started</span>
                    <span style={{ display: 'block', fontSize: 16, fontWeight: 600, color: '#111827', marginBottom: 6 }}>Book a StackClarity session</span>
                    <span style={{ display: 'block', fontSize: 14, lineHeight: 1.55, color: '#57534e' }}>Map your systems and leave with a prioritized roadmap.</span>
                  </Link>
                </div>
                <div className="mm-r" style={{ gridTemplateColumns: 'repeat(2,minmax(0,1fr))' }}>
                  <div className="mm-g">
                    <h4>Regulated & Professional</h4>
                    {industries.slice(0, 5).map(ind => (
                      <Link key={ind.href} href={ind.href}>{ind.label}<small>{ind.desc}</small></Link>
                    ))}
                  </div>
                  <div className="mm-g">
                    <h4>Operations & Commerce</h4>
                    {industries.slice(5).map(ind => (
                      <Link key={ind.href} href={ind.href}>{ind.label}<small>{ind.desc}</small></Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <Link href="/#contact" style={{ background: '#3b66f0', color: '#fff', padding: '10px 22px', borderRadius: 8, fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap', flexShrink: 0 }} className="sw-cta-nav">
          Get in touch
        </Link>

        {/* Mobile burger */}
        <button id="sw-mob-btn" aria-label="Open menu" aria-expanded={mobOpen} onClick={() => setMobOpen(o => !o)}
          style={{ display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobOpen && (
        <div style={{ position: 'absolute', left: 0, right: 0, top: '100%', background: '#111827', borderTop: '1px solid rgba(255,255,255,.08)', padding: '16px 5%', zIndex: 99 }}>
          <Link href="/#services" style={{ display: 'block', padding: '12px 0', fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,.85)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>Services</Link>
          <Link href="/work" style={{ display: 'block', padding: '12px 0', fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,.85)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>Work</Link>
          <Link href="/industries" style={{ display: 'block', padding: '12px 0', fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,.85)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>Industries</Link>
          <Link href="/#contact" style={{ display: 'block', padding: '12px 0', fontSize: 15, fontWeight: 500, color: 'rgba(255,255,255,.85)' }}>Contact us</Link>
          <Link href="/#contact" style={{ marginTop: 8, display: 'inline-block', background: '#3b66f0', color: '#fff', padding: '10px 22px', borderRadius: 8, fontWeight: 600 }}>Get in touch</Link>
        </div>
      )}
    </header>
  );
}
