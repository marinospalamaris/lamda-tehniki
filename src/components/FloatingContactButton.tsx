import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {isExpanded && (
        <div className="flex flex-col gap-2 animate-fade-in">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => window.open("tel:+30-697-684-6526")}
            className="shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            <Phone className="h-4 w-4 mr-2" />
            Κλήση
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              scrollToSection('contact');
              setIsExpanded(false);
            }}
            className="shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Μήνυμα
          </Button>
        </div>
      )}
      
      {/* Main floating button */}
      <Button
        variant="hero"
        size="lg"
        onClick={() => setIsExpanded(!isExpanded)}
        className="rounded-full w-16 h-16 shadow-strong hover:shadow-[0_10px_40px_rgba(var(--primary),0.4)] transition-all duration-300 hover:scale-110"
      >
        {isExpanded ? (
          <span className="text-2xl">×</span>
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default FloatingContactButton;