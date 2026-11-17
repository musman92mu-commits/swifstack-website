import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="sw-footer">
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 64px', paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,.1)' }}>
          <div style={{ flex: '1 1 260px' }}>
            <Link href="/" aria-label="Swifstack" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <Image src="/assets/logo-dark.svg" alt="Swifstack" width={120} height={28} style={{ display: 'block', height: 28, width: 'auto' }} />
            </Link>
            <p style={{ margin: '16px 0 0', fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.55)' }}>AI-native product engineering.<br />Agents, voice AI, and software<br />that ships.</p>
          </div>
          <div style={{ flex: '1 1 140px' }}>
            <h4 style={{ margin: '0 0 20px', fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              <Link href="/service-agents">AI Agents</Link>
              <Link href="/service-voice">Voice AI</Link>
              <Link href="/service-software">Software Eng.</Link>
              <Link href="/service-cloud">Cloud &amp; DevOps</Link>
              <Link href="/service-workflow">Workflow Auto.</Link>
              <Link href="/service-gtm">GTM Eng.</Link>
            </div>
          </div>
          <div style={{ flex: '1 1 140px' }}>
            <h4 style={{ margin: '0 0 20px', fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>Industries</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              <Link href="/industry-insurance">Insurance</Link>
              <Link href="/industry-healthcare">Healthcare</Link>
              <Link href="/industry-financialservices">Financial services</Link>
              <Link href="/industry-logistics">Logistics</Link>
              <Link href="/industry-retail">Retail</Link>
              <Link href="/industries">All industries →</Link>
            </div>
          </div>
          <div style={{ flex: '1 1 140px' }}>
            <h4 style={{ margin: '0 0 20px', fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>Work</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14 }}>
              <Link href="/case-insurance">Insurance claims</Link>
              <Link href="/case-healthcare">Healthcare voice</Link>
              <Link href="/case-financialservices">Financial onboarding</Link>
              <Link href="/case-logistics">Logistics exceptions</Link>
              <Link href="/work">All case studies →</Link>
            </div>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <h4 style={{ margin: '0 0 20px', fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,.45)' }}>Contact</h4>
            <Link href="mailto:nick@swifstack.com" style={{ fontSize: 15, color: '#a7d7a0' }}>nick@swifstack.com</Link>
            <div style={{ marginTop: 24 }}>
              <Link href="/#contact" style={{ display: 'inline-block', background: '#3b66f0', color: '#fff', textDecoration: 'none', padding: '12px 24px', borderRadius: 8, fontSize: 14, fontWeight: 600 }}>Book a call</Link>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 24, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, fontSize: 13, color: 'rgba(255,255,255,.4)' }}>
          <span>© 2026 Swifstack. All rights reserved.</span>
          <span style={{ display: 'flex', gap: 20 }}>
            <Link href="/" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)' }}>Privacy policy</Link>
            <Link href="/" style={{ textDecoration: 'none', color: 'rgba(255,255,255,.4)' }}>Terms of service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
