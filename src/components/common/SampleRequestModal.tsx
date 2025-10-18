import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SampleRequestModal({ isOpen, onClose }: SampleRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    role: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setFormData({ name: '', organization: '', email: '', role: '' });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-[var(--radius-large)] shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="sample-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--border-color)]">
          <h2 id="sample-modal-title" className="text-[20px] leading-[28px] font-semibold text-[var(--brand-blue)]">
            Request a Sample
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-foreground/5 active:bg-foreground/10 transition-colors duration-150"
            aria-label="Close modal"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Dr. John Doe"
                  className="border-[var(--border-color)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">Organization *</Label>
                <Input
                  id="organization"
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="Hospital / Clinic / Distributor"
                  className="border-[var(--border-color)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Professional Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email@organization.com"
                  className="border-[var(--border-color)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Professional Role *</Label>
                <Select
                  required
                  value={formData.role}
                  onValueChange={(value) => setFormData({ ...formData, role: value })}
                >
                  <SelectTrigger id="role" className="border-[var(--border-color)]">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physician">Physician</SelectItem>
                    <SelectItem value="pharmacist">Pharmacist</SelectItem>
                    <SelectItem value="distributor">Distributor</SelectItem>
                    <SelectItem value="procurement">Procurement Officer</SelectItem>
                    <SelectItem value="researcher">Researcher</SelectItem>
                    <SelectItem value="other">Other Healthcare Professional</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <p className="text-sm text-[var(--text-900)] opacity-60 pt-2">
                Sample requests are verified for professional use only. You will receive a confirmation email within 24-48 hours.
              </p>

              <div className="pt-4 flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[var(--accent-red)] hover:bg-[var(--accent-red)]/90 text-white"
                >
                  Submit Request
                </Button>
              </div>
            </form>
          ) : (
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
                Request Submitted
              </h3>
              <p className="text-[var(--text-900)] opacity-70">
                We'll review your request and contact you within 24-48 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
