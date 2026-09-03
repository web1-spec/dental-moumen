import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="cabinet" className="pt-4 pb-2 md:pt-10 md:pb-6 bg-ivory overflow-hidden">
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
                src="https://res.cloudinary.com/hga2p0nl/image/upload/v1788451813/WhatsApp_Image_2026-09-03_at_18.09.27_1_alu3r1.jpg" 
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
                src="https://res.cloudinary.com/hga2p0nl/image/upload/v1788451811/WhatsApp_Image_2026-09-03_at_18.08.28_m7rilg.jpg" 
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
                  Au Ghezoui Dental Centre, nous croyons qu'une visite chez le dentiste doit être une expérience sereine, professionnelle et sur mesure.
                </p>
                <p>
                  Le Dr Soumia Ghezoui et son équipe vous accueillent dans un cadre moderne à Oujda, équipé des dernières technologies dentaires. Nous accordons une importance primordiale à l'écoute, afin de comprendre vos attentes avant de proposer une solution.
                </p>
                <p>
                  De la prévention aux restaurations esthétiques complexes, chaque détail est travaillé pour un résultat harmonieux et durable.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-burgundy/10">
                <div className="flex items-center space-x-5">
                  {/* Doctor avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-burgundy/10 overflow-hidden border border-burgundy/20 shrink-0">
                     <img src="https://res.cloudinary.com/hga2p0nl/image/upload/v1788451811/WhatsApp_Image_2026-09-03_at_18.08.28_m7rilg.jpg" alt="Dr Soumia Ghezoui" className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="text-h3 text-burgundy-900 mb-0.5">Dr Soumia Ghezoui</h4>
                    <p className="text-sm font-medium tracking-wide uppercase text-charcoal/50 m-0">Chirurgien Dentiste</p>
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
