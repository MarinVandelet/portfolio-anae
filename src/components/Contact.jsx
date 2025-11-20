import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative w-full bg-black py-24 text-white">

      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-canard"
      >
        Entrer en contact
      </motion.h2>

      {/* Grid contacts */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* EMAIL */}
        <motion.div
          whileHover={{ scale: 1.02, translateY: -4 }}
          transition={{ duration: 0.3 }}
          className="
            bg-white/5 backdrop-blur-xl 
            p-8 rounded-2xl 
            border border-white/10 
            shadow-[0_0_20px_rgba(0,0,0,0.3)]
            flex flex-col items-center text-center
          "
        >
          <Mail size={32} className="text-canard mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-canard">Email</h3>
          <a
            href="mailto:contact@annaedelmas.com"
            className="text-base underline text-white/90"
          >
            contact@annaedelmas.com
          </a>
          <p className="text-sm text-neutral-400 mt-3">Réponse sous 24h.</p>
        </motion.div>

        {/* TÉLÉPHONE */}
        <motion.div
          whileHover={{ scale: 1.02, translateY: -4 }}
          transition={{ duration: 0.3 }}
          className="
            bg-white/5 backdrop-blur-xl 
            p-8 rounded-2xl 
            border border-white/10 
            shadow-[0_0_20px_rgba(0,0,0,0.3)]
            flex flex-col items-center text-center
          "
        >
          <Phone size={32} className="text-violet mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-violet">Téléphone</h3>
          <p className="text-base text-white/90">06 01 43 93 69</p>
          <p className="text-sm text-neutral-400 mt-3">
            Disponible 10h–19h · Lundi → Samedi
          </p>
        </motion.div>

        {/* INSTAGRAM */}
        <motion.div
          whileHover={{ scale: 1.02, translateY: -4 }}
          transition={{ duration: 0.3 }}
          className="
            bg-white/5 backdrop-blur-xl 
            p-8 rounded-2xl 
            border border-white/10 
            shadow-[0_0_20px_rgba(0,0,0,0.3)]
            flex flex-col items-center text-center
          "
        >
          <Instagram size={32} className="text-pink-500 mb-4" />
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
            Portfolio en direct · Nouveaux looks chaque semaine
          </p>
        </motion.div>

      </div>

      {/* CTA */}
      <div className="text-center mt-16">
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
          "
        >
          Me contacter maintenant
        </motion.a>

        <p className="text-neutral-500 text-sm mt-4">
          Basée à Paris · Déplacements possibles
        </p>
      </div>
    </section>
  );
}
