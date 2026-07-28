import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, Lock, ArrowRight, Star, CreditCard, QrCode } from 'lucide-react';

interface OfferSectionProps {
  onCtaClick: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="oferta" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-cinza-escuro via-cinza-fundo to-cinza-escuro text-white relative border-b border-lilas/20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-pink-neon/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        {/* Main Offer Card */}
        <div className="bg-cinza-card border-2 border-pink-neon/60 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
          {/* Top Banner Tag */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-neon via-[#FF5AA0] to-dourado text-cinza-escuro font-black text-[11px] sm:text-xs uppercase tracking-wider px-4 sm:px-6 py-1.5 rounded-b-2xl shadow-md whitespace-nowrap">
            🔥 OFERTA COM DESCONTO DE 80%
          </div>

          {/* Offer Title */}
          <div className="text-center space-y-3 pt-8 sm:pt-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Lista Completa de Fornecedores Para Loja de R$10
            </h2>
            <p className="text-pink-neon text-sm sm:text-base font-extrabold">
              Acesso VIP aos fornecedores selecionados
            </p>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto bg-cinza-fundo p-5 rounded-2xl border border-lilas/20">
            {[
              'Acesso imediato',
              'Fornecedores testados',
              'Contatos organizados',
              'Sem pedido mínimo (quando disponível)',
              'Compra direto da fonte',
              'Material 100% organizado',
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-pink-neon shrink-0" />
                <span className="text-sm font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>

          {/* Pricing Display */}
          <div className="text-center space-y-2 bg-gradient-to-br from-cinza-fundo via-[#3D1F32] to-cinza-fundo p-6 rounded-2xl border border-pink-neon/40 max-w-lg mx-auto shadow-inner">
            <span className="text-sm font-medium text-rosa-claro/70 line-through block">
              De R$ 97,00
            </span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-xs sm:text-sm font-bold text-dourado">Por apenas</span>
              <span className="text-4xl sm:text-5xl font-black text-pink-neon font-mono tracking-tight">
                R$ 19,90
              </span>
            </div>
            <p className="text-xs text-rosa-claro font-medium pt-1">
              Pagamento único • Sem mensalidades • Acesso Imediato
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-4 text-center max-w-lg mx-auto">
            <button
              onClick={onCtaClick}
              className="w-full bg-gradient-to-r from-pink-neon via-[#FF5AA0] to-dourado hover:opacity-95 text-cinza-escuro font-black text-lg sm:text-xl py-5 px-8 rounded-2xl shadow-xl shadow-pink-neon/25 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3 group"
            >
              <span>👉 LIBERAR MEU ACESSO AGORA</span>
              <ArrowRight className="w-6 h-6 text-cinza-escuro group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Payment Method Icons */}
            <div className="flex items-center justify-center gap-4 text-xs text-rosa-claro/80 pt-1">
              <span className="flex items-center gap-1 font-extrabold text-pink-neon">
                <QrCode className="w-4 h-4" /> PIX
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-semibold text-rosa-claro">
                <CreditCard className="w-4 h-4" /> Cartão em até 2x
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
