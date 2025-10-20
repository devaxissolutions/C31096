// Route Configuration for EDIF Pharma Website
// Centralized route definitions for maintainability and type safety

export const ROUTES = {
  // Root routes
  HOME: '/',
  PRODUCTS: '/products',

  // Products section
  PRODUCTS_BROWSE: {
    ALL_PRODUCTS: '/products/all-products',
    PRODUCT_CATALOG: '/products/product-catalog',
  },
  PRODUCTS_THERAPEUTIC: {
    CARDIOLOGY: '/products/cardiology',
    ANTI_DIABETIC: '/products/anti-diabetic',
    ANTIBIOTICS: '/products/antibiotics',
    PAIN_MANAGEMENT: '/products/pain-management',
  },
  PRODUCTS_PIPELINE: {
    RD_PIPELINE: '/products/rd-pipeline',
    CLINICAL_TRIALS_PRODUCTS: '/products/clinical-trials-products',
  },
  PRODUCTS_ACTIONS: {
    REQUEST_SAMPLE: '/products/request-sample',
  },

  // R&D section
  RD: '/rd',
  RD_OVERVIEW: {
    RESEARCH_FOCUS: '/rd/research-focus',
    INNOVATION: '/rd/innovation',
  },
  RD_DEVELOPMENT: {
    CLINICAL_TRIALS: '/rd/clinical-trials',
    DATA_INTEGRITY: '/rd/data-integrity',
  },
  RD_COLLABORATION: {
    PARTNERSHIPS: '/rd/partnerships',
    TECHNOLOGY: '/rd/technology',
  },

  // Facilities section
  FACILITIES: '/facilities',
  FACILITIES_INFRASTRUCTURE: {
    MANUFACTURING: '/facilities/manufacturing',
    WHO_GMP: '/facilities/who-gmp',
  },
  FACILITIES_QUALITY: {
    QUALITY_ASSURANCE: '/facilities/quality-assurance',
    CERTIFICATIONS: '/facilities/certifications',
    QUALITY_COMPLIANCE: '/facilities/quality-compliance',
  },
  FACILITIES_SUSTAINABILITY: {
    GREEN_PRACTICES: '/facilities/green-practices',
  },

  // Company section
  COMPANY: '/company',
  COMPANY_OVERVIEW: {
    ABOUT_US: '/company/about-us',
    MISSION_VALUES: '/company/mission-values',
    GALLERY: '/company/gallery',
  },
  COMPANY_LEADERSHIP: {
    LEADERSHIP: '/company/leadership',
    EXECUTIVE_TEAM: '/company/executive-team',
    BOARD: '/company/board',
  },
  COMPANY_GLOBAL: {
    GLOBAL_PRESENCE: '/company/global-presence',
    CSR: '/company/csr',
  },
  COMPANY_CAREERS: {
    CAREERS: '/company/careers',
    JOIN_OUR_TEAM: '/company/join-our-team',
    LIFE_AT_EDIF: '/company/life-at-edif',
  },

  // Resources section
  RESOURCES: '/resources',
  RESOURCES_PROFESSIONALS: {
    HCP_PORTAL: '/resources/hcp-portal',
    MONOGRAPHS: '/resources/monographs',
  },
  RESOURCES_PATIENTS: {
    PATIENT_INFO: '/resources/patient-info',
    SAFETY_INFO: '/resources/safety-info',
  },
  RESOURCES_DOCUMENTS: {
    REGULATORY: '/resources/regulatory',
    SDS: '/resources/sds',
  },

  // Investors section
  INVESTORS: '/investors',
  INVESTORS_OVERVIEW: {
    INVESTOR_RELATIONS: '/investors/investor-relations',
  },
  INVESTORS_FINANCIALS: {
    REPORTS: '/investors/reports',
    FILINGS: '/investors/filings',
  },
  INVESTORS_CORPORATE: {
    NEWS: '/investors/news',
    GOVERNANCE: '/investors/governance',
  },

  // Contact section
  CONTACT: '/contact',
  CONTACT_TOUCH: {
    CONTACT_US: '/contact/contact-us',
    DISTRIBUTORS: '/contact/distributors',
  },
  CONTACT_SUPPORT: {
    MEDIA: '/contact/media',
    REPORT_AE: '/contact/report-ae',
  },

  // Legal section
  LEGAL: {
    PRIVACY_POLICY: '/privacy-policy',
    TERMS_OF_USE: '/terms-of-use',
    COOKIE_POLICY: '/cookie-policy',
  },

  // Special routes
  NOT_FOUND: '*',
} as const;

