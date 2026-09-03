import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MoveHorizontal, Quote } from 'lucide-react';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="resultats" className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          
          {/* Testimonial & Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <h2 className="text-h2 text-burgundy-900 mb-8">
              L'art du <br/> <span className="text-champagne">sourire.</span>
            </h2>
            
            <div className="relative bg-ivory p-8 md:p-10 rounded-[2rem] border border-burgundy/5">
              <Quote size={40} className="text-champagne/20 absolute top-6 left-6" />
              <p className="text-charcoal/80 text-quote relative z-10">
                "Un résultat incroyablement naturel. J'ai enfin retrouvé confiance en moi, avec un accompagnement parfait du début à la fin."
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center">
                  <span className="text-burgundy font-serif font-bold text-lg">P</span>
                </div>
                <div>
                  <h4 className="text-body font-medium text-charcoal">Patiente du cabinet</h4>
                  <p className="text-eyebrow text-charcoal/50 mt-1">Dentisterie esthétique</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal', { detail: { service: 'Dentisterie esthétique' } }))}
              className="mt-10 inline-flex items-center text-champagne text-eyebrow hover:text-burgundy transition-colors duration-500 group"
            >
              Parler de mon sourire <span className="ml-3 group-hover:translate-x-2 transition-transform duration-500 ease-out">→</span>
            </button>
          </motion.div>

          {/* Before/After Slider */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-3 relative cursor-ew-resize select-none group"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={(e) => handleInteractionStart(e.clientX)}
            onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
          >
            {/* Main Parent Container */}
            <div className="relative aspect-[16/10] w-full bg-ivory rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
              
              {/* Before Image (Base layer) */}
              <img 
                src="https://res.cloudinary.com/hga2p0nl/image/upload/v1788461827/WhatsApp_Image_2026-09-03_at_20.56.24_1_wcj8dx.jpg" 
                alt="Avant traitement" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ objectPosition: 'center 25%' }}
                draggable={false}
              />
              <div className="absolute top-6 left-6 bg-burgundy/90 backdrop-blur px-5 py-2 rounded-full text-eyebrow text-white z-10 pointer-events-none">
                Avant
              </div>

              {/* After Image (Top layer, revealed by clipping from left) */}
              <div 
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <img 
                  src="https://res.cloudinary.com/hga2p0nl/image/upload/v1788461827/WhatsApp_Image_2026-09-03_at_20.56.24_lgrqjs.jpg" 
                  alt="Après traitement" 
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: 'center 25%' }}
                  draggable={false}
                />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-5 py-2 rounded-full text-eyebrow text-burgundy z-10 pointer-events-none">
                  Après
                </div>
              </div>

              {/* Slider Handle & Divider */}
              <div 
                className="absolute top-0 bottom-0 w-[3px] bg-white z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_0_20px_rgba(0,0,0,0.2)] flex items-center justify-center text-burgundy transition-transform group-hover:scale-110">
                  <MoveHorizontal size={24} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
