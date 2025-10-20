import { motion } from 'framer-motion';
import { Shield, Microscope, Zap, Target, Award, Users, BarChart3, CheckCircle, Star, AlertTriangle, Activity } from 'lucide-react';

export function AntibioticsPage() {
  const antibioticProducts = [
    {
      name: 'BactroShield Forte',
      type: 'Broad-Spectrum Beta-Lactam',
      description: 'Advanced penicillin-class antibiotic with enhanced activity against resistant strains',
      spectrum: ['Gram-positive', 'Gram-negative', 'Anaerobic'],
      indications: ['Community-acquired pneumonia', 'Skin infections', 'Urinary tract infections'],
      dosage: '500mg, 1000mg tablets',
      status: 'Resistant to beta-lactamase',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
    },
    {
      name: 'FluoroCure XR',
      type: 'Fluoroquinolone',
      description: 'Extended-release fluoroquinolone with improved gastrointestinal tolerability',
      spectrum: ['Gram-negative', 'Atypical pathogens', 'Some Gram-positive'],
      indications: ['Acute bacterial sinusitis', 'Complicated UTI', 'Community-acquired pneumonia'],
      dosage: '500mg, 750mg tablets',
      status: 'Once-daily dosing',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      name: 'MacroGuard Plus',
      type: 'Macrolide',
      description: 'Next-generation macrolide with enhanced tissue penetration and immunomodulatory effects',
      spectrum: ['Atypical pathogens', 'Some Gram-positive', 'Mycobacteria'],
      indications: ['Atypical pneumonia', 'Pertussis', 'Mycobacterium infections'],
      dosage: '250mg, 500mg tablets',
      status: 'Immunomodulatory',
      image: 'https://images.unsplash.com/photo-1582719471135-c3967ffb1c42?w=400&h=300&fit=crop'
    },
    {
      name: 'TetraVance SR',
      type: 'Tetracycline',
      description: 'Modern tetracycline with improved pharmacokinetics and reduced resistance development',
      spectrum: ['Gram-positive', 'Gram-negative', 'Atypical', 'Intracellular'],
      indications: ['Acne vulgaris', 'Periodontitis', 'Rickettsial infections'],
      dosage: '100mg, 200mg tablets',
      status: 'Low resistance potential',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop'
    }
  ];

  const therapeuticBenefits = [
    {
      icon: Shield,
      title: 'Broad-Spectrum Coverage',
      description: 'Effective against wide range of bacterial pathogens',
      benefits: ['Multiple pathogens', 'Empiric therapy', 'Mixed infections', 'Unknown etiology']
    },
    {
      icon: Target,
      title: 'Targeted Therapy',
      description: 'Precision antimicrobial therapy based on pathogen identification',
      benefits: ['Culture-directed', 'Susceptibility testing', 'Resistance patterns', 'Optimal dosing']
    },
    {
      icon: Zap,
      title: 'Rapid Action',
      description: 'Fast onset of action for acute bacterial infections',
      benefits: ['Quick symptom relief', 'Bacterial load reduction', 'Infection control', 'Recovery acceleration']
    },
    {
      icon: Award,
      title: 'Resistance Management',
      description: 'Strategies to combat and prevent antimicrobial resistance',
      benefits: ['Stewardship programs', 'Appropriate use', 'Resistance monitoring', 'New agent development']
    }
  ];

  const clinicalOutcomes = [
    {
      metric: '95%',
      label: 'Clinical Cure Rate',
      description: 'High success rate in treating bacterial infections'
    },
    {
      metric: '7-14',
      label: 'Days Treatment Duration',
      description: 'Optimal treatment duration for most infections'
    },
    {
      metric: '<5%',
      label: 'Adverse Event Rate',
      description: 'Low incidence of treatment-related side effects'
    },
    {
      metric: '85%',
      label: 'Patient Compliance',
      description: 'High adherence rates with convenient dosing'
    }
  ];

  const stewardshipPrograms = [
    {
      title: 'Antibiotic Stewardship Program',
      description: 'Comprehensive program to optimize antibiotic use and combat resistance',
      features: ['Usage monitoring', 'Guideline development', 'Education programs', 'Audit and feedback']
    },
    {
      title: 'Resistance Surveillance',
      description: 'Continuous monitoring of antimicrobial resistance patterns',
      features: ['Local surveillance', 'National networks', 'Trend analysis', 'Intervention strategies']
    },
    {
      title: 'Patient Education Initiative',
      description: 'Programs to improve antibiotic understanding and appropriate use',
      features: ['Public awareness', 'Patient counseling', 'Prevention education', 'Self-care guidance']
    }
  ];

  const infectionTypes = [
    {
      category: 'Respiratory Infections',
      infections: ['Community-acquired pneumonia', 'Acute bacterial sinusitis', 'Acute exacerbations of COPD'],
      products: ['BactroShield Forte', 'FluoroCure XR', 'MacroGuard Plus']
    },
    {
      category: 'Urinary Tract Infections',
      infections: ['Acute uncomplicated UTI', 'Complicated UTI', 'Pyelonephritis'],
      products: ['FluoroCure XR', 'BactroShield Forte']
    },
    {
      category: 'Skin & Soft Tissue',
      infections: ['Cellulitis', 'Abscesses', 'Wound infections'],
      products: ['BactroShield Forte', 'FluoroCure XR', 'TetraVance SR']
    },
    {
      category: 'Gastrointestinal',
      infections: ['Bacterial gastroenteritis', 'Clostridium difficile', 'Helicobacter pylori'],
      products: ['MacroGuard Plus', 'TetraVance SR']
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
              <span className="text-sm tracking-wide">ANTIMICROBIAL EXCELLENCE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Antibiotics
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Leading the fight against bacterial infections with advanced antimicrobial therapies
              that combine broad-spectrum efficacy, targeted action, and responsible stewardship.
              Our comprehensive antibiotic portfolio addresses the full spectrum of bacterial
              infections while actively combating antimicrobial resistance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">15</div>
                <div className="text-xs text-white/80">Antibiotic Products</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-xs text-white/80">Clinical Cure Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">8M+</div>
                <div className="text-xs text-white/80">Infections Treated</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">A+</div>
                <div className="text-xs text-white/80">Stewardship Rating</div>
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
            <div className="inline-block px-4 py-2 bg-green-50 text-green-700 mb-4">
              <span className="text-sm tracking-wide">ANTIMICROBIAL THERAPIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Our Antibiotic Portfolio
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Advanced antimicrobial agents designed for optimal efficacy, safety, and
              resistance management across multiple infection types and patient populations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {antibioticProducts.map((product, index) => (
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
                      product.status === 'Resistant to beta-lactamase' ? 'bg-green-50 text-green-700' :
                      product.status === 'Once-daily dosing' ? 'bg-blue-50 text-blue-700' :
                      product.status === 'Immunomodulatory' ? 'bg-purple-50 text-purple-700' :
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
                      <p className="text-green-600 font-medium text-sm">{product.type}</p>
                    </div>
                    <Shield className="text-green-600" size={24} />
                  </div>
                  <p className="text-[var(--text-900)]/70 text-sm mb-4">{product.description}</p>

                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-900)]">SPECTRUM:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.spectrum.map((spec, idx) => (
                          <span key={idx} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-900)]">INDICATIONS:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {product.indications.map((indication, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded">
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

                  <button className="w-full bg-green-600 text-white hover:bg-green-700 px-4 py-2 text-sm transition-colors">
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
            <div className="inline-block px-4 py-2 bg-green-50 text-green-700 mb-4">
              <span className="text-sm tracking-wide">CLINICAL ADVANTAGES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Therapeutic Excellence
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our antibiotics deliver superior clinical outcomes through targeted therapy,
              broad-spectrum coverage, and responsible antimicrobial stewardship.
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
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{benefit.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{benefit.description}</p>
                <ul className="space-y-1 text-left">
                  {benefit.benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[var(--text-900)]/60">
                      <CheckCircle size={12} className="text-green-600 mt-0.5 flex-shrink-0" />
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
            <div className="inline-block px-4 py-2 bg-green-50 text-green-700 mb-4">
              <span className="text-sm tracking-wide">EVIDENCE-BASED RESULTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Proven Clinical Efficacy
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Comprehensive clinical data demonstrating high cure rates, safety profiles,
              and patient tolerability across diverse infection types.
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
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl text-center hover:border-green-300 transition-colors"
              >
                <div className="text-4xl font-bold text-green-600 mb-2">{outcome.metric}</div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{outcome.label}</h3>
                <p className="text-[var(--text-900)]/70 text-sm">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infection Types */}
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
              <span className="text-sm tracking-wide">TARGETED TREATMENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Infection-Specific Therapies
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Tailored antibiotic regimens for different infection types, ensuring
              optimal pathogen coverage and clinical outcomes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {infectionTypes.map((type, index) => (
              <motion.div
                key={type.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-green-200 p-8 rounded-xl"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-4">{type.category}</h3>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-2">Common Infections:</h4>
                  <ul className="space-y-1">
                    {type.infections.map((infection, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/70">
                        <AlertTriangle size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{infection}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-2">Recommended Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.products.map((product, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stewardship Programs */}
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
              <span className="text-sm tracking-wide">RESPONSIBLE USE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Antimicrobial Stewardship
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Comprehensive programs to ensure appropriate antibiotic use, combat resistance,
              and preserve the effectiveness of antimicrobial therapies for future generations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stewardshipPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 rounded-xl hover:border-green-300 transition-colors"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-3">{program.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{program.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-[var(--text-900)] mb-3">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                        <Microscope size={14} className="text-green-600 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Combating Infections, Preserving Antibiotics
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Partner with us in the global effort to treat infections effectively while
              preserving antibiotic effectiveness through responsible stewardship and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-green-600 hover:bg-gray-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Award size={16} />
                <span>VIEW ANTIBIOTIC PRODUCTS</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Users size={16} />
                <span>CONTACT INFECTIOUS DISEASE TEAM</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}