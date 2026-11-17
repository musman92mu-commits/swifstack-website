import CasePage from '../../components/CasePage';
export const metadata = { title: 'Revenue Management — Hospitality' };
export default function Page() {
  return (
    <CasePage
      industry="Hospitality"
      h1="AI Revenue Management That Lifted RevPAR 18% for a 12-Property Hotel Group"
      summary="A regional hotel group was pricing rooms with a static seasonal rate card updated quarterly. Local events, competitor rate shifts and last-minute demand signals were invisible to them. We built a revenue management agent that reprices dynamically, monitors competitor rates, and updates their PMS automatically — without a revenue manager on staff."
      stats={[
        { n: '+18%', t: 'RevPAR improvement', sub: 'Year-over-year, same-property comparison' },
        { n: '4×/day', t: 'Rate update frequency', sub: 'Up from quarterly manual updates' },
        { n: '12', t: 'Properties managed', sub: 'Single agent, no revenue manager headcount' },
      ]}
      client="12-Property Regional Hotel Group (name withheld)"
      timeline="10 weeks"
      services={['AI Agents', 'Workflow Automation', 'Cloud & DevOps']}
      stack={['Python', 'AWS Lambda', 'Opera PMS API', 'Selenium']}
      challenge="The group operated without a dedicated revenue manager. Rates were set seasonally by the GM and rarely revisited. When a large event drove demand in one market, they were the last to raise rates. When occupancy was soft, they had no systematic way to test lower-priced packages. Competitors were repricing daily. The group was leaving significant revenue on the table."
      built="A revenue management agent that runs four times per day across all 12 properties. It pulls occupancy forecasts, booking pace, and length-of-stay data from the PMS. A web-scraping layer monitors competitor rates on OTAs for each market. Event data is pulled from a ticketing API. The agent runs a yield optimization model for each rate category and writes recommended rate updates back to the PMS via API. GMs receive a morning briefing with rate changes applied overnight and any decisions that require their approval."
      results={[
        'RevPAR improved 18% year-over-year on a same-property basis',
        'Rate update frequency increased from quarterly to 4× daily',
        '12 properties managed without adding a revenue manager',
        'Last-minute discounting reduced — occupancy at target rates improved 11%',
        'GM review time for revenue decisions under 10 minutes per morning',
      ]}
      moreCases={[
        { href: '/case-retail', industry: 'Retail', title: 'Demand Forecasting Agent That Cut Stockouts by 34%' },
        { href: '/case-realestate', industry: 'Real Estate', title: 'AI Lease Abstraction for a 3,000-Unit Portfolio Manager' },
        { href: '/case-saas', industry: 'SaaS', title: 'Churn Prediction Agent That Calls the Right Customers' },
      ]}
    />
  );
}
