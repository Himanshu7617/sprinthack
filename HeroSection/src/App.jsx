import GallerySection from "./components/GallerySection";
import QuotesCarousel from "./components/QuotesCarousel";
import WhyUsSection from "./components/WhyUsSection";
import PricingSection from "./components/PricingSection";
import HorizontalLoop from "./components/HorizontalLoop";
import Footer from "./components/Footer";
import { UserRound } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



export default function App() {
  return (
    <main className="min-h-screen">
      <section id="home" className="relative min-h-[80vh] w-full bg-white">
        <div className="container mx-auto px-4 py-6">
          {/* Navbar */}
          <nav className="flex items-center justify-between">

            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h1 className="text-xl font-bold text-black ml-2">Civic Platform</h1>
            </div>

            {/* Center: Navigation Links */}
            <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
              <li>
                <a href="#home" className="hover:text-black transition">Home</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-black transition">Pricing</a>
              </li>
              <li>
                <a href="#about" className="hover:text-black transition">About</a>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger><a href="#contact" className="hover:text-black transition">Contact</a></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Aditya Maurya</DialogTitle>
                      <DialogDescription>
                        <div>
                          <p>Naimish</p>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>

            {/* Right: Login Button */}
            <button className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-black hover:text-white transition duration-200">
              <UserRound size={18} />
              <span>Login</span>
            </button>
          </nav>
        </div>

        {/* Quotes Carousel Section */}
        <div className="mt-6 flex flex-col items-center justify-center">
          <QuotesCarousel />

        </div>
        <div>
          <HorizontalLoop/>
        </div>
      </section>
      <GallerySection />
      <section id="about"> <WhyUsSection /></section>

      <section id="pricing"><PricingSection /></section>

      <Footer />

    </main>
  );
}
