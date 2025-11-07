# Admin Panel - Content Management System

A comprehensive, production-ready admin panel built with React, TypeScript, and Shadcn UI for managing business website content.

## Features

### 🎨 Design & UX
- **Shadcn UI Components**: Professional, accessible UI components
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Responsive Design**: Mobile-first approach with WCAG 2.1 AA compliance
- **Modern UI**: Clean, minimalist design with smooth animations

### 🔐 Authentication & Security
- **Role-based Access Control**: Admin, Editor, Viewer roles
- **Protected Routes**: Automatic redirects for unauthorized access
- **Session Management**: Persistent login with automatic logout
- **Form Validation**: Zod schema validation with React Hook Form

### 📊 Dashboard & Analytics
- **Key Metrics**: Visitors, revenue, content items overview
- **Interactive Charts**: Recharts integration for data visualization
- **Activity Feed**: Real-time content change tracking
- **Quick Actions**: Fast access to common tasks

### 📝 Content Management
- **Products**: Full CRUD with categories, pricing, images
- **Testimonials**: Client reviews with ratings and photos
- **Team Members**: Staff profiles with social links
- **Gallery**: Image management with categories
- **Company Stats**: Achievements and milestones
- **Contact Info**: Multiple contact methods and locations

### 🛠️ Technical Features
- **TypeScript**: Full type safety throughout the application
- **Lazy Loading**: Code splitting for optimal performance
- **Error Boundaries**: Graceful error handling and recovery
- **API Integration**: REST and Firebase examples included
- **Drag & Drop**: Reorderable lists with @dnd-kit
- **File Uploads**: Image optimization and preview
- **Search & Filtering**: Advanced data management

## Installation & Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Backend API (REST or Firebase)

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Shadcn Sidebar Component**
   ```bash
   npx shadcn@latest add sidebar
   ```

3. **Install Additional Packages**
   ```bash
   npm install zod @hookform/resolvers @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
   ```

4. **Environment Configuration**
   Create `.env.local`:
   ```env
   REACT_APP_API_URL=https://your-api-url.com
   REACT_APP_FIREBASE_CONFIG={"apiKey":"...","authDomain":"...","projectId":"..."}
   ```

### Project Structure
```
src/admin/
├── components/          # Reusable admin components
│   ├── AdminLayout.tsx  # Main layout with sidebar
│   ├── DataTable.tsx    # Sortable, filterable table
│   ├── FormDialog.tsx   # Dynamic form modal
│   ├── ConfirmDialog.tsx# Delete confirmation
│   ├── ErrorBoundary.tsx# Error handling
│   └── theme-toggle.tsx # Theme switcher
├── pages/              # Admin page components
│   ├── DashboardPage.tsx
│   ├── ProductsPage.tsx
│   └── LoginPage.tsx
├── hooks/              # Custom hooks
│   └── use-auth.tsx    # Authentication logic
├── lib/                # Utilities
│   ├── api.ts          # API integration examples
│   └── theme-provider.tsx
├── types/              # TypeScript definitions
│   └── index.ts        # All data models
└── index.ts            # Module exports
```

## Usage

### Basic Setup

1. **Wrap your app with providers**:
   ```tsx
   import { ThemeProvider, AuthProvider } from './admin';

   function App() {
     return (
       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
         <AuthProvider>
           {/* Your app content */}
         </AuthProvider>
       </ThemeProvider>
     );
   }
   ```

2. **Add admin routes**:
   ```tsx
   import { AdminRouter } from './admin';

   // In your router configuration
   <Route path="/admin/*" element={<AdminRouter />} />
   ```

### Authentication

The admin panel includes a complete authentication system:

- **Login**: `/admin/login`
- **Dashboard**: `/admin/dashboard` (protected)
- **Content Pages**: `/admin/products`, `/admin/testimonials`, etc.

**Demo Credentials**:
- Email: `admin@example.com`
- Password: `password`

### API Integration

#### REST API Example
```typescript
import { restApi, contentApi } from './admin/lib/api';

// Set auth token
restApi.setToken(localStorage.getItem('auth_token'));

// CRUD operations
const products = await contentApi.getProducts();
const newProduct = await contentApi.createProduct(productData);
```

#### Firebase Example
```typescript
import { firebaseApi } from './admin/lib/api';

// Real-time data
const unsubscribe = firebaseApi.onCollectionChange('products', (data) => {
  setProducts(data);
});

// CRUD operations
await firebaseApi.addDocument('products', productData);
```

### Customizing Content Types

1. **Add new types** in `src/admin/types/index.ts`
2. **Create page component** in `src/admin/pages/`
3. **Add API methods** in `src/admin/lib/api.ts`
4. **Update routing** in `src/admin/components/AdminRouter.tsx`
5. **Add menu item** in `src/admin/components/AdminLayout.tsx`

## Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting (configure in your IDE)
- **Error Boundaries**: Graceful error handling
- **Accessibility**: WCAG 2.1 AA compliance

### Best Practices

- Use functional components with hooks
- Implement proper loading states
- Add error handling for all async operations
- Use TypeScript interfaces for all data
- Follow React best practices (keys, memo, etc.)
- Keep components small and focused
- Use custom hooks for shared logic

## Deployment

### Build Configuration

The admin panel is built with Vite and includes:

- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Image and font optimization
- **CSS Minification**: Tailwind CSS purging
- **TypeScript Compilation**: Type checking and minification

### Environment Variables

```env
# API Configuration
REACT_APP_API_URL=https://api.yourdomain.com
REACT_APP_FIREBASE_CONFIG={"apiKey":"...","projectId":"..."}

# Feature Flags
REACT_APP_ENABLE_FIREBASE=false
REACT_APP_ENABLE_ANALYTICS=true
```

### Production Checklist

- [ ] Set production API URLs
- [ ] Configure error reporting (Sentry, etc.)
- [ ] Set up monitoring and analytics
- [ ] Configure CDN for assets
- [ ] Test all CRUD operations
- [ ] Verify responsive design
- [ ] Check accessibility compliance
- [ ] Performance optimization

## Contributing

1. Follow the existing code style
2. Add TypeScript types for new features
3. Include tests for new components
4. Update documentation
5. Follow commit message conventions

## License

This project is part of the main application and follows the same license terms.

## Support

For questions or issues:
1. Check the documentation
2. Review existing issues
3. Create a new issue with detailed information
4. Include browser/console logs for debugging