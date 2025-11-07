import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { PageLayout } from '../layout/PageLayout';
import { AdminRouter } from '../../admin/components/AdminRouter';
import { ThemeProvider } from '../../admin/lib/theme-provider';
import { AuthProvider } from '../../admin/hooks/use-auth';
import { ROUTES } from '../../config/routes';

// Lazy load all page components for better performance
const HomePage = lazy(() => import('../../pages/HomePage').then(module => ({ default: module.HomePage })));
const ProductsPage = lazy(() => import('../../pages/ProductsPage').then(module => ({ default: module.ProductsPage })));

// Products section
const AllProductsPage = lazy(() => import('../../pages/products/browse/AllProductsPage').then(module => ({ default: module.AllProductsPage })));
const ProductCatalogPage = lazy(() => import('../../pages/products/browse/ProductCatalogPage').then(module => ({ default: module.ProductCatalogPage })));
const CardiologyPage = lazy(() => import('../../pages/products/therapeutic-areas/CardiologyPage').then(module => ({ default: module.CardiologyPage })));
const AntiDiabeticPage = lazy(() => import('../../pages/products/therapeutic-areas/AntiDiabeticPage').then(module => ({ default: module.AntiDiabeticPage })));
const AntibioticsPage = lazy(() => import('../../pages/products/therapeutic-areas/AntibioticsPage').then(module => ({ default: module.AntibioticsPage })));
const PainManagementPage = lazy(() => import('../../pages/products/therapeutic-areas/PainManagementPage').then(module => ({ default: module.PainManagementPage })));
const RDPPipelinePage = lazy(() => import('../../pages/products/pipeline/RDPPipelinePage').then(module => ({ default: module.RDPPipelinePage })));
const ClinicalTrialsPageProducts = lazy(() => import('../../pages/products/pipeline/ClinicalTrialsPageProducts').then(module => ({ default: module.ClinicalTrialsPageProducts })));
const RequestSamplePage = lazy(() => import('../../pages/products/actions/RequestSamplePage').then(module => ({ default: module.RequestSamplePage })));

// R&D section
const RDPage = lazy(() => import('../../pages/rd/overview/RDPage').then(module => ({ default: module.RDPage })));
const ResearchFocusPage = lazy(() => import('../../pages/rd/overview/ResearchFocusPage').then(module => ({ default: module.ResearchFocusPage })));
const InnovationPage = lazy(() => import('../../pages/rd/overview/InnovationPage').then(module => ({ default: module.InnovationPage })));
const ClinicalTrialsPage = lazy(() => import('../../pages/rd/development/ClinicalTrialsPage').then(module => ({ default: module.ClinicalTrialsPage })));
const DataIntegrityPage = lazy(() => import('../../pages/rd/development/DataIntegrityPage').then(module => ({ default: module.DataIntegrityPage })));
const PartnershipsPage = lazy(() => import('../../pages/rd/collaboration/PartnershipsPage').then(module => ({ default: module.PartnershipsPage })));
const TechnologyPage = lazy(() => import('../../pages/rd/collaboration/TechnologyPage').then(module => ({ default: module.TechnologyPage })));

// Facilities section
const ManufacturingPage = lazy(() => import('../../pages/facilities/infrastructure/ManufacturingPage').then(module => ({ default: module.ManufacturingPage })));
const WhoGmpPage = lazy(() => import('../../pages/facilities/infrastructure/WhoGmpPage').then(module => ({ default: module.WhoGmpPage })));
const QualityAssurancePage = lazy(() => import('../../pages/facilities/quality/QualityAssurancePage').then(module => ({ default: module.QualityAssurancePage })));
const CertificationsPage = lazy(() => import('../../pages/facilities/quality/CertificationsPage').then(module => ({ default: module.CertificationsPage })));
const QualityCompliancePage = lazy(() => import('../../pages/facilities/quality/QualityCompliancePage').then(module => ({ default: module.QualityCompliancePage })));
const GreenPracticesPage = lazy(() => import('../../pages/facilities/sustainability/GreenPracticesPage').then(module => ({ default: module.GreenPracticesPage })));

