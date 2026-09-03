import { siteConfig } from '../../config/site';
import { Phone } from 'lucide-react';

export function FloatingActions() {
  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 md:hidden bg-ivory/95 backdrop-blur-md border-t border-burgundy/10 p-4 pb-safe flex gap-3 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="flex-1 bg-burgundy text-white py-3 rounded-full flex items-center justify-center gap-2 text-btn shadow-md shadow-burgundy/20"
        >
          <Phone size={18} />
          <span>{siteConfig.contact.phoneDisplay}</span>
        </a>
      </div>
    </>
  );
}
