import Link from 'next/link';

export default function NotFound() {
  return (
    <section style={{ background: '#111827', minHeight: '70vh', display: 'flex', alignItems: 'center', padding: '96px 5%', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -200, right: -120, width: 640, height: 640, background: 'radial-gradient(circle,rgba(167,215,160,.12),rgba(167,215,160,0) 68%)' }} />
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
        <p style={{ margin: '0 0 16px', fontSize: 100, lineHeight: 1, fontWeight: 800, color: '#1f2937' }}>404</p>
        <h1 style={{ margin: '0 0 20px', fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.15, fontWeight: 800, letterSpacing: '-.03em', color: '#fff' }}>This page doesn't exist.</h1>
        <p style={{ margin: '0 0 40px', maxWidth: 500, fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,.7)' }}>Looks like you followed a broken link or mistyped the address. Let's get you back on track.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          <Link href="/" style={{ background: '#a7d7a0', color: '#111827', padding: '15px 30px', borderRadius: 100, fontSize: 15, fontWeight: 700 }}>Go home →</Link>
          <Link href="/work" style={{ background: 'transparent', color: '#fff', padding: '15px 30px', borderRadius: 100, fontSize: 15, fontWeight: 700, border: '1px solid rgba(255,255,255,.3)' }}>See our work</Link>
        </div>
      </div>
    </section>
  );
}
