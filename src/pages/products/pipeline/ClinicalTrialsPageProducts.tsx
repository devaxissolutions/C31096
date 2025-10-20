import { motion } from 'framer-motion';
import { Microscope, Users, Calendar, MapPin, Target, CheckCircle, Clock, AlertTriangle, BarChart3, FileText, Award, Activity, Shield, Star } from 'lucide-react';

export function ClinicalTrialsPageProducts() {
  const activeTrials = [
    {
      id: 'EDIF-CV-001',
      title: 'Phase 2 Study of EDIF-101 in Heart Failure with Reduced Ejection Fraction',
      phase: 'Phase 2',
      therapeuticArea: 'Cardiology',
      status: 'Recruiting',
      participants: 450,
      sites: 25,
      countries: ['USA', 'EU', 'India'],
      completion: 'Q2 2025',
      primaryEndpoint: 'Change in LVEF at 24 weeks',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      id: 'EDIF-DM-002',
      title: 'Phase 1/2 Trial of EDIF-201 in Type 2 Diabetes Mellitus',
      phase: 'Phase 1/2',
      therapeuticArea: 'Metabolic',
      status: 'Active',
      participants: 120,
      sites: 8,
      countries: ['USA', 'Canada'],
      completion: 'Q4 2024',
      primaryEndpoint: 'HbA1c reduction at 12 weeks',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop'
    },
    {
      id: 'EDIF-ID-003',
      title: 'Phase 1 Study of EDIF-301 in Complicated Urinary Tract Infections',
      phase: 'Phase 1',
      therapeuticArea: 'Infectious Diseases',
      status: 'Recruiting',
      participants: 64,
      sites: 6,
      countries: ['USA', 'EU'],
      completion: 'Q1 2025',
      primaryEndpoint: 'Safety and PK profile',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
    },
    {
      id: 'EDIF-NS-004',
      title: 'Phase 2a Study of EDIF-401 in Diabetic Peripheral Neuropathy',
      phase: 'Phase 2a',
      therapeuticArea: 'Neurology',
      status: 'Planning',
      participants: 200,
      sites: 15,
      countries: ['USA', 'EU', 'Asia'],
      completion: 'Q3 2025',
      primaryEndpoint: 'Pain reduction (NRS score)',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
    }
  ];

  const trialPhases = [
    {
      phase: 'Phase 1',
      title: 'First-in-Human Studies',
      description: 'Safety, dosage, and pharmacokinetics in healthy volunteers',
      duration: '6-12 months',
      participants: '20-100',
      focus: 'Safety & PK',
      successRate: '60-70%'
    },
    {
      phase: 'Phase 2',
      title: 'Proof of Concept',
      description: 'Efficacy evaluation and dose optimization in patient populations',
      duration: '12-24 months',
      participants: '100-500',
      focus: 'Efficacy & Safety',
      successRate: '30-40%'
    },
    {
      phase: 'Phase 3',
      title: 'Registration Trials',
      description: 'Large-scale studies for regulatory approval and market authorization',
      duration: '24-48 months',
      participants: '1,000-5,000+',
      focus: 'Confirmatory Evidence',
      successRate: '60-70%'
    },
    {
      phase: 'Phase 4',
      title: 'Post-Marketing Studies',
      description: 'Real-world evidence, safety monitoring, and additional indications',
      duration: 'Ongoing',
      participants: 'Thousands',
      focus: 'Real-world Data',
      successRate: 'Varies'
    }
  ];

  const globalSites = [
    { country: 'United States', trials: 8, sites: 45, participants: 1250 },
    { country: 'European Union', trials: 6, sites: 32, participants: 890 },
    { country: 'India', trials: 4, sites: 28, participants: 650 },
    { country: 'Canada', trials: 3, sites: 12, participants: 180 },
    { country: 'Australia', trials: 2, sites: 8, participants: 95 },
    { country: 'Japan', trials: 2, sites: 15, participants: 210 }
  ];

  const recruitmentStats = [
    {
      metric: '1,250',
      label: 'Active Participants',
      description: 'Currently enrolled across all trials'
    },
    {
      metric: '92',
      label: 'Clinical Sites',
      description: 'Global network of research centers'
    },
    {
      metric: '15',
      label: 'Countries',
      description: 'International clinical operations'
    },
    {
      metric: '85%',
      label: 'Recruitment Rate',
      description: 'Average trial enrollment completion'
    }
  ];

  const regulatoryMilestones = [
    {
      trial: 'EDIF-CV-001',
      milestone: 'IND Filing',
      date: 'March 2024',
      status: 'completed'
    },
    {
      trial: 'EDIF-CV-001',
      milestone: 'Phase 2 Start',
      date: 'June 2024',
      status: 'completed'
    },
    {
      trial: 'EDIF-DM-002',
      milestone: 'CTA Approval',
      date: 'January 2024',
      status: 'completed'
    },
    {
      trial: 'EDIF-ID-003',
      milestone: 'IND Filing',
      date: 'August 2024',
      status: 'pending'
    }
  ];

  const patientSupport = [
    {
      title: 'Patient Recruitment Support',
      description: 'Comprehensive assistance for trial participants',
      features: ['Travel reimbursement', 'Medical care coverage', '24/7 support hotline', 'Regular health monitoring']
    },
    {
      title: 'Clinical Trial Education',
      description: 'Educational resources for potential participants',
      features: ['Trial information guides', 'Video testimonials', 'FAQ resources', 'Eligibility screening']
    },
    {
      title: 'Site Network Excellence',
      description: 'High-performing clinical research sites',
      features: ['Experienced investigators', 'State-of-the-art facilities', 'Patient-centric approach', 'Regulatory compliance']
    }
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
              Our clinical development program advances innovative therapies through rigorous,
              patient-centered trials. With a global network of expert investigators and
              state-of-the-art facilities, we ensure scientific excellence and regulatory compliance
              at every stage of development.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">15</div>
                <div className="text-xs text-white/80">Active Trials</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">1,250</div>
                <div className="text-xs text-white/80">Participants</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">92</div>
                <div className="text-xs text-white/80">Sites</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-white/80">Data Quality</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Active Trials */}
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
              <span className="text-sm tracking-wide">CURRENT PROGRAMS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Active Clinical Trials
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our portfolio of ongoing clinical studies spans multiple therapeutic areas,
              with rigorous protocols designed to generate robust evidence for regulatory approval.
            </p>
          </motion.div>

          <div className="space-y-8">
            {activeTrials.map((trial, index) => (
              <motion.div
                key={trial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="aspect-video md:aspect-square bg-gray-200 relative overflow-hidden">
                      <img
                        src={trial.image}
                        alt={trial.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          trial.status === 'Recruiting' ? 'bg-green-50 text-green-700' :
                          trial.status === 'Active' ? 'bg-blue-50 text-blue-700' :
                          'bg-orange-50 text-orange-700'
                        }`}>
                          {trial.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl text-[var(--text-900)] mb-2">{trial.title}</h3>
                        <p className="text-green-600 font-medium text-sm mb-1">{trial.phase} • {trial.therapeuticArea}</p>
                        <p className="text-[var(--text-900)]/60 text-sm">Trial ID: {trial.id}</p>
                      </div>
                      <Microscope className="text-green-600" size={24} />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-[var(--text-900)]/60" />
                        <span className="text-sm text-[var(--text-900)]/70">{trial.participants} participants</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[var(--text-900)]/60" />
                        <span className="text-sm text-[var(--text-900)]/70">{trial.sites} sites</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-[var(--text-900)]/60" />
                        <span className="text-sm text-[var(--text-900)]/70">Complete: {trial.completion}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-xs font-semibold text-[var(--text-900)]">COUNTRIES:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {trial.countries.map((country, idx) => (
                          <span key={idx} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-xs font-semibold text-[var(--text-900)]">PRIMARY ENDPOINT:</span>
                      <p className="text-sm text-[var(--text-900)]/70 mt-1">{trial.primaryEndpoint}</p>
                    </div>

                    <div className="flex gap-3">
                      <button className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 text-sm transition-colors">
                        View Trial Details
                      </button>
                      <button className="border border-[var(--border-color)] text-[var(--text-900)] hover:bg-[var(--surface)] px-4 py-2 text-sm transition-colors">
                        Participate
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trial Phases */}
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
              <span className="text-sm tracking-wide">DEVELOPMENT STAGES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Clinical Trial Phases
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our structured approach to clinical development ensures comprehensive evaluation
              of safety, efficacy, and therapeutic benefit at each stage of drug development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trialPhases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-green-600">{phase.phase.split(' ')[1]}</span>
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{phase.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{phase.description}</p>

                <div className="space-y-2 text-left">
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--text-900)]/60">Duration:</span>
                    <span className="text-[var(--text-900)]">{phase.duration}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--text-900)]/60">Participants:</span>
                    <span className="text-[var(--text-900)]">{phase.participants}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--text-900)]/60">Focus:</span>
                    <span className="text-[var(--text-900)]">{phase.focus}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--text-900)]/60">Success Rate:</span>
                    <span className="text-[var(--text-900)]">{phase.successRate}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Operations */}
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
              <span className="text-sm tracking-wide">GLOBAL REACH</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Global Clinical Operations
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our international network ensures efficient trial execution across diverse
              populations and regulatory environments, accelerating development timelines.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Recruitment Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl text-[var(--text-900)] mb-8">Recruitment Performance</h3>
              <div className="grid grid-cols-2 gap-6">
                {recruitmentStats.map((stat, index) => (
                  <div key={stat.label} className="bg-[var(--surface)] border border-[var(--border-color)] p-6 rounded-xl text-center hover:border-green-300 transition-colors">
                    <div className="text-3xl font-bold text-green-600 mb-2">{stat.metric}</div>
                    <h4 className="text-lg text-[var(--text-900)] mb-1">{stat.label}</h4>
                    <p className="text-[var(--text-900)]/70 text-sm">{stat.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Global Sites */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl text-[var(--text-900)] mb-8">Clinical Sites by Country</h3>
              <div className="space-y-4">
                {globalSites.map((site, index) => (
                  <div key={site.country} className="bg-[var(--surface)] border border-[var(--border-color)] p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-[var(--text-900)]">{site.country}</span>
                      <span className="text-sm text-[var(--text-900)]/60">{site.trials} trials</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-[var(--text-900)]/60">Sites:</span>
                        <span className="text-[var(--text-900)] ml-2">{site.sites}</span>
                      </div>
                      <div>
                        <span className="text-[var(--text-900)]/60">Participants:</span>
                        <span className="text-[var(--text-900)] ml-2">{site.participants}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory Milestones */}
      <section className="py-20 md:py-32 bg-green-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-green-50 text-green-700 mb-4">
              <span className="text-sm tracking-wide">REGULATORY PROGRESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Regulatory Milestones
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Key regulatory achievements and upcoming milestones demonstrating our
              commitment to timely and compliant clinical development.
            </p>
          </motion.div>

          <div className="bg-white border border-[var(--border-color)] rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-4 bg-[var(--surface)] border-b border-[var(--border-color)]">
              <div className="p-4 font-semibold text-[var(--text-900)]">Trial ID</div>
              <div className="p-4 font-semibold text-[var(--text-900)]">Milestone</div>
              <div className="p-4 font-semibold text-[var(--text-900)]">Date</div>
              <div className="p-4 font-semibold text-[var(--text-900)]">Status</div>
            </div>
            {regulatoryMilestones.map((milestone, index) => (
              <div key={index} className="grid md:grid-cols-4 border-b border-[var(--border-color)] last:border-0">
                <div className="p-4 text-[var(--text-900)]">{milestone.trial}</div>
                <div className="p-4 text-[var(--text-900)]">{milestone.milestone}</div>
                <div className="p-4 text-[var(--text-900)]">{milestone.date}</div>
                <div className="p-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    milestone.status === 'completed' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                  }`}>
                    {milestone.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Support */}
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
              <span className="text-sm tracking-wide">PATIENT-CENTERED</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Patient Support & Resources
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Comprehensive support services ensuring participants have access to quality care,
              educational resources, and assistance throughout their trial journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {patientSupport.map((support, index) => (
              <motion.div
                key={support.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6 rounded-xl hover:border-green-300 transition-colors"
              >
                <h3 className="text-lg text-[var(--text-900)] mb-3">{support.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{support.description}</p>
                <ul className="space-y-2">
                  {support.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                      <CheckCircle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Microscope className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Advance Medical Innovation
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join our clinical trials and contribute to the development of breakthrough
              therapies that will improve patient outcomes worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-green-600 hover:bg-gray-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Users size={16} />
                <span>FIND A TRIAL</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <FileText size={16} />
                <span>VIEW PUBLICATIONS</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}