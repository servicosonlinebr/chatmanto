"use client";

import { motion } from "framer-motion";
import { Zap, Package, Clock, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Frete Grátis",
    desc: "Em todo o Brasil, sem custo adicional para você.",
    color: "#00d4ff",
    glow: "shadow-neon",
  },
  {
    icon: Clock,
    title: "Até 3 Dias Úteis",
    desc: "Prazo de entrega rápido e confiável para o seu endereço.",
    color: "#ffd700",
    glow: "shadow-gold",
  },
  {
    icon: Zap,
    title: "Modo Flash",
    desc: "Nova modalidade de entrega expressa. Ainda mais rápido.",
    color: "#00d4ff",
    glow: "shadow-neon",
  },
  {
    icon: ShieldCheck,
    title: "Entrega Garantida",
    desc: "Monitoramento em tempo real do seu pedido.",
    color: "#009c3b",
    glow: "",
  },
];

export default function ShippingSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-brand-deep overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-neon/20 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-electric/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-neon/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-neon/30 mb-5">
            <Truck size={14} className="text-brand-neon" />
            <span className="text-xs font-heading font-semibold tracking-widest text-brand-neon uppercase">
              Entrega & Envio
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            RÁPIDO COMO O <span className="shimmer-text">BRASIL JOGAR</span>
          </h2>
          <p className="font-body text-blue-200/60 text-base max-w-xl mx-auto">
            Entregamos sua camisa com agilidade e segurança para todo o Brasil.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`glass rounded-2xl p-5 border text-center group transition-all duration-300 hover:border-opacity-50`}
              style={{ borderColor: `${f.color}15` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 border transition-all duration-300 group-hover:scale-110"
                style={{ background: `${f.color}15`, borderColor: `${f.color}30` }}
              >
                <f.icon size={22} style={{ color: f.color }} />
              </div>
              <h3 className="font-heading font-bold text-sm text-white mb-1.5">{f.title}</h3>
              <p className="font-body text-xs text-blue-100/50 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Large banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative glass-strong rounded-3xl p-8 sm:p-12 border border-brand-neon/20 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-electric/10 via-transparent to-brand-neon/5 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-brand-neon/5 to-transparent pointer-events-none" />

          {/* Corner accent */}
          <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-brand-neon/20 hidden sm:block" />
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-brand-neon/20 hidden sm:block" />

          <div className="relative flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-brand-neon/10 border border-brand-neon/30 shadow-neon">
              <Zap size={40} className="text-brand-neon" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-display text-3xl sm:text-4xl text-white mb-3">
                NOVO MODO DE ENTREGA{" "}
                <span className="text-brand-neon">FLASH</span>
              </h3>
              <p className="font-body text-blue-200/65 text-base leading-relaxed">
                Acabamos de lançar nossa modalidade de entrega expressa. Pedidos
                realizados até as 14h podem ser despachados no mesmo dia,
                chegando ainda mais rápido para você. Disponível para capitais e
                regiões metropolitanas.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="glass border border-brand-neon/30 rounded-2xl px-6 py-4 text-center shadow-neon">
                <p className="font-display text-4xl text-brand-neon text-shadow-neon">24h</p>
                <p className="font-heading text-xs text-blue-100/50 tracking-wider">Modo Flash</p>
              </div>
              <div className="glass border border-brand-gold/30 rounded-2xl px-6 py-4 text-center shadow-gold">
                <p className="font-display text-4xl text-brand-gold text-shadow-gold">3 dias</p>
                <p className="font-heading text-xs text-blue-100/50 tracking-wider">Padrão</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
