import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "../assets/bg.png";

const quotes = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    image: Image,
  },
  {
    id: 2,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    image: Image,
  },
  {
    id: 3,
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    image: Image,
  },
  {
    id: 4,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    image: Image,
  },
];

export default function QuotesCarousel() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl hover:cursor-pointer">
      <AnimatePresence mode="wait">
        <motion.div
          key={quotes[currentQuote].id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          <img
            src={quotes[currentQuote].image}
            alt={`Motivational image ${currentQuote + 1}`}
            className="object-cover brightness-[0.7] w-full h-full "
            style={{ objectFit: "cover", filter: "brightness(70%)" }}

          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
            <blockquote className="mb-4 max-w-2xl text-2xl font-medium italic md:text-3xl">
              "{quotes[currentQuote].text}"
            </blockquote>
            <cite className="text-lg font-semibold">— {quotes[currentQuote].author}</cite>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuote(index)}
            className={`h-2 w-2 rounded-full ${index === currentQuote ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
