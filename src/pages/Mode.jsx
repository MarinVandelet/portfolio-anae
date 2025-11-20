import ModeGallery from "../components/ModeGallery";

export default function Mode() {
  const images = [
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675609/1_bripxz.jpg", legend: "Look éditorial – texture lumière." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675648/2_rhcvui.jpg", legend: "Maquillage glossy minimal." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763676263/4_rlzoor.jpg", legend: "Couleurs vibrantes – shooting studio." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675654/3_q6jsuj.jpg", legend: "Soft glam – lumière naturelle." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675684/5_setrfa.jpg", legend: "Beauté graphique – contour artistique." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675693/6_wiitzm.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675716/9_qki7qr.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675698/7_c4kbpv.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763676457/8_fe2mfx.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675722/10_slcpnk.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675724/11_y3q9ut.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675731/12_cht3hg.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675750/17_nwf3lx.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763676260/21_c4lcfk.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763676260/22_x10qsl.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675758/18_r2qsah.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675740/15_hsr8x6.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763675752/16_ofpbff.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763676261/20_curlmi.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763676262/19_mkhdjs.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763676265/14_jf681a.jpg", legend: "Effet wet – peau glowy." },
    { src: "https://res.cloudinary.com/dphdsmavu/image/upload/v1763676266/13_vyxz5k.jpg", legend: "Effet wet – peau glowy." },

    // Ajoute autant que tu veux
  ];

  return (
    <section className="pt-32 pb-20 bg-black text-white min-h-screen">

      <ModeGallery images={images} />
    </section>
  );
}
