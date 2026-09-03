import { siteConfig } from '../../config/site';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Location() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-h2 text-burgundy-900 mb-8">
              Venir au cabinet
            </h2>
            <p className="text-body text-charcoal/80 mb-8 md:mb-12 max-w-md">
              Situé au cœur d'Oujda, le cabinet est conçu pour vous offrir une expérience de soins optimale dans un environnement apaisant.
            </p>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center shrink-0 mt-1">
                  <MapPin size={20} className="text-burgundy" />
                </div>
                <div>
                  <h4 className="text-body font-medium text-burgundy-900 mb-1">Adresse</h4>
                  <p className="text-body text-charcoal/80">
                    {siteConfig.name}<br/>
                    {siteConfig.location.address}<br/>
                    {siteConfig.location.city}, {siteConfig.location.country}
                  </p>
                  <a href={siteConfig.location.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-nav text-burgundy hover:underline">
                    Voir l'itinéraire
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center shrink-0 mt-1">
                  <Clock size={20} className="text-burgundy" />
                </div>
                <div className="w-full">
                  <h4 className="text-body font-medium text-burgundy-900 mb-2">Horaires d'ouverture</h4>
                  <div className="space-y-2 text-body text-charcoal/80 max-w-sm">
                    {siteConfig.hours.map((hour, idx) => (
                      <div key={idx} className="flex justify-between border-b border-burgundy/10 pb-1">
                        <span>{hour.days}</span>
                        <span>{hour.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 inline-block px-3 py-1 bg-burgundy/5 rounded text-eyebrow text-burgundy">
                    Sur rendez-vous uniquement
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact / Quick Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-burgundy/5 border border-ivory-dark flex flex-col justify-center"
          >
            <h3 className="text-h3 text-burgundy-900 mb-8 text-center">Contactez-nous</h3>
            
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-full p-4 border border-burgundy/20 rounded-xl flex items-center space-x-4 hover:border-burgundy hover:bg-ivory transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-burgundy/5 flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-colors text-burgundy">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-eyebrow text-charcoal/50 mb-1">Appeler le secrétariat</div>
                  <div className="text-h3 text-charcoal">{siteConfig.contact.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
                target="_blank" rel="noopener noreferrer"
                className="w-full p-4 border border-[#25D366]/20 rounded-xl flex items-center space-x-4 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors text-[#25D366]">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-eyebrow text-charcoal/50 mb-1">Message WhatsApp</div>
                  <div className="text-h3 text-charcoal">{siteConfig.contact.whatsappDisplay}</div>
                </div>
              </a>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-body text-charcoal/70 mb-4">Ou suivez-nous sur les réseaux pour découvrir notre quotidien.</p>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-nav text-burgundy hover:underline">
                @dr_soumia_ghezoui
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
