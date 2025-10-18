import { AlertCircle } from 'lucide-react';

interface PVFloatingButtonProps {
  onClick: () => void;
}

export function PVFloatingButton({ onClick }: PVFloatingButtonProps) {
  return (
    <>
      {/* Desktop: Bottom-right floating */}
      <button
        onClick={onClick}
        className="hidden md:flex fixed bottom-8 right-8 bg-[var(--accent-red)] text-white px-5 py-3 shadow-xl hover:bg-[var(--accent-red)]/85 active:bg-[var(--accent-red)]/95 transition-all duration-150 items-center gap-2 z-40 hover:shadow-2xl"
        aria-label="Report adverse event"
      >
        <AlertCircle size={18} strokeWidth={2} aria-hidden="true" />
        <span className="text-sm tracking-wide">REPORT ADVERSE EVENT</span>
      </button>

      {/* Mobile: Top utility (handled in Header component) */}
    </>
  );
}
