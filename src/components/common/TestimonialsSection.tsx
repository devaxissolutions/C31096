import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Cardiologist',
      hospital: 'Metropolitan Heart Institute',
      country: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400',
      quote: 'EDIF Pharma\'s cardiovascular line has been exceptional. The consistency in quality and reliable supply chain have made them our primary partner for critical medications.',
      rating: 5,
      specialization: 'Cardiology',
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Medical Director',
      hospital: 'Apollo Healthcare Group',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400',
      quote: 'The WHO-GMP certification and rigorous quality standards give us complete confidence. Their diabetic care products have significantly improved patient outcomes in our facilities.',
      rating: 5,
      specialization: 'Endocrinology',
    },
    {
      name: 'Dr. Maria Santos',
      role: 'Head of Pharmacy',
      hospital: 'São Paulo Medical Center',
      country: 'Brazil',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400',
      quote: 'Outstanding pharmaceutical partner. Their commitment to accessibility and affordability while maintaining premium quality standards sets them apart in the industry.',
      rating: 5,
      specialization: 'Clinical Pharmacy',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[var(--surface)] via-white to-[var(--surface)]">
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
              <span className="text-sm text-[var(--brand-blue)]">Trusted Globally</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-4">
              What Healthcare Professionals Say
            </h2>
            <p className="text-lg text-[var(--text-900)] opacity-70">
              Hear from medical professionals who trust EDIF Pharma for their patients' care.
            </p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative bg-white border border-[var(--border-color)] rounded-2xl p-8 hover:border-[var(--brand-blue)]/30 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={64} className="text-[var(--brand-blue)]" />
              </div>

              <div className="relative">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[var(--text-900)] opacity-80 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[var(--border-color)] to-transparent mb-6" />

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[var(--brand-blue)]/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[var(--text-900)] mb-0.5">{testimonial.name}</div>
                    <div className="text-sm text-[var(--text-900)] opacity-60">{testimonial.role}</div>
                    <div className="text-xs text-[var(--text-900)] opacity-50">{testimonial.hospital}</div>
                  </div>
                </div>

                {/* Badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--surface)] rounded-full">
                  <span className="text-xs text-[var(--brand-blue)]">{testimonial.specialization}</span>
                  <span className="text-xs text-[var(--text-900)] opacity-40">•</span>
                  <span className="text-xs text-[var(--text-900)] opacity-60">{testimonial.country}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center p-6 bg-white border border-[var(--border-color)] rounded-xl">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">4.9/5</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">HCP Rating</div>
          </div>
          <div className="text-center p-6 bg-white border border-[var(--border-color)] rounded-xl">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">2,500+</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Hospital Partners</div>
          </div>
          <div className="text-center p-6 bg-white border border-[var(--border-color)] rounded-xl">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">98%</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Retention Rate</div>
          </div>
          <div className="text-center p-6 bg-white border border-[var(--border-color)] rounded-xl">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">15+</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Years Trusted</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