// Type definitions for route safety
export type RouteKeys = keyof typeof ROUTES;
export type RouteValues = typeof ROUTES[RouteKeys];

// Page metadata for SEO
export const PAGE_METADATA = {
  [ROUTES.HOME]: {
    title: 'EDIF Pharma - Trusted Medicines, Engineered for Excellence',
    description: 'EDIF Pharma delivers high-quality pharmaceutical products with WHO-GMP certified manufacturing. Explore our cardiology, diabetes, and antibiotic medications.',
  },
  [ROUTES.PRODUCTS]: {
    title: 'Products - EDIF Pharma',
    description: 'Explore our comprehensive portfolio of pharmaceutical products including cardiology, anti-diabetic, antibiotics, and pain management solutions.',
  },
  [ROUTES.PRODUCTS_BROWSE.ALL_PRODUCTS]: {
    title: 'All Products - EDIF Pharma',
    description: 'Complete catalog of EDIF Pharma products and pharmaceutical solutions.',
  },
  [ROUTES.PRODUCTS_BROWSE.PRODUCT_CATALOG]: {
    title: 'Product Catalog - EDIF Pharma',
    description: 'Download our comprehensive product catalog and technical specifications.',
  },
  [ROUTES.PRODUCTS_THERAPEUTIC.CARDIOLOGY]: {
    title: 'Cardiology Products - EDIF Pharma',
    description: 'Advanced cardiology medications and treatments for heart health and cardiovascular care.',
  },
  [ROUTES.PRODUCTS_THERAPEUTIC.ANTI_DIABETIC]: {
    title: 'Anti-Diabetic Products - EDIF Pharma',
    description: 'Comprehensive diabetes care solutions and anti-diabetic medications.',
  },
  [ROUTES.PRODUCTS_THERAPEUTIC.ANTIBIOTICS]: {
    title: 'Antibiotics - EDIF Pharma',
    description: 'High-quality antibiotic medications and antimicrobial treatments.',
  },
  [ROUTES.PRODUCTS_THERAPEUTIC.PAIN_MANAGEMENT]: {
    title: 'Pain Management - EDIF Pharma',
    description: 'Effective pain management solutions and analgesic medications.',
  },
  [ROUTES.PRODUCTS_PIPELINE.RD_PIPELINE]: {
    title: 'R&D Pipeline - EDIF Pharma',
    description: 'Explore our innovative research and development pipeline of new pharmaceutical products.',
  },
  [ROUTES.PRODUCTS_PIPELINE.CLINICAL_TRIALS_PRODUCTS]: {
    title: 'Clinical Trials - EDIF Pharma',
    description: 'Current clinical trials and research studies for new pharmaceutical developments.',
  },
  [ROUTES.PRODUCTS_ACTIONS.REQUEST_SAMPLE]: {
    title: 'Request Sample - EDIF Pharma',
    description: 'Request pharmaceutical samples for healthcare professionals. HCP access required.',
  },
  [ROUTES.RD]: {
    title: 'Research & Development - EDIF Pharma',
    description: 'Innovation-driven research and development in pharmaceuticals and medical systems.',
  },
  [ROUTES.RD_OVERVIEW.RESEARCH_FOCUS]: {
    title: 'Research Focus - EDIF Pharma',
    description: 'Our scientific approach and research priorities in pharmaceutical development.',
  },
  [ROUTES.RD_OVERVIEW.INNOVATION]: {
    title: 'Innovation - EDIF Pharma',
    description: 'Cutting-edge innovation and development processes in pharmaceutical research.',
  },
  [ROUTES.RD_DEVELOPMENT.CLINICAL_TRIALS]: {
    title: 'Clinical Trials - EDIF Pharma',
    description: 'Comprehensive clinical trial programs and study management.',
  },
  [ROUTES.RD_DEVELOPMENT.DATA_INTEGRITY]: {
    title: 'Data Integrity - EDIF Pharma',
    description: 'Quality protocols and data integrity standards in clinical research.',
  },
  [ROUTES.RD_COLLABORATION.PARTNERSHIPS]: {
    title: 'Partnerships - EDIF Pharma',
    description: 'Industry and academic partnerships driving pharmaceutical innovation.',
  },
  [ROUTES.RD_COLLABORATION.TECHNOLOGY]: {
    title: 'Technology - EDIF Pharma',
    description: 'Advanced platform systems and technology solutions in pharmaceuticals.',
  },
  [ROUTES.FACILITIES]: {
    title: 'Facilities - EDIF Pharma',
    description: 'State-of-the-art manufacturing facilities and production units.',
  },
  [ROUTES.FACILITIES_INFRASTRUCTURE.MANUFACTURING]: {
    title: 'Manufacturing - EDIF Pharma',
    description: 'Advanced manufacturing facilities and production capabilities.',
  },
  [ROUTES.FACILITIES_INFRASTRUCTURE.WHO_GMP]: {
    title: 'WHO-GMP Certified Facilities - EDIF Pharma',
    description: 'Internationally certified manufacturing facilities meeting WHO-GMP standards.',
  },
  [ROUTES.FACILITIES_QUALITY.QUALITY_ASSURANCE]: {
    title: 'Quality Assurance - EDIF Pharma',
    description: 'Comprehensive QA/QC systems and quality management processes.',
  },
  [ROUTES.FACILITIES_QUALITY.CERTIFICATIONS]: {
    title: 'Certifications - EDIF Pharma',
    description: 'ISO, GMP, and other quality certifications and standards compliance.',
  },
  [ROUTES.FACILITIES_QUALITY.QUALITY_COMPLIANCE]: {
    title: 'Quality Compliance - EDIF Pharma',
    description: 'Regulatory compliance and quality management systems.',
  },
  [ROUTES.FACILITIES_SUSTAINABILITY.GREEN_PRACTICES]: {
    title: 'Green Practices - EDIF Pharma',
    description: 'Eco-friendly operations and sustainable manufacturing practices.',
  },
  [ROUTES.COMPANY]: {
    title: 'Company - EDIF Pharma',
    description: 'About EDIF Pharma - our story, mission, and commitment to healthcare excellence.',
  },
  [ROUTES.COMPANY_OVERVIEW.ABOUT_US]: {
    title: 'About Us - EDIF Pharma',
    description: 'Learn about EDIF Pharma\'s history, values, and commitment to healthcare innovation.',
  },
  [ROUTES.COMPANY_OVERVIEW.MISSION_VALUES]: {
    title: 'Mission & Values - EDIF Pharma',
    description: 'Our mission, vision, and core values driving pharmaceutical excellence.',
  },
  [ROUTES.COMPANY_OVERVIEW.GALLERY]: {
    title: 'Gallery - EDIF Pharma',
    description: 'Visual showcase of our facilities, team, and pharmaceutical innovations.',
  },
  [ROUTES.COMPANY_LEADERSHIP.LEADERSHIP]: {
    title: 'Leadership - EDIF Pharma',
    description: 'Meet our executive leadership team and board of directors.',
  },
  [ROUTES.COMPANY_LEADERSHIP.EXECUTIVE_TEAM]: {
    title: 'Executive Team - EDIF Pharma',
    description: 'Profiles of our executive leadership and management team.',
  },
  [ROUTES.COMPANY_LEADERSHIP.BOARD]: {
    title: 'Board of Directors - EDIF Pharma',
    description: 'Governance and board of directors information.',
  },
  [ROUTES.COMPANY_GLOBAL.GLOBAL_PRESENCE]: {
    title: 'Global Presence - EDIF Pharma',
    description: 'International reach and global operations of EDIF Pharma.',
  },
  [ROUTES.COMPANY_GLOBAL.CSR]: {
    title: 'Corporate Social Responsibility - EDIF Pharma',
    description: 'Our commitment to social responsibility and community initiatives.',
  },
  [ROUTES.COMPANY_CAREERS.CAREERS]: {
    title: 'Careers - EDIF Pharma',
    description: 'Join our team and explore career opportunities in pharmaceuticals.',
  },
  [ROUTES.COMPANY_CAREERS.JOIN_OUR_TEAM]: {
    title: 'Join Our Team - EDIF Pharma',
    description: 'Current job openings and career opportunities at EDIF Pharma.',
  },
  [ROUTES.COMPANY_CAREERS.LIFE_AT_EDIF]: {
    title: 'Life at EDIF - EDIF Pharma',
    description: 'Company culture, values, and employee experience at EDIF Pharma.',
  },
  [ROUTES.RESOURCES]: {
    title: 'Resources - EDIF Pharma',
    description: 'Comprehensive resources for healthcare professionals and patients.',
  },
  [ROUTES.RESOURCES_PROFESSIONALS.HCP_PORTAL]: {
    title: 'HCP Portal - EDIF Pharma',
    description: 'Healthcare professional resources and prescribing information.',
  },
  [ROUTES.RESOURCES_PROFESSIONALS.MONOGRAPHS]: {
    title: 'Monographs - EDIF Pharma',
    description: 'Detailed prescribing information and product monographs.',
  },
  [ROUTES.RESOURCES_PATIENTS.PATIENT_INFO]: {
    title: 'Patient Information - EDIF Pharma',
    description: 'Medication guides and patient resources for our products.',
  },
  [ROUTES.RESOURCES_PATIENTS.SAFETY_INFO]: {
    title: 'Safety Information - EDIF Pharma',
    description: 'Important safety information and usage guidelines.',
  },
  [ROUTES.RESOURCES_DOCUMENTS.REGULATORY]: {
    title: 'Regulatory Documents - EDIF Pharma',
    description: 'Certificates and regulatory documentation.',
  },
  [ROUTES.RESOURCES_DOCUMENTS.SDS]: {
    title: 'Safety Data Sheets - EDIF Pharma',
    description: 'Safety data sheets and material safety information.',
  },
  [ROUTES.INVESTORS]: {
    title: 'Investors - EDIF Pharma',
    description: 'Investor relations and financial information for EDIF Pharma.',
  },
  [ROUTES.INVESTORS_OVERVIEW.INVESTOR_RELATIONS]: {
    title: 'Investor Relations - EDIF Pharma',
    description: 'Comprehensive investor relations and corporate information.',
  },
  [ROUTES.INVESTORS_FINANCIALS.REPORTS]: {
    title: 'Financial Reports - EDIF Pharma',
    description: 'Annual reports, financial statements, and investor presentations.',
  },
  [ROUTES.INVESTORS_FINANCIALS.FILINGS]: {
    title: 'SEC Filings - EDIF Pharma',
    description: 'Regulatory filings and corporate governance documents.',
  },
  [ROUTES.INVESTORS_CORPORATE.NEWS]: {
    title: 'Investor News - EDIF Pharma',
    description: 'Latest corporate news and investor updates.',
  },
  [ROUTES.INVESTORS_CORPORATE.GOVERNANCE]: {
    title: 'Corporate Governance - EDIF Pharma',
    description: 'Governance policies and corporate structure information.',
  },
  [ROUTES.CONTACT]: {
    title: 'Contact Us - EDIF Pharma',
    description: 'Get in touch with EDIF Pharma for inquiries and support.',
  },
  [ROUTES.CONTACT_TOUCH.CONTACT_US]: {
    title: 'Contact Us - EDIF Pharma',
    description: 'Contact information and general inquiries form.',
  },
  [ROUTES.CONTACT_TOUCH.DISTRIBUTORS]: {
    title: 'Distributors - EDIF Pharma',
    description: 'Partner with us as a distributor of EDIF Pharma products.',
  },
  [ROUTES.CONTACT_SUPPORT.MEDIA]: {
    title: 'Media Inquiries - EDIF Pharma',
    description: 'Press releases and media contact information.',
  },
  [ROUTES.CONTACT_SUPPORT.REPORT_AE]: {
    title: 'Report Adverse Event - EDIF Pharma',
    description: 'Report adverse events and safety concerns.',
  },
  [ROUTES.LEGAL.PRIVACY_POLICY]: {
    title: 'Privacy Policy - EDIF Pharma',
    description: 'Privacy policy and data protection information.',
  },
  [ROUTES.LEGAL.TERMS_OF_USE]: {
    title: 'Terms of Use - EDIF Pharma',
    description: 'Terms and conditions for using EDIF Pharma websites.',
  },
  [ROUTES.LEGAL.COOKIE_POLICY]: {
    title: 'Cookie Policy - EDIF Pharma',
    description: 'Cookie policy and website tracking information.',
  },
} as const;