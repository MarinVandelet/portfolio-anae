import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ isOpen, images, index, onClose, onPrev, onNext }) {
  if (!isOpen) return null;

  const image = images[index];

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[200] px-4"
      >
        {/* Fermer */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-neutral-300"
        >
          <X size={32} />
        </button>

        {/* Flèche gauche */}
        <button
          onClick={onPrev}
          className="absolute left-4 md:left-10 text-white hover:opacity-80"
        >
          <ChevronLeft size={48} />
        </button>

        {/* Flèche droite */}
        <button
          onClick={onNext}
          className="absolute right-4 md:right-10 text-white hover:opacity-80"
        >
          <ChevronRight size={48} />
        </button>

        {/* Contenu */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center max-w-4xl w-full"
        >
          {/* IMAGE */}
          <img
            src={image.src}
            alt={image.legend}
            className="
              rounded-xl shadow-xl
              object-contain
            "
            style={{
              maxHeight: "75vh",   // 🔥 Image ne dépasse plus l'écran
              maxWidth: "100%",
            }}
          />

          {/* LÉGENDE */}
          <p className="text-center text-white/90 mt-4 text-lg max-w-2xl px-4">
            {image.legend}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
