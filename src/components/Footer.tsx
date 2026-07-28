import React from 'react';
import { ShieldCheck, Lock, CreditCard, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cinza-escuro text-rosa-claro/70 text-xs py-12 px-4 border-t border-lilas/20">
      <div className="max-w-5xl mx-auto space-y-6 text-center">
        {/* Security Seals */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-rosa-claro">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-pink-neon" /> Compra 100% Criptografada
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Lock className="w-4 h-4 text-dourado" /> Privacidade Protegida
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Sparkles className="w-4 h-4 text-pink-neon" /> Entrega Imediata no E-mail
          </div>
        </div>

        {/* Disclaimer / Rights */}
        <div className="space-y-2 text-[11px] text-rosa-claro/50 max-w-3xl mx-auto leading-relaxed">
          <p>
            Este site não faz parte do Facebook ou do Meta Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da Meta, Inc.
          </p>
          <p>
            Todos os direitos reservados © {new Date().getFullYear()} — Lista Completa de Fornecedores Para Loja de R$10.
          </p>
        </div>
      </div>
    </footer>
  );
};
