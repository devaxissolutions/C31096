import { motion } from 'framer-motion';
import { Shield, Eye, Lock, FileText } from 'lucide-react';

export function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you provide directly, including name, email, professional credentials, organization details, and contact information when you request samples, register for resources, or contact us.'
        },
        {
          subtitle: 'Professional Verification',
          text: 'For healthcare professionals, we may verify credentials including medical license numbers, DEA numbers, and institutional affiliations to comply with pharmaceutical distribution regulations.'
        },
        {
          subtitle: 'Usage Data',
          text: 'We automatically collect information about your interaction with our website, including IP address, browser type, pages visited, time spent, and referring website through cookies and similar technologies.'
        }
      ]
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Product Distribution',
          text: 'Processing sample requests, providing product information, and managing distributor relationships in accordance with pharmaceutical regulations.'
        },
        {
          subtitle: 'Medical Communications',
          text: 'Responding to medical information requests, pharmacovigilance reporting, and maintaining required safety communications with healthcare professionals.'
        },
        {
          subtitle: 'Service Improvement',
          text: 'Analyzing website usage to improve functionality, developing new products and services, and enhancing user experience.'
        },
        {
          subtitle: 'Regulatory Compliance',
          text: 'Meeting legal obligations including adverse event reporting, product recalls, and regulatory inquiries from health authorities.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Information Sharing',
      content: [
        {
          subtitle: 'Regulatory Authorities',
          text: 'We may share information with FDA, EMA, WHO, and other regulatory bodies as required by pharmaceutical regulations and safety reporting obligations.'
        },
        {
          subtitle: 'Service Providers',
          text: 'Trusted third parties who assist in website operations, conducting business, or serving our users, subject to confidentiality agreements.'
        },
        {
          subtitle: 'Legal Requirements',
          text: 'When disclosure is required by law, court order, or to protect our rights, property, or safety of our users and the public.'
        },
        {
          subtitle: 'Business Transfers',
          text: 'In connection with a merger, acquisition, or sale of assets, your information may be transferred subject to continued protection under this policy.'
        }
      ]
    },
    {
      icon: FileText,
      title: 'Your Rights',
      content: [
        {
          subtitle: 'Access & Correction',
          text: 'You have the right to access, update, or correct your personal information. Contact our privacy team at privacy@edifpharma.com.'
        },
        {
          subtitle: 'Data Portability',
          text: 'Request a copy of your data in a structured, commonly used format for transfer to another service.'
        },
        {
          subtitle: 'Deletion',
          text: 'Request deletion of your personal information, subject to our legal obligations to retain certain records for regulatory compliance.'
        },
        {
          subtitle: 'Marketing Opt-Out',
          text: 'Unsubscribe from marketing communications at any time while continuing to receive important safety and regulatory notifications.'
        }
      ]
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
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">LEGAL</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              EDIF Pharma is committed to protecting your privacy and handling your personal information with transparency and care.
            </p>
            <p className="text-sm text-white/60 mt-4">
              Effective Date: January 1, 2025 | Last Updated: January 1, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white border-b border-[var(--border-color)]">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              This Privacy Policy describes how EDIF Medical Systems Pharmaceutical Division ("EDIF Pharma," "we," "us," or "our") 
              collects, uses, discloses, and protects personal information when you visit our website or interact with our services. 
              This policy applies to healthcare professionals, patients, distributors, investors, and all website visitors.
            </p>
            <p className="text-[var(--text-900)]/70 leading-relaxed mt-4">
              As a pharmaceutical company, we adhere to strict data protection standards including GDPR, HIPAA (where applicable), 
              and industry-specific regulations governing pharmaceutical marketing and distribution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6 space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-6">
                    {section.content.map((item, idx) => (
                      <div key={idx} className="space-y-2">
                        <h3 className="text-lg text-[var(--text-900)]">
                          {item.subtitle}
                        </h3>
                        <p className="text-[var(--text-900)]/70 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-[900px] mx-auto px-6 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Data Security
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed mb-4">
              We implement industry-standard security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="space-y-2 text-[var(--text-900)]/70">
              <li>• Encryption of data in transit and at rest using industry-standard protocols</li>
              <li>• Regular security audits and vulnerability assessments</li>
              <li>• Access controls and authentication measures for internal systems</li>
              <li>• Employee training on data protection and confidentiality</li>
              <li>• Secure data centers with physical and digital safeguards</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              International Data Transfers
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              As a global pharmaceutical company, we may transfer your information to countries outside your residence. 
              We ensure adequate safeguards are in place, including Standard Contractual Clauses approved by relevant authorities 
              and adherence to international data protection frameworks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Children's Privacy
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              Our website is not intended for individuals under 18 years of age. We do not knowingly collect personal 
              information from children. If you believe we have inadvertently collected such information, please contact us 
              immediately for deletion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Changes to This Policy
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
              We will notify you of material changes by posting the updated policy on our website with a revised effective date. 
              Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[var(--border-color)] p-8"
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Contact Us
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed mb-4">
              For questions about this Privacy Policy or to exercise your privacy rights, please contact our Data Protection Officer:
            </p>
            <div className="space-y-2 text-[var(--text-900)]/70">
              <p><strong>Email:</strong> privacy@edifpharma.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Mail:</strong> Data Protection Officer, EDIF Medical Systems, 123 Pharmaceutical Way, Metropolitan City, Country 12345</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
