import { motion } from 'framer-motion';
import { Handshake, GraduationCap, Building2, Microscope, Globe, Users, Target, Award, ArrowRight, ExternalLink } from 'lucide-react';

export function PartnershipsPage() {
  const partnershipTypes = [
    {
      icon: GraduationCap,
      title: 'Academic Collaborations',
      description: 'Strategic partnerships with leading universities and research institutions worldwide',
      benefits: ['Access to cutting-edge research', 'Talent pipeline development', 'Joint publications', 'Technology transfer'],
      partners: ['Harvard Medical School', 'Johns Hopkins University', 'Stanford University', 'Imperial College London']
    },
    {
      icon: Building2,
      title: 'Industry Partnerships',
      description: 'Collaborations with pharmaceutical and biotech companies for co-development and licensing',
      benefits: ['Accelerated drug development', 'Shared R&D costs', 'Expanded product portfolio', 'Market access'],
      partners: ['Pfizer', 'Novartis', 'Merck', 'AstraZeneca']
    },
    {
      icon: Microscope,
      title: 'Research Organizations',
      description: 'Partnerships with CROs, CDMOs, and specialized research facilities',
      benefits: ['Clinical trial expertise', 'Manufacturing capabilities', 'Regulatory knowledge', 'Global reach'],
      partners: ['IQVIA', 'Parexel', 'Catalent', 'Thermo Fisher Scientific']
    },
    {
      icon: Globe,
      title: 'Government & NGOs',
      description: 'Collaborations with government agencies and non-profit organizations',
      benefits: ['Access to funding', 'Regulatory insights', 'Public health impact', 'Global health initiatives'],
      partners: ['WHO', 'NIH', 'Bill & Melinda Gates Foundation', 'PATH']
    }
  ];

  const strategicInitiatives = [
    {
      title: 'Open Innovation Platform',
      description: 'Digital platform connecting EDIF Pharma with global innovation ecosystem',
      features: ['Technology scouting', 'Collaboration matchmaking', 'IP management', 'Joint venture formation'],
      impact: '50+ active partnerships, $200M+ in collaborative R&D investment'
    },
    {
      title: 'Global Research Network',
      description: 'Network of 200+ research institutions across 40+ countries',
      features: ['Multi-site clinical trials', 'Real-world evidence studies', 'Regulatory harmonization', 'Knowledge sharing'],
      impact: 'Accelerated development timelines by 30%, expanded market access'
    },
    {
      title: 'Technology Transfer Program',
      description: 'Structured program for transferring academic discoveries to clinical development',
      features: ['IP evaluation', 'Development funding', 'Regulatory support', 'Commercialization assistance'],
      impact: '15 successful technology transfers, 8 products in clinical development'
    },
    {
      title: 'Capacity Building Initiatives',
      description: 'Training and development programs for partner organizations in emerging markets',
      features: ['Technical training', 'Quality systems', 'Regulatory compliance', 'Business development'],
      impact: 'Strengthened healthcare systems in 25 countries, improved access to medicines'
    }
  ];

  const successStories = [
    {
      title: 'Novel Antibiotic Development',
      partner: 'Harvard University',
      description: 'Joint development of next-generation antibiotics targeting multidrug-resistant infections',
      outcomes: ['Phase 2 clinical trials completed', 'Patent portfolio expanded', '$50M in joint funding secured'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      title: 'Biologics Manufacturing Partnership',
      partner: 'Catalent',
      description: 'Strategic alliance for biologics manufacturing and development services',
      outcomes: ['Capacity expansion by 300%', 'Technology transfer completed', 'Global supply chain established'],
      image: 'https://images.unsplash.com/photo-1582719471135-c3967ffb1c42?w=400&h=300&fit=crop'
    },
    {
      title: 'Vaccine Development Collaboration',
      partner: 'Gates Foundation',
      description: 'Development of affordable vaccines for neglected tropical diseases',
      outcomes: ['3 vaccines in clinical trials', 'Access expanded to 50M+ people', 'Cost reduction by 70%'],
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop'
    }
  ];

  const partnershipMetrics = [
    { metric: '200+', label: 'Active Partnerships' },
    { metric: '40+', label: 'Countries' },
    { metric: '$500M+', label: 'Joint R&D Investment' },
    { metric: '25', label: 'Products in Co-Development' },
    { metric: '98%', label: 'Partnership Success Rate' },
    { metric: '50+', label: 'Joint Publications' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">COLLABORATION & INNOVATION</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Collaboration is at the heart of innovation. Through strategic partnerships
              with leading academic institutions, pharmaceutical companies, research organizations,
              and government agencies, we accelerate drug discovery, expand our capabilities,
              and bring life-changing medicines to patients worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {partnershipMetrics.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                  <div className="text-2xl font-bold">{item.metric}</div>
                  <div className="text-xs text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">PARTNERSHIP ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Types of Partnerships
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our diverse partnership ecosystem spans academic research, industry collaboration,
              and global health initiatives, each designed to maximize impact and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-indigo-300 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <type.icon className="text-indigo-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{type.title}</h3>
                    <p className="text-[var(--text-900)]/70 mb-4">{type.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                        <ArrowRight size={14} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-3">Key Partners:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.partners.map((partner, idx) => (
                      <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Initiatives */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">STRATEGIC PROGRAMS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Strategic Initiatives
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Comprehensive programs designed to foster collaboration, accelerate innovation,
              and maximize the impact of our partnerships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {strategicInitiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-3">{initiative.title}</h3>
                <p className="text-[var(--text-900)]/70 mb-4">{initiative.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {initiative.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                        <Target size={12} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[var(--border-color)]">
                  <p className="text-sm text-indigo-600 font-medium">{initiative.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">SUCCESS STORIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Partnership Success Stories
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Real-world examples of how our strategic partnerships have led to breakthrough
              innovations and improved patient outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-[var(--text-900)] mb-2">{story.title}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{story.partner}</p>
                  <p className="text-[var(--text-900)]/70 text-sm mb-4">{story.description}</p>

                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-900)] mb-2">Key Outcomes:</h4>
                    <ul className="space-y-1">
                      {story.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-900)]/60">
                          <Award size={10} className="text-indigo-600 mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 md:py-32 bg-indigo-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-indigo-50 text-indigo-700 mb-4">
              <span className="text-sm tracking-wide">COLLABORATION PROCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              How We Partner
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our structured partnership process ensures successful collaborations
              from initial engagement to long-term value creation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Alignment',
                description: 'Identify mutual interests and strategic alignment through initial discussions and due diligence'
              },
              {
                step: '02',
                title: 'Agreement & Planning',
                description: 'Develop detailed partnership agreements, governance structures, and implementation plans'
              },
              {
                step: '03',
                title: 'Execution & Collaboration',
                description: 'Joint execution of planned activities with regular progress reviews and milestone tracking'
              },
              {
                step: '04',
                title: 'Value Creation & Scaling',
                description: 'Measure outcomes, capture learnings, and scale successful partnerships for maximum impact'
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-3">{phase.title}</h3>
                <p className="text-[var(--text-900)]/60 text-sm leading-relaxed">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Handshake className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Partner With Us
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join our global network of partners and collaborate on groundbreaking
              pharmaceutical innovations that improve lives worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 hover:bg-gray-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>EXPLORE PARTNERSHIPS</span>
                <ExternalLink size={16} />
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>CONTACT BUSINESS DEVELOPMENT</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}