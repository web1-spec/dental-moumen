import { siteConfig } from '../../config/site';

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-32 md:py-24 px-6 md:px-12 border-t-8 border-burgundy">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4 md:col-span-1">
          <div className="font-serif text-3xl tracking-wide text-ivory font-semibold uppercase leading-none">
            Ghezoui
            <span className="block text-[0.65rem] tracking-[0.25em] text-champagne font-sans mt-2">
              Dental Centre
            </span>
          </div>
          <p className="font-sans text-sm text-ivory/60 mt-6 leading-[1.6]">
            {siteConfig.description}
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-h3 text-base md:text-lg text-champagne">Navigation</h4>
          <ul className="space-y-2 font-sans text-sm text-ivory/80">
            <li><a href="#cabinet" className="hover:text-ivory transition-colors">Le cabinet</a></li>
            <li><a href="#soins" className="hover:text-ivory transition-colors">Nos expertises</a></li>
            <li><a href="#contact" className="hover:text-ivory transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-h3 text-base md:text-lg text-champagne">Contact</h4>
          <ul className="space-y-2 font-sans text-sm text-ivory/80">
            <li><a href={`tel:${siteConfig.contact.phone}`} className="hover:text-ivory transition-colors">Tél: {siteConfig.contact.phoneDisplay}</a></li>
            <li>
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank" rel="noopener noreferrer"
                className="hover:text-ivory transition-colors"
              >
                WhatsApp: {siteConfig.contact.whatsappDisplay}
              </a>
            </li>
            <li className="pt-2">
              <p>{siteConfig.location.address}</p>
              <p>{siteConfig.location.city}, {siteConfig.location.country}</p>
            </li>
          </ul>
        </div>

        {/* Horaires */}
        <div className="space-y-4">
          <h4 className="text-h3 text-base md:text-lg text-champagne">Horaires</h4>
          <ul className="space-y-2 font-sans text-sm text-ivory/80">
            {siteConfig.hours.map((hour, idx) => (
              <li key={idx} className="flex justify-between border-b border-ivory/10 pb-1">
                <span>{hour.days}</span>
                <span className="text-right">{hour.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row justify-between items-center font-sans text-xs text-ivory/50">
        <p>© {new Date().getFullYear()} Ghezoui Dental Centre. Tous droits réservés.</p>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
