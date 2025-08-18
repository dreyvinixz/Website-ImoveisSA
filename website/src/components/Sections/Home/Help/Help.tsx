/**
 * COMPONENTE: Help
 * LOCALIZAÇÃO: website/src/components/Sections/Home/Help/Help.tsx
 * TIPO: Componente de UI
 * PAI: Home
 * DESCRIÇÃO: Componente responsável por exibir informações de ajuda na seção
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Help = () => {
  return (
    <section className="bg-sky-200 rounded-xl overflow-hidden mb-0">
      {/* Top bar */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-lg text-zinc-800">Logo</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-800">
          <Link href="#help">Help</Link>
          <Link href="#subscribe">Subscribe To Our Newsletter</Link>
          <Link href="/privacy-policy">Política e Privacidade</Link>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Texto */}
        <div className="w-full md:w-1/2 px-6 py-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3">
            Como podemos ajudar?
          </h2>
          <p className="text-zinc-700 mb-6">
            Entre em contato conosco ou assine nossa newsletter para receber as
            últimas novidades e ofertas exclusivas.
          </p>
          <button className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-full hover:bg-zinc-500 transition">
            Fale Conosco
            <span className="text-lg">➜</span>
          </button>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2 h-64 md:h-72 relative  md:ml-[40rem]">
          <Image
            src="/images/unsplash_YkXbHOGI8ZY.png"
            alt="Imagem ilustrativa"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Help;
