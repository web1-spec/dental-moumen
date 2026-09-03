import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="cabinet" className="py-16 md:py-24 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Images Layout */}
          <div className="relative pb-12 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-4/5 rounded-[2rem] overflow-hidden"
            >
              <img 
                src="https://res.cloudinary.com/hga2p0nl/image/upload/v1788470473/WhatsApp_Image_2026-09-03_at_23.19.52_jwn8xd.jpg" 
                alt="Clinic Interior" 
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-10 -right-4 w-3/5 rounded-[1.5rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border-[12px] border-ivory z-20"
            >
              <img 
                src="https://res.cloudinary.com/hga2p0nl/image/upload/v1788470473/WhatsApp_Image_2026-09-03_at_23.19.53_nktu7u.jpg" 
                alt="Dental Tools" 
                className="w-full aspect-square object-cover"
              />
            </motion.div>
            
            {/* Decorative element */}
            <div className="absolute top-1/4 -left-8 w-32 h-32 bg-champagne/10 rounded-full blur-2xl -z-10" />
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-h2 text-burgundy-900 mb-8">
                Un espace pensé <br/> <span className="text-champagne">autour de vous.</span>
              </h2>
              
              <div className="space-y-6 text-body text-charcoal/80">
                <p>
                  Au Centre Dentaire Dr Chaymae Moumen, nous croyons qu'une visite chez le dentiste doit être une expérience sereine, professionnelle et sur mesure.
                </p>
                <p>
                  Le Dr Chaymae Moumen, lauréate de l'Université Internationale Abulcasis des Sciences de la Santé de Rabat, et son équipe vous accueillent dans un cadre moderne à Berkane, équipé des dernières technologies dentaires. Nous accordons une importance primordiale à l'écoute, afin de comprendre vos attentes avant de proposer une solution.
                </p>
                <p>
                  De la prévention aux restaurations esthétiques complexes et traitements orthodontiques, chaque détail est travaillé pour un résultat harmonieux et durable.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-burgundy/10">
                <div className="flex items-center space-x-5">
                  {/* Doctor avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-burgundy/10 overflow-hidden border border-burgundy/20 shrink-0 flex items-center justify-center">
                    <img src="https://res.cloudinary.com/hga2p0nl/image/upload/v1788470473/WhatsApp_Image_2026-09-03_at_23.19.53_nktu7u.jpg" alt="Dr Chaymae Moumen" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-h3 text-burgundy-900 mb-0.5">Dr Chaymae Moumen</h4>
                    <p className="text-sm font-medium tracking-wide uppercase text-charcoal/50 m-0">Chirurgien Dentiste - Orthodontie</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
