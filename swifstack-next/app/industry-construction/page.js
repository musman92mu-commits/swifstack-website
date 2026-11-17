import IndustryPage from '../../components/IndustryPage';

export const metadata = { title: 'Construction management' };

export default function Page() {
  return (
    <IndustryPage
      tag="Construction management"
      h1="Automation for Submittals, RFIs and Change Orders."
      desc="Submittals, RFIs, and change orders pile up and get lost without a system to track them."
      overview="Construction management teams handle hundreds of submittals, RFIs and change orders across every project. Each document needs to be received, routed to the right reviewer, tracked and responded to on deadline. Without a system, documents get lost, deadlines get missed and projects slow down."
      problems={[]}
      solution="We build document intake pipelines that classify and route submittals and RFIs on receipt, tracking systems that surface overdue items and upcoming deadlines, and change order automation that extracts key terms and routes for approval."
      relatedCases={[{"href":"/case-construction","type":"Document automation","title":"Atlas10: 65% Less Manual Logging"}]}
      relatedServices={[{"href":"/service-workflow","title":"Workflow Automations","desc":"Document routing, tracking and approval workflows for every project."},{"href":"/service-agents","title":"AI Agents","desc":"Agents that classify, extract and route construction documents automatically."}]}
    />
  );
}
