import Link from 'next/link';

export default function ServicePage({ tag, h1, desc, overview, items, related, relatedIndustries }) {
  const steps = [
    { n: '01', t: 'Discover', d: 'We learn the workflow, the systems involved and what good looks like.' },
    { n: '02', t: 'Design', d: 'We agree the approach, the guardrails and how success is measured.' },
    { n: '03', t: 'Build', d: 'We ship in short cycles, with working software in your hands early.' },
    { n: '04', t: 'Operate', d: 'We monitor results, tune the system and hand over what your team needs.' },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#111827', padding: '96px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -220, right: -120, width: 640, height: 640, background: 'radial-gradient(circle,rgba(167,215,160,0.14),rgba(167,215,160,0) 68%)' }} />
        <div style={{ position: 'absolute', bottom: -260, left: -160, width: 640, height: 640, background: 'radial-gradient(circle,rgba(59,102,240,0.2),rgba(59,102,240,0) 68%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
          <div className="lbl-d">Services · {tag}</div>
          <h1 style={{ margin: '0 0 24px', maxWidth: 860, fontSize: 'clamp(34px,4.8vw,58px)', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff' }}>{h1}</h1>
          <p style={{ margin: '0 0 40px', maxWidth: 620, fontSize: 19, lineHeight: 1.65, color: 'rgba(255,255,255,0.78)' }}>{desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href="/#contact" style={{ background: '#a7d7a0', color: '#111827', padding: '15px 30px', borderRadius: 100, fontSize: 15, fontWeight: 700 }}>Start this project →</Link>
            <Link href="/#services" style={{ border: '1px solid rgba(255,255,255,0.4)', color: '#ffffff', padding: '15px 30px', borderRadius: 100, fontSize: 15, fontWeight: 600 }}>All services</Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section style={{ background: '#ffffff', padding: '88px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '24px 72px' }}>
          <div style={{ flex: '1 1 280px' }}>
            <div className="lbl">Overview</div>
            <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>What this service covers</h2>
          </div>
          <div style={{ flex: '2 1 520px', minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: 20, lineHeight: 1.75, color: '#334155' }}>{overview}</p>
          </div>
        </div>
      </section>

      {/* Items grid */}
      <section style={{ background: '#f3f4f6', padding: '88px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="lbl">What&apos;s included</div>
          <h2 style={{ margin: '0 0 40px', maxWidth: 760, fontSize: 34, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>Scoped to your problem</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {items.map((it, i) => (
              <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 28 }}>
                <p style={{ margin: '0 0 14px', fontSize: 12, letterSpacing: '.1em', color: '#3b66f0' }}>0{i + 1}</p>
                <h3 style={{ margin: '0 0 10px', fontSize: 20, lineHeight: 1.3, fontWeight: 700, letterSpacing: '-0.01em', color: '#111827' }}>{it.t}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: '#475569' }}>{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: '#111827', padding: '96px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="lbl-d">How we work</div>
          <h2 style={{ margin: '0 0 48px', maxWidth: 760, fontSize: 34, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}>From first call to running in production</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 32 }}>
            {steps.map(s => (
              <div key={s.n} style={{ borderTop: '2px solid #a7d7a0', paddingTop: 20 }}>
                <p style={{ margin: '0 0 10px', fontSize: 12, letterSpacing: '.12em', color: '#a7d7a0' }}>{s.n}</p>
                <h3 style={{ margin: '0 0 8px', fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}>{s.t}</h3>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: '#cbd5e1' }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      {relatedIndustries && relatedIndustries.length > 0 && (
        <section style={{ background: '#ffffff', padding: '88px 5%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="lbl">Where we apply it</div>
            <h2 style={{ margin: '0 0 28px', fontSize: 34, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>Industries that use this most</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {relatedIndustries.map(ind => (
                <Link key={ind.href} href={ind.href} style={{ fontSize: 16, fontWeight: 600, color: '#111827', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: 100, padding: '12px 22px' }}>{ind.label} →</Link>
              ))}
            </div>
            <Link href="/work" style={{ display: 'inline-block', marginTop: 28, fontSize: 16, fontWeight: 700, color: '#3b66f0' }}>See related work →</Link>
          </div>
        </section>
      )}

      {/* Related services */}
      {related && related.length > 0 && (
        <section style={{ background: '#f8fafc', padding: '88px 5%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ margin: '0 0 32px', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>Related services</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
              {related.map(r => (
                <Link key={r.href} href={r.href} style={{ display: 'block', border: '1px solid #e2e8f0', borderRadius: 16, padding: 28, background: '#ffffff', textDecoration: 'none' }}>
                  <span style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3b66f0' }}>Related service</span>
                  <span style={{ display: 'block', margin: '10px 0 8px', fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>{r.title}</span>
                  <span style={{ display: 'block', marginBottom: 16, fontSize: 15, lineHeight: 1.6, color: '#475569' }}>{r.desc}</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: '#3b66f0' }}>View service →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: '#ffffff', padding: '88px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', background: '#3b66f0', borderRadius: 20, padding: 48, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px 32px' }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ margin: '0 0 8px', fontSize: 30, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}>Not sure where to start?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>Book a StackClarity session and leave with a prioritized roadmap.</p>
          </div>
          <Link href="/#contact" style={{ background: '#a7d7a0', color: '#111827', padding: '15px 30px', borderRadius: 10, fontSize: 15, fontWeight: 700 }}>Book a StackClarity Session</Link>
        </div>
      </section>
    </>
  );
}
