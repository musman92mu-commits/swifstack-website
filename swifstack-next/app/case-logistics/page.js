import CasePage from '../../components/CasePage';
export const metadata = { title: 'Exception Management — Logistics' };
export default function Page() {
  return (
    <CasePage
      industry="Logistics"
      h1="Exception Management Agent That Resolved 60% of Shipment Exceptions Without Human Intervention"
      summary="A third-party logistics provider was handling 2,000+ shipments per day. Customer service reps spent most of their day resolving exceptions — late deliveries, failed pickups, missing PODs. Most exceptions followed a predictable playbook. We built an exception management agent that handles the routine 60% and escalates the rest with full context."
      stats={[
        { n: '60%', t: 'Exceptions resolved autonomously', sub: 'Without customer service rep involvement' },
        { n: '8 min', t: 'Average resolution time', sub: 'Down from 47 minutes' },
        { n: '4.8★', t: 'Customer satisfaction', sub: 'Post-exception CSAT, up from 3.2' },
      ]}
      client="Mid-Market 3PL (name withheld)"
      timeline="9 weeks"
      services={['AI Agents', 'Workflow Automation', 'Cloud & DevOps']}
      stack={['LangGraph', 'Python', 'TMS API', 'Twilio']}
      challenge="Customer service reps were spending 70% of their day on exception handling. Most exceptions were routine: a carrier missed a pickup window, a delivery failed due to a closed business, a POD was missing. Each required the rep to look up the shipment, contact the carrier, update the TMS, and notify the customer. The same 10 steps, 40 times a day, with slight variations."
      built="An exception management agent that monitors the TMS for exception events in real time. When an exception is detected, the agent classifies it against a playbook of 23 exception types. For types with a deterministic resolution path, the agent executes the resolution: contacts the carrier via API, reschedules the pickup or delivery, updates the TMS, and sends a proactive status notification to the customer via email and SMS. For complex exceptions, it escalates to a rep with a pre-populated resolution brief and all relevant tracking history."
      results={[
        '60% of shipment exceptions resolved autonomously without rep involvement',
        'Average resolution time dropped from 47 minutes to 8 minutes',
        'Customer satisfaction scores on post-exception surveys improved from 3.2 to 4.8',
        'Rep capacity redirected from routine exceptions to complex customer issues',
        'Carrier performance issues surfaced systematically — 3 underperforming lanes identified in month one',
      ]}
      moreCases={[
        { href: '/case-insurance', industry: 'Insurance', title: 'Claims Triage from Days to Minutes with Multi-Agent AI' },
        { href: '/case-construction', industry: 'Construction', title: 'RFI Response Agent for a Tier-1 General Contractor' },
        { href: '/case-retail', industry: 'Retail', title: 'Demand Forecasting Agent That Cut Stockouts by 34%' },
      ]}
    />
  );
}
