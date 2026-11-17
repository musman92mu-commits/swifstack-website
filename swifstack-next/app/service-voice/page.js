import ServicePage from '../../components/ServicePage';

export const metadata = { title: 'Voice AI & Calling Systems' };

export default function Page() {
  return (
    <ServicePage
      tag="Voice AI & Calling Systems"
      h1="Voice Agents That Answer, Book and Route — Around the Clock."
      desc="Inbound and outbound voice agents for booking, dispatch, intake, and after-hours coverage."
      overview="We build voice agents that handle the calls your team repeats every day — scheduling, reminders, intake and verification. Each agent connects to your calendar, EHR, CRM or dispatch system and hands complex calls to staff with a full context summary."
      items={[
        { t: 'Inbound voice agents', d: 'Answer calls, qualify callers, and handle routine requests without staff involvement.' },
        { t: 'Outbound calling agents', d: 'Automated outreach for reminders, follow-ups, and re-engagement, at scale.' },
        { t: 'Appointment booking', d: 'Book, move and cancel appointments directly in your scheduling system.' },
        { t: 'Call routing & handoff', d: 'Intelligent routing to the right person, with a summary handed to the agent.' },
        { t: 'Call analytics and QA', d: 'Transcription, sentiment and QA scoring across every call, automatically.' },
        { t: 'Telephony integrations', d: 'Works with your existing phone system, CRM and EHR — no rip and replace.' },
      ]}
      relatedIndustries={[
        { href: '/industry-healthcare', label: 'Healthcare' },
        { href: '/industry-hospitality', label: 'Hospitality' },
        { href: '/industry-insurance', label: 'Insurance' },
      ]}
      related={[
        { href: '/service-agents', title: 'AI Agents & Multi-Agent Systems', desc: 'Coordinated agents for document processing, scheduling and ops workflows.' },
        { href: '/service-workflow', title: 'Workflow Automations', desc: 'Document processing, routing and system sync that remove repetitive work.' },
      ]}
    />
  );
}
