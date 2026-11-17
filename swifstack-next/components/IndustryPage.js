import Link from 'next/link';

export default function IndustryPage({ tag, h1, desc, overview, problems, solution, relatedCases, relatedServices }) {
  return (
    <>
      {/* Hero */}
      <section style={{ background: '#111827', padding: '96px 5%', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -220, right: -120, width: 640, height: 640, background: 'radial-gradient(circle,rgba(167,215,160,0.14),rgba(167,215,160,0) 68%)' }} />
        <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
          <div className="lbl-d">Industry · {tag}</div>
          <h1 style={{ margin: '0 0 24px', maxWidth: 860, fontSize: 'clamp(34px,4.8vw,58px)', lineHeight: 1.1, fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff' }}>{h1}</h1>
          <p style={{ margin: '0 0 40px', maxWidth: 620, fontSize: 19, lineHeight: 1.65, color: 'rgba(255,255,255,0.78)' }}>{desc}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href="/#contact" style={{ background: '#a7d7a0', color: '#111827', padding: '15px 30px', borderRadius: 100, fontSize: 15, fontWeight: 700 }}>Book a StackClarity session →</Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section style={{ background: '#ffffff', padding: '88px 5%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '24px 72px' }}>
          <div style={{ flex: '1 1 280px' }}>
            <div className="lbl">The challenge</div>
            <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>Where the work piles up</h2>
          </div>
          <div style={{ flex: '2 1 520px', minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: 20, lineHeight: 1.75, color: '#334155' }}>{overview}</p>
          </div>
        </div>
      </section>

      {/* Problems */}
      {problems && problems.length > 0 && (
        <section style={{ background: '#f3f4f6', padding: '88px 5%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="lbl">Common problems</div>
            <h2 style={{ margin: '0 0 40px', fontSize: 34, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>What we hear most often</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
              {problems.map((p, i) => (
                <div key={i} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 28 }}>
                  <p style={{ margin: '0 0 14px', fontSize: 12, letterSpacing: '.1em', color: '#3b66f0' }}>0{i + 1}</p>
                  <h3 style={{ margin: '0 0 10px', fontSize: 20, lineHeight: 1.3, fontWeight: 700, letterSpacing: '-0.01em', color: '#111827' }}>{p.t}</h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: '#475569' }}>{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How we help */}
      {solution && (
        <section style={{ background: '#111827', padding: '96px 5%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '24px 72px' }}>
            <div style={{ flex: '1 1 280px' }}>
              <div className="lbl-d">How we help</div>
              <h2 style={{ margin: 0, fontSize: 34, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}>What we build for {tag}</h2>
            </div>
            <div style={{ flex: '2 1 520px', minWidth: 0 }}>
              <p style={{ margin: 0, fontSize: 20, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)' }}>{solution}</p>
            </div>
          </div>
        </section>
      )}

      {/* Related case studies */}
      {relatedCases && relatedCases.length > 0 && (
        <section style={{ background: '#ffffff', padding: '88px 5%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div className="lbl">Case studies</div>
            <h2 style={{ margin: '0 0 32px', fontSize: 34, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>Work we have shipped in this industry</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
              {relatedCases.map(c => (
                <Link key={c.href} href={c.href} style={{ display: 'block', border: '1px solid #e2e8f0', borderRadius: 16, padding: 28, background: '#f8fafc', textDecoration: 'none' }}>
                  <span style={{ display: 'block', fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3b66f0', marginBottom: 10 }}>{c.type}</span>
                  <span style={{ display: 'block', fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827', marginBottom: 10 }}>{c.title}</span>
                  <span style={{ display: 'block', fontSize: 15, fontWeight: 700, color: '#3b66f0' }}>View case study →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedServices && relatedServices.length > 0 && (
        <section style={{ background: '#f8fafc', padding: '88px 5%' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ margin: '0 0 32px', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>Services we commonly use here</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
              {relatedServices.map(r => (
                <Link key={r.href} href={r.href} style={{ display: 'block', border: '1px solid #e2e8f0', borderRadius: 16, padding: 28, background: '#ffffff', textDecoration: 'none' }}>
                  <span style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: '#3b66f0' }}>Service</span>
                  <span style={{ display: 'block', margin: '10px 0 8px', fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: '#111827' }}>{r.title}</span>
                  <span style={{ display: 'block', marginBottom: 16, fontSize: 15, lineHeight: 1.6, color: '#475569' }}>{r.desc}</span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: '#3b66f0' }}>Learn more →</span>
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
            <h2 style={{ margin: '0 0 8px', fontSize: 30, lineHeight: 1.2, fontWeight: 800, letterSpacing: '-0.02em', color: '#ffffff' }}>Seeing a similar problem?</h2>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)' }}>Book a StackClarity session and leave with a prioritized roadmap.</p>
          </div>
          <Link href="/#contact" style={{ background: '#a7d7a0', color: '#111827', padding: '15px 30px', borderRadius: 10, fontSize: 15, fontWeight: 700 }}>Book a StackClarity Session</Link>
        </div>
      </section>
    </>
  );
}
