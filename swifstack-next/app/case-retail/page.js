import CasePage from '../../components/CasePage';
export const metadata = { title: 'Demand Forecasting — Retail' };
export default function Page() {
  return (
    <CasePage
      industry="Retail"
      h1="Demand Forecasting Agent That Cut Stockouts by 34% for a 60-SKU DTC Brand"
      summary="A direct-to-consumer supplement brand with 60 SKUs was regularly stocking out of top sellers while sitting on excess inventory of slow movers. Their demand planning was a weekly spreadsheet exercise. We replaced it with an AI forecasting agent that updates daily, accounts for promotions and seasonality, and flags reorder triggers automatically."
      stats={[
        { n: '34%', t: 'Reduction in stockouts', sub: 'Measured over 6 months post-launch' },
        { n: '22%', t: 'Inventory carrying cost reduction', sub: 'Fewer slow-mover overbuys' },
        { n: '1 day', t: 'Forecast refresh cycle', sub: 'Down from weekly manual updates' },
      ]}
      client="DTC Supplement Brand (name withheld)"
      timeline="8 weeks"
      services={['AI Agents', 'Workflow Automation', 'GTM Engineering']}
      stack={['Python', 'Prophet', 'Shopify API', 'Google Sheets']}
      challenge="The founder was doing demand planning in a spreadsheet every Sunday. It took four hours and was based on gut feel and trailing 30-day sales. Promotions broke the model entirely. When a product ran out, the team learned about it from customer complaints. When a slow mover piled up, they were stuck running margin-eroding discounts to clear it."
      built="A forecasting agent that pulls daily sales, inventory and promotion data from Shopify and their 3PL. A Prophet-based model generates 90-day rolling forecasts per SKU, adjusted for planned promotions, historical seasonality and recent velocity changes. The agent computes days-of-cover for each SKU and fires Slack alerts and a purchase order draft when any SKU drops below the reorder threshold. The founder reviews and approves in under 10 minutes."
      results={[
        'Stockouts reduced 34% in the first 6 months',
        'Inventory carrying costs down 22% from fewer slow-mover overbuys',
        'Forecast refresh cycle from weekly manual to daily automated',
        'Founder\'s Sunday planning session eliminated entirely',
        'Promotion lift modeled accurately within 8% on average',
      ]}
      moreCases={[
        { href: '/case-saas', industry: 'SaaS', title: 'Churn Prediction Agent That Calls the Right Customers' },
        { href: '/case-logistics', industry: 'Logistics', title: 'Exception Management Agent for a 3PL Network' },
        { href: '/case-hospitality', industry: 'Hospitality', title: 'AI Revenue Management for a 12-Property Hotel Group' },
      ]}
    />
  );
}
