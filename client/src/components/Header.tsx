import { useState, useEffect } from "react";
import { Truck, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = document.getElementById('mobile-menu');
      const menuButton = target.closest('[data-testid="button-mobile-menu"]');
      
      if (!menuButton && mobileMenu && !mobileMenu.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-card shadow-lg z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Truck className="text-primary-foreground w-6 h-6" />
            </div>
            <div className="text-xl font-bold text-primary font-arabic">سطحة جدة</div>
          </div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 space-x-reverse font-arabic">
            <li>
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-home"
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-about"
              >
                من نحن
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-services"
              >
                خدماتنا
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-blog"
              >
                المدونة
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-contact"
              >
                تواصل معنا
              </a>
            </li>
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`mobile-menu md:hidden bg-card border-t border-border font-arabic ${isMobileMenuOpen ? 'open' : ''}`}
        >
          <ul className="py-4 space-y-2">
            <li>
              <a 
                href="#" 
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg font-medium"
                data-testid="link-mobile-home"
              >
                الرئيسية
              </a>
            </li>
            <li>
              <a 
                href="/about" 
                className="block px-4 py-2 text-muted-foreground hover:bg-muted rounded-lg font-medium"
                data-testid="link-mobile-about"
              >
                من نحن
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block px-4 py-2 text-muted-foreground hover:bg-muted rounded-lg font-medium"
                data-testid="link-mobile-services"
              >
                خدماتنا
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block px-4 py-2 text-muted-foreground hover:bg-muted rounded-lg font-medium"
                data-testid="link-mobile-blog"
              >
                المدونة
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="block px-4 py-2 text-muted-foreground hover:bg-muted rounded-lg font-medium"
                data-testid="link-mobile-contact"
              >
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
