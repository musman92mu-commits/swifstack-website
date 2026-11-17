'use client';
import { useState } from 'react';
import Link from 'next/link';

const cases = [
  { href: '/case-insurance', num: '01', industry: 'Insurance', bg: 'linear-gradient(135deg,#3b66f0,#1e3a8a)', blurb: 'Submissions, loss runs and claims forms read, checked and filed automatically.', title: 'Document Intelligence for NasClaims: 75% Less Manual Entry' },
  { href: '/case-healthcare', num: '02', industry: 'Healthcare', bg: 'linear-gradient(135deg,#2e4a3a,#1f2937)', blurb: 'Scheduling, reminders and after-hours calls handled by a voice agent.', title: 'Voice AI Front Desk for Swope Health: 55% Calls Without Staff' },
  { href: '/case-financialservices', num: '03', industry: 'Financial services', bg: 'linear-gradient(135deg,#1e3a8a,#111827)', blurb: 'Coordinated agents move underwriting and onboarding files through every step.', title: 'Multi-Agent Onboarding for Payra: 60% Faster Decisions' },
  { href: '/case-logistics', num: '04', industry: 'Logistics', bg: 'linear-gradient(135deg,#3f6b52,#1f3a2c)', blurb: 'Carrier exceptions diagnosed, rebooked and communicated by specialist agents.', title: 'Exception Agents for ShipFusion: 45% Fewer Manual Touches' },
  { href: '/case-retail', num: '05', industry: 'Retail', bg: 'linear-gradient(135deg,#4b5563,#1f2937)', blurb: 'Returns, stockouts and shipping delays routed and resolved without ops chasing.', title: 'Operations Automation for Obvi: 35 Hours Saved Per Week' },
  { href: '/case-realestate', num: '06', industry: 'Real estate', bg: 'linear-gradient(135deg,#334155,#111827)', blurb: 'Questions answered from leases, addenda and vendor contracts across properties.', title: 'RAG Assistant for Thomas James Homes: 65% Faster Document Lookup' },
  { href: '/case-saas', num: '07', industry: 'SaaS', bg: 'linear-gradient(135deg,#1d4ed8,#172554)', blurb: 'A copilot inside the support tool drafts answers with product knowledge.', title: 'Support Copilot for Pulse Point: 45% Faster First Response' },
  { href: '/case-legal', num: '08', industry: 'Legal', bg: 'linear-gradient(135deg,#4a7c59,#1f3a2c)', blurb: "Documents checked against the firm's own playbook, with cited findings.", title: 'Playbook Copilot for Kaplan Martin LLP: 55% Less Review Time' },
  { href: '/case-hospitality', num: '09', industry: 'Hospitality', bg: 'linear-gradient(135deg,#6b7280,#1f2937)', blurb: 'Bookings and changes captured by a voice agent, day and night.', title: 'Voice Booking Agent for TripMerchant: 55% Routine Calls Automated' },
  { href: '/case-construction', num: '10', industry: 'Construction', bg: 'linear-gradient(135deg,#4a6b3a,#22351b)', blurb: 'Submittals, RFIs and change orders captured, routed and tracked automatically.', title: 'Submittal & RFI Automation for Atlas10: 65% Less Manual Logging' },
];

const filters = ['All', 'Insurance', 'Healthcare', 'Financial services', 'Logistics', 'Retail', 'Real estate', 'SaaS', 'Legal', 'Hospitality', 'Construction'];

export default function WorkPage() {
  const [active, setActive] = useState('All');
  const visible = cases.filter(c => active === 'All' || c.industry === active);

  return (
    <>
      <section style={{ background: '#111827', padding: '88px 5% 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -220, right: -120, width: 640, height: 640, background: 'radial-gradient(circle,rgba(167,215,160,0.22),rgba(167,215,160,0) 68%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
          <div className="lbl-d">Work</div>
          <h1 style={{ margin: '0 0 20px', maxWidth: 800, fontSize: 'clamp(38px,5vw,60px)', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>Our recent projects</h1>
          <p style={{ margin: 0, maxWidth: 620, fontSize: 18, lineHeight: 1.7, color: 'rgba(255,255,255,0.72)' }}>Real problems, the systems we built, and what changed for the team.</p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '56px 5% 96px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ margin: '0 0 16px', fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#475569' }}>Filter by industry</p>
          <div role="group" aria-label="Industries" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 56 }}>
            {filters.map(f => (
              <button key={f} type="button" onClick={() => setActive(f)}
                style={{ fontFamily: 'inherit', fontSize: 14, fontWeight: 600, padding: '10px 18px', borderRadius: 100, cursor: 'pointer', border: '1px solid', borderColor: active === f ? '#111827' : '#cbd5e1', background: active === f ? '#111827' : '#fff', color: active === f ? '#fff' : '#111827', transition: 'all .15s' }}>
                {f}
              </button>
            ))}
          </div>
          <div className="grid">
            {visible.map((c, i) => (
              <Link key={c.href} href={c.href} className="card" style={{ display: 'block', marginTop: i % 2 === 1 ? 72 : 0 }}>
                <div className="vis" style={{ background: c.bg }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.14) 1px,transparent 1px)', backgroundSize: '22px 22px' }} />
                  <span style={{ position: 'absolute', left: 28, top: 24, fontSize: 14, letterSpacing: '.1em', color: 'rgba(255,255,255,0.75)' }}>{c.num}</span>
                  <p style={{ position: 'absolute', left: 28, right: 28, bottom: 76, margin: 0, fontSize: 22, lineHeight: 1.3, fontWeight: 700, letterSpacing: '-0.01em', color: '#fff' }}>{c.blurb}</p>
                  <span style={{ position: 'absolute', right: 24, bottom: 22, background: '#111', color: '#fff', fontSize: 14, fontWeight: 600, padding: '12px 20px', borderRadius: 100 }}>{c.industry}</span>
                </div>
                <h3 style={{ margin: '24px 0 12px', fontSize: 24, lineHeight: 1.3, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827', transition: 'color .2s ease' }}>{c.title}</h3>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#3b66f0' }}>View case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '0 5% 88px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', background: '#3b66f0', borderRadius: 20, padding: 48, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px 32px' }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ margin: '0 0 8px', fontSize: 30, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', color: '#fff' }}>Seeing a similar problem?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>Book a StackClarity session and leave with a prioritized roadmap.</p>
          </div>
          <Link href="/#contact" style={{ background: '#a7d7a0', color: '#111827', padding: '15px 30px', borderRadius: 10, fontSize: 15, fontWeight: 700 }}>Book a StackClarity Session</Link>
        </div>
      </section>
    </>
  );
}
