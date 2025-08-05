import React from 'react';
import Image from 'next/image';
import VectorIcon from '../../../Icons/VectorIcon'; // Importando o ícone personalizado

const CallAction: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 pt-2 pb-0 bg-white text-zinc-800">
      
      {/* O container do texto e do botão */}
      <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">
          Find the perfect <br /> home for you
        </h2>
        <p className="text-sm mb-6">
          Você pode encontrar facilmente uma variedade de imóveis que atendem às suas necessidades <br />
          venha e explore as melhores oportunidades do mercado imobiliário.
        </p>
        <a
          href="#main-body"
          className="inline-block bg-black text-white px-6 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition"
        >
          Get Started <VectorIcon className="inline-block ml-2" />
        </a>
      </div>

      {/* O container da imagem */}
      <div className="w-full mt-4 md:mt-0 md:w-1/2 md:pl-14">
        <Image
          src="/images/fig_01.png"
          alt="Imóvel destaque"
          width={600}
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

    </section>
  );
};

export default CallAction;