import { motion } from 'framer-motion';
import { Pill, Zap, Shield, Target, Award, Users, BarChart3, CheckCircle, Star, Activity, Heart, Brain } from 'lucide-react';

export function PainManagementPage() {
  const painProducts = [
    {
      name: 'NeuroPain Relief',
      type: 'Neuropathic Analgesic',
      description: 'Advanced therapy for neuropathic pain with dual mechanism of action',
      indications: ['Diabetic neuropathy', 'Post-herpetic neuralgia', 'Fibromyalgia'],
      dosage: '50mg, 100mg, 150mg tablets',
      status: 'First-line neuropathic',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
    },
    {
      name: 'InflammAway Forte',
      type: 'NSAID Analgesic',
      description: 'Potent anti-inflammatory analgesic with improved gastrointestinal safety',
      indications: ['Osteoarthritis', 'Rheumatoid arthritis', 'Acute pain', 'Dysmenorrhea'],
      dosage: '200mg, 400mg tablets',
      status: 'GI-protective',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      name: 'MuscleEase SR',
      type: 'Muscle Relaxant',
      description: 'Extended-release formulation for sustained musculoskeletal pain relief',
      indications: ['Muscle spasms', 'Back pain', 'Fibromyalgia', 'Sports injuries'],
      dosage: '15mg, 30mg tablets',
      status: '24-hour relief',
      image: 'https://images.unsplash.com/photo-1582719471135-c3967ffb1c42?w=400&h=300&fit=crop'
    },
    {
      name: 'AcutePain Control',
      type: 'Opioid Analgesic',
      description: 'Balanced opioid therapy with abuse-deterrent formulation',
      indications: ['Severe acute pain', 'Post-surgical pain', 'Cancer pain'],
      dosage: '5mg, 10mg, 20mg tablets',
      status: 'Abuse-deterrent',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop'
    }
  ];

  const therapeuticBenefits = [
    {
      icon: Brain,
      title: 'Neuropathic Pain Relief',
      description: 'Targeted therapy for nerve-related pain conditions',
      benefits: ['Nerve pain reduction', 'Sleep improvement', 'Quality of life', 'Function restoration']
    },
    {
      icon: Shield,
      title: 'Inflammatory Control',
      description: 'Effective management of inflammation and associated pain',
      benefits: ['Anti-inflammatory action', 'Joint protection', 'Mobility improvement', 'Swelling reduction']
    },
    {
      icon: Activity,
      title: 'Musculoskeletal Relief',
      description: 'Comprehensive relief for muscle and joint pain',
      benefits: ['Muscle relaxation', 'Spasm control', 'Range of motion', 'Injury recovery']
    },
    {
      icon: Heart,
      title: 'Cardiovascular Safety',
      description: 'Pain management with cardiovascular risk consideration',
      benefits: ['CV risk assessment', 'Safe formulations', 'Monitoring protocols', 'Risk mitigation']
    }
  ];

  const clinicalOutcomes = [
    {
      metric: '70%',
      label: 'Pain Reduction',
      description: 'Average reduction in pain intensity scores'
    },
    {
      metric: '85%',
      label: 'Patient Satisfaction',
      description: 'High satisfaction with pain management outcomes'
    },
    {
      metric: '60%',
      label: 'Functional Improvement',
      description: 'Improvement in daily activities and mobility'
    },
    {
      metric: '75%',
      label: 'Quality of Life',
      description: 'Enhanced quality of life measures'
    }
  ];

  const painTypes = [
    {
      category: 'Neuropathic Pain',
      conditions: ['Diabetic neuropathy', 'Post-herpetic neuralgia', 'Trigeminal neuralgia', 'Phantom limb pain'],
      treatments: ['NeuroPain Relief', 'Adjunctive therapies']
    },
    {
      category: 'Inflammatory Pain',
      conditions: ['Osteoarthritis', 'Rheumatoid arthritis', 'Ankylosing spondylitis', 'Gout'],
      treatments: ['InflammAway Forte', 'Disease-modifying agents']
    },
    {
      category: 'Musculoskeletal Pain',
      conditions: ['Low back pain', 'Neck pain', 'Muscle strains', 'Sports injuries'],
      treatments: ['MuscleEase SR', 'Physical therapy', 'Rehabilitation']
    },
    {
      category: 'Acute Pain',
      conditions: ['Post-surgical pain', 'Trauma', 'Dental procedures', 'Migraine'],
      treatments: ['AcutePain Control', 'Short-term therapy']
    }
  ];

  const safetyPrograms = [
    {
      title: 'Pain Management Safety Program',
      description: 'Comprehensive safety monitoring and risk mitigation for pain therapies',
      features: ['Risk assessment', 'Monitoring protocols', 'Patient education', 'Adverse event reporting']
    },
    {
      title: 'Opioid Stewardship Initiative',
      description: 'Responsible opioid prescribing and monitoring program',
      features: ['Prescribing guidelines', 'Risk evaluation', 'Monitoring tools', 'Alternative therapies']
    },
    {
      title: 'Multimodal Pain Therapy',
      description: 'Integrated approach combining pharmacological and non-pharmacological therapies',
      features: ['Individualized plans', 'Physical therapy', 'Psychological support', 'Lifestyle modification']
    }
  ];

  const patientSupport = [
    {
      title: 'Pain Assessment & Monitoring',
      description: 'Regular evaluation of pain levels and treatment effectiveness',
      features: ['Pain diaries', 'Regular follow-ups', 'Outcome measures', 'Treatment adjustments']
    },
    {
      title: 'Patient Education Program',
      description: 'Comprehensive education on pain management and self-care',
      features: ['Pain education', 'Medication counseling', 'Lifestyle guidance', 'Support resources']
    },
    {
      title: 'Chronic Pain Rehabilitation',
      description: 'Multidisciplinary rehabilitation program for chronic pain patients',
      features: ['Physical therapy', 'Occupational therapy', 'Cognitive behavioral therapy', 'Pain coping strategies']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">COMPREHENSIVE PAIN CARE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Pain Management
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Advanced pain management solutions that address the full spectrum of pain conditions
              from acute to chronic, neuropathic to inflammatory. Our comprehensive portfolio
              combines efficacy, safety, and patient-centered care to restore quality of life
              and functional independence for millions worldwide.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">10</div>
                <div className="text-xs text-white/80">Pain Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-xs text-white/80">Pain Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">6M+</div>
                <div className="text-xs text-white/80">Patients Helped</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-white/80">Safety Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 mb-4">
              <span className="text-sm tracking-wide">PAIN THERAPEUTICS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Our Pain Management Portfolio
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Evidence-based analgesics designed for different pain types and patient needs,
              combining efficacy with comprehensive safety monitoring and support programs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {painProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs rounded-full ${
                      product.status === 'First-line neuropathic' ? 'bg-green-50 text-green-700' :
                      product.status === 'GI-protective' ? 'bg-blue-50 text-blue-700' :
                      product.status === '24-hour relief' ? 'bg-purple-50 text-purple-700' :
                      'bg-orange-50 text-orange-700'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl text-[var(--text-900)] mb-1">{product.name}</h3>
                      <p className="text-purple-600 font-medium text-sm">{product.type}</p>
                    </div>
                    <Pill className="text-purple-600" size={24} />
                  </div>
                  <p className="text-[var(--text-900)]/70 text-sm mb-4">{product.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-900)]">INDICATIONS:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.indications.map((indication, idx) => (
                          <span key={idx} className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded">
                            {indication}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-900)]">DOSAGE:</span>
                      <span className="text-sm text-[var(--text-900)]/70 ml-2">{product.dosage}</span>
                    </div>
                  </div>

                  <button className="w-full bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 text-sm transition-colors">
                    View Prescribing Information
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Benefits */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 mb-4">
              <span className="text-sm tracking-wide">MULTIMODAL RELIEF</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Comprehensive Pain Relief
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our pain management therapies address different pain mechanisms and types,
              providing targeted relief while improving function and quality of life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {therapeuticBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{benefit.description}</p>
                <ul className="space-y-1 text-left">
                  {benefit.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-900)]/60">
                      <CheckCircle size={12} className="text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Outcomes */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 mb-4">
              <span className="text-sm tracking-wide">CLINICAL SUCCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Proven Pain Relief Outcomes
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Comprehensive clinical evidence demonstrating significant pain reduction,
              functional improvement, and enhanced quality of life for patients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicalOutcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl text-center hover:border-purple-300 transition-colors"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">{outcome.metric}</div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{outcome.label}</h3>
                <p className="text-[var(--text-900)]/70 text-sm">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Types */}
      <section className="py-20 md:py-32 bg-purple-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 mb-4">
              <span className="text-sm tracking-wide">TARGETED THERAPIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Pain Type-Specific Treatments
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Specialized treatment approaches tailored to different types of pain conditions,
              ensuring optimal therapeutic outcomes for each patient.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {painTypes.map((type, index) => (
              <motion.div
                key={type.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-purple-200 p-8 rounded-xl"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-4">{type.category}</h3>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-2">Common Conditions:</h4>
                  <ul className="space-y-1">
                    {type.conditions.map((condition, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/70">
                        <Target size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-2">Treatment Options:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.treatments.map((treatment, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">
                        {treatment}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Support Programs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 mb-4">
              <span className="text-sm tracking-wide">PATIENT SAFETY & SUPPORT</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Safe & Responsible Pain Management
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Comprehensive safety programs and patient support initiatives ensuring
              responsible pain management with optimal outcomes and minimal risks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl text-[var(--text-900)] mb-8">Safety Programs</h3>
              {safetyPrograms.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[var(--surface)] border border-[var(--border-color)] p-6 rounded-xl mb-6 hover:border-purple-300 transition-colors"
                >
                  <h4 className="text-lg text-[var(--text-900)] mb-2">{program.title}</h4>
                  <p className="text-[var(--text-900)]/70 text-sm mb-3">{program.description}</p>
                  <ul className="space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                        <Shield size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl text-[var(--text-900)] mb-8">Patient Support</h3>
              {patientSupport.map((support, index) => (
                <motion.div
                  key={support.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[var(--surface)] border border-[var(--border-color)] p-6 rounded-xl mb-6 hover:border-purple-300 transition-colors"
                >
                  <h4 className="text-lg text-[var(--text-900)] mb-2">{support.title}</h4>
                  <p className="text-[var(--text-900)]/70 text-sm mb-3">{support.description}</p>
                  <ul className="space-y-1">
                    {support.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                        <Users size={14} className="text-purple-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Pill className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Restoring Lives Through Pain Relief
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join us in providing compassionate, effective pain management that restores
              function, improves quality of life, and supports patients in their journey to wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Award size={16} />
                <span>VIEW PAIN PRODUCTS</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Users size={16} />
                <span>CONTACT PAIN MANAGEMENT TEAM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}