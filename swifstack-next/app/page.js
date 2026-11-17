'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Hero from '../components/Hero';

const sols = [
  { label: 'Multi-agent systems', client: 'Financial services', tag: 'Multi-agent', problem: 'Underwriting and onboarding spanned many manual, compliance-heavy steps, and every decision waited on a person to move the file along.', built: 'Coordinated agents for each step, with logged decisions and human approval, so the workflow mirrors how the team already works and stays auditable.', chips: ['Loan origination system', 'KYC / AML checks', 'Audit log', 'Human approval'], stat1: '73%', label1: 'of decisions handled by agents without a manual hand-off', stat2: '14 days → 6 hrs', label2: 'average time to decision' },
  { label: 'Document intelligence', client: 'Insurance', tag: 'Doc intelligence', problem: 'Underwriters and claims staff re-keyed data from ACORD forms, loss runs, and FNOL reports. Turnaround was slow and errors crept in.', built: 'A document pipeline that classifies, extracts, and validates fields, flags low-confidence items for human review, and writes straight into the policy or claims system.', chips: ['ACORD forms', 'Loss runs', 'Human review', 'Claims system'], stat1: '84%', label1: 'reduction in manual data entry per document', stat2: '3 days → 8 min', label2: 'average intake time per submission' },
  { label: 'Voice AI', client: 'Healthcare', tag: 'Voice AI', problem: 'Front desks were overwhelmed by scheduling, reminder, and verification calls. No-shows were high and after-hours calls went unanswered.', built: 'A voice agent that books, moves, and cancels appointments in the EHR, confirms insurance, and hands complex calls to staff with a summary.', chips: ['EHR scheduling', 'Insurance check', 'After-hours coverage', 'Staff handoff'], stat1: '68%', label1: 'of inbound calls handled without staff', stat2: '22% → 7%', label2: 'no-show rate' },
  { label: 'Custom copilot', client: 'Legal services', tag: 'Copilot', problem: 'Attorneys spent billable hours on first-pass document review against the firm\'s own playbook.', built: 'A copilot that checks documents against the firm\'s playbook, flags issues with citations, and keeps attorneys in control of every decision.', chips: ['Playbook checks', 'Cited findings', 'Attorney review'], stat1: '71%', label1: 'reduction in first-pass review time', stat2: '4 h → 25 min', label2: 'average review time per document' },
];

const testimonials = [
  { quote: '"The agent handles everything we used to do manually. Our team now focuses on the work that actually requires judgment."', name: 'Client', role: 'Operations Lead' },
  { quote: '"We went live in six weeks. The integration was seamless and the team adopted it faster than any tool we have rolled out."', name: 'Client', role: 'CTO' },
  { quote: '"They understood our compliance requirements from day one and built exactly what we needed without over-engineering it."', name: 'Client', role: 'VP Engineering' },
];

const logos = ['Swope Health', 'Thomas James Homes', 'NasClaims', 'Obvi', 'Pulse Point', 'Ace Indoor Golf', 'TripMerchant', 'ShipFusion'];

