import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-border/50">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href="tel:6976846526" className="hover:text-primary transition-colors">6976846526</a>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>info@lamdatehniki.gr</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>Πειραιάς & Γύρω Περιοχές</span>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/15c342f7-221e-4962-b976-c0d14f985b2a.png" 
              alt="Λάμδα Τεχνική Logo" 
              className="h-24 w-24 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">Λάμδα Τεχνική</h1>
              <span className="text-sm text-muted-foreground">365 μέρες 24 ώρες υδραυλικός</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Αρχική
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Υπηρεσίες
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Σχετικά
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Επικοινωνία
            </button>
          </div>

          <Button 
            variant="hero" 
            size="sm"
            onClick={() => scrollToSection('contact')}
          >
            Επικοινωνήστε Μαζί Μας
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;