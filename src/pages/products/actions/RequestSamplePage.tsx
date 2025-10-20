import { motion } from 'framer-motion';
import { Package, User, FileText, Shield, CheckCircle, AlertTriangle, Mail, Phone, MapPin, Clock, Star, Award, Users, Download } from 'lucide-react';

export function RequestSamplePage() {
  const sampleProducts = [
    {
      name: 'CardioMax',
      category: 'Cardiology',
      description: 'Novel antihypertensive with dual mechanism',
      indications: ['Hypertension', 'Heart Failure'],
      samples: ['Starter Pack (30 tablets)', 'Clinical Pack (100 tablets)'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      name: 'GlucoBalance',
      category: 'Anti-Diabetic',
      description: 'Next-generation DPP-4 inhibitor',
      indications: ['Type 2 Diabetes', 'Monotherapy'],
      samples: ['Trial Pack (28 tablets)', 'Extended Pack (84 tablets)'],
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=300&fit=crop'
    },
    {
      name: 'InfectoGuard',
      category: 'Antibiotics',
      description: 'Broad-spectrum antibiotic with resistance breaker',
      indications: ['UTIs', 'Respiratory Infections'],
      samples: ['Diagnostic Pack (20 capsules)', 'Treatment Pack (50 capsules)'],
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop'
    },
    {
      name: 'NeuroRelief',
      category: 'Pain Management',
      description: 'Advanced neuropathic pain therapy',
      indications: ['Diabetic Neuropathy', 'Post-herpetic Neuralgia'],
      samples: ['Evaluation Pack (30 capsules)', 'Therapeutic Pack (90 capsules)'],
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop'
    }
  ];

  const eligibilityCriteria = [
    {
      title: 'Healthcare Professional Verification',
      description: 'Must be a licensed healthcare professional',
      requirements: ['Valid medical license', 'Current DEA registration (if applicable)', 'Professional email address']
    },
    {
      title: 'Practice Information',
      description: 'Complete practice details for verification',
      requirements: ['Practice name and address', 'Specialty area', 'Years in practice']
    },
    {
      title: 'Usage Agreement',
      description: 'Commitment to appropriate sample distribution',
      requirements: ['Patient eligibility assessment', 'Sample tracking', 'Adverse event reporting']
    }
  ];

  const requestProcess = [
    {
      step: 1,
      title: 'Account Registration',
      description: 'Create your HCP account with professional verification',
      duration: '5-10 minutes',
      icon: User
    },
    {
      step: 2,
      title: 'Product Selection',
      description: 'Choose products and quantities based on your needs',
      duration: '2-5 minutes',
      icon: Package
    },
    {
      step: 3,
      title: 'Documentation Review',
      description: 'Complete required forms and usage agreements',
      duration: '10-15 minutes',
      icon: FileText
    },
    {
      step: 4,
      title: 'Verification & Approval',
      description: 'Our team reviews and approves your request',
      duration: '1-3 business days',
      icon: Shield
    },
    {
      step: 5,
      title: 'Sample Shipment',
      description: 'Secure shipping to your practice location',
      duration: '3-7 business days',
      icon: CheckCircle
    }
  ];

  const shippingInfo = [
    {
      region: 'United States',
      method: 'FedEx Priority Overnight',
      cost: 'Free for approved requests',
      delivery: '1-2 business days',
      tracking: 'Real-time tracking provided'
    },
    {
      region: 'Canada',
      method: 'Express Courier',
      cost: 'Free for approved requests',
      delivery: '2-3 business days',
      tracking: 'Full tracking information'
    },
    {
      region: 'European Union',
      method: 'DHL Express',
      cost: 'Free for approved requests',
      delivery: '2-4 business days',
      tracking: 'Complete shipment visibility'
    },
    {
      region: 'Other Regions',
      method: 'International Courier',
      cost: 'Free for approved requests',
      delivery: '3-7 business days',
      tracking: 'Global tracking services'
    }
  ];

  const faqs = [
    {
      question: 'Who can request samples?',
      answer: 'Licensed healthcare professionals including physicians, nurse practitioners, physician assistants, and other qualified healthcare providers with valid credentials.'
    },
    {
      question: 'How many samples can I request?',
      answer: 'Sample quantities are limited to ensure appropriate distribution. Typical limits are 1-2 starter packs per product per quarter, with clinical justification for additional quantities.'
    },
    {
      question: 'What documentation is required?',
      answer: 'Valid medical license, DEA registration (if applicable), proof of current practice address, and completion of our usage agreement and adverse event reporting commitment.'
    },
    {
      question: 'How long does approval take?',
      answer: 'Most requests are reviewed within 1-3 business days. Expedited review is available for urgent clinical needs with appropriate justification.'
    },
    {
      question: 'Can samples be shipped internationally?',
      answer: 'Yes, we ship to most countries worldwide. International shipments require additional customs documentation and may be subject to local import regulations.'
    }
  ];

  const supportResources = [
    {
      title: 'Sample Request Portal',
      description: 'Online portal for easy sample ordering',
      features: ['24/7 access', 'Order history', 'Inventory tracking']
    },
    {
      title: 'Medical Information',
      description: 'Access to prescribing information and resources',
      features: ['Product monographs', 'Clinical data', 'Safety information']
    },
    {
      title: 'HCP Support Team',
      description: 'Dedicated support for healthcare professionals',
      features: ['Clinical inquiries', 'Sample coordination', 'Educational resources']
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
              <span className="text-sm tracking-wide">HCP RESOURCE CENTER</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Request Samples
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Access our comprehensive range of pharmaceutical samples for evaluation
              and patient care. Our streamlined process ensures licensed healthcare
              professionals can quickly obtain samples while maintaining compliance
              and patient safety standards.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-xs text-white/80">Samples Distributed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs text-white/80">Portal Access</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">2 Days</div>
                <div className="text-xs text-white/80">Avg. Processing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-xs text-white/80">Compliance Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Available Samples */}
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
              <span className="text-sm tracking-wide">AVAILABLE PRODUCTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Sample Products Available
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Carefully selected products from our therapeutic portfolio, available
              for evaluation by qualified healthcare professionals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sampleProducts.map((product, index) => (
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
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl text-[var(--text-900)] mb-1">{product.name}</h3>
                      <p className="text-blue-600 font-medium text-sm">{product.category}</p>
                    </div>
                    <Package className="text-blue-600" size={24} />
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
                      <span className="text-xs font-semibold text-[var(--text-900)]">SAMPLE OPTIONS:</span>
                      <ul className="mt-1 space-y-1">
                        {product.samples.map((sample, idx) => (
                          <li key={idx} className="text-xs text-[var(--text-900)]/70 flex items-center gap-1">
                            <CheckCircle size={12} className="text-green-600" />
                            <span>{sample}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 text-sm transition-colors">
                    Request This Sample
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
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
              <span className="text-sm tracking-wide">VERIFICATION REQUIREMENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              To ensure responsible distribution and compliance with regulatory requirements,
              all sample requests must meet specific professional qualifications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <motion.div
                key={criteria.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-6 rounded-xl hover:border-blue-300 transition-colors"
              >
                <h3 className="text-lg text-[var(--text-900)] mb-3">{criteria.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{criteria.description}</p>
                <ul className="space-y-2">
                  {criteria.requirements.map((requirement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                      <CheckCircle size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Process */}
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
              <span className="text-sm tracking-wide">STEP-BY-STEP PROCESS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              How to Request Samples
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Our streamlined process ensures quick access to samples while maintaining
              compliance and quality standards throughout the request lifecycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {requestProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="text-blue-600" size={24} />
                  </div>
                  {index < requestProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 -z-10" style={{ transform: 'translateX(50%)' }} />
                  )}
                </div>
                <div className="bg-[var(--surface)] border border-[var(--border-color)] p-4 rounded-lg">
                  <div className="text-sm font-semibold text-blue-600 mb-1">Step {step.step}</div>
                  <h3 className="text-sm font-semibold text-[var(--text-900)] mb-2">{step.title}</h3>
                  <p className="text-[var(--text-900)]/70 text-xs mb-2">{step.description}</p>
                  <div className="text-xs text-[var(--text-900)]/60">{step.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Information */}
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
              <span className="text-sm tracking-wide">GLOBAL SHIPPING</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Shipping & Delivery
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Secure, compliant shipping worldwide with real-time tracking and
              temperature-controlled transport for sensitive pharmaceutical products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingInfo.map((info, index) => (
              <motion.div
                key={info.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-6 rounded-xl"
              >
                <h3 className="text-lg text-[var(--text-900)] mb-4">{info.region}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-[var(--text-900)]/60">Method:</span>
                    <span className="text-[var(--text-900)] ml-2">{info.method}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-900)]/60">Cost:</span>
                    <span className="text-[var(--text-900)] ml-2">{info.cost}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-900)]/60">Delivery:</span>
                    <span className="text-[var(--text-900)] ml-2">{info.delivery}</span>
                  </div>
                  <div>
                    <span className="text-[var(--text-900)]/60">Tracking:</span>
                    <span className="text-[var(--text-900)] ml-2">{info.tracking}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              <span className="text-sm tracking-wide">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Sample Request FAQs
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Common questions about our sample program and request process.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6 rounded-xl"
              >
                <h3 className="text-lg text-[var(--text-900)] mb-3">{faq.question}</h3>
                <p className="text-[var(--text-900)]/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Resources */}
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
              <span className="text-sm tracking-wide">HCP SUPPORT</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Resources & Support
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-3xl mx-auto">
              Comprehensive support for healthcare professionals including educational
              resources, medical information, and dedicated assistance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-6 rounded-xl hover:border-blue-300 transition-colors"
              >
                <h3 className="text-lg text-[var(--text-900)] mb-3">{resource.title}</h3>
                <p className="text-[var(--text-900)]/70 text-sm mb-4">{resource.description}</p>
                <ul className="space-y-2">
                  {resource.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-900)]/60">
                      <CheckCircle size={14} className="text-blue-600 mt-0.5 flex-shrink-0" />
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Package className="mx-auto mb-6" size={48} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Start Your Sample Request
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare professionals who trust EDIF Pharma
              for quality samples and comprehensive medical information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <User size={16} />
                <span>REGISTER HCP ACCOUNT</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Phone size={16} />
                <span>CONTACT MEDICAL AFFAIRS</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}