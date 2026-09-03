import { motion } from 'framer-motion';
import { siteConfig } from '../../config/site';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-ivory selection:bg-champagne selection:text-white">
      
      {/* Cinematic Video Background Layer */}
      {/* Takes up full background to avoid any empty spaces. */}
      <div className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-[65%_center] lg:object-center motion-reduce:hidden"
          poster="https://res.cloudinary.com/hga2p0nl/image/upload/w_1920,q_auto,f_auto/v1788464398/Dentist_and_patient_smiling_1080p_202609031857_-_frame_at_0m0s_qherlh.jpg"
        >
          {/* Using Cloudinary optimizations: max width 1920px, auto quality, and providing both WebM and MP4 formats */}
          <source src="https://res.cloudinary.com/hga2p0nl/video/upload/w_1920,q_auto,f_webm/v1788454652/Dentist_and_patient_smiling_1080p_202609031857_wu0ypr.webm" type="video/webm" />
          <source src="https://res.cloudinary.com/hga2p0nl/video/upload/w_1920,q_auto,f_mp4/v1788454652/Dentist_and_patient_smiling_1080p_202609031857_wu0ypr.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback poster for reduced motion or slow connections */}
        <img 
          src="https://res.cloudinary.com/hga2p0nl/image/upload/w_1920,f_auto,q_auto/v1788464398/Dentist_and_patient_smiling_1080p_202609031857_-_frame_at_0m0s_qherlh.jpg"
          alt="Clinique dentaire haut de gamme"
          className="hidden motion-reduce:block w-full h-full object-cover object-[65%_center] lg:object-center"
        />

        {/* Subtle overall overlay to ensure contrast and premium taupe/ivory tint without ruining color grading */}
        {/* Placed behind the blending gradients so the edges can return to pure ivory */}
        <div className="absolute inset-0 bg-burgundy/5 mix-blend-multiply pointer-events-none"></div>

        {/* Elegant Blending Gradients */}
        {/* Mobile: Base text background fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/50 to-transparent lg:hidden z-10"></div>
        
        {/* Desktop: Fade smoothly from the left ivory background into the video */}
        {/* Expanded the gradient slightly to make sure the text is readable against the full-width video */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-ivory via-ivory/80 to-transparent w-[55%] z-10 pointer-events-none"></div>
        
        {/* Top gradient to guarantee Navbar readability */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-ivory/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* Long, ultra-smooth bottom gradients to seamlessly merge into the next section on ALL screens */}
        <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-gradient-to-t from-ivory via-ivory/40 to-transparent z-20 pointer-events-none"></div>
        {/* Hard anchor at the very bottom to guarantee NO horizontal seam */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-ivory via-ivory to-transparent z-20 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 h-full min-h-[85vh] lg:min-h-[90vh] pb-16 pt-32 lg:pb-12 lg:pt-32">
        
        {/* Text Content */}
        <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-end lg:justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="text-h1 text-burgundy-900 mb-8"
          >
            Votre sourire, <br />
            <span className="text-champagne block mt-2 drop-shadow-sm">notre signature.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="text-body text-charcoal/90 mb-10 max-w-md"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-booking-modal'));
              }}
              className="px-8 py-4 bg-burgundy text-white rounded-full text-btn text-center hover:bg-burgundy-900 hover:shadow-lg hover:shadow-burgundy/20 hover:-translate-y-0.5 transition-all duration-300 animate-subtle-pulse"
            >
              Prendre rendez-vous
            </button>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-ivory/80 backdrop-blur-md text-charcoal border border-burgundy/15 rounded-full text-btn text-center hover:border-burgundy/30 hover:bg-white transition-all duration-300"
            >
              Contact WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
