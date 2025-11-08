import { Linkedin, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    company: [
      { label: 'About PharmaCorp', page: 'company' },
      { label: 'Leadership', page: 'leadership' },
      { label: 'Careers', page: 'careers' },
      { label: 'Contact', page: 'contact' },
    ],
    products: [
      { label: 'Product Catalog', page: 'products' },
      { label: 'Therapeutic Areas', page: 'products' },
      { label: 'R&D Pipeline', page: 'rd' },
    ],
    resources: [
      { label: 'HCP Resources', page: 'resources' },
      { label: 'Pharmacovigilance', page: 'resources' },
      { label: 'Quality & Compliance', page: 'quality' },
      { label: 'Distributor Portal', page: 'distributors' },
    ],
    legal: [
      { label: 'Privacy Policy', page: 'privacy' },
      { label: 'Terms of Use', page: 'terms' },
      { label: 'Cookie Policy', page: 'cookies' },
    ],
  };

  const handleLinkClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-[var(--text-900)] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={(e) => handleLinkClick(e, link.page)}
                    className="text-sm text-white/70 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={(e) => handleLinkClick(e, link.page)}
                    className="text-sm text-white/70 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={(e) => handleLinkClick(e, link.page)}
                    className="text-sm text-white/70 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={(e) => handleLinkClick(e, link.page)}
                    className="text-sm text-white/70 hover:text-white transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <p>
                PharmaCorp<br />
                Pharmaceutical Division
              </p>
              <p>
                Global Headquarters<br />
                Country Selector ↓
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="#linkedin"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#twitter"
                  className="hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#youtube"
                  className="hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 PharmaCorp. All rights reserved.</p>
            <p className="text-xs">
              This website is intended for healthcare professionals and authorized distributors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
