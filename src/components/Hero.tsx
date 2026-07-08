import React from 'react';
import { HERO_MOCKUP_IMAGE } from '../data';
import { Sparkles, Heart, Award, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="sec-hero"
      data-section="Hero"
      className="py-12 md:py-20 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(225deg, #FFF4DE 0%, #F8F8F8 40%)' }}
    >
      {/* Decorative background glow accents */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#FFE4A0] rounded-full blur-3xl opacity-40 pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#C7D2FE] rounded-full blur-3xl opacity-40 pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* H1 Headline */}
        <h1 className="font-fredoka text-[2.2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 text-[#0F172A] tracking-tight max-w-4xl mx-auto pt-6">
          Em apenas 7 dias, seu filho pode{' '}
          <span className="text-[#4C6FFF] relative inline-block">
            reduzir o tempo nas telas
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFE4A0] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>{' '}
          e descobrir uma nova forma de{' '}
          <span className="text-[#22c55e]">aprender, criar e se divertir!</span>
        </h1>

        {/* Hero Bundle Mockup Graphic */}
        <div className="max-w-3xl mx-auto mb-10 relative flex justify-center">
          <img
            src={HERO_MOCKUP_IMAGE}
            alt="Kit Método Criança Criativa - Materiais educativos"
            className="w-full h-auto object-contain max-h-[500px]"
          />
          
          {/* Floating Trust Badges over Image */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-2 sm:gap-4 pointer-events-none">
            <span className="bg-[#0F172A]/85 backdrop-blur text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/20">
              <Sparkles className="w-4 h-4 text-[#E4A107]" /> +150 Brincadeiras Prontas
            </span>
            <span className="bg-[#0F172A]/85 backdrop-blur text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/20">
              <Heart className="w-4 h-4 text-[#ef4444]" /> 100% Longe do Celular
            </span>
            <span className="bg-[#0F172A]/85 backdrop-blur text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md border border-white/20">
              <Award className="w-4 h-4 text-[#22c55e]" /> Aprovado por Pedagogas
            </span>
          </div>
        </div>

        {/* Subtitle / Benefits Section */}
        <div className="text-base sm:text-lg md:text-xl text-[#374151] mb-8 max-w-2xl mx-auto font-medium space-y-6">
          <p className="leading-relaxed">
            Com atividades práticas e divertidas, estimule a criatividade e a concentração do seu filho sem precisar comprar materiais extras! 🎨✨
          </p>
          
          <div className="flex justify-center">
            <div className="inline-flex flex-col text-left gap-2.5 bg-white/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm max-w-md w-full">
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-800 font-bold">
                <span>⏱️ Apenas 15 a 30 minutos por dia</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-800 font-bold">
                <span>🏠 Atividades simples para fazer em casa</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-800 font-bold">
                <span>♻️ Use objetos que você já tem em mãos</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-800 font-bold">
                <span>👨‍👩‍👧‍👦 Mais conexão, aprendizado e diversão em família</span>
              </div>
            </div>
          </div>

          <p className="font-extrabold text-[#4C6FFF] tracking-wide text-sm sm:text-base uppercase">
            🚫 Menos Telas · 💡 Mais Criatividade · 🚀 Mais Desenvolvimento
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="#sec-atividades"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg sm:text-xl md:text-2xl py-4 sm:py-5 px-8 sm:px-12 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cta-pulse hover:-translate-y-1 active:translate-y-0 uppercase"
          >
            quero saber o que vem no kit!
          </a>
          <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
            🔒 Compra Segura · Acesso Imediato por R$ 9,90
          </span>
        </div>

        <div className="mt-12 flex justify-center animate-bounce opacity-60">
          <a href="#sec-atividades" aria-label="Ver atividades">
            <ArrowDown className="w-6 h-6 text-[#374151]" />
          </a>
        </div>
      </div>
    </section>
  );
}
