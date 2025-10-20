import { motion } from 'framer-motion';
import { Microscope, Target, FlaskConical, Dna, Brain, Activity, Users, Award, TrendingUp } from 'lucide-react';

export function ResearchFocusPage() {
  const researchAreas = [
    {
      icon: Target,
      title: 'Therapeutic Innovation',
      description: 'Developing novel therapeutic approaches for unmet medical needs in oncology, cardiovascular, and metabolic diseases.',
      focus: 'Patient-centered drug development',
      impact: 'Addressing 3 major therapeutic areas'
    },
    {
      icon: Dna,
      title: 'Molecular Biology',
      description: 'Advanced research in genomics, proteomics, and molecular pathways to identify novel drug targets.',
      focus: 'Precision medicine approaches',
      impact: '15+ novel targets identified'
    },
    {
      icon: Brain,
      title: 'Neuroscience',
      description: 'Research into neurodegenerative diseases, psychiatric disorders, and neurological therapies.',
      focus: 'Central nervous system disorders',
      impact: '5 active CNS programs'
    },
    {
      icon: Activity,
      title: 'Immunology',
      description: 'Development of immunomodulatory therapies for autoimmune diseases and cancer immunotherapy.',
      focus: 'Immune system modulation',
      impact: '8 immunology projects'
    },
    {
      icon: FlaskConical,
      title: 'Drug Delivery Systems',
      description: 'Innovative drug delivery technologies for improved bioavailability and patient compliance.',
      focus: 'Advanced formulation science',
      impact: '12 delivery technologies'
    },
    {
      icon: Microscope,
      title: 'Biomarker Discovery',
      description: 'Identification and validation of biomarkers for disease diagnosis and treatment monitoring.',
      focus: 'Companion diagnostics',
      impact: '25+ validated biomarkers'
    }
  ];

  const researchCapabilities = [
    {
      title: 'High-Throughput Screening',
      description: 'Automated screening of 100,000+ compounds daily',
      metric: '100K+ compounds/day'
    },
    {
      title: 'Molecular Modeling',
      description: 'Computational chemistry and structure-based drug design',
      metric: 'AI-powered predictions'
    },
    {
      title: 'Cell Biology Labs',
      description: 'Advanced cell culture and assay development facilities',
      metric: '50+ cell lines'
    },
    {
      title: 'Animal Research Facility',
      description: 'GLP-compliant preclinical testing capabilities',
      metric: 'FDA-approved facility'
    }
  ];

  const scientistProfiles = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Chief Scientific Officer',
      expertise: 'Molecular Pharmacology',
      achievements: '25+ publications, 8 patents',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NjA3MjgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Director of Oncology Research',
      expertise: 'Cancer Biology',
      achievements: 'Lead investigator on 3 clinical trials',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBzY2llbnRpc3R8ZW58MXx8fHwxNzYwNzI4MzMzfDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      name: 'Dr. Meera Patel',
      role: 'Head of Immunology',
      expertise: 'Immunopharmacology',
      achievements: 'Published in Nature Immunology',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHdpb21hbiUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NjA3MjgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">SCIENTIFIC EXCELLENCE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Research Focus
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Our research is driven by a commitment to scientific excellence and therapeutic innovation.
              We focus on understanding disease mechanisms at the molecular level to develop
              breakthrough treatments that improve patient outcomes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">45+</div>
                <div className="text-xs text-white/80">Research Scientists</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">25+</div>
                <div className="text-xs text-white/80">Active Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">100+</div>
                <div className="text-xs text-white/80">Publications</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs text-white/80">Patents Filed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">THERAPEUTIC AREAS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Key Research Areas
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our research portfolio spans multiple therapeutic areas, focusing on diseases
              with significant unmet medical needs and strong scientific rationale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-[var(--brand-blue)] transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <area.icon className="text-[var(--brand-blue)]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{area.title}</h3>
                    <p className="text-[var(--text-900)]/70 mb-3">{area.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[var(--brand-blue)] font-medium">{area.focus}</span>
                      <span className="text-[var(--text-900)]/60">{area.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Capabilities */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">CAPABILITIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Advanced Research Infrastructure
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              State-of-the-art laboratories and cutting-edge technologies enable our scientists
              to conduct world-class research and accelerate drug discovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-[var(--brand-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="text-[var(--brand-blue)]" size={28} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{capability.title}</h3>
                <p className="text-sm text-[var(--text-900)]/60 mb-3">{capability.description}</p>
                <div className="text-sm text-[var(--brand-blue)] font-medium">{capability.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientist Profiles */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">OUR TEAM</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Leading Scientists
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our world-class research team brings together expertise from leading institutions
              and decades of experience in pharmaceutical research and development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {scientistProfiles.map((scientist, index) => (
              <motion.div
                key={scientist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-24 h-24 bg-[var(--brand-blue)]/10 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={scientist.image}
                    alt={scientist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl text-[var(--text-900)] mb-1">{scientist.name}</h3>
                <p className="text-[var(--brand-blue)] font-medium mb-2">{scientist.role}</p>
                <p className="text-sm text-[var(--text-900)]/60 mb-3">{scientist.expertise}</p>
                <p className="text-xs text-[var(--text-900)]/50">{scientist.achievements}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Research Impact & Achievements
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Our research efforts have led to significant scientific advancements and
              contributions to the global pharmaceutical knowledge base.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Scientific Recognition',
                description: '100+ peer-reviewed publications in top-tier journals'
              },
              {
                icon: TrendingUp,
                title: 'Innovation Pipeline',
                description: '25+ novel compounds in various stages of development'
              },
              {
                icon: Users,
                title: 'Global Collaboration',
                description: 'Partnerships with 15+ leading research institutions'
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <achievement.icon className="text-white mb-4" size={32} />
                <h3 className="text-xl mb-3">{achievement.title}</h3>
                <p className="text-white/80 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Microscope className="mx-auto mb-6 text-[var(--brand-blue)]" size={48} />
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Join Our Research Mission
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Collaborate with our research team to advance pharmaceutical science and
              develop innovative therapies for patients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/90 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>CONTACT RESEARCH TEAM</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-900)] hover:bg-[var(--surface)] px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>VIEW PUBLICATIONS</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}