import { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface PVFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormStep = 1 | 2 | 3 | 4;

export function PVFormModal({ isOpen, onClose }: PVFormModalProps) {
  const [step, setStep] = useState<FormStep>(1);
  const [caseId, setCaseId] = useState('');
  const [formData, setFormData] = useState({
    reporterName: '',
    reporterEmail: '',
    reporterPhone: '',
    reporterType: '',
    patientInitials: '',
    patientAge: '',
    patientGender: '',
    eventDescription: '',
    eventDate: '',
    productName: '',
    severity: '',
    outcome: '',
    files: [] as File[],
  });

  const generateCaseId = () => {
    const id = `EDIF-${Math.floor(10000 + Math.random() * 90000)}`;
    setCaseId(id);
  };

  const handleSubmit = () => {
    generateCaseId();
    setStep(4);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setCaseId('');
      setFormData({
        reporterName: '',
        reporterEmail: '',
        reporterPhone: '',
        reporterType: '',
        patientInitials: '',
        patientAge: '',
        patientGender: '',
        eventDescription: '',
        eventDate: '',
        productName: '',
        severity: '',
        outcome: '',
        files: [],
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-[var(--radius-large)] shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pv-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[var(--border-color)] p-6 rounded-t-[var(--radius-large)]">
          <div className="flex items-center justify-between mb-4">
            <h2 id="pv-modal-title" className="text-[20px] leading-[28px] font-semibold text-[var(--accent-red)]">
              Report Adverse Event
            </h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-foreground/5 active:bg-foreground/10 transition-colors duration-150"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>

          {/* Progress Bar */}
          {step < 4 && (
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-1 rounded-full transition-colors ${
                    s <= step ? 'bg-[var(--accent-red)]' : 'bg-gray-200'
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          )}

          <p className="text-sm text-[var(--text-900)] opacity-60 mt-4">
            Immediate reports processed by our PV team
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Step 1: Reporter Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-[var(--text-900)] mb-4">Reporter Information</h3>
              
              <div className="space-y-2">
                <Label htmlFor="reporterName">Full Name *</Label>
                <Input
                  id="reporterName"
                  required
                  value={formData.reporterName}
                  onChange={(e) => setFormData({ ...formData, reporterName: e.target.value })}
                  className="border-[var(--border-color)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reporterEmail">Email Address *</Label>
                <Input
                  id="reporterEmail"
                  type="email"
                  required
                  value={formData.reporterEmail}
                  onChange={(e) => setFormData({ ...formData, reporterEmail: e.target.value })}
                  className="border-[var(--border-color)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reporterPhone">Phone Number</Label>
                <Input
                  id="reporterPhone"
                  type="tel"
                  value={formData.reporterPhone}
                  onChange={(e) => setFormData({ ...formData, reporterPhone: e.target.value })}
                  className="border-[var(--border-color)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reporterType">Reporter Type *</Label>
                <Select
                  required
                  value={formData.reporterType}
                  onValueChange={(value) => setFormData({ ...formData, reporterType: value })}
                >
                  <SelectTrigger id="reporterType" className="border-[var(--border-color)]">
                    <SelectValue placeholder="Select reporter type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physician">Physician</SelectItem>
                    <SelectItem value="pharmacist">Pharmacist</SelectItem>
                    <SelectItem value="patient">Patient</SelectItem>
                    <SelectItem value="caregiver">Caregiver</SelectItem>
                    <SelectItem value="other">Other Healthcare Professional</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4 flex justify-end">
                <Button
                  onClick={() => setStep(2)}
                  className="bg-[var(--accent-red)] hover:bg-[var(--accent-red)]/90 text-white"
                  disabled={!formData.reporterName || !formData.reporterEmail || !formData.reporterType}
                >
                  Next: Patient Info
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Patient Information */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-[var(--text-900)] mb-4">Patient Information</h3>
              
              <div className="space-y-2">
                <Label htmlFor="patientInitials">Patient Initials *</Label>
                <Input
                  id="patientInitials"
                  required
                  placeholder="e.g., A.B."
                  value={formData.patientInitials}
                  onChange={(e) => setFormData({ ...formData, patientInitials: e.target.value })}
                  className="border-[var(--border-color)]"
                />
                <p className="text-sm text-[var(--text-900)] opacity-60">
                  For privacy, use initials only
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patientAge">Age</Label>
                  <Input
                    id="patientAge"
                    type="number"
                    value={formData.patientAge}
                    onChange={(e) => setFormData({ ...formData, patientAge: e.target.value })}
                    className="border-[var(--border-color)]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="patientGender">Gender</Label>
                  <Select
                    value={formData.patientGender}
                    onValueChange={(value) => setFormData({ ...formData, patientGender: value })}
                  >
                    <SelectTrigger id="patientGender" className="border-[var(--border-color)]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="unknown">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  className="bg-[var(--accent-red)] hover:bg-[var(--accent-red)]/90 text-white"
                  disabled={!formData.patientInitials}
                >
                  Next: Event Details
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Event Details */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-[var(--text-900)] mb-4">Event Details</h3>
              
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name *</Label>
                <Input
                  id="productName"
                  required
                  placeholder="e.g., Amoxicillin 500mg"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="border-[var(--border-color)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventDate">Date of Event *</Label>
                <Input
                  id="eventDate"
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="border-[var(--border-color)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventDescription">Event Description *</Label>
                <Textarea
                  id="eventDescription"
                  required
                  placeholder="Describe the adverse event in detail..."
                  value={formData.eventDescription}
                  onChange={(e) => setFormData({ ...formData, eventDescription: e.target.value })}
                  className="border-[var(--border-color)] min-h-32"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="severity">Severity *</Label>
                  <Select
                    required
                    value={formData.severity}
                    onValueChange={(value) => setFormData({ ...formData, severity: value })}
                  >
                    <SelectTrigger id="severity" className="border-[var(--border-color)]">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mild">Mild</SelectItem>
                      <SelectItem value="moderate">Moderate</SelectItem>
                      <SelectItem value="severe">Severe</SelectItem>
                      <SelectItem value="life-threatening">Life-threatening</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="outcome">Outcome</Label>
                  <Select
                    value={formData.outcome}
                    onValueChange={(value) => setFormData({ ...formData, outcome: value })}
                  >
                    <SelectTrigger id="outcome" className="border-[var(--border-color)]">
                      <SelectValue placeholder="Select outcome" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recovered">Recovered</SelectItem>
                      <SelectItem value="recovering">Recovering</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                      <SelectItem value="unknown">Unknown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="file-upload">Upload Supporting Documents</Label>
                <div className="border-2 border-dashed border-[var(--border-color)] rounded-[var(--radius-small)] p-6 text-center hover:border-[var(--brand-blue)] transition-colors">
                  <Upload className="mx-auto mb-2 text-[var(--text-900)] opacity-40" size={32} aria-hidden="true" />
                  <p className="text-sm text-[var(--text-900)] opacity-70 mb-2">
                    Drop files here or click to browse
                  </p>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files) {
                        setFormData({ ...formData, files: Array.from(e.target.files) });
                      }
                    }}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    Select Files
                  </Button>
                </div>
                {formData.files.length > 0 && (
                  <p className="text-sm text-[var(--text-900)]">
                    {formData.files.length} file(s) selected
                  </p>
                )}
              </div>

              <div className="pt-4 flex justify-between">
                <Button variant="outline" onClick={() => setStep(2)}>
                  Back
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="bg-[var(--accent-red)] hover:bg-[var(--accent-red)]/90 text-white"
                  disabled={
                    !formData.productName ||
                    !formData.eventDate ||
                    !formData.eventDescription ||
                    !formData.severity
                  }
                >
                  Submit Report
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-[20px] leading-[28px] font-semibold text-[var(--text-900)] mb-2">
                Thank you — case #{caseId} has been received
              </h3>
              <p className="text-[var(--text-900)] opacity-70 mb-6">
                Our PV team will contact you within 48 hours.
              </p>
              <p className="text-sm text-[var(--text-900)] opacity-60 mb-6">
                A confirmation email has been sent to {formData.reporterEmail}
              </p>
              <Button
                onClick={handleClose}
                className="bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/90 text-white"
              >
                Close
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
