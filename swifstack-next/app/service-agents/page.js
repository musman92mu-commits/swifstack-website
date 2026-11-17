import ServicePage from '../../components/ServicePage';

export const metadata = { title: 'AI Agents & Multi-Agent Systems' };

export default function Page() {
  return (
    <ServicePage
      tag="AI Agents & Multi-Agent Systems"
      h1="AI Agents That Do the Work, Not Just Answer Questions."
      desc="Generative AI, copilots and coordinated agents that connect to the systems you already run."
      overview="We design and build agents that take real actions: reading documents, updating records, answering customers and handing off to a person when it matters. Every build starts from an operational problem, connects to your existing tools, and includes review, logging and guardrails from day one."
      items={[
        { t: 'Generative AI', d: 'Applications that draft, summarize, classify and transform content, built around your data and your quality bar.' },
        { t: 'AI Agents', d: 'Tool-using agents that complete multi-step tasks, with clear limits on what they can do alone.' },
        { t: 'Multi-Agent Systems', d: 'Specialist agents that each own one step of a workflow, coordinated and logged end to end.' },
        { t: 'AI Copilots', d: 'Assistants embedded in the tools your team already uses, drafting and suggesting while people stay in control.' },
        { t: 'LLM Integrations', d: 'Connect leading models to your product and systems, with evaluation, fallbacks and cost controls.' },
        { t: 'RAG Systems', d: 'Retrieval over your documents and data, so answers are grounded and cite their sources.' },
      ]}
      relatedIndustries={[
        { href: '/industry-insurance', label: 'Insurance' },
        { href: '/industry-financialservices', label: 'Financial services' },
        { href: '/industry-logistics', label: 'Logistics' },
      ]}
      related={[
        { href: '/service-workflow', title: 'Workflow Automations', desc: 'Document processing, routing and system sync that remove repetitive work.' },
        { href: '/service-voice', title: 'Voice AI & Calling Systems', desc: 'Inbound and outbound calling that books, qualifies and supports, around the clock.' },
      ]}
    />
  );
}
