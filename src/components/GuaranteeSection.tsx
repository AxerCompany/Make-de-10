import React from 'react';
import { ShieldCheck, Lock, RefreshCw, Award } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-cinza-escuro text-white border-b border-lilas/20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-cinza-card border border-pink-neon/50 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-xl">
          {/* Guarantee Badge Visual */}
          <div className="shrink-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#3D1E32] to-cinza-fundo border-2 border-pink-neon/60 w-28 h-28 sm:w-32 sm:h-32 rounded-full text-center p-3 shadow-lg">
            <ShieldCheck className="w-10 h-10 text-pink-neon mb-1" />
            <span className="text-[10px] font-black text-dourado uppercase tracking-widest leading-none">
              Risco Zero
            </span>
            <span className="text-xs font-bold text-white">GARANTIA</span>
          </div>

          {/* Copy */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-2xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-2">
              <Award className="w-6 h-6 text-dourado" />
              <span>Garantia de Satisfação</span>
            </h3>
            <p className="text-rosa-claro/90 text-sm sm:text-base leading-relaxed">
              Você pode testar o material com tranquilidade. Se ele não for como apresentado nesta página, basta solicitar o reembolso dentro do prazo de garantia da plataforma.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-pink-neon pt-1">
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3.5 h-3.5 text-pink-neon" /> Reembolso Rápido e Sem Burocracia
              </span>
              <span className="flex items-center gap-1 text-rosa-claro/80">
                <Lock className="w-3.5 h-3.5 text-dourado" /> Plataforma de Pagamento 100% Protegida
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
