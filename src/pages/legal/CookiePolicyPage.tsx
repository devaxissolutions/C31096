import { motion } from 'framer-motion';
import { Cookie, Settings, BarChart, Shield } from 'lucide-react';
import { useState } from 'react';

export function CookiePolicyPage() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false
  });

  const cookieTypes = [
    {
      icon: Shield,
      name: 'Strictly Necessary Cookies',
      key: 'necessary' as const,
      locked: true,
      description: 'Essential for website functionality, security, and regulatory compliance. Cannot be disabled.',
      examples: [
        'Session management and authentication',
        'Security and fraud prevention',
        'Regulatory compliance (e.g., age verification for restricted content)',
        'Load balancing and performance optimization'
      ],
      duration: 'Session to 1 year'
    },
    {
      icon: Settings,
      name: 'Functional Cookies',
      key: 'functional' as const,
      locked: false,
      description: 'Enable enhanced functionality and personalization, such as remembering your preferences.',
      examples: [
        'Language and region preferences',
        'Professional credential verification status',
        'Saved search filters and settings',
        'Accessibility preferences'
      ],
      duration: 'Up to 2 years'
    },
    {
      icon: BarChart,
      name: 'Analytics Cookies',
      key: 'analytics' as const,
      locked: false,
      description: 'Help us understand how visitors interact with our website to improve user experience.',
      examples: [
        'Page views and navigation patterns',
        'Time spent on pages',
        'Search terms used',
        'Device and browser information',
        'Referral sources'
      ],
      duration: 'Up to 2 years'
    },
    {
      icon: Cookie,
      name: 'Marketing Cookies',
      key: 'marketing' as const,
      locked: false,
      description: 'Used to deliver relevant pharmaceutical and healthcare information to healthcare professionals.',
      examples: [
        'Professional interest tracking',
        'Therapeutic area preferences',
        'Medical education engagement',
        'Event and webinar registrations'
      ],
      duration: 'Up to 1 year'
    }
  ];

  const handleSavePreferences = () => {
    // In a real implementation, this would save to browser and backend
    console.log('Cookie preferences saved:', preferences);
    alert('Your cookie preferences have been saved.');
  };

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
              Cookie Policy
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Learn about how EDIF Pharma uses cookies and similar technologies to enhance your website experience.
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
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              What Are Cookies?
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              Cookies are small text files stored on your device when you visit our website. They help us provide you with 
              a better experience, remember your preferences, understand how you use our site, and comply with pharmaceutical 
              industry regulations regarding content delivery to healthcare professionals.
            </p>
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              We use both first-party cookies (set by EDIF Pharma) and third-party cookies (set by our service providers) 
              for various purposes detailed below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">TYPES OF COOKIES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              How We Use Cookies
            </h2>
          </motion.div>

          <div className="space-y-6">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-[var(--border-color)] bg-[var(--surface)] p-8"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                      <type.icon className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-[var(--text-900)] mb-2">{type.name}</h3>
                      <p className="text-sm text-[var(--text-900)]/70 leading-relaxed mb-4">
                        {type.description}
                      </p>
                    </div>
                  </div>
                  {!type.locked && (
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences[type.key]}
                        onChange={(e) => setPreferences({ ...preferences, [type.key]: e.target.checked })}
                        className="w-5 h-5 border-2 border-[var(--border-color)] focus:border-[var(--brand-blue)] accent-[var(--brand-blue)]"
                      />
                      <span className="text-sm text-[var(--text-900)]/70">Enable</span>
                    </label>
                  )}
                  {type.locked && (
                    <div className="px-3 py-1.5 bg-[var(--text-900)]/10 text-xs text-[var(--text-900)]/60">
                      Always Active
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm text-[var(--text-900)] mb-3">Examples:</h4>
                    <ul className="space-y-2 text-sm text-[var(--text-900)]/70">
                      {type.examples.map((example, idx) => (
                        <li key={idx}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm text-[var(--text-900)] mb-3">Duration:</h4>
                    <p className="text-sm text-[var(--text-900)]/70">{type.duration}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Save Preferences Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <button
              onClick={handleSavePreferences}
              className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150"
            >
              <Settings size={16} strokeWidth={2} />
              <span>SAVE PREFERENCES</span>
            </button>
            <p className="text-sm text-[var(--text-900)]/60 mt-4">
              Your preferences will be saved and applied to future visits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-[900px] mx-auto px-6 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed mb-4">
              We work with trusted third-party service providers who may place cookies on your device for:
            </p>
            <ul className="space-y-2 text-[var(--text-900)]/70">
              <li>• <strong>Analytics:</strong> Google Analytics, Adobe Analytics (website performance and user behavior)</li>
              <li>• <strong>Content Delivery:</strong> CDN providers for faster, more reliable content delivery</li>
              <li>• <strong>Security:</strong> Fraud detection and DDoS protection services</li>
              <li>• <strong>Medical Education:</strong> Webinar and e-learning platform providers</li>
            </ul>
            <p className="text-[var(--text-900)]/70 leading-relaxed mt-4">
              These third parties have their own privacy policies. We recommend reviewing them to understand their practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Managing Cookies
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed mb-4">
              You have several options to manage cookies:
            </p>
            <div className="space-y-4 text-[var(--text-900)]/70">
              <div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">Browser Settings</h3>
                <p className="leading-relaxed">
                  Most web browsers allow you to control cookies through settings. You can typically find cookie management 
                  options in your browser's preferences or settings menu. Note that blocking all cookies may impact website 
                  functionality.
                </p>
              </div>
              <div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">Cookie Preference Tool</h3>
                <p className="leading-relaxed">
                  Use our preference tool above to customize which types of cookies you allow (except necessary cookies 
                  required for website operation).
                </p>
              </div>
              <div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">Opt-Out Links</h3>
                <p className="leading-relaxed">
                  For analytics cookies: <a href="https://tools.google.com/dlpage/gaoptout" className="text-[var(--brand-blue)] hover:opacity-70">Google Analytics Opt-out</a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Do Not Track
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              Some browsers include "Do Not Track" (DNT) signals. Currently, there is no industry consensus on how to 
              respond to DNT signals. We continue to monitor developments in this area and may update our practices accordingly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Updates to This Policy
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed">
              We may update this Cookie Policy to reflect changes in technology, legal requirements, or our practices. 
              We will notify you of material changes by posting the updated policy on our website. Check the "Last Updated" 
              date at the top of this page to see when changes were made.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[var(--border-color)] p-8"
          >
            <h2 className="text-2xl md:text-3xl text-[var(--text-900)] mb-4">
              Questions About Cookies
            </h2>
            <p className="text-[var(--text-900)]/70 leading-relaxed mb-4">
              If you have questions about our use of cookies, please contact:
            </p>
            <div className="space-y-2 text-[var(--text-900)]/70">
              <p><strong>Email:</strong> privacy@edifpharma.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
