import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Send
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
        "info@lamdatehniki.gr",
        "michalis@lamdatehniki.gr"
      ],
      note: "Απαντάμε εντός 2 ωρών"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Περιοχές Εξυπηρέτησης",
      details: [
        "Αθήνα & Πειραιάς",
        "Ευρύτερη Αττική"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.");
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
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
                      <p key={detailIndex} className="font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{info.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Στείλτε μας Μήνυμα
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Όνομα *
                      </label>
                      <Input 
                        placeholder="Το όνομά σας" 
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Τηλέφωνο *
                      </label>
                      <Input 
                        placeholder="Το τηλέφωνό σας" 
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="το email σας" 
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Θέμα
                    </label>
                    <Input 
                      placeholder="Σύντομη περιγραφή του προβλήματος" 
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Μήνυμα *
                    </label>
                    <Textarea 
                      placeholder="Περιγράψτε το πρόβλημά σας λεπτομερώς..."
                      className="w-full min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Αποστολή Μηνύματος
                  </Button>
                </form>
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
              📞 6976846526
            </div>
            <Button variant="accent" size="lg">
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