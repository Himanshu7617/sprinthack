import { UserRound } from "lucide-react";
import QuotesCarousel from "./QuotesCarousel";
import image from "../assets/logo.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] w-full from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={image} alt="Logo" width="120" height="40" className="h-10" />
          </div>
          <button className="flex items-center gap-2 border px-4 py-2 rounded hover:bg-black hover:text-white transition duration-200 hover:cursor-pointer">
            <UserRound size={18} />
            <span >Login</span>
          </button>
        </nav>

        
      </div>
      <div className="mt-16 flex flex-col items-center justify-center">
          <QuotesCarousel />
        </div>
    </section>
    
  );
}
