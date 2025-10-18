import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

export function NewsSection() {
  const newsItems = [
    {
      title: 'EDIF Pharma receives WHO-GMP recertification for all facilities',
      summary: 'Successful completion of comprehensive quality audits across manufacturing sites',
      date: '15 Oct 2025',
      category: 'Quality',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800',
    },
    {
      title: 'New partnership with regional distributors in Southeast Asia',
      summary: 'Expanding access to essential medicines across five new markets',
      date: '8 Oct 2025',
      category: 'Expansion',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800',
    },
    {
      title: 'Phase III trial completion for cardiovascular combination therapy',
      summary: 'Promising results in patient outcomes and safety profile',
      date: '1 Oct 2025',
      category: 'R&D',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-[var(--surface)] to-white py-20 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-full mb-4">
              <span className="text-sm text-[var(--brand-blue)]">Latest News</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-4">
              Company Updates
            </h2>
            <p className="text-lg text-[var(--text-900)] opacity-70">
              Stay informed about our latest achievements, partnerships, and innovations
            </p>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.article
              key={index}
              className="group bg-white border border-[var(--border-color)] rounded-2xl overflow-hidden hover:border-[var(--brand-blue)]/30 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface)]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs text-[var(--brand-blue)]">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-[var(--text-900)] opacity-50">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-lg text-[var(--text-900)] leading-snug min-h-[60px] group-hover:text-[var(--brand-blue)] transition-colors">
                  {item.title}
                </h3>
                
                {/* Summary */}
                <p className="text-sm text-[var(--text-900)] opacity-60 leading-relaxed">
                  {item.summary}
                </p>
                
                {/* Read More Link */}
                <button className="inline-flex items-center gap-2 text-sm text-[var(--brand-blue)] hover:gap-3 transition-all duration-200 group/link">
                  <span>Read more</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button
            variant="outline"
            className="border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white px-8 py-6 h-auto transition-all duration-200 group"
          >
            <Newspaper size={18} className="mr-2" />
            <span>View All News</span>
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
