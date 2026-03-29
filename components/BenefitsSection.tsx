"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, type CSSProperties } from "react";
import {
  Wind,
  Award,
  Sparkles,
  Eye,
  Heart,
  Shield,
  Shirt,
  Zap,
  Lock,
} from "lucide-react";

const benefits = [
  {
    icon: Wind,
    title: "Tecido Respirável",
    desc: "Tecido leve e confortável que se adapta ao seu movimento.",
    color: "#00d4ff",
  },
  {
    icon: Award,
    title: "Acabamento Premium",
    desc: "Detalhes refinados em cada costura para durabilidade máxima.",
    color: "#ffd700",
  },
  {
    icon: Sparkles,
    title: "Modelagem Moderna",
    desc: "Corte contemporâneo que valoriza a silhueta masculina e feminina.",
    color: "#00d4ff",
  },
  {
    icon: Eye,
    title: "Presença Visual",
    desc: "Design que chama atenção e transmite estilo onde quer que vá.",
    color: "#ffd700",
  },
  {
    icon: Heart,
    title: "Uso Casual e Torcedor",
    desc: "Perfeita para o dia a dia e para vibrar com o Brasil.",
    color: "#009c3b",
  },
  {
    icon: Shield,
    title: "Alta Qualidade",
    desc: "Materiais selecionados com padrão de qualidade internacional.",
    color: "#00d4ff",
  },
  {
    icon: Shirt,
    title: "Estilo Marcante",
    desc: "Uma peça que se destaca e expressa a sua identidade.",
    color: "#ffd700",
  },
  {
    icon: Zap,
    title: "Envio Rápido",
    desc: "Processamento imediato e entrega em até 3 dias úteis.",
    color: "#00d4ff",
  },
  {
    icon: Lock,
    title: "Compra Segura",
    desc: "Checkout protegido e 100% seguro para a sua tranquilidade.",
    color: "#009c3b",
  },
];

function BenefitCard({
  icon: Icon,
  title,
  desc,
  color,
  index,
}: (typeof benefits)[0] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.07, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative group glass rounded-2xl p-5 border border-white/5 hover:border-opacity-40 transition-all duration-400 cursor-default"
      style={{
        "--hover-border": `${color}40`,
      } as CSSProperties}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-sm"
        style={{ background: `${color}08` }}
      />

      {/* Icon container */}
      <div
        className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 border"
        style={{
          background: `${color}15`,
          borderColor: `${color}30`,
        }}
      >
        <Icon size={22} style={{ color }} />
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: `${color}10`, boxShadow: `0 0 15px ${color}30` }}
        />
      </div>

      <h3 className="font-heading font-bold text-base text-white mb-1.5">
        {title}
      </h3>
      <p className="font-body text-sm text-blue-200/50 leading-relaxed">
        {desc}
      </p>

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: `linear-gradient(135deg, transparent 50%, ${color}20 50%)`,
          borderTopRightRadius: "16px",
        }}
      />
    </motion.div>
  );
}

export default function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 bg-brand-deep overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-electric/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-electric/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-electric/30 mb-5">
            <Sparkles size={14} className="text-brand-neon" />
            <span className="text-xs font-heading font-semibold tracking-widest text-brand-neon uppercase">
              Por que escolher
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            FEITA PARA{" "}
            <span className="shimmer-text">CAMPEÕES</span>
          </h2>
          <p className="font-body text-blue-200/60 max-w-xl mx-auto text-base">
            Cada detalhe foi pensado para oferecer a melhor experiência ao vestir
            a camisa do Brasil.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} {...b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
