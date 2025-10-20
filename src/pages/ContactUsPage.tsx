import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Building2, Headphones } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

export function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll respond within 24 hours.');
    setFormData({ name: '', email: '', company: '', inquiryType: 'general', message: '' });
  };

  const offices = [
    {
      region: 'Global Headquarters',
      address: '123 Pharmaceutical Way, Medical District',
      city: 'Metropolitan City, Country 12345',
      phone: '+1 (555) 123-4567',
      email: 'info@edifpharma.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM'
    },
    {
      region: 'European Office',
      address: '45 Research Boulevard',
      city: 'Geneva, Switzerland',
      phone: '+41 22 555 0123',
      email: 'europe@edifpharma.com',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM CET'
    },
    {
      region: 'Asia-Pacific Office',
      address: '78 Innovation Street',
      city: 'Singapore 098765',
      phone: '+65 6555 7890',
      email: 'apac@edifpharma.com',
      hours: 'Mon-Fri: 8:30 AM - 5:30 PM SGT'
    }
  ];

  const departments = [
    {
      icon: Building2,
      title: 'Business Development',
      email: 'partnerships@edifpharma.com',
      description: 'Partnership opportunities and distributor inquiries'
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      email: 'support@edifpharma.com',
      description: 'Product information and order assistance'
    },
    {
      icon: Mail,
      title: 'Medical Information',
      email: 'medical@edifpharma.com',
      description: 'Clinical inquiries and pharmacovigilance'
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
              <span className="text-sm tracking-wide">GET IN TOUCH</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Contact EDIF Pharma
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Connect with our team for product inquiries, partnership opportunities, or general information. 
              We're committed to responding within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-6">
                <span className="text-sm text-[var(--brand-blue)] tracking-wide">SEND US A MESSAGE</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
                How Can We Help?
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-[var(--text-900)] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors"
                    placeholder="Dr. John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-[var(--text-900)] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors"
                    placeholder="john.smith@hospital.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-[var(--text-900)] mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors"
                    placeholder="Hospital / Clinic / Pharmacy"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm text-[var(--text-900)] mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="distributor">Distributor Inquiry</option>
                    <option value="medical">Medical Information</option>
                    <option value="careers">Career Opportunities</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[var(--text-900)] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150 w-full group"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="group-hover:translate-x-1 transition-transform duration-150" size={16} strokeWidth={2} />
                </button>

                <p className="text-xs text-[var(--text-900)]/60">
                  * Required fields. We typically respond within 24 hours during business days.
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-6">
                <span className="text-sm text-[var(--brand-blue)] tracking-wide">CONTACT INFORMATION</span>
              </div>

              {/* Department Contacts */}
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <motion.div
                    key={dept.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[var(--surface)] border border-[var(--border-color)] p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                        <dept.icon className="text-[var(--brand-blue)]" size={20} strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg text-[var(--text-900)] mb-2">{dept.title}</h3>
                        <p className="text-sm text-[var(--text-900)]/60 mb-3">{dept.description}</p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-sm text-[var(--brand-blue)] hover:opacity-70 transition-opacity"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white p-8">
                <h3 className="text-xl mb-6">24/7 Emergency Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone size={18} strokeWidth={2} />
                    <a href="tel:+15551234567" className="hover:opacity-70 transition-opacity">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} strokeWidth={2} />
                    <a href="mailto:emergency@edifpharma.com" className="hover:opacity-70 transition-opacity">
                      emergency@edifpharma.com
                    </a>
                  </div>
                </div>
                <p className="text-sm text-white/70 mt-4">
                  For urgent pharmacovigilance and safety reporting
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">GLOBAL PRESENCE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Our Offices
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-6">{office.region}</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} strokeWidth={2} className="text-[var(--brand-blue)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-[var(--text-900)]/70">{office.address}</p>
                      <p className="text-[var(--text-900)]/70">{office.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} strokeWidth={2} className="text-[var(--brand-blue)] flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-[var(--text-900)]/70 hover:text-[var(--brand-blue)] transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} strokeWidth={2} className="text-[var(--brand-blue)] flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-[var(--text-900)]/70 hover:text-[var(--brand-blue)] transition-colors">
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={16} strokeWidth={2} className="text-[var(--brand-blue)] flex-shrink-0" />
                    <p className="text-[var(--text-900)]/70">{office.hours}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
