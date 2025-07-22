import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Droplets, 
  Home, 
  Building, 
  Zap, 
  ShowerHead,
  Thermometer,
  Phone
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Επισκευή Διαρροών",
      description: "Γρήγορη εντοπισμός και επισκευή διαρροών σε βρύσες, σωλήνες και συνδέσεις.",
      features: ["Εντοπισμός κρυφών διαρροών", "Επισκευή σωληνώσεων", "Αντικατάσταση εξαρτημάτων"]
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "Οικιακές Εγκαταστάσεις",
      description: "Πλήρεις υδραυλικές εγκαταστάσεις για νέα σπίτια και ανακαινίσεις.",
      features: ["Σχεδιασμός δικτύου", "Εγκατάσταση σωληνώσεων", "Τοποθέτηση ειδών υγιεινής"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Επαγγελματικά Έργα",
      description: "Υδραυλικές εργασίες για επιχειρήσεις, γραφεία και βιομηχανικούς χώρους.",
      features: ["Μεγάλα έργα", "Βιομηχανικές εγκαταστάσεις", "Συντήρηση κτιρίων"]
    },
    {
      icon: <ShowerHead className="h-8 w-8" />,
      title: "Μπάνια & Κουζίνες",
      description: "Ολοκληρωμένες λύσεις για την ανακαίνιση μπάνιων και κουζινών.",
      features: ["Σχεδιασμός χώρου", "Τοποθέτηση ειδών", "Πλήρη ανακαίνιση"]
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Θέρμανση & Cooling",
      description: "Εγκατάσταση και συντήρηση συστημάτων θέρμανσης και κλιματισμού.",
      features: ["Καλοριφέρ", "Ενδοδαπέδια θέρμανση", "Συστήματα cooling"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Επείγουσες Επιδιορθώσεις",
      description: "24/7 υπηρεσία επείγουσας ανάγκης για άμεση αντιμετώπιση προβλημάτων.",
      features: ["24ωρη διαθεσιμότητα", "Άμεση ανταπόκριση", "Εξοπλισμός έκτακτης ανάγκης"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Υπηρεσίες</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Οι Υπηρεσίες μας
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Προσφέρουμε πλήρες φάσμα υδραυλικών υπηρεσιών με επαγγελματισμό, 
            ποιότητα και αξιοπιστία που μπορείτε να εμπιστευτείτε.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader>
                <div className="text-primary group-hover:text-primary-light transition-colors mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8">
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Χρειάζεστε Άμεση Βοήθεια;</h3>
              <p className="mb-6">
                Καλέστε μας τώρα για επείγουσα υδραυλική υποστήριξη 24/7
              </p>
              <div className="text-3xl font-bold">
                <a href="tel:+30-697-684-6526" className="hover:text-accent transition-colors cursor-pointer">📞 697 684 6526</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;