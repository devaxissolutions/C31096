import { motion } from 'framer-motion';
import { Package, TrendingUp, FileText, Users, Lock, Download, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function DistributorPortalPage() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const benefits = [
    {
      icon: Package,
      title: 'Product Access',
      description: 'Exclusive access to our complete pharmaceutical portfolio with competitive pricing and volume discounts.'
    },
    {
      icon: TrendingUp,
      title: 'Sales Support',
      description: 'Marketing materials, product training, and dedicated account management to drive your growth.'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Instant access to product monographs, regulatory certificates, and distribution materials.'
    },
    {
      icon: Users,
      title: 'Training Programs',
      description: 'Comprehensive training on products, regulations, and best practices for pharmaceutical distribution.'
    }
  ];

  const portalFeatures = [
    'Real-time inventory availability',
    'Online ordering and order tracking',
    'Digital certificate downloads',
    'Product information and updates',
    'Promotional materials library',
    'Training and webinar access',
    'Territory management tools',
    'Sales performance analytics'
  ];

  const requirements = [
    {
      category: 'Legal Requirements',
      items: [
        'Valid pharmaceutical distribution license',
        'WHO-GDP or equivalent certification',
        'Business registration documents',
        'Tax identification documentation',
        'Bank account verification'
      ]
    },
    {
      category: 'Facility Requirements',
      items: [
        'Climate-controlled storage facilities',
        'Security and access control systems',
        'Cold chain capability (for temperature-sensitive products)',
        'Backup power and monitoring systems',
        'Quality management procedures'
      ]
    },
    {
      category: 'Operational Requirements',
      items: [
        'Minimum order volumes (varies by region)',
        'Qualified personnel (pharmacist on staff)',
        'Distribution network coverage',
        'Track and trace systems',
        'Recall management capabilities'
      ]
    }
  ];

  const regions = [
    { region: 'North America', contact: 'na.distribution@edifpharma.com', territories: '15+' },
    { region: 'Europe', contact: 'eu.distribution@edifpharma.com', territories: '30+' },
    { region: 'Asia-Pacific', contact: 'apac.distribution@edifpharma.com', territories: '25+' },
    { region: 'Latin America', contact: 'latam.distribution@edifpharma.com', territories: '18+' },
    { region: 'Middle East & Africa', contact: 'mea.distribution@edifpharma.com', territories: '35+' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info('Login functionality requires backend integration. Please contact your account manager.');
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
              <span className="text-sm tracking-wide">PARTNER WITH US</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Distributor Portal
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Join our global network of authorized pharmaceutical distributors. Access premium products, 
              exclusive support, and tools to grow your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portal Login */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[var(--surface)] border border-[var(--border-color)] p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center">
                  <Lock className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
                </div>
                <div>
                  <h2 className="text-2xl text-[var(--text-900)]">Distributor Login</h2>
                  <p className="text-sm text-[var(--text-900)]/60">Access your account</p>
                </div>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm text-[var(--text-900)] mb-2">
                    Username or Email
                  </label>
                  <input
                    type="text"
                    id="username"
                    required
                    value={loginData.username}
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm text-[var(--text-900)] mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    required
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--brand-blue)] focus:outline-none transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 accent-[var(--brand-blue)]" />
                    <span className="text-[var(--text-900)]/70">Remember me</span>
                  </label>
                  <a href="#" className="text-[var(--brand-blue)] hover:opacity-70 transition-opacity">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150"
                >
                  <Lock size={16} strokeWidth={2} />
                  <span>SIGN IN</span>
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-[var(--border-color)] text-center">
                <p className="text-sm text-[var(--text-900)]/70 mb-3">
                  Not a distributor yet?
                </p>
                <button
                  onClick={() => document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-[var(--brand-blue)] hover:opacity-70 transition-opacity"
                >
                  Apply for Partnership →
                </button>
              </div>
            </motion.div>

            {/* Portal Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
                <span className="text-sm text-[var(--brand-blue)] tracking-wide">PORTAL FEATURES</span>
              </div>
              <h2 className="text-3xl text-[var(--text-900)] mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-[var(--text-900)]/70 leading-relaxed mb-6">
                Our distributor portal provides comprehensive tools and resources to streamline operations 
                and maximize your business potential.
              </p>
              <ul className="space-y-3">
                {portalFeatures.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 text-[var(--text-900)]/70"
                  >
                    <Package size={16} strokeWidth={2} className="text-[var(--brand-blue)] mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">PARTNERSHIP BENEFITS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Why Partner with EDIF Pharma
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8"
              >
                <div className="w-14 h-14 bg-[var(--brand-blue)]/10 flex items-center justify-center mb-6">
                  <benefit.icon className="text-[var(--brand-blue)]" size={28} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-3">{benefit.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="application" className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[var(--brand-blue)]/10 mb-4">
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">APPLICATION REQUIREMENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Become an Authorized Distributor
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Meet these requirements to join our global distribution network
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={req.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-[var(--border-color)] bg-[var(--surface)] p-8"
              >
                <h3 className="text-xl text-[var(--text-900)] mb-6">{req.category}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-900)]/70">
                      <div className="w-1.5 h-1.5 bg-[var(--brand-blue)] rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
              <FileText size={16} strokeWidth={2} />
              <span>START APPLICATION</span>
            </button>
            <p className="text-sm text-[var(--text-900)]/60 mt-4">
              Application review typically takes 2-4 weeks
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regional Contacts */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">GLOBAL NETWORK</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Regional Distribution Offices
            </h2>
          </motion.div>

          <div className="space-y-4">
            {regions.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center">
                    <MapPin className="text-[var(--brand-blue)]" size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-lg text-[var(--text-900)] mb-1">{region.region}</h3>
                    <p className="text-sm text-[var(--text-900)]/60">{region.territories} territories covered</p>
                  </div>
                </div>
                <a
                  href={`mailto:${region.contact}`}
                  className="text-sm text-[var(--brand-blue)] hover:opacity-70 transition-opacity"
                >
                  {region.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--brand-blue)] to-[#0a3a72] text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Clock className="mx-auto mb-6 text-white/80" size={48} strokeWidth={2} />
            <h2 className="text-3xl md:text-4xl mb-6">
              Questions About Distribution?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our distribution team is available to discuss partnership opportunities and answer your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-blue)] hover:bg-white/90 active:bg-white/80 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <span>SCHEDULE CONSULTATION</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 border border-white text-white hover:bg-white/10 active:bg-white/20 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
                <Download size={16} strokeWidth={2} />
                <span>DOWNLOAD INFO PACK</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
