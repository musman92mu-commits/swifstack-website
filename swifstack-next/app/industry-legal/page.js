import IndustryPage from '../../components/IndustryPage';

export const metadata = { title: 'Legal services' };

export default function Page() {
  return (
    <IndustryPage
      tag="Legal services"
      h1="AI Copilots That Check Documents Against Your Playbook."
      desc="Attorneys spend billable hours on first-pass document review against the firm's own playbook."
      overview="Legal teams review the same document types against the same playbooks, every day. First-pass review is billable time that could go to higher-value work. We build copilots that check documents against your firm's own standards, flag issues with citations, and keep attorneys in control of every decision."
      problems={[]}
      solution="We build document review copilots that run your playbook against incoming contracts and filings, surface flagged issues with citations to source, and integrate into the tools your attorneys already use — keeping them in control while cutting first-pass review time."
      relatedCases={[{"href":"/case-legal","type":"Custom copilot","title":"Kaplan Martin LLP: 55% Less Review Time"}]}
      relatedServices={[{"href":"/service-agents","title":"AI Agents","desc":"Copilots and agents for document review, research and drafting."},{"href":"/service-workflow","title":"Workflow Automations","desc":"Routing and tracking for matters, documents and approvals."}]}
    />
  );
}
