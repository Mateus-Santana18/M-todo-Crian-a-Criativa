import React from 'react';
import { HERO_MOCKUP_IMAGE, CHECKOUT_URL } from '../data';
import { Check, ShieldAlert, Sparkles, Lock } from 'lucide-react';

export default function PricingCard() {
  return (
    <section id="comparativo" data-section="Preços" className="py-16 px-4 bg-gradient-to-b from-white to-slate-100">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <span className="bg-[#ef4444] text-white font-extrabold text-xs uppercase px-3 py-1 rounded-full shadow-sm animate-bounce inline-block">
            🔥 DESCONTO DE 85% APENAS HOJE
          </span>
        </div>

        <div className="rounded-3xl overflow-hidden bg-[#1E293B] text-white shadow-2xl flex flex-col border-4 border-[#E4A107] relative transform hover:scale-[1.01] transition duration-300">
          {/* Top Banner Accent */}
          <div className="bg-[#E4A107] text-[#0F172A] text-center font-bold py-2 text-xs uppercase tracking-widest">
            Acesso Completo + 3 Bônus Inclusos
          </div>

          <div className="p-6 sm:p-10 text-center flex flex-col flex-1">
            <h2 className="font-fredoka text-3xl sm:text-4xl font-extrabold mb-6 text-white tracking-tight">
              Método Criança Criativa
            </h2>

            <div className="relative mb-8 flex justify-center">
              <img
                src={HERO_MOCKUP_IMAGE}
                alt="Kit Método Criança Criativa Pacote Completo"
                className="w-full h-auto max-h-[220px] object-contain"
              />
            </div>

            <ul className="space-y-4 mb-8 text-left flex-1">
              <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#22c55e] text-white rounded-full flex items-center justify-center shadow">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-gray-100 font-semibold text-sm sm:text-base">
                  +150 Atividades Criativas e Lúdicas (0 a 12 anos)
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#22c55e] text-white rounded-full flex items-center justify-center shadow">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className="text-gray-100 font-semibold text-sm sm:text-base">
                  Kit Digital Completo Organizado por Idade
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#E4A107] text-white rounded-full flex items-center justify-center shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="text-gray-100 font-semibold text-sm sm:text-base">
                  Bônus #1: Guia "Mãe de Sucesso"
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#E4A107] text-white rounded-full flex items-center justify-center shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="text-gray-100 font-semibold text-sm sm:text-base">
                  Bônus #2: Caligrafia Divertida
                </span>
              </li>
              <li className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#E4A107] text-white rounded-full flex items-center justify-center shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className="text-gray-100 font-semibold text-sm sm:text-base">
                  Bônus #3: Matemática Lúdica
                </span>
              </li>
            </ul>

            {/* Pricing Section */}
            <div className="text-center mt-auto bg-slate-900/60 p-6 rounded-2xl border border-white/5">
              <p className="text-gray-400 line-through text-lg font-medium mb-1">
                de R$ 49,00
              </p>
              <p className="text-xs uppercase tracking-wider text-[#22c55e] font-extrabold mb-1">
                por apenas pagamento único
              </p>
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-2xl font-bold text-white/90">R$</span>
                <span className="text-6xl sm:text-7xl font-extrabold text-white tracking-tight">9</span>
                <span className="text-3xl font-extrabold text-[#22c55e]">,90</span>
              </div>

              <a
                href={CHECKOUT_URL}
                className="cta-checkout block w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-xl py-5 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cta-pulse uppercase tracking-wide transform active:scale-95"
              >
                ACESSAR AGORA POR R$ 9,90
              </a>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 mt-5 pt-4 border-t border-white/10">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-[#22c55e]" /> Acesso Imediato
                </span>
                <span>·</span>
                <span>Pagamento Único</span>
                <span>·</span>
                <span>Garantia 7 Dias</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center bg-amber-50 border border-amber-200 rounded-2xl p-4 text-amber-800 text-xs sm:text-sm">
          ⚠️ <strong>Aviso:</strong> Devido à alta demanda, o preço promocional de R$ 9,90 pode retornar ao valor normal de R$ 49,00 a qualquer momento.
        </div>
      </div>
    </section>
  );
}
