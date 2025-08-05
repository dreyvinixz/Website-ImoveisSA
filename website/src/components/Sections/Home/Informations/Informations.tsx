/**
 * COMPONENTE: Informations
 * LOCALIZAÇÃO: website/src/components/Sections/Home/Informations/Informations.tsx
 * TIPO: Sub-componente de UI
 * PAI: Home
 * DESCRIÇÃO: Componente responsável por exibir informações na seção sobre a empresa
 */

import React from "react";

const Informations: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white px-8 py-15 md:px-15 lg:px-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Coluna da Esquerda (Conteúdo "Who We Are?") */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h2 className="text-4xl font-bold">Who We Are?</h2>
          <p className="text-base text-gray-300 max-w-md">
            We'll help you find the key to your dream home.
          </p>
          <a href="#" className="text-white font-semibold border-b-2 border-white pb-1 hover:text-gray-200 hover:border-gray-200 transition">
            Read more
          </a>
        </div>

        {/* Coluna da Direita (Pesquisa e Métricas) */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {/* Barra de Pesquisa */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search"
              className="w-full bg-transparent border-b border-gray-500 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-white transition"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-2 top-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Métricas */}
          <div className="flex justify-between text-center">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">180+</span>
              <span className="text-sm text-gray-400">Premium House</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">1200+</span>
              <span className="text-sm text-gray-400">Agent House</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">14k</span>
              <span className="text-sm text-gray-400">Happy Clients</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Informations;