import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

interface StickyMobileBarProps {
  onCtaClick: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onCtaClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-cinza-card/95 border-t border-pink-neon/40 p-3 backdrop-blur-md sm:hidden shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div>
          <span className="text-[10px] text-rosa-claro/60 line-through block font-medium">De R$ 97,00</span>
          <div className="text-lg font-black text-pink-neon font-mono leading-none">
            R$ 19,90
          </div>
          <span className="text-[9px] text-dourado font-bold block mt-0.5">Acesso Imediato</span>
        </div>

        <button
          onClick={onCtaClick}
          className="flex-1 bg-gradient-to-r from-pink-neon via-[#FF5AA0] to-dourado hover:opacity-95 text-cinza-escuro font-black text-xs py-3 px-4 rounded-xl shadow-lg flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-transform"
        >
          <span>👉 QUERO ACESSAR A LISTA</span>
          <ArrowRight className="w-4 h-4 shrink-0 text-cinza-escuro" />
        </button>
      </div>
    </div>
  );
};
