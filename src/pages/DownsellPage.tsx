import React from 'react';
import datasComemorativasImg from '../assets/datas_comemorativas.jpg';
import { Gift, CheckCircle, ShieldCheck, Clock, Flame, Percent } from 'lucide-react';

export default function DownsellPage() {
  // Temporary placeholder link. The user will replace this with their actual Cakto Downsell Checkout Link.
  const DOWNSELL_CHECKOUT_URL = "#";

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      {/* Funnel Progress Indicator */}
      <div className="max-w-4xl mx-auto mb-8 bg-white border border-slate-200 rounded-2xl p-4 flex justify-between items-center text-xs sm:text-sm font-semibold text-gray-500 shadow-xs">
        <span className="text-[#22c55e] flex items-center gap-1">
          <CheckCircle className="w-4.5 h-4.5" /> 1. Pagamento Aprovado
        </span>
        <span className="text-[#E4A107] flex items-center gap-1 animate-pulse">
          <Percent className="w-4.5 h-4.5" /> 2. Última Oportunidade (Desconto)
        </span>
        <span className="flex items-center gap-1">
          3. Acesso Liberado
        </span>
      </div>

      {/* Main Container */}
      <div className="max-w-3xl mx-auto bg-white border-2 border-amber-300 rounded-3xl overflow-hidden shadow-lg">
        {/* Warning Bar */}
        <div className="bg-amber-500 text-white text-center py-4 px-6 font-bold text-sm sm:text-base animate-pulse flex items-center justify-center gap-2">
          <Flame className="w-5 h-5 fill-white" />
          <span>ESPERE! ESSA É SUA ÚLTIMA CHANCE DE OBTER ESSE COMPLEMENTO COM DESCONTO!</span>
        </div>

        <div className="p-6 sm:p-10 text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200 text-red-800 px-4 py-1.5 rounded-full font-bold text-xs mb-6 shadow-2xs">
            <Percent className="w-4 h-4" /> DESCONTO DE R$ 5,00 LIBERADO PARA VOCÊ
          </div>

          <h1 className="font-fredoka text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight mb-4 max-w-xl mx-auto">
            Não vá embora sem seu complemento!{' '}
            <span className="text-[#E4A107]">Leve o Kit de Datas por apenas R$ 19,90</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-xl mx-auto font-medium">
            Entendemos que às vezes precisamos economizar. Por isso, liberamos um desconto exclusivo de R$ 5,00 para garantir que seu filho tenha atividades educativas o ano inteiro.
          </p>

          {/* Product Box */}
          <div className="bg-[#F8FAFC] border-2 border-slate-100 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 text-left mb-8 max-w-xl mx-auto">
            <img
              src={datasComemorativasImg}
              alt="Kit Premium de Datas Comemorativas"
              className="w-28 h-auto object-contain rounded-lg flex-shrink-0"
            />
            <div>
              <h3 className="font-fredoka text-lg font-bold text-[#0F172A] mb-1">
                Kit Premium de Datas Comemorativas
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Mais de 55 atividades temáticas prontas para imprimir (Carnaval, Páscoa, Dia das Mães, Festa Junina, Férias, Dia dos Pais, Halloween, Volta às Aulas, Natal e Extras).
              </p>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 max-w-xl mx-auto border border-white/10 shadow-md">
            <p className="text-gray-400 line-through text-sm font-medium mb-1">
              De R$ 24,90
            </p>
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-xl font-bold text-white/95">por apenas</span>
              <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">R$ 19</span>
              <span className="text-2xl font-extrabold text-[#E4A107]">,90</span>
            </div>

            {/* CTA Button */}
            <a
              href={DOWNSELL_CHECKOUT_URL}
              className="cta-checkout block w-full bg-[#E4A107] hover:bg-[#c28803] text-white font-extrabold text-lg sm:text-xl py-4 px-8 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cta-pulse uppercase tracking-wide transform active:scale-95 text-center"
            >
              🎉 SIM, QUERO APROVEITAR O DESCONTO
            </a>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 mt-4 pt-4 border-t border-white/10">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e]" /> Garantia de Satisfação
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-500" /> Envio Automático
              </span>
            </div>
          </div>

          {/* Decline Link */}
          <div className="mt-8">
            <a
              href="obrigado.html"
              className="text-xs sm:text-sm text-gray-400 hover:text-red-500 font-semibold transition underline tracking-wide"
            >
              Não, obrigado. Desejo recusar o desconto de R$ 5,00 e ir direto para o meu acesso do kit básico.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
