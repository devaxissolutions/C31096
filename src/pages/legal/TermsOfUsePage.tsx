import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Scale, UserCheck } from 'lucide-react';

export function TermsOfUsePage() {
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
              Terms of Use
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Please read these terms carefully before using the EDIF Pharma website and services.
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
          >
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              These Terms of Use ("Terms") govern your access to and use of the EDIF Medical Systems Pharmaceutical Division 
              ("EDIF Pharma") website and services. By accessing or using our website, you agree to be bound by these Terms 
              and our Privacy Policy. If you do not agree, please do not use our website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[900px] mx-auto px-6 space-y-12">
          {/* Intended Audience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                <UserCheck className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
                  Intended Audience
                </h2>
                <div className="space-y-3 text-[var(--text-900)]/70 leading-relaxed">
                  <p>
                    This website is intended for:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Licensed healthcare professionals (physicians, pharmacists, nurses)</li>
                    <li>• Authorized pharmaceutical distributors and wholesalers</li>
                    <li>• Healthcare institutions and organizations</li>
                    <li>• Investors and business partners</li>
                    <li>• Regulatory authorities and health officials</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Important:</strong> The information provided is not intended for direct patient use without 
                    consultation with a qualified healthcare professional. Patients should always seek medical advice 
                    from their healthcare provider regarding treatment decisions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Use Restrictions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
                  Acceptable Use
                </h2>
                <div className="space-y-3 text-[var(--text-900)]/70 leading-relaxed">
                  <p>You agree to use our website only for lawful purposes. You must not:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Use the website in any way that violates applicable laws or regulations</li>
                    <li>• Distribute pharmaceutical products without proper authorization and licensing</li>
                    <li>• Misrepresent your professional credentials or affiliation</li>
                    <li>• Attempt to gain unauthorized access to our systems or data</li>
                    <li>• Transmit viruses, malware, or other harmful code</li>
                    <li>• Engage in automated data collection (scraping) without permission</li>
                    <li>• Copy, reproduce, or distribute content without authorization</li>
                    <li>• Use information for competitive intelligence or commercial exploitation</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                <Scale className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
                  Intellectual Property Rights
                </h2>
                <div className="space-y-3 text-[var(--text-900)]/70 leading-relaxed">
                  <p>
                    All content on this website, including text, graphics, logos, images, product information, data compilations, 
                    and software, is the property of EDIF Pharma or its licensors and is protected by copyright, trademark, 
                    and other intellectual property laws.
                  </p>
                  <p>
                    The EDIF Pharma name, logo, and all related product names are trademarks of EDIF Medical Systems. 
                    You may not use these trademarks without our prior written permission.
                  </p>
                  <p>
                    Healthcare professionals may download and print materials for legitimate medical education and patient 
                    care purposes, provided proper attribution is maintained and commercial use is prohibited.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medical Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[var(--accent-red)]/10 flex items-center justify-center flex-shrink-0">
                <FileText className="text-[var(--accent-red)]" size={24} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
                  Medical Information Disclaimer
                </h2>
                <div className="space-y-3 text-[var(--text-900)]/70 leading-relaxed">
                  <p>
                    <strong>The information on this website is not medical advice.</strong> It is intended for healthcare 
                    professionals and should not replace professional medical consultation, diagnosis, or treatment.
                  </p>
                  <p>
                    Product information, including indications, dosing, contraindications, and adverse reactions, is provided 
                    for reference only. Always consult the official prescribing information and regulatory-approved product 
                    labeling before prescribing or dispensing any medication.
                  </p>
                  <p>
                    EDIF Pharma does not provide medical advice through this website. For medical emergencies, contact 
                    emergency services immediately.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Limitation of Liability
            </h2>
            <div className="space-y-3 text-[var(--text-900)]/70 leading-relaxed">
              <p>
                The website and all information are provided "as is" without warranties of any kind, either express or implied. 
                EDIF Pharma does not warrant that the website will be uninterrupted, error-free, or free from viruses or 
                other harmful components.
              </p>
              <p>
                To the maximum extent permitted by law, EDIF Pharma shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages arising from your use of the website or inability to use the website.
              </p>
            </div>
          </motion.div>

          {/* Indemnification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Indemnification
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              You agree to indemnify and hold harmless EDIF Pharma, its affiliates, officers, directors, employees, and agents 
              from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the 
              website or violation of these Terms.
            </p>
          </motion.div>

          {/* Third Party Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Third-Party Links
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              Our website may contain links to third-party websites for your convenience. We do not endorse or control these 
              external sites and are not responsible for their content, privacy policies, or practices. Access third-party 
              sites at your own risk.
            </p>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Governing Law and Jurisdiction
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where EDIF Pharma's 
              principal office is located, without regard to conflict of law principles. Any disputes arising under these Terms 
              shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
            </p>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Changes to These Terms
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to 
              the website. Your continued use of the website following any changes constitutes acceptance of the revised Terms. 
              We recommend reviewing these Terms periodically.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[var(--surface)] border border-[var(--border-color)] p-8"
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Questions About These Terms
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed mb-4">
              If you have questions about these Terms of Use, please contact our Legal Department:
            </p>
            <div className="space-y-2 text-[var(--text-900)]/70">
              <p><strong>Email:</strong> legal@edifpharma.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Mail:</strong> Legal Department, EDIF Medical Systems, 123 Pharmaceutical Way, Metropolitan City, Country 12345</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
