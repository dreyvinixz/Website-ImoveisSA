/**
 * COMPONENTE: MainBody
 * LOCALIZAÇÃO: website/src/components/Sections/Home/MainBody/MainBody.tsx
 * TIPO: Componente Principal
 * PAI: Home
 * DESCRIÇÃO: Componente responsável por exibir o corpo principal da seção Home
 */

import React from "react";

const MainBody = () => {
  return (
    <div className="main-body">
      <h1>Bem-vindo à nossa página inicial!</h1>
      <p>Explore nossos serviços e ofertas incríveis.</p>
      <button className="explore-button">Explorar</button>
    </div>
  );
}

export default MainBody;