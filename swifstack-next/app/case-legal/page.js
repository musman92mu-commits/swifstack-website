import CasePage from '../../components/CasePage';
export const metadata = { title: 'Contract Review Copilot — Legal' };
export default function Page() {
  return (
    <CasePage
      industry="Legal"
      h1="Contract Review Copilot That Cut Associate Time per NDA by 70%"
      summary="A 200-lawyer corporate firm was spending associate time on routine NDA and MSA review that partners considered below the billing threshold. We built an AI copilot integrated into their document management system that flags deviations from standard positions, drafts redlines, and surfaces risk clauses — before the associate opens the document."
      stats={[
        { n: '70%', t: 'Reduction in associate time', sub: 'On NDA and standard MSA review' },
        { n: '3×', t: 'More contracts reviewed', sub: 'Same associate headcount, same hours' },
        { n: '94%', t: 'Redline acceptance rate', sub: 'Suggested edits accepted without modification' },
      ]}
      client="200-Lawyer Corporate Firm (name withheld)"
      timeline="12 weeks"
      services={['Document Intelligence', 'AI Agents', 'Workflow Automation']}
      stack={['Claude claude-opus-4-5', 'Python', 'SharePoint', 'Azure']}
      challenge="Junior associates were spending 2–3 hours on NDAs and 6–8 hours on standard MSAs. Partners knew these contracts were routine but still required a licensed attorney's review. The bottleneck was not judgment — it was the time spent locating deviations from standard language, drafting redlines, and writing the risk memo. That work was ripe for automation."
      built="A document copilot that triggers when a contract lands in the firm's DMS. The system classifies the document type, identifies the governing template from the firm's playbook library, and runs a clause-by-clause comparison. Deviations from standard positions are flagged with severity (must-fix, negotiate, note-only). For must-fix and negotiate clauses, the system drafts a redline using the firm's preferred fallback language. The associate receives a pre-populated review memo with the full redline and a risk summary — ready to edit, not to start from scratch."
      results={[
        'Associate time per NDA dropped 70%, from ~2.5 hours to under 45 minutes',
        'MSA review time dropped from 6–8 hours to under 2 hours',
        'Redline acceptance rate of 94% — associates adopted the suggested language in most cases',
        'Firm able to take on 3× the contract volume with the same associate team',
        'Risk memo quality rated higher by partners than associate-drafted memos in blind review',
      ]}
      moreCases={[
        { href: '/case-financialservices', industry: 'Financial Services', title: 'Real-Time Compliance Monitoring Across 14 Jurisdictions' },
        { href: '/case-realestate', industry: 'Real Estate', title: 'AI Lease Abstraction for a 3,000-Unit Portfolio Manager' },
        { href: '/case-healthcare', industry: 'Healthcare', title: 'Prior Auth Automation — 80% Reduction in Manual Reviews' },
      ]}
    />
  );
}
