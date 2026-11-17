import CasePage from '../../components/CasePage';
export const metadata = { title: 'Compliance Monitoring — Financial Services' };
export default function Page() {
  return (
    <CasePage
      industry="Financial Services"
      h1="Real-Time Compliance Monitoring Across 14 Jurisdictions for a Wealth Manager"
      summary="A registered investment advisor operating across 14 US states needed to monitor client communications for compliance violations in near real time. Manual sampling caught less than 2% of daily volume. We deployed a continuous monitoring pipeline that processes 100% of communications and escalates true positives to compliance officers within minutes."
      stats={[
        { n: '100%', t: 'Communication coverage', sub: 'Up from 2% with manual sampling' },
        { n: '<4 min', t: 'Escalation latency', sub: 'From message send to compliance officer alert' },
        { n: '0.3%', t: 'False positive rate', sub: 'After two-week calibration period' },
      ]}
      client="Multi-state RIA (name withheld)"
      timeline="10 weeks"
      services={['AI Agents', 'Workflow Automation', 'Cloud & DevOps']}
      stack={['Kafka', 'Claude Haiku', 'AWS', 'Elasticsearch']}
      challenge="The compliance team was reviewing a random 2% sample of advisor communications each week. Regulators had made clear that this was insufficient. The team needed to monitor everything but had no way to scale headcount proportionally. Manual review of 100% of volume would require 8 additional FTEs. The legal exposure from missing a violation was significant."
      built="A streaming pipeline that ingests all communications (email, chat, voice transcripts) through a Kafka bus. Each message is classified by a fine-tuned model against a ruleset derived from FINRA and state-specific regulations. High-confidence violations are escalated immediately to the relevant compliance officer with the message, the rule triggered, and a draft response. Edge cases are batched for a daily human review queue. The system logs every decision for the exam trail."
      results={[
        'Communication coverage increased from 2% sampling to 100% continuous monitoring',
        'Escalation latency under 4 minutes for high-confidence violations',
        'False positive rate calibrated to 0.3% after two weeks of supervised tuning',
        'Compliance team headcount held flat while monitored volume tripled',
        'Full audit trail for every message decision, exam-ready on request',
      ]}
      moreCases={[
        { href: '/case-insurance', industry: 'Insurance', title: 'Claims Triage from Days to Minutes with Multi-Agent AI' },
        { href: '/case-legal', industry: 'Legal', title: 'Contract Review Copilot for a 200-Lawyer Firm' },
        { href: '/case-healthcare', industry: 'Healthcare', title: 'Prior Auth Automation — 80% Reduction in Manual Reviews' },
      ]}
    />
  );
}
