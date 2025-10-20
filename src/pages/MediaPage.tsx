import { motion } from 'framer-motion';
import { Newspaper, Camera, Users, Mail, Phone, Download, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function MediaPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    inquiryType: 'press-release',
    deadline: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Media inquiry submitted successfully! We\'ll respond within 24 hours.');
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      inquiryType: 'press-release',
      deadline: '',
      message: ''
    });
  };

  const pressReleases = [
    {
      title: 'EDIF Pharma Launches Revolutionary Cardiovascular Treatment',
      date: 'October 15, 2025',
      excerpt: 'Groundbreaking therapy shows 85% efficacy in clinical trials, marking a significant advancement in cardiovascular care.',
      category: 'Product Launch'
    },
    {
      title: 'Strategic Partnership with Leading Research Institution',
      date: 'September 28, 2025',
      excerpt: 'Collaboration aims to accelerate development of next-generation diabetes medications through joint research initiatives.',
      category: 'Partnership'
    },
    {
      title: 'WHO-GMP Certification Achieved for New Manufacturing Facility',
      date: 'September 12, 2025',
      excerpt: 'State-of-the-art facility meets highest international standards for pharmaceutical manufacturing excellence.',
      category: 'Certification'
    },
    {
      title: 'Record-Breaking Q3 Financial Results',
      date: 'August 30, 2025',
      excerpt: 'Revenue growth of 42% driven by strong market performance and expanded global distribution network.',
      category: 'Financial'
    }
  ];

  const mediaContacts = [
    {
      region: 'Global Media Relations',
      name: 'Sarah Johnson',
      title: 'Director of Communications',
      email: 'sarah.johnson@edifpharma.com',
      phone: '+1 (555) 123-4567'
    },
    {
      region: 'European Media',
      name: 'Dr. Michael Chen',
      title: 'Communications Manager',
      email: 'michael.chen@edifpharma.com',
      phone: '+41 22 555 0123'
    },
    {
      region: 'Asia-Pacific Media',
      name: 'Priya Patel',
      title: 'Regional Communications Lead',
      email: 'priya.patel@edifpharma.com',
      phone: '+65 6555 7890'
    }
  ];

  const mediaResources = [
    {
      title: 'Company Logo & Brand Assets',
      description: 'High-resolution logos, brand guidelines, and visual identity assets',
      type: 'Download',
      size: '25 MB'
    },
    {
      title: 'Executive Bios & Photos',
      description: 'Professional headshots and biographical information for key executives',
      type: 'Download',
      size: '15 MB'
    },
    {
      title: 'Product Images & Videos',
      description: 'Marketing-approved images and promotional videos of our products',
      type: 'Download',
      size: '180 MB'
    },
    {
      title: 'Corporate Fact Sheet',
      description: 'Key company statistics, milestones, and overview information',
      type: 'PDF',
      size: '2.3 MB'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Annual Investor Conference',
      date: 'November 15, 2025',
      location: 'New York, NY',
      type: 'Investor Event'
    },
    {
      title: 'Medical Innovation Summit',
      date: 'December 3, 2025',
      location: 'Boston, MA',
      type: 'Industry Conference'
    },
    {
      title: 'Product Launch Event',
      date: 'January 20, 2026',
      location: 'Virtual Event',
      type: 'Product Launch'
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
              <span className="text-sm tracking-wide">MEDIA RELATIONS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Press & Media Center
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Access the latest news, press releases, and media resources from EDIF Pharma.
              Connect with our communications team for interviews and story opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Media Inquiry Form */}
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
                <span className="text-sm text-[var(--brand-blue)] tracking-wide">MEDIA INQUIRY</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
                Get In Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm text-[var(--text-900)] mb-2">
                      Organization *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors"
                      placeholder="CNN News"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                      placeholder="john.smith@cnn.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-[var(--text-900)] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                      <option value="press-release">Press Release Request</option>
                      <option value="interview">Interview Request</option>
                      <option value="photography">Photography Request</option>
                      <option value="background">Background Information</option>
                      <option value="event">Event Coverage</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="deadline" className="block text-sm text-[var(--text-900)] mb-2">
                      Deadline (if applicable)
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors"
                    />
                  </div>
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
                    placeholder="Please provide details about your story, the angle you're pursuing, and any specific information or access you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150 w-full group"
                >
                  <span>SUBMIT INQUIRY</span>
                  <Mail className="group-hover:translate-x-1 transition-transform duration-150" size={16} strokeWidth={2} />
                </button>

                <p className="text-xs text-[var(--text-900)]/60">
                  * Required fields. Media inquiries are typically responded to within 24 hours during business days.
                </p>
              </form>
            </motion.div>

            {/* Media Contacts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-6">
                <span className="text-sm text-[var(--brand-blue)] tracking-wide">MEDIA CONTACTS</span>
              </div>

              <div className="space-y-6">
                {mediaContacts.map((contact, index) => (
                  <motion.div
                    key={contact.region}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[var(--surface)] border border-[var(--border-color)] p-6"
                  >
                    <h3 className="text-lg text-[var(--text-900)] mb-2">{contact.region}</h3>
                    <div className="space-y-2">
                      <p className="text-[var(--text-900)] font-medium">{contact.name}</p>
                      <p className="text-sm text-[var(--text-900)]/70">{contact.title}</p>
                      <div className="flex items-center gap-2 text-sm">
                        <Mail size={14} strokeWidth={2} className="text-[var(--brand-blue)]" />
                        <a href={`mailto:${contact.email}`} className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity">
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={14} strokeWidth={2} className="text-[var(--brand-blue)]" />
                        <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-[var(--text-900)]/70 hover:text-[var(--brand-blue)] transition-colors">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white p-8">
                <h3 className="text-xl mb-6">Media Coverage Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-sm text-white/80">Press Releases</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">50M+</div>
                    <div className="text-sm text-white/80">Media Impressions</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">LATEST NEWS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Press Releases
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs tracking-wide">
                    {release.category}
                  </span>
                  <span className="text-sm text-[var(--text-900)]/60">{release.date}</span>
                </div>
                <h3 className="text-xl text-[var(--text-900)] mb-3">{release.title}</h3>
                <p className="text-[var(--text-900)]/70 leading-relaxed mb-4">
                  {release.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-[var(--brand-blue)] hover:opacity-70 transition-opacity text-sm">
                  <span>Read Full Release</span>
                  <ExternalLink size={14} strokeWidth={2} />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
              <Newspaper size={16} strokeWidth={2} />
              <span>VIEW ALL PRESS RELEASES</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Media Resources */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">MEDIA KIT</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Media Resources
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Download logos, photos, and other assets for your coverage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6"
              >
                <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center mb-4">
                  <Download className="text-[var(--brand-blue)]" size={20} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{resource.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--text-900)]/60">{resource.size}</span>
                  <button className="inline-flex items-center gap-1 text-[var(--brand-blue)] hover:opacity-70 transition-opacity text-sm">
                    <Download size={14} strokeWidth={2} />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">EVENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Upcoming Events
            </h2>
          </motion.div>

          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="text-[var(--brand-blue)]" size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg text-[var(--text-900)] mb-1">{event.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[var(--text-900)]/70">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} strokeWidth={2} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} strokeWidth={2} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-block px-3 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs tracking-wide">
                    {event.type}
                  </span>
                  <button className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity text-sm">
                    RSVP →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}