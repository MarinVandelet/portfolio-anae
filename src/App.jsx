import Navbar from "./components/Navbar.jsx";
import HomeBanner from "./components/HomeBanner.jsx";
import Background from "./components/Background.jsx";

// nouvelles sections
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-noir text-white">
      <Background />
      <Navbar />

      <main className="pt-0">
        <HomeBanner />
        <About />
        <Contact />
      </main>
    </div>
  );
}
