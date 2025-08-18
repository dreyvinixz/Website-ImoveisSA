"use client";
/**
 * COMPONENTE: Highlights
 * LOCALIZAÇÃO: website/src/components/Sections/Home/Highlights/Highlights.tsx
 * TIPO: Componente de UI
 * PAI: Home
 * DESCRIÇÃO: Componente responsável por exibir os destaques da página inicial.
 *            Exibe uma série de slides com imagens, títulos, subtítulos e botões de ação.
 *            Suporta navegação por teclado e toque, com autoplay opcional.
 */

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type Slide = {
  id: string;
  title?: string;
  subtitle?: string;
  image: string; // path em /public, ex: "/images/fig_02.jpg"
  ctaLabel?: string;
  ctaHref?: string;
};

const SLIDES: Slide[] = [
  {
    id: 's1',
    title: 'Destaque 1',
    subtitle: 'O imóvel dos seus sonhos está aqui.',
    image: '/images/fig_01.jpg',
    ctaLabel: 'Ver detalhes',
    ctaHref: '/property/1',
  },
  {
    id: 's2',
    title: 'Destaque 2',
    subtitle: 'Localização privilegiada e excelente preço.',
    image: '/images/fig_02.jpg',
    ctaLabel: 'Explorar',
    ctaHref: '/property/2',
  },
  {
    id: 's3',
    title: 'Destaque 3',
    subtitle: 'Conforto e segurança para sua família.',
    image: '/images/fig_03.jpg',
    ctaLabel: 'Agendar visita',
    ctaHref: '/contact',
  },
];

const AUTO_PLAY_INTERVAL = 5000; // ms

const Highlights: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Touch support
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const slidesCount = SLIDES.length;

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = window.setInterval(() => {
        setIndex((prev) => (prev + 1) % slidesCount);
      }, AUTO_PLAY_INTERVAL);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPaused, slidesCount]);

  const goTo = (i: number) => {
    const next = (i + slidesCount) % slidesCount;
    setIndex(next);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // Keyboard navigation (left/right), pausa ao focar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]); // index not strictly required but kept

  // Touch handlers (simples)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const dx = touchStartX.current - touchEndX.current;
    const threshold = 50; // px
    if (dx > threshold) {
      // swipe left -> next
      next();
    } else if (dx < -threshold) {
      // swipe right -> prev
      prev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="highlights"
      className="w-full relative my-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slides container (viewport) */}
      <div
        className="overflow-hidden relative w-full rounded-lg"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${slidesCount * 100}%`,
            transform: `translateX(-${(index * 100) / slidesCount}%)`,
          }}
        >
          {SLIDES.map((s) => (
            <div
              key={s.id}
              className="relative w-full flex-shrink-0"
              style={{ width: `${100 / slidesCount}%` }}
              aria-hidden={SLIDES[index].id !== s.id}
            >
              {/* Container with fixed height for consistent layout */}
              <div className="relative w-full h-[320px] md:h-[480px]">
                <Image
                  src={s.image}
                  alt={s.title ?? 'Destaque'}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                  priority={s.id === SLIDES[0].id} // prioridade para o primeiro
                />
                {/* Overlay for text */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-auto text-left text-white">
                  <h3 className="text-xl md:text-3xl font-bold drop-shadow-md">{s.title}</h3>
                  <p className="text-sm md:text-base max-w-lg drop-shadow-md">{s.subtitle}</p>
                  {s.ctaLabel && (
                    <a
                      href={s.ctaHref ?? '#'}
                      className="inline-block mt-3 bg-white/90 text-zinc-900 px-4 py-2 rounded-md text-sm font-medium shadow"
                    >
                      {s.ctaLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls: prev / next */}
      <button
        aria-label="Anterior"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        ‹
      </button>
      <button
        aria-label="Próximo"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex gap-2 justify-center mt-4">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            aria-current={i === index}
            className={`w-3 h-3 rounded-full transition ${i === index ? 'bg-zinc-900' : 'bg-zinc-400'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Highlights;
