import ServicePage from '../../components/ServicePage';

export const metadata = { title: 'GTM Engineering' };

export default function Page() {
  return (
    <ServicePage
      tag="GTM Engineering"
      h1="Outbound Infrastructure That Runs on Volume."
      desc="Outbound sequencing, lead enrichment, CRM automation, and pipeline reporting."
      overview="We build and tune the technical side of your outbound motion: enrichment, sequencing, CRM hygiene and attribution. Every system is built to scale and measured against pipeline, not activity."
      items={[
        { t: 'Outbound sequencing', d: 'Multi-channel sequences built in your existing tools, with personalization that lands.' },
        { t: 'Lead enrichment & scoring', d: 'Enrich and score inbound and outbound leads automatically, so reps focus on the right ones.' },
        { t: 'CRM workflow automation', d: 'Automate the admin that slows your reps down — stages, tasks, follow-up reminders.' },
        { t: 'Lead routing', d: 'Route leads to the right rep based on territory, segment or any rule you define.' },
        { t: 'Email deliverability', d: 'Domain warm-up, authentication and monitoring so your emails reach the inbox.' },
        { t: 'Pipeline reporting', d: 'Attribution, conversion rates and pipeline health surfaced in the tool your team already uses.' },
      ]}
      relatedIndustries={[
        { href: '/industry-saas', label: 'SaaS' },
        { href: '/industry-financialservices', label: 'Financial services' },
        { href: '/industry-insurance', label: 'Insurance' },
      ]}
      related={[
        { href: '/service-workflow', title: 'Workflow Automations', desc: 'CRM and ERP automation that keeps your systems of record accurate without manual entry.' },
        { href: '/service-agents', title: 'AI Agents & Multi-Agent Systems', desc: 'Agents that research, qualify and prepare leads, handing them to reps ready to close.' },
      ]}
    />
  );
}
