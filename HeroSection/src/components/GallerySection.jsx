import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Embrace the Journey",
    content: "Success is not a destination, but a journey filled with challenges, learning, and growth. Embrace each step with courage and determination, knowing that every obstacle overcome is a victory in itself.",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Reach New Heights",
    content: "Your potential is limitless. When you push beyond your comfort zone and challenge yourself to reach higher, you discover strengths you never knew you had. The view from the top is worth every step of the climb.",
    image: "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Persevere Through Challenges",
    content: "The strongest people aren't those who always succeed, but those who refuse to give up when faced with adversity. Your resilience in difficult times defines your character and shapes your future success.",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Create Your Future",
    content: "You are the architect of your own destiny. With vision, determination, and consistent action, you can build a future that reflects your deepest aspirations. Today's choices become tomorrow's reality.",
    image: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 md:text-4xl">Inspiration Gallery</h2>

        <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4 md:text-3xl">{slides[currentSlide].title}</h3>
                <p className="text-lg text-muted-foreground">{slides[currentSlide].content}</p>
              </div>

              <div className="relative h-[300px] md:h-[400px]">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="object-cover w-full h-full"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-slate-800" : "bg-slate-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
