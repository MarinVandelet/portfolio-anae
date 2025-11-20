import { useState } from "react";
import Lightbox from "./Lightbox";

export default function ModeGallery({ images }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const open = (index) => {
    setCurrent(index);
    setLightboxOpen(true);
  };

  const close = () => setLightboxOpen(false);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 px-4">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid cursor-pointer" onClick={() => open(i)}>
            <img
              src={img.src}
              alt={img.legend}
              className="w-full rounded-xl hover:opacity-80 transition shadow-md"
            />
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        images={images}
        index={current}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
