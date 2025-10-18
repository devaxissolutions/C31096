import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export function LeadershipPage() {
  const leaders = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Executive Officer',
      bio: 'Leading EDIF Pharma\'s global strategy with 25+ years in pharmaceutical innovation. Former VP at major pharma companies, PhD in Pharmaceutical Sciences from MIT.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      linkedin: '#',
      email: 's.mitchell@edifpharma.com'
    },
    {
      name: 'Dr. James Chen',
      role: 'Chief Scientific Officer',
      bio: 'Driving R&D excellence and innovation pipeline. 30+ publications in leading journals, pioneer in targeted drug delivery systems.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      linkedin: '#',
      email: 'j.chen@edifpharma.com'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Chief Operating Officer',
      bio: 'Overseeing global manufacturing and supply chain operations. WHO-GMP certification expert with track record in operational excellence.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      linkedin: '#',
      email: 'm.rodriguez@edifpharma.com'
    },
    {
      name: 'Dr. Amit Patel',
      role: 'Chief Medical Officer',
      bio: 'Leading clinical development and medical affairs. Board-certified physician with expertise in pharmacovigilance and regulatory compliance.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      linkedin: '#',
      email: 'a.patel@edifpharma.com'
    },
    {
      name: 'Lisa Thompson',
      role: 'Chief Financial Officer',
      bio: 'Guiding financial strategy and investor relations. Former investment banker with deep pharmaceutical sector expertise.',
      image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop',
      linkedin: '#',
      email: 'l.thompson@edifpharma.com'
    },
    {
      name: 'David Kim',
      role: 'Chief Quality Officer',
      bio: 'Ensuring highest quality standards across all operations. Quality systems architect with multiple regulatory approvals experience.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      linkedin: '#',
      email: 'd.kim@edifpharma.com'
    }
  ];

  const board = [
    { name: 'Hon. Robert Williams', role: 'Chairman, Board of Directors', background: 'Former Healthcare Minister' },
    { name: 'Prof. Elena Kowalski', role: 'Independent Director', background: 'Academic Leader, Pharmacology' },
    { name: 'Michael Zhang', role: 'Independent Director', background: 'Healthcare Investment Strategist' },
    { name: 'Dr. Fatima Al-Rashid', role: 'Independent Director', background: 'Global Health Policy Expert' }
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
              <span className="text-sm tracking-wide">LEADERSHIP</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Meet Our Leadership Team
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Guided by visionary leaders with deep pharmaceutical expertise and unwavering commitment to healthcare excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Executive Leadership */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">EXECUTIVE TEAM</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Executive Leadership
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Decades of combined experience driving pharmaceutical innovation and operational excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl text-[var(--text-900)] mb-1">{leader.name}</h3>
                    <p className="text-sm text-[var(--brand-blue)]">{leader.role}</p>
                  </div>
                  <p className="text-sm text-[var(--text-900)]/70 leading-relaxed">
                    {leader.bio}
                  </p>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={leader.linkedin}
                      className="inline-flex items-center justify-center p-2 border border-[var(--border-color)] hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-colors duration-150"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <Linkedin size={16} strokeWidth={2} />
                    </a>
                    <a
                      href={`mailto:${leader.email}`}
                      className="inline-flex items-center justify-center p-2 border border-[var(--border-color)] hover:bg-[var(--brand-blue)] hover:text-white hover:border-[var(--brand-blue)] transition-colors duration-150"
                      aria-label={`Email ${leader.name}`}
                    >
                      <Mail size={16} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">GOVERNANCE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Board of Directors
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Independent oversight ensuring strategic direction and stakeholder value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {board.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-[var(--border-color)] p-8"
              >
                <h3 className="text-lg text-[var(--text-900)] mb-2">{member.name}</h3>
                <p className="text-sm text-[var(--brand-blue)] mb-3">{member.role}</p>
                <p className="text-sm text-[var(--text-900)]/60">{member.background}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Culture */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">OUR CULTURE</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Leadership Principles
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Patient First', description: 'Every decision prioritizes patient safety and therapeutic outcomes.' },
              { title: 'Scientific Rigor', description: 'Evidence-based approach to pharmaceutical development and manufacturing.' },
              { title: 'Operational Excellence', description: 'Highest quality standards in every aspect of our operations.' },
              { title: 'Transparency', description: 'Open communication with stakeholders, regulators, and communities.' },
              { title: 'Innovation', description: 'Continuous improvement and advancement in pharmaceutical sciences.' },
              { title: 'Sustainability', description: 'Responsible stewardship of resources and environmental impact.' }
            ].map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-[var(--border-color)] bg-[var(--surface)]"
              >
                <h3 className="text-lg text-[var(--text-900)] mb-3">{principle.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
