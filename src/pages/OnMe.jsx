import ModeGallery from "../components/ModeGallery";

export default function OnMe() {
  const images = [
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687575/9_eili5z.jpg", legend: "Description à faire." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687573/12_ajpjy1.jpg", legend: "Look sobre – ambiance naturelle." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687572/11_ryozau.jpg", legend: "Jeu d’ombres – texture peau." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687569/8_y6bodk.jpg", legend: "Autoportrait couleur – création artistique." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687566/6_swpjol.jpg", legend: "Description à faire." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687561/3_fgsiud.jpg", legend: "Description à faire." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687567/7_af6zxj.jpg", legend: "Description à faire." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687560/1_r0lcmi.jpg", legend: "Description à faire." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687564/5_kji21x.jpg", legend: "Description à faire." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687570/10_jtyzv2.jpg", legend: "Description à faire." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687562/4_itox3u.jpg", legend: "Description à faire." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763687560/2_lmt485.jpg", legend: "Description à faire." },
  ];

  return (
    <section className="pt-32 pb-20 bg-black text-white min-h-screen">
      <ModeGallery images={images} />
    </section>
  );
}
