import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
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
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/41708dc9-804f-40b6-980f-954881ccd499.png" 
              alt="Λάμδα Τεχνική Logo" 
              className="h-21 w-21 md:h-32 md:w-32 object-contain"
            />
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
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="text-xs px-2 py-1"
            >
              Κλήση
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop contact button */}
          <Button 
            variant="hero" 
            size="sm"
            onClick={() => scrollToSection('contact')}
            className="hidden lg:flex text-sm px-4 py-2 whitespace-nowrap"
          >
            Επικοινωνήστε Μαζί Μας
          </Button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border/50 py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Αρχική
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Υπηρεσίες
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Σχετικά
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Επικοινωνία
              </button>
              <Button 
                variant="hero"
                onClick={() => scrollToSection('contact')}
                className="mt-4 w-full"
              >
                <Phone className="mr-2 h-4 w-4" />
                Επικοινωνήστε Μαζί Μας
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;