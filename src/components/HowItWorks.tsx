import React from 'react';
import { ArrowDown, CheckCircle, Smartphone, ShoppingCart, Users, Sparkles, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  accessImg: string;
  onCtaClick?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ accessImg }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cinza-fundo text-white border-b border-lilas/20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center space-y-3">
          <span className="text-rosa-claro font-bold text-xs uppercase tracking-wider bg-pink-neon/10 px-3 py-1 rounded-full border border-pink-neon/30">
            Passo a Passo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Como funciona
          </h2>
          <p className="text-rosa-claro/90 text-base">
            Sem complicações nem burocracia. O processo é 100% digital e automático.
          </p>
        </div>

        {/* Grid: Image + 3 Steps Vertical Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Access Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-lilas/30 shadow-2xl group">
              <img
                src={accessImg}
                alt="Acesso imediato no celular"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinza-escuro via-cinza-escuro/20 to-transparent flex items-end p-4">
                <div className="bg-cinza-card/90 border border-pink-neon/40 p-3 rounded-xl backdrop-blur-md w-full flex items-center gap-3">
                  <Smartphone className="w-8 h-8 text-pink-neon shrink-0" />
                  <div>
                    <span className="text-xs font-extrabold text-white block">Acesso no Celular e Computador</span>
                    <span className="text-[11px] text-rosa-claro/80">Acesse de onde estiver, a qualquer hora</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Step Flow */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            {/* Step 1 */}
            <div className="bg-cinza-card border border-lilas/20 p-5 rounded-2xl space-y-2 relative hover:border-pink-neon/40 transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-dourado text-cinza-escuro font-black text-lg flex items-center justify-center shrink-0">
                  1
                </span>
                <h3 className="text-lg font-bold text-white">Finalize sua compra.</h3>
              </div>
              <p className="text-rosa-claro/80 text-xs sm:text-sm pl-13">
                Preencha seus dados de forma 100% segura e escolha a melhor forma de pagamento (PIX ou cartão).
              </p>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center text-pink-neon py-1">
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>

            {/* Step 2 */}
            <div className="bg-cinza-card border border-lilas/20 p-5 rounded-2xl space-y-2 relative hover:border-pink-neon/40 transition-colors">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-pink-neon text-white font-black text-lg flex items-center justify-center shrink-0 shadow-sm">
                  2
                </span>
                <h3 className="text-lg font-bold text-white">Receba acesso imediato.</h3>
              </div>
              <p className="text-rosa-claro/80 text-xs sm:text-sm pl-13">
                O link do seu material chega direto no seu e-mail e no WhatsApp imediatamente após a confirmação.
              </p>
            </div>

            {/* Down Arrow */}
            <div className="flex justify-center text-dourado py-1">
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-r from-[#3D1E32] to-cinza-card border border-pink-neon/60 p-5 rounded-2xl space-y-2 relative shadow-lg">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-lilas text-cinza-escuro font-black text-lg flex items-center justify-center shrink-0">
                  3
                </span>
                <h3 className="text-lg font-extrabold text-pink-neon">
                  Escolha seus fornecedores e comece sua loja.
                </h3>
              </div>
              <p className="text-rosa-claro text-xs sm:text-sm pl-13">
                Entre em contato direto via WhatsApp, escolha os produtos que deseja e faça seus primeiros pedidos!
              </p>
            </div>

            {/* "Simples." conclusion pill */}
            <div className="text-center pt-2">
              <span className="inline-block bg-cinza-card text-dourado font-black text-lg px-6 py-2 rounded-full border border-pink-neon/30 shadow-inner">
                Simples. ✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
