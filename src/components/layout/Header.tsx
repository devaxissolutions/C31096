import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, AlertCircle, Search, Globe, User, Package, Beaker, Factory, Building2, FileText, TrendingUp, Briefcase, Phone, Shield, Award, Users, Microscope, Pill, Heart, Stethoscope, Activity, BookOpen, Download, Newspaper, BarChart, ImageIcon } from 'lucide-react';

interface HeaderProps {
  onReportAdverseEvent: () => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

interface MegaMenuItem {
  title: string;
  description?: string;
  page: string;
  icon?: any;
}

interface MegaMenuColumn {
  heading: string;
  items: MegaMenuItem[];
}

export function Header({ onReportAdverseEvent, currentPage = 'home', onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  // Mega Menu Configurations
  const megaMenus: Record<string, MegaMenuColumn[]> = {
    Products: [
      {
        heading: 'BROWSE',
        items: [
          { title: 'All Products', description: 'Complete portfolio', page: 'products', icon: Package },
          { title: 'Product Catalog', description: 'Download PDF', page: 'products', icon: Download },
        ]
      },
      {
        heading: 'THERAPEUTIC AREAS',
        items: [
          { title: 'Cardiology', description: 'Heart & vascular', page: 'products', icon: Heart },
          { title: 'Anti-Diabetic', description: 'Diabetes care', page: 'products', icon: Activity },
          { title: 'Antibiotics', description: 'Antimicrobials', page: 'products', icon: Shield },
          { title: 'Pain Management', description: 'Analgesics', page: 'products', icon: Pill },
        ]
      },
      {
        heading: 'PIPELINE',
        items: [
          { title: 'R&D Pipeline', description: 'In development', page: 'rd', icon: Beaker },
          { title: 'Clinical Trials', description: 'Active studies', page: 'rd', icon: Microscope },
        ]
      },
      {
        heading: 'ACTIONS',
        items: [
          { title: 'Request Sample', description: 'For HCPs only', page: 'products', icon: Package },
        ]
      }
    ],
    'R&D': [
      {
        heading: 'OVERVIEW',
        items: [
          { title: 'Research Focus', description: 'Scientific approach', page: 'rd', icon: Microscope },
          { title: 'Innovation', description: 'Development process', page: 'rd', icon: Beaker },
        ]
      },
      {
        heading: 'DEVELOPMENT',
        items: [
          { title: 'Clinical Trials', description: 'Study programs', page: 'rd', icon: FileText },
          { title: 'Data Integrity', description: 'Quality protocols', page: 'rd', icon: Shield },
        ]
      },
      {
        heading: 'COLLABORATION',
        items: [
          { title: 'Partnerships', description: 'Industry & academic', page: 'rd', icon: Users },
          { title: 'Technology', description: 'Platform systems', page: 'rd', icon: Activity },
        ]
      }
    ],
    Facilities: [
      {
        heading: 'INFRASTRUCTURE',
        items: [
          { title: 'Manufacturing', description: 'Production units', page: 'manufacturing', icon: Factory },
          { title: 'WHO-GMP', description: 'Certified facilities', page: 'manufacturing', icon: Award },
        ]
      },
      {
        heading: 'QUALITY',
        items: [
          { title: 'Quality Assurance', description: 'QA/QC systems', page: 'quality', icon: Shield },
          { title: 'Certifications', description: 'ISO, GMP standards', page: 'quality', icon: Award },
        ]
      },
      {
        heading: 'SUSTAINABILITY',
        items: [
          { title: 'Green Practices', description: 'Eco-friendly ops', page: 'manufacturing', icon: Activity },
        ]
      }
    ],
    Company: [
      {
        heading: 'ABOUT',
        items: [
          { title: 'About Us', description: 'Our story', page: 'about', icon: Building2 },
          { title: 'Mission & Values', description: 'What drives us', page: 'company', icon: Heart },
          { title: 'Gallery', description: 'Visual showcase', page: 'gallery', icon: ImageIcon },
        ]
      },
      {
        heading: 'LEADERSHIP',
        items: [
          { title: 'Executive Team', description: 'Leadership profiles', page: 'leadership', icon: Users },
          { title: 'Board', description: 'Governance', page: 'leadership', icon: Award },
        ]
      },
      {
        heading: 'GLOBAL',
        items: [
          { title: 'Global Presence', description: 'Worldwide reach', page: 'company', icon: Globe },
          { title: 'CSR', description: 'Social responsibility', page: 'company', icon: Heart },
        ]
      },
      {
        heading: 'CAREERS',
        items: [
          { title: 'Join Our Team', description: 'Career opportunities', page: 'careers', icon: Briefcase },
          { title: 'Life at EDIF', description: 'Culture & values', page: 'careers', icon: Heart },
        ]
      }
    ],
    Resources: [
      {
        heading: 'FOR PROFESSIONALS',
        items: [
          { title: 'HCP Portal', description: 'Medical resources', page: 'resources', icon: User },
          { title: 'Monographs', description: 'Prescribing info', page: 'resources', icon: BookOpen },
        ]
      },
      {
        heading: 'FOR PATIENTS',
        items: [
          { title: 'Patient Info', description: 'Medication guides', page: 'resources', icon: FileText },
          { title: 'Safety Info', description: 'Usage guidelines', page: 'resources', icon: Shield },
        ]
      },
      {
        heading: 'DOCUMENTS',
        items: [
          { title: 'Regulatory', description: 'Certificates', page: 'quality', icon: FileText },
          { title: 'SDS', description: 'Safety sheets', page: 'resources', icon: Download },
        ]
      }
    ],
    Investors: [
      {
        heading: 'OVERVIEW',
        items: [
          { title: 'Investor Relations', description: 'IR home', page: 'investors', icon: TrendingUp },
        ]
      },
      {
        heading: 'FINANCIALS',
        items: [
          { title: 'Reports', description: 'Financial statements', page: 'investors', icon: BarChart },
          { title: 'Filings', description: 'SEC documents', page: 'investors', icon: FileText },
        ]
      },
      {
        heading: 'CORPORATE',
        items: [
          { title: 'News', description: 'Latest updates', page: 'investors', icon: Newspaper },
          { title: 'Governance', description: 'Policies', page: 'investors', icon: Shield },
        ]
      }
    ],
    Contact: [
      {
        heading: 'GET IN TOUCH',
        items: [
          { title: 'Contact Us', description: 'General inquiries', page: 'contact', icon: Phone },
          { title: 'Distributors', description: 'Partner with us', page: 'distributors', icon: Package },
        ]
      },
      {
        heading: 'SUPPORT',
        items: [
          { title: 'Media', description: 'Press inquiries', page: 'contact', icon: Newspaper },
          { title: 'Report AE', description: 'Safety reporting', page: 'contact', icon: AlertCircle },
        ]
      }
    ]
  };

  const mainNavItems = [
    { name: 'Products', hasMegaMenu: true, page: 'products' },
    { name: 'R&D', hasMegaMenu: true, page: 'rd' },
    { name: 'Facilities', hasMegaMenu: true, page: 'manufacturing' },
    { name: 'Company', hasMegaMenu: true, page: 'company' },
    { name: 'Resources', hasMegaMenu: true, page: 'resources' },
    { name: 'Investors', hasMegaMenu: true, page: 'investors' },
    { name: 'Contact', hasMegaMenu: true, page: 'contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-200 ${isScrolled ? 'shadow-sm' : 'border-b border-[var(--border-color)]'}`}>
      {/* Main Navigation Bar */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-8">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center flex-shrink-0 group" 
            aria-label="EDIF Pharma home"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                <div className="w-1 h-7 bg-[var(--brand-blue)]" />
                <div className="w-1 h-7 bg-[var(--brand-blue)] opacity-75" />
                <div className="w-1 h-7 bg-[var(--brand-blue)] opacity-50" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg tracking-tight text-[var(--text-900)] font-medium">
                  EDIF Pharma
                </span>
                <span className="text-[9px] tracking-[0.08em] text-[var(--text-900)] opacity-40 uppercase">
                  Medical Systems
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center justify-center flex-1" aria-label="Main navigation">
            <div className="flex items-center gap-1">
              {mainNavItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.page)}
                    className={`px-3 py-2 text-[13px] text-[var(--text-900)] font-medium relative group transition-opacity duration-150 ${
                      currentPage === item.page ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {item.name}
                    {/* Active indicator */}
                    <span className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--brand-blue)] transition-transform duration-200 ${
                      currentPage === item.page ? 'scale-x-100' : 'scale-x-0'
                    } group-hover:scale-x-100`} />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {item.hasMegaMenu && activeDropdown === item.name && megaMenus[item.name] && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 animate-in fade-in slide-in-from-top">
                      <div className="bg-[#F9FBFD] border border-[var(--border-color)] rounded-lg shadow-lg p-6 min-w-[640px]">
                        <div className="grid grid-cols-3 gap-6">
                          {megaMenus[item.name].map((column, idx) => (
                            <div key={idx}>
                              <h3 className="text-[10px] uppercase tracking-wider text-[var(--text-900)] opacity-50 mb-3 font-medium">
                                {column.heading}
                              </h3>
                              <div className="space-y-1">
                                {column.items.map((menuItem, itemIdx) => (
                                  <button
                                    key={itemIdx}
                                    onClick={() => handleNavClick(menuItem.page)}
                                    className="w-full text-left group block"
                                  >
                                    <div className="flex items-start gap-2.5 p-2 rounded hover:bg-white transition-colors duration-150">
                                      {menuItem.icon && (
                                        <menuItem.icon className="text-[var(--brand-blue)] flex-shrink-0 mt-0.5" size={14} strokeWidth={2} />
                                      )}
                                      <div className="flex-1 min-w-0">
                                        <div className="text-[13px] text-[var(--text-900)] font-medium group-hover:text-[var(--brand-blue)] transition-colors">
                                          {menuItem.title}
                                        </div>
                                        {menuItem.description && (
                                          <div className="text-[11px] text-[var(--text-900)] opacity-60 mt-0.5">
                                            {menuItem.description}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Utility Bar */}
          <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
            {/* Language */}
            <button className="flex items-center gap-1 px-2 py-2 text-[12px] text-[var(--text-900)] opacity-70 hover:opacity-100 transition-opacity duration-150">
              <Globe size={14} strokeWidth={2} />
              <span>EN</span>
            </button>

            <div className="w-px h-4 bg-[var(--border-color)]" />

            {/* Report AE Button */}
            <button
              onClick={onReportAdverseEvent}
              className="flex items-center gap-1.5 px-4 py-2 text-[12px] tracking-wide text-white bg-[var(--accent-red)] hover:bg-[var(--accent-red)]/90 active:bg-[var(--accent-red)]/95 transition-colors duration-150 font-medium"
              aria-label="Report adverse event"
            >
              <AlertCircle size={14} strokeWidth={2} />
              <span>REPORT AE</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={onReportAdverseEvent}
              className="flex items-center gap-1.5 px-3 py-2 text-[11px] tracking-wide text-white bg-[var(--accent-red)] hover:bg-[var(--accent-red)]/90 transition-colors duration-150 font-medium"
              aria-label="Report adverse event"
            >
              <AlertCircle size={13} strokeWidth={2} />
              <span>REPORT</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-[var(--surface)] rounded transition-colors duration-150"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-[var(--border-color)] max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top">
          <nav className="max-w-[1440px] mx-auto px-6 py-4" aria-label="Mobile navigation">
            {mainNavItems.map((item) => (
              <div key={item.name} className="border-b border-[var(--border-color)] last:border-0">
                <button
                  onClick={() => {
                    if (activeDropdown === item.name) {
                      setActiveDropdown(null);
                    } else {
                      setActiveDropdown(item.name);
                    }
                  }}
                  className={`flex w-full items-center justify-between py-3.5 text-[var(--text-900)] font-medium ${
                    currentPage === item.page ? 'opacity-100' : 'opacity-70'
                  }`}
                >
                  <span className="text-[15px]">{item.name}</span>
                  {item.hasMegaMenu && (
                    <ChevronDown 
                      size={16} 
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.hasMegaMenu && activeDropdown === item.name && megaMenus[item.name] && (
                  <div className="pb-4 space-y-4">
                    {megaMenus[item.name].map((column, idx) => (
                      <div key={idx}>
                        <h3 className="text-[10px] uppercase tracking-wider text-[var(--text-900)] opacity-50 mb-2 font-medium px-3">
                          {column.heading}
                        </h3>
                        <div className="space-y-0.5">
                          {column.items.map((menuItem, itemIdx) => (
                            <button
                              key={itemIdx}
                              onClick={() => {
                                handleNavClick(menuItem.page);
                                setActiveDropdown(null);
                              }}
                              className="w-full text-left flex items-start gap-2.5 px-3 py-2.5 hover:bg-[var(--surface)] transition-colors duration-150 rounded"
                            >
                              {menuItem.icon && (
                                <menuItem.icon className="text-[var(--brand-blue)] flex-shrink-0 mt-0.5" size={14} strokeWidth={2} />
                              )}
                              <div className="flex-1 min-w-0">
                                <div className="text-[13px] text-[var(--text-900)] font-medium">
                                  {menuItem.title}
                                </div>
                                {menuItem.description && (
                                  <div className="text-[11px] text-[var(--text-900)] opacity-60 mt-0.5">
                                    {menuItem.description}
                                  </div>
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </nav>
        </div>
      )}
    </header>
  );
}
