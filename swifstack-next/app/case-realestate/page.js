import CasePage from '../../components/CasePage';
export const metadata = { title: 'Lease Abstraction — Real Estate' };
export default function Page() {
  return (
    <CasePage
      industry="Real Estate"
      h1="AI Lease Abstraction for a 3,000-Unit Portfolio Manager in 6 Weeks"
      summary="A commercial real estate portfolio manager with 3,000 units had lease abstracts locked in PDFs across three different property management systems. Getting any portfolio-level view required a paralegal to manually re-read leases. We built a document intelligence pipeline that abstracts 47 fields from every lease and surfaces them in a live dashboard."
      stats={[
        { n: '47', t: 'Fields extracted per lease', sub: 'Rent, escalations, options, TI, CAM, expiry' },
        { n: '91%', t: 'Abstraction accuracy', sub: 'On first pass, before human QA review' },
        { n: '6 wks', t: 'From kickoff to live data', sub: 'Full 3,000-unit backlog processed' },
      ]}
      client="Commercial Portfolio Manager (name withheld)"
      timeline="6 weeks"
      services={['Document Intelligence', 'Workflow Automation', 'Cloud & DevOps']}
      stack={['Claude claude-opus-4-5', 'Python', 'PostgreSQL', 'Retool']}
      challenge="Every time the asset management team needed to answer a question — when does the anchor tenant's option window open, what's the blended cap rate if rent escalations kick in next year — a paralegal had to open the original lease PDF and re-read it. The abstracts they had were years old, inconsistently formatted, and stored in three different systems. There was no single source of truth."
      built="A batch document intelligence pipeline that ingested all 3,000 leases from their three property management systems. For each lease, a multi-step extraction chain pulls 47 structured fields: rent schedule, escalation clauses, option windows, TI allowances, CAM caps, co-tenancy provisions, expiry and renewal dates. Confidence scores are computed for each field, and low-confidence extractions are routed to a paralegal review queue. Reviewed data is written back to a PostgreSQL database, and a Retool dashboard gives the asset team live portfolio-level views and expiry alerts."
      results={[
        '3,000 leases abstracted in 6 weeks — a job estimated at 18 months manually',
        '47 fields extracted per lease with 91% first-pass accuracy',
        'Paralegal review queue reduced to only the 9% of fields flagged as low-confidence',
        'Asset management team now answers portfolio questions in seconds, not days',
        'Expiry and option window alerts eliminated three missed renewal opportunities in year one',
      ]}
      moreCases={[
        { href: '/case-legal', industry: 'Legal', title: 'Contract Review Copilot for a 200-Lawyer Firm' },
        { href: '/case-construction', industry: 'Construction', title: 'RFI Response Agent for a Tier-1 General Contractor' },
        { href: '/case-insurance', industry: 'Insurance', title: 'Claims Triage from Days to Minutes with Multi-Agent AI' },
      ]}
    />
  );
}
