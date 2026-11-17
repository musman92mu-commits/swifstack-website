import CasePage from '../../components/CasePage';
export const metadata = { title: 'AI Claims Triage — Insurance' };
export default function Page() {
  return (
    <CasePage
      industry="Insurance"
      h1="Cutting Claims Triage Time from Days to Minutes with Multi-Agent AI"
      summary="A regional P&C insurer was drowning in first-notice-of-loss documents. Adjusters spent three hours per claim gathering data before they could make a single decision. We built a multi-agent pipeline that reads incoming FNOLs, pulls policy data, queries weather APIs, flags fraud signals, and hands adjusters a pre-packaged brief."
      stats={[
        { n: '75%', t: 'Faster triage', sub: 'From 3 hours to under 45 minutes per claim' },
        { n: 'Days→Min', t: 'STP cycle time', sub: 'Straight-through processing for simple claims' },
        { n: '95%+', t: 'Extraction accuracy', sub: 'On structured and unstructured FNOL documents' },
      ]}
      client="Regional P&C Insurer (name withheld)"
      timeline="11 weeks"
      services={['AI Agents', 'Document Intelligence', 'Workflow Automation']}
      stack={['LangGraph', 'GPT-4o', 'AWS Lambda', 'PostgreSQL']}
      challenge="Adjusters were spending the first three hours of every claim just gathering information — pulling the policy, calling the weather bureau, running the address through flood maps, checking prior claims. None of this required judgement. All of it required time. The backlog was growing and adjuster burnout was real."
      built="A five-agent pipeline triggered on FNOL receipt. The intake agent classifies the document type and extracts structured fields. A policy agent queries the core system to pull coverage, deductible and exclusion data. An enrichment agent calls weather, geocoding and flood-zone APIs. A fraud-signal agent compares the claim against historical patterns. An orchestrator assembles all outputs into an adjuster brief with a recommended fast-track/complex flag."
      results={[
        'Triage time dropped from ~3 hours to under 45 minutes per claim',
        'Simple claims now qualify for straight-through processing in minutes',
        'Field extraction accuracy above 95% on both structured forms and free-text FNOLs',
        'Adjuster capacity increased by roughly 40% without headcount change',
        'Fraud-signal flagging surfaced 12% more suspicious claims in the first 90 days',
      ]}
      moreCases={[
        { href: '/case-healthcare', industry: 'Healthcare', title: 'Prior Auth Automation — 80% Reduction in Manual Reviews' },
        { href: '/case-logistics', industry: 'Logistics', title: 'Exception Management Agent for a 3PL Network' },
        { href: '/case-financialservices', industry: 'Financial Services', title: 'Real-Time Compliance Monitoring Across 14 Jurisdictions' },
      ]}
    />
  );
}
