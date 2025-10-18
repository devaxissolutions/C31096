import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { motion } from 'framer-motion';
import { FlaskConical, Microscope, FileCheck, Sparkles } from 'lucide-react';

export function RDPipeline() {
  const pipelineItems = [
    {
      phase: 'Phase III',
      indication: 'Cardiovascular disease management',
      status: 'Enrollment complete',
      statusColor: 'bg-blue-100 text-blue-700',
      icon: Sparkles,
      progress: 85,
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      phase: 'Phase II',
      indication: 'Diabetes combination therapy',
      status: 'Active recruitment',
      statusColor: 'bg-green-100 text-green-700',
      icon: FlaskConical,
      progress: 60,
      gradient: 'from-green-500 to-green-600',
    },
    {
      phase: 'Phase I',
      indication: 'Novel antibiotic development',
      status: 'Preclinical',
      statusColor: 'bg-yellow-100 text-yellow-700',
      icon: Microscope,
      progress: 35,
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      phase: 'Filed',
      indication: 'Generic oncology product',
      status: 'Regulatory review',
      statusColor: 'bg-purple-100 text-purple-700',
      icon: FileCheck,
      progress: 95,
      gradient: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="rd-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--brand-blue)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rd-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 bg-[var(--brand-blue)]/10 rounded-full mb-4">
              <span className="text-sm text-[var(--brand-blue)]">Research & Development</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[var(--brand-blue)] mb-4">
              Innovation Pipeline
            </h2>
            <p className="text-lg text-[var(--text-900)] opacity-70">
              Advancing pharmaceutical innovation across therapeutic areas with 
              cutting-edge research and rigorous clinical trials.
            </p>
          </motion.div>
        </div>

        {/* Pipeline Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pipelineItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white border border-[var(--border-color)] rounded-2xl p-6 hover:border-[var(--brand-blue)]/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative space-y-4">
                {/* Icon Badge */}
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-white" size={20} />
                </div>

                {/* Phase Badge */}
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-[var(--brand-blue)] text-[var(--brand-blue)]">
                    {item.phase}
                  </Badge>
                  <span className="text-xs text-[var(--brand-blue)]">{item.progress}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-[var(--surface)] rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${item.gradient} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
                
                {/* Description */}
                <p className="text-sm text-[var(--text-900)] min-h-[48px] leading-relaxed">
                  {item.indication}
                </p>
                
                {/* Status */}
                <div className={`px-3 py-1.5 rounded-full text-xs inline-flex items-center gap-2 ${item.statusColor}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  <span>{item.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center p-6 bg-gradient-to-br from-[var(--surface)] to-white border border-[var(--border-color)] rounded-xl">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">12+</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Active R&D Projects</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[var(--surface)] to-white border border-[var(--border-color)] rounded-xl">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">$15M</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Annual R&D Investment</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-[var(--surface)] to-white border border-[var(--border-color)] rounded-xl">
            <div className="text-3xl text-[var(--brand-blue)] mb-2">45+</div>
            <div className="text-sm text-[var(--text-900)] opacity-60">Research Scientists</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Button
            variant="outline"
            className="border-2 border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white px-8 py-6 h-auto transition-all duration-200"
          >
            View Complete Pipeline
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
