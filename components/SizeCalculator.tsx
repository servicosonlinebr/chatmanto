"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Cpu, ChevronDown, Sparkles } from "lucide-react";

type Gender = "masculino" | "feminino";
type Fit = "justo" | "regular" | "largo";

function calculateSize(
  gender: Gender,
  height: number,
  weight: number,
  fit: Fit
): { size: string; confidence: string; tip: string } {
  const bmi = weight / ((height / 100) * (height / 100));

  let baseSize = "";
  if (gender === "masculino") {
    if (height < 165 && weight < 65) baseSize = "P";
    else if (height < 175 && weight < 78) baseSize = "M";
    else if (height < 185 && weight < 92) baseSize = "G";
    else baseSize = "GG";
    if (bmi > 28) baseSize = baseSize === "P" ? "M" : baseSize === "M" ? "G" : "GG";
  } else {
    if (height < 160 && weight < 57) baseSize = "P";
    else if (height < 168 && weight < 68) baseSize = "M";
    else if (height < 175 && weight < 80) baseSize = "G";
    else baseSize = "GG";
    if (bmi > 26) baseSize = baseSize === "P" ? "M" : baseSize === "M" ? "G" : "GG";
  }

  // Adjust for fit preference
  const sizes = ["P", "M", "G", "GG"];
  let idx = sizes.indexOf(baseSize);
  if (fit === "largo" && idx < 3) idx++;
  if (fit === "justo" && idx > 0) idx--;
  const finalSize = sizes[idx];

  const tips: Record<string, string> = {
    P: "Para um visual mais moderno e valorizado.",
    M: "Tamanho ideal para uso confortável e estiloso.",
    G: "Perfeito para quem prefere conforto e mobilidade.",
    GG: "Excelente para máximo conforto e caimento solto.",
  };

  return {
    size: finalSize,
    confidence: bmi > 30 || bmi < 17 ? "Alta" : "Muito Alta",
    tip: tips[finalSize],
  };
}

const SelectField = ({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) => (
  <div className="relative">
    <label className="block font-heading text-xs font-semibold text-brand-neon/70 tracking-wider mb-1.5 uppercase">
      {label}
    </label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="premium-input w-full rounded-xl px-4 py-3 font-body text-sm appearance-none cursor-pointer"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-brand-navy">
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-neon/50 pointer-events-none"
      />
    </div>
  </div>
);

const NumberField = ({
  label,
  value,
  onChange,
  min,
  max,
  placeholder,
  unit,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  min: number;
  max: number;
  placeholder: string;
  unit: string;
}) => (
  <div>
    <label className="block font-heading text-xs font-semibold text-brand-neon/70 tracking-wider mb-1.5 uppercase">
      {label}
    </label>
    <div className="relative">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        placeholder={placeholder}
        className="premium-input w-full rounded-xl px-4 py-3 font-body text-sm pr-14"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 font-heading text-xs text-brand-neon/50">
        {unit}
      </span>
    </div>
  </div>
);

export default function SizeCalculator() {
  const [gender, setGender] = useState<Gender>("masculino");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [fit, setFit] = useState<Fit>("regular");
  const [normalSize, setNormalSize] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateSize> | null>(null);

  const handleCalculate = () => {
    const h = parseInt(height);
    const w = parseInt(weight);
    if (!h || !w || h < 100 || h > 250 || w < 30 || w > 300) return;
    const res = calculateSize(gender, h, w, fit);
    setResult(res);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-brand-deep overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-electric/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-neon/20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-electric/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-electric/30 mb-5">
            <Cpu size={14} className="text-brand-neon" />
            <span className="text-xs font-heading font-semibold tracking-widest text-brand-neon uppercase">
              IA · Calculadora de Tamanho
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            QUAL É O <span className="shimmer-text">SEU TAMANHO?</span>
          </h2>
          <p className="font-body text-blue-200/60 text-base">
            Preencha os dados e nosso algoritmo vai sugerir o tamanho ideal para você.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="glass-strong rounded-3xl p-6 sm:p-8 border border-brand-neon/15 shadow-neon"
        >
          {/* Scan line header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-brand-neon/60 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-brand-electric/60 animate-pulse" style={{ animationDelay: "0.3s" }} />
              <div className="w-3 h-3 rounded-full bg-brand-gold/60 animate-pulse" style={{ animationDelay: "0.6s" }} />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-brand-neon/30 to-transparent" />
            <span className="font-heading text-xs text-brand-neon/50 tracking-widest">
              SISTEMA ATIVO
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <SelectField
              label="Sexo / Modelagem"
              value={gender}
              onChange={(v) => setGender(v as Gender)}
              options={[
                { value: "masculino", label: "Masculino" },
                { value: "feminino", label: "Feminino" },
              ]}
            />
            <SelectField
              label="Caimento desejado"
              value={fit}
              onChange={(v) => setFit(v as Fit)}
              options={[
                { value: "justo", label: "Justo (mais valorizado)" },
                { value: "regular", label: "Regular (padrão)" },
                { value: "largo", label: "Largo (mais conforto)" },
              ]}
            />
            <NumberField
              label="Sua altura"
              value={height}
              onChange={setHeight}
              min={100}
              max={250}
              placeholder="Ex: 175"
              unit="cm"
            />
            <NumberField
              label="Seu peso"
              value={weight}
              onChange={setWeight}
              min={30}
              max={300}
              placeholder="Ex: 70"
              unit="kg"
            />
            <div className="sm:col-span-2">
              <SelectField
                label="Tamanho que normalmente usa"
                value={normalSize}
                onChange={setNormalSize}
                options={[
                  { value: "", label: "Selecione..." },
                  { value: "P", label: "P — Pequeno" },
                  { value: "M", label: "M — Médio" },
                  { value: "G", label: "G — Grande" },
                  { value: "GG", label: "GG — Extra Grande" },
                ]}
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            disabled={!height || !weight}
            className="btn-glow w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-electric to-brand-neon text-brand-black font-heading font-bold text-base py-4 rounded-xl shadow-neon hover:shadow-neon-strong transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Sparkles size={18} />
            CALCULAR MEU TAMANHO
          </button>

          {/* Result */}
          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className="mt-6 overflow-hidden"
              >
                <div className="relative glass rounded-2xl p-6 border border-brand-neon/30 shadow-neon overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/10 to-brand-electric/5 pointer-events-none" />

                  <div className="relative flex items-center gap-6">
                    <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-neon/20 to-brand-electric/10 border border-brand-neon/40 flex items-center justify-center shadow-neon">
                      <span className="font-display text-5xl text-brand-neon text-shadow-neon">
                        {result.size}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-heading text-sm font-semibold text-brand-neon">
                          TAMANHO SUGERIDO
                        </span>
                        <span className="text-xs font-body px-2 py-0.5 rounded-full bg-brand-neon/10 border border-brand-neon/20 text-brand-neon/70">
                          Precisão: {result.confidence}
                        </span>
                      </div>
                      <p className="font-body text-blue-100/70 text-sm">
                        {result.tip}
                      </p>
                      <p className="font-body text-xs text-blue-100/40 mt-1.5">
                        * Sugestão baseada em medidas padrão. Dúvidas? Prefira o tamanho maior.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
