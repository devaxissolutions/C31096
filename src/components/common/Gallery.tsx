import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { Button } from '../ui/button';

interface GalleryImage {
  id: string;
  url: string;
  category: string;
  title: string;
  description: string;
}

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const categories = ['All', 'Facilities', 'Research', 'Team', 'Quality Control', 'Products'];

  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1630396814511-340128f6300a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmclMjBmYWNpbGl0eXxlbnwxfHx8fDE3NjA3MjgwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Facilities',
      title: 'WHO-GMP Manufacturing Plant',
      description: 'State-of-the-art pharmaceutical manufacturing facility certified to WHO-GMP standards',
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1618053238059-cc7761222f2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwc2NpZW50aXN0JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYwNzEwNjEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Research',
      title: 'R&D Laboratory',
      description: 'Advanced research and development laboratory for pharmaceutical innovation',
    },
    {
      id: '3',
      url: 'https://images.unsplash.com/photo-1758206523745-1f334f702660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzYwNjM4MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Team',
      title: 'Healthcare Professionals',
      description: 'Our dedicated team of medical and pharmaceutical experts',
    },
    {
      id: '4',
      url: 'https://images.unsplash.com/photo-1671108503276-1d3d5ab23a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHF1YWxpdHklMjBjb250cm9sfGVufDF8fHx8MTc2MDcyODA1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Quality Control',
      title: 'Quality Assurance Testing',
      description: 'Rigorous quality control processes ensuring pharmaceutical excellence',
    },
    {
      id: '5',
      url: 'https://images.unsplash.com/photo-1758269445774-61a540a290a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NjA3MDUzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Facilities',
      title: 'Production Line',
      description: 'Automated production systems with precision manufacturing capabilities',
    },
    {
      id: '6',
      url: 'https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjA3MjgwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Research',
      title: 'Laboratory Equipment',
      description: 'Cutting-edge analytical and testing equipment for pharmaceutical research',
    },
    {
      id: '7',
      url: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MDY4NzA2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Team',
      title: 'Leadership Team',
      description: 'Executive leadership driving pharmaceutical innovation and global healthcare impact',
    },
    {
      id: '8',
      url: 'https://images.unsplash.com/photo-1610542443439-279b81fba808?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHBpbGxzJTIwbWVkaWNpbmV8ZW58MXx8fHwxNzYwNjEyMjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Products',
      title: 'Pharmaceutical Products',
      description: 'High-quality medicines serving global healthcare needs',
    },
  ];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gallery-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--brand-blue)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-[var(--radius-button)] mb-4">
            <span className="text-sm text-[var(--brand-blue)]">Our Story in Pictures</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--brand-blue)] mb-4">
            Gallery
          </h2>
          <p className="text-lg text-[var(--text-900)] opacity-70 max-w-2xl mx-auto">
            Explore our world-class facilities, dedicated team, and commitment to pharmaceutical excellence
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 border text-sm tracking-wide transition-colors duration-150 ${
                selectedCategory === category
                  ? 'bg-[var(--brand-blue)] text-white border-[var(--brand-blue)]'
                  : 'bg-white text-[var(--text-900)] border-[var(--border-color)] hover:bg-foreground/5 active:bg-foreground/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-[4/3] bg-[var(--surface)] rounded-xl overflow-hidden border border-[var(--border-color)] cursor-pointer"
                onClick={() => setLightboxImage(image)}
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg leading-tight">{image.title}</h3>
                      <ZoomIn size={20} className="flex-shrink-0 mt-1" />
                    </div>
                    <p className="text-sm text-white/80 line-clamp-2">{image.description}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-[var(--radius-button)] text-xs text-[var(--brand-blue)]">
                  {image.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <ImageIcon size={48} className="mx-auto mb-4 text-[var(--text-900)] opacity-30" />
            <p className="text-[var(--text-900)] opacity-60">No images found in this category</p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          className="mt-16 pt-12 border-t border-[var(--border-color)] grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">3</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">WHO-GMP Facilities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">500+</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">25+</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">45+</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Countries Served</div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm transition-colors duration-150 z-10"
              aria-label="Close lightbox"
            >
              <X size={24} strokeWidth={2} className="text-white" />
            </button>

            {/* Image Container */}
            <motion.div
              className="relative max-w-6xl w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />

              {/* Image Info */}
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-[var(--radius-button)] text-xs text-white/60 mb-3">
                  {lightboxImage.category}
                </div>
                <h3 className="text-2xl text-white mb-2">{lightboxImage.title}</h3>
                <p className="text-white/70 max-w-2xl mx-auto">{lightboxImage.description}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
