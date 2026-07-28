import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick?: () => void;
  mockupImg: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ mockupImg }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cinza-escuro via-[#2B1C28] to-cinza-fundo text-white pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-pink-neon/20">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-pink-neon/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Tagline */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-neon/10 border border-pink-neon/30 text-rosa-claro text-xs sm:text-sm font-semibold backdrop-blur-sm shadow-inner">
            <Sparkles className="w-4 h-4 text-dourado" />
            <span>Guia Prático & Lista VIP de Fornecedores Atacadistas</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Copy & Benefits */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Monte Sua Loja de R$10{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-neon via-lilas to-dourado">
                Mesmo Que Você Esteja Começando do Zero
              </span>
            </h1>

            <p className="text-base sm:text-lg text-rosa-claro/90 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Descubra onde comprar produtos direto da fonte, sem pedido mínimo, e comece sua loja em casa com pouco investimento.
            </p>

            {/* Checkmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              {[
                'Fornecedores testados',
                'Entrega para todo o Brasil',
                'Muitos vendem por unidade',
                'Ideal para quem quer começar pequeno',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-cinza-card/90 border border-lilas/20 p-2.5 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-pink-neon shrink-0" />
                  <span className="text-sm font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Container */}
            <div className="pt-4 space-y-3">
              <a
                href="#oferta"
                className="w-full sm:w-auto bg-gradient-to-r from-pink-neon via-[#FF599A] to-dourado hover:opacity-95 text-cinza-escuro font-black text-lg sm:text-xl py-4 px-8 rounded-2xl shadow-lg shadow-pink-neon/25 hover:shadow-pink-neon/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>👉 VER OFERTA ESPECIAL</span>
                <ArrowRight className="w-5 h-5 text-cinza-escuro group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-rosa-claro/80 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-pink-neon" /> Compra 100% Segura
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4 text-dourado" /> Liberado Imediatamente
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-neon via-lilas to-dourado opacity-40 blur-lg" />

              <div className="relative bg-cinza-card border border-lilas/30 rounded-2xl overflow-hidden shadow-2xl p-2 sm:p-3">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img
                    src={mockupImg}
                    alt="Mockup da Lista de Fornecedores Loja de R$10"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cinza-escuro/90 via-transparent to-transparent flex items-end p-4">
                    <div className="bg-cinza-escuro/90 border border-pink-neon/40 rounded-xl p-3 backdrop-blur-md w-full flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-lilas">Material Digital VIP</div>
                        <div className="text-sm font-extrabold text-white">Lista Completa + Contatos Diretos</div>
                      </div>
                      <span className="bg-dourado text-cinza-escuro font-black text-xs px-2.5 py-1 rounded-lg shadow-sm">
                        R$ 19,90
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
