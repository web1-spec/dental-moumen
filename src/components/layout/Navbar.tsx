import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
        setMobileMenuOpen(false); // Close mobile menu when hiding navbar
      } else if (currentScrollY < lastScrollY.current || currentScrollY < 20) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Le cabinet', href: '#cabinet' },
    { name: 'Soins', href: '#soins' },
    { name: 'Résultats', href: '#resultats' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled ? 'bg-ivory/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="font-serif text-2xl tracking-wide text-burgundy font-semibold uppercase leading-none">
            Ghezoui
            <span className="block text-[0.65rem] tracking-[0.25em] text-champagne font-sans mt-1.5">
              Dental Centre
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-nav transition-colors ${
                  isActive ? 'text-burgundy' : 'text-charcoal hover:text-burgundy'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-1.5 left-0 w-full h-[2px] bg-champagne transform origin-left transition-transform duration-300 ease-out ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`} 
                />
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center space-x-2 text-charcoal hover:text-burgundy transition-colors text-nav"
          >
            <Phone size={16} />
            <span className="sr-only">Appeler</span>
          </a>
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('open-booking-modal'));
            }}
            className="bg-burgundy text-white px-6 py-2.5 rounded-full text-btn hover:bg-burgundy-900 transition-all flex items-center space-x-2 shadow-md shadow-burgundy/20 animate-subtle-pulse hover:-translate-y-0.5"
          >
            <Calendar size={16} />
            <span>Prendre RDV</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-ivory shadow-lg border-t border-burgundy/10 md:hidden flex flex-col p-6 space-y-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-nav text-lg transition-all duration-300 ${
                  isActive ? 'text-burgundy pl-4 border-l-2 border-champagne' : 'text-charcoal'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="h-px w-full bg-burgundy/10 my-2"></div>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center space-x-3 text-charcoal text-lg"
          >
            <Phone size={20} className="text-burgundy" />
            <span>Appeler le {siteConfig.contact.phoneDisplay}</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              window.dispatchEvent(new CustomEvent('open-booking-modal'));
            }}
            className="bg-burgundy text-white px-6 py-3 rounded-full text-center text-btn w-full flex items-center justify-center space-x-2 animate-subtle-pulse"
          >
            <Calendar size={20} />
            <span>Prendre rendez-vous</span>
          </button>
        </div>
      )}
    </nav>
  );
}
