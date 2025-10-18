import { HeroRedesign } from '../components/layout/HeroRedesign';
import { TrustStrip } from '../components/layout/TrustStrip';
import { TherapeuticAreas } from '../components/common/TherapeuticAreas';
import { ProductSearch } from '../components/common/ProductSearch';
import { RDPipeline } from '../components/common/RDPipeline';
import { ManufacturingSnapshot } from '../components/common/ManufacturingSnapshot';
import { GlobalPresence } from '../components/common/GlobalPresence';
import { CertificationsShowcase } from '../components/common/CertificationsShowcase';
import { TestimonialsSection } from '../components/common/TestimonialsSection';
import { GalleryCarousel } from '../components/common/GalleryCarousel';
import { NewsSection } from '../components/common/NewsSection';
import { CTASection } from '../components/common/CTASection';

interface HomePageProps {
  onProductClick: (productId: string) => void;
  onViewAllProducts: () => void;
  onRequestSample: () => void;
  onExploreProducts: () => void;
  onViewGallery: () => void;
}

export function HomePage({
  onProductClick,
  onViewAllProducts,
  onRequestSample,
  onExploreProducts,
  onViewGallery
}: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroRedesign
        onExploreProducts={onExploreProducts}
        onRequestSample={onRequestSample}
      />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Therapeutic Areas Preview */}
      <TherapeuticAreas />

      {/* Product Search Preview */}
      <ProductSearch
        onProductClick={onProductClick}
        onViewAll={onViewAllProducts}
      />

      {/* R&D Pipeline Preview */}
      <RDPipeline />

      {/* Manufacturing Snapshot */}
      <ManufacturingSnapshot />

      {/* Global Presence Preview */}
      <GlobalPresence />

      {/* Certifications Showcase */}
      <CertificationsShowcase />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* News Section */}
      <NewsSection />

      {/* Gallery Carousel */}
      <GalleryCarousel onViewFullGallery={onViewGallery} />

      {/* CTA Section */}
      <CTASection onRequestSample={onRequestSample} />
    </>
  );
}
