import { siteConfig } from '../../config/site';
import { MessageCircle, Calendar } from 'lucide-react';

export function FloatingActions() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <>
      {/* Desktop Floating WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={28} />
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-charcoal text-ivory text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Besoin d'aide ?
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-ivory/95 backdrop-blur-md border-t border-burgundy/10 p-4 pb-safe flex gap-3 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white border border-burgundy/20 text-charcoal py-3 rounded-full flex items-center justify-center gap-2 text-btn shadow-sm"
        >
          <MessageCircle size={18} className="text-[#25D366]" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={() => {
            window.dispatchEvent(new CustomEvent('open-booking-modal'));
          }}
          className="flex-[1.5] bg-burgundy text-white py-3 rounded-full flex items-center justify-center gap-2 text-btn shadow-md shadow-burgundy/20"
        >
          <Calendar size={18} />
          <span>Prendre RDV</span>
        </button>
      </div>
    </>
  );
}
