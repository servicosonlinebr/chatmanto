"use client";

import { motion } from "framer-motion";
import { Zap, Package, Clock, ShieldCheck, Star, Flame } from "lucide-react";

interface FinalCTAProps {
  onBuy: () => void;
}

export default function FinalCTA({ onBuy }: FinalCTAProps) {
  return (
    <section className="relative py-24 sm:py-36 bg-brand-black overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent" />

      {/* Heavy background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-electric/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid lines */}
      <div className="absolute inset-0 grid-lines opacity-20" />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-brand-neon/20 hidden lg:block" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-brand-neon/20 hidden lg:block" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-brand-neon/20 hidden lg:block" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-brand-neon/20 hidden lg:block" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Urgency badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-electric/20 border border-brand-neon/30 mb-8 shadow-neon"
        >
          <Flame size={16} className="text-brand-gold animate-pulse" />
          <span className="font-heading font-bold text-sm text-brand-neon tracking-widest uppercase">
            ESTOQUE LIMITADO — GARANTA O SEU AGORA
          </span>
          <Flame size={16} className="text-brand-gold animate-pulse" />
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-6xl sm:text-7xl lg:text-8xl text-white mb-6 leading-none"
        >
          <span className="block">NÃO PERCA</span>
          <span className="block gold-shimmer">ESSA CHANCE</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-blue-200/65 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Vista o orgulho do Brasil com estilo premium. Frete grátis, entrega
          rápida e qualidade impecável. Promoção por tempo limitado.
        </motion.p>

        {/* Price highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="flex items-center justify-center gap-6 mb-10"
        >
          <div className="text-center">
            <p className="font-body text-sm text-blue-400/40 line-through">R$ 99,99</p>
            <p className="font-display text-4xl sm:text-5xl text-brand-neon text-shadow-neon">
              R$ 74,99
            </p>
            <p className="font-heading text-xs text-brand-gold tracking-wider">
              1 CAMISA
            </p>
          </div>
          <div className="w-px h-16 bg-brand-neon/20" />
          <div className="text-center">
            <p className="font-body text-sm text-blue-400/40 line-through">R$ 199,99</p>
            <p className="font-display text-4xl sm:text-5xl text-brand-gold text-shadow-gold">
              R$ 119,99
            </p>
            <p className="font-heading text-xs text-brand-neon tracking-wider">
              KIT CASAL
            </p>
          </div>
        </motion.div>

        {/* Seals row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          {[
            { icon: Package, label: "Frete Grátis" },
            { icon: Clock, label: "3 Dias Úteis" },
            { icon: ShieldCheck, label: "Compra Segura" },
            { icon: Star, label: "Qualidade Premium" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 glass border border-brand-neon/15 rounded-full px-4 py-2"
            >
              <s.icon size={14} className="text-brand-neon" />
              <span className="font-heading text-xs font-semibold text-blue-100/80">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={onBuy}
            className="btn-glow group relative flex items-center justify-center gap-3 bg-gradient-to-r from-brand-electric to-brand-neon text-brand-black font-heading font-bold text-xl px-10 py-5 rounded-2xl shadow-neon hover:shadow-neon-strong transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
          >
            <Zap size={22} className="group-hover:rotate-12 transition-transform duration-300" />
            GARANTIR MINHA CAMISA
          </button>
        </motion.div>

        {/* Final trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 font-body text-xs text-blue-100/30"
        >
          🔒 Pagamento 100% seguro · Dados protegidos · Satisfação garantida
        </motion.p>
      </div>
    </section>
  );
}
