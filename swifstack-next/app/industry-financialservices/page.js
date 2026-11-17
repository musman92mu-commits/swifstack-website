import IndustryPage from '../../components/IndustryPage';

export const metadata = { title: 'Financial services' };

export default function Page() {
  return (
    <IndustryPage
      tag="Financial services"
      h1="Multi-Agent Systems for Underwriting and Onboarding."
      desc="Underwriting and onboarding span manual, compliance-heavy steps that slow every decision."
      overview="Financial services firms run complex workflows across many systems — KYC checks, document review, compliance verification and approval routing. Each step waits on a person. We build coordinated agent systems that move files through every step automatically, with logged decisions and human approval where compliance requires it."
      problems={[]}
      solution="We build multi-agent onboarding systems with logged decisions and human approval steps, document intelligence for loan and application documents, and copilots that surface relevant data to underwriters and advisors during review."
      relatedCases={[{"href":"/case-financialservices","type":"Multi-agent systems","title":"Payra: 60% Faster Decisions"}]}
      relatedServices={[{"href":"/service-agents","title":"AI Agents","desc":"Coordinated agents for underwriting, onboarding and compliance workflows."},{"href":"/service-workflow","title":"Workflow Automations","desc":"Document processing and routing that keep files moving without manual hand-offs."}]}
    />
  );
}
