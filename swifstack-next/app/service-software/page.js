import ServicePage from '../../components/ServicePage';

export const metadata = { title: 'AI-assisted Software Engineering' };

export default function Page() {
  return (
    <ServicePage
      tag="AI-assisted Software Engineering"
      h1="Custom Software Built Faster, Reviewed by Senior Engineers."
      desc="Custom web and mobile apps, legacy modernization, API integrations, and MVP builds."
      overview="We build custom products and modernize existing systems, using AI-assisted development to move faster without cutting corners. Every project is reviewed by a senior engineer and includes testing, documentation and a clean handover."
      items={[
        { t: 'Custom web & mobile apps', d: 'Full-stack products built to your spec, from MVP to production-ready.' },
        { t: 'Legacy modernization', d: 'Replatform or extend existing systems without disrupting what already works.' },
        { t: 'API and system integrations', d: 'Connect your tools, automate data flows and eliminate manual hand-offs.' },
        { t: 'AI-assisted code review', d: 'Faster review cycles with AI-flagged issues reviewed by a senior engineer.' },
        { t: 'MVP builds', d: 'Ship a working product in weeks, not months, with a scope we agree upfront.' },
        { t: 'Technical architecture', d: 'Architecture decisions documented and explained, so your team can own them.' },
      ]}
      relatedIndustries={[
        { href: '/industry-saas', label: 'SaaS' },
        { href: '/industry-financialservices', label: 'Financial services' },
        { href: '/industry-healthcare', label: 'Healthcare' },
      ]}
      related={[
        { href: '/service-cloud', title: 'Cloud & DevOps', desc: 'Secure, cost-aware cloud environments and CI/CD that keep everything running.' },
        { href: '/service-agents', title: 'AI Agents & Multi-Agent Systems', desc: 'Agents embedded in your product that do real work, not just answer questions.' },
      ]}
    />
  );
}
