import CasePage from '../../components/CasePage';
export const metadata = { title: 'Churn Prediction — SaaS' };
export default function Page() {
  return (
    <CasePage
      industry="SaaS"
      h1="Churn Prediction Agent That Surfaced At-Risk Accounts and Increased Retention by 23%"
      summary="A B2B SaaS company with 800 accounts was losing 2–3% of ARR per month to churn. Their CSMs had no systematic way to identify at-risk accounts until it was too late. We built a churn prediction agent that scores every account daily, identifies the specific usage signals driving the risk, and queues the right CSM action — before the customer decides to leave."
      stats={[
        { n: '23%', t: 'Reduction in churn', sub: 'ARR retained vs. prior 6-month baseline' },
        { n: '800', t: 'Accounts scored daily', sub: 'Full portfolio, not just flagged accounts' },
        { n: '14 days', t: 'Earlier intervention', sub: 'Average lead time vs. CSM intuition' },
      ]}
      client="B2B SaaS Company (name withheld)"
      timeline="8 weeks"
      services={['AI Agents', 'GTM Engineering', 'Workflow Automation']}
      stack={['Python', 'XGBoost', 'Segment', 'HubSpot API']}
      challenge="CSMs were managing 100+ accounts each. They relied on gut feel and renewal date proximity to decide who to call. At-risk accounts often showed no outward signs until the customer sent a cancellation email. By then, the decision was already made. Leadership knew churn was a growth ceiling but had no data to act on and no scalable way for CSMs to monitor 100 accounts each for subtle usage drops."
      built="A churn prediction pipeline that pulls daily product usage data from Segment, support ticket history, billing events, and engagement data from HubSpot. An XGBoost model scores each account on 40+ features, trained on 18 months of historical data with labeled outcomes. The top at-risk accounts each day are queued in HubSpot as CSM tasks with a risk summary: which features went dark, which team members stopped logging in, what the account health looked like 30/60/90 days ago. CSMs start their day with a prioritized list, not a gut feeling."
      results={[
        'Churn reduced 23% in the first 6 months (ARR retained vs. prior baseline)',
        'All 800 accounts scored daily — no account falls off the radar',
        'CSMs intervening an average of 14 days earlier than before the system',
        'Save rate on at-risk accounts that received CSM outreach: 61%',
        'CSM capacity effectively tripled — same headcount managing 3× the meaningful touchpoints',
      ]}
      moreCases={[
        { href: '/case-retail', industry: 'Retail', title: 'Demand Forecasting Agent That Cut Stockouts by 34%' },
        { href: '/case-financialservices', industry: 'Financial Services', title: 'Real-Time Compliance Monitoring Across 14 Jurisdictions' },
        { href: '/case-healthcare', industry: 'Healthcare', title: 'Prior Auth Automation — 80% Reduction in Manual Reviews' },
      ]}
    />
  );
}
