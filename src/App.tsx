import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ProblemSolution } from './components/ProblemSolution';
import { WhatYouReceive } from './components/WhatYouReceive';
import { ProfitCalculator } from './components/ProfitCalculator';
import { TargetAudience } from './components/TargetAudience';
import { HowItWorks } from './components/HowItWorks';
import { FaqSection } from './components/FaqSection';
import { OfferSection } from './components/OfferSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { CheckoutModal } from './components/CheckoutModal';
import { SocialProofToast } from './components/SocialProofToast';
import { Footer } from './components/Footer';
import { redirectToCheckout } from './utils/redirect';

// Generated Asset Paths
import listaMockup from './assets/images/lista_mockup_1785242350665.jpg';
import organizingImg from './assets/images/organizando_estoque_1785242364956.jpg';
import productsImg from './assets/images/produtos_fornecedor_1785242376495.jpg';
import accessImg from './assets/images/acesso_celular_1785242390373.jpg';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    redirectToCheckout();
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-cinza-escuro font-sans text-slate-100 antialiased selection:bg-pink-neon selection:text-white">
      {/* Hero Section */}
      <HeroSection mockupImg={listaMockup} />

      {/* Problem & Solution (Você não precisa de uma loja física...) */}
      <ProblemSolution organizingImg={organizingImg} />

      {/* O que você recebe & Prints Internos da Lista */}
      <WhatYouReceive />

      {/* Profit Calculator & Cost comparison */}
      <ProfitCalculator productsImg={productsImg} />

      {/* Ideal para quem quer vs Você NÃO precisa */}
      <TargetAudience />

      {/* Como Funciona (Step 1, 2, 3) */}
      <HowItWorks accessImg={accessImg} />

      {/* Perguntas Frequentes Accordion */}
      <FaqSection />

      {/* Main Conversion Offer - The Single Buy Button on the Page */}
      <OfferSection onCtaClick={handleOpenCheckout} />

      {/* Garantia */}
      <GuaranteeSection />

      {/* Footer */}
      <Footer />

      {/* Social Proof Notifications */}
      <SocialProofToast />

      {/* Checkout Simulator Modal */}
      <CheckoutModal isOpen={isCheckoutOpen} onClose={handleCloseCheckout} />
    </div>
  );
}