// Company section
const CompanyPage = lazy(() => import('../../pages/company/overview/CompanyPage').then(module => ({ default: module.CompanyPage })));
const AboutUsPage = lazy(() => import('../../pages/company/overview/AboutUsPage').then(module => ({ default: module.AboutUsPage })));
const MissionValuesPage = lazy(() => import('../../pages/company/overview/MissionValuesPage').then(module => ({ default: module.MissionValuesPage })));
const GalleryPage = lazy(() => import('../../pages/company/overview/GalleryPage').then(module => ({ default: module.GalleryPage })));
const LeadershipPage = lazy(() => import('../../pages/company/leadership/LeadershipPage').then(module => ({ default: module.LeadershipPage })));
const ExecutiveTeamPage = lazy(() => import('../../pages/company/leadership/ExecutiveTeamPage').then(module => ({ default: module.ExecutiveTeamPage })));
const BoardPage = lazy(() => import('../../pages/company/leadership/BoardPage').then(module => ({ default: module.BoardPage })));
const GlobalPresencePage = lazy(() => import('../../pages/company/global/GlobalPresencePage').then(module => ({ default: module.GlobalPresencePage })));
const CSRPage = lazy(() => import('../../pages/company/global/CSRPage').then(module => ({ default: module.CSRPage })));
const CareersPage = lazy(() => import('../../pages/company/careers/CareersPage').then(module => ({ default: module.CareersPage })));
const JoinOurTeamPage = lazy(() => import('../../pages/company/careers/JoinOurTeamPage').then(module => ({ default: module.JoinOurTeamPage })));
const LifeAtEDIFPage = lazy(() => import('../../pages/company/careers/LifeAtEDIFPage').then(module => ({ default: module.LifeAtEDIFPage })));

// Resources section
const ResourcesPage = lazy(() => import('../../pages/resources/overview/ResourcesPage').then(module => ({ default: module.ResourcesPage })));
const HCPPortalPage = lazy(() => import('../../pages/resources/professionals/HCPPortalPage').then(module => ({ default: module.HCPPortalPage })));
const MonographsPage = lazy(() => import('../../pages/resources/professionals/MonographsPage').then(module => ({ default: module.MonographsPage })));
const PatientInfoPage = lazy(() => import('../../pages/resources/patients/PatientInfoPage').then(module => ({ default: module.PatientInfoPage })));
const SafetyInfoPage = lazy(() => import('../../pages/resources/patients/SafetyInfoPage').then(module => ({ default: module.SafetyInfoPage })));
const RegulatoryPage = lazy(() => import('../../pages/resources/documents/RegulatoryPage').then(module => ({ default: module.RegulatoryPage })));
const SDSPage = lazy(() => import('../../pages/resources/documents/SDSPage').then(module => ({ default: module.SDSPage })));

// Investors section
const InvestorsPage = lazy(() => import('../../pages/investors/overview/InvestorsPage').then(module => ({ default: module.InvestorsPage })));
const InvestorRelationsPage = lazy(() => import('../../pages/investors/overview/InvestorRelationsPage').then(module => ({ default: module.InvestorRelationsPage })));
const ReportsPage = lazy(() => import('../../pages/investors/financials/ReportsPage').then(module => ({ default: module.ReportsPage })));
const FilingsPage = lazy(() => import('../../pages/investors/financials/FilingsPage').then(module => ({ default: module.FilingsPage })));
const InvestorNewsPage = lazy(() => import('../../pages/investors/corporate/InvestorNewsPage').then(module => ({ default: module.InvestorNewsPage })));
const GovernancePage = lazy(() => import('../../pages/investors/corporate/GovernancePage').then(module => ({ default: module.GovernancePage })));

// Contact section
const ContactUsPage = lazy(() => import('../../pages/contact/touch/ContactUsPage').then(module => ({ default: module.ContactUsPage })));
const DistributorPortalPage = lazy(() => import('../../pages/contact/touch/DistributorPortalPage').then(module => ({ default: module.DistributorPortalPage })));
const MediaPage = lazy(() => import('../../pages/contact/support/MediaPage').then(module => ({ default: module.MediaPage })));
const ReportAEPage = lazy(() => import('../../pages/contact/support/ReportAEPage').then(module => ({ default: module.ReportAEPage })));

// Legal section
const PrivacyPolicyPage = lazy(() => import('../../pages/legal/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));
const TermsOfUsePage = lazy(() => import('../../pages/legal/TermsOfUsePage').then(module => ({ default: module.TermsOfUsePage })));
const CookiePolicyPage = lazy(() => import('../../pages/legal/CookiePolicyPage').then(module => ({ default: module.CookiePolicyPage })));

// 404 Page
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));

// Loading component for Suspense fallback
function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}

