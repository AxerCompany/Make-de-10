import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircleQuestion } from 'lucide-react';
import { FAQS } from '../data/faqs';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // open first by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-cinza-escuro text-white border-b border-lilas/20">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dourado/10 border border-dourado/30 text-dourado text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-pink-neon" /> Tirando suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Perguntas Frequentes
          </h2>
          <p className="text-rosa-claro/80 text-sm sm:text-base">
            Tudo o que você precisa saber antes de adquirir seu acesso.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-cinza-card border border-lilas/20 rounded-2xl overflow-hidden transition-all duration-200 hover:border-pink-neon/40 shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="text-white font-black text-xs bg-pink-neon rounded-full w-7 h-7 flex items-center justify-center shrink-0 shadow-sm">
                      ?
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-dourado shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-0 text-rosa-claro/90 text-sm sm:text-base leading-relaxed border-t border-lilas/20 mt-1">
                    <p className="pt-4 text-rosa-claro">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
