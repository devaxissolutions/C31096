import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Download, 
  BookOpen, 
  GraduationCap, 
  Stethoscope,
  Video,
  Calendar,
  Search,
  Filter,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function HCPResources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Product Information', 'Clinical Data', 'CME Programs', 'Guidelines'];

  const resources = [
    {
      id: '1',
      title: 'Comprehensive Product Monograph - Cardiovascular Range',
      category: 'Product Information',
      type: 'PDF',
      size: '2.4 MB',
      description: 'Complete prescribing information, dosage guidelines, and safety data',
      icon: FileText,
    },
    {
      id: '2',
      title: 'Clinical Efficacy Study: Diabetes Management',
      category: 'Clinical Data',
      type: 'PDF',
      size: '1.8 MB',
      description: 'Multi-center randomized controlled trial results and analysis',
      icon: BookOpen,
    },
    {
      id: '3',
      title: 'CME Webinar: Latest in Oncology Treatment',
      category: 'CME Programs',
      type: 'Video',
      duration: '45 min',
      description: 'Accredited continuing medical education program on oncology advances',
      icon: Video,
    },
    {
      id: '4',
      title: 'Antibiotic Stewardship Guidelines 2025',
      category: 'Guidelines',
      type: 'PDF',
      size: '3.1 MB',
      description: 'Evidence-based recommendations for rational antibiotic use',
      icon: Stethoscope,
    },
    {
      id: '5',
      title: 'Pharmacovigilance Reporting Guide',
      category: 'Product Information',
      type: 'PDF',
      size: '1.2 MB',
      description: 'Step-by-step guide for adverse event reporting and documentation',
      icon: FileText,
    },
    {
      id: '6',
      title: 'Upcoming Medical Congress Schedule',
      category: 'CME Programs',
      type: 'Calendar',
      description: 'EDIF Pharma sponsored medical conferences and symposiums',
      icon: Calendar,
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const medicalPrograms = [
    {
      title: 'Physician Education Portal',
      description: 'Access comprehensive training modules, case studies, and clinical updates',
      action: 'Access Portal',
      image: 'https://images.unsplash.com/photo-1732304720116-4195b021d8d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0aW9uJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYwNjQyODk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Medical Affairs Support',
      description: 'Connect with our medical science liaison team for clinical inquiries',
      action: 'Contact MSL',
      image: 'https://images.unsplash.com/photo-1706777280252-5de52771cf13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYwNjcxNjg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Clinical Trial Information',
      description: 'Explore ongoing and completed clinical trials, investigator resources',
      action: 'View Trials',
      image: 'https://images.unsplash.com/photo-1758206523826-a65d4cf070aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaGFybWFjZXV0aWNhbCUyMHJlc2VhcmNoJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYwNzI4MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="hcp" className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hcp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--brand-blue)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hcp-grid)" />
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
            <span className="text-sm text-[var(--brand-blue)]">Healthcare Professional Resources</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--brand-blue)] mb-6">
            For Healthcare Professionals
          </h2>
          <p className="text-lg text-[var(--text-900)] opacity-70 max-w-3xl mx-auto leading-relaxed">
            Access evidence-based clinical resources, product information, continuing education, 
            and medical affairs support.
          </p>
        </motion.div>

        {/* Medical Programs Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {medicalPrograms.map((program, index) => (
            <motion.div
              key={program.title}
              className="group bg-white border border-[var(--border-color)] rounded-xl overflow-hidden hover:border-[var(--brand-blue)] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="aspect-[16/9] overflow-hidden bg-[var(--surface)]">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg text-[var(--text-900)] mb-2">{program.title}</h3>
                <p className="text-sm text-[var(--text-900)] opacity-60 mb-4 leading-relaxed">
                  {program.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border border-[var(--brand-blue)] text-[var(--brand-blue)] hover:bg-[var(--brand-blue)] hover:text-white group"
                >
                  <span>{program.action}</span>
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Resource Library */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <GraduationCap size={28} className="text-[var(--brand-blue)]" />
              <h3 className="text-2xl md:text-3xl text-[var(--brand-blue)]">
                Resource Library
              </h3>
            </div>
            <div className="text-sm text-[var(--text-900)] opacity-60">
              {filteredResources.length} Resources
            </div>
          </div>

          {/* Search & Filter */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-900)] opacity-40" size={20} />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm whitespace-nowrap rounded-[var(--radius-button)] border transition-all ${
                    selectedCategory === category
                      ? 'bg-[var(--brand-blue)] text-white border-[var(--brand-blue)]'
                      : 'bg-white text-[var(--text-900)] border-[var(--border-color)] hover:border-[var(--brand-blue)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {filteredResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.id}
                  className="bg-white border border-[var(--border-color)] p-6 rounded-xl hover:border-[var(--brand-blue)] transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--brand-blue)]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-blue)] transition-colors">
                      <Icon size={24} className="text-[var(--brand-blue)] group-hover:text-white transition-colors" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-[var(--text-900)] leading-snug">{resource.title}</h4>
                        <span className="px-2 py-0.5 bg-[var(--surface)] rounded text-xs text-[var(--brand-blue)] whitespace-nowrap">
                          {resource.category}
                        </span>
                      </div>
                      
                      <p className="text-sm text-[var(--text-900)] opacity-60 mb-3 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-[var(--text-900)] opacity-50">
                          {resource.type} {resource.size && `• ${resource.size}`}
                          {resource.duration && `• ${resource.duration}`}
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-[var(--brand-blue)] hover:bg-[var(--brand-blue)]/10 h-auto py-1.5 px-3 group/btn"
                        >
                          <Download size={16} className="mr-1.5 group-hover/btn:translate-y-0.5 transition-transform" />
                          <span className="text-sm">Download</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredResources.length === 0 && (
            <div className="text-center py-16 border border-[var(--border-color)] rounded-xl">
              <Filter size={48} className="mx-auto mb-4 text-[var(--text-900)] opacity-20" />
              <p className="text-[var(--text-900)] opacity-60">
                No resources found matching your criteria
              </p>
            </div>
          )}
        </motion.div>

        {/* Contact Medical Affairs */}
        <motion.div
          className="mt-16 bg-gradient-to-br from-[var(--brand-blue)] to-[#0d3c75] p-8 md:p-10 rounded-xl text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl mb-2">Need Clinical Support?</h3>
              <p className="text-white/80 leading-relaxed">
                Our Medical Science Liaison team is available to answer your clinical questions, 
                provide product information, and support evidence-based medicine.
              </p>
            </div>
            <Button
              className="bg-white text-[var(--brand-blue)] hover:bg-white/90 px-8 h-auto py-3 whitespace-nowrap group"
            >
              <span>Contact Medical Affairs</span>
              <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