export function AppRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  // Navigation handler
  const handleNavigate = (page: string) => {
    navigate(page);
  };

  // Product interaction handlers
  const handleProductClick = (productId: string) => {
    // This would typically open a product drawer or navigate to product detail
    console.log('Product clicked:', productId);
  };

  const handleViewAllProducts = () => {
    navigate(ROUTES.PRODUCTS_BROWSE.ALL_PRODUCTS);
  };

  const handleRequestSample = () => {
    navigate(ROUTES.PRODUCTS_ACTIONS.REQUEST_SAMPLE);
  };

  const handleExploreProducts = () => {
    navigate(ROUTES.PRODUCTS);
  };

  const handleViewGallery = () => {
    navigate(ROUTES.COMPANY_OVERVIEW.GALLERY);
  };

  // Report AE handler (placeholder - implement modal logic)
  const handleReportAdverseEvent = () => {
    // This would typically open a modal or navigate to a form
    console.log('Report Adverse Event clicked');
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        <Routes>
          {/* Admin routes - no layout */}
          <Route path="/admin/*" element={<AdminRouter />} />

          {/* Main app routes with layout */}
          <Route
            path="/*"
            element={
              <PageLayout
                currentPath={location.pathname}
                onReportAdverseEvent={handleReportAdverseEvent}
                onNavigate={handleNavigate}
              >
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {/* Home Page */}
                    <Route
                      path={ROUTES.HOME}
                      element={
                        <HomePage
                          onProductClick={handleProductClick}
                          onViewAllProducts={handleViewAllProducts}
                          onRequestSample={handleRequestSample}
                          onExploreProducts={handleExploreProducts}
                          onViewGallery={handleViewGallery}
                        />
                      }
                    />

                    {/* Products Section */}
                    <Route path={ROUTES.PRODUCTS_BROWSE.ALL_PRODUCTS} element={<AllProductsPage />} />
                    <Route path={ROUTES.PRODUCTS_BROWSE.PRODUCT_CATALOG} element={<ProductCatalogPage />} />
                    <Route path={ROUTES.PRODUCTS_THERAPEUTIC.CARDIOLOGY} element={<CardiologyPage />} />
                    <Route path={ROUTES.PRODUCTS_THERAPEUTIC.ANTI_DIABETIC} element={<AntiDiabeticPage />} />
                    <Route path={ROUTES.PRODUCTS_THERAPEUTIC.ANTIBIOTICS} element={<AntibioticsPage />} />
                    <Route path={ROUTES.PRODUCTS_THERAPEUTIC.PAIN_MANAGEMENT} element={<PainManagementPage />} />
                    <Route path={ROUTES.PRODUCTS_PIPELINE.RD_PIPELINE} element={<RDPPipelinePage />} />
                    <Route path={ROUTES.PRODUCTS_PIPELINE.CLINICAL_TRIALS_PRODUCTS} element={<ClinicalTrialsPageProducts />} />
                    <Route path={ROUTES.PRODUCTS_ACTIONS.REQUEST_SAMPLE} element={<RequestSamplePage />} />
                    <Route
                      path={ROUTES.PRODUCTS}
                      element={
                        <ProductsPage
                          onProductClick={handleProductClick}
                          onViewAllProducts={handleViewAllProducts}
                        />
                      }
                    />

                    {/* R&D Section */}
                    <Route path={ROUTES.RD_OVERVIEW.RESEARCH_FOCUS} element={<ResearchFocusPage />} />
                    <Route path={ROUTES.RD_OVERVIEW.INNOVATION} element={<InnovationPage />} />
                    <Route path={ROUTES.RD_DEVELOPMENT.CLINICAL_TRIALS} element={<ClinicalTrialsPage />} />
                    <Route path={ROUTES.RD_DEVELOPMENT.DATA_INTEGRITY} element={<DataIntegrityPage />} />
                    <Route path={ROUTES.RD_COLLABORATION.PARTNERSHIPS} element={<PartnershipsPage />} />
                    <Route path={ROUTES.RD_COLLABORATION.TECHNOLOGY} element={<TechnologyPage />} />
                    <Route path={ROUTES.RD} element={<RDPage />} />

                    {/* Facilities Section */}
                    <Route path={ROUTES.FACILITIES_INFRASTRUCTURE.MANUFACTURING} element={<ManufacturingPage />} />
                    <Route path={ROUTES.FACILITIES_INFRASTRUCTURE.WHO_GMP} element={<WhoGmpPage />} />
                    <Route path={ROUTES.FACILITIES_QUALITY.QUALITY_ASSURANCE} element={<QualityAssurancePage />} />
                    <Route path={ROUTES.FACILITIES_QUALITY.CERTIFICATIONS} element={<CertificationsPage />} />
                    <Route path={ROUTES.FACILITIES_QUALITY.QUALITY_COMPLIANCE} element={<QualityCompliancePage />} />
                    <Route path={ROUTES.FACILITIES_SUSTAINABILITY.GREEN_PRACTICES} element={<GreenPracticesPage />} />
                    <Route path={ROUTES.FACILITIES} element={<ManufacturingPage />} />

                    {/* Company Section */}
                    <Route path={ROUTES.COMPANY_OVERVIEW.ABOUT_US} element={<AboutUsPage />} />
                    <Route path={ROUTES.COMPANY_OVERVIEW.MISSION_VALUES} element={<MissionValuesPage />} />
                    <Route path={ROUTES.COMPANY_OVERVIEW.GALLERY} element={<GalleryPage />} />
                    <Route path={ROUTES.COMPANY_LEADERSHIP.LEADERSHIP} element={<LeadershipPage />} />
                    <Route path={ROUTES.COMPANY_LEADERSHIP.EXECUTIVE_TEAM} element={<ExecutiveTeamPage />} />
                    <Route path={ROUTES.COMPANY_LEADERSHIP.BOARD} element={<BoardPage />} />
                    <Route path={ROUTES.COMPANY_GLOBAL.GLOBAL_PRESENCE} element={<GlobalPresencePage />} />
                    <Route path={ROUTES.COMPANY_GLOBAL.CSR} element={<CSRPage />} />
                    <Route path={ROUTES.COMPANY_CAREERS.CAREERS} element={<CareersPage />} />
                    <Route path={ROUTES.COMPANY_CAREERS.JOIN_OUR_TEAM} element={<JoinOurTeamPage />} />
                    <Route path={ROUTES.COMPANY_CAREERS.LIFE_AT_EDIF} element={<LifeAtEDIFPage />} />
                    <Route path={ROUTES.COMPANY} element={<CompanyPage />} />

                    {/* Resources Section */}
                    <Route path={ROUTES.RESOURCES_PROFESSIONALS.HCP_PORTAL} element={<HCPPortalPage />} />
                    <Route path={ROUTES.RESOURCES_PROFESSIONALS.MONOGRAPHS} element={<MonographsPage />} />
                    <Route path={ROUTES.RESOURCES_PATIENTS.PATIENT_INFO} element={<PatientInfoPage />} />
                    <Route path={ROUTES.RESOURCES_PATIENTS.SAFETY_INFO} element={<SafetyInfoPage />} />
                    <Route path={ROUTES.RESOURCES_DOCUMENTS.REGULATORY} element={<RegulatoryPage />} />
                    <Route path={ROUTES.RESOURCES_DOCUMENTS.SDS} element={<SDSPage />} />
                    <Route path={ROUTES.RESOURCES} element={<ResourcesPage />} />

                    {/* Investors Section */}
                    <Route path={ROUTES.INVESTORS_OVERVIEW.INVESTOR_RELATIONS} element={<InvestorRelationsPage />} />
                    <Route path={ROUTES.INVESTORS_FINANCIALS.REPORTS} element={<ReportsPage />} />
                    <Route path={ROUTES.INVESTORS_FINANCIALS.FILINGS} element={<FilingsPage />} />
                    <Route path={ROUTES.INVESTORS_CORPORATE.NEWS} element={<InvestorNewsPage />} />
                    <Route path={ROUTES.INVESTORS_CORPORATE.GOVERNANCE} element={<GovernancePage />} />
                    <Route path={ROUTES.INVESTORS} element={<InvestorsPage />} />

                    {/* Contact Section */}
                    <Route path={ROUTES.CONTACT_TOUCH.CONTACT_US} element={<ContactUsPage />} />
                    <Route path={ROUTES.CONTACT_TOUCH.DISTRIBUTORS} element={<DistributorPortalPage />} />
                    <Route path={ROUTES.CONTACT_SUPPORT.MEDIA} element={<MediaPage />} />
                    <Route path={ROUTES.CONTACT_SUPPORT.REPORT_AE} element={<ReportAEPage />} />
                    <Route path={ROUTES.CONTACT} element={<ContactUsPage />} />

                    {/* Legal Section */}
                    <Route path={ROUTES.LEGAL.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
                    <Route path={ROUTES.LEGAL.TERMS_OF_USE} element={<TermsOfUsePage />} />
                    <Route path={ROUTES.LEGAL.COOKIE_POLICY} element={<CookiePolicyPage />} />

                    {/* 404 Not Found */}
                    <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage onNavigate={handleNavigate} />} />
                  </Routes>
                </Suspense>
              </PageLayout>
            }
          />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  );
}