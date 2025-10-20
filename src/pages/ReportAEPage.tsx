import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Clock, Phone, Mail, FileText, Users, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function ReportAEPage() {
  const [formData, setFormData] = useState({
    reporterType: 'healthcare-professional',
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    reporterInstitution: '',
    patientAge: '',
    patientGender: 'not-specified',
    patientInitials: '',
    eventDescription: '',
    eventDate: '',
    productName: '',
    batchNumber: '',
    dosage: '',
    indication: '',
    concomitantMedications: '',
    medicalHistory: '',
    outcome: 'unknown',
    seriousness: 'non-serious',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Adverse event report submitted successfully. Reference number: AE-' + Date.now().toString().slice(-6));
    setFormData({
      reporterType: 'healthcare-professional',
      reporterName: '',
      reporterEmail: '',
      reporterPhone: '',
      reporterInstitution: '',
      patientAge: '',
      patientGender: 'not-specified',
      patientInitials: '',
      eventDescription: '',
      eventDate: '',
      productName: '',
      batchNumber: '',
      dosage: '',
      indication: '',
      concomitantMedications: '',
      medicalHistory: '',
      outcome: 'unknown',
      seriousness: 'non-serious',
      additionalInfo: ''
    });
  };

  const emergencyContacts = [
    {
      region: 'Global Emergency',
      phone: '+1 (555) 911-0000',
      email: 'emergency@edifpharma.com',
      hours: '24/7'
    },
    {
      region: 'Europe',
      phone: '+41 22 555 0199',
      email: 'eu.emergency@edifpharma.com',
      hours: '24/7'
    },
    {
      region: 'Asia-Pacific',
      phone: '+65 6555 7999',
      email: 'apac.emergency@edifpharma.com',
      hours: '24/7'
    }
  ];

  const reportingGuidelines = [
    {
      icon: Clock,
      title: 'Report Immediately',
      description: 'Serious adverse events should be reported within 15 calendar days. Non-serious events within 30 days.'
    },
    {
      icon: FileText,
      title: 'Complete Information',
      description: 'Provide as much detail as possible about the event, patient, and medication to ensure proper assessment.'
    },
    {
      icon: Users,
      title: 'Patient Privacy',
      description: 'Patient identifiable information is kept confidential and used only for safety monitoring purposes.'
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'All reports are handled in accordance with FDA, EMA, and other regulatory requirements.'
    }
  ];

  const faqs = [
    {
      question: 'What constitutes a serious adverse event?',
      answer: 'A serious adverse event includes death, life-threatening illness, hospitalization, disability, congenital anomaly, or other medically important conditions.'
    },
    {
      question: 'Do I need to report if I\'m not sure?',
      answer: 'When in doubt, please report. It\'s better to report and let our safety team assess than to miss a potential safety signal.'
    },
    {
      question: 'How quickly will I receive confirmation?',
      answer: 'You will receive an acknowledgment within 24 hours, and a reference number for tracking your report.'
    },
    {
      question: 'Is my report anonymous?',
      answer: 'You can choose to remain anonymous, but providing contact information helps us follow up for additional details if needed.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--accent-red)] to-[#8b1a1a] text-white py-20 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm mb-6">
              <span className="text-sm tracking-wide">PHARMACOVIGILANCE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Report Adverse Event
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Your vigilance helps ensure patient safety. Report any adverse events or medication errors
              to help us maintain the highest standards of pharmaceutical safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-12 bg-[var(--accent-red)]/5 border-b border-[var(--border-color)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--accent-red)]/10 flex items-center justify-center">
                <AlertTriangle className="text-[var(--accent-red)]" size={24} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-lg text-[var(--text-900)] font-medium">Emergency Reporting</h3>
                <p className="text-sm text-[var(--text-900)]/70">For life-threatening situations</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              {emergencyContacts.map((contact, index) => (
                <div key={contact.region} className="text-center">
                  <div className="text-sm text-[var(--text-900)]/70 mb-1">{contact.region}</div>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-[var(--accent-red)] hover:opacity-70 transition-opacity font-medium">
                    {contact.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reporting Form */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="inline-block px-4 py-2 bg-[var(--accent-red)]/10 mb-6">
                <span className="text-sm text-[var(--accent-red)] tracking-wide">ADVERSE EVENT REPORT</span>
              </div>
              <h2 className="text-3xl md:text-4xl text-[var(--text-900)] mb-6">
                Submit Your Report
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Reporter Information */}
                <div className="bg-[var(--surface)] border border-[var(--border-color)] p-6">
                  <h3 className="text-lg text-[var(--text-900)] mb-4 flex items-center gap-2">
                    <Users size={18} strokeWidth={2} className="text-[var(--accent-red)]" />
                    Reporter Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="reporterType" className="block text-sm text-[var(--text-900)] mb-2">
                        Reporter Type *
                      </label>
                      <select
                        id="reporterType"
                        required
                        value={formData.reporterType}
                        onChange={(e) => setFormData({ ...formData, reporterType: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                      >
                        <option value="healthcare-professional">Healthcare Professional</option>
                        <option value="patient">Patient</option>
                        <option value="patient-family">Patient Family Member</option>
                        <option value="pharmacist">Pharmacist</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="reporterName" className="block text-sm text-[var(--text-900)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="reporterName"
                        required
                        value={formData.reporterName}
                        onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        placeholder="Dr. Jane Smith"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="reporterEmail" className="block text-sm text-[var(--text-900)] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="reporterEmail"
                        required
                        value={formData.reporterEmail}
                        onChange={(e) => setFormData({ ...formData, reporterEmail: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        placeholder="jane.smith@hospital.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="reporterPhone" className="block text-sm text-[var(--text-900)] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="reporterPhone"
                        value={formData.reporterPhone}
                        onChange={(e) => setFormData({ ...formData, reporterPhone: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div>
                      <label htmlFor="reporterInstitution" className="block text-sm text-[var(--text-900)] mb-2">
                        Institution
                      </label>
                      <input
                        type="text"
                        id="reporterInstitution"
                        value={formData.reporterInstitution}
                        onChange={(e) => setFormData({ ...formData, reporterInstitution: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        placeholder="City General Hospital"
                      />
                    </div>
                  </div>
                </div>

                {/* Patient Information */}
                <div className="bg-[var(--surface)] border border-[var(--border-color)] p-6">
                  <h3 className="text-lg text-[var(--text-900)] mb-4 flex items-center gap-2">
                    <Shield size={18} strokeWidth={2} className="text-[var(--accent-red)]" />
                    Patient Information (Anonymous if preferred)
                  </h3>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label htmlFor="patientInitials" className="block text-sm text-[var(--text-900)] mb-2">
                        Patient Initials
                      </label>
                      <input
                        type="text"
                        id="patientInitials"
                        value={formData.patientInitials}
                        onChange={(e) => setFormData({ ...formData, patientInitials: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        placeholder="J.S."
                        maxLength={5}
                      />
                    </div>

                    <div>
                      <label htmlFor="patientAge" className="block text-sm text-[var(--text-900)] mb-2">
                        Age (years)
                      </label>
                      <input
                        type="number"
                        id="patientAge"
                        value={formData.patientAge}
                        onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        placeholder="45"
                        min="0"
                        max="150"
                      />
                    </div>

                    <div>
                      <label htmlFor="patientGender" className="block text-sm text-[var(--text-900)] mb-2">
                        Gender
                      </label>
                      <select
                        id="patientGender"
                        value={formData.patientGender}
                        onChange={(e) => setFormData({ ...formData, patientGender: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                      >
                        <option value="not-specified">Not Specified</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="bg-[var(--surface)] border border-[var(--border-color)] p-6">
                  <h3 className="text-lg text-[var(--text-900)] mb-4 flex items-center gap-2">
                    <AlertCircle size={18} strokeWidth={2} className="text-[var(--accent-red)]" />
                    Adverse Event Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="eventDescription" className="block text-sm text-[var(--text-900)] mb-2">
                        Event Description *
                      </label>
                      <textarea
                        id="eventDescription"
                        required
                        rows={4}
                        value={formData.eventDescription}
                        onChange={(e) => setFormData({ ...formData, eventDescription: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors resize-none"
                        placeholder="Please describe the adverse event in detail, including symptoms, timing, and any actions taken..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="eventDate" className="block text-sm text-[var(--text-900)] mb-2">
                          Event Date *
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="outcome" className="block text-sm text-[var(--text-900)] mb-2">
                          Patient Outcome
                        </label>
                        <select
                          id="outcome"
                          value={formData.outcome}
                          onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                          className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        >
                          <option value="unknown">Unknown</option>
                          <option value="recovered">Recovered</option>
                          <option value="recovering">Recovering</option>
                          <option value="not-recovered">Not Recovered</option>
                          <option value="fatal">Fatal</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="seriousness" className="block text-sm text-[var(--text-900)] mb-2">
                        Seriousness *
                      </label>
                      <select
                        id="seriousness"
                        required
                        value={formData.seriousness}
                        onChange={(e) => setFormData({ ...formData, seriousness: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                      >
                        <option value="non-serious">Non-serious</option>
                        <option value="serious">Serious (requires immediate attention)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Product Information */}
                <div className="bg-[var(--surface)] border border-[var(--border-color)] p-6">
                  <h3 className="text-lg text-[var(--text-900)] mb-4 flex items-center gap-2">
                    <FileText size={18} strokeWidth={2} className="text-[var(--accent-red)]" />
                    Product Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="productName" className="block text-sm text-[var(--text-900)] mb-2">
                        Product Name *
                      </label>
                      <input
                        type="text"
                        id="productName"
                        required
                        value={formData.productName}
                        onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        placeholder="CardioMax 50mg"
                      />
                    </div>

                    <div>
                      <label htmlFor="batchNumber" className="block text-sm text-[var(--text-900)] mb-2">
                        Batch/Lot Number
                      </label>
                      <input
                        type="text"
                        id="batchNumber"
                        value={formData.batchNumber}
                        onChange={(e) => setFormData({ ...formData, batchNumber: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        placeholder="BT2025001"
                      />
                    </div>

                    <div>
                      <label htmlFor="dosage" className="block text-sm text-[var(--text-900)] mb-2">
                        Dosage/Strength
                      </label>
                      <input
                        type="text"
                        id="dosage"
                        value={formData.dosage}
                        onChange={(e) => setFormData({ ...formData, dosage: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        placeholder="50mg tablets"
                      />
                    </div>

                    <div>
                      <label htmlFor="indication" className="block text-sm text-[var(--text-900)] mb-2">
                        Indication (use)
                      </label>
                      <input
                        type="text"
                        id="indication"
                        value={formData.indication}
                        onChange={(e) => setFormData({ ...formData, indication: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors"
                        placeholder="Hypertension"
                      />
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="concomitantMedications" className="block text-sm text-[var(--text-900)] mb-2">
                        Concomitant Medications
                      </label>
                      <textarea
                        id="concomitantMedications"
                        rows={2}
                        value={formData.concomitantMedications}
                        onChange={(e) => setFormData({ ...formData, concomitantMedications: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors resize-none"
                        placeholder="List other medications the patient was taking..."
                      />
                    </div>

                    <div>
                      <label htmlFor="medicalHistory" className="block text-sm text-[var(--text-900)] mb-2">
                        Relevant Medical History
                      </label>
                      <textarea
                        id="medicalHistory"
                        rows={2}
                        value={formData.medicalHistory}
                        onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
                        className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors resize-none"
                        placeholder="Any relevant medical conditions, allergies, or history..."
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-[var(--surface)] border border-[var(--border-color)] p-6">
                  <h3 className="text-lg text-[var(--text-900)] mb-4 flex items-center gap-2">
                    <Info size={18} strokeWidth={2} className="text-[var(--accent-red)]" />
                    Additional Information
                  </h3>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm text-[var(--text-900)] mb-2">
                      Any Additional Details
                    </label>
                    <textarea
                      id="additionalInfo"
                      rows={3}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="w-full px-4 py-3 border border-[var(--border-color)] focus:border-[var(--accent-red)] focus:outline-none transition-colors resize-none"
                      placeholder="Any other relevant information, test results, or observations..."
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[var(--accent-red)]/5 border border-[var(--accent-red)]/20">
                  <Info size={20} strokeWidth={2} className="text-[var(--accent-red)] mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-[var(--text-900)]/80">
                    <p className="mb-2">
                      <strong>Privacy Notice:</strong> Patient identifiable information will be kept confidential and used only for safety monitoring purposes in accordance with applicable regulations.
                    </p>
                    <p>
                      By submitting this report, you confirm that the information provided is accurate to the best of your knowledge.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--accent-red)] text-white hover:bg-[var(--accent-red)]/85 active:bg-[var(--accent-red)]/95 px-8 py-4 text-sm tracking-wide transition-colors duration-150 w-full group"
                >
                  <span>SUBMIT ADVERSE EVENT REPORT</span>
                  <CheckCircle className="group-hover:scale-110 transition-transform duration-150" size={16} strokeWidth={2} />
                </button>

                <p className="text-xs text-[var(--text-900)]/60 text-center">
                  * Required fields. Reports are reviewed by qualified pharmacovigilance professionals.
                </p>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Guidelines */}
              <div className="bg-[var(--surface)] border border-[var(--border-color)] p-6">
                <h3 className="text-lg text-[var(--text-900)] mb-4">Reporting Guidelines</h3>
                <div className="space-y-4">
                  {reportingGuidelines.map((guideline, index) => (
                    <div key={guideline.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[var(--accent-red)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <guideline.icon className="text-[var(--accent-red)]" size={16} strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="text-sm text-[var(--text-900)] font-medium mb-1">{guideline.title}</h4>
                        <p className="text-xs text-[var(--text-900)]/70 leading-relaxed">{guideline.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contacts */}
              <div className="bg-gradient-to-br from-[var(--accent-red)] to-[#8b1a1a] text-white p-6">
                <h3 className="text-lg mb-4 flex items-center gap-2">
                  <AlertTriangle size={18} strokeWidth={2} />
                  Emergency Contacts
                </h3>
                <div className="space-y-3">
                  {emergencyContacts.map((contact) => (
                    <div key={contact.region} className="border-b border-white/20 pb-3 last:border-0 last:pb-0">
                      <div className="text-sm font-medium mb-1">{contact.region}</div>
                      <div className="text-sm text-white/80">{contact.hours}</div>
                      <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="text-sm hover:opacity-70 transition-opacity block">
                        {contact.phone}
                      </a>
                      <a href={`mailto:${contact.email}`} className="text-sm hover:opacity-70 transition-opacity block">
                        {contact.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-[var(--surface)] border border-[var(--border-color)] p-6">
                <h3 className="text-lg text-[var(--text-900)] mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-[var(--border-color)] pb-4 last:border-0 last:pb-0">
                      <h4 className="text-sm text-[var(--text-900)] font-medium mb-2">{faq.question}</h4>
                      <p className="text-xs text-[var(--text-900)]/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}