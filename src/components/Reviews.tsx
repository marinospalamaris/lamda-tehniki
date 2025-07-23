import { Star, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import profile1 from "@/assets/profile-1.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";
import profile4 from "@/assets/profile-4.jpg";
import profile5 from "@/assets/profile-5.jpg";
import profile6 from "@/assets/profile-6.jpg";

const Reviews = () => {
  const profileImages = [
    profile1,
    profile2, 
    profile3,
    profile4,
    profile5,
    profile6
  ];

  const reviews = [
    {
      id: 1,
      name: "Nikolaos Ts",
      rating: 5,
      timeAgo: "πριν από 1 μήνα",
      review: "Best Service in Town! You know that myth in Greece about never being able to find a good, trustworthy plumber? Well, that myth just got busted! Μιχάλης and his team provided exceptional service with professionalism and reliability.",
      avatar: profileImages[0],
    },
    {
      id: 2,
      name: "Q Angelina", 
      rating: 5,
      timeAgo: "πριν από 1 χρόνο",
      review: "I have make appointment with Mr Michael at Sunday, He will arrived directly, 30min he is arrived, and help me fix the water heating, it is very good, very professional, I will come back when I need help again!",
      avatar: profileImages[1],
    },
    {
      id: 3,
      name: "Chrysi Vlastou",
      rating: 5,
      timeAgo: "πριν από 2 εβδομάδες", 
      review: "Εξαιρετική εξυπηρέτηση και άμεση ανταπόκριση! Ο Μιχάλης ήρθε την ίδια μέρα που τον καλέσαμε και έλυσε το πρόβλημα με τη θέρμανση πολύ γρήγορα. Πολύ επαγγελματίας!",
      avatar: profileImages[2],
    },
    {
      id: 4,
      name: "Δημήτρης Π.",
      rating: 5,
      timeAgo: "πριν από 3 μήνες",
      review: "Άριστη δουλειά στην εγκατάσταση του νέου μου λέβητα. Οι τιμές είναι πολύ καλές και η ποιότητα των υλικών εξαιρετική. Σίγουρα θα τον προτείνω!",
      avatar: profileImages[3],
    },
    {
      id: 5,
      name: "Μαρία Κ.",
      rating: 5,
      timeAgo: "πριν από 2 μήνες",
      review: "Πολύ γρήγορη εξυπηρέτηση για επείγον θέμα με τους σωλήνες. Ήρθε σε μισή ώρα και το έφτιαξε αμέσως. Πολύ ευγενικός και εξηγεί τι κάνει.",
      avatar: profileImages[4],
    },
    {
      id: 6,
      name: "Γιάννης Σ.",
      rating: 5,
      timeAgo: "πριν από 1 μήνα",
      review: "Εξαιρετική τιμή για την εγκατάσταση ηλιακού θερμοσίφωνα. Ο Μιχάλης με συμβούλεψε για το καλύτερο μοντέλο για τις ανάγκες μου. Πολύ ικανοποιημένος!",
      avatar: profileImages[5],
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
                  <div className="h-10 w-10 rounded-full overflow-hidden bg-primary/10 flex items-center justify-center">
                    <img 
                      src={review.avatar} 
                      alt={`${review.name} profile`}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <User className="h-5 w-5 text-primary hidden" />
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
          
          <div className="mt-8">
            <a 
              href="https://reviewthis.biz/lammdatehniki"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 font-bold text-lg group overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative flex items-center gap-3">
                <Star className="h-6 w-6 fill-current group-hover:animate-pulse" />
                <span className="relative">
                  Αφήστε την αξιολόγησή σας στο Google
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-foreground/50 group-hover:w-full transition-all duration-300"></div>
                </span>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/50 to-primary/30 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;