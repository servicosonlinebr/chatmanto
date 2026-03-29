"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Tecido premium de alta performance respirável",
  "Acabamento impecável com costura reforçada",
  "Cores vibrantes que não desbotam na lavagem",
  "Caimento perfeito para qualquer tipo de corpo",
  "Design exclusivo que transmite força e identidade",
  "Conforto superior para uso prolongado",
];

export default function AboutSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-brand-black overflow-hidden">
      <div className="absolute inset-0 hex-pattern opacity-30" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              {/* Back image */}
              <div className="absolute -bottom-4 -right-4 w-3/4 h-full rounded-2xl overflow-hidden border border-brand-electric/20 shadow-electric">
                <Image
                  src="https://i.ibb.co/r24xzb7M/cat1.jpg"
                  alt="Camisa Brasil detalhe"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
                <div className="absolute inset-0 bg-brand-navy/40" />
              </div>

              {/* Main image */}
              <div className="absolute -top-0 -left-0 w-3/4 h-full rounded-2xl overflow-hidden gradient-border shadow-neon z-10">
                <Image
                  src="https://i.ibb.co/PGG6Tf79/cat2.jpg"
                  alt="Camisa Brasil premium"
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />
              </div>

              {/* Floating stats */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-2 top-1/3 z-20 glass border border-brand-neon/30 rounded-xl px-4 py-3 shadow-neon"
              >
                <p className="font-display text-3xl text-brand-gold">4.9</p>
                <p className="font-heading text-xs text-blue-100/60">
                  Avaliação média
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -left-4 bottom-1/4 z-20 glass border border-brand-gold/30 rounded-xl px-4 py-3 shadow-gold"
              >
                <p className="font-display text-3xl text-brand-neon">2K+</p>
                <p className="font-heading text-xs text-blue-100/60">
                  Vendas realizadas
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-gold/30 mb-6 self-start">
              <span className="text-xs font-heading font-semibold tracking-widest text-brand-gold uppercase">
                Sobre a Camisa
              </span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl text-white mb-6 leading-tight">
              UMA PEÇA QUE CONTA{" "}
              <span className="gold-shimmer">UMA HISTÓRIA</span>
            </h2>

            <p className="font-body text-blue-200/65 text-base leading-relaxed mb-5">
              Mais do que uma camisa, é uma declaração de amor ao Brasil. Cada
              detalhe foi meticulosamente desenvolvido para oferecer o melhor em
              estilo, conforto e identidade — de quem vibra com a seleção e quer
              expressar isso com classe.
            </p>

            <p className="font-body text-blue-200/65 text-base leading-relaxed mb-8">
              A modelagem moderna valoriza a silhueta e garante um caimento
              impecável. O tecido premium proporciona leveza e respirabilidade
              para usar o dia inteiro com conforto absoluto. Do estádio à rua,
              você vai se sentir parte de algo grandioso.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="text-brand-neon flex-shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-blue-100/80">{h}</span>
                </motion.li>
              ))}
            </ul>

            {/* Bottom stat bar */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Qualidade", value: "Premium" },
                { label: "Conforto", value: "Total" },
                { label: "Estilo", value: "Único" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-3 border border-brand-neon/10 text-center"
                >
                  <p className="font-display text-xl text-brand-neon">
                    {stat.value}
                  </p>
                  <p className="font-heading text-xs text-blue-100/50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
