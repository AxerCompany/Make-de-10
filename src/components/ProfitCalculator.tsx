import React, { useState } from 'react';
import { DollarSign, TrendingUp, Calculator, ArrowUpRight, ArrowRight, ShieldAlert } from 'lucide-react';
import { PRODUCT_MARGINS } from '../data/products';

interface ProfitCalculatorProps {
  productsImg: string;
  onCtaClick?: () => void;
}

export const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ productsImg }) => {
  const [itemsPerDay, setItemsPerDay] = useState<number>(10);

  const avgCost = 2.45; // average wholesale cost
  const sellPrice = 10.00;
  const profitPerItem = sellPrice - avgCost; // R$ 7.55
  const itemsPerMonth = itemsPerDay * 30;

  const monthlyRevenue = itemsPerMonth * sellPrice;
  const monthlyCost = itemsPerMonth * avgCost;
  const monthlyProfit = monthlyRevenue - monthlyCost;
  const profitPercentage = ((profitPerItem / avgCost) * 100).toFixed(0);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cinza-fundo text-white border-b border-lilas/20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-rosa-claro font-bold text-xs sm:text-sm uppercase tracking-wider bg-pink-neon/10 px-3 py-1 rounded-full border border-pink-neon/30">
            Lucratividade Máxima
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Quanto mais barato você compra...
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-neon via-lilas to-dourado">
            Maior pode ser sua margem de lucro.
          </p>
          <p className="text-rosa-claro/90 text-base sm:text-lg max-w-2xl mx-auto pt-2">
            Imagine comprar produtos como: <span className="text-dourado font-bold">Base</span>, <span className="text-dourado font-bold">Gloss</span>, <span className="text-dourado font-bold">Máscaras de cílios</span>, <span className="text-dourado font-bold">Sabonetes</span>, <span className="text-dourado font-bold">Pincéis</span> e <span className="text-dourado font-bold">Cosméticos</span>. Tudo direto da fonte.
          </p>
        </div>

        {/* Product Grid showcase with cost vs sell price */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Product Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-lilas/30 shadow-2xl">
              <img
                src={productsImg}
                alt="Produtos de R$10 com valores de custo direto da fonte"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cinza-escuro via-cinza-escuro/30 to-transparent flex items-end p-5">
                <div className="bg-cinza-card/90 border border-pink-neon/40 rounded-xl p-3 backdrop-blur-md w-full">
                  <div className="flex items-center justify-between text-xs font-bold text-rosa-claro mb-1">
                    <span>Custo Médio na Lista</span>
                    <span className="bg-dourado text-cinza-escuro px-2 py-0.5 rounded font-mono font-bold">R$ 1,90 a R$ 3,10</span>
                  </div>
                  <div className="text-xs text-rosa-claro/80">
                    Preço fixo de venda na sua loja: <strong className="text-white font-bold">R$ 10,00 cada</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Individual Product Profit Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PRODUCT_MARGINS.map((prod) => {
              const profit = prod.salePrice - prod.costPrice;
              const marginPercent = Math.round((profit / prod.costPrice) * 100);
              return (
                <div
                  key={prod.id}
                  className="bg-cinza-card border border-lilas/20 p-3.5 rounded-xl flex items-center gap-3.5 hover:border-pink-neon/50 transition-colors shadow-sm"
                >
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-14 h-14 object-cover rounded-lg shrink-0 border border-lilas/20"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-white truncate">{prod.name}</h4>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <span className="text-rosa-claro/70">Custo: <strong className="text-rose-gold font-mono font-bold">R$ {prod.costPrice.toFixed(2)}</strong></span>
                      <span className="text-lilas">➔</span>
                      <span className="text-rosa-claro/70">Venda: <strong className="text-pink-neon font-mono font-bold">R$ 10,00</strong></span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-[11px] text-dourado font-bold bg-dourado/10 px-1.5 py-0.5 rounded">
                        Lucro: R$ {profit.toFixed(2)}
                      </span>
                      <span className="text-[10px] font-extrabold text-pink-neon">
                        +{marginPercent}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Profit Simulator Box */}
        <div className="bg-gradient-to-br from-cinza-card via-[#321F33] to-cinza-fundo border border-pink-neon/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-lilas/20 pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-dourado font-extrabold text-sm">
                <Calculator className="w-5 h-5 text-pink-neon" />
                <span>Simulador de Vendas Diárias</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Simule Quanto Você Pode Lucrar por Mês
              </h3>
            </div>
            <span className="bg-pink-neon text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              Cálculo em Tempo Real
            </span>
          </div>

          {/* Slider Control */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-rosa-claro">
                Quantos produtos de R$ 10,00 você quer vender por dia?
              </label>
              <span className="text-2xl font-extrabold text-dourado font-mono bg-cinza-fundo border border-lilas/30 px-3 py-1 rounded-xl">
                {itemsPerDay} <span className="text-xs text-rosa-claro/60 font-normal">peças/dia</span>
              </span>
            </div>

            <input
              type="range"
              min={2}
              max={50}
              step={1}
              value={itemsPerDay}
              onChange={(e) => setItemsPerDay(Number(e.target.value))}
              className="w-full h-3 bg-cinza-fundo rounded-lg appearance-none cursor-pointer accent-pink-neon"
            />

            <div className="flex justify-between text-xs text-rosa-claro/70 font-mono">
              <span>2 peças (Iniciante)</span>
              <span>15 peças (Renda Extra)</span>
              <span>30 peças (Loja Ativa)</span>
              <span>50 peças (Loja de Sucesso)</span>
            </div>
          </div>

          {/* Result Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-cinza-fundo/90 border border-lilas/20 p-4 rounded-2xl text-center">
              <span className="text-xs text-rosa-claro/70 block mb-1">Vendas Totais no Mês (30 dias)</span>
              <span className="text-xl sm:text-2xl font-bold text-white font-mono">{itemsPerMonth} produtos</span>
              <span className="text-[11px] text-rosa-claro/60 block mt-1">Faturamento: R$ {monthlyRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
            </div>

            <div className="bg-cinza-fundo/90 border border-lilas/20 p-4 rounded-2xl text-center">
              <span className="text-xs text-rosa-claro/70 block mb-1">Custo Total de Compra Atacado</span>
              <span className="text-xl sm:text-2xl font-bold text-rose-gold font-mono">R$ {monthlyCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
              <span className="text-[11px] text-rosa-claro/60 block mt-1">Investimento nos fornecedores</span>
            </div>

            <div className="bg-gradient-to-br from-[#3D1E32] to-cinza-card border border-pink-neon/60 p-4 rounded-2xl text-center shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-dourado text-cinza-escuro text-[10px] font-black px-2 py-0.5 rounded-bl">
                +{profitPercentage}% Margem
              </div>
              <span className="text-xs text-rosa-claro font-bold block mb-1">Lucro Líquido no Seu Bolso</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-pink-neon font-mono">
                R$ {monthlyProfit.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
              <span className="text-[11px] text-rosa-claro block mt-1 font-semibold">Livre de custos de mercadoria!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
