import React, { useState, useEffect } from 'react';
import { Flame, Clock, ShieldCheck } from 'lucide-react';

export const HeaderBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(894); // ~14 mins

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 900));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-gradient-to-r from-cinza-escuro via-[#3D2938] to-cinza-escuro text-white text-xs sm:text-sm py-2 px-3 sticky top-0 z-40 shadow-md border-b border-pink-neon/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
        <div className="flex items-center gap-2 font-medium">
          <span className="bg-pink-neon text-white px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-sm">
            <Flame className="w-3.5 h-3.5 fill-current text-dourado" /> Oferta Limitada
          </span>
          <span className="hidden md:inline text-rosa-claro font-medium">Desconto especial liberado para novos alunos</span>
          <span className="md:hidden text-rosa-claro font-medium">Desconto de 80% ativo</span>
        </div>

        <div className="flex items-center gap-1.5 bg-cinza-fundo/80 px-2.5 py-1 rounded-md border border-lilas/40 font-mono font-bold text-dourado">
          <Clock className="w-3.5 h-3.5 text-pink-neon animate-pulse" />
          <span>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};
