import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';

interface GalleryCarouselProps {
  onViewFullGallery?: () => void;
}

export function GalleryCarousel({ onViewFullGallery }: GalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1630396814511-340128f6300a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjA3MjgwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'WHO-GMP Manufacturing Plant',
      description: 'State-of-the-art pharmaceutical manufacturing facility',
    },
    {
      url: 'https://images.unsplash.com/photo-1618053238059-cc7761222f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW50aXN0JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYwNzEwNjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'R&D Laboratory',
      description: 'Advanced research and development facility',
    },
    {
      url: 'https://images.unsplash.com/photo-1671108503276-1d3d5ab23a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHF1YWxpdHklMjBjb250cm9sfGVufDF8fHx8MTc2MDcyODA1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Quality Assurance Testing',
      description: 'Rigorous quality control processes',
    },
  ];

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gallery-carousel-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--brand-blue)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-carousel-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-full mb-4">
            <span className="text-sm text-[var(--brand-blue)]">Visual Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--brand-blue)] mb-4">
            Gallery Highlights
          </h2>
          <p className="text-lg text-[var(--text-900)] opacity-70 max-w-2xl mx-auto">
            A glimpse into our world-class facilities and pharmaceutical excellence
          </p>
        </motion.div>

        <div className="relative">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={images[currentIndex].url}
                  alt={images[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl md:text-3xl mb-2">{images[currentIndex].title}</h3>
                    <p className="text-lg text-white/90">{images[currentIndex].description}</p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm transition-colors duration-150 flex items-center justify-center group"
            aria-label="Previous image"
          >
            <ChevronLeft className="text-[var(--brand-blue)]" size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white backdrop-blur-sm transition-colors duration-150 flex items-center justify-center group"
            aria-label="Next image"
          >
            <ChevronRight className="text-[var(--brand-blue)]" size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button
            onClick={onViewFullGallery}
            className="inline-flex items-center gap-2 bg-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/90 text-white px-8 py-6 h-auto"
          >
            <ImageIcon size={20} />
            <span>View Full Gallery</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
