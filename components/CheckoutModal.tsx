"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, type ElementType } from "react";
import {
  X,
  MapPin,
  Phone,
  CreditCard,
  Gift,
  Package,
  ChevronRight,
  Lock,
  Zap,
  AlertCircle,
} from "lucide-react";
import type { OfferType } from "@/app/page";

// ===== PAYMENT LINKS (centralized - easy to update) =====
const PAYMENT_LINKS = {
  kit: "https://pay.lowify.com.br/checkout?product_id=Fsuvdd",   // R$ 119,99
  unit: "https://pay.lowify.com.br/checkout?product_id=txbM2s",  // R$ 74,99
};

interface CheckoutModalProps {
  offer: OfferType;
  onClose: () => void;
}

interface FormData {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
  numero: string;
  complemento: string;
  telefone: string;
  cpf: string;
  embrulho: "presente" | "normal";
}

const initialForm: FormData = {
  cep: "",
  rua: "",
  bairro: "",
  cidade: "",
  estado: "",
  numero: "",
  complemento: "",
  telefone: "",
  cpf: "",
  embrulho: "normal",
};

// Format helpers
function formatCep(v: string) {
  return v.replace(/\D/g, "").slice(0, 8).replace(/^(\d{5})(\d)/, "$1-$2");
}
function formatPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 10)
    return d.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  return d.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}
