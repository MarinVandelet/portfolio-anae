import { motion } from "framer-motion";
import bg from "../assets/images/banner/bg.jpeg";

export default function HomeBanner() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />

      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          style={{
            fontFamily: "Parisienne",
            transformOrigin: "50% 60%",
          }}
          animate={{ scale: 1.02 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="
            text-[48px]           /* Mobile */
            sm:text-[70px]        /* Petit écran */
            md:text-[110px]       /* Tablette */
            lg:text-[150px]       /* Desktop */
            font-bold 
            text-white 
            tracking-wide 
            drop-shadow-[0_0_20px_rgba(140,40,255,0.9)]
            md:drop-shadow-[0_0_35px_rgba(140,40,255,1)]">
          Anaé Delmas
        </motion.h1>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light text-white/90">
          Makeup Artist – Mode, FX & Création Visuelle
        </p>
      </motion.div>
    </section>
  );
}
