import { motion } from 'framer-motion';
import { FileText, Users, Activity, BarChart3, Clock, CheckCircle, AlertTriangle, TrendingUp, Calendar, Target } from 'lucide-react';

export function ClinicalTrialsPage() {
  const trialPhases = [
    {
      phase: 'Phase I',
      title: 'First-in-Human Studies',
      description: 'Safety and dosage evaluation in healthy volunteers',
      duration: '1-2 years',
      participants: '20-100',
      focus: 'Safety, dosage, pharmacokinetics',
      icon: Activity
    },
    {
      phase: 'Phase II',
      title: 'Proof of Concept',
      description: 'Efficacy testing in patients with target condition',
      duration: '2-3 years',
      participants: '100-500',
      focus: 'Efficacy, optimal dosing, side effects',
      icon: Target
    },
    {
      phase: 'Phase III',
      title: 'Confirmatory Trials',
      description: 'Large-scale testing for regulatory approval',
      duration: '3-5 years',
      participants: '1,000-5,000+',
      focus: 'Safety, efficacy, comparison to standards',
      icon: BarChart3
    },
    {
      phase: 'Phase IV',
      title: 'Post-Marketing Surveillance',
      description: 'Long-term safety and effectiveness monitoring',
      duration: 'Ongoing',
      participants: 'Thousands',
      focus: 'Real-world effectiveness, rare side effects',
      icon: TrendingUp
    }
  ];

  const activeTrials = [
    {
      title: 'CARDIOVASCULAR DISEASE MANAGEMENT',
      phase: 'Phase III',
      status: 'Recruiting',
      participants: '2,500',
      locations: '45 sites',
      completion: '2026',
      description: 'Novel combination therapy for hypertension management'
    },
    {
      title: 'DIABETES COMBINATION THERAPY',
      phase: 'Phase II',
      status: 'Active',
      participants: '320',
      locations: '28 sites',
      completion: '2025',
      description: 'Fixed-dose combination for type 2 diabetes'
    },
    {
      title: 'NOVEL ANTIBIOTIC DEVELOPMENT',
      phase: 'Phase I',
      status: 'Completed',
      participants: '85',
      locations: '12 sites',
      completion: '2024',
      description: 'Next-generation antibiotic for resistant infections'
    },
    {
      title: 'ONCOLOGY BIOSIMILAR',
      phase: 'Phase III',
      status: 'Data Analysis',
      participants: '1,200',
      locations: '60 sites',
      completion: '2025',
      description: 'Monoclonal antibody biosimilar for breast cancer'
    }
  ];

  const trialCapabilities = [
    {
      icon: Users,
      title: 'Patient Recruitment',
      description: 'Advanced recruitment strategies and patient registries',
      metrics: '50,000+ patient database'
    },
    {
      icon: FileText,
      title: 'Regulatory Compliance',
      description: 'Full GCP compliance and regulatory expertise',
      metrics: 'ICH-GCP certified'
    },
    {
      icon: Activity,
      title: 'Data Management',
      description: 'Electronic data capture and real-time monitoring',
      metrics: '21 CFR Part 11 compliant'
    },
    {
      icon: BarChart3,
      title: 'Statistical Analysis',
      description: 'Advanced biostatistics and data analysis',
      metrics: 'SAS, R, Python expertise'
    }
  ];

  const trialSites = [
    'All India Institute of Medical Sciences (AIIMS)',
    'Post Graduate Institute of Medical Education & Research (PGIMER)',
    'Christian Medical College (CMC) Vellore',
    'Tata Memorial Hospital',
    'Apollo Hospitals Network',
    'Max Healthcare',
    'Fortis Healthcare Network'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">CLINICAL DEVELOPMENT</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Clinical Trials
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Our clinical development program follows rigorous scientific and ethical standards
              to ensure the safety and efficacy of our pharmaceutical products. We conduct
              comprehensive clinical trials across all phases, from first-in-human studies
              to post-marketing surveillance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">12+</div>
                <div className="text-xs text-white/80">Active Trials</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">8,000+</div>
                <div className="text-xs text-white/80">Trial Participants</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">150+</div>
                <div className="text-xs text-white/80">Clinical Sites</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">99.5%</div>
                <div className="text-xs text-white/80">Data Quality</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trial Phases */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-green-50 text-green-700 mb-4">
              <span className="text-sm tracking-wide">CLINICAL DEVELOPMENT PHASES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Clinical Trial Phases
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our clinical development follows a structured, phased approach ensuring
              comprehensive evaluation of safety and efficacy at each stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {trialPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-green-300 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <phase.icon className="text-green-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-green-600">{phase.phase}</span>
                      <h3 className="text-xl text-[var(--text-900)]">{phase.title}</h3>
                    </div>
                    <p className="text-[var(--text-900)]/70 mb-4">{phase.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-[var(--text-900)]/60">Duration:</span>
                        <span className="text-[var(--text-900)] ml-2">{phase.duration}</span>
                      </div>
                      <div>
                        <span className="text-[var(--text-900)]/60">Participants:</span>
                        <span className="text-[var(--text-900)] ml-2">{phase.participants}</span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <span className="text-sm text-green-600 font-medium">{phase.focus}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Trials */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-green-50 text-green-700 mb-4">
              <span className="text-sm tracking-wide">CURRENT PROGRAMS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Active Clinical Trials
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our current clinical development programs across multiple therapeutic areas,
              demonstrating our commitment to advancing patient care.
            </p>
          </motion.div>

          <div className="space-y-6">
            {activeTrials.map((trial, index) => (
              <motion.div
                key={trial.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{trial.title}</h3>
                    <p className="text-[var(--text-900)]/70">{trial.description}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      trial.status === 'Recruiting' ? 'bg-green-50 text-green-700' :
                      trial.status === 'Active' ? 'bg-blue-50 text-blue-700' :
                      trial.status === 'Completed' ? 'bg-purple-50 text-purple-700' :
                      'bg-yellow-50 text-yellow-700'
                    }`}>
                      {trial.status}
                    </span>
                    <div className="text-sm text-[var(--text-900)]/60 mt-1">{trial.phase}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl text-green-600 mb-1">{trial.participants}</div>
                    <div className="text-sm text-[var(--text-900)]/60">Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-green-600 mb-1">{trial.locations}</div>
                    <div className="text-sm text-[var(--text-900)]/60">Sites</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-green-600 mb-1">{trial.completion}</div>
                    <div className="text-sm text-[var(--text-900)]/60">Completion</div>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="text-green-600 mx-auto mb-1" size={32} />
                    <div className="text-sm text-[var(--text-900)]/60">GCP Compliant</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Capabilities */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-green-50 text-green-700 mb-4">
              <span className="text-sm tracking-wide">CLINICAL INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Clinical Trial Capabilities
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              State-of-the-art clinical trial infrastructure ensuring data integrity,
              patient safety, and regulatory compliance throughout the development process.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trialCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="text-green-600" size={28} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{capability.title}</h3>
                <p className="text-sm text-[var(--text-900)]/60 mb-3">{capability.description}</p>
                <div className="text-sm text-green-600 font-medium">{capability.metrics}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Sites */}
      <section className="py-20 md:py-32 bg-green-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Clinical Trial Sites Network
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our extensive network of clinical trial sites includes leading hospitals
              and research institutions across India, ensuring access to diverse patient
              populations and high-quality clinical data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trialSites.map((site, index) => (
              <motion.div
                key={site}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl border border-green-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FileText className="text-green-600" size={20} />
                  </div>
                  <span className="text-[var(--text-900)] font-medium">{site}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Safety */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              Patient Safety & Ethics
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Patient safety and ethical conduct are paramount in all our clinical trials.
              We adhere to the highest standards of Good Clinical Practice (GCP) and
              international ethical guidelines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: 'Adverse Event Monitoring',
                description: '24/7 monitoring and reporting of adverse events with immediate response protocols'
              },
              {
                icon: Users,
                title: 'Patient Rights Protection',
                description: 'Informed consent processes and patient advocacy ensuring voluntary participation'
              },
              {
                icon: CheckCircle,
                title: 'Regulatory Compliance',
                description: 'Full compliance with ICH-GCP, FDA regulations, and local regulatory requirements'
              }
            ].map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <commitment.icon className="text-white mb-4" size={32} />
                <h3 className="text-xl mb-3">{commitment.title}</h3>
                <p className="text-white/80 leading-relaxed">{commitment.description}</p>
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
            <FileText className="mx-auto mb-6 text-green-600" size={48} />
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Participate in Clinical Trials
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              Join our clinical research programs and contribute to advancing medical science.
              Contact our clinical team to learn about current opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>FIND CLINICAL TRIALS</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-[var(--border-color)] text-[var(--text-900)] hover:bg-[var(--surface)] px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>CONTACT CLINICAL TEAM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}