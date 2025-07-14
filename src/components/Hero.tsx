import { Button } from "@/components/ui/button";
import { Phone, Award, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-plumbing.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Επαγγελματικές
            <span className="bg-gradient-accent bg-clip-text text-transparent block">
              Υδραυλικές Εργασίες
            </span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Ο <strong>Μιχάλης Λοκόσης</strong> και η ομάδα της Lamda Tehniki προσφέρουν 
            αξιόπιστες και γρήγορες υδραυλικές λύσεις για το σπίτι και την επιχείρησή σας. 
            Με χρόνια εμπειρίας και σύγχρονο εξοπλισμό.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="hero" 
              onClick={() => scrollToSection('contact')}
              className="text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Επείγουσα Κλήση
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('services')}
              className="text-lg border-white text-white hover:bg-white hover:text-primary"
            >
              Δείτε τις Υπηρεσίες μας
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Award className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-white mb-2">20+ Χρόνια Εμπειρίας</h3>
              <p className="text-white/80 text-sm">Πιστοποιημένος επαγγελματίας με εκτενή εμπειρία</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-white mb-2">24/7 Διαθεσιμότητα</h3>
              <p className="text-white/80 text-sm">Άμεση ανταπόκριση σε επείγουσα περίπτωση</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-white mb-2">Εγγύηση Ποιότητας</h3>
              <p className="text-white/80 text-sm">Όλες οι εργασίες με πλήρη εγγύηση</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;