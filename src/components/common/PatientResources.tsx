import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Pill, 
  Phone, 
  FileQuestion, 
  AlertCircle,
  CheckCircle2,
  Info,
  MessageCircle,
  Clock,
  Shield
} from 'lucide-react';
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export function PatientResources() {
  const educationTopics = [
    {
      icon: Pill,
      title: 'Medication Safety',
      description: 'Learn how to safely use, store, and dispose of your medications',
      articles: 12,
    },
    {
      icon: HeartPulse,
      title: 'Disease Management',
      description: 'Information about managing chronic conditions and treatment adherence',
      articles: 18,
    },
    {
      icon: FileQuestion,
      title: 'Understanding Your Treatment',
      description: 'Clear explanations of how your medicines work and what to expect',
      articles: 15,
    },
    {
      icon: Shield,
      title: 'Side Effects & Safety',
      description: 'Recognize and manage side effects, when to contact your doctor',
      articles: 10,
    },
  ];

  const faqs = [
    {
      question: 'How should I store my medications?',
      answer: 'Store medications in a cool, dry place away from direct sunlight and moisture. Unless specified otherwise, room temperature (20-25°C) is ideal. Keep medicines out of reach of children and pets. Never store medications in bathrooms or near heat sources. Always check the product label for specific storage instructions.',
    },
    {
      question: 'What should I do if I miss a dose?',
      answer: 'If you miss a dose, take it as soon as you remember. However, if it\'s almost time for your next scheduled dose, skip the missed dose and continue with your regular dosing schedule. Never double up on doses to make up for a missed one. If you frequently miss doses, consider setting phone reminders or using a pill organizer. Contact your healthcare provider if you have questions.',
    },
    {
      question: 'Can I take my medication with food?',
      answer: 'This depends on the specific medication. Some medicines work best on an empty stomach, while others should be taken with food to reduce stomach upset or improve absorption. Always follow the instructions on your medication label or as directed by your healthcare provider. If you\'re unsure, contact your pharmacist or doctor before making changes.',
    },
    {
      question: 'How do I report a side effect or adverse event?',
      answer: 'If you experience any unexpected or severe side effects, contact your healthcare provider immediately. You can also report adverse events directly to EDIF Pharma through our pharmacovigilance system via phone, email, or the adverse event reporting form on this website. Your report helps us ensure medication safety for all patients.',
    },
    {
      question: 'Can I travel with my medications?',
      answer: 'Yes, but plan ahead. Keep medications in their original labeled containers. Carry a copy of your prescription and a letter from your doctor. Pack medications in your carry-on luggage, not checked baggage. Research destination country regulations for controlled substances. Bring extra medication in case of travel delays. For temperature-sensitive medications, use insulated carriers.',
    },
    {
      question: 'What if my medication looks different than usual?',
      answer: 'Generic and brand medications may look different, and manufacturers occasionally change pill appearance. However, if you notice unexpected changes in your medication\'s color, shape, or size, contact your pharmacist before taking it. Always verify with your pharmacist when picking up prescriptions, especially if switching between generic and brand versions.',
    },
  ];

  const supportServices = [
    {
      icon: Phone,
      title: 'Patient Helpline',
      description: 'Speak with our patient support team',
      availability: 'Mon-Sat, 9 AM - 6 PM',
      contact: '+91-1234-567890',
    },
    {
      icon: MessageCircle,
      title: 'Email Support',
      description: 'Get answers to your questions via email',
      availability: 'Response within 24-48 hours',
      contact: 'patients@edifpharma.com',
    },
    {
      icon: AlertCircle,
      title: 'Adverse Event Reporting',
      description: 'Report medication side effects or concerns',
      availability: '24/7 Emergency Hotline',
      contact: '+91-1234-567899',
    },
  ];

  return (
    <section id="patients" className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="patient-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--brand-blue)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#patient-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-[var(--radius-button)] mb-4">
            <span className="text-sm text-[var(--brand-blue)]">Patient Education & Support</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--brand-blue)] mb-6">
            For Patients
          </h2>
          <p className="text-lg text-[var(--text-900)] opacity-70 max-w-3xl mx-auto leading-relaxed">
            Your health and safety are our top priorities. Access educational resources, 
            safety information, and patient support services.
          </p>
        </motion.div>

        {/* Important Safety Notice */}
        <motion.div
          className="bg-[var(--accent-red)]/5 border-l-4 border-[var(--accent-red)] p-6 rounded-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-start gap-4">
            <AlertCircle className="text-[var(--accent-red)] flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-lg text-[var(--text-900)] mb-2">Important Safety Information</h3>
              <p className="text-sm text-[var(--text-900)] opacity-70 leading-relaxed mb-3">
                The information provided on this website is for educational purposes only and is not a 
                substitute for professional medical advice. Always consult your healthcare provider 
                before starting, stopping, or changing any medication.
              </p>
              <p className="text-sm text-[var(--text-900)] opacity-70 leading-relaxed">
                <strong>In case of medical emergency, call your local emergency services immediately.</strong>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education Topics */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl md:text-3xl text-[var(--brand-blue)] mb-8 text-center">
            Health Education
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={topic.title}
                  className="bg-white border border-[var(--border-color)] p-6 rounded-xl hover:border-[var(--brand-blue)] transition-colors group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--brand-blue)] transition-colors">
                    <Icon size={24} className="text-[var(--brand-blue)] group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg text-[var(--text-900)] mb-2">{topic.title}</h4>
                  <p className="text-sm text-[var(--text-900)] opacity-60 mb-3 leading-relaxed">
                    {topic.description}
                  </p>
                  <div className="text-xs text-[var(--brand-blue)]">
                    {topic.articles} Articles Available
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Medication Safety Tips */}
        <motion.div
          className="bg-[var(--surface)] p-8 md:p-10 rounded-xl border border-[var(--border-color)] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-start gap-4 mb-6">
            <Info size={28} className="text-[var(--brand-blue)] flex-shrink-0" />
            <div>
              <h3 className="text-2xl text-[var(--brand-blue)] mb-2">Medication Safety Tips</h3>
              <p className="text-[var(--text-900)] opacity-70 leading-relaxed">
                Follow these guidelines to ensure safe and effective use of your medications
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Always follow your doctor\'s prescription instructions exactly',
              'Never share your medications with others',
              'Check expiration dates before taking medication',
              'Keep a list of all medications you\'re currently taking',
              'Inform your doctor about all medications, including supplements',
              'Don\'t stop taking prescribed medications without consulting your doctor',
              'Store medications safely away from children and pets',
              'Report any unusual symptoms or side effects promptly',
            ].map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[var(--brand-blue)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--text-900)] opacity-70">{tip}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl text-[var(--brand-blue)] mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-[var(--border-color)] rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="text-[var(--text-900)]">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-[var(--text-900)] opacity-70 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* Support Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl text-[var(--brand-blue)] mb-8 text-center">
            Patient Support Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {supportServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-white border border-[var(--border-color)] p-6 rounded-xl hover:border-[var(--brand-blue)] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[var(--brand-blue)]" />
                  </div>
                  <h4 className="text-lg text-[var(--text-900)] mb-2">{service.title}</h4>
                  <p className="text-sm text-[var(--text-900)] opacity-60 mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[var(--text-900)] opacity-50 mb-3">
                    <Clock size={14} />
                    <span>{service.availability}</span>
                  </div>
                  <div className="text-sm text-[var(--brand-blue)]">{service.contact}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] p-8 md:p-10 rounded-xl text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-2xl mb-3">Have Questions About Your Medication?</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Our patient support team is here to help. Contact us for medication information, 
            safety questions, or to report an adverse event.
          </p>
          <Button
            className="bg-white text-[var(--brand-blue)] hover:bg-white/90 px-8 h-auto py-3"
          >
            Contact Patient Support
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
