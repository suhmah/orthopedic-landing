# 🦴 Orthopedic Landing Page

Aplicação web responsiva desenvolvida com **React + Vite** para apresentação de produtos ortopédicos, com foco em usabilidade, desempenho e escalabilidade.

---

## 🚀 Funcionalidades

- ✅ Listagem de produtos com destaque para lançamentos
- ✅ Filtro lateral com categorias personalizáveis
- ✅ Página de **detalhes do produto** com:
  - Carrossel de imagens
  - Informações técnicas (nível, tamanhos, modelo)
  - Link para folder em PDF
  - Vídeo promocional integrado (YouTube embed)
- ✅ Componente de **breadcrumb dinâmico**
- ✅ Componente de **busca expansível**
- ✅ Seção de produtos relacionados
- ✅ Design adaptado para dispositivos móveis (`< 800px`)
- ✅ Componentização baseada em **Atomic Design**

---

## 🧱 Arquitetura

- **Modular por feature (Domain-Driven Design)**
- **Atomic Design** para camada de UI
- **Redux Toolkit** para gerenciamento de estado
- Estrutura separada em:
  - `features/orthopedic/` — lógica por domínio
  - `shared/ui/` — componentes reutilizáveis (Text, Button, Tag, Row, Margin, etc.)

---

## 🧰 Tecnologias

| Tecnologia       | Finalidade                                   |
|------------------|----------------------------------------------|
| **React + Vite** | Front-end rápido e moderno                   |
| **Styled Components** | Estilização com escopo local e temas        |
| **TypeScript**   | Tipagem estática e segurança de código       |
| **Redux Toolkit**| Gerenciamento global de estado               |
| **React Router** | Controle de rotas e navegação                |
| **React Icons**  | Ícones modernos e acessíveis                 |
| **Vercel**       | Hospedagem da aplicação                      |

---

## 📱 Responsividade

Toda a interface foi adaptada para **mobile-first**, com:
- Comportamento de colunas empilhadas abaixo de 800px
- Imagens fluidas com `aspect-ratio`
- Menu adaptável e componentes reativos
- Carrosséis horizontais com navegação por seta

---

## 📂 Estrutura de pastas (resumida)

src/
├── features/
│   └── orthopedic/
│       ├── presentation/       # Componentes visuais (screens, componentes, estilos)
│       ├── application/        # Casos de uso e lógica de negócio
│       ├── store/              # Slice e integração com Redux
│       └── shared/             # Tipagens, mocks, entidades
├── shared/
│   └── ui/
│       ├── atoms/              # Botões, textos, espaçamentos, tags, ícones
│       ├── molecules/          # Breadcrumb, busca, carrossel etc.
├── app/
│   └── store.ts                # Configuração do Redux
└── main.tsx                    # Ponto de entrada da aplicação
## 🟢 Como rodar localmente

```bash
# Instale as dependências
yarn install

# Rode a aplicação localmente
yarn dev
```

> 💡 Requisitos:
> - Node.js **versão 18 ou superior**
> - Yarn instalado globalmente (`npm install -g yarn`)
