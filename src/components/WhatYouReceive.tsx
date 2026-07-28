import React, { useState } from 'react';
import { CheckCircle2, PhoneCall, Globe, MapPin, Sparkles, Lock, Star, ExternalLink, ArrowRight } from 'lucide-react';
import { SUPPLIER_SAMPLES } from '../data/suppliers';

interface WhatYouReceiveProps {
  onCtaClick?: () => void;
}

export const WhatYouReceive: React.FC<WhatYouReceiveProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const filteredSuppliers = selectedCategory === 'todos'
    ? SUPPLIER_SAMPLES
    : SUPPLIER_SAMPLES.filter(s => s.category === selectedCategory);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cinza-escuro text-white relative overflow-hidden border-b border-lilas/20">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-neon/10 border border-pink-neon/30 text-rosa-claro text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-dourado" /> Conteúdo 100% Organizado
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            O que você recebe
          </h2>
          <p className="text-base sm:text-lg text-rosa-claro/90">
            Ao comprar hoje você recebe acesso imediato a uma lista organizada com fornecedores que vendem produtos para lojas de R$10.
          </p>
        </div>

        {/* Deliverables Checklist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { text: 'Fornecedores de maquiagem', category: '💄 Maquiagem' },
            { text: 'Cosméticos', category: '✨ Cosméticos' },
            { text: 'Utilidades', category: '🏠 Utilidades' },
            { text: 'Acessórios', category: '💍 Acessórios' },
            { text: 'Contatos atualizados', category: '📞 Contatos' },
            { text: 'WhatsApp quando disponível', category: '💬 WhatsApp Direct' },
            { text: 'Sites oficiais', category: '🌐 Links Diretos' },
            { text: 'Endereços', category: '📍 Localização' },
            { text: 'Muitos sem pedido mínimo', category: '📦 Fracionado' },
            { text: 'Atualizações do material', category: '🔄 Acesso Contínuo' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-cinza-card border border-lilas/20 hover:border-pink-neon/50 p-4 rounded-xl flex flex-col justify-between space-y-2 transition-all hover:-translate-y-1 group shadow-md"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-pink-neon shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-bold text-dourado">{item.category}</span>
              </div>
              <p className="text-sm font-semibold text-white">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Section: Prints Internos da Lista */}
        <div className="pt-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-dourado font-extrabold text-sm bg-dourado/10 px-4 py-1.5 rounded-full border border-dourado/30">
              📍 Prints Internos & Prévia do Material
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Veja como a lista é organizada por dentro
            </h3>
            <p className="text-rosa-claro/80 text-sm max-w-xl mx-auto">
              Mais de 50 fornecedores confiáveis, muitos sem pedido mínimo, para você começar sua loja de R$10 com pouco investimento.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'todos', label: 'Todos os Fornecedores' },
              { id: 'maquiagem', label: '💄 Maquiagem' },
              { id: 'cosmeticos', label: '✨ Cosméticos' },
              { id: 'utilidades', label: '🏠 Utilidades' },
              { id: 'acessorios', label: '💍 Acessórios' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-gradient-to-r from-pink-neon to-dourado text-cinza-escuro shadow-lg shadow-pink-neon/20 scale-105'
                    : 'bg-cinza-card text-rosa-claro border border-lilas/20 hover:bg-[#3B2B3E]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Interactive Cards Container (Prints Preview) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {filteredSuppliers.map((supplier) => (
              <div
                key={supplier.id}
                className="bg-cinza-card border border-lilas/30 rounded-2xl p-5 space-y-4 hover:border-pink-neon/50 transition-all shadow-xl relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 border-b border-lilas/20 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-pink-neon/20 text-rosa-claro border border-pink-neon/30">
                        {supplier.category}
                      </span>
                      <div className="flex items-center gap-1 text-dourado text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>{supplier.rating}</span>
                      </div>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mt-1">{supplier.name}</h4>
                  </div>
                  <span className="bg-[#3D1E31] text-pink-neon border border-pink-neon/40 text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0">
                    Testado & Verificado
                  </span>
                </div>

                {/* Details */}
                <div className="space-y-2 text-xs sm:text-sm text-rosa-claro">
                  <div className="flex items-center gap-2 text-rosa-claro/80">
                    <MapPin className="w-4 h-4 text-pink-neon shrink-0" />
                    <span>{supplier.location}</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium text-dourado">
                    <span className="bg-dourado/10 border border-dourado/20 px-2 py-0.5 rounded text-xs font-bold">
                      {supplier.minOrder}
                    </span>
                  </div>
                  <div className="text-xs text-rosa-claro/70">
                    🚚 {supplier.shipping}
                  </div>
                </div>

                {/* Sample Products */}
                <div className="bg-cinza-fundo/90 p-3 rounded-xl border border-lilas/20 space-y-1.5">
                  <span className="text-[11px] font-bold text-lilas uppercase tracking-wider block">
                    Exemplos de Preços de Custo no Catálogo:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {supplier.sampleProducts.map((p, idx) => (
                      <span key={idx} className="bg-[#3A223B] text-rosa-claro border border-pink-neon/30 text-xs px-2 py-0.5 rounded font-mono font-semibold">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Lock Simulation */}
                <div className="pt-2 flex items-center justify-between border-t border-lilas/20">
                  <div className="flex items-center gap-2 text-xs text-rosa-claro/60">
                    <PhoneCall className="w-4 h-4 text-pink-neon" />
                    <span className="font-mono blur-[2px] select-none text-rosa-claro/40">(11) 9982*-****</span>
                  </div>

                  <a
                    href="#oferta"
                    className="flex items-center gap-1.5 bg-pink-neon hover:bg-[#FF2E82] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-transform active:scale-95 cursor-pointer shadow-sm"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Desbloquear Contato Direto</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
