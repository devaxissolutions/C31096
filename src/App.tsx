import { useState } from 'react';
import { Header, Footer, ProductPreviewDrawer, SampleRequestModal, PVFormModal, PVFloatingButton, Toaster } from './components';

// Pages
import { HomePage, ProductsPage, RDPage, CompanyPage, AboutUsPage, GalleryPage, ManufacturingPage, ResourcesPage, InvestorsPage, LeadershipPage, CareersPage, ContactPage, PrivacyPolicyPage, TermsOfUsePage, CookiePolicyPage, QualityCompliancePage, DistributorPortalPage } from './pages';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isProductDrawerOpen, setIsProductDrawerOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [isPVModalOpen, setIsPVModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string>('prod-1');

  const handleProductClick = (productId: string) => {
    setSelectedProductId(productId);
    setIsProductDrawerOpen(true);
  };

  const handleExploreProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewAllProducts = () => {
    setIsProductDrawerOpen(true);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating to a new page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'products':
        return (
          <ProductsPage
            onProductClick={handleProductClick}
            onViewAllProducts={handleViewAllProducts}
          />
        );
      case 'rd':
        return <RDPage />;
      case 'company':
        return <CompanyPage />;
      case 'about':
        return <AboutUsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'manufacturing':
        return <ManufacturingPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'investors':
        return <InvestorsPage />;
      case 'leadership':
        return <LeadershipPage />;
      case 'careers':
        return <CareersPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsOfUsePage />;
      case 'cookies':
        return <CookiePolicyPage />;
      case 'quality':
        return <QualityCompliancePage />;
      case 'distributors':
        return <DistributorPortalPage />;
      case 'home':
      default:
        return (
          <HomePage
            onProductClick={handleProductClick}
            onViewAllProducts={handleViewAllProducts}
            onRequestSample={() => setIsSampleModalOpen(true)}
            onExploreProducts={handleExploreProducts}
            onViewGallery={() => handleNavigate('gallery')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header
        onReportAdverseEvent={() => setIsPVModalOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <main>{renderPage()}</main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating PV Button (Desktop) */}
      <PVFloatingButton onClick={() => setIsPVModalOpen(true)} />

      {/* Modals */}
      <ProductPreviewDrawer
        isOpen={isProductDrawerOpen}
        onClose={() => setIsProductDrawerOpen(false)}
        onRequestSample={() => {
          setIsProductDrawerOpen(false);
          setIsSampleModalOpen(true);
        }}
        productId={selectedProductId}
      />

      <SampleRequestModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
      />

      <PVFormModal
        isOpen={isPVModalOpen}
        onClose={() => setIsPVModalOpen(false)}
      />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
