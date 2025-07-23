import { Star, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Nikolaos Ts",
      rating: 5,
      timeAgo: "πριν από 1 μήνα",
      review: "Best Service in Town! You know that myth in Greece about never being able to find a good, trustworthy plumber? Well, that myth just got busted! Μιχάλης and his team provided exceptional service with professionalism and reliability.",
    },
    {
      id: 2,
      name: "Q Angelina", 
      rating: 5,
      timeAgo: "πριν από 1 χρόνο",
      review: "I have make appointment with Mr Michael at Sunday, He will arrived directly, 30min he is arrived, and help me fix the water heating, it is very good, very professional, I will come back when I need help again!",
    },
    {
      id: 3,
      name: "Chrysi Vlastou",
      rating: 5,
      timeAgo: "πριν από 2 εβδομάδες", 
      review: "Εξαιρετική εξυπηρέτηση και άμεση ανταπόκριση! Ο Μιχάλης ήρθε την ίδια μέρα που τον καλέσαμε και έλυσε το πρόβλημα με τη θέρμανση πολύ γρήγορα. Πολύ επαγγελματίας!",
    },
    {
      id: 4,
      name: "Δημήτρης Π.",
      rating: 5,
      timeAgo: "πριν από 3 μήνες",
      review: "Άριστη δουλειά στην εγκατάσταση του νέου μου λέβητα. Οι τιμές είναι πολύ καλές και η ποιότητα των υλικών εξαιρετική. Σίγουρα θα τον προτείνω!",
    },
    {
      id: 5,
      name: "Μαρία Κ.",
      rating: 5,
      timeAgo: "πριν από 2 μήνες",
      review: "Πολύ γρήγορη εξυπηρέτηση για επείγον θέμα με τους σωλήνες. Ήρθε σε μισή ώρα και το έφτιαξε αμέσως. Πολύ ευγενικός και εξηγεί τι κάνει.",
    },
    {
      id: 6,
      name: "Γιάννης Σ.",
      rating: 5,
      timeAgo: "πριν από 1 μήνα",
      review: "Εξαιρετική τιμή για την εγκατάσταση ηλιακού θερμοσίφωνα. Ο Μιχάλης με συμβούλεψε για το καλύτερο μοντέλο για τις ανάγκες μου. Πολύ ικανοποιημένος!",
    }
  ];

  const totalReviews = 65;
  const averageRating = 5.0;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-secondary/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Τι λένε οι πελάτες μας
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-foreground">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-muted-foreground">
              ({totalReviews} αξιολογήσεις στο Google)
            </span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Η εμπιστοσύνη των πελατών μας είναι η καλύτερη απόδειξη της ποιότητας των υπηρεσιών μας
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <Card 
              key={review.id} 
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {review.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {review.timeAgo}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  "{review.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center space-y-4">
          <a 
            href="https://g.co/kgs/pZn24wQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border/50 hover:bg-card hover:shadow-lg transition-all duration-300 group"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
              alt="Google" 
              className="h-5 w-5" 
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Δείτε όλες τις αξιολογήσεις μας στο Google Business Profile
            </span>
          </a>
          
          <div className="mt-6">
            <a 
              href="https://www.google.com/search?num=10&sca_esv=53a7f9f69fe1adbf&sxsrf=AE3TifNHTWd3UHv4yLwdNbzUBs-DOki3Kw:1753263333263&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E92PPxS8j4l2SLI8fccTB6Eq1XOOvWP74XFMvKlJHTSodNeLRhNEtmhl4ofVuw7AfSgheesFEKyVWbEcD0BrdFLZFYX3DOE3yEJwv6C3K7cLUEpDFSRZ6oJe5HBVaX_3k2oppQlS3Wmm-5ZUskM77QY1YT4nCUICENJaJfseBY0AZVnnUxpqPhtDaQgmOueRNMfafxUM5t73hJ8mlR0JFBj_iHjA&q=Lamda+Tehniki+%7C+%CE%A5%CE%B4%CF%81%CE%B1%CF%85%CE%BB%CE%B9%CE%BA%CE%AC+%CE%91%CF%80%CE%BF%CF%87%CE%AD%CF%84%CE%B5%CF%85%CF%83%CE%B7+%CE%98%CE%AD%CF%81%CE%BC%CE%B1%CE%BD%CF%83%CE%B7+%7C+%CE%A0%CE%B5%CE%B9%CF%81%CE%B1%CE%B9%CE%AC%CF%82+%CE%9A%CF%81%CE%B9%CF%84%CE%B9%CE%BA%CE%AD%CF%82&sa=X&ved=2ahUKEwjT7rTx1tKOAxUeR_EDHdP1MaIQ0bkNegQIORAD&biw=2195&bih=1066&dpr=1.75"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-semibold"
            >
              <Star className="h-5 w-5 fill-current" />
              <span>Αφήστε την αξιολόγησή σας στο Google</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;