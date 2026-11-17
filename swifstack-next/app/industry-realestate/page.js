import IndustryPage from '../../components/IndustryPage';

export const metadata = { title: 'Real estate' };

export default function Page() {
  return (
    <IndustryPage
      tag="Real estate"
      h1="AI That Finds Answers in Your Leases, Addenda and Contracts."
      desc="Answers hide in leases, addenda, and vendor contracts spread across properties."
      overview="Real estate teams manage large portfolios of documents — leases, addenda, vendor contracts, inspection reports. Answers to daily questions are buried in those documents and require someone to search and read them manually. We build retrieval systems and copilots that find the answer in seconds."
      problems={[]}
      solution="We build RAG systems that retrieve answers from your document library, lease abstraction pipelines that extract key terms and dates, and document comparison tools that surface differences between versions or properties."
      relatedCases={[{"href":"/case-realestate","type":"RAG system","title":"Thomas James Homes: 65% Faster Document Lookup"}]}
      relatedServices={[{"href":"/service-agents","title":"AI Agents","desc":"Copilots that answer questions from your document library with cited sources."},{"href":"/service-workflow","title":"Workflow Automations","desc":"Document routing, abstraction and tracking across your portfolio."}]}
    />
  );
}
