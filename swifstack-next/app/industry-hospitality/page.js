import IndustryPage from '../../components/IndustryPage';

export const metadata = { title: 'Hospitality' };

export default function Page() {
  return (
    <IndustryPage
      tag="Hospitality"
      h1="Voice Agents That Take Bookings and Handle Changes Day and Night."
      desc="After-hours booking calls go unanswered and front desks repeat the same conversations all day."
      overview="Hospitality operations run around the clock but staff do not. Booking calls outside business hours go unanswered, and front desk teams spend most of their day on routine reservation changes. We build voice agents that handle inbound booking calls, confirm reservations and process changes in your PMS, day and night."
      problems={[]}
      solution="We build voice agents that answer inbound calls, take new bookings, modify or cancel existing reservations in your PMS, and hand complex calls to staff with a full summary — available 24/7."
      relatedCases={[{"href":"/case-hospitality","type":"Voice AI","title":"TripMerchant: 55% Routine Calls Automated"}]}
      relatedServices={[{"href":"/service-voice","title":"Voice AI","desc":"Inbound booking agents connected to your PMS, available 24/7."},{"href":"/service-workflow","title":"Workflow Automations","desc":"Automate pre-arrival emails, reminders and post-stay follow-ups."}]}
    />
  );
}
