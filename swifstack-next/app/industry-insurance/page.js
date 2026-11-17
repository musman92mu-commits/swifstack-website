import IndustryPage from '../../components/IndustryPage';

export const metadata = { title: 'Insurance' };

export default function Page() {
  return (
    <IndustryPage
      tag="Insurance"
      h1="AI for Insurance Teams Buried in Submissions and Claims."
      desc="Submissions, claims, and loss runs arrive as unstructured documents that staff re-key by hand."
      overview="Insurance teams spend hours extracting data from ACORD forms, loss runs, and FNOL reports before the actual underwriting or claims work can begin. We build document pipelines, multi-agent workflows and voice agents that read, classify and route that work automatically — with a human review queue for edge cases."
      problems={[]}
      solution="We build document intelligence pipelines that extract and validate fields from your submission documents, multi-agent systems that move files through underwriting steps with logged decisions, and voice agents for after-hours claims intake and status updates."
      relatedCases={[{"href":"/case-insurance","type":"Document intelligence","title":"NasClaims: 75% Less Manual Entry"}]}
      relatedServices={[{"href":"/service-agents","title":"AI Agents","desc":"Coordinated agents for every step of the submission or claims workflow."},{"href":"/service-workflow","title":"Workflow Automations","desc":"Document processing that extracts, validates and routes automatically."}]}
    />
  );
}
