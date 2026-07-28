import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface TargetAudienceProps {
  onCtaClick?: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cinza-escuro text-white border-b border-lilas/20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-dourado font-bold text-xs uppercase tracking-wider bg-dourado/10 px-3 py-1 rounded-full border border-dourado/30">
            Perfil Recomendado
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ideal para quem quer empreender com segurança
          </h2>
          <p className="text-rosa-claro/90 text-base sm:text-lg">
            A lista foi estruturada sob medida para quem busca independência financeira e quer começar rápido.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Green Card: Ideal para quem quer */}
          <div className="bg-cinza-card border border-pink-neon/50 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-pink-neon text-white font-extrabold text-xs px-4 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
              RECOMENDADO
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-pink-neon flex items-center gap-2">
                <CheckCircle2 className="w-7 h-7 text-pink-neon shrink-0" />
                <span>Ideal para quem quer</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Começar uma loja de R$10 em casa',
                  'Trabalhar pelo celular',
                  'Fazer uma renda extra',
                  'Abrir seu próprio negócio',
                  'Comprar direto da fonte',
                  'Encontrar fornecedores confiáveis',
                  'Vender pelo Instagram',
                  'Vender na Shopee',
                  'Vender pelo Mercado Livre',
                  'Começar mesmo com pouco dinheiro',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 bg-cinza-fundo p-2.5 rounded-xl border border-lilas/20">
                    <span className="text-pink-neon font-extrabold shrink-0 text-base">✅</span>
                    <span className="text-xs sm:text-sm font-semibold text-white leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Red/Neutral Card: Você NÃO precisa */}
          <div className="bg-cinza-card border border-rose-gold/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-rose-gold flex items-center gap-2">
                <XCircle className="w-7 h-7 text-rose-gold shrink-0" />
                <span>Você NÃO precisa</span>
              </h3>

              <div className="space-y-3 pt-2">
                {[
                  'Alugar uma loja',
                  'Comprar caixas fechadas',
                  'Gastar milhares de reais',
                  'Viajar procurando fornecedores',
                  'Comprar sem saber se é confiável',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-cinza-fundo p-3 rounded-xl border border-rose-gold/30">
                    <span className="text-rose-gold font-bold shrink-0 text-base">❌</span>
                    <span className="text-sm font-medium text-rosa-claro">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Reassurance Banner */}
            <div className="bg-gradient-to-r from-[#3D2138] to-cinza-card border border-pink-neon/40 p-4 rounded-2xl text-center space-y-1">
              <p className="text-xs sm:text-sm font-bold text-rosa-claro">
                Você recebe uma lista organizada para economizar tempo e começar pelo caminho certo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
