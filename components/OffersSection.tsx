"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Zap, Heart, Users, ChevronDown, Tag, Check } from "lucide-react";
import type { OfferType } from "@/app/page";

interface OffersSectionProps {
  onBuy: (offer: OfferType) => void;
}

const sizes = ["P", "M", "G", "GG"];
const kitTypes = [
  { value: "2masc", label: "2 Masculinas" },
  { value: "2fem", label: "2 Femininas" },
  { value: "casal", label: "1 Masc + 1 Fem" },
];

function SizeButton({
  size,
  selected,
  onClick,
}: {
  size: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 rounded-xl font-display text-xl transition-all duration-200 border ${
        selected
          ? "bg-brand-neon text-brand-black border-brand-neon shadow-neon scale-105"
          : "glass border-brand-neon/20 text-blue-100/60 hover:border-brand-neon/50 hover:text-brand-neon"
      }`}
    >
      {size}
    </button>
  );
}

export default function OffersSection({ onBuy }: OffersSectionProps) {
  const [kitSize1, setKitSize1] = useState("M");
  const [kitSize2, setKitSize2] = useState("G");
  const [kitType, setKitType] = useState("casal");
  const [unitSize, setUnitSize] = useState("M");
  const [unitGender, setUnitGender] = useState<"masc" | "fem">("masc");

  return (
    <section className="relative py-20 sm:py-28 bg-brand-black overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-electric/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-gold/30 mb-5">
            <Tag size={14} className="text-brand-gold" />
            <span className="text-xs font-heading font-semibold tracking-widest text-brand-gold uppercase">
              Ofertas Especiais
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            ESCOLHA SUA <span className="gold-shimmer">OFERTA</span>
          </h2>
          <p className="font-body text-blue-200/60 text-base">
            Por tempo limitado — Frete grátis em todos os pedidos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* ===== OFFER 1: KIT CASAL ===== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Best seller badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
              <div className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-brand-gold to-brand-amber text-brand-black font-heading font-bold text-xs tracking-wider shadow-gold">
                <Zap size={12} />
                MAIS VENDIDO
              </div>
            </div>

            <div className="glass-strong rounded-3xl border border-brand-gold/25 shadow-gold overflow-hidden">
              {/* Header strip */}
              <div className="bg-gradient-to-r from-brand-electric/30 via-brand-gold/10 to-brand-electric/30 px-6 pt-8 pb-5 border-b border-brand-gold/10">
                <div className="flex items-center gap-3 mb-1">
                  <Users size={22} className="text-brand-gold" />
                  <h3 className="font-display text-3xl text-white">KIT CASAL</h3>
                </div>
                <p className="font-body text-sm text-blue-200/60">
                  2 Camisas — O combo perfeito para vocês dois
                </p>
              </div>

              <div className="px-6 py-6 space-y-6">
                {/* Kit type */}
                <div>
                  <label className="block font-heading text-xs font-semibold text-brand-neon/70 tracking-wider mb-3 uppercase">
                    Tipo de Kit
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {kitTypes.map((t) => (
                      <button
                        key={t.value}
                        onClick={() => setKitType(t.value)}
                        className={`py-2.5 px-2 rounded-xl text-xs font-heading font-semibold transition-all duration-200 border text-center ${
                          kitType === t.value
                            ? "bg-brand-gold/20 border-brand-gold/60 text-brand-gold"
                            : "glass border-white/10 text-blue-100/50 hover:border-brand-gold/30"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size 1 */}
                <div>
                  <label className="block font-heading text-xs font-semibold text-brand-neon/70 tracking-wider mb-3 uppercase">
                    Tamanho — Camisa 1
                  </label>
                  <div className="flex gap-2">
                    {sizes.map((s) => (
                      <SizeButton
                        key={s}
                        size={s}
                        selected={kitSize1 === s}
                        onClick={() => setKitSize1(s)}
                      />
                    ))}
                  </div>
                </div>

                {/* Size 2 */}
                <div>
                  <label className="block font-heading text-xs font-semibold text-brand-neon/70 tracking-wider mb-3 uppercase">
                    Tamanho — Camisa 2
                  </label>
                  <div className="flex gap-2">
                    {sizes.map((s) => (
                      <SizeButton
                        key={s}
                        size={s}
                        selected={kitSize2 === s}
                        onClick={() => setKitSize2(s)}
                      />
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {["Ideal para presentear", "Frete grátis incluso", "Entrega em até 3 dias", "Embrulho para presente disponível"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-body text-blue-100/70">
                      <Check size={14} className="text-brand-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-body text-sm text-blue-400/50 line-through">R$ 199,99</p>
                    <p className="font-display text-4xl text-brand-gold text-shadow-gold">R$ 119,99</p>
                    <p className="font-heading text-xs text-brand-neon tracking-wider">
                      ECONOMIA DE R$ 80,00
                    </p>
                  </div>
                  <div className="glass rounded-xl px-3 py-2 border border-brand-gold/30 text-center">
                    <p className="font-display text-2xl text-brand-gold">40%</p>
                    <p className="font-heading text-[10px] text-blue-100/50">OFF</p>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => onBuy("kit")}
                  className="btn-glow w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-gold to-brand-amber text-brand-black font-heading font-bold text-lg py-4 rounded-xl shadow-gold hover:shadow-[0_0_40px_rgba(255,215,0,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Zap size={20} />
                  QUERO O KIT CASAL
                </button>
                <p className="text-center font-heading text-xs text-brand-neon/50">
                  🔒 Compra 100% segura · Pague no checkout
                </p>
              </div>
            </div>
          </motion.div>

          {/* ===== OFFER 2: UNIDADE ===== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-strong rounded-3xl border border-brand-neon/20 shadow-neon overflow-hidden">
              {/* Header strip */}
              <div className="bg-gradient-to-r from-brand-navy/60 via-brand-electric/10 to-brand-navy/60 px-6 pt-8 pb-5 border-b border-brand-neon/10">
                <div className="flex items-center gap-3 mb-1">
                  <Heart size={22} className="text-brand-neon" />
                  <h3 className="font-display text-3xl text-white">UNIDADE</h3>
                </div>
                <p className="font-body text-sm text-blue-200/60">
                  1 Camisa — Escolha a sua
                </p>
              </div>

              <div className="px-6 py-6 space-y-6">
                {/* Gender */}
                <div>
                  <label className="block font-heading text-xs font-semibold text-brand-neon/70 tracking-wider mb-3 uppercase">
                    Modelagem
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: "masc", label: "Masculina" },
                      { value: "fem", label: "Feminina" },
                    ].map((g) => (
                      <button
                        key={g.value}
                        onClick={() => setUnitGender(g.value as "masc" | "fem")}
                        className={`py-3 rounded-xl text-sm font-heading font-semibold transition-all duration-200 border ${
                          unitGender === g.value
                            ? "bg-brand-electric/20 border-brand-electric/60 text-brand-neon"
                            : "glass border-white/10 text-blue-100/50 hover:border-brand-neon/30"
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div>
                  <label className="block font-heading text-xs font-semibold text-brand-neon/70 tracking-wider mb-3 uppercase">
                    Tamanho
                  </label>
                  <div className="flex gap-2">
                    {sizes.map((s) => (
                      <SizeButton
                        key={s}
                        size={s}
                        selected={unitSize === s}
                        onClick={() => setUnitSize(s)}
                      />
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {["Design exclusivo", "Tecido premium", "Frete grátis incluso", "Entrega em até 3 dias"].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-body text-blue-100/70">
                      <Check size={14} className="text-brand-neon flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Extra spacer for visual alignment */}
                <div className="h-4" />

                {/* Price */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-body text-sm text-blue-400/50 line-through">R$ 99,99</p>
                    <p className="font-display text-4xl text-brand-neon text-shadow-neon">R$ 74,99</p>
                    <p className="font-heading text-xs text-brand-gold tracking-wider">
                      ECONOMIA DE R$ 25,00
                    </p>
                  </div>
                  <div className="glass rounded-xl px-3 py-2 border border-brand-neon/30 text-center">
                    <p className="font-display text-2xl text-brand-neon">25%</p>
                    <p className="font-heading text-[10px] text-blue-100/50">OFF</p>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => onBuy("unit")}
                  className="btn-glow w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-electric to-brand-neon text-brand-black font-heading font-bold text-lg py-4 rounded-xl shadow-neon hover:shadow-neon-strong transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Zap size={20} />
                  COMPRAR AGORA
                </button>
                <p className="text-center font-heading text-xs text-brand-neon/50">
                  🔒 Compra 100% segura · Pague no checkout
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
