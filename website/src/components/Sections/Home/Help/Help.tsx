/**
 * COMPONENTE: Help
 * LOCALIZAÇÃO: website/src/components/Sections/Home/Help/Help.tsx
 * TIPO: Componente de UI
 * PAI: Home
 * DESCRIÇÃO: Componente responsável por exibir informações de ajuda na seção
 */

import React from "react";

const Help = () => {
  return (
    <div className="help-section">
      <h2>Como podemos ajudar?</h2>
      <p>Entre em contato conosco para obter suporte.</p>
      <button className="help-button">Fale conosco</button>
    </div>
  );
};

export default Help;