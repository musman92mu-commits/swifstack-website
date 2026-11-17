import IndustryPage from '../../components/IndustryPage';

export const metadata = { title: 'Logistics and transport' };

export default function Page() {
  return (
    <IndustryPage
      tag="Logistics and transport"
      h1="Exception Agents That Diagnose, Rebook and Communicate Carrier Failures."
      desc="Carrier exceptions arrive from many systems at once and get chased by hand."
      overview="Logistics operations deal with a constant stream of exceptions — late deliveries, carrier failures, damaged shipments, address issues. Each exception requires someone to diagnose, decide and communicate, pulling ops staff away from higher-value work. We build specialist agents that handle the routine exceptions automatically."
      problems={[]}
      solution="We build exception triage agents that classify incoming failures by type and urgency, rebook and reroute automatically where rules allow, escalate the complex ones with a full context summary, and update customers and stakeholders without manual intervention."
      relatedCases={[{"href":"/case-logistics","type":"Exception agents","title":"ShipFusion: 45% Fewer Manual Touches"}]}
      relatedServices={[{"href":"/service-agents","title":"AI Agents","desc":"Specialist agents that diagnose, resolve and communicate carrier exceptions."},{"href":"/service-workflow","title":"Workflow Automations","desc":"Automate document workflows for bills of lading, PODs and customs forms."}]}
    />
  );
}
