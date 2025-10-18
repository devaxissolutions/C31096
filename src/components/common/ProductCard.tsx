import { Button } from '../ui/button';

interface Product {
  id: string;
  name: string;
  indication: string;
  dosage: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      className="border border-[var(--border-color)] rounded-[var(--radius-small)] overflow-hidden bg-white hover:shadow-md transition-shadow duration-200 cursor-pointer"
      onClick={onClick}
      role="article"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Product: ${product.name}`}
    >
      <div className="aspect-[120/80] bg-[var(--surface)] overflow-hidden">
        <img
          src={product.image}
          alt={`${product.name} packaging`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="text-[20px] leading-[28px] font-semibold text-[var(--brand-blue)]">
          {product.name}
        </h3>
        
        <p className="text-sm text-[var(--text-900)] opacity-70">
          {product.indication}
        </p>
        
        <div className="pt-2">
          <span className="inline-block px-3 py-1 bg-[var(--surface)] rounded-full text-xs text-[var(--text-900)]">
            {product.dosage}
          </span>
        </div>
        
        <div className="pt-2">
          <Button
            size="sm"
            variant="ghost"
            className="text-[var(--brand-blue)] hover:bg-[var(--surface)] p-0 h-auto"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            View details →
          </Button>
        </div>
      </div>
    </div>
  );
}
