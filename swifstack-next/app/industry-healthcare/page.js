import IndustryPage from '../../components/IndustryPage';

export const metadata = { title: 'Healthcare' };

export default function Page() {
  return (
    <IndustryPage
      tag="Healthcare"
      h1="Voice AI and Automation for Healthcare Teams Under Pressure."
      desc="Front desks are buried in scheduling calls, and no-shows and missed after-hours calls cost revenue."
      overview="Healthcare operations run on phone calls and manual scheduling. Front desk staff repeat the same booking, reminder and verification calls all day. We build voice agents that handle inbound and outbound calls, connect to your EHR, and hand complex calls to staff with a full summary."
      problems={[]}
      solution="We build voice agents that book, move and cancel appointments in your EHR, confirm insurance, send automated reminders, and handle after-hours calls — handing anything complex to staff with a transcript."
      relatedCases={[{"href":"/case-healthcare","type":"Voice AI","title":"Swope Health: 55% Calls Without Staff"}]}
      relatedServices={[{"href":"/service-voice","title":"Voice AI","desc":"Inbound and outbound voice agents connected to your scheduling and EHR systems."},{"href":"/service-workflow","title":"Workflow Automations","desc":"Automate intake forms, referrals and prior auth workflows."}]}
    />
  );
}
