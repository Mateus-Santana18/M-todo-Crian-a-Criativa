import React from 'react';
import { WHY_IT_WORKS_IMAGE, CHECKOUT_URL } from '../data';
import { CheckCircle2, Heart, Zap, Smile } from 'lucide-react';

export default function WhyItWorks() {
  return (
    <section id="sec-porque" data-section="Por que Funciona" className="py-16 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4 text-[#0F172A] tracking-tight">
          Por que o Vida Sem Telas <span className="text-[#4C6FFF]">Funciona?</span>
        </h2>
        <p className="text-center text-[#374151] mb-12 max-w-3xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
          O nosso conteúdo é mega completo, com brincadeiras muito divertidas para seu pequeno. Você vai notar grandes diferenças positivas no comportamento e na tranquilidade da rotina.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
          {/* Visual Showcase */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#22c55e]/30 via-[#4C6FFF]/20 to-[#E4A107]/30 rounded-3xl blur-xl opacity-75" />
            <img
              src={WHY_IT_WORKS_IMAGE}
              alt="Atividades do Kit Vida Sem Telas em família"
              className="relative w-full h-auto rounded-2xl shadow-xl object-cover border-4 border-white max-h-[400px]"
            />
            <div className="absolute -bottom-5 -right-3 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#d5ffcf] text-[#16a34a] rounded-full flex items-center justify-center font-bold">
                📈
              </div>
              <div>
                <div className="text-xs text-gray-500 font-semibold">Tempo de Tela</div>
                <div className="text-sm font-extrabold text-[#16a34a]">-80% na primeira semana</div>
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
                  Melhora Visível no Humor
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Atividades imersivas e práticas que estimulam a dopamina natural, fazendo a criança esquecer a necessidade da tela instantaneamente.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:border-[#4C6FFF] transition duration-300 flex items-start gap-4">
              <span className="flex-shrink-0 mt-1 w-8 h-8 bg-[#4C6FFF] rounded-full flex items-center justify-center shadow-md text-white">
                <Zap className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-fredoka font-bold text-lg text-[#0F172A] mb-1">
                  Diversão Crescente e Diária
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Todo dia uma brincadeira nova que desperta a criatividade, os sentidos e a curiosidade infantil de forma estruturada.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 hover:border-[#E4A107] transition duration-300 flex items-start gap-4">
              <span className="flex-shrink-0 mt-1 w-8 h-8 bg-[#E4A107] rounded-full flex items-center justify-center shadow-md text-white">
                <Heart className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-fredoka font-bold text-lg text-[#0F172A] mb-1">
                  Autonomia Natural e Independência
                </h3>
                <p className="text-[#374151] text-sm leading-relaxed">
                  Brincadeiras pensadas para estimular seu filho na tomada de decisões e na resolução de problemas sozinho ou em equipe.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={CHECKOUT_URL}
            className="cta-checkout inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg md:text-xl py-4 sm:py-5 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cta-pulse"
          >
            QUERO O KIT VIDA SEM TELAS
          </a>
          <p className="text-xs text-gray-500 mt-3">⚡ Envio automático por e-mail em formato PDF e Web</p>
        </div>
      </div>
    </section>
  );
}
