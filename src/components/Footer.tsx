import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
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
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/15c342f7-221e-4962-b976-c0d14f985b2a.png" 
                alt="Λάμδα Τεχνική Logo" 
                className="h-20 w-20 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">Λάμδα Τεχνική</h3>
                <p className="text-primary-foreground/80">365 μέρες 24 ώρες υδραυλικός</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Ο Μιχάλλης Λοκόσης και η ομάδα μας προσφέρουν επαγγελματικές 
              υδραυλικές υπηρεσίες με 20+ χρόνια εμπειρίας στην Αθήνα.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
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
                  <a href="tel:6976846526" className="font-medium hover:text-accent transition-colors">6976846526</a>
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
                <div>
                  <p className="font-medium">Αθήνα & Πειραιάς</p>
                  <p className="text-sm text-primary-foreground/80">Ευρύτερη Αττική</p>
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
                © {currentYear} Λάμδα Τεχνική - Μιχάλλης Λοκόσης. Όλα τα δικαιώματα διατηρούνται.
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