import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const location = useLocation();

  const tabs = [
    { name: "Accueil", path: "/" },
    { name: "Mode", path: "/mode" },
    { name: "FX", path: "/fx" },
    { name: "On me", path: "/on-me" },
  ];

  return (
    <div className="w-full flex justify-center fixed top-6 z-50">
      <motion.nav
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.06 }}         // 👉 agrandissement au hover
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="
          relative bg-white/10 backdrop-blur-xl 
          px-10 py-4 rounded-full border border-white/20 
          shadow-[0_0_35px_rgba(76,42,255,.5)] 
          flex gap-10
        "
      >
        {tabs.map((tab) => {
          const active = location.pathname === tab.path;

          return (
            <NavLink
              key={tab.path}
              to={tab.path}
              className="relative px-4 py-1 font-semibold text-white"
            >
              {active && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-violet/40 rounded-full shadow-inner"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}

              <span
                className={`relative z-10 ${
                  active ? "text-white" : "text-white/60"
                }`}
              >
                {tab.name}
              </span>
            </NavLink>
          );
        })}
      </motion.nav>
    </div>
  );
}
