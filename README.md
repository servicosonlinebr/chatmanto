# 🇧🇷 Camisa Brasil Premium — Landing Page

Landing page premium, futurista e altamente conversora para venda de camisas da Seleção Brasileira.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Funcionalidades

- ✅ Barra de urgência com countdown regressivo
- ✅ Hero section cinematográfica com imagem premium
- ✅ Cards de benefícios com microanimações
- ✅ Seção "Sobre a Camisa" (storytelling emocional)
- ✅ Catálogo profissional com lightbox (9 imagens)
- ✅ Card de medidas com ilustração de casal SVG
- ✅ Calculadora de tamanho inteligente
- ✅ Ofertas: Kit Casal R$119,99 + Unidade R$74,99
- ✅ Seção de frete e entrega flash
- ✅ CTA final com urgência máxima
- ✅ Modal de checkout com formulário premium
- ✅ Auto-preenchimento via API ViaCEP
- ✅ Formatação automática de CPF, telefone e CEP
- ✅ Áudio "Gol do Brasil" ao clicar em comprar (Web Speech API)
- ✅ Redirecionamento para checkout externo após formulário
- ✅ Mobile-first 100%
- ✅ SEO + Open Graph configurados

## Instalação

```bash
# Clone o repositório
git clone <seu-repo>
cd camisa-brasil

# Instale as dependências
npm install

# Rode em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Deploy no Vercel

1. Suba o projeto para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Deploy automático ✅

## Links de Pagamento

Os links de pagamento estão centralizados em `components/CheckoutModal.tsx`:

```typescript
const PAYMENT_LINKS = {
  kit: "https://pay.lowify.com.br/checkout?product_id=Fsuvdd",   // R$ 119,99
  unit: "https://pay.lowify.com.br/checkout?product_id=txbM2s",  // R$ 74,99
};
```

Para alterar, basta modificar esses valores.

## Estrutura de Arquivos

```
camisa-brasil/
├── app/
│   ├── layout.tsx       # Layout raiz + SEO + meta tags
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globais + utilitários
├── components/
│   ├── UrgencyBar.tsx   # Barra de urgência + countdown
│   ├── HeroSection.tsx  # Hero cinematográfico
│   ├── BenefitsSection.tsx  # 9 cards de benefícios
│   ├── AboutSection.tsx # Seção sobre a camisa
│   ├── CatalogSection.tsx   # Galeria com lightbox
│   ├── SizeCard.tsx     # Guia de medidas + casal SVG
│   ├── SizeCalculator.tsx   # Calculadora de tamanho IA
│   ├── OffersSection.tsx    # Kit Casal + Unidade
│   ├── ShippingSection.tsx  # Entrega e frete
│   ├── FinalCTA.tsx     # CTA final de fechamento
│   └── CheckoutModal.tsx    # Modal de entrega + form
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## Personalização

- **Paleta de cores**: `tailwind.config.ts` → `theme.extend.colors.brand`
- **Imagens**: Substitua as URLs ibb.co pelas suas imagens
- **Preços**: Edite em `OffersSection.tsx` e `CheckoutModal.tsx`
- **Links de pagamento**: `CheckoutModal.tsx` → `PAYMENT_LINKS`
- **Countdown**: `UrgencyBar.tsx` → `useCountdown(horas)`
