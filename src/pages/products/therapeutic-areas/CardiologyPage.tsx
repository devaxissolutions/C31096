import { motion } from 'framer-motion';
import { Heart, Activity, Shield, TrendingUp, Award, Users, BarChart3, CheckCircle, Star, Zap } from 'lucide-react';

export function CardiologyPage() {
  const cardiologyProducts = [
    {
      name: 'CardioGuard Plus',
      type: 'ACE Inhibitor',
      description: 'Advanced cardiovascular protection with superior blood pressure control',
      indications: ['Hypertension', 'Heart Failure', 'Post-MI Care'],
      dosage: '10mg, 20mg, 40mg tablets',
      status: 'First-line therapy',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
    },
    {
      name: 'VasoFlow SR',
      type: 'Calcium Channel Blocker',
      description: 'Sustained-release formulation for 24-hour blood pressure management',
      indications: ['Hypertension', 'Angina', 'Arrhythmias'],
      dosage: '5mg, 10mg, 20mg tablets',
      status: 'Extended release',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      name: 'BetaBlock XL',
      type: 'Beta Blocker',
      description: 'Extended-release beta blocker with improved tolerability profile',
      indications: ['Hypertension', 'Heart Failure', 'MI Prevention'],
      dosage: '25mg, 50mg, 100mg tablets',
      status: 'Once daily dosing',
      image: 'https://images.unsplash.com/photo-1582719471135-c3967ffb1c42?w=400&h=300&fit=crop'
    },
    {
      name: 'AntiThromb Forte',
      type: 'Antiplatelet Agent',
      description: 'Dual antiplatelet therapy for cardiovascular risk reduction',
      indications: ['ACS', 'PCI', 'Stroke Prevention'],
      dosage: '75mg, 150mg tablets',
      status: 'Proven efficacy',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop'
    }
  ];

  const therapeuticBenefits = [
    {
      icon: Heart,
      title: 'Cardiovascular Protection',
      description: 'Comprehensive protection against heart disease progression',
      benefits: ['Blood pressure reduction', 'Plaque stabilization', 'Endothelial function improvement']
    },
    {
      icon: Activity,
      title: 'Blood Pressure Control',
      description: 'Effective management of hypertension across all severity levels',
      benefits: ['24-hour control', 'Organ protection', 'Stroke prevention']
    },
    {
      icon: Shield,
      title: 'Risk Reduction',
      description: 'Significant reduction in cardiovascular events and mortality',
      benefits: ['MI prevention', 'Stroke reduction', 'Heart failure management']
    },
    {
      icon: TrendingUp,
      title: 'Clinical Outcomes',
      description: 'Proven clinical benefits supported by extensive research',
      benefits: ['Survival improvement', 'Quality of life', 'Hospitalization reduction']
    }
  ];

  const clinicalData = [
    {
      metric: '35%',
      label: 'Reduction in Heart Attack Risk',
      description: 'Clinical trial data showing significant cardiovascular event reduction'
    },
    {
      metric: '42%',
      label: 'Stroke Prevention',
      description: 'Effective stroke risk reduction in hypertensive patients'
    },
    {
      metric: '28%',
      label: 'Heart Failure Hospitalizations',
      description: 'Reduction in heart failure-related hospitalizations'
    },
    {
      metric: '95%',
      label: 'Patient Compliance Rate',
      description: 'High adherence rates with once-daily formulations'
    }
  ];

  const patientSupport = [
    {
      title: 'Cardiac Rehabilitation Program',
      description: 'Comprehensive rehabilitation support for post-cardiac event recovery',
      features: ['Exercise guidance', 'Dietary counseling', 'Lifestyle modification', 'Regular monitoring']
    },
    {
      title: 'Hypertension Management',
      description: '24/7 blood pressure monitoring and management support',
      features: ['Home monitoring', 'Telemedicine consultations', 'Medication adherence', 'Lifestyle coaching']
    },
    {
      title: 'Heart Failure Clinic',
      description: 'Specialized care for heart failure patients with advanced therapies',
      features: ['Device therapy', 'Advanced medications', 'Multidisciplinary care', 'Patient education']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">CARDIOVASCULAR EXCELLENCE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Cardiology
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Leading the way in cardiovascular medicine with innovative therapies that protect
              heart health, manage hypertension, and prevent cardiovascular events. Our comprehensive
              portfolio addresses the full spectrum of cardiovascular conditions with evidence-based
              treatments and patient-centered care.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-xs text-white/80">Cardiac Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">35%</div>
                <div className="text-xs text-white/80">Risk Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">10M+</div>
                <div className="text-xs text-white/80">Patients Treated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-xs text-white/80">Efficacy Rate</div>
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
            <div className="inline-block px-4 py-2 bg-red-50 text-red-700 mb-4">
              <span className="text-sm tracking-wide">CARDIAC PRODUCTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Our Cardiovascular Portfolio
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Evidence-based cardiovascular medications designed for optimal therapeutic outcomes
              and patient safety across all stages of heart disease management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {cardiologyProducts.map((product, index) => (
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
                      product.status === 'First-line therapy' ? 'bg-green-50 text-green-700' :
                      product.status === 'Extended release' ? 'bg-blue-50 text-blue-700' :
                      product.status === 'Once daily dosing' ? 'bg-purple-50 text-purple-700' :
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
                      <p className="text-red-600 font-medium text-sm">{product.type}</p>
                    </div>
                    <Heart className="text-red-600" size={24} />
                  </div>
                  <p className="text-[var(--text-900)]/70 text-sm mb-4">{product.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-900)]">INDICATIONS:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.indications.map((indication, idx) => (
                          <span key={idx} className="px-2 py-1 bg-red-50 text-red-700 text-xs rounded">
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

                  <button className="w-full bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm transition-colors">
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
            <div className="inline-block px-4 py-2 bg-red-50 text-red-700 mb-4">
              <span className="text-sm tracking-wide">CLINICAL BENEFITS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Therapeutic Excellence
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our cardiovascular therapies deliver comprehensive benefits across multiple
              aspects of heart health and disease prevention.
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
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-red-600" size={24} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{benefit.description}</p>
                <ul className="space-y-1 text-left">
                  {benefit.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-900)]/60">
                      <CheckCircle size={12} className="text-red-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Data */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-red-50 text-red-700 mb-4">
              <span className="text-sm tracking-wide">EVIDENCE-BASED MEDICINE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Clinical Evidence & Outcomes
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Robust clinical data demonstrating the efficacy and safety of our cardiovascular
              therapies in real-world patient populations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clinicalData.map((data, index) => (
              <motion.div
                key={data.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl text-center hover:border-red-300 transition-colors"
              >
                <div className="text-4xl font-bold text-red-600 mb-2">{data.metric}</div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{data.label}</h3>
                <p className="text-[var(--text-900)]/70 text-sm">{data.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Support Programs */}
      <section className="py-20 md:py-32 bg-red-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-red-50 text-red-700 mb-4">
              <span className="text-sm tracking-wide">PATIENT SUPPORT</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Comprehensive Cardiac Care
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Holistic patient support programs designed to optimize cardiovascular health
              outcomes and improve quality of life for patients with heart conditions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {patientSupport.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-red-200 p-8 rounded-xl"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-3">{program.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{program.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-3">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                        <Heart size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Advancing Cardiovascular Care
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Partner with us in the fight against cardiovascular disease. Our comprehensive
              portfolio and clinical expertise ensure optimal patient outcomes and heart health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-gray-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Award size={16} />
                <span>VIEW CARDIAC PRODUCTS</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Users size={16} />
                <span>CONTACT CARDIOLOGY TEAM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}