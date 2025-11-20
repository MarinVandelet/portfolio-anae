import ModeGallery from "../components/ModeGallery";

export default function Mode() {
  const images = [
    { src: "/images/mode/1.jpeg", legend: "Look éditorial – texture lumière." },
    { src: "/images/mode/2.jpeg", legend: "Maquillage glossy minimal." },
    { src: "/images/mode/3.jpeg", legend: "Couleurs vibrantes – shooting studio." },
    { src: "/images/mode/4.jpeg", legend: "Soft glam – lumière naturelle." },
    { src: "/images/mode/5.jpeg", legend: "Beauté graphique – contour artistique." },
    { src: "/images/mode/6.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/7.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/8.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/9.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/10.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/11.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/12.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/13.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/14.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/15.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/16.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/17.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/18.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/19.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/20.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/21.jpeg", legend: "Effet wet – peau glowy." },
    { src: "/images/mode/22.jpeg", legend: "Effet wet – peau glowy." },

    // Ajoute autant que tu veux
  ];

  return (
    <section className="pt-32 pb-20 bg-black text-white min-h-screen">

      <ModeGallery images={images} />
    </section>
  );
}
