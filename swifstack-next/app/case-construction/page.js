import CasePage from '../../components/CasePage';
export const metadata = { title: 'RFI Response Agent — Construction' };
export default function Page() {
  return (
    <CasePage
      industry="Construction"
      h1="RFI Response Agent That Cut Response Time from 5 Days to 4 Hours for a General Contractor"
      summary="A tier-1 general contractor was averaging 5 business days to respond to RFIs on a large commercial project. The bottleneck was finding the right information across 40,000+ pages of drawings, specs, and submittals. We built an AI agent that searches the full project document set and drafts a response — in minutes, not days."
      stats={[
        { n: '5d→4h', t: 'RFI response time', sub: 'From submission to draft response' },
        { n: '40k+', t: 'Pages searchable', sub: 'Drawings, specs, submittals, meeting minutes' },
        { n: '78%', t: 'Draft acceptance rate', sub: 'Drafts sent to architects with minimal edits' },
      ]}
      client="Tier-1 General Contractor (name withheld)"
      timeline="7 weeks"
      services={['Document Intelligence', 'AI Agents', 'Cloud & DevOps']}
      stack={['Claude claude-opus-4-5', 'Python', 'Pinecone', 'Procore API']}
      challenge="Project managers were the bottleneck for every RFI. Finding the relevant drawing, spec section and submittal for a given question required searching across a document set that had grown to 40,000+ pages by mid-project. PMs estimated 2–3 hours per RFI just to locate the right information. With 20–30 RFIs per week, this was consuming most of their time and creating a 5-day response backlog that was triggering schedule delay notices."
      built="A document intelligence system that ingests all project documents from Procore — drawings, specifications, submittals, meeting minutes, RFI history — into a vector search index. When a new RFI is received, the agent runs a multi-step retrieval: keyword search, semantic search, and cross-reference resolution (finding the spec section that a drawing detail references). It synthesizes the retrieved context into a draft response with citations to source documents. The PM reviews and sends from within Procore."
      results={[
        'RFI response time reduced from 5 business days to under 4 hours',
        '40,000+ page document set fully searchable in seconds',
        '78% of drafted responses sent to architects with minimal or no edits',
        'PM bandwidth freed for schedule and cost management',
        'RFI history automatically indexed — repeat questions answered in seconds from precedent',
      ]}
      moreCases={[
        { href: '/case-realestate', industry: 'Real Estate', title: 'AI Lease Abstraction for a 3,000-Unit Portfolio Manager' },
        { href: '/case-legal', industry: 'Legal', title: 'Contract Review Copilot for a 200-Lawyer Firm' },
        { href: '/case-logistics', industry: 'Logistics', title: 'Exception Management Agent for a 3PL Network' },
      ]}
    />
  );
}
