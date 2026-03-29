"use client";

import { useState } from "react";
import UrgencyBar from "@/components/UrgencyBar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import CatalogSection from "@/components/CatalogSection";
import SizeCard from "@/components/SizeCard";
import SizeCalculator from "@/components/SizeCalculator";
import OffersSection from "@/components/OffersSection";
import ShippingSection from "@/components/ShippingSection";
import FinalCTA from "@/components/FinalCTA";
import CheckoutModal from "@/components/CheckoutModal";

export type OfferType = "kit" | "unit" | null;

export default function Home() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<OfferType>(null);

  const handleBuyClick = (offer: OfferType) => {
    // Play "Gol do Brasil" audio via Web Speech API
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      synth.cancel();
      const utter = new SpeechSynthesisUtterance("Goooool do Brasil!");
      utter.lang = "pt-BR";
      utter.pitch = 1.3;
      utter.rate = 0.85;
      utter.volume = 0.9;
      synth.speak(utter);
    }
    setSelectedOffer(offer);
    setCheckoutOpen(true);
  };

  return (
    <main className="relative overflow-x-hidden bg-brand-black">
      <UrgencyBar />
      <HeroSection onBuy={() => handleBuyClick("unit")} />
      <BenefitsSection />
      <AboutSection />
      <CatalogSection />
      <SizeCard />
      <SizeCalculator />
      <OffersSection onBuy={handleBuyClick} />
      <ShippingSection />
      <FinalCTA onBuy={() => handleBuyClick("unit")} />

      {checkoutOpen && (
        <CheckoutModal
          offer={selectedOffer}
          onClose={() => setCheckoutOpen(false)}
        />
      )}
    </main>
  );
}
