import { FileText, Users, Briefcase } from 'lucide-react';
import { Button } from '../ui/button';

export function ResourcesSection() {
  const resources = [
    {
      icon: FileText,
      audience: 'Healthcare Professionals',
      description: 'Download product dossiers, prescribing information, and clinical data',
      cta: 'Access HCP Resources',
      href: '#hcp',
    },
    {
      icon: Users,
      audience: 'Patients',
      description: 'Patient information leaflets, medication guides, and support materials',
      cta: 'Patient Leaflets',
      href: '#patients',
    },
    {
      icon: Briefcase,
      audience: 'Distributors',
      description: 'Request commercial terms, regulatory documentation, and distribution info',
      cta: 'Commercial Inquiries',
      href: '#distributors',
    },
  ];

  return (
    <section className="bg-white py-16" id="resources">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[32px] leading-[40px] font-semibold text-[var(--brand-blue)] mb-2">
            Resources
          </h2>
          <p className="text-[var(--text-900)] opacity-70">
            Tailored information for every stakeholder
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className="bg-white border border-[var(--border-color)] rounded-[var(--radius-medium)] p-8 hover:shadow-lg transition-shadow duration-200"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[var(--surface)] rounded-[var(--radius-small)] flex items-center justify-center">
                    <Icon size={24} className="text-[var(--brand-blue)]" aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-[20px] leading-[28px] font-semibold text-[var(--text-900)]">
                    {resource.audience}
                  </h3>
                  
                  <p className="text-sm text-[var(--text-900)] opacity-70 min-h-[48px]">
                    {resource.description}
                  </p>
                  
                  <Button
                    variant="ghost"
                    className="text-[var(--brand-blue)] hover:bg-[var(--surface)] p-0 h-auto"
                    asChild
                  >
                    <a href={resource.href}>
                      {resource.cta} →
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
