"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const catalogImages = [
  { src: "https://i.ibb.co/r24xzb7M/cat1.jpg", alt: "Camisa Brasil - Vista 1" },
  { src: "https://i.ibb.co/PGG6Tf79/cat2.jpg", alt: "Camisa Brasil - Vista 2" },
  { src: "https://i.ibb.co/wNP6pK1y/cat3.jpg", alt: "Camisa Brasil - Vista 3" },
  { src: "https://i.ibb.co/8LCj3Pfs/cat4.jpg", alt: "Camisa Brasil - Vista 4" },
  { src: "https://i.ibb.co/Q7ksRWvM/cat5.jpg", alt: "Camisa Brasil - Vista 5" },
  { src: "https://i.ibb.co/678T42rp/cat6.jpg", alt: "Camisa Brasil - Vista 6" },
  { src: "https://i.ibb.co/B5CnVnjV/cat7.jpg", alt: "Camisa Brasil - Vista 7" },
  { src: "https://i.ibb.co/r2DrL2wN/cat8.jpg", alt: "Camisa Brasil - Vista 8" },
  { src: "https://i.ibb.co/bMzkBKnt/cat9.jpg", alt: "Camisa Brasil - Vista 9" },
];

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: typeof catalogImages;
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-brand-black/95 backdrop-blur-xl p-4"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-60 glass border border-white/10 rounded-full p-2 hover:border-brand-neon/40 transition-all"
        >
          <X size={20} className="text-white" />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 z-60 glass border border-white/10 rounded-full p-3 hover:border-brand-neon/40 transition-all"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 z-60 glass border border-white/10 rounded-full p-3 hover:border-brand-neon/40 transition-all"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg h-[70vh] rounded-2xl overflow-hidden gradient-border shadow-neon"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-contain"
            unoptimized
          />
        </motion.div>

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass border border-brand-neon/20 rounded-full px-4 py-1.5">
          <span className="font-heading text-sm text-brand-neon">
            {index + 1} / {images.length}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function CatalogSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + catalogImages.length) % catalogImages.length : 0
    );
  const nextImage = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % catalogImages.length : 0
    );

  return (
    <section
      id="catalogo"
      className="relative py-20 sm:py-28 bg-brand-deep overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-neon/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-electric/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-gold/30 mb-5">
            <span className="text-xs font-heading font-semibold tracking-widest text-brand-gold uppercase">
              Galeria Premium
            </span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-white mb-4">
            CATÁLOGO <span className="shimmer-text">EXCLUSIVO</span>
          </h2>
          <p className="font-body text-blue-200/60 text-base">
            Toque para visualizar em alta qualidade
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {catalogImages.map((img, i) => {
            // Make first and middle images larger
            const isLarge = i === 0 || i === 4;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group gradient-border shadow-electric ${
                  isLarge ? "sm:col-span-2 aspect-[16/10]" : "aspect-[3/4]"
                }`}
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  unoptimized
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Hover icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="glass border border-brand-neon/40 rounded-full p-3 shadow-neon">
                    <ZoomIn size={22} className="text-brand-neon" />
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="glass rounded-lg px-3 py-2 border border-brand-neon/20">
                    <span className="font-heading text-xs text-brand-neon tracking-wider">
                      CAMISA BRASIL #{i + 1}
                    </span>
                  </div>
                </div>

                {/* Corner neon */}
                <div className="absolute top-2 right-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-brand-neon/60" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={catalogImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
