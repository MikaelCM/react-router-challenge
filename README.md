# React Router Challenge

Um pequeno desafio desenvolvido para praticar conceitos essenciais do **React Router**, aprendendo a criar rotas, navegar entre páginas e estruturar layouts em uma SPA.

---

## Sobre o Projeto

Este projeto demonstra:

- Uso básico do **react-router-dom**
- Navegação entre páginas sem recarregamento
- Componente de **Navbar** com links ativos
- Layout fixo com **header** e **main**, enquanto o conteúdo troca conforme a rota

---

## Estrutura do Projeto

react-router-challenge/ <br/>
├── public/ <br/>
└── src/ <br/>
├── components/ ← Componentes reutilizáveis (Navbar etc.) <br/>
├── pages/ ← Páginas (Home, About, End) <br/>
├── App.jsx <br/>
└── main.jsx

---

## Funcionalidades

- Navegação entre páginas usando React Router
- Links que mudam estilo quando estão ativos (`NavLink`)
- Componentização simples e organizada
- Estrutura boa para iniciantes entenderem o fluxo de rotas

---

## Tecnologias Utilizadas

- **React**
- **Vite**
- **react-router-dom**

---

## Como Rodar o Projeto

```bash
# 1. Clonar o repositório
git clone https://github.com/MikaelCM/react-router-challenge.git

# 2. Entrar no diretório
cd react-router-challenge

# 3. Instalar dependências
npm install
# ou

# 4. Rodar o servidor de desenvolvimento
npm run dev
# ou

A aplicação abrirá (ou indicará o endereço), geralmente em:
http://localhost:5173

Melhorias Futuras
Criar página de 404 – Not Found

Criar um layout mais estilizado para o Navbar

Adicionar rotas dinâmicas (ex: /user/:id)

Criar rotas protegidas (authentication guard)

Implementar temas ou design mais profissional
