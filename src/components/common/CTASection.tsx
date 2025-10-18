import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

interface CTASectionProps {
  onRequestSample: () => void;
}

export function CTASection({ onRequestSample }: CTASectionProps) {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'sales@edifpharma.com',
      action: 'mailto:sales@edifpharma.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Available 24/7',
      action: '#',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="var(--brand-blue)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Main CTA Card */}
        <motion.div
          className="relative bg-gradient-to-br from-[var(--brand-blue)] via-[var(--brand-blue)] to-[#0a3a72] rounded-3xl p-8 md:p-16 overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-red)]/10 rounded-full blur-3xl" />
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <span className="text-sm text-white">Get Started Today</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                  Partner with EDIF Pharma
                </h2>
                <p className="text-lg text-white/80 leading-relaxed">
                  Join healthcare professionals worldwide who trust us for quality pharmaceutical solutions. 
                  Request samples, explore our product catalog, or discuss partnership opportunities.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={onRequestSample}
                  className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-blue)] hover:bg-white/90 active:bg-white/80 px-8 py-4 text-sm tracking-wide transition-colors duration-150 group"
                >
                  <span>REQUEST SAMPLE</span>
                  <ArrowRight className="group-hover:translate-x-1 transition-transform duration-150" size={16} strokeWidth={2} />
                </button>
                <button
                  className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 active:bg-white/20 px-8 py-4 text-sm tracking-wide transition-colors duration-150"
                >
                  VIEW CATALOG
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>Fast Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>Quality Guaranteed</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Contact Methods */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  className="block group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-200"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <method.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white mb-1">{method.title}</div>
                      <div className="text-sm text-white/70">{method.description}</div>
                    </div>
                    <ArrowRight className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-[var(--surface)] to-white border border-[var(--border-color)] rounded-xl">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">&lt;24h</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Response Time</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[var(--surface)] to-white border border-[var(--border-color)] rounded-xl">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">10,000+</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Orders/Month</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[var(--surface)] to-white border border-[var(--border-color)] rounded-xl">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">95%</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Same-Day Dispatch</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[var(--surface)] to-white border border-[var(--border-color)] rounded-xl">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">4.9/5</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Customer Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
