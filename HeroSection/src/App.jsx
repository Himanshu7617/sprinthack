import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import QuotesCarousel from "./components/QuotesCarousel";
import WhyUsSection from "./components/WhyUsSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";



export default function App() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GallerySection />
      <WhyUsSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
