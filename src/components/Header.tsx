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
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2 text-sm border-b border-border/50 gap-2 md:gap-0">
          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <a href="tel:+30-697-684-6526" className="hover:text-primary transition-colors whitespace-nowrap">697 684 6526</a>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span className="text-xs md:text-sm">info@lamdatehniki.gr</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-xs md:text-sm">Πειραιάς & Γύρω Περιοχές</span>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src="/lovable-uploads/41708dc9-804f-40b6-980f-954881ccd499.png" 
              alt="Λάμδα Τεχνική Logo" 
              className="h-21 w-21 md:h-32 md:w-32 object-contain"
            />
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-black">Lamda Tehniki</h1>
              <span className="text-xs md:text-sm text-muted-foreground">365 μέρες 24 ώρες υδραυλικός</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
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
            className="text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Επικοινωνήστε Μαζί Μας</span>
            <span className="sm:hidden">Επικοινωνία</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;