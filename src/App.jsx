import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Background from "./components/Background.jsx";
import OnMe from "./pages/OnMe";


// Pages
import HomeBanner from "./components/HomeBanner.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Mode from "./pages/Mode.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-noir text-white">
      <Background />
      <Navbar />

      <main className="pt-0">

        <Routes>

          {/* PAGE ACCUEIL */}
          <Route
            path="/"
            element={
              <>
                <HomeBanner />
                <About />
                <Contact />
              </>
            }
          />

          {/* PAGE MODE */}
          <Route path="/mode" element={<Mode />} />
          <Route path="/on-me" element={<OnMe />} />


          {/* Tu ajouteras plus tard : FX, On-me */}
          {/* <Route path="/fx" element={<FX />} /> */}
          {/* <Route path="/on-me" element={<OnMe />} /> */}

        </Routes>

      </main>
    </div>
  );
}
