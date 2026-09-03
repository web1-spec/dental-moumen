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
        <div className="flex-shrink-0 cursor-pointer flex items-center space-x-2" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-8 h-8 rounded-full bg-burgundy/10 overflow-hidden flex items-center justify-center shrink-0">
            <img src="https://res.cloudinary.com/hga2p0nl/image/upload/v1788470473/WhatsApp_Image_2026-09-03_at_23.19.53_nktu7u.jpg" alt="Dr Chaymae Moumen" className="w-full h-full object-cover" />
          </div>
          <div className="font-serif text-xl tracking-wide text-burgundy font-semibold uppercase leading-none">
            Dr Chaymae Moumen
            <span className="block text-[0.6rem] tracking-[0.2em] text-champagne font-sans mt-1.5 font-bold">
              Centre Dentaire
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
            className="bg-burgundy text-white px-6 py-2.5 rounded-full text-btn hover:bg-burgundy-900 transition-all flex items-center space-x-2 shadow-md shadow-burgundy/20 hover:-translate-y-0.5"
          >
            <Phone size={16} />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
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
            className="bg-burgundy text-white px-6 py-3 rounded-full text-center text-btn w-full flex items-center justify-center space-x-2"
          >
            <Phone size={20} />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      )}
    </nav>
  );
}
