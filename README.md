# 2ehprimo

Loja virtual de Action Figures desenvolvida com React, TypeScript, Tailwind CSS e React Three Fiber, permitindo a visualização de modelos 3D diretamente no navegador.

## 📋 Sobre o Projeto

O 2ehprimo é um projeto de catálogo de colecionáveis e action figures que oferece uma experiência interativa para os usuários através da visualização 3D dos produtos.

O objetivo do projeto é simular uma loja moderna onde o cliente pode:

- Navegar pelo catálogo de produtos
- Visualizar modelos 3D diretamente na página inicial
- Acessar uma página exclusiva para cada produto
- Interagir com os modelos utilizando rotação, zoom e movimentação da câmera
- Obter informações detalhadas sobre cada item

---

## 🚀 Tecnologias Utilizadas

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM

### Renderização 3D

- Three.js
- React Three Fiber
- React Three Drei

---



## 🎮 Funcionalidades

### Catálogo de Produtos

- Exibição dos produtos em formato de cards
- Visualização 3D em miniatura
- Animação automática dos modelos

### Página do Produto

- Modelo 3D ampliado
- Rotação automática
- Controle manual da câmera
- Informações detalhadas do produto

### Visualização 3D

- Iluminação ambiente
- Sombras dinâmicas
- Ambiente HDRI
- Controles OrbitControls
- Suporte a arquivos `.glb`

---

## 🖼️ Modelos 3D

Os modelos são armazenados na pasta:

```bash
public/models/
```

Exemplo:

```bash
public/models/naruto.glb
public/models/goku.glb
```

Para adicionar novos produtos:

1. Adicione o arquivo `.glb` em `public/models`
2. Cadastre o produto em `src/data/products.ts`

Exemplo:

```ts
{
  id: 5,
  name: "Sasuke",
  model: "/models/sasuke.glb",
  description: "Action Figure do Sasuke Uchiha"
}
```

---

## ⚙️ Instalação

### Clonar o projeto

```bash
git clone https://github.com/seu-usuario/2ehprimo.git
```

### Entrar na pasta

```bash
cd 2ehprimo
```

### Instalar dependências

```bash
npm install
```

### Executar em ambiente de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em:

```bash
http://localhost:5173
```

---

## 👨‍💻 Autor

Desenvolvido por **Wictor Lopes**.

Projeto criado para estudo de React, TypeScript, Tailwind CSS e visualização 3D utilizando Three.js.