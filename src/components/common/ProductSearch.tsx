import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Button } from '../ui/button';

interface ProductSearchProps {
  onProductClick: (productId: string) => void;
  onViewAll: () => void;
}

const MOCK_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Amoxicillin 500mg',
    indication: 'Bacterial infections',
    dosage: 'Capsules',
    image: 'https://images.unsplash.com/photo-1616526629520-109a2e4c813f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHByb2R1Y3QlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzYwNjQ2ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'prod-2',
    name: 'Metformin 850mg',
    indication: 'Type 2 diabetes',
    dosage: 'Tablets',
    image: 'https://images.unsplash.com/photo-1616526629520-109a2e4c813f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHByb2R1Y3QlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzYwNjQ2ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'prod-3',
    name: 'Omeprazole 20mg',
    indication: 'Gastric acid reduction',
    dosage: 'Capsules',
    image: 'https://images.unsplash.com/photo-1616526629520-109a2e4c813f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHByb2R1Y3QlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzYwNjQ2ODk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

const SUGGESTIONS = [
  'Amoxicillin',
  'Metformin',
  'Omeprazole',
  'Paracetamol',
  'Ibuprofen',
];

export function ProductSearch({ onProductClick, onViewAll }: ProductSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filteredSuggestions = SUGGESTIONS.filter((s) =>
    s.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-white py-16" id="products">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="space-y-8">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-900)] opacity-40"
                size={20}
                aria-hidden="true"
              />
              <input
                type="search"
                placeholder="Search products, indications, SKUs"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(e.target.value.length > 0);
                }}
                onFocus={() => setShowSuggestions(searchQuery.length > 0)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="w-full pl-12 pr-12 py-4 border border-[var(--border-color)] rounded-[var(--radius-small)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue)] transition-all"
                aria-label="Search products"
              />
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-foreground/5 active:bg-foreground/10 transition-colors duration-150"
                aria-label="Toggle filters"
                aria-expanded={showFilters}
              >
                <Filter size={20} strokeWidth={2} className="text-[var(--text-900)] opacity-40" />
              </button>
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-[var(--border-color)] rounded-[var(--radius-small)] shadow-lg">
                {filteredSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    className="w-full px-4 py-3 text-left hover:bg-[var(--surface)] transition-colors"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setShowSuggestions(false);
                    }}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filter Chips */}
          {showFilters && (
            <div className="flex flex-wrap gap-3 justify-center">
              {['Antibiotics', 'Cardiovascular', 'Diabetes', 'Gastro', 'Pain Relief'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 border border-[var(--border-color)] text-sm tracking-wide hover:bg-foreground/5 active:bg-foreground/10 transition-colors duration-150"
                >
                  {filter}
                </button>
              ))}
            </div>
          )}

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {MOCK_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onProductClick(product.id)}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-8">
            <Button
              onClick={onViewAll}
              variant="outline"
              className="border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white"
            >
              View all products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