function formatCpf(v: string) {
  return v
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

// Fetch address from CEP
async function fetchAddress(cep: string): Promise<Partial<FormData> | null> {
  try {
    const clean = cep.replace(/\D/g, "");
    if (clean.length !== 8) return null;
    const res = await fetch(`https://viacep.com.br/ws/${clean}/json/`);
    const data = await res.json();
    if (data.erro) return null;
    return {
      rua: data.logradouro || "",
      bairro: data.bairro || "",
      cidade: data.localidade || "",
      estado: data.uf || "",
    };
  } catch {
    return null;
  }
}

// Form field
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = true,
  icon: Icon,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
  icon?: ElementType;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="font-heading text-xs font-semibold text-brand-neon/70 tracking-wider uppercase">
        {label}
        {required && <span className="text-brand-neon/40 ml-1">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={15}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-neon/30 pointer-events-none"
          />
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`premium-input w-full rounded-xl py-3.5 text-sm font-body ${
            Icon ? "pl-10 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
}

export default function CheckoutModal({ offer, onClose }: CheckoutModalProps) {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loadingCep, setLoadingCep] = useState(false);
  const [cepError, setCepError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const price = offer === "kit" ? "R$ 119,99" : "R$ 74,99";
  const paymentLink = PAYMENT_LINKS[offer ?? "unit"];

  const set = (key: keyof FormData) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleCepChange = async (v: string) => {
    const formatted = formatCep(v);
    set("cep")(formatted);
    setCepError("");

    if (formatted.replace(/\D/g, "").length === 8) {
      setLoadingCep(true);
      const addr = await fetchAddress(formatted);
      setLoadingCep(false);
      if (addr) {
        setForm((prev) => ({ ...prev, ...addr }));
      } else {
        setCepError("CEP não encontrado. Preencha manualmente.");
      }
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    const required: (keyof FormData)[] = ["cep", "rua", "bairro", "cidade", "estado", "numero", "telefone", "cpf"];
    required.forEach((k) => {
      if (!form[k] || form[k].trim() === "") {
        newErrors[k] = "Campo obrigatório";
      }
    });
    const cpfClean = form.cpf.replace(/\D/g, "");
    if (cpfClean && cpfClean.length !== 11) newErrors.cpf = "CPF inválido";
    const phoneClean = form.telefone.replace(/\D/g, "");
    if (phoneClean && phoneClean.length < 10) newErrors.telefone = "Telefone inválido";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmitting(true);
    // Save selection to sessionStorage before redirect
    try {
      sessionStorage.setItem("checkout_data", JSON.stringify({ form, offer }));
    } catch {}
    // Small delay for UX feedback then redirect
    setTimeout(() => {
      window.location.href = paymentLink;
    }, 800);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex flex-col bg-brand-black overflow-hidden"
      >
        {/* Background effects */}
        <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-electric/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Header */}
        <div className="relative flex-shrink-0 glass border-b border-brand-neon/15 px-4 sm:px-6 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center">
                <MapPin size={16} className="text-brand-neon" />
              </div>
              <div>
                <h2 className="font-heading font-bold text-white text-lg leading-none">
                  Dados de Entrega
                </h2>
                <p className="font-body text-xs text-blue-100/40 mt-0.5">
                  Preencha para finalizar o pedido
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col items-end">
                <span className="font-heading text-xs text-brand-neon/60">Total</span>
                <span className="font-display text-xl text-brand-neon">{price}</span>
              </div>
              <button
                onClick={onClose}
                className="glass border border-white/10 rounded-full p-2 hover:border-brand-neon/30 transition-all"
              >
                <X size={18} className="text-white/60" />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="max-w-2xl mx-auto mt-4">
            <div className="flex items-center gap-2">
              {["Entrega", "Pagamento", "Confirmação"].map((step, i) => (
                <div key={step} className="flex items-center gap-2 flex-1 last:flex-none">
                  <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-heading font-bold border ${
                    i === 0
                      ? "bg-brand-neon text-brand-black border-brand-neon"
                      : "glass border-brand-neon/20 text-blue-100/30"
                  }`}>
                    {i + 1}
                  </div>
                  <span className={`font-heading text-xs ${i === 0 ? "text-brand-neon" : "text-blue-100/30"}`}>
                    {step}
                  </span>
                  {i < 2 && <div className="flex-1 h-px bg-brand-neon/10" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable form */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6 space-y-6">

            {/* CEP block */}
            <div className="glass-strong rounded-2xl p-5 border border-brand-neon/10">
              <h3 className="font-heading font-bold text-sm text-brand-neon/80 tracking-wider uppercase mb-4 flex items-center gap-2">
                <MapPin size={14} />
                Endereço de Entrega
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* CEP */}
                <div className="sm:col-span-2">
                  <label className="font-heading text-xs font-semibold text-brand-neon/70 tracking-wider uppercase mb-1.5 block">
                    CEP <span className="text-brand-neon/40">*</span>
                  </label>
                  <div className="relative">
                    <MapPin size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-neon/30 pointer-events-none" />
                    <input
                      type="text"
                      value={form.cep}
                      onChange={(e) => handleCepChange(e.target.value)}
                      placeholder="00000-000"
                      className="premium-input w-full rounded-xl py-3.5 text-sm font-body pl-10 pr-4"
                      inputMode="numeric"
                    />
                    {loadingCep && (
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 border-2 border-brand-neon/30 border-t-brand-neon rounded-full animate-spin" />
                      </div>
                    )}
                  </div>
                  {cepError && (
                    <p className="flex items-center gap-1 text-xs text-amber-400/80 mt-1 font-body">
                      <AlertCircle size={11} />
                      {cepError}
                    </p>
                  )}
                  {errors.cep && <p className="text-xs text-red-400/80 mt-1 font-body">{errors.cep}</p>}
                </div>

                <div className="sm:col-span-2">
                  <Field label="Rua / Logradouro" value={form.rua} onChange={set("rua")} placeholder="Ex: Rua das Flores" icon={MapPin} />
                  {errors.rua && <p className="text-xs text-red-400/80 mt-1 font-body">{errors.rua}</p>}
                </div>

                <div>
                  <Field label="Número" value={form.numero} onChange={set("numero")} placeholder="Ex: 123" />
                  {errors.numero && <p className="text-xs text-red-400/80 mt-1 font-body">{errors.numero}</p>}
                </div>
                <Field label="Complemento" value={form.complemento} onChange={set("complemento")} placeholder="Apto, Bloco..." required={false} />

                <div>
                  <Field label="Bairro" value={form.bairro} onChange={set("bairro")} placeholder="Ex: Centro" />
                  {errors.bairro && <p className="text-xs text-red-400/80 mt-1 font-body">{errors.bairro}</p>}
                </div>
                <div>
                  <Field label="Cidade" value={form.cidade} onChange={set("cidade")} placeholder="Ex: São Paulo" />
                  {errors.cidade && <p className="text-xs text-red-400/80 mt-1 font-body">{errors.cidade}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className="font-heading text-xs font-semibold text-brand-neon/70 tracking-wider uppercase mb-1.5 block">
                    Estado <span className="text-brand-neon/40">*</span>
                  </label>
                  <select
                    value={form.estado}
                    onChange={(e) => set("estado")(e.target.value)}
                    className="premium-input w-full rounded-xl px-4 py-3.5 text-sm font-body appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-brand-navy">Selecione o estado</option>
                    {["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"].map(uf => (
                      <option key={uf} value={uf} className="bg-brand-navy">{uf}</option>
                    ))}
                  </select>
                  {errors.estado && <p className="text-xs text-red-400/80 mt-1 font-body">{errors.estado}</p>}
                </div>
              </div>
            </div>

            {/* Contact & CPF */}
            <div className="glass-strong rounded-2xl p-5 border border-brand-electric/10">
              <h3 className="font-heading font-bold text-sm text-brand-neon/80 tracking-wider uppercase mb-4 flex items-center gap-2">
                <Phone size={14} />
                Contato & Identificação
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-heading text-xs font-semibold text-brand-neon/70 tracking-wider uppercase mb-1.5 block">
                    Telefone / WhatsApp <span className="text-brand-neon/40">*</span>
                  </label>
                  <div className="relative">
                    <Phone size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-neon/30 pointer-events-none" />
                    <input
                      type="tel"
                      value={form.telefone}
                      onChange={(e) => set("telefone")(formatPhone(e.target.value))}
                      placeholder="(00) 00000-0000"
                      className="premium-input w-full rounded-xl py-3.5 text-sm font-body pl-10 pr-4"
                      inputMode="numeric"
                    />
                  </div>
                  {errors.telefone && <p className="text-xs text-red-400/80 mt-1 font-body">{errors.telefone}</p>}
                </div>
                <div>
                  <label className="font-heading text-xs font-semibold text-brand-neon/70 tracking-wider uppercase mb-1.5 block">
                    CPF <span className="text-brand-neon/40">*</span>
                  </label>
                  <div className="relative">
                    <CreditCard size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-neon/30 pointer-events-none" />
                    <input
                      type="text"
                      value={form.cpf}
                      onChange={(e) => set("cpf")(formatCpf(e.target.value))}
                      placeholder="000.000.000-00"
                      className="premium-input w-full rounded-xl py-3.5 text-sm font-body pl-10 pr-4"
                      inputMode="numeric"
                    />
                  </div>
                  {errors.cpf && <p className="text-xs text-red-400/80 mt-1 font-body">{errors.cpf}</p>}
                </div>
              </div>
            </div>

            {/* Packaging option */}
            <div className="glass-strong rounded-2xl p-5 border border-brand-gold/10">
              <h3 className="font-heading font-bold text-sm text-brand-neon/80 tracking-wider uppercase mb-4 flex items-center gap-2">
                <Gift size={14} />
                Tipo de Embalagem
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => set("embrulho")("normal")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 ${
                    form.embrulho === "normal"
                      ? "bg-brand-electric/15 border-brand-electric/50 shadow-electric"
                      : "glass border-white/10 hover:border-brand-neon/20"
                  }`}
                >
                  <Package size={22} className={form.embrulho === "normal" ? "text-brand-neon" : "text-blue-100/40"} />
                  <div>
                    <p className={`font-heading font-semibold text-sm ${form.embrulho === "normal" ? "text-white" : "text-blue-100/50"}`}>
                      Pacote Normal
                    </p>
                    <p className="font-body text-xs text-blue-100/30 text-center">Embalagem padrão</p>
                  </div>
                </button>
                <button
                  onClick={() => set("embrulho")("presente")}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 ${
                    form.embrulho === "presente"
                      ? "bg-brand-gold/10 border-brand-gold/50 shadow-gold"
                      : "glass border-white/10 hover:border-brand-gold/20"
                  }`}
                >
                  <Gift size={22} className={form.embrulho === "presente" ? "text-brand-gold" : "text-blue-100/40"} />
                  <div>
                    <p className={`font-heading font-semibold text-sm ${form.embrulho === "presente" ? "text-brand-gold" : "text-blue-100/50"}`}>
                      Embrulho Presente
                    </p>
                    <p className="font-body text-xs text-blue-100/30 text-center">Lacrado especial</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Order summary */}
            <div className="glass rounded-2xl p-5 border border-brand-neon/10">
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading text-sm text-blue-100/60">
                  {offer === "kit" ? "Kit Casal (2 camisas)" : "1 Camisa Premium"}
                </span>
                <span className="font-heading font-bold text-white">{price}</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-sm text-blue-100/60">Frete</span>
                <span className="font-heading font-bold text-brand-neon">GRÁTIS</span>
              </div>
              <div className="h-px bg-brand-neon/10 mb-4" />
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-white">Total</span>
                <span className="font-display text-2xl text-brand-neon">{price}</span>
              </div>
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="btn-glow w-full flex items-center justify-center gap-3 bg-gradient-to-r from-brand-electric to-brand-neon text-brand-black font-heading font-bold text-lg py-5 rounded-2xl shadow-neon hover:shadow-neon-strong transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-brand-black/40 border-t-brand-black rounded-full animate-spin" />
                  Redirecionando...
                </>
              ) : (
                <>
                  <Lock size={18} />
                  IR PARA O PAGAMENTO
                  <ChevronRight size={20} />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 pb-4">
              <Lock size={12} className="text-brand-neon/40" />
              <p className="font-body text-xs text-blue-100/30 text-center">
                Ambiente seguro e criptografado · Seus dados estão protegidos
              </p>
            </div>
          </div>
        </div>

        {/* Sticky bottom CTA for mobile */}
        <div className="sm:hidden flex-shrink-0 glass border-t border-brand-neon/15 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="font-heading text-xs text-blue-100/50">Total do pedido</span>
            <span className="font-display text-xl text-brand-neon">{price}</span>
          </div>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="btn-glow w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-electric to-brand-neon text-brand-black font-heading font-bold text-base py-4 rounded-xl shadow-neon transition-all duration-300 active:scale-[0.98] disabled:opacity-70"
          >
            <Zap size={16} />
            {submitting ? "Redirecionando..." : "IR PARA O PAGAMENTO"}
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
