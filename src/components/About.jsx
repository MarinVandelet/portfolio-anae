import { motion } from "framer-motion";
import { Sparkles, Brush, Scissors, Flame, Droplets } from "lucide-react";
import HighlightedTitle from "../components/HighlightedTitle";


export default function About() {
  return (
    <section className="w-full bg-black py-32 text-white">

      {/* GRID 12 COLONNES POUR CONTRÔLER LES LARGEURS */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-start">

        {/* ====================== */}
        {/* COL 1 : TEXTE (4/12)  */}
        {/* ====================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-4 flex flex-col h-full">
          <HighlightedTitle />

          <p className="text-lg text-neutral-300 leading-relaxed">
            Anaé Delmas est une makeup artiste spécialisée en maquillage
            Mode, Beauté et FX. Elle s’inspire du cinéma, de la haute couture
            et de l’art contemporain pour créer des looks élégants, mystérieux
            et visuellement puissants.
          </p>

          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            Elle accorde une attention particulière aux détails, aux textures 
            et à la lumière pour produire des rendus créatifs et captivants. 
            Son approche mélange technique, expression artistique et recherche 
            esthétique.
          </p>
        </motion.div>

        {/* =============================== */}
        {/* COL 2 : SKILLS CARD (5/12)     */}
        {/* =============================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            lg:col-span-5
            bg-white/5 backdrop-blur-xl 
            p-10 rounded-3xl 
            border border-white/10
            shadow-[0_0_40px_rgba(76,42,255,0.25)]
            h-full flex flex-col justify-start
          "
        >
          <h3 className="text-2xl font-semibold mb-6">
            Ce que je fais
          </h3>

      {/* LISTE */}
      <ul className="space-y-6 text-neutral-300 text-lg">
        {/* 1 */}
        <li className="flex items-start gap-4">
          <Sparkles 
            size={28} 
            className="text-[#C58AFF] drop-shadow-[0_0_10px_rgba(197,138,255,0.9)] mt-[4px]" 
          />
          <p>
            <span className="font-semibold text-white">Maquillages mode & éditorial</span><br/>
          </p>
        </li>

        {/* 2 */}
        <li className="flex items-start gap-4">
          <Brush 
            size={28} 
            className="text-[#4DDCEB] drop-shadow-[0_0_10px_rgba(77,220,235,0.9)] mt-[4px]"
          />
          <p>
            <span className="font-semibold text-white">Maquillages artistiques & conceptuels</span><br/>
          </p>
        </li>

        {/* 3 */}
        <li className="flex items-start gap-4">
          <Scissors 
            size={28} 
            className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] mt-[4px]"
          />
          <p>
            <span className="font-semibold text-white">FX légers</span> (contusions, déchirures, illusions)<br/>
          </p>
        </li>

        {/* 4 */}
        <li className="flex items-start gap-4">
          <Flame 
            size={28} 
            className="text-[#B17BFF] drop-shadow-[0_0_12px_rgba(177,123,255,1)] mt-[4px]"
          />
          <p>
            <span className="font-semibold text-white">Création de prothèses</span><br/>
          </p>
        </li>

        {/* 5 */}
        <li className="flex items-start gap-4">
          <Droplets 
            size={28} 
            className="text-[#FF3A3A] drop-shadow-[0_0_14px_rgba(255,58,58,0.9)] mt-[4px]"
          />
          <p>
            <span className="font-semibold text-white">Maquillages gores et sanglants</span><br/>
          </p>
        </li>
      </ul>
        </motion.div>


        {/* CV CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ rotateX: 4, rotateY: -4, scale: 1.03 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            lg:col-span-3
            bg-white/5 backdrop-blur-xl 
            p-5 rounded-3xl 
            border border-white/10
            shadow-[0_0_45px_rgba(140,40,255,0.25)]
            h-full flex flex-col justify-between
          "
        >
          {/* Portrait */}
          <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden mb-4">
            <img
              src="/images/portrait.jpg"
              alt="portrait"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bouton */}
          <a
            href="/images/cv/cv-anae.pdf"
            download
            className="
              mt-2 block text-center w-full py-3 
              bg-white/10 hover:bg-white/20 
              border border-white/10 rounded-xl 
              text-white font-medium text-base
              transition
            "
          >
            Télécharger le CV
          </a>
        </motion.div>

      </div>
    </section>
  );
}
