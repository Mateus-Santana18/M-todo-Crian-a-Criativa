import React from 'react';
import { WHY_IT_WORKS_IMAGE } from '../data';
import { CheckCircle2, Heart, Zap, Smile } from 'lucide-react';

export default function WhyItWorks() {
  return (
    <section id="sec-porque" data-section="Por que Funciona" className="py-16 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#0F172A] tracking-tight">
          Por que o Método Criança Criativa <span className="text-[#4C6FFF]">Funciona?</span>
        </h2>
        <p className="text-center text-[#374151] mb-12 max-w-3xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
          Um conteúdo completo com brincadeiras que ajudam seu filho a se desenvolver, reduzir o uso de telas e deixar a rotina muito mais leve e tranquila.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          {/* Visual Showcase */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#22c55e]/30 via-[#4C6FFF]/20 to-[#E4A107]/30 rounded-3xl blur-xl opacity-75" />
            <img
              src={WHY_IT_WORKS_IMAGE}
              alt="Atividades do Kit Método Criança Criativa em família"
              className="relative w-full h-auto rounded-2xl shadow-xl object-cover border-4 border-white max-h-[400px]"
            />
            <div className="absolute -bottom-5 -right-3 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#d5ffcf] text-[#16a34a] rounded-full flex items-center justify-center font-bold">
                📈
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold">📱 Menos tempo de tela</div>
                <div className="text-sm font-extrabold text-[#16a34a]">Resultados já na 1ª semana</div>
              </div>
            </div>
          </div>

          {/* Key Pillars */}
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:border-[#22c55e] transition duration-300 flex items-start gap-4">
              <span className="flex-shrink-0 mt-1 w-8 h-8 bg-[#22c55e] rounded-full flex items-center justify-center shadow-md text-white">
                <Smile className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-fredoka font-bold text-lg text-[#0F172A] mb-1">
                  Autonomia na Prática
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Brincadeiras que incentivam decisões, foco e resolução de problemas de forma natural e divertida.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:border-[#4C6FFF] transition duration-300 flex items-start gap-4">
              <span className="flex-shrink-0 mt-1 w-8 h-8 bg-[#4C6FFF] rounded-full flex items-center justify-center shadow-md text-white">
                <Zap className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-fredoka font-bold text-lg text-[#0F172A] mb-1">
                  Mais Calma no Dia a Dia
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Seu filho mais tranquilo, focado e feliz com atividades que substituem o tempo de tela por brincadeiras envolventes.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:border-[#E4A107] transition duration-300 flex items-start gap-4">
              <span className="flex-shrink-0 mt-1 w-8 h-8 bg-[#E4A107] rounded-full flex items-center justify-center shadow-md text-white">
                <Heart className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-fredoka font-bold text-lg text-[#0F172A] mb-1">
                  Menos Tela, Mais Desenvolvimento
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Cada dia perdido nas telas é uma chance a menos de estimular habilidades importantes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#sec-bonus"
            className="cta-checkout inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg md:text-xl py-4 sm:py-5 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cta-pulse"
          >
            QUERO VER TUDO O QUE VOU RECEBER
          </a>
          <p className="text-xs text-gray-500 mt-3">⬇️Veja abaixo tudo o que está incluso sem custo adicional.</p>
        </div>
      </div>
    </section>
  );
}
