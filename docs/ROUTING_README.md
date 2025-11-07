# EDIF Pharma React Routing System

A comprehensive, scalable routing system for the EDIF Pharma website built with React Router v6, featuring lazy loading, nested routes, SEO optimization, and TypeScript support.

## 🚀 Features

- **React Router v6**: Modern routing with hooks and nested routes
- **Lazy Loading**: Code splitting for optimal performance
- **SEO Optimized**: Dynamic page titles and meta descriptions
- **TypeScript**: Full type safety with route configurations
- **Nested Routing**: Hierarchical route structure matching navigation
- **Centralized Configuration**: Single source of truth for all routes
- **Layout Components**: Consistent header/footer across all pages
- **404 Handling**: Custom not found page with navigation options

## 📁 Project Structure

```
src/
├── components/
│   ├── routing/
│   │   ├── AppRouter.tsx          # Main routing component
│   │   └── ExampleUsage.tsx       # Usage examples
│   ├── layout/
│   │   ├── PageLayout.tsx         # Layout wrapper with SEO
│   │   └── Header.tsx             # Navigation header
│   └── ...
├── config/
│   └── routes.ts                  # Route constants and metadata
├── pages/                         # Page components (organized by category)
│   ├── products/
│   ├── rd/
│   ├── facilities/
│   ├── company/
│   ├── resources/
│   ├── investors/
│   ├── contact/
│   ├── legal/
│   ├── HomePage.tsx
│   ├── ProductsPage.tsx
│   └── NotFoundPage.tsx
└── App.tsx                        # Root component
```

## 🛣️ Route Structure

The routing system follows the website's navigation hierarchy:

```
/                           # Home
├── /products              # Products overview
│   ├── /products/all-products
│   ├── /products/product-catalog
│   ├── /products/cardiology
│   ├── /products/anti-diabetic
│   ├── /products/antibiotics
│   ├── /products/pain-management
│   ├── /products/rd-pipeline
│   ├── /products/clinical-trials-products
│   └── /products/request-sample
├── /rd                    # R&D overview
│   ├── /rd/research-focus
│   ├── /rd/innovation
│   ├── /rd/clinical-trials
│   ├── /rd/data-integrity
│   ├── /rd/partnerships
│   └── /rd/technology
├── /facilities            # Facilities overview
│   ├── /facilities/manufacturing
│   ├── /facilities/who-gmp
│   ├── /facilities/quality-assurance
│   ├── /facilities/certifications
│   ├── /facilities/quality-compliance
│   └── /facilities/green-practices
├── /company               # Company overview
│   ├── /company/about-us
│   ├── /company/mission-values
│   ├── /company/gallery
│   ├── /company/leadership
│   ├── /company/executive-team
│   ├── /company/board
│   ├── /company/global-presence
│   ├── /company/csr
│   ├── /company/careers
│   ├── /company/join-our-team
│   └── /company/life-at-edif
├── /resources             # Resources overview
│   ├── /resources/hcp-portal
│   ├── /resources/monographs
│   ├── /resources/patient-info
│   ├── /resources/safety-info
│   ├── /resources/regulatory
│   └── /resources/sds
├── /investors             # Investors overview
│   ├── /investors/investor-relations
│   ├── /investors/reports
│   ├── /investors/filings
│   ├── /investors/news
│   └── /investors/governance
├── /contact               # Contact overview
│   ├── /contact/contact-us
│   ├── /contact/distributors
│   ├── /contact/media
│   └── /contact/report-ae
├── /privacy-policy
├── /terms-of-use
└── /cookie-policy
```

## 🔧 Configuration

### Route Constants (`src/config/routes.ts`)

All routes are defined as constants for type safety and maintainability:

```typescript
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCTS_BROWSE: {
    ALL_PRODUCTS: '/products/all-products',
    PRODUCT_CATALOG: '/products/product-catalog',
  },
  // ... more routes
} as const;
```

### Page Metadata

Each route includes SEO metadata:

```typescript
export const PAGE_METADATA = {
  [ROUTES.HOME]: {
    title: 'EDIF Pharma - Trusted Medicines, Engineered for Excellence',
    description: 'EDIF Pharma delivers high-quality pharmaceutical products with WHO-GMP certified manufacturing. Explore our cardiology, diabetes, and antibiotic medications.',
  },
  [ROUTES.PRODUCTS]: {
    title: 'Products - EDIF Pharma',
    description: 'Explore our comprehensive portfolio...',
  },
  // ... more metadata
};
```

## 💻 Usage

### Basic Navigation

```tsx
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../config/routes';

function MyComponent() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(ROUTES.PRODUCTS)}>
      Go to Products
    </button>
  );
}
```

### Adding New Routes

1. **Add to route constants** (`src/config/routes.ts`):
```typescript
export const ROUTES = {
  // ... existing routes
  NEW_SECTION: '/new-section',
  NEW_SECTION_SUBPAGE: '/new-section/subpage',
} as const;
```

