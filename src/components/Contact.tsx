import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Map from "./Map";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Τηλέφωνο",
      details: [
        "6976846526"
      ],
      note: "24/7 για επείγουσες περιπτώσεις"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: [
        "michalislokoshs@gmail.com"
      ],
      note: "Απαντάμε εντός 2 ωρών"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Περιοχές Εξυπηρέτησης",
      details: [
        "Πειραιάς & Γύρω Περιοχές"
      ],
      note: "Άμεση εξυπηρέτηση"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Ωράριο Λειτουργίας",
      details: [
        "Δευτέρα - Παρασκευή: 8:00-20:00",
        "Σάββατο: 9:00-15:00"
      ],
      note: "Κυριακή κατόπιν συνεννόησης"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Επικοινωνία</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Επικοινωνήστε Μαζί Μας
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Είμαστε εδώ για να σας βοηθήσουμε με κάθε υδραυλικό πρόβλημα. 
            Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση και άμεση εξυπηρέτηση.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="text-primary">{info.icon}</div>
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, detailIndex) => (
                      info.title === "Τηλέφωνο" ? (
                       <a key={detailIndex} href="tel:+30-697-684-6526" className="font-medium hover:text-primary transition-colors">697 684 6526</a>
                      ) : (
                        <p key={detailIndex} className="font-medium">{detail}</p>
                      )
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  Περιοχή Εξυπηρέτησης
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Map />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-gradient-primary text-primary-foreground text-center p-8">
          <h3 className="text-3xl font-bold mb-4">Επείγουσα Ανάγκη;</h3>
          <p className="text-xl mb-6">
            Καλέστε μας ΤΩΡΑ για άμεση εξυπηρέτηση 24 ώρες το 24ωρο, 7 ημέρες την εβδομάδα
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-2xl font-bold">
              <a href="tel:+30-697-684-6526" className="hover:text-accent transition-colors">📞 697 684 6526</a>
            </div>
            <Button variant="accent" size="lg" onClick={() => window.open("tel:+30-697-684-6526")}>
              <Phone className="mr-2 h-5 w-5" />
              Κλήση Τώρα
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;