import { motion } from 'framer-motion';
import first from '../assets/1.png';
import second from '../assets/2.png';
import third from '../assets/3.png';
import fourth from '../assets/4.png';

const popUpVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
      delay: 1 + i * 0.3,
    },
  }),
};

export default function HeroSection() {
  const images = [first, second, third, fourth];

  return (
    <div className="relative h-[83vh] w-full bg-white text-black flex flex-col items-center justify-center overflow-hidden">
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: -30 ,x:-225}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-4xl md:text-6xl font-bold absolute md:top-0 text-center z-30 px-4"
      >
        It starts with one. 
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 225 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="text-4xl md:text-6xl font-bold absolute top-10 md:top-0 text-center z-30 px-4"
      >
        Impacts many. <br />
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 75 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="text-4xl md:text-6xl font-bold absolute top-10 md:top-0 text-center z-30 px-4"
      >
        <span className="text-cyan-400">Join us.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0 }}
        className="absolute bottom-0 w-[30vw] z-10"
      >
        <img
          src={first} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-0 w-[30vw] z-10"
      >
        <img
          src={second} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute bottom-0 w-[30vw] z-10"
      >
        <img
          src={third} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
    

      {/* Crowd Image at the bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2.5 }}
        className="absolute bottom-0 w-[30vw] z-10"
      >
        <img
          src={fourth} // or a dedicated crowd image if available
          alt="Crowd"
          className="h-[200px] w-[30vw] md:h-[300px]"
        />
      </motion.div>
    </div>
  );
}
