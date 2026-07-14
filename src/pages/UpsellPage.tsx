import React from 'react';
import datasComemorativasImg from '../assets/datas_comemorativas.jpg';
import { Gift, CheckCircle, ShieldCheck, Clock, Flame, Calendar, Award, Sparkles, BookOpen } from 'lucide-react';

export default function UpsellPage() {


  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      {/* Funnel Progress Indicator */}
      <div className="max-w-4xl mx-auto mb-8 bg-white border border-slate-200 rounded-2xl p-4 flex justify-between items-center text-xs sm:text-sm font-semibold text-gray-500 shadow-xs">
        <span className="text-[#22c55e] flex items-center gap-1">
          <CheckCircle className="w-4.5 h-4.5" /> 1. Pagamento Aprovado
        </span>
        <span className="text-[#4C6FFF] flex items-center gap-1 animate-pulse">
          <Sparkles className="w-4.5 h-4.5" /> 2. Oportunidade Exclusiva
        </span>
        <span className="flex items-center gap-1">
          3. Acesso Liberado
        </span>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto bg-white border-2 border-[#C7D2FE] rounded-3xl overflow-hidden shadow-lg">
        {/* Warning Bar */}
        <div className="bg-red-500 text-white text-center py-4 px-6 font-bold text-sm sm:text-base animate-pulse flex items-center justify-center gap-2">
          <Flame className="w-5 h-5 fill-white" />
          <span>ESPERE! NÃO FECHE OU ATUALIZE ESTA PÁGINA. UMA OPORTUNIDADE ÚNICA SURGIU!</span>
        </div>

        <div className="p-6 sm:p-10 text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-1.5 rounded-full font-bold text-xs mb-6 shadow-2xs">
            <Gift className="w-4 h-4" /> OFERTA ÚNICA E EXCLUSIVA (DISPONÍVEL APENAS AQUI)
          </div>

          <h1 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-tight mb-4 max-w-2xl mx-auto">
            Gostaria de complementar o Método com o{' '}
            <span className="text-[#4C6FFF]">Kit Premium de Datas Comemorativas?</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-medium">
            Evite que seu filho volte para as telas nos feriados e férias. Tenha sempre em mãos atividades temáticas prontas para imprimir para o ano inteiro!
          </p>

          {/* Core Presentation Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-left mb-10 pb-8 border-b border-slate-100">
            {/* Left: Image Showcase */}
            <div className="relative group max-w-[320px] mx-auto w-full">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#22c55e]/20 via-[#4C6FFF]/20 to-[#E4A107]/20 rounded-3xl blur-lg opacity-75" />
              <div className="relative bg-[#F8FAFC] border-2 border-slate-200 rounded-2xl p-4 shadow-sm flex justify-center">
                <img
                  src={datasComemorativasImg}
                  alt="Capa do Kit Premium de Datas Comemorativas"
                  className="w-full h-auto max-h-[360px] object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Right: Benefits Checklist */}
            <div className="space-y-4">
              <h2 className="font-fredoka text-xl font-bold text-[#0F172A] flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-[#4C6FFF]" /> O que seu filho vai receber:
              </h2>
              
              <div className="grid grid-cols-1 gap-2.5">
                {[
                  "Mais de 55 Atividades Temáticas prontas para impressão",
                  "🎉 Carnaval – atividades lúdicas e divertidas",
                  "🐰 Páscoa – desafios educativos e temáticos",
                  "💖 Dia das Mães & 👨 Dia dos Pais – fortalecimento de laços",
                  "🎊 Festa Junina & 🎃 Halloween – jogos típicos",
                  "🎄 Natal – brincadeiras natalinas completas em família",
                  "☀️ Férias de Julho & 🎒 Volta às Aulas – rotina e diversão",
                  "🎁 Inclui: Calendário Anual, Checklist e Certificados!"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm sm:text-base text-gray-700 font-medium">
                    <CheckCircle className="w-5 h-5 text-[#22c55e] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 max-w-xl mx-auto border border-white/10 shadow-md">
            <span className="text-xs uppercase tracking-widest text-[#22c55e] font-extrabold mb-1 block">
              ADICIONE AGORA AO SEU PEDIDO
            </span>
            <p className="text-gray-400 line-through text-base font-medium mb-1">
              Valor Normal: R$ 49,00
            </p>
            <div className="flex items-baseline justify-center gap-1 mb-4">
              <span className="text-xl font-bold text-white/95">por apenas</span>
              <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">R$ 24</span>
              <span className="text-2xl font-extrabold text-[#22c55e]">,90</span>
            </div>

            {/* Cakto 1-Click Upsell Buttons */}
            <cakto-upsell-buttons>
              <cakto-upsell-accept
                bg-color="#22c55eff"
                text-color="#ffffff"
                upsell-accept-url="members_area"
                offer-id="cpo3asi"
                app-base-url="https://app.cakto.com.br"
                offer-type="upsell"
                upsell-reject-url="https://metodocriancacriativa.vercel.app/downsell"
              >
                🚀 SIM, QUERO ADICIONAR AO MEU PEDIDO
              </cakto-upsell-accept>
              
              <cakto-upsell-reject
                upsell-reject-url="https://metodocriancacriativa.vercel.app/downsell"
              >
                Não, obrigado. Não desejo datas comemorativas e prefiro perder essa oportunidade exclusiva para sempre.
              </cakto-upsell-reject>
            </cakto-upsell-buttons>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400 mt-6 pt-4 border-t border-white/10">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e]" /> Compra Segura Cakto
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-500" /> Acesso Imediato
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
