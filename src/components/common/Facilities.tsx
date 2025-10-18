import { motion } from 'framer-motion';
import { Building2, ShieldCheck, Thermometer, Wind, Droplet, Zap, CheckCircle2, MapPin } from 'lucide-react';
import { Button } from '../ui/button';

export function Facilities() {
  const facilities = [
    {
      name: 'EDIF Pharma Unit I',
      location: 'Baddi, Himachal Pradesh, India',
      area: '75,000 sq ft',
      image: 'https://images.unsplash.com/photo-1748000970909-845f4aa144d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHJvb20lMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2MDcyODIzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      specialization: 'Solid Dosage Forms',
      capacity: '500M units/year',
      certifications: ['WHO-GMP', 'ISO 9001:2015', 'ISO 14001:2015'],
      capabilities: [
        'High-speed tablet compression',
        'Capsule filling (Hard & Soft)',
        'Coating operations',
        'Blister & Strip packaging',
      ],
    },
    {
      name: 'EDIF Pharma Unit II',
      location: 'Paonta Sahib, Himachal Pradesh, India',
      area: '120,000 sq ft',
      image: 'https://images.unsplash.com/photo-1630396814511-340128f6300a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjA3MjgwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      specialization: 'Liquid & Injectable Forms',
      capacity: '300M units/year',
      certifications: ['WHO-GMP', 'US FDA', 'MHRA UK', 'TGA Australia'],
      capabilities: [
        'Sterile liquid injectables',
        'Oral liquid suspensions',
        'Dry powder injectables',
        'Aseptic filling operations',
      ],
    },
    {
      name: 'EDIF Pharma Unit III',
      location: 'SEZ Indore, Madhya Pradesh, India',
      area: '200,000 sq ft',
      image: 'https://images.unsplash.com/photo-1758269445774-61a540a290a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjA3MDUzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      specialization: 'Oncology & Biologics',
      capacity: '100M units/year',
      certifications: ['WHO-GMP', 'EU GMP', 'PMDA Japan', 'Health Canada'],
      capabilities: [
        'Cytotoxic drug manufacturing',
        'Biosimilar production',
        'Isolated containment systems',
        'Cold chain logistics',
      ],
    },
  ];

  const qualityFeatures = [
    {
      icon: Wind,
      title: 'HVAC Systems',
      description: 'Advanced climate control with EU Grade A-D clean room classifications',
    },
    {
      icon: Droplet,
      title: 'Water Systems',
      description: 'Multi-stage purified water & WFI generation with continuous monitoring',
    },
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: 'Automated environmental monitoring with 24/7 data logging',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Fully automated production lines with Industry 4.0 integration',
    },
  ];

  const complianceStandards = [
    'World Health Organization GMP (WHO-GMP)',
    'US Food & Drug Administration (US FDA)',
    'European Medicines Agency (EMA/EU GMP)',
    'UK Medicines & Healthcare Regulatory Agency (MHRA)',
    'Therapeutic Goods Administration Australia (TGA)',
    'Pharmaceuticals and Medical Devices Agency Japan (PMDA)',
    'ISO 9001:2015 Quality Management',
    'ISO 14001:2015 Environmental Management',
    'ISO 45001:2018 Occupational Health & Safety',
  ];

  return (
    <section id="facilities" className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="facilities-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--brand-blue)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#facilities-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-[var(--radius-button)] mb-4">
            <span className="text-sm text-[var(--brand-blue)]">Manufacturing Excellence</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--brand-blue)] mb-6">
            Our Facilities
          </h2>
          <p className="text-lg text-[var(--text-900)] opacity-70 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art WHO-GMP certified manufacturing facilities equipped with cutting-edge 
            technology and stringent quality control systems.
          </p>
        </motion.div>

        {/* Facilities List */}
        <div className="space-y-16 mb-20">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.name}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[var(--border-color)] group">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Details */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="flex items-start gap-3 mb-4">
                  <Building2 className="text-[var(--brand-blue)] flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h3 className="text-2xl text-[var(--text-900)] mb-2">{facility.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-900)] opacity-60 mb-1">
                      <MapPin size={16} />
                      <span>{facility.location}</span>
                    </div>
                    <div className="text-sm text-[var(--text-900)] opacity-60">
                      Area: {facility.area}
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--surface)] p-5 rounded-lg border border-[var(--border-color)] mb-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-[var(--text-900)] opacity-50 uppercase tracking-wide mb-1">
                        Specialization
                      </div>
                      <div className="text-sm text-[var(--text-900)]">{facility.specialization}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-900)] opacity-50 uppercase tracking-wide mb-1">
                        Capacity
                      </div>
                      <div className="text-sm text-[var(--brand-blue)]">{facility.capacity}</div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {facility.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="px-2.5 py-1 bg-white border border-[var(--border-color)] rounded-[var(--radius-button)] text-xs text-[var(--brand-blue)]"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>

                  {/* Capabilities */}
                  <div className="text-xs text-[var(--text-900)] opacity-50 uppercase tracking-wide mb-2">
                    Key Capabilities
                  </div>
                  <ul className="space-y-1.5">
                    {facility.capabilities.map((capability) => (
                      <li key={capability} className="flex items-start gap-2 text-sm text-[var(--text-900)] opacity-70">
                        <CheckCircle2 size={16} className="text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  className="border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white px-6 h-auto py-3"
                >
                  Request Facility Tour
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Features */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl text-[var(--brand-blue)] mb-8 text-center">
            Infrastructure & Quality Systems
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="bg-white border border-[var(--border-color)] p-6 rounded-xl hover:border-[var(--brand-blue)] transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--brand-blue)] transition-colors">
                    <Icon size={24} className="text-[var(--brand-blue)] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg text-[var(--text-900)] mb-2">{feature.title}</h4>
                  <p className="text-sm text-[var(--text-900)] opacity-60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Compliance Standards */}
        <motion.div
          className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] p-8 md:p-12 rounded-xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-4 mb-8">
            <ShieldCheck size={40} className="flex-shrink-0 opacity-80" />
            <div>
              <h3 className="text-2xl md:text-3xl mb-3">
                Regulatory Compliance & Certifications
              </h3>
              <p className="text-white/80 leading-relaxed">
                All our facilities maintain the highest international standards and are regularly 
                audited by global regulatory authorities.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * index }}
              >
                <CheckCircle2 size={20} className="flex-shrink-0 text-white/80" />
                <span className="text-sm text-white/90">{standard}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
