"use client";

import { useEffect, useState } from "react";
import { Zap, Package, Clock } from "lucide-react";

function useCountdown(initialHours: number = 3) {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: 47,
    seconds: 22,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset when hits zero
          hours = 3;
          minutes = 47;
          seconds = 22;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function UrgencyBar() {
  const time = useCountdown(3);

  return (
    <div className="sticky top-0 z-50 w-full overflow-hidden">
      {/* Gradient border bottom */}
      <div className="relative bg-gradient-to-r from-brand-navy via-brand-electric to-brand-navy border-b border-brand-neon/20">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-electric/10 via-brand-neon/5 to-brand-electric/10 animate-pulse-slow" />

        <div className="relative flex items-center justify-between px-3 py-2 sm:px-6 sm:py-2.5">
          {/* Left: Frete Grátis */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-brand-neon font-heading font-semibold">
            <Package size={14} className="text-brand-neon" />
            <span>FRETE GRÁTIS</span>
          </div>

          {/* Center: Ticker message */}
          <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4">
            <Zap size={14} className="text-brand-gold animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm font-heading font-semibold text-white tracking-wide text-center">
              🔥 OFERTA POR TEMPO LIMITADO — FRETE GRÁTIS + ENTREGA FLASH
            </span>
            <Zap size={14} className="text-brand-gold animate-pulse flex-shrink-0" />
          </div>

          {/* Right: Countdown */}
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <Clock size={13} className="text-brand-neon hidden sm:block" />
            <div className="flex items-center gap-0.5">
              {[pad(time.hours), pad(time.minutes), pad(time.seconds)].map(
                (unit, i) => (
                  <span key={i} className="flex items-center gap-0.5">
                    <span className="inline-flex items-center justify-center bg-brand-black/60 text-brand-neon font-display text-sm sm:text-base px-1.5 py-0.5 rounded min-w-[1.75rem] text-center border border-brand-neon/20">
                      {unit}
                    </span>
                    {i < 2 && (
                      <span className="text-brand-neon/70 font-bold text-xs animate-pulse">
                        :
                      </span>
                    )}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Animated neon line at bottom */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-neon/60 to-transparent" />
      </div>
    </div>
  );
}
