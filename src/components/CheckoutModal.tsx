import React, { useState } from 'react';
import { X, QrCode, CreditCard, ShieldCheck, CheckCircle2, Lock, Sparkles, Copy, ArrowRight, Clock } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [copiedPix, setCopiedPix] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isOpen) return null;

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setIsCompleted(true);
  };

  const pixCode = "00020126580014BR.GOV.BCB.PIX0136fornecedoresloja10@pagamentos.com.br520400005303986540519.905802BR5925LISTA FORNECEDORES R$106009SAO PAULO62070503***6304E8A2";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cinza-escuro/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-cinza-card border border-pink-neon/50 rounded-3xl shadow-2xl overflow-hidden text-white my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#3D1E32] via-cinza-card to-[#3D1E32] p-5 border-b border-lilas/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-pink-neon" />
            <div>
              <h3 className="text-base font-bold text-white">Ambiente Seguro de Checkout</h3>
              <p className="text-xs text-rosa-claro">Acesso imediato enviado para o seu e-mail</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-rosa-claro/80 hover:text-white bg-cinza-fundo p-2 rounded-full cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Container */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isCompleted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-pink-neon/20 text-pink-neon border border-pink-neon rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-white">Acesso Liberado com Sucesso!</h4>
              <p className="text-rosa-claro text-sm max-w-sm mx-auto">
                Parabéns, <strong className="text-dourado">{name}</strong>! Enviamos os links de acesso da <strong className="text-pink-neon">Lista Completa de Fornecedores Para Loja de R$10</strong> para o e-mail:
              </p>
              <div className="bg-cinza-fundo p-3 rounded-xl border border-pink-neon/40 text-pink-neon font-mono text-sm inline-block font-bold">
                {email}
              </div>
              <p className="text-xs text-rosa-claro/70 pt-2">
                Verifique sua caixa de entrada e spam. Seu material também está pronto para download instantâneo!
              </p>
              <button
                onClick={() => {
                  alert('Download da Lista em PDF/Planilha iniciado com sucesso!');
                  onClose();
                }}
                className="w-full bg-gradient-to-r from-pink-neon to-dourado hover:opacity-95 text-cinza-escuro font-black py-3.5 px-6 rounded-2xl transition-transform hover:scale-105 cursor-pointer mt-4 shadow-lg"
              >
                📥 Baixar Lista em PDF / Planilha Agora
              </button>
            </div>
          ) : (
            <>
              {/* Summary Bar */}
              <div className="bg-cinza-fundo p-4 rounded-2xl border border-lilas/20 flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-rosa-claro/70 block">Item Selecionado</span>
                  <span className="text-sm font-bold text-white">Lista de Fornecedores Loja R$10</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-rosa-claro/60 line-through block">De R$ 97,00</span>
                  <span className="text-xl font-extrabold text-pink-neon font-mono">R$ 19,90</span>
                </div>
              </div>

              {/* Form inputs */}
              <form onSubmit={handleSimulatePayment} className="space-y-4">
                <div className="space-y-3">
                  <label className="text-xs font-bold text-rosa-claro uppercase tracking-wider block">
                    1. Seus Dados de Acesso
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu Nome Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-cinza-fundo border border-lilas/20 focus:border-pink-neon rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Seu Melhor E-mail (Onde receberá o acesso)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-cinza-fundo border border-lilas/20 focus:border-pink-neon rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp (DD + Número)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-cinza-fundo border border-lilas/20 focus:border-pink-neon rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Payment Selection */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-bold text-rosa-claro uppercase tracking-wider block">
                    2. Escolha a Forma de Pagamento
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                        paymentMethod === 'pix'
                          ? 'bg-[#3D1E32] border-pink-neon text-rosa-claro shadow-lg'
                          : 'bg-cinza-fundo border-lilas/20 text-rosa-claro/70 hover:border-lilas/40'
                      }`}
                    >
                      <QrCode className="w-4 h-4 text-pink-neon" />
                      <span>PIX (Aprovação Instantânea)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'bg-[#3D1E32] border-pink-neon text-rosa-claro shadow-lg'
                          : 'bg-cinza-fundo border-lilas/20 text-rosa-claro/70 hover:border-lilas/40'
                      }`}
                    >
                      <CreditCard className="w-4 h-4 text-dourado" />
                      <span>Cartão de Crédito</span>
                    </button>
                  </div>
                </div>

                {/* Method details */}
                {paymentMethod === 'pix' ? (
                  <div className="bg-cinza-fundo p-4 rounded-2xl border border-pink-neon/30 space-y-3 text-center">
                    <div className="flex items-center justify-center gap-2 text-xs font-bold text-rosa-claro bg-[#3D1E32] py-1 px-3 rounded-full border border-pink-neon/30">
                      <Sparkles className="w-3.5 h-3.5 text-dourado" /> Desconto Ativo no PIX • Liberação Imediata
                    </div>

                    <div className="bg-white p-3 rounded-xl inline-block shadow-lg">
                      {/* Simulated QR code graphics */}
                      <div className="w-32 h-32 bg-cinza-escuro rounded flex flex-col items-center justify-center text-pink-neon font-mono text-xs p-2 text-center">
                        <QrCode className="w-16 h-16 text-white mb-1" />
                        <span className="text-[10px] text-rosa-claro">QR CODE SIMULADO R$ 19,90</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="w-full bg-cinza-card border border-lilas/30 hover:border-pink-neon text-rosa-claro text-xs font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Copy className="w-4 h-4 text-pink-neon" />
                      <span>{copiedPix ? 'Código PIX Copiado!' : 'Copiar Código PIX (Copia e Cola)'}</span>
                    </button>
                  </div>
                ) : (
                  <div className="bg-cinza-fundo p-4 rounded-2xl border border-lilas/20 space-y-3">
                    <input
                      type="text"
                      placeholder="Número do Cartão (Simulação)"
                      className="w-full bg-cinza-card border border-lilas/20 rounded-xl px-3 py-2.5 text-xs text-white"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="bg-cinza-card border border-lilas/20 rounded-xl px-3 py-2.5 text-xs text-white"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="bg-cinza-card border border-lilas/20 rounded-xl px-3 py-2.5 text-xs text-white"
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-neon via-[#FF5AA0] to-dourado hover:opacity-95 text-cinza-escuro font-black text-base py-4 px-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Lock className="w-5 h-5" />
                  <span>CONCLUIR PEDIDO - R$ 19,90</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