2. **Add page metadata**:
```typescript
export const PAGE_METADATA = {
  // ... existing metadata
  [ROUTES.NEW_SECTION]: {
    title: 'New Section - EDIF Pharma',
    description: 'Description of new section...',
  },
};
```

3. **Create page component** (`src/pages/NewSectionPage.tsx`):
```tsx
export function NewSectionPage() {
  return <div>New Section Content</div>;
}
```

4. **Add lazy import** (`src/components/routing/AppRouter.tsx`):
```typescript
const NewSectionPage = lazy(() => import('../pages/NewSectionPage').then(module => ({ default: module.NewSectionPage })));
```

5. **Add route** (`src/components/routing/AppRouter.tsx`):
```tsx
<Route path={ROUTES.NEW_SECTION} element={<NewSectionPage />} />
```

## 🎯 Key Components

### AppRouter (`src/components/routing/AppRouter.tsx`)

Main routing component that:
- Sets up all routes with lazy loading
- Provides navigation handlers
- Wraps pages with layout components
- Handles 404 routing

### PageLayout (`src/components/layout/PageLayout.tsx`)

Layout wrapper that:
- Applies consistent header/footer
- Updates page title and meta description
- Handles SEO metadata

### Route Configuration (`src/config/routes.ts`)

Centralized configuration for:
- All route paths
- Page metadata for SEO
- Type-safe route definitions

## 🚀 Performance Features

- **Code Splitting**: Each page is lazy-loaded as a separate chunk
- **Suspense Boundaries**: Loading states for better UX
- **Bundle Analysis**: Automatic chunk generation for optimal loading

## 🔍 SEO Features

- **Dynamic Titles**: Page titles update based on current route
- **Meta Descriptions**: SEO-friendly descriptions for each page
- **Clean URLs**: Hyphen-separated, lowercase URLs
- **Structured Data**: Route hierarchy reflects site structure

## 🛡️ Type Safety

Full TypeScript support with:
- Typed route constants
- Interface definitions for route metadata
- Type-safe navigation functions

## 📝 Examples

### Products Section Routes

```tsx
// Overview page
<Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />

// Browse sub-section
<Route path={ROUTES.PRODUCTS_BROWSE.ALL_PRODUCTS} element={<AllProductsPage />} />
<Route path={ROUTES.PRODUCTS_BROWSE.PRODUCT_CATALOG} element={<ProductCatalogPage />} />

// Therapeutic areas
<Route path={ROUTES.PRODUCTS_THERAPEUTIC.CARDIOLOGY} element={<CardiologyPage />} />
<Route path={ROUTES.PRODUCTS_THERAPEUTIC.ANTI_DIABETIC} element={<AntiDiabeticPage />} />
```

### Company Section with Nested Routes

```tsx
// Company overview
<Route path={ROUTES.COMPANY} element={<CompanyPage />} />

// Leadership sub-section
<Route path={ROUTES.COMPANY_LEADERSHIP.LEADERSHIP} element={<LeadershipPage />} />
<Route path={ROUTES.COMPANY_LEADERSHIP.EXECUTIVE_TEAM} element={<ExecutiveTeamPage />} />
<Route path={ROUTES.COMPANY_LEADERSHIP.BOARD} element={<BoardPage />} />

// Careers sub-section
<Route path={ROUTES.COMPANY_CAREERS.CAREERS} element={<CareersPage />} />
<Route path={ROUTES.COMPANY_CAREERS.JOIN_OUR_TEAM} element={<JoinOurTeamPage />} />
```

## 🔧 Development

### Adding a New Page

1. Create the page component in the appropriate directory
2. Update route constants and metadata
3. Add lazy import and route in AppRouter
4. Update navigation components if needed

### Testing Routes

```bash
# Build the project
npm run build

# Start development server
npm run dev
```

### Route Debugging

Use React Router DevTools or check the browser's Network tab to see code splitting in action.

## 📋 Checklist for New Routes

- [ ] Route constant added to `ROUTES`
- [ ] Page metadata added to `PAGE_METADATA`
- [ ] Page component created
- [ ] Lazy import added to `AppRouter`
- [ ] Route added to `<Routes>`
- [ ] Navigation updated if needed
- [ ] Build tested successfully

This routing system provides a solid foundation for scalable React applications with excellent performance, SEO, and developer experience.

## 📝 Recent Changes

- **Route Order Fix**: Fixed critical routing issue where more specific routes (e.g., `/products/cardiology`) were being shadowed by less specific routes (e.g., `/products`) due to incorrect route ordering in React Router v6. Routes are now ordered from most specific to least specific within each section.
- **Home Route Restoration**: The `/` (home) route has been restored with proper props and metadata.
- **Streamlined Navigation**: All navigation now works correctly with proper route matching.