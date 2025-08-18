"use client";

/**
 * Component: SalesSection
 * Location: website/src/components/Sections/Home/SalesSection/SalesSection.tsx
 * Type: Component Main
 * Parent: Home
 * Description: Componente responsável por exibir uma seção de imóveis para compra e aluguel na página inicial.
 *           Exibe duas listas roláveis horizontalmente, uma para imóveis à venda e outra para aluguel.
 *          Cada imóvel é apresentado em um cartão com imagem, preço, endereço e agente.
 *
 */

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Property = {
  id: string;
  title?: string;
  price: string;
  address: string;
  image: string; // '/images/xxx.jpg' (public/)
  agent?: string;
};

const MOCK_SALES: Property[] = [
  {
    id: "1",
    price: "R$ 100.000,00",
    address: "Rua Curitiba, N132, Santa Maria",
    image: "/images/fig_01.jpg",
    agent: "Corretora ABC",
  },
  {
    id: "2",
    price: "R$ 120.000,00",
    address: "Rua Guarulhos, N882, Santa Maria",
    image: "/images/fig_02.jpg",
    agent: "Corretora ABC",
  },
  {
    id: "3",
    price: "R$ 120.000,00",
    address: "Rua Guarulhos, N883, Santa Maria",
    image: "/images/fig_03.jpg",
    agent: "Corretora ABC",
  },
  {
    id: "4",
    price: "R$ 120.000,00",
    address: "Rua Guarulhos, N884, Santa Maria",
    image: "/images/fig_04.jpg",
    agent: "Corretora ABC",
  },
];

const MOCK_RENTS: Property[] = [
  {
    id: "r1",
    price: "R$ 2.500,00",
    address: "Rua Guarulhos, N452, Santa Maria",
    image: "/images/rent_01.jpg",
    agent: "123 IMÓVEIS",
  },
  {
    id: "r2",
    price: "R$ 1.500,00",
    address: "Rua E, LT22 QD05, Jardim Dourado",
    image: "/images/rent_02.jpg",
    agent: "123 IMÓVEIS",
  },
  {
    id: "r3",
    price: "R$ 3.100,00",
    address: "Rua Guarulhos, N072, Santa Maria",
    image: "/images/rent_03.jpg",
    agent: "123 IMÓVEIS",
  },
  {
    id: "r4",
    price: "R$ 4.500,00",
    address: "Rua Guarulhos, N268, Santa Maria",
    image: "/images/rent_04.jpg",
    agent: "123 IMÓVEIS",
  },
];

// Card individual
const PropertyCard: React.FC<{ p: Property }> = ({ p }) => {
  return (
    <article className="w-[80%] sm:w-64 md:w-72 lg:w-80 flex-shrink-0 bg-[var(--background)] rounded-lg overflow-hidden shadow-md snap-start">
      <div className="relative w-full h-40 md:h-44 lg:h-48">
        <Image
          src={p.image}
          alt={p.title ?? "Imóvel"}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <div className="text-base font-extrabold">{p.price}</div>
        <div className="text-xs text-zinc-600 mt-1">{p.address}</div>
        <div className="text-xs text-zinc-500 mt-3 text-right">{p.agent}</div>
      </div>
    </article>
  );
};

const ScrollableRow: React.FC<{
  title: string;
  items: Property[];
  queryType: "sale" | "rent";
}> = ({ title, items, queryType }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const scrollBy = (direction: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    const cardWidth =
      el.querySelector("article")?.clientWidth ?? el.clientWidth * 0.8;
    const gap = 16; // se aplicável
    const offset = (cardWidth + gap) * 2; // avança 2 cards; ajuste conforme necessário
    el.scrollBy({
      left: direction === "right" ? offset : -offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex items-center gap-3">
          <Link
            href={{ pathname: "/search", query: { type: queryType } }}
            className="text-sm font-medium px-3 py-1 border rounded-md hover:bg-zinc-100"
          >
            Ver mais
          </Link>
          <div className="flex gap-2">
            <button
              aria-label={`${title} - Anterior`}
              onClick={() => scrollBy("left")}
              className="p-2 rounded-full bg-black/10 hover:bg-black/20"
            >
              ‹
            </button>
            <button
              aria-label={`${title} - Próximo`}
              onClick={() => scrollBy("right")}
              className="p-2 rounded-full bg-black/10 hover:bg-black/20"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-1 py-2 snap-x snap-mandatory touch-pan-x"
        role="list"
        aria-label={`${title} list`}
      >
        {items.map((it) => (
          <div key={it.id} role="listitem">
            <PropertyCard p={it} />
          </div>
        ))}
      </div>
    </section>
  );
};

const SalesSection: React.FC = () => {
  return (
    <div className=" bg-amber-50 px-4 md:px-8 lg:px-12">
      <ScrollableRow
        title="IMÓVEIS PARA COMPRAR"
        items={MOCK_SALES}
        queryType="sale"
      />
      <ScrollableRow
        title="IMÓVEIS PARA ALUGAR"
        items={MOCK_RENTS}
        queryType="rent"
      />
    </div>
  );
};

export default SalesSection;
