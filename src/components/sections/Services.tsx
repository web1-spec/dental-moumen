import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, ShieldPlus, Activity } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function Services() {
  return (
    <section id="soins" className="pt-6 pb-12 md:pt-10 md:pb-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-h2 text-burgundy-900 mb-6">Nos expertises</h2>
            <p className="text-body text-charcoal/80">
              Une gamme complète de soins dentaires alliant technologie de pointe et confort, pour répondre à tous vos besoins fonctionnels et esthétiques.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[24px] lg:gap-[32px]">
          {siteConfig.services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const images = [
    "https://res.cloudinary.com/hga2p0nl/image/upload/v1788453024/WhatsApp_Image_2026-09-03_at_18.29.38_skwfvq.jpg", // Soins
    "https://res.cloudinary.com/hga2p0nl/image/upload/v1788453025/WhatsApp_Image_2026-09-03_at_18.29.37_tagfvz.jpg", // Esthetique
    "https://res.cloudinary.com/hga2p0nl/image/upload/v1788453024/WhatsApp_Image_2026-09-03_at_18.29.37_1_bkbao3.jpg", // Prothese
    "https://res.cloudinary.com/hga2p0nl/image/upload/v1788453467/WhatsApp_Image_2026-09-03_at_18.35.41_m2koog.jpg"  // Chirurgie
  ];

  const imagePositions = [
    "center 40%", // Soins
    "center 30%", // Esthetique
    "center center", // Prothese
    "center 20%"  // Chirurgie
  ];

  const Icons = [Stethoscope, Sparkles, ShieldPlus, Activity];
  const Icon = Icons[index];

  return (
    <motion.div
      onClick={() => {
        window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: service.title } }));
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="group relative overflow-hidden rounded-[20px] md:rounded-[28px] cursor-pointer bg-charcoal aspect-[3/4] md:aspect-[4/5] w-full"
    >
      <div className="absolute inset-0">
        <img 
          src={images[index]} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04] contrast-[1.03] saturate-[0.95]"
          style={{ objectPosition: imagePositions[index] }}
        />
        {/* Subtle Warm Color Grading */}
        <div className="absolute inset-0 bg-[#441720] mix-blend-color opacity-10 pointer-events-none"></div>
        
        {/* Premium Gradient Overlay */}
        <div 
          className="absolute inset-0 transition-opacity duration-[800ms] pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.50) 100%)'
          }}
        ></div>
        
        {/* Subtle Hover Darkening for Readability */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-[800ms] pointer-events-none"></div>
      </div>
      
      <div className="relative z-10 p-6 md:p-9 flex flex-col justify-between h-full pointer-events-none">
        {/* Top Content: Number & Icon */}
        <div className="flex items-start justify-between w-full">
          <div className="text-white/90 font-sans font-medium text-sm md:text-base tracking-[0.1em] mt-2">
            0{index + 1}
          </div>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transform transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-rotate-12 group-hover:bg-white/20 shrink-0">
            <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.25} />
          </div>
        </div>
        
        {/* Bottom Content: Title & Description */}
        <div className="mt-auto">
          <h3 className="text-h3 text-white mb-0 drop-shadow-sm transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2">
            {service.title}
          </h3>
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)]">
            <div className="overflow-hidden">
              <p className="text-white/90 font-sans font-normal text-sm md:text-base leading-[1.65] max-w-[95%] mb-0 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-[800ms] delay-75">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
