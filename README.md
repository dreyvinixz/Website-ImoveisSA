# Website-ImoveisSA
Website-Imoveis

### 🎯 Objetivos Gerais

- Criar um site de hospedagem de imoveis 
- Desenvolver canais de comunicação integrados com os clientes  
- Melhorar a experiência de visitação por meio de ferramentas digitais  
- Estabelecer uma vantagem competitiva frente a outros centros comerciais  

---

### 📝 Sobre este documento

Este repositório contém o **ambiente de desenvolvimento** para visualização geral de como o site deve se apresentar em ambiente de produção.  
Caso as ideias e funcionalidades apresentadas neste protótipo sejam aprovadas, o projeto seguirá para um ambiente real de desenvolvimento, com backend e integrações funcionais.

---

### 🔗 Link do GitHub

[🔗 Acessar repositório no GitHub](https://github.com/Project-AuroraSys/Website-ImoveisSA.git)

---

## 🚀 Instruções para rodar o projeto localmente

### ✅ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente:

- [Node.js](https://nodejs.org/pt) (versão 14 ou superior)  
- [npm](https://docs.npmjs.com/about-npm) ou [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
- [npx](https://www.npmjs.com/package/npx) atualizado  
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) para estilização

---

### 🛠️ Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/Project-AuroraSys/Website-ImoveisSA.git
```

2. Acesse o diretório do projeto:

```bash
cd website
```

3. Instale as dependências:

```bash
npm install
npm install tailwindcss @tailwindcss/postcss postcss

```

3. Verifique as versões:

```bash
node -v
npm -v
npx --version
ou se preferir 
yarn -v
```

4. (Opcional) Configure as variáveis de ambiente, se necessário, com base no `.env.example`.

5. Inicie o projeto localmente:

```bash
npm run dev
```

6. Acesse a aplicação no navegador:  
[http://localhost:3000](http://localhost:3000)

---

## 📦 Principais Dependências

O projeto utiliza as seguintes bibliotecas principais para o desenvolvimento frontend:

- **React** – Biblioteca principal para construção de interfaces  
- **Tailwind CSS** – Framework utilitário para estilização responsiva  
- **React Router DOM** – Gerenciamento de rotas  
- **Lucide React (ícones)** – Ícones modernos para UI  

> Para detalhes completos, consulte o arquivo `package.json`.

## 🗂️ Estrutura de Diretórios do Projeto
Abaixo está uma descrição da organização das pastas e arquivos do projeto para melhor entendimento:
```bash
/website
├── .next/               # Pasta gerada automaticamente pelo Next.js (build)
├── backend/             # (Opcional) Diretório reservado para lógica backend, caso necessário
├── node_modules/        # Módulos e dependências instaladas pelo npm/yarn
├── out/                 # Versão exportada do projeto para deploy estático
│   ├── _next/           # Assets otimizados gerados pelo Next.js
│   ├── images/          # Imagens processadas
│   ├── video/           # Vídeos exportados
│   ├── 404.html         # Página de erro personalizada
│   └── index.html       # Página inicial gerada
├── public/              # Arquivos públicos acessíveis diretamente pelo navegador
│   ├── favicon/         # Ícones do site (favicon, manifest, etc)
│   ├── images/          # Imagens utilizadas na aplicação
│   └── video/           # Vídeos utilizados na aplicação
│   └── svg/             # arquivos svg
├── src/                 # Código-fonte principal da aplicação
│   ├── api/             # Endpoints de API (caso o projeto use API routes do Next.js)
│   ├── components/      # Componentes reutilizáveis da interface
│   ├── pages/           # Páginas da aplicação, roteamento automático pelo Next.js
│   ├── scripts/         # Scripts auxiliares ou utilitários
│   └── styles/          # Arquivos CSS ou configurações do Tailwind
├── tasks/               # Scripts de automação e tarefas do projeto
├── .env                 # Variáveis de ambiente (não versionado no git)
├── .gitignore           # Arquivos/pastas ignorados pelo Git
├── next-env.d.ts        # Tipagens automáticas do Next.js com TypeScript
├── next.config.js       # Configurações do Next.js
├── package.json         # Lista de dependências e scripts do projeto
├── package-lock.json    # Mapa de versões exatas das dependências
├── postcss.config.mjs   # Configurações do PostCSS (usado pelo Tailwind)
└── README.md            # Documentação do projeto
.Readme.md
.Licence
.env.example            # Exemplo de arquivo `.env` para configuração local
```