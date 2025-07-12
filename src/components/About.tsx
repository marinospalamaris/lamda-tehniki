import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  CheckCircle, 
  Star,
  Calendar,
  MapPin
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: <Calendar className="h-8 w-8" />,
      number: "20+",
      label: "Χρόνια Εμπειρίας"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "1000+",
      label: "Ικανοποιημένοι Πελάτες"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      number: "2500+",
      label: "Ολοκληρωμένα Έργα"
    },
    {
      icon: <Star className="h-8 w-8" />,
      number: "5★",
      label: "Μέση Αξιολόγηση"
    }
  ];

  const certifications = [
    "Πιστοποιημένος Υδραυλικός",
    "Ειδικότητα σε Θερμικές Εγκαταστάσεις",
    "Πιστοποίηση Αερίου",
    "Εκπαίδευση σε Σύγχρονες Τεχνολογίες"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Σχετικά με Εμάς</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Μιχάλλης Λοκόσης
          </h2>
          <h3 className="text-2xl text-primary mb-8">Πιστοποιημένος Υδραυλικός</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gradient-primary rounded-lg p-8 text-primary-foreground mb-8">
              <h3 className="text-2xl font-bold mb-4">Η Εμπειρία μας</h3>
              <p className="text-lg leading-relaxed">
                Με περισσότερα από 20 χρόνια στον χώρο των υδραυλικών, ο Μιχάλλης Λοκόσης 
                και η Λάμδα Τεχνική έχουν εδραιωθεί ως μια από τις πιο αξιόπιστες εταιρείες 
                υδραυλικών υπηρεσιών στην Αθήνα.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Η Φιλοσοφία μας
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Πιστεύουμε ότι κάθε πρόβλημα έχει λύση. Προσεγγίζουμε κάθε έργο με 
                  επαγγελματισμό, προσοχή στη λεπτομέρεια και σεβασμό προς τον πελάτη. 
                  Η ικανοποίησή σας είναι η επιτυχία μας.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Περιοχές Εξυπηρέτησης
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Εξυπηρετούμε όλη την Αττική με άμεση ανταπόκριση. Ειδικά για την ευρύτερη 
                  περιοχή της Αθήνας προσφέρουμε 24/7 υπηρεσία έκτακτης ανάγκης.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="text-primary mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Πιστοποιήσεις & Ειδικότητες
              </h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-gradient-accent text-accent-foreground p-6">
              <h4 className="text-xl font-bold mb-2">Έτοιμοι να σας Βοηθήσουμε</h4>
              <p className="mb-4">
                Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση και συμβουλές
              </p>
              <div className="text-lg font-semibold">
                📧 info@lamdatehniki.gr
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;