import ServicePage from '../../components/ServicePage';

export const metadata = { title: 'Workflow Automations' };

export default function Page() {
  return (
    <ServicePage
      tag="Workflow Automations"
      h1="Remove the Manual Work Your Team Repeats Every Day."
      desc="Document processing, approval routing, CRM and ERP automation, and data sync."
      overview="We build document intelligence and workflow automation that eliminate manual re-keying, routing and review. Every workflow connects to your existing systems and includes human-in-the-loop controls where compliance or quality require them."
      items={[
        { t: 'Intelligent document processing', d: 'Classify, extract and validate fields from any document type, with human review for edge cases.' },
        { t: 'Approval & routing workflows', d: 'Route items to the right person based on content, type and your business rules.' },
        { t: 'CRM & ERP automation', d: 'Keep your systems of record accurate without manual data entry.' },
        { t: 'Data sync between systems', d: 'Bidirectional sync between tools so nothing is ever out of date.' },
        { t: 'Human-in-the-loop review', d: 'Flagging and review queues for items that need a person, built into the flow.' },
        { t: 'No-code automations', d: 'Simple trigger-action automations for teams that want to build their own.' },
      ]}
      relatedIndustries={[
        { href: '/industry-insurance', label: 'Insurance' },
        { href: '/industry-logistics', label: 'Logistics' },
        { href: '/industry-construction', label: 'Construction' },
      ]}
      related={[
        { href: '/service-agents', title: 'AI Agents & Multi-Agent Systems', desc: 'Agents that take multi-step actions across your tools, with logging and guardrails.' },
        { href: '/service-gtm', title: 'GTM Engineering', desc: 'Outbound sequencing, lead enrichment and CRM automation for sales teams.' },
      ]}
    />
  );
}
