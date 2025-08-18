/**
 * COMPONENTE: Footer
 * TIPO: Layout Component
 * PAI: Layout
 * FILHOS: Nenhum
 * PROPS: {}
 * RESPONSABILIDADE: Rodapé do site, exibe informações de direitos autorais e links adicionais
 */

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f7ebcd] text-black px-6 md:px-16 py-10">
      {/* Conteúdo principal */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-8">
        {/* Sobre nós */}
        <div>
          <h3 className="font-bold mb-3 uppercase">Sobre Nós</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/quem-somos" className="hover:underline">
                Quem Somos
              </a>
            </li>
            <li>
              <a href="/servicos" className="hover:underline">
                Serviços
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Imóveis */}
        <div>
          <h3 className="font-bold mb-3 uppercase">Imóveis</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/venda" className="hover:underline">
                Imóveis à Venda
              </a>
            </li>
            <li>
              <a href="/locacao" className="hover:underline">
                Imóveis para Locação
              </a>
            </li>
            <li>
              <a href="/favoritos" className="hover:underline">
                Favoritos
              </a>
            </li>
          </ul>
        </div>

        {/* Anunciantes */}
        <div>
          <h3 className="font-bold mb-3 uppercase">Anunciantes</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/imobiliarias" className="hover:underline">
                Imobiliárias
              </a>
            </li>
            <li>
              <a href="/area-anunciante" className="hover:underline">
                Área do Anunciante
              </a>
            </li>
            <li>
              <a href="/como-anunciar" className="hover:underline">
                Como Anunciar
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="font-bold mb-3 uppercase">Redes Sociais</h3>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="#" aria-label="Twitter/X">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Linha divisória */}
      <hr className="border-t border-black/20 mb-4" />

      {/* Copyright */}
      <div className="text-sm text-center">
        Copyright © {new Date().getFullYear()} Aurora Systems Enterprise. Todos
        os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
