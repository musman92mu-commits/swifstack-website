import Link from 'next/link';

export default function CasePage({ industry, h1, summary, stats, client, timeline, services, stack, challenge, built, results, moreCases }) {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#111827', padding: '72px 5% 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -200, right: -120, width: 640, height: 640, background: 'radial-gradient(circle,rgba(167,215,160,.14),rgba(167,215,160,0) 68%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
          <Link href="/work" style={{ display: 'inline-block', marginBottom: 32, fontSize: 14, fontWeight: 600, color: '#a7d7a0' }}>← All case studies</Link>
          <div className="lbl-d">Case study · {industry}</div>
          <h1 style={{ margin: 0, maxWidth: 960, fontSize: 'clamp(32px,4.2vw,52px)', lineHeight: 1.15, fontWeight: 800, letterSpacing: '-.03em', color: '#fff' }}>{h1}</h1>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#f8fafc', padding: '88px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="lbl">Case study summary</div>
          <h2 style={{ margin: '0 0 20px', fontSize: 36, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-.02em', color: '#111827' }}>Executive summary</h2>
          <p style={{ margin: '0 0 40px', maxWidth: 860, fontSize: 19, lineHeight: 1.7, color: '#334155' }}>{summary}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {stats.map((s, i) => (
              <div key={i} style={{ flex: '1 1 240px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 28 }}>
                <p style={{ margin: '0 0 8px', fontSize: 40, fontWeight: 800, color: '#3b66f0' }}>{s.n}</p>
                <p style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700, color: '#111827' }}>{s.t}</p>
                <p style={{ margin: 0, fontSize: 14, color: '#475569' }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: '#111827', padding: '96px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '48px 72px' }}>
          {/* Sidebar */}
          <aside style={{ flex: '0 1 240px', minWidth: 200 }}>
            <h2 style={{ margin: '0 0 24px', paddingBottom: 24, borderBottom: '1px solid #374151', fontSize: 26, fontWeight: 800, color: '#fff' }}>At a glance</h2>
            <p style={{ margin: '0 0 4px', fontSize: 15, color: '#94a3b8' }}>Client</p>
            <p style={{ margin: '0 0 28px', fontSize: 17, color: '#fff' }}>{client}</p>
            <p style={{ margin: '0 0 4px', fontSize: 15, color: '#94a3b8' }}>Industry</p>
            <p style={{ margin: '0 0 28px', fontSize: 17, color: '#fff' }}>{industry}</p>
            <p style={{ margin: '0 0 4px', fontSize: 15, color: '#94a3b8' }}>Timeline</p>
            <p style={{ margin: '0 0 28px', fontSize: 17, color: '#fff' }}>{timeline}</p>
            <p style={{ margin: '0 0 8px', fontSize: 15, color: '#94a3b8' }}>Services</p>
            <div style={{ marginBottom: 20 }}>
              {services.map(s => <span key={s} style={{ display: 'inline-block', fontSize: 13, fontWeight: 500, color: '#a7d7a0', background: '#1f2937', borderRadius: 8, padding: '8px 12px', margin: '0 6px 6px 0' }}>{s}</span>)}
            </div>
            <p style={{ margin: '0 0 8px', fontSize: 15, color: '#94a3b8' }}>Stack</p>
            <div>
              {stack.map(s => <span key={s} style={{ display: 'inline-block', fontSize: 13, color: '#fff', background: '#1f2937', borderRadius: 8, padding: '8px 12px', margin: '0 6px 6px 0' }}>{s}</span>)}
            </div>
          </aside>

          {/* Main */}
          <div style={{ flex: '1 1 480px', minWidth: 0 }}>
            <h2 style={{ margin: '0 0 24px', fontSize: 34, lineHeight: 1.15, fontWeight: 800, color: '#fff' }}>The challenge</h2>
            <p style={{ margin: '0 0 24px', fontSize: 18, lineHeight: 1.75, color: '#cbd5e1' }}>{challenge}</p>
            <h2 style={{ margin: '64px 0 24px', fontSize: 34, lineHeight: 1.15, fontWeight: 800, color: '#fff' }}>What we built</h2>
            <p style={{ margin: '0 0 24px', fontSize: 18, lineHeight: 1.75, color: '#cbd5e1' }}>{built}</p>
            <h2 style={{ margin: '64px 0 24px', fontSize: 34, lineHeight: 1.15, fontWeight: 800, color: '#fff' }}>The result</h2>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 18 }}>
              {results.map((r, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 18, lineHeight: 1.5, color: '#fff' }}>
                  <span style={{ flex: 'none', width: 34, height: 34, borderRadius: 9, background: '#a7d7a0', color: '#111827', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* More cases */}
      {moreCases && moreCases.length > 0 && (
        <section style={{ background: '#fff', padding: '88px 5% 40px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ margin: '0 0 32px', fontSize: 32, fontWeight: 800, color: '#111827' }}>More case studies</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
              {moreCases.map(c => (
                <Link key={c.href} href={c.href} style={{ display: 'block', padding: 28, border: '1px solid #e2e8f0', borderRadius: 16, background: '#f8fafc', textDecoration: 'none' }}>
                  <span className="lbl">{c.industry}</span>
                  <span style={{ display: 'block', margin: '10px 0 12px', fontSize: 19, lineHeight: 1.35, fontWeight: 700, color: '#111827' }}>{c.title}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#3b66f0' }}>View case study →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: '#fff', padding: '40px 5% 88px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', background: '#3b66f0', borderRadius: 20, padding: 48, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px 32px' }}>
          <div style={{ flex: '1 1 360px' }}>
            <h2 style={{ margin: '0 0 8px', fontSize: 30, fontWeight: 800, color: '#fff' }}>Seeing a similar problem?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,.9)' }}>Book a StackClarity session and leave with a prioritized roadmap.</p>
          </div>
          <Link href="/#contact" style={{ background: '#a7d7a0', color: '#111827', padding: '15px 30px', borderRadius: 10, fontSize: 15, fontWeight: 700 }}>Book a StackClarity Session</Link>
        </div>
      </section>
    </>
  );
}
