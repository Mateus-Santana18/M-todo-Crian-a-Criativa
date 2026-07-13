import React from 'react';
import { FAQ_DATA } from '../data';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  return (
    <div className="bg-[#0F172A] text-white">
      <section id="sec-faq" data-section="FAQ" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 bg-white/10 text-[#4C6FFF] px-3.5 py-1 rounded-full text-xs font-bold mb-3 uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" /> TIROU DÚVIDAS?
            </div>
            <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white tracking-tight">
              PERGUNTAS <span className="text-[#4C6FFF]">FREQUENTES</span>
            </h2>
          </div>

          <div className="space-y-4 mb-12">
            {FAQ_DATA.map((faq, index) => (
              <details
                key={index}
                className="group border-2 border-white/15 bg-slate-800/50 rounded-2xl overflow-hidden transition-all duration-300 open:bg-slate-800 open:border-[#4C6FFF]"
              >
                <summary className="cursor-pointer p-6 font-bold text-base sm:text-lg flex items-center justify-between hover:bg-white/5 transition-colors text-gray-100 select-none">
                  <span className="pr-4">{faq.question}</span>
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#4C6FFF] group-open:rotate-180 group-open:bg-[#4C6FFF] group-open:text-white transition-all duration-300 flex-shrink-0">
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-[#4C6FFF]/20 via-[#22c55e]/20 to-[#E4A107]/20 p-8 rounded-3xl border border-white/10">
            <h3 className="font-fredoka font-bold text-xl mb-2 text-white">Pronto para transformar a rotina da sua casa?</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-lg mx-auto">
              Experimente por 7 dias com risco zero. Se o comportamento do seu filho não melhorar, devolvemos seus R$ 14,90.
            </p>
            <a
              href="#comparativo"
              className="cta-checkout inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg sm:text-xl py-4 sm:py-5 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cta-pulse"
            >
              SIM, QUERO COMEÇAR O DESAFIO HOJE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
