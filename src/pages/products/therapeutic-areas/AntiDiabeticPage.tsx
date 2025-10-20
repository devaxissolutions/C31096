import { motion } from 'framer-motion';
import { Activity, Droplets, Zap, Target, TrendingDown, Award, Users, BarChart3, CheckCircle, Star, Shield } from 'lucide-react';

export function AntiDiabeticPage() {
  const diabeticProducts = [
    {
      name: 'GlucoControl XR',
      type: 'DPP-4 Inhibitor',
      description: 'Extended-release formulation for improved glycemic control with once-daily dosing',
      indications: ['Type 2 Diabetes', 'Monotherapy', 'Combination Therapy'],
      dosage: '5mg, 10mg, 25mg tablets',
      status: 'First-line treatment',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      name: 'InsulinBoost Plus',
      type: 'GLP-1 Receptor Agonist',
      description: 'Advanced GLP-1 analog with superior weight management and cardiovascular benefits',
      indications: ['Type 2 Diabetes', 'Obesity', 'CV Risk Reduction'],
      dosage: '0.25mg, 0.5mg, 1mg injection',
      status: 'Cardioprotective',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
    },
    {
      name: 'MetaBalance SR',
      type: 'SGLT2 Inhibitor',
      description: 'Sodium-glucose co-transporter inhibitor with renal and cardiovascular protection',
      indications: ['Type 2 Diabetes', 'Heart Failure', 'Chronic Kidney Disease'],
      dosage: '10mg, 25mg tablets',
      status: 'Renoprotective',
      image: 'https://images.unsplash.com/photo-1582719471135-c3967ffb1c42?w=400&h=300&fit=crop'
    },
    {
      name: 'BetaCell Restore',
      type: 'Meglitinide',
      description: 'Rapid-acting insulin secretagogue for postprandial glucose control',
      indications: ['Type 2 Diabetes', 'Meal-time control', 'Elderly patients'],
      dosage: '0.5mg, 1mg, 2mg tablets',
      status: 'Fast-acting',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop'
    }
  ];

  const therapeuticBenefits = [
    {
      icon: Activity,
      title: 'Glycemic Control',
      description: 'Comprehensive blood glucose management across all meal times',
      benefits: ['HbA1c reduction', 'Postprandial control', 'Fasting glucose', 'Glycemic variability']
    },
    {
      icon: Shield,
      title: 'Cardiovascular Protection',
      description: 'Cardioprotective effects reducing cardiovascular risk in diabetic patients',
      benefits: ['Heart failure prevention', 'Myocardial protection', 'Stroke reduction', 'CV mortality decrease']
    },
    {
      icon: Target,
      title: 'Renal Protection',
      description: 'Kidney protection and preservation of renal function',
      benefits: ['Albuminuria reduction', 'eGFR preservation', 'Diabetic nephropathy', 'ESRD prevention']
    },
    {
      icon: TrendingDown,
      title: 'Weight Management',
      description: 'Beneficial effects on body weight and metabolic health',
      benefits: ['Weight loss', 'Appetite control', 'Metabolic improvement', 'Sustained benefits']
    }
  ];

  const clinicalOutcomes = [
    {
      metric: '1.8%',
      label: 'Average HbA1c Reduction',
      description: 'Significant improvement in long-term glycemic control'
    },
    {
      metric: '32%',
      label: 'Cardiovascular Risk Reduction',
      description: 'Major adverse cardiovascular events prevention'
    },
    {
      metric: '45%',
      label: 'Heart Failure Hospitalization',
      description: 'Reduction in heart failure-related admissions'
    },
    {
      metric: '3-5kg',
      label: 'Average Weight Loss',
      description: 'Sustainable weight management in diabetic patients'
    }
  ];

  const patientPrograms = [
    {
      title: 'Diabetes Management Program',
      description: 'Comprehensive diabetes education and self-management support',
      features: ['Blood glucose monitoring', 'Nutrition counseling', 'Exercise guidance', 'Medication adherence']
    },
    {
      title: 'Cardiovascular Risk Assessment',
      description: 'Advanced cardiovascular risk evaluation for diabetic patients',
      features: ['Risk stratification', 'Preventive therapies', 'Lifestyle modification', 'Regular screening']
    },
    {
      title: 'Renal Health Monitoring',
      description: 'Kidney function monitoring and early intervention programs',
      features: ['Regular kidney tests', 'Blood pressure control', 'Proteinuria management', 'Nephrology consultation']
    }
  ];

  const combinationTherapies = [
    {
      name: 'Dual Therapy Regimen',
      combination: 'DPP-4 + SGLT2',
      benefits: ['Enhanced glycemic control', 'Cardiorenal protection', 'Weight management', 'Low hypoglycemia risk'],
      indication: 'Type 2 Diabetes with CV risk'
    },
    {
      name: 'Triple Therapy Approach',
      combination: 'Metformin + DPP-4 + GLP-1',
      benefits: ['Comprehensive control', 'Weight loss', 'Cardiovascular benefits', 'Beta-cell preservation'],
      indication: 'Advanced Type 2 Diabetes'
    },
    {
      name: 'Basal-Bolus Regimen',
      combination: 'Basal Insulin + GLP-1',
      benefits: ['Flexible dosing', 'Weight neutrality', 'Hypoglycemia reduction', 'Improved adherence'],
      indication: 'Type 2 Diabetes requiring insulin'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">DIABETES CARE EXCELLENCE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Anti-Diabetic
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Pioneering diabetes care with innovative therapies that not only control blood glucose
              but also protect against cardiovascular complications, preserve renal function, and
              support sustainable weight management. Our comprehensive portfolio addresses all
              aspects of diabetes management for optimal patient outcomes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs text-white/80">Diabetes Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">1.8%</div>
                <div className="text-xs text-white/80">HbA1c Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">32%</div>
                <div className="text-xs text-white/80">CV Risk Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">5M+</div>
                <div className="text-xs text-white/80">Patients Treated</div>
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
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 mb-4">
              <span className="text-sm tracking-wide">DIABETES THERAPIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Our Diabetes Care Portfolio
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Advanced pharmacological solutions targeting multiple pathways in diabetes
              management with proven efficacy and safety profiles.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {diabeticProducts.map((product, index) => (
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
                      product.status === 'First-line treatment' ? 'bg-green-50 text-green-700' :
                      product.status === 'Cardioprotective' ? 'bg-red-50 text-red-700' :
                      product.status === 'Renoprotective' ? 'bg-blue-50 text-blue-700' :
                      'bg-purple-50 text-purple-700'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl text-[var(--text-900)] mb-1">{product.name}</h3>
                      <p className="text-blue-600 font-medium text-sm">{product.type}</p>
                    </div>
                    <Activity className="text-blue-600" size={24} />
                  </div>
                  <p className="text-[var(--text-900)]/70 text-sm mb-4">{product.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-900)]">INDICATIONS:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.indications.map((indication, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
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

                  <button className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-sm transition-colors">
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
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 mb-4">
              <span className="text-sm tracking-wide">MULTI-ORGAN PROTECTION</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Comprehensive Therapeutic Benefits
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Beyond glycemic control, our diabetes therapies provide organ protection
              and reduce the risk of diabetes-related complications.
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
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{benefit.description}</p>
                <ul className="space-y-1 text-left">
                  {benefit.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-900)]/60">
                      <CheckCircle size={12} className="text-blue-600 mt-0.5 flex-shrink-0" />
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
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 mb-4">
              <span className="text-sm tracking-wide">CLINICAL EVIDENCE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Proven Clinical Outcomes
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Robust clinical evidence demonstrating superior efficacy and safety
              in diverse patient populations with type 2 diabetes.
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
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl text-center hover:border-blue-300 transition-colors"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{outcome.metric}</div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{outcome.label}</h3>
                <p className="text-[var(--text-900)]/70 text-sm">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Combination Therapies */}
      <section className="py-20 md:py-32 bg-blue-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 mb-4">
              <span className="text-sm tracking-wide">COMBINATION THERAPIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Advanced Treatment Regimens
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Optimized combination therapies that provide synergistic benefits
              for comprehensive diabetes management and complication prevention.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {combinationTherapies.map((therapy, index) => (
              <motion.div
                key={therapy.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-blue-200 p-8 rounded-xl"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-2">{therapy.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{therapy.combination}</p>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{therapy.indication}</p>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {therapy.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                        <Zap size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Support Programs */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 mb-4">
              <span className="text-sm tracking-wide">PATIENT SUPPORT</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Comprehensive Diabetes Care
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Holistic patient support programs designed to optimize diabetes management
              and prevent complications through education and continuous care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {patientPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-blue-300 transition-colors"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-3">{program.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{program.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-3">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                        <Droplets size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Activity className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Transforming Diabetes Care
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join us in the fight against diabetes with innovative therapies that protect
              health, preserve organ function, and improve quality of life for patients worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Award size={16} />
                <span>VIEW DIABETES PRODUCTS</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Users size={16} />
                <span>CONTACT DIABETES TEAM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}