const svcs = [
  { href: '/service-agents', title: 'AI Agents & Multi-Agent Systems', desc: 'Agents and coordinated multi-agent systems that handle multi-step work, with logged decisions and human approval where it matters.', bg: '#3b66f0', span: 4, items: ['Generative AI', 'AI Agents', 'Multi-Agent Systems', 'AI Copilots', 'LLM Integrations', 'RAG Systems'], art: <svg width="132" height="132" viewBox="0 0 132 132" fill="none" stroke="currentColor" strokeWidth="1.6" strokeOpacity="0.75" aria-hidden="true"><circle cx="66" cy="66" r="40" strokeDasharray="3 6"/><circle cx="66" cy="66" r="14" fill="currentColor" fillOpacity="0.9" stroke="none"/><circle cx="66" cy="22" r="8"/><circle cx="24" cy="94" r="8"/><circle cx="108" cy="94" r="8"/><path d="M66 30v22M30 88l26-16M102 88L76 72"/></svg>, light: false },
  { href: '/service-voice', title: 'Voice AI & Calling Systems', desc: 'Voice agents that book, verify, and route calls around the clock, with a human handoff when it matters.', bg: '#111a2e', span: 2, items: ['Inbound voice agents', 'Outbound calling agents', 'Appointment booking', 'Call routing and handoff', 'Call analytics and QA', 'Telephony integrations'], art: <svg width="132" height="132" viewBox="0 0 132 132" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeOpacity="0.75" aria-hidden="true"><path d="M24 56v20M42 40v52M60 24v84M78 44v44M96 52v28M114 60v12"/></svg>, light: false },
  { href: '/service-software', title: 'AI-assisted Software Engineering', desc: 'Custom products and legacy modernization, built faster and reviewed by senior engineers.', bg: '#1e3a8a', span: 2, items: ['Custom web and mobile apps', 'Legacy modernization', 'API integrations', 'AI-assisted code review', 'MVP builds', 'Technical architecture'], art: <svg width="132" height="132" viewBox="0 0 132 132" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.75" aria-hidden="true"><rect x="18" y="26" width="96" height="72" rx="8"/><path d="M18 44h96M52 62l-12 12 12 12M80 62l12 12-12 12M70 58l-8 32"/></svg>, light: false },
  { href: '/service-cloud', title: 'Cloud & DevOps', desc: 'Secure, cost-aware cloud environments, CI/CD, and migrations that keep everything running.', bg: '#e8f0ff', span: 4, items: ['Cloud migration', 'CI/CD pipelines', 'Infrastructure as code', 'Kubernetes and containers', 'Monitoring', 'Cost optimization'], art: <svg width="132" height="132" viewBox="0 0 132 132" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" aria-hidden="true"><path d="M38 90a20 20 0 01-2-39.9A28 28 0 0189 46a22 22 0 016 44H38z"/><path d="M52 104h28M66 90v14"/></svg>, light: true },
  { href: '/service-workflow', title: 'Workflow Automations', desc: 'Document intelligence and workflow automation that remove manual re-keying, routing, and review.', bg: '#2e4a3a', span: 4, items: ['Document processing', 'Approval workflows', 'CRM and ERP automation', 'Data sync', 'Human-in-the-loop review', 'No-code automations'], art: <svg width="132" height="132" viewBox="0 0 132 132" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.75" aria-hidden="true"><rect x="10" y="50" width="28" height="28" rx="6"/><rect x="52" y="20" width="28" height="28" rx="6"/><rect x="52" y="82" width="28" height="28" rx="6"/><rect x="94" y="50" width="28" height="28" rx="6" fill="currentColor" fillOpacity="0.9"/><path d="M38 64h6l8-30M38 64h6l8 32M80 34h6l8 30M80 96h6l8-32"/></svg>, light: false },
  { href: '/service-gtm', title: 'GTM Engineering', desc: 'Outbound infrastructure and workflow automation for sales teams that run on volume.', bg: '#111a2e', span: 2, items: ['Outbound sequencing', 'Lead enrichment', 'CRM automation', 'Lead routing', 'Email deliverability', 'Pipeline reporting'], art: <svg width="132" height="132" viewBox="0 0 132 132" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.75" aria-hidden="true"><circle cx="66" cy="66" r="44"/><circle cx="66" cy="66" r="28"/><circle cx="66" cy="66" r="10" fill="currentColor" fillOpacity="0.9" stroke="none"/><path d="M66 66L104 28M94 26h12v12"/></svg>, light: false },
];

const industries = [
  { href: '/industry-insurance', name: 'Insurance', desc: 'Submissions, claims, and loss runs arrive as unstructured documents that staff re-key by hand.' },
  { href: '/industry-healthcare', name: 'Healthcare', desc: 'Front desks are buried in scheduling calls, and no-shows and missed after-hours calls cost revenue.' },
  { href: '/industry-financialservices', name: 'Financial services', desc: 'Underwriting and onboarding span manual, compliance-heavy steps that slow every decision.' },
  { href: '/industry-logistics', name: 'Logistics and transport', desc: 'Carrier exceptions arrive from many systems at once and get chased by hand.' },
  { href: '/industry-retail', name: 'Retail and e-commerce', desc: 'Returns, stockouts, and shipping delays eat ops time on thin margins.' },
  { href: '/industry-realestate', name: 'Real estate', desc: 'Answers hide in leases, addenda, and vendor contracts spread across properties.' },
];

export default function HomePage() {
  const [tab, setTab] = useState(0);
  const [tIdx, setTIdx] = useState(0);
  const [formState, setFormState] = useState({ name: '', email: '', topic: '', budget: '', message: '', status: '' });

  const cur = sols[tab];
  const n = testimonials.length;
  const prev = () => setTIdx(i => ((i - 1) + n) % n);
  const next = () => setTIdx(i => (i + 1) % n);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState(s => ({ ...s, status: 'sending' }));
    await new Promise(r => setTimeout(r, 800));
    setFormState(s => ({ ...s, status: 'sent' }));
  };

  return (
    <>
      {/* 1 HERO */}
      <section id="top" style={{ background: '#111827', padding: '96px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 60, right: -120, width: 640, height: 640, background: 'radial-gradient(circle,rgba(167,215,160,0.22),rgba(167,215,160,0) 68%)' }} />
        <div style={{ position: 'absolute', bottom: -260, left: -160, width: 640, height: 640, background: 'radial-gradient(circle,rgba(37,99,235,0.2),rgba(37,99,235,0) 68%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 56 }}>
          <div style={{ flex: '1 1 440px', minWidth: 0 }}>
            <div style={{ display: 'inline-block', background: 'rgba(37,99,235,0.16)', border: '1px solid rgba(75,131,255,0.35)', color: '#9cc0ff', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 16px', borderRadius: 100, marginBottom: 24 }}>AI-native product engineering</div>
            <h1 style={{ margin: '0 0 24px', fontSize: 'clamp(40px,5.5vw,72px)', lineHeight: 1.1, fontWeight: 700, letterSpacing: '-0.03em', color: '#ffffff' }}>We build what <span style={{ color: '#a7d7a0' }}>AI makes possible</span></h1>
            <p style={{ margin: '0 0 36px', maxWidth: 500, fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.72)' }}>AI agents, voice AI, and AI-assisted software engineering for operations-heavy teams, built to plug into the systems you already run.</p>
            <Link href="#services" aria-label="Discover more: scroll to services" style={{ display: 'inline-flex', alignItems: 'center', gap: 20, color: '#ffffff', fontSize: 20, fontWeight: 700 }}>
              Discover more
              <span style={{ width: 48, height: 48, borderRadius: 10, background: '#a7d7a0', color: '#0a1a10', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>
              </span>
            </Link>
          </div>
          <div style={{ flex: '1 1 420px', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
            <Hero />
          </div>
        </div>
      </section>

      {/* 2 CLIENT LOGOS */}
      <section aria-label="Clients" style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '40px 0 44px' }}>
        <p style={{ margin: '0 0 28px', padding: '0 5%', textAlign: 'center', fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6b7280' }}>Trusted by teams at</p>
        <div className="mq">
          <ul className="mq-track">
            {[...logos, ...logos].map((name, i) => (
              <li key={i} className="lg" aria-hidden={i >= logos.length ? 'true' : undefined}>{name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 SERVICES */}
      <section id="services" style={{ background: '#ffffff', padding: '104px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 48 }}>
            <div style={{ flex: '1 1 420px' }}>
              <div className="lbl">What we do</div>
              <h2 style={{ margin: 0, fontSize: 40, lineHeight: 1.2, fontWeight: 700, letterSpacing: '-0.03em', color: '#111827' }}>Six ways we put AI and software to work</h2>
            </div>
            <p style={{ margin: 0, flex: '1 1 320px', maxWidth: 480, fontSize: 16, lineHeight: 1.7, color: '#6b7280' }}>Each service starts from an operational problem and ends in something your team uses every day.</p>
          </div>
          <div className="svc-grid">
            {svcs.map(sv => (
              <article key={sv.href} className={`svc s${sv.span}${sv.light ? ' light' : ''}`} style={{ background: sv.bg }}>
                <div className="art" style={{ color: sv.light ? '#1d4ed8' : '#ffffff' }}>{sv.art}</div>
                <ul className="bul">{sv.items.map(it => <li key={it}>{it}</li>)}</ul>
                <h3><Link href={sv.href}>{sv.title}</Link></h3>
                <p className="d">{sv.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 STACKCLARITY */}
      <section id="stackclarity" style={{ background: '#111827', padding: '104px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -220, right: -200, width: 640, height: 640, background: 'radial-gradient(circle,rgba(167,215,160,0.18),rgba(167,215,160,0) 68%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ maxWidth: 680, marginBottom: 56 }}>
            <div className="lbl-d">StackClarity</div>
            <h2 style={{ margin: '0 0 16px', fontSize: 40, lineHeight: 1.2, fontWeight: 700, letterSpacing: '-0.03em', color: '#ffffff' }}>Know your stack before you build on it</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)' }}>A fixed-scope assessment that maps your systems, data, and manual work, then gives you a prioritized roadmap for software, automation, voice AI, and cloud.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20, marginBottom: 64 }}>
            {[{ n: 1, t: 'Map', d: 'Systems, integrations, data flows, and where people are doing manual work.' }, { n: 2, t: 'Diagnose', d: 'What is brittle, duplicated, costly, or ready to automate.' }, { n: 3, t: 'Roadmap', d: 'A prioritized plan with effort, cost, and expected impact for each move.' }].map(s => (
              <div key={s.n} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <span style={{ width: 36, height: 36, borderRadius: '50%', background: '#3b66f0', color: '#ffffff', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.n}</span>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#ffffff' }}>{s.t}</h3>
                </div>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.65, color: 'rgba(255,255,255,0.7)' }}>{s.d}</p>
              </div>
            ))}
          </div>
          <h3 style={{ margin: '0 0 6px', fontSize: 22, fontWeight: 700, color: '#ffffff' }}>Built for the way your industry works</h3>
          <p style={{ margin: '0 0 24px', fontSize: 15, color: 'rgba(255,255,255,0.65)' }}>The first question we answer: which part of your stack should change first.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 14, marginBottom: 28 }}>
            {industries.map(ind => (
              <Link key={ind.href} href={ind.href} style={{ display: 'block', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, padding: '20px 22px' }}>
                <p style={{ margin: '0 0 6px', fontSize: 15, fontWeight: 700, color: '#ffffff' }}>{ind.name}</p>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.68)' }}>{ind.desc}</p>
              </Link>
            ))}
          </div>
          <Link href="/industries" style={{ display: 'inline-block', fontSize: 15, fontWeight: 600, color: '#9cc0ff' }}>See all industries →</Link>
        </div>
      </section>

      {/* 5 FEATURED WORK */}
      <section id="why" style={{ background: '#f3f4fb', padding: '104px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="lbl">Featured work</div>
          <h2 style={{ margin: '0 0 16px', maxWidth: 780, fontSize: 'clamp(34px,4.4vw,52px)', lineHeight: 1.12, fontWeight: 800, letterSpacing: '-0.03em', color: '#111827' }}>Why teams choose us: we have already shipped the hard parts</h2>
          <p style={{ margin: '0 0 32px', maxWidth: 640, fontSize: 18, lineHeight: 1.6, color: '#4b5563' }}>Four solutions our clients ask for first. Pick the one that sounds like your problem.</p>
          <div role="group" aria-label="Solutions" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
            {sols.map((s, i) => (
              <button key={i} type="button" aria-pressed={i === tab} onClick={() => setTab(i)}
                style={{ fontFamily: 'inherit', fontSize: 15, fontWeight: 600, padding: '12px 22px', borderRadius: 100, cursor: 'pointer', border: '1px solid #111827', background: i === tab ? '#111827' : 'transparent', color: i === tab ? '#ffffff' : '#111827' }}>{s.label}</button>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', background: '#ffffff', border: '1px solid #dfe2f0', borderRadius: 28, overflow: 'hidden' }}>
            <div style={{ flex: '1 1 420px', minWidth: 0, padding: 48 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <h3 style={{ margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>{cur.client}</h3>
                <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#475569', background: '#eef0f7', border: '1px solid #dfe2f0', borderRadius: 6, padding: '4px 10px' }}>{cur.tag}</span>
              </div>
              <p style={{ margin: '0 0 8px', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#475569' }}>The problem</p>
              <p style={{ margin: '0 0 28px', fontSize: 20, lineHeight: 1.55, color: '#111827' }}>{cur.problem}</p>
              <p style={{ margin: '0 0 8px', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#475569' }}>What we built</p>
              <p style={{ margin: '0 0 28px', fontSize: 20, lineHeight: 1.55, color: '#111827' }}>{cur.built}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {cur.chips.map(c => <span key={c} style={{ fontSize: 14, fontWeight: 500, color: '#111827', background: '#ffffff', border: '1px solid #dfe2f0', borderRadius: 8, padding: '8px 14px' }}>{c}</span>)}
              </div>
            </div>
            <div style={{ flex: '1 1 420px', minWidth: 0, padding: 48, backgroundColor: '#111827', backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px,transparent 1px)', backgroundSize: '22px 22px', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ alignSelf: 'flex-start', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#111827', background: '#a7d7a0', borderRadius: 6, padding: '5px 10px' }}>Result</span>
              <p style={{ margin: '16px 0 8px', fontSize: 'clamp(56px,7vw,88px)', lineHeight: 1, fontWeight: 800, letterSpacing: '-0.03em' }}>{cur.stat1}</p>
              <p style={{ margin: '0 0 28px', fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,0.78)' }}>{cur.label1}</p>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: 28 }}>
                <p style={{ margin: '0 0 8px', fontSize: 'clamp(32px,4vw,48px)', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.02em' }}>{cur.stat2}</p>
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,0.78)' }}>{cur.label2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 TESTIMONIALS */}
      <section id="testimonials" style={{ background: '#111827', padding: '104px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(59,130,246,0.14)', border: '1px solid rgba(96,165,250,0.35)', color: '#9cc0ff', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: 100, marginBottom: 16 }}>What clients say</div>
          <h2 style={{ margin: '0 0 48px', maxWidth: 780, fontSize: 'clamp(34px,4.4vw,52px)', lineHeight: 1.12, fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff' }}>Hear it from the teams we have built for</h2>
          <div style={{ minHeight: 240, maxWidth: 960 }}>
            <figure style={{ margin: 0 }}>
              <blockquote style={{ margin: '0 0 32px', fontSize: 30, lineHeight: 1.4, fontWeight: 400, letterSpacing: '-0.01em', color: '#ffffff' }}>{testimonials[tIdx].quote}</blockquote>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>
                </span>
                <span>
                  <span style={{ display: 'block', fontSize: 16, fontWeight: 700, color: '#ffffff' }}>{testimonials[tIdx].name}</span>
                  <span style={{ display: 'block', fontSize: 14, color: '#94a3b8' }}>{testimonials[tIdx].role}</span>
                </span>
              </figcaption>
            </figure>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 24 }}>
            <button type="button" aria-label="Previous testimonial" onClick={prev} style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.06)', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6"/></svg>
            </button>
            <button type="button" aria-label="Next testimonial" onClick={next} style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.28)', background: 'rgba(255,255,255,0.06)', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: 12 }}>
              {testimonials.map((_, i) => (
                <button key={i} type="button" aria-label={`Testimonial ${i + 1}`} onClick={() => setTIdx(i)} style={{ width: 32, height: 44, padding: 0, border: 0, background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ display: 'block', width: 10, height: 10, borderRadius: '50%', background: i === tIdx ? '#ffffff' : 'rgba(255,255,255,0.3)' }} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 CONTACT */}
      <section id="contact" style={{ background: '#f4f2ec', padding: '96px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', gap: '56px 72px' }}>
          <div style={{ flex: '1 1 380px', minWidth: 0 }}>
            <h2 style={{ margin: '0 0 28px', fontSize: 'clamp(40px,5.2vw,68px)', lineHeight: 1.1, fontWeight: 300, letterSpacing: '-0.03em', color: '#111111' }}>Have Questions? <span style={{ color: '#4f7bf5' }}>Let&apos;s Talk.</span></h2>
            <p style={{ margin: '0 0 32px', maxWidth: 520, fontSize: 20, lineHeight: 1.6, color: '#57534e' }}>Free 30 minute call with a senior engineer, not a salesperson. We have got the answers to your questions.</p>
            <Link href="mailto:nick@swifstack.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#3b66f0', color: '#ffffff', padding: '16px 30px', borderRadius: 100, fontSize: 16, fontWeight: 500 }}>
              Book a StackClarity Session
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <div style={{ marginTop: 48, maxWidth: 520 }}>
              <Link href="mailto:nick@swifstack.com" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid #a8a29e', fontSize: 17, color: '#44403c' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
                nick@swifstack.com
              </Link>
            </div>
          </div>

          <form id="sw-contact-form" noValidate onSubmit={handleSubmit}
            style={{ flex: '1 1 460px', minWidth: 0, background: '#faf9f6', border: '1px solid #e7e3da', borderRadius: 24, padding: 44, boxShadow: '0 24px 60px rgba(60,50,30,0.08)' }}>
            {formState.status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
                <p style={{ fontSize: 20, fontWeight: 700, color: '#111827', margin: '0 0 8px' }}>Message sent!</p>
                <p style={{ fontSize: 16, color: '#57534e', margin: 0 }}>We will be in touch within one business day.</p>
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24, marginBottom: 24 }}>
                  <div><label htmlFor="f-name" style={{ display: 'block', marginBottom: 10, fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#57534e' }}>Full name <span style={{ color: '#3b66f0' }}>*</span></label><input id="f-name" name="name" type="text" placeholder="Jane Park" required onChange={e => setFormState(s => ({ ...s, name: e.target.value }))} style={{ boxSizing: 'border-box', width: '100%', height: 56, padding: '0 22px', border: '1px solid #e0dcd2', borderRadius: 14, background: '#ffffff', fontFamily: 'inherit', fontSize: 17, color: '#111111' }} /></div>
                  <div><label htmlFor="f-email" style={{ display: 'block', marginBottom: 10, fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#57534e' }}>Work email <span style={{ color: '#3b66f0' }}>*</span></label><input id="f-email" name="email" type="email" placeholder="jane@company.com" required onChange={e => setFormState(s => ({ ...s, email: e.target.value }))} style={{ boxSizing: 'border-box', width: '100%', height: 56, padding: '0 22px', border: '1px solid #e0dcd2', borderRadius: 14, background: '#ffffff', fontFamily: 'inherit', fontSize: 17, color: '#111111' }} /></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24, marginBottom: 24 }}>
                  <div><label htmlFor="f-topic" style={{ display: 'block', marginBottom: 10, fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#57534e' }}>What&apos;s the project about?</label><select id="f-topic" name="topic" onChange={e => setFormState(s => ({ ...s, topic: e.target.value }))} style={{ boxSizing: 'border-box', width: '100%', height: 56, padding: '0 18px', border: '1px solid #e0dcd2', borderRadius: 14, background: '#ffffff', fontFamily: 'inherit', fontSize: 17, color: '#111111' }}><option>Select…</option><option>AI Agents &amp; Multi-Agent Systems</option><option>Voice AI &amp; Calling Systems</option><option>AI-assisted Software Engineering</option><option>Cloud &amp; DevOps</option><option>Workflow Automations</option><option>GTM Engineering</option><option>Not sure yet (StackClarity)</option></select></div>
                  <div><label htmlFor="f-budget" style={{ display: 'block', marginBottom: 10, fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#57534e' }}>Approximate budget</label><select id="f-budget" name="budget" onChange={e => setFormState(s => ({ ...s, budget: e.target.value }))} style={{ boxSizing: 'border-box', width: '100%', height: 56, padding: '0 18px', border: '1px solid #e0dcd2', borderRadius: 14, background: '#ffffff', fontFamily: 'inherit', fontSize: 17, color: '#111111' }}><option>Select…</option><option>Under $10k</option><option>$10k to $25k</option><option>$25k to $50k</option><option>$50k to $100k</option><option>$100k+</option><option>Not sure yet</option></select></div>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label htmlFor="f-goal" style={{ display: 'block', marginBottom: 10, fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#57534e' }}>What are you trying to ship? <span style={{ color: '#3b66f0' }}>*</span></label>
                  <textarea id="f-goal" name="message" placeholder="A few sentences about the goal, the constraints, and any deadlines we should know about." required onChange={e => setFormState(s => ({ ...s, message: e.target.value }))} style={{ boxSizing: 'border-box', width: '100%', height: 170, padding: '18px 22px', border: '1px solid #e0dcd2', borderRadius: 14, background: '#ffffff', fontFamily: 'inherit', fontSize: 17, lineHeight: 1.5, color: '#111111', resize: 'vertical' }} />
                </div>
                <div style={{ borderTop: '1px solid #e7e3da', paddingTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  <button type="submit" disabled={formState.status === 'sending'} style={{ background: '#3b66f0', color: '#ffffff', border: 0, borderRadius: 100, padding: '0 36px', height: 56, fontFamily: 'inherit', fontSize: 17, fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, opacity: formState.status === 'sending' ? 0.7 : 1 }}>
                    {formState.status === 'sending' ? 'Sending…' : 'Send message'}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
