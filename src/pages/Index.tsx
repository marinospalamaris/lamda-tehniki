import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Index;
