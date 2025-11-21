export default function HighlightedTitle() {
  return (
    <div className="mb-10 w-full">
      <svg
        viewBox="0 0 1400 250"
        className="w-full max-w-[900px] overflow-visible"
      >
        <defs>
          {/* Dégradé lumineux */}
          <linearGradient id="shineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="white" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Masque basé sur le texte */}
          <mask id="textMask">
            <rect width="100%" height="100%" fill="black" />
            <text
              x="0"
              y="60%"
              textAnchor="start"
              dominantBaseline="middle"
              fontFamily="Sora, sans-serif"
              fontWeight="700"
              fontSize="140"
              fill="white"
              letterSpacing="1"
            >
              À propos d’Anaé
            </text>
          </mask>
        </defs>

        {/* TEXTE PRINCIPAL — gris-bleu canard plus sobre */}
        <text
          x="0"
          y="60%"
          textAnchor="start"
          dominantBaseline="middle"
          fontFamily="Sora, sans-serif"
          fontWeight="700"
          fontSize="140"
          className="fill-[#6FA9B4]"
          letterSpacing="1"
        >
          À propos d’Anaé
        </text>

        {/* REFLET ANIMÉ */}
        <rect
          width="100%"
          height="100%"
          fill="url(#shineGradient)"
          mask="url(#textMask)"
        >
          <animate
            attributeName="x"
            from="-250%"
            to="250%"
            dur="3.2s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  );
}
