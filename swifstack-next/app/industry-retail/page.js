import IndustryPage from '../../components/IndustryPage';

export const metadata = { title: 'Retail and e-commerce' };

export default function Page() {
  return (
    <IndustryPage
      tag="Retail and e-commerce"
      h1="Automation for Returns, Stockouts and Shipping Exceptions."
      desc="Returns, stockouts, and shipping delays eat ops time on thin margins."
      overview="Retail and e-commerce operations are high-volume and fast-moving. Returns, carrier exceptions, stockout alerts and customer escalations arrive constantly and each requires a person to chase and resolve. We build automation that handles the routine cases automatically and routes the exceptions to the right person."
      problems={[]}
      solution="We build workflow automation that classifies and resolves returns without manual review, exception agents that diagnose and rebook carrier failures, and copilots that answer customer order questions without involving support staff."
      relatedCases={[{"href":"/case-retail","type":"Workflow automation","title":"Obvi: 35 Hours Saved Per Week"}]}
      relatedServices={[{"href":"/service-workflow","title":"Workflow Automations","desc":"Returns, exceptions and routing handled automatically."},{"href":"/service-voice","title":"Voice AI","desc":"After-hours customer support and order status without staff."}]}
    />
  );
}
