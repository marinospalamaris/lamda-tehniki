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
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
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
              window.open("sms:+3069768466526?body=Στείλτε%20το%20μηνυμά%20σας%20και%20θα%20σας%20καλέσουμε.");
              setIsExpanded(false);
            }}
            className="shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Στείλτε το μήνυμά σας και θα σας καλέσουμε
          </Button>
        </div>
      )}
      
      {/* Main floating button */}
      <Button
        variant="hero"
        size="default"
        onClick={() => setIsExpanded(!isExpanded)}
        className="rounded-full w-12 h-12 md:w-16 md:h-16 shadow-strong hover:shadow-[0_10px_40px_rgba(var(--primary),0.4)] transition-all duration-300 hover:scale-110"
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