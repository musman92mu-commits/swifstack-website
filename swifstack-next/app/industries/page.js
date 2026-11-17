import Link from 'next/link';

export const metadata = { title: 'Industries — SwifStack' };

const industries = [
  { href: '/industry-insurance', tag: 'Insurance', h: 'Claims triage, underwriting support, compliance monitoring', stat: '75% faster triage' },
  { href: '/industry-healthcare', tag: 'Healthcare', h: 'Prior auth, clinical documentation, patient intake automation', stat: '80% reduction in manual reviews' },
  { href: '/industry-financialservices', tag: 'Financial Services', h: 'Compliance monitoring, reporting, client communication triage', stat: '100% communication coverage' },
  { href: '/industry-legal', tag: 'Legal', h: 'Contract review, document due diligence, matter intake', stat: '70% faster contract review' },
  { href: '/industry-retail', tag: 'Retail & E-commerce', h: 'Demand forecasting, inventory management, customer support', stat: '34% reduction in stockouts' },
  { href: '/industry-realestate', tag: 'Real Estate', h: 'Lease abstraction, portfolio analytics, document processing', stat: '47 fields extracted per lease' },
  { href: '/industry-hospitality', tag: 'Hospitality', h: 'Revenue management, guest communications, operations', stat: '+18% RevPAR improvement' },
  { href: '/industry-logistics', tag: 'Logistics', h: 'Exception management, carrier monitoring, shipment visibility', stat: '60% autonomous exception resolution' },
  { href: '/industry-construction', tag: 'Construction', h: 'RFI response, drawing intelligence, subcontractor management', stat: '5 days → 4 hours RFI response' },
  { href: '/industry-saas', tag: 'SaaS', h: 'Churn prediction, onboarding automation, product analytics', stat: '23% reduction in churn' },
];

export default function Page() {
  return (
    <>
      <section style={{ background: '#111827', padding: '96px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -220, right: -120, width: 640, height: 640, background: 'radial-gradient(circle,rgba(167,215,160,0.14),rgba(167,215,160,0) 68%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
          <div className="lbl-d">Industries</div>
          <h1 style={{ margin: '0 0 24px', maxWidth: 760, fontSize: 'clamp(34px,4.8vw,58px)', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-.03em', color: '#fff' }}>AI built for how your industry actually works</h1>
          <p style={{ margin: 0, maxWidth: 580, fontSize: 19, lineHeight: 1.65, color: 'rgba(255,255,255,.78)' }}>We work deep inside a handful of sectors, not across all of them. That depth means shorter ramp time, fewer surprises, and results that hold.</p>
        </div>
      </section>

      <section style={{ background: '#f8fafc', padding: '88px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: 20 }}>
          {industries.map(ind => (
            <Link key={ind.href} href={ind.href} style={{ display: 'block', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 28, textDecoration: 'none' }}>
              <span className="lbl">{ind.tag}</span>
              <span style={{ display: 'block', margin: '10px 0 12px', fontSize: 20, lineHeight: 1.3, fontWeight: 700, letterSpacing: '-.01em', color: '#111827' }}>{ind.h}</span>
              <span style={{ display: 'block', marginBottom: 20, fontSize: 14, fontWeight: 600, color: '#3b66f0' }}>{ind.stat}</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: '#3b66f0' }}>Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: '#fff', padding: '88px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', background: '#3b66f0', borderRadius: 20, padding: 48, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px 32px' }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ margin: '0 0 8px', fontSize: 30, fontWeight: 800, color: '#fff' }}>Don't see your industry?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,.9)' }}>Book a StackClarity session. If your problem is a good fit, we'll tell you.</p>
          </div>
          <Link href="/#contact" style={{ background: '#a7d7a0', color: '#111827', padding: '15px 30px', borderRadius: 10, fontSize: 15, fontWeight: 700 }}>Book a StackClarity Session</Link>
        </div>
      </section>
    </>
  );
}
