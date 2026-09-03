export const siteConfig = {
  name: "Ghezoui Dental Centre",
  doctor: "Dr Soumia Ghezoui",
  description: "Des soins dentaires modernes et une dentisterie esthétique pensée pour révéler votre sourire.",
  location: {
    address: "PL 16 AOUT, IMM BENMOUSSA N18, 2 EME ETG",
    city: "Oujda",
    country: "Morocco",
    googleMapsUrl: "https://maps.google.com/?q=Ghezoui+Dental+Centre+Oujda", // Placeholder
  },
  contact: {
    phone: "0536682425",
    phoneDisplay: "05 36 68 24 25",
    whatsapp: "+212706668437",
    whatsappDisplay: "+212 7 06 66 84 37",
    whatsappMessage: "Bonjour, je souhaite prendre rendez-vous au Ghezoui Dental Centre.",
  },
  hours: [
    { days: "LUNDI – VENDREDI", time: "09:00 – 13:00 / 15:00 – 18:00" },
    { days: "SAMEDI", time: "09:00 – 13:00" },
    { days: "DIMANCHE", time: "Fermé" }
  ],
  services: [
    { id: "soins", title: "Soins dentaires", description: "Des soins conservateurs de haute qualité pour préserver la santé de vos dents au quotidien." },
    { id: "esthetique", title: "Dentisterie esthétique", description: "Révélez l'éclat naturel de votre sourire grâce à nos traitements esthétiques sur mesure." },
    { id: "prothese", title: "Prothèse", description: "Restauration de la fonction et de l'esthétique avec des prothèses de pointe." },
    { id: "chirurgie", title: "Chirurgie", description: "Interventions chirurgicalales réalisées avec précision et dans un confort optimal." }
  ],
  socials: {
    instagram: "https://instagram.com/dr_soumia_ghezoui",
  }
};
