import ServicePage from '../../components/ServicePage';

export const metadata = { title: 'Cloud & DevOps' };

export default function Page() {
  return (
    <ServicePage
      tag="Cloud & DevOps"
      h1="Secure, Cost-Aware Cloud Infrastructure That Ships."
      desc="Cloud migration, CI/CD pipelines, infrastructure as code, and cost optimization."
      overview="We design and operate cloud environments that are secure, well-monitored and cost-controlled. Whether you are migrating, scaling or starting from scratch, we build infrastructure that your team can understand and own."
      items={[
        { t: 'Cloud migration', d: 'Move workloads to AWS, GCP or Azure with a plan that minimises downtime and risk.' },
        { t: 'CI/CD pipelines', d: 'Automated build, test and deploy pipelines that keep your team shipping fast.' },
        { t: 'Infrastructure as code', d: 'All infrastructure defined in code, versioned and reviewed like any other software.' },
        { t: 'Kubernetes & containers', d: 'Container orchestration that scales with your load and stays manageable.' },
        { t: 'Monitoring & observability', d: 'Dashboards, alerts and tracing so you know what is happening before users do.' },
        { t: 'Cost optimization', d: 'Right-sizing, reserved instances and waste elimination that cut your cloud bill.' },
      ]}
      relatedIndustries={[
        { href: '/industry-saas', label: 'SaaS' },
        { href: '/industry-financialservices', label: 'Financial services' },
        { href: '/industry-healthcare', label: 'Healthcare' },
      ]}
      related={[
        { href: '/service-software', title: 'AI-assisted Software Engineering', desc: 'Custom products and legacy modernization, built faster and reviewed by senior engineers.' },
        { href: '/service-workflow', title: 'Workflow Automations', desc: 'Document processing, routing and system sync that remove repetitive work.' },
      ]}
    />
  );
}
