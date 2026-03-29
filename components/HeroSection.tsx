"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Package,
  Clock,
  ChevronDown,
  Star,
} from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onBuy: () => void;
}

const seals = [
  { icon: Package, label: "Frete Grátis" },
  { icon: Clock, label: "Até 3 dias úteis" },
  { icon: ShieldCheck, label: "Qualidade Premium" },
  { icon: Zap, label: "Entrega Flash" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

// Particle component
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 11) % 100}%`,
    delay: `${(i * 1.35) % 15}s`,
    duration: `${8 + (i % 6) * 1.6}s`,
    size: i % 4 === 0 ? 3 : 2,
  }));

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection({ onBuy }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black noise-bg">
      {/* Deep background layers */}
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute inset-0 hex-pattern opacity-60" />

      {/* Radial glow backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-electric/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Particles */}
      <Particles />

      {/* Decorative corner lines */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-brand-neon/30 hidden sm:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-brand-neon/30 hidden sm:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-brand-neon/30 hidden sm:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-brand-neon/30 hidden sm:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-neon/30 mb-6"
            >
              <Star size={12} className="text-brand-gold fill-brand-gold" />
              <span className="text-xs font-heading font-semibold tracking-widest text-brand-neon uppercase">
                Edição Exclusiva 2024
              </span>
              <Star size={12} className="text-brand-gold fill-brand-gold" />
            </motion.div>

            {/* Main title */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-display text-6xl sm:text-7xl lg:text-8xl leading-none mb-4"
            >
              <span className="block text-white">VISTA O</span>
              <span className="block gold-shimmer">ORGULHO</span>
              <span className="block shimmer-text">DO BRASIL</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body text-base sm:text-lg text-blue-200/70 max-w-md mb-8 leading-relaxed"
            >
              A camisa que une paixão, estilo e qualidade premium. Feita para
              quem vive o futebol com intensidade e veste o Brasil com orgulho.
            </motion.p>

            {/* Price */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-baseline gap-3 mb-8"
            >
              <span className="text-blue-400/50 line-through text-lg font-body">
                R$ 99,99
              </span>
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-display text-brand-gold text-shadow-gold">
                  R$ 74,99
                </span>
                <span className="text-xs text-brand-neon font-heading font-semibold tracking-wider">
                  ECONOMIA DE R$ 25,00
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-10"
            >
              <button
                onClick={onBuy}
                className="btn-glow relative flex items-center justify-center gap-2 bg-gradient-to-r from-brand-electric to-brand-neon text-brand-black font-heading font-bold text-base sm:text-lg px-8 py-4 rounded-xl shadow-neon hover:shadow-neon-strong transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] min-w-[200px]"
              >
                <Zap size={18} />
                COMPRAR AGORA
              </button>
              <a
                href="#catalogo"
                className="flex items-center justify-center gap-2 glass border border-brand-electric/40 text-brand-neon font-heading font-semibold text-base px-8 py-4 rounded-xl hover:border-brand-neon/60 hover:bg-brand-electric/10 transition-all duration-300 min-w-[200px]"
              >
                VER CATÁLOGO
                <ChevronDown size={16} />
              </a>
            </motion.div>

            {/* Seals */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg"
            >
              {seals.map((seal, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-1.5 glass rounded-xl px-3 py-3 border border-brand-neon/10 hover:border-brand-neon/30 transition-all duration-300 group"
                >
                  <seal.icon
                    size={20}
                    className="text-brand-neon group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-[10px] sm:text-xs font-heading font-semibold text-center text-blue-100/80 leading-tight">
                    {seal.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex-1 relative flex items-center justify-center w-full max-w-sm lg:max-w-lg"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-neon/20 via-brand-electric/10 to-brand-gold/10 blur-2xl animate-pulse-slow" />

            {/* Image frame */}
            <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden gradient-border shadow-neon">
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-brand-neon/60 z-20 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-brand-neon/60 z-20 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-brand-neon/60 z-20 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-brand-neon/60 z-20 rounded-br-lg" />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-brand-navy/20 z-10" />

              {/* Main image */}
              <Image
                src="https://i.ibb.co/gFtcGtCv/hero.jpg"
                alt="Camisa Oficial Seleção Brasileira Premium"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />

              {/* Scan line effect */}
              <div className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.015) 2px, rgba(0,212,255,0.015) 4px)',
                }}
              />

              {/* Bottom label */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="glass rounded-xl px-4 py-2.5 border border-brand-neon/20">
                  <p className="font-display text-2xl text-white leading-none">
                    BRASIL 2024
                  </p>
                  <p className="font-heading text-xs text-brand-neon tracking-widest">
                    QUALIDADE PREMIUM · OFICIAL
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-1/4 glass border border-brand-gold/40 rounded-xl px-3 py-2 shadow-gold"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-brand-gold font-display text-lg">25%</span>
              </div>
              <p className="text-[10px] font-heading text-blue-100/70">OFF</p>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-1/3 glass border border-brand-green/40 rounded-xl px-3 py-2"
            >
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-[10px] font-heading text-blue-100/70">Premium</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-heading tracking-widest text-brand-neon/40 uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-brand-neon/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
