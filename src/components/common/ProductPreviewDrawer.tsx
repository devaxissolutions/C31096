import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect } from 'react';

interface ProductPreviewDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestSample: () => void;
  productId?: string;
}

const PRODUCT_DETAILS = {
  'prod-1': {
    name: 'Amoxicillin 500mg Capsules',
    indication: 'Treatment of bacterial infections',
    description: 'Broad-spectrum penicillin antibiotic effective against gram-positive and gram-negative bacteria.',
    dosage: 'Capsules - 500mg',
    packaging: 'Blister pack (10×10)',
    regulatory: 'WHO-GMP, EU GMP, USFDA',
    storage: 'Store below 25°C in a dry place',
  },
  'prod-2': {
    name: 'Metformin 850mg Tablets',
    indication: 'Type 2 diabetes management',
    description: 'First-line oral antidiabetic medication for type 2 diabetes mellitus.',
    dosage: 'Tablets - 850mg',
    packaging: 'Blister pack (10×10)',
    regulatory: 'WHO-GMP, EU GMP',
    storage: 'Store below 30°C',
  },
  'prod-3': {
    name: 'Omeprazole 20mg Capsules',
    indication: 'Gastric acid reduction',
    description: 'Proton pump inhibitor for treatment of GERD, peptic ulcers, and related conditions.',
    dosage: 'Delayed-release capsules - 20mg',
    packaging: 'Blister pack (10×10)',
    regulatory: 'WHO-GMP, EU GMP, USFDA',
    storage: 'Store below 25°C, protect from moisture',
  },
};

export function ProductPreviewDrawer({
  isOpen,
  onClose,
  onRequestSample,
  productId = 'prod-1',
}: ProductPreviewDrawerProps) {
  const product = PRODUCT_DETAILS[productId as keyof typeof PRODUCT_DETAILS] || PRODUCT_DETAILS['prod-1'];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] bg-white shadow-2xl z-50 overflow-y-auto transition-transform duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[var(--border-color)] p-6 flex items-center justify-between">
          <h2 id="drawer-title" className="text-[20px] leading-[28px] font-semibold text-[var(--brand-blue)]">
            Product Details
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-foreground/5 active:bg-foreground/10 transition-colors duration-150"
            aria-label="Close drawer"
          >
            <X size={24} strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-[32px] leading-[40px] font-semibold text-[var(--text-900)] mb-2">
              {product.name}
            </h3>
            <p className="text-[var(--text-900)] opacity-70">{product.indication}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[var(--text-900)] mb-1">Description</h4>
              <p className="text-[var(--text-900)] opacity-70">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-[var(--text-900)] mb-1">Dosage Form</h4>
                <p className="text-[var(--text-900)] opacity-70">{product.dosage}</p>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--text-900)] mb-1">Packaging</h4>
                <p className="text-[var(--text-900)] opacity-70">{product.packaging}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--text-900)] mb-1">Regulatory Approvals</h4>
              <p className="text-[var(--text-900)] opacity-70">{product.regulatory}</p>
            </div>

            <div>
              <h4 className="font-semibold text-[var(--text-900)] mb-1">Storage Conditions</h4>
              <p className="text-[var(--text-900)] opacity-70">{product.storage}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-6 space-y-3">
            <Button
              onClick={() => {
                onClose();
                onRequestSample();
              }}
              className="w-full bg-[var(--accent-red)] hover:bg-[var(--accent-red)]/90 text-white h-12"
            >
              Request Sample
            </Button>
            <Button
              variant="outline"
              className="w-full border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white h-12"
            >
              Download Product Dossier
            </Button>
          </div>

          {/* Additional Info */}
          <div className="pt-6 border-t border-[var(--border-color)]">
            <p className="text-sm text-[var(--text-900)] opacity-60">
              For detailed product information, regulatory documentation, or commercial inquiries, please contact our sales team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
