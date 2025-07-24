import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram,
  Wrench
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Αρχική", href: "#home" },
    { name: "Υπηρεσίες", href: "#services" },
    { name: "Σχετικά", href: "#about" },
    { name: "Επικοινωνία", href: "#contact" }
  ];

  const services = [
    "Επισκευή Διαρροών",
    "Οικιακές Εγκαταστάσεις", 
    "Επαγγελματικά Έργα",
    "Μπάνια & Κουζίνες",
    "24/7 Έκτακτη Ανάγκη"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/41708dc9-804f-40b6-980f-954881ccd499.png" 
                alt="Λάμδα Τεχνική Logo" 
                className="h-24 w-24 md:h-28 md:w-28 object-contain"
              />
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Ο Μιχάλης Λοκόσης και η ομάδα μας προσφέρουν επαγγελματικές 
              υδραυλικές υπηρεσίες με 20+ χρόνια εμπειρίας στον Πειραιά.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.tiktok.com/@mixalislokoshs" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Υπηρεσίες</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Επικοινωνία</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <a href="tel:+30-697-684-6526" className="font-medium hover:text-accent transition-colors">697 684 6526</a>
                  <p className="text-sm text-primary-foreground/80">24/7 Επείγουσα</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-accent" />
                <div>
                  <p className="font-medium">info@lamdatehniki.gr</p>
                  <p className="text-sm text-primary-foreground/80">Απαντάμε σε 2 ώρες</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium animate-fade-in">
                      Περιοχές Εξυπηρέτησης
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-primary-foreground/10 text-primary-foreground px-2 py-1 rounded text-xs hover-scale transition-all duration-300">
                      Πειραιάς & Γύρω Περιοχές
                    </span>
                    <span className="inline-block bg-accent/30 text-accent-foreground px-2 py-1 rounded text-xs font-medium hover-scale transition-all duration-300">
                      Άμεση εξυπηρέτηση
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80">
                © {currentYear} Lamda Tehniki - Μιχάλης Λοκόσης. Όλα τα δικαιώματα διατηρούνται.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/80 text-sm">
                Πιστοποιημένος Υδραυλικός | Αδ. Άσκησης Επαγγέλματος
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;