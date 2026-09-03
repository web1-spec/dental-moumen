import { siteConfig } from '../../config/site';

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-32 md:py-24 px-6 md:px-12 border-t-8 border-burgundy">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-ivory/10 overflow-hidden flex items-center justify-center shrink-0">
              <img src="https://res.cloudinary.com/hga2p0nl/image/upload/v1788470473/WhatsApp_Image_2026-09-03_at_23.19.53_nktu7u.jpg" alt="Dr Chaymae Moumen" className="w-full h-full object-cover" />
            </div>
            <div className="font-serif text-xl tracking-wide text-ivory font-semibold uppercase leading-none">
              Dr Chaymae Moumen
              <span className="block text-[0.6rem] tracking-[0.2em] text-champagne font-sans mt-2 font-bold">
                Centre Dentaire
              </span>
            </div>
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
        <p>© {new Date().getFullYear()} Centre Dentaire Dr Chaymae Moumen. Tous droits réservés.</p>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-champagne transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
