import CasePage from '../../components/CasePage';
export const metadata = { title: 'Prior Auth Automation — Healthcare' };
export default function Page() {
  return (
    <CasePage
      industry="Healthcare"
      h1="80% Reduction in Manual Prior Auth Reviews for a Multi-Site Health System"
      summary="A 12-site health system had a prior authorization team processing 400+ requests per week. Each required a staff member to pull clinical notes, check payer criteria, and draft a clinical summary. We built an intelligent document pipeline that handles the routine 80% autonomously, escalating only complex cases to clinical staff."
      stats={[
        { n: '80%', t: 'Reduction in manual reviews', sub: 'Routine PAs handled autonomously' },
        { n: '4→0.5', t: 'Days to decision (avg)', sub: 'From submission to payer response' },
        { n: '99.1%', t: 'Accuracy on clean claims', sub: 'Measured against clinical staff benchmark' },
      ]}
      client="Multi-site Health System (name withheld)"
      timeline="14 weeks"
      services={['Document Intelligence', 'Workflow Automation', 'AI Agents']}
      stack={['Python', 'Claude claude-opus-4-5', 'Azure', 'HL7 FHIR']}
      challenge="The prior auth team was a bottleneck for every elective procedure. Staff spent 60–70% of their time on the same routine information gathering: pull the clinical note, find the relevant ICD codes, check the payer's coverage criteria document, write a one-paragraph summary. Complex cases requiring clinical judgment were delayed because staff were buried in routine ones."
      built="A document intelligence pipeline integrated with the EHR via FHIR APIs. When a PA request arrives, the system extracts diagnosis codes, procedure codes, and clinical notes. It then retrieves the relevant payer criteria from a versioned criteria library. An LLM reasons over the clinical evidence against the criteria and assigns one of three outcomes: approve autonomously, flag for expedited review, or escalate with a draft summary for clinical staff. The escalation path includes a pre-written clinical summary that staff can edit in one click."
      results={[
        '80% of prior auth requests handled without manual staff involvement',
        'Average decision time dropped from 4 days to under 12 hours',
        '99.1% accuracy on autonomous approvals, measured against clinical staff benchmark',
        'Staff freed to focus on complex cases and patient calls',
        'Denial rate on first submission dropped 18% due to better criteria matching',
      ]}
      moreCases={[
        { href: '/case-insurance', industry: 'Insurance', title: 'Claims Triage from Days to Minutes with Multi-Agent AI' },
        { href: '/case-legal', industry: 'Legal', title: 'Contract Review Copilot for a 200-Lawyer Firm' },
        { href: '/case-saas', industry: 'SaaS', title: 'Churn Prediction Agent That Calls the Right Customers' },
      ]}
    />
  );
}
