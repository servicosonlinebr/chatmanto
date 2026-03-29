"use client";

import { motion } from "framer-motion";
import { Ruler, User, Users } from "lucide-react";

const sizeData = [
  { size: "P", chest: "88-92cm", waist: "72-76cm", height: "1,60-1,68m", weight: "55-65kg" },
  { size: "M", chest: "92-98cm", waist: "76-82cm", height: "1,68-1,75m", weight: "65-75kg" },
  { size: "G", chest: "98-104cm", waist: "82-88cm", height: "1,75-1,82m", weight: "75-88kg" },
  { size: "GG", chest: "104-112cm", waist: "88-96cm", height: "1,80-1,92m", weight: "88-105kg" },
];

const femSizeData = [
  { size: "P", chest: "82-86cm", waist: "66-70cm", height: "1,55-1,62m", weight: "48-57kg" },
  { size: "M", chest: "86-92cm", waist: "70-76cm", height: "1,62-1,68m", weight: "57-65kg" },
  { size: "G", chest: "92-98cm", waist: "76-82cm", height: "1,68-1,74m", weight: "65-75kg" },
  { size: "GG", chest: "98-104cm", waist: "82-88cm", height: "1,72-1,80m", weight: "75-88kg" },
];

// SVG Couple illustration
function CoupleIllustration() {
  return (
    <svg viewBox="0 0 240 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background glow */}
      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd700" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffd700" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="jerseyM" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a6fc4" />
          <stop offset="100%" stopColor="#0d2145" />
        </linearGradient>
        <linearGradient id="jerseyF" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#009c3b" />
          <stop offset="100%" stopColor="#006b29" />
        </linearGradient>
      </defs>

      {/* Glow circles */}
      <ellipse cx="75" cy="160" rx="55" ry="120" fill="url(#glow1)" />
      <ellipse cx="165" cy="160" rx="55" ry="120" fill="url(#glow2)" />

      {/* === MALE FIGURE (left) === */}
      {/* Head */}
      <circle cx="75" cy="52" r="22" fill="#e8c49a" />
      {/* Hair */}
      <ellipse cx="75" cy="34" rx="22" ry="12" fill="#2d1b0a" />
      {/* Jersey body */}
      <path d="M45 95 Q55 88 75 87 Q95 88 105 95 L110 160 L40 160 Z" fill="url(#jerseyM)" stroke="#00d4ff" strokeWidth="1" strokeOpacity="0.4" />
      {/* Jersey sleeves */}
      <path d="M45 95 L30 130 L42 133 L55 105" fill="url(#jerseyM)" stroke="#00d4ff" strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M105 95 L120 128 L108 131 L95 105" fill="url(#jerseyM)" stroke="#00d4ff" strokeWidth="0.5" strokeOpacity="0.3" />
      {/* Collar */}
      <path d="M65 87 Q75 83 85 87" stroke="#00d4ff" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
      {/* Brazil number */}
      <text x="67" y="135" fill="#ffd700" fontSize="18" fontFamily="'Bebas Neue', sans-serif" fontWeight="bold">10</text>
      {/* Pants */}
      <rect x="48" y="160" width="54" height="60" rx="4" fill="#0a1628" />
      <line x1="75" y1="160" x2="75" y2="220" stroke="#1a6fc4" strokeWidth="1" strokeOpacity="0.4" />
      {/* Shoes */}
      <ellipse cx="58" cy="228" rx="14" ry="7" fill="#1a1a2e" />
      <ellipse cx="92" cy="228" rx="14" ry="7" fill="#1a1a2e" />
      {/* Height line */}
      <line x1="18" y1="30" x2="18" y2="230" stroke="#00d4ff" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3,3" />
      <text x="4" y="132" fill="#00d4ff" fontSize="9" fontFamily="sans-serif" opacity="0.7" transform="rotate(-90,12,132)">1,75m</text>

      {/* === FEMALE FIGURE (right) === */}
      {/* Head */}
      <circle cx="165" cy="62" r="20" fill="#e8c49a" />
      {/* Hair long */}
      <path d="M147 58 Q152 42 165 38 Q178 42 183 58 Q185 85 180 100 Q172 110 165 108 Q158 110 150 100 Q145 85 147 58Z" fill="#3d1f0a" />
      {/* Jersey body (fitted/feminine) */}
      <path d="M140 105 Q150 98 165 97 Q180 98 190 105 L192 162 L138 162 Z" fill="url(#jerseyF)" stroke="#ffd700" strokeWidth="1" strokeOpacity="0.4" />
      {/* Sleeves */}
      <path d="M140 105 L126 132 L138 136 L148 110" fill="url(#jerseyF)" stroke="#ffd700" strokeWidth="0.5" strokeOpacity="0.3" />
      <path d="M190 105 L204 130 L192 134 L182 110" fill="url(#jerseyF)" stroke="#ffd700" strokeWidth="0.5" strokeOpacity="0.3" />
      {/* Collar */}
      <path d="M157 97 Q165 93 173 97" stroke="#ffd700" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
      {/* Brazil text */}
      <text x="152" y="142" fill="#ffd700" fontSize="9" fontFamily="'Rajdhani', sans-serif" fontWeight="bold">BRASIL</text>
      {/* Skirt/pants */}
      <path d="M138 162 L145 222 L185 222 L192 162 Z" fill="#0a1628" />
      {/* Shoes */}
      <ellipse cx="150" cy="230" rx="12" ry="6" fill="#1a1a2e" />
      <ellipse cx="180" cy="230" rx="12" ry="6" fill="#1a1a2e" />
      {/* Height line */}
      <line x1="218" y1="42" x2="218" y2="232" stroke="#ffd700" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3,3" />
      <text x="226" y="138" fill="#ffd700" fontSize="9" fontFamily="sans-serif" opacity="0.7" transform="rotate(90,222,138)">1,65m</text>

      {/* Neon decorative lines */}
      <line x1="0" y1="235" x2="240" y2="235" stroke="#00d4ff" strokeWidth="0.5" strokeOpacity="0.3" />
      <line x1="0" y1="28" x2="240" y2="28" stroke="#00d4ff" strokeWidth="0.5" strokeOpacity="0.2" />
    </svg>
  );
}

export default function SizeCard() {
  return (
    <section className="relative py-20 sm:py-28 bg-brand-black overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-neon/20 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-brand-electric/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-electric/30 mb-5">
            <Ruler size={14} className="text-brand-neon" />
            <span className="text-xs font-heading font-semibold tracking-widest text-brand-neon uppercase">
              Guia de Medidas
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            ESCOLHA O <span className="shimmer-text">TAMANHO CERTO</span>
          </h2>
          <p className="font-body text-blue-200/60 text-base">
            Referência visual para facilitar a sua escolha
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Couple illustration card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-6 border border-brand-neon/15 shadow-electric"
          >
            <div className="flex items-center gap-3 mb-6">
              <Users size={20} className="text-brand-neon" />
              <h3 className="font-heading font-bold text-lg text-white">
                Casal — Referência Visual
              </h3>
            </div>

            <div className="relative w-full max-w-xs mx-auto h-72">
              <CoupleIllustration />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="glass rounded-xl p-4 border border-brand-electric/20">
                <div className="flex items-center gap-2 mb-2">
                  <User size={14} className="text-brand-neon" />
                  <span className="font-heading font-semibold text-sm text-brand-neon">
                    Masculino
                  </span>
                </div>
                <p className="font-body text-xs text-blue-100/60">
                  Altura: 1,75m
                </p>
                <p className="font-body text-xs text-blue-100/60">Peso: 75kg</p>
                <p className="font-body text-xs text-blue-100/60">
                  Tamanho: <strong className="text-white">G</strong>
                </p>
              </div>
              <div className="glass rounded-xl p-4 border border-brand-gold/20">
                <div className="flex items-center gap-2 mb-2">
                  <User size={14} className="text-brand-gold" />
                  <span className="font-heading font-semibold text-sm text-brand-gold">
                    Feminino
                  </span>
                </div>
                <p className="font-body text-xs text-blue-100/60">
                  Altura: 1,65m
                </p>
                <p className="font-body text-xs text-blue-100/60">Peso: 58kg</p>
                <p className="font-body text-xs text-blue-100/60">
                  Tamanho: <strong className="text-white">M</strong>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Size tables */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Male table */}
            <div className="glass-strong rounded-2xl p-5 border border-brand-electric/15">
              <div className="flex items-center gap-2 mb-4">
                <User size={16} className="text-brand-neon" />
                <h4 className="font-heading font-bold text-white">Masculino</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-brand-neon/10">
                      {["Tam.", "Peito", "Cintura", "Altura", "Peso"].map((h) => (
                        <th key={h} className="font-heading text-xs text-brand-neon/70 pb-2 text-left pr-3">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData.map((row) => (
                      <tr key={row.size} className="border-b border-white/5 hover:bg-brand-neon/5 transition-colors">
                        <td className="py-2 pr-3 font-display text-lg text-brand-neon">{row.size}</td>
                        <td className="py-2 pr-3 font-body text-xs text-blue-100/60">{row.chest}</td>
                        <td className="py-2 pr-3 font-body text-xs text-blue-100/60">{row.waist}</td>
                        <td className="py-2 pr-3 font-body text-xs text-blue-100/60">{row.height}</td>
                        <td className="py-2 font-body text-xs text-blue-100/60">{row.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Female table */}
            <div className="glass-strong rounded-2xl p-5 border border-brand-gold/15">
              <div className="flex items-center gap-2 mb-4">
                <User size={16} className="text-brand-gold" />
                <h4 className="font-heading font-bold text-white">Feminino</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-brand-gold/10">
                      {["Tam.", "Peito", "Cintura", "Altura", "Peso"].map((h) => (
                        <th key={h} className="font-heading text-xs text-brand-gold/70 pb-2 text-left pr-3">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {femSizeData.map((row) => (
                      <tr key={row.size} className="border-b border-white/5 hover:bg-brand-gold/5 transition-colors">
                        <td className="py-2 pr-3 font-display text-lg text-brand-gold">{row.size}</td>
                        <td className="py-2 pr-3 font-body text-xs text-blue-100/60">{row.chest}</td>
                        <td className="py-2 pr-3 font-body text-xs text-blue-100/60">{row.waist}</td>
                        <td className="py-2 pr-3 font-body text-xs text-blue-100/60">{row.height}</td>
                        <td className="py-2 font-body text-xs text-blue-100/60">{row.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs font-body text-blue-100/40 text-center">
              * Medidas aproximadas. Em caso de dúvida, prefira o tamanho maior.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
