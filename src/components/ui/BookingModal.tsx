import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar } from 'lucide-react';
import { siteConfig } from '../../config/site';

export function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState('');

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleOpen = (e: any) => {
      setIsOpen(true);
      if (e.detail?.service) {
        setService(e.detail.service);
        setMessage(`Je souhaite des informations concernant : ${e.detail.service}`);
      } else {
        setService('');
        setMessage('');
      }
    };
    window.addEventListener('open-booking-modal', handleOpen);
    return () => window.removeEventListener('open-booking-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const waMessage = `Bonjour, je souhaite prendre rendez-vous au Ghezoui Dental Centre.
    
*Nom :* ${name}
*Téléphone :* ${phone}
*Date souhaitée :* ${date || 'À définir'}
*Motif :* ${message || 'Consultation'}`;

    const url = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(waMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-lg bg-ivory rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex justify-between items-center p-6 border-b border-burgundy/10 bg-white">
              <h3 className="text-h3 text-burgundy-900 flex items-center gap-2">
                <Calendar className="text-champagne" size={24} />
                Prendre rendez-vous
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-charcoal/50 hover:text-burgundy transition-colors p-2 rounded-full hover:bg-burgundy/5"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <p className="text-body text-charcoal/80 mb-6">
                Remplissez ce formulaire court pour préparer votre demande de rendez-vous. Vous serez redirigé vers WhatsApp pour finaliser avec notre secrétariat.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-nav text-charcoal mb-1">Nom et prénom *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-burgundy/20 bg-white focus:outline-none focus:ring-2 focus:ring-champagne/50 focus:border-champagne text-charcoal"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-nav text-charcoal mb-1">Téléphone *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-burgundy/20 bg-white focus:outline-none focus:ring-2 focus:ring-champagne/50 focus:border-champagne text-charcoal"
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-nav text-charcoal mb-1">Date souhaitée (Optionnel)</label>
                  <input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-burgundy/20 bg-white focus:outline-none focus:ring-2 focus:ring-champagne/50 focus:border-champagne text-charcoal"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-nav text-charcoal mb-1">Motif ou message</label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-burgundy/20 bg-white focus:outline-none focus:ring-2 focus:ring-champagne/50 focus:border-champagne text-charcoal resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-burgundy text-white py-4 rounded-xl text-btn hover:bg-burgundy-900 transition-colors flex items-center justify-center gap-2"
                  >
                    Confirmer via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
