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
        "info@lamdatehniki.gr"
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;
    const successMsg = document.getElementById('successMessage') as HTMLDivElement;
    const errorMsg = document.getElementById('errorMessage') as HTMLDivElement;
    
    // Disable button during submission
    if (submitBtn) {
      submitBtn.innerHTML = 'Αποστολή...';
      submitBtn.disabled = true;
    }
    
    // Hide previous messages
    if (successMsg) successMsg.style.display = 'none';
    if (errorMsg) errorMsg.style.display = 'none';
    
    try {
      const response = await fetch("https://formspree.io/f/mrbgwqyo", {
        method: "POST",
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        if (successMsg) {
          successMsg.style.display = 'block';
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        form.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      if (errorMsg) {
        errorMsg.style.display = 'block';
        errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } finally {
      if (submitBtn) {
        submitBtn.innerHTML = '<svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>Αποστολή Μηνύματος';
        submitBtn.disabled = false;
      }
    }
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
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-semibold text-foreground">Στείλτε μας Μήνυμα</h2>
              </div>

              <form onSubmit={handleSubmit} action="https://formspree.io/f/mrbgwqyo" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2">
                      Όνομα <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Το όνομά σας"
                      className="px-5 py-4 border-2 border-border rounded-lg text-base bg-background transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2">
                      Τηλέφωνο <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Το τηλέφωνό σας"
                      className="px-5 py-4 border-2 border-border rounded-lg text-base bg-background transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        let value = target.value.replace(/\D/g, '');
                        if (value.length >= 10) {
                          value = value.substring(0, 10);
                        }
                        target.value = value;
                      }}
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-6">
                  <label htmlFor="email" className="text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="το email σας"
                    className="px-5 py-4 border-2 border-border rounded-lg text-base bg-background transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex flex-col mb-6">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2">
                    Θέμα
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Σύντομη περιγραφή του προβλήματος"
                    className="px-5 py-4 border-2 border-border rounded-lg text-base bg-background transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
                  />
                </div>

                <div className="flex flex-col mb-6">
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2">
                    Μήνυμα <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Περιγράψτε το πρόβλημά σας λεπτομερώς..."
                    className="px-5 py-4 border-2 border-border rounded-lg text-base bg-background transition-all duration-300 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground resize-y min-h-[120px]"
                  />
                </div>

                {/* Hidden fields για το Formspree */}
                <input type="hidden" name="_to" value="info@lamdatehniki.gr" />
                <input type="hidden" name="_subject" value="Νέα επικοινωνία από την ιστοσελίδα" />

                <button
                  type="submit"
                  id="submitBtn"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 hover:from-primary/90 hover:to-primary/80 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send className="h-5 w-5" />
                  Αποστολή Μηνύματος
                </button>
              </form>

              <div
                id="successMessage"
                style={{ display: 'none' }}
                className="mt-5 bg-green-50 text-green-800 px-5 py-4 rounded-lg text-center border-l-4 border-green-500"
              >
                ✅ Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε σύντομα.
              </div>

              <div
                id="errorMessage"
                style={{ display: 'none' }}
                className="mt-5 bg-red-50 text-red-800 px-5 py-4 rounded-lg text-center border-l-4 border-red-500"
              >
                ❌ Υπήρξε ένα πρόβλημα. Παρακαλώ δοκιμάστε ξανά ή καλέστε μας.
              </div>
            </div>
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