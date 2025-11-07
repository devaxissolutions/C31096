import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Button } from '../ui/button';
import { useProducts } from '../../hooks/useFirestoreCollection';
import { firestoreToRegular } from '../../lib/typeConverters';

interface ProductSearchProps {
  onProductClick: (productId: string) => void;
  onViewAll: () => void;
}

export function ProductSearch({ onProductClick, onViewAll }: ProductSearchProps) {
  const { data: firestoreProducts, loading } = useProducts({ filters: [{ field: 'isActive', operator: '==', value: true }] });
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Convert Firestore products to display format
  const products = firestoreProducts
    .map(firestoreToRegular)
    .filter(product => product.isActive)
    .map(product => ({
      id: product.id,
      name: product.name,
      indication: product.description || 'Pharmaceutical product',
      dosage: product.category || 'Various forms',
      image: product.images?.[0] || '/images/product-placeholder.jpg',
    }));

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.indication.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Generate suggestions from product names
  const suggestions = products.map(p => p.name);
  const filteredSuggestions = suggestions.filter((s) =>
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
            {loading ? (
              <div className="col-span-full text-center py-8">Loading products...</div>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => onProductClick(product.id)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-[var(--text-900)] opacity-70">
                No products found matching your search.
              </div>
            )}
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
