import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative w-full py-28 text-white bg-black overflow-hidden">

      {/* MOTIF EN FOND (DOT GRID ANIMÉ) */}
      <motion.div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        animate={{ 
          x: ["0%", "5%", "0%"], 
          y: ["0%", "3%", "0%"] 
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 3px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Séparation lumineuse */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* GRID DES CONTACTS */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* EMAIL */}
          <motion.div
            whileHover={{ scale: 1.02, translateY: -4 }}
            transition={{ duration: 0.3 }}
            className="
              bg-white/5 backdrop-blur-xl 
              p-8 rounded-3xl 
              border border-white/10 
              shadow-[0_0_20px_rgba(0,0,0,0.4)]
              flex flex-col items-center text-center
            "
          >
            <Mail size={34} className="text-canard mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-canard">Email</h3>
            <a
              href="mailto:contact@annaedelmas.com"
              className="text-base underline text-white/90"
            >
              contact@annaedelmas.com
            </a>
            <p className="text-sm text-neutral-400 mt-3">Réponse sous 24h</p>
          </motion.div>

          {/* TÉLÉPHONE */}
          <motion.div
            whileHover={{ scale: 1.02, translateY: -4 }}
            transition={{ duration: 0.3 }}
            className="
              bg-white/5 backdrop-blur-xl 
              p-8 rounded-3xl 
              border border-white/10 
              shadow-[0_0_20px_rgba(0,0,0,0.4)]
              flex flex-col items-center text-center
            "
          >
            <Phone size={34} className="text-violet mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-violet">Téléphone</h3>
            <p className="text-base text-white/90">06 01 43 93 69</p>
            <p className="text-sm text-neutral-400 mt-3">
              Envoyez moi un message
            </p>
          </motion.div>

          {/* INSTAGRAM */}
          <motion.div
            whileHover={{ scale: 1.02, translateY: -4 }}
            transition={{ duration: 0.3 }}
            className="
              bg-white/5 backdrop-blur-xl 
              p-8 rounded-3xl 
              border border-white/10 
              shadow-[0_0_20px_rgba(0,0,0,0.4)]
              flex flex-col items-center text-center
            "
          >
            <Instagram size={34} className="text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Instagram</h3>
            <a
              href="https://instagram.com/naaomuaa"
              target="_blank"
              rel="noreferrer"
              className="text-base underline text-white/90"
            >
              @naaomuaa
            </a>
            <p className="text-sm text-neutral-400 mt-3">
              Portfolio en direct · Nouveaux looks
            </p>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <motion.a
            href="mailto:anaedelmas@gmail.com"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              inline-block px-10 py-3 
              bg-canard hover:bg-canard/80 
              text-black font-semibold 
              rounded-full text-lg 
              transition
              shadow-[0_0_20px_rgba(59,196,199,0.3)]
            "
          >
            Me contacter maintenant
          </motion.a>

          <p className="text-neutral-500 text-sm mt-4">
            Basée à Paris · Déplacements possibles
          </p>
        </div>
      </div>
    </section>
  );
}

