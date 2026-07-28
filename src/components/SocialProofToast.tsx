import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle2, X } from 'lucide-react';

const RECENT_BUYERS = [
  { name: 'Juliana S.', city: 'São Paulo - SP', time: 'há 2 minutos' },
  { name: 'Mariana C.', city: 'Belo Horizonte - MG', time: 'há 4 minutos' },
  { name: 'Carla B.', city: 'Curitiba - PR', time: 'há 1 minuto' },
  { name: 'Fernanda R.', city: 'Goiânia - GO', time: 'há 6 minutos' },
  { name: 'Patricia M.', city: 'Fortaleza - CE', time: 'há 3 minutos' },
  { name: 'Vanessa P.', city: 'Campinas - SP', time: 'há 5 minutos' },
];

export const SocialProofToast: React.FC = () => {
  const [buyerIndex, setBuyerIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (disabled) return;

    const showInterval = setInterval(() => {
      setVisible(true);
      setBuyerIndex((prev) => (prev + 1) % RECENT_BUYERS.length);

      setTimeout(() => {
        setVisible(false);
      }, 4500);
    }, 12000);

    // Initial show after 3s
    const initialTimer = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 4500);
    }, 3000);

    return () => {
      clearInterval(showInterval);
      clearTimeout(initialTimer);
    };
  }, [disabled]);

  if (!visible || disabled) return null;

  const currentBuyer = RECENT_BUYERS[buyerIndex];

  return (
    <div className="fixed bottom-20 left-4 z-40 bg-cinza-card/95 border border-pink-neon/50 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md text-white max-w-xs animate-slideIn flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-pink-neon/20 border border-pink-neon text-pink-neon flex items-center justify-center shrink-0">
        <ShoppingBag className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0 text-xs">
        <div className="flex items-center gap-1 font-bold text-white">
          <span>{currentBuyer.name}</span>
          <CheckCircle2 className="w-3.5 h-3.5 text-pink-neon" />
        </div>
        <p className="text-rosa-claro text-[11px] truncate">Adquiriu a Lista de Fornecedores</p>
        <div className="text-[10px] text-dourado font-semibold">{currentBuyer.city} • {currentBuyer.time}</div>
      </div>

      <button
        onClick={() => setDisabled(true)}
        className="text-rosa-claro/60 hover:text-white p-1 rounded-full cursor-pointer"
        title="Fechar avisos"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
