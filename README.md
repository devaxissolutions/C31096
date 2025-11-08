# PharmaCorp - Homepage Prototype

> Modern, responsive homepage for a leading pharmaceutical company

**Clinical design • Multi-stakeholder focus • Accessibility-first • WCAG 2.1 AA compliant**

## 🎯 Overview

A fully functional, responsive homepage prototype designed for a pharmaceutical company, featuring:

- **Clinical aesthetics** - Professional, trustworthy design
- **Multi-audience support** - HCPs, patients, distributors, investors
- **Accessibility compliance** - WCAG 2.1 AA standard
- **Performance optimized** - Fast load times and smooth interactions

## 📋 Features

- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Interactive product search with instant suggestions
- ✅ Pharmacovigilance reporting system
- ✅ Sample request forms
- ✅ Multi-page navigation
- ✅ Component library with design system
- ✅ Accessibility compliant

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4.0
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **State**: React useState

## 📁 Project Structure

```
/
├── src/
│   ├── App.tsx                    # Main app component
│   ├── pages/                     # Page components
│   │   ├── HomePage.tsx          # Landing page
│   │   ├── ProductsPage.tsx      # Product catalog
│   │   └── ...                   # Other pages
│   ├── components/               # Reusable components
│   │   ├── Header.tsx           # Navigation
│   │   ├── HeroRedesign.tsx     # Hero section
│   │   └── ui/                  # UI components
│   ├── admin/                   # Admin panel
│   └── lib/                     # Utilities & config
├── public/                      # Static assets
└── docs/                        # Documentation (local only)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Variables

```env
# Firebase (for admin features)
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id

# Optional: Analytics
VITE_GA_ID=UA-XXXXXXX-X
```

## 📱 Pages

- **Home** (`/`) - Overview with hero, products, company info
- **Products** (`/products`) - Complete catalog with search
- **R&D** (`/rd`) - Research pipeline and clinical trials
- **Company** (`/company`) - About us, leadership, facilities
- **Resources** (`/resources`) - HCP and patient resources
- **Investors** (`/investors`) - Financial info and reports

## 🔄 Interactive Features

- **Product Search** - Instant suggestions and filtering
- **Sample Requests** - Modal forms for product samples
- **PV Reporting** - Multi-step pharmacovigilance forms
- **Admin Panel** - Content management system

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- High contrast ratios
- Semantic HTML

## 📊 Performance

- Lighthouse score: 90+ (target)
- Fast loading times
- Optimized images
- Minimal layout shift

## 🤝 Contributing

1. Follow ESLint configuration
2. Use TypeScript for type safety
3. Maintain accessibility standards
4. Follow design system tokens
5. Test on multiple browsers

## 📞 Support

- **Technical**: Check component source code
- **Design**: See design system documentation
- **Accessibility**: WCAG 2.1 AA compliant

## 📄 License

© 2025 PharmaCorp. All rights reserved.

---

**Version**: 1.0.0  
**Status**: ✅ Production Ready  
**Built with**: React + Tailwind CSS
