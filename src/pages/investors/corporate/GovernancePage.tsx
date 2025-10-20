import { motion } from 'framer-motion';
import { Users, FileText, Shield, Award, Target, Download, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

export function GovernancePage() {
  const boardMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Chairman & CEO',
      experience: '25+ years in pharmaceutical industry',
      committees: ['Executive Committee', 'Strategy Committee'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Mrs. Priya Sharma',
      position: 'Independent Director',
      experience: 'Former CFO of multinational pharma company',
      committees: ['Audit Committee', 'Risk Committee'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Mr. Amit Patel',
      position: 'Independent Director',
      experience: 'Legal expert in healthcare regulations',
      committees: ['Compliance Committee', 'Ethics Committee'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Dr. Meera Singh',
      position: 'Director - R&D',
      experience: 'PhD in Pharmaceutical Sciences',
      committees: ['Innovation Committee', 'Quality Committee'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Mr. Vikram Rao',
      position: 'Independent Director',
      experience: 'Former CEO of healthcare technology company',
      committees: ['Technology Committee', 'Digital Transformation'],
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Mrs. Anjali Gupta',
      position: 'Independent Director',
      experience: 'Corporate governance expert',
      committees: ['Nominating Committee', 'Compensation Committee'],
      image: '/api/placeholder/150/150'
    }
  ];

  const governanceDocuments = [
    {
      title: 'Corporate Governance Guidelines',
      description: 'Comprehensive framework for corporate governance practices',
      type: 'Policy',
      lastUpdated: 'October 2025',
      downloadUrl: '#'
    },
    {
      title: 'Board Charter',
      description: 'Roles, responsibilities, and authority of the Board of Directors',
      type: 'Charter',
      lastUpdated: 'September 2025',
      downloadUrl: '#'
    },
    {
      title: 'Audit Committee Charter',
      description: 'Purpose, authority, and responsibilities of the Audit Committee',
      type: 'Charter',
      lastUpdated: 'August 2025',
      downloadUrl: '#'
    },
    {
      title: 'Code of Business Conduct & Ethics',
      description: 'Standards of conduct for directors, officers, and employees',
      type: 'Code',
      lastUpdated: 'July 2025',
      downloadUrl: '#'
    },
    {
      title: 'Whistleblower Policy',
      description: 'Reporting mechanism for unethical behavior or violations',
      type: 'Policy',
      lastUpdated: 'June 2025',
      downloadUrl: '#'
    },
    {
      title: 'Related Party Transaction Policy',
      description: 'Guidelines for transactions with related parties',
      type: 'Policy',
      lastUpdated: 'May 2025',
      downloadUrl: '#'
    }
  ];

  const committees = [
    {
      name: 'Audit Committee',
      chair: 'Mrs. Priya Sharma',
      members: ['Mr. Amit Patel', 'Mrs. Anjali Gupta'],
      responsibilities: [
        'Oversee financial reporting and disclosure',
        'Monitor internal controls and risk management',
        'Review audit processes and external auditor independence',
        'Ensure compliance with accounting standards'
      ]
    },
    {
      name: 'Nominating & Compensation Committee',
      chair: 'Mrs. Anjali Gupta',
      members: ['Mr. Vikram Rao', 'Dr. Meera Singh'],
      responsibilities: [
        'Oversee director nominations and succession planning',
        'Review and approve executive compensation',
        'Monitor corporate governance practices',
        'Evaluate board and committee performance'
      ]
    },
    {
      name: 'Risk Management Committee',
      chair: 'Mr. Amit Patel',
      members: ['Mrs. Priya Sharma', 'Dr. Rajesh Kumar'],
      responsibilities: [
        'Identify and assess key business risks',
        'Review risk mitigation strategies',
        'Monitor regulatory compliance risks',
        'Oversee enterprise risk management framework'
      ]
    }
  ];

  const governanceHighlights = [
    {
      title: 'Board Independence',
      description: '60% of board members are independent directors',
      icon: Users
    },
    {
      title: 'Diverse Expertise',
      description: 'Board comprises experts in finance, law, R&D, and technology',
      icon: Award
    },
    {
      title: 'Regular Evaluations',
      description: 'Annual board and committee performance assessments',
      icon: Target
    },
    {
      title: 'Ethical Standards',
      description: 'Zero tolerance policy for unethical behavior',
      icon: Shield
    }
  ];

  const meetings = [
    {
      type: 'Board Meeting',
      date: 'October 28, 2025',
      status: 'Scheduled',
      agenda: 'Q3 Financial Results, Strategic Planning'
    },
    {
      type: 'Audit Committee',
      date: 'October 15, 2025',
      status: 'Completed',
      agenda: 'Financial Statements Review, Risk Assessment'
    },
    {
      type: 'Annual General Meeting',
      date: 'December 15, 2025',
      status: 'Scheduled',
      agenda: 'Annual Report, Dividend Declaration'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">CORPORATE GOVERNANCE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Commitment to Excellence
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              EDIF Pharma maintains the highest standards of corporate governance, ensuring transparency,
              accountability, and ethical business practices across all operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Governance Highlights */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">OUR COMMITMENT</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Governance Highlights
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {governanceHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8 text-center"
              >
                <div className="w-16 h-16 bg-[var(--brand-blue)]/10 flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="text-[var(--brand-blue)]" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] mb-2">{highlight.title}</h3>
                <p className="text-sm text-[var(--text-900)]/70">{highlight.description}</p>
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">BOARD OF DIRECTORS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Leadership & Expertise
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Our board comprises experienced professionals with diverse expertise in pharmaceuticals,
              finance, law, and corporate governance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-8"
              >
                <div className="w-20 h-20 bg-[var(--brand-blue)]/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[var(--brand-blue)]" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-lg text-[var(--text-900)] text-center mb-1">{member.name}</h3>
                <p className="text-sm text-[var(--brand-blue)] text-center mb-3">{member.position}</p>
                <p className="text-sm text-[var(--text-900)]/70 text-center mb-4">{member.experience}</p>
                <div className="space-y-1">
                  <p className="text-xs text-[var(--text-900)]/60">Committee Membership:</p>
                  {member.committees.map((committee) => (
                    <span key={committee} className="inline-block bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs px-2 py-1 mr-1 mb-1">
                      {committee}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Committees */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">COMMITTEES</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Board Committees
            </h2>
          </motion.div>

          <div className="space-y-8">
            {committees.map((committee, index) => (
              <motion.div
                key={committee.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-8"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl text-[var(--text-900)] mb-2">{committee.name}</h3>
                    <p className="text-sm text-[var(--text-900)]/70 mb-4">
                      <strong>Chair:</strong> {committee.chair}
                    </p>
                    <p className="text-sm text-[var(--text-900)]/70 mb-4">
                      <strong>Members:</strong> {committee.members.join(', ')}
                    </p>
                    <div>
                      <p className="text-sm text-[var(--text-900)]/60 mb-2">Key Responsibilities:</p>
                      <ul className="space-y-1">
                        {committee.responsibilities.map((responsibility) => (
                          <li key={responsibility} className="flex items-start gap-2 text-sm text-[var(--text-900)]/70">
                            <CheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} strokeWidth={2} />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Documents */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">DOCUMENTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Governance Documents
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 max-w-2xl mx-auto">
              Access our comprehensive governance framework, policies, and charters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {governanceDocuments.map((document, index) => (
              <motion.div
                key={document.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-[var(--border-color)] p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <FileText className="text-[var(--brand-blue)]" size={24} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-[var(--brand-blue)]/10 text-[var(--brand-blue)] text-xs font-medium">
                        {document.type}
                      </span>
                      <div className="flex items-center gap-1 text-[var(--text-900)]/60 text-sm">
                        <Calendar size={12} strokeWidth={2} />
                        <span>Updated {document.lastUpdated}</span>
                      </div>
                    </div>
                    <h3 className="text-lg text-[var(--text-900)] mb-2">{document.title}</h3>
                    <p className="text-sm text-[var(--text-900)]/70 mb-4">{document.description}</p>
                    <button className="inline-flex items-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                      <Download size={14} strokeWidth={2} />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Meetings */}
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
              <span className="text-sm text-[var(--brand-blue)] tracking-wide">MEETINGS</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-4">
              Board Meeting Schedule
            </h2>
          </motion.div>

          <div className="space-y-4">
            {meetings.map((meeting, index) => (
              <motion.div
                key={`${meeting.type}-${meeting.date}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--surface)] border border-[var(--border-color)] p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg text-[var(--text-900)]">{meeting.type}</h3>
                      <span className={`inline-block px-2 py-1 text-xs font-medium ${
                        meeting.status === 'Completed' ? 'bg-green-50 text-green-700' :
                        meeting.status === 'Scheduled' ? 'bg-blue-50 text-blue-700' :
                        'bg-gray-50 text-gray-700'
                      }`}>
                        {meeting.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-[var(--text-900)]/60 mb-2">
                      <Calendar size={14} strokeWidth={2} />
                      <span>{meeting.date}</span>
                    </div>
                    <p className="text-sm text-[var(--text-900)]/70">{meeting.agenda}</p>
                  </div>
                  {meeting.status === 'Completed' && (
                    <button className="inline-flex items-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-4 py-2 text-sm tracking-wide transition-colors duration-150">
                      <span>View Minutes</span>
                      <ExternalLink size={14} strokeWidth={2} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 md:py-32 bg-[var(--surface)]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
              Investor Relations Contact
            </h2>
            <p className="text-lg text-[var(--text-900)]/60 mb-8 max-w-2xl mx-auto">
              For questions about corporate governance, board matters, or investor relations.
            </p>
            <button className="inline-flex items-center justify-center gap-2 bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]/85 active:bg-[var(--brand-blue)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150">
              <span>Contact Investor Relations</span>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}