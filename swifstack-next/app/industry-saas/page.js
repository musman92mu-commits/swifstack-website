import IndustryPage from '../../components/IndustryPage';

export const metadata = { title: 'SaaS' };

export default function Page() {
  return (
    <IndustryPage
      tag="SaaS"
      h1="Support Copilots and Product Agents With Deep Context."
      desc="Support teams answer the same questions repeatedly and engineers spend time on tickets that documentation could resolve."
      overview="SaaS support teams are expensive and slow to scale. The same questions arrive every day and the answers are in the product, the docs and previous tickets. We build copilots that surface the right answer in seconds, and agents that handle routine support tasks without a ticket."
      problems={[]}
      solution="We build support copilots that draft answers grounded in your product documentation and previous ticket resolutions, in-product agents that handle common support actions without a ticket, and escalation routing that sends the complex issues to the right engineer with full context."
      relatedCases={[{"href":"/case-saas","type":"Support copilot","title":"Pulse Point: 45% Faster First Response"}]}
      relatedServices={[{"href":"/service-agents","title":"AI Agents","desc":"Copilots and agents with deep knowledge of your product and documentation."},{"href":"/service-software","title":"AI-assisted Software Engineering","desc":"Custom product features and integrations built faster by senior engineers."}]}
    />
  );
}
