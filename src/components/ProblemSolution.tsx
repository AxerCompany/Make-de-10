import React from 'react';
import { Smartphone, Store, AlertTriangle, CheckCircle2, ShoppingBag } from 'lucide-react';

interface ProblemSolutionProps {
  organizingImg: string;
}

export const ProblemSolution: React.FC<ProblemSolutionProps> = ({ organizingImg }) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cinza-fundo text-white border-b border-lilas/20">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Main Headline */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-dourado font-bold text-xs sm:text-sm uppercase tracking-wider bg-dourado/10 px-3 py-1 rounded-full border border-dourado/30">
            A Oportunidade do Momento
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Você não precisa de uma loja física.
          </h2>
          <p className="text-base sm:text-lg text-rosa-claro/90 leading-relaxed">
            Hoje milhares de pessoas estão começando a vender maquiagem, cosméticos e utilidades diretamente de casa.
          </p>
        </div>

        {/* Platforms Badges Bar */}
        <div className="bg-cinza-card border border-lilas/20 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <p className="text-center text-xs font-bold text-lilas uppercase tracking-wider mb-4">
            Usando apenas o celular e as redes sociais:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: 'Instagram', icon: '📸', color: 'from-pink-neon/20 to-lilas/20 text-rosa-claro border-pink-neon/30' },
              { name: 'WhatsApp', icon: '💬', color: 'from-lilas/20 to-rosa-claro/20 text-lilas border-lilas/30' },
              { name: 'Shopee', icon: '🛍️', color: 'from-rose-gold/20 to-dourado/20 text-dourado border-dourado/30' },
              { name: 'Mercado Livre', icon: '📦', color: 'from-dourado/20 to-pink-neon/20 text-dourado border-dourado/30' },
            ].map((platform, i) => (
              <div
                key={i}
                className={`flex items-center justify-center gap-2.5 p-3 rounded-xl bg-gradient-to-br ${platform.color} border font-extrabold text-sm sm:text-base shadow-sm hover:scale-105 transition-transform`}
              >
                <span className="text-xl">{platform.icon}</span>
                <span>{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-lilas/30 shadow-2xl group">
              <img
                src={organizingImg}
                alt="Alguém organizando produtos de R$10 em casa"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinza-escuro via-cinza-escuro/20 to-transparent flex items-end p-5">
                <p className="text-xs font-bold text-rosa-claro bg-cinza-escuro/90 border border-pink-neon/40 p-2.5 rounded-xl backdrop-blur-md">
                  📍 Estoque próprio em casa: sem pagar aluguel de loja comercial!
                </p>
              </div>
            </div>
          </div>

          {/* Copy Box */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#3D2328]/60 border border-rose-gold/50 p-5 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-rose-gold font-bold text-sm">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>O Grande Obstáculo dos Iniciantes:</span>
              </div>
              <p className="text-rosa-claro/90 text-sm sm:text-base leading-relaxed">
                O problema é que a maioria compra nos lugares errados (intermediários e revendedores caros) e praticamente trabalha sem lucro, perdendo margem e tempo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#382036] to-cinza-card border border-pink-neon/50 p-6 rounded-2xl space-y-3 shadow-xl">
              <div className="flex items-center gap-2.5 text-pink-neon font-extrabold text-lg">
                <CheckCircle2 className="w-6 h-6 text-pink-neon shrink-0" />
                <span>É justamente isso que essa lista resolve!</span>
              </div>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                Você pula os intermediários e conversa direto com os grandes distribuidores atacadistas do Brasil. Assim, sobra margem real para você lucrar e crescer rápido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
