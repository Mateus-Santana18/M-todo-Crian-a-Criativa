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
        {/* Logo Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-5 py-2.5 rounded-full shadow-sm border border-[#FFE4A0] mb-6">
          <div className="w-8 h-8 bg-[#4C6FFF] rounded-full flex items-center justify-center text-white shadow-inner font-bold text-lg">
            🌱
          </div>
          <span className="font-fredoka font-extrabold text-xl md:text-2xl tracking-tight text-[#0F172A]">
            Método Criança Criativa
          </span>
          <span className="bg-[#FFF1CF] text-[#E4A107] text-[11px] font-bold px-2 py-0.5 rounded-full ml-1">
            KIT OFICIAL
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="font-fredoka text-[2.2rem] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 text-[#0F172A] tracking-tight max-w-4xl mx-auto">
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
        <div className="max-w-3xl mx-auto mb-8 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FFE4A0] via-[#4C6FFF]/30 to-[#22c55e]/40 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border-[6px] border-white">
            <img
              src={HERO_MOCKUP_IMAGE}
              alt="Kit Método Criança Criativa - Materiais educativos"
              className="w-full h-auto object-cover max-h-[420px]"
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
                <Award className="w-4 h-4 text-[#22c55e]" /> Aprovado por Pedagogues
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle / Benefits Section */}
        <div className="text-base sm:text-lg md:text-xl text-[#374151] mb-8 max-w-2xl mx-auto font-medium space-y-6">
          <p className="leading-relaxed">
            Com atividades práticas, envolventes e fáceis de aplicar, você estimula a criatividade, a concentração e o desenvolvimento infantil sem precisar comprar materiais.
          </p>
          
          <div className="flex justify-center">
            <div className="inline-flex flex-col text-left gap-2.5 bg-white/60 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm max-w-md w-full">
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-800">
                <span className="text-green-500 font-extrabold">✅</span>
                <span>Apenas 15 a 30 minutos por dia</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-800">
                <span className="text-green-500 font-extrabold">✅</span>
                <span>Atividades simples para fazer em casa</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-800">
                <span className="text-green-500 font-extrabold">✅</span>
                <span>Utilize objetos que você já possui</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-800">
                <span className="text-green-500 font-extrabold">✅</span>
                <span>Mais interação, aprendizado e momentos em família</span>
              </div>
            </div>
          </div>

          <p className="font-extrabold text-[#4C6FFF] tracking-wide text-lg sm:text-xl uppercase">
            Menos telas. Mais criatividade. Mais desenvolvimento.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="#comparativo"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white font-extrabold text-lg sm:text-xl md:text-2xl py-4 sm:py-5 px-8 sm:px-12 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl cta-pulse hover:-translate-y-1 active:translate-y-0 uppercase"
          >
            Quero o kit método criança criativa
          </a>
          <span className="text-xs sm:text-sm text-gray-500 flex items-center gap-1">
            🔒 Compra Segura · Acesso Imediato por R$ 7,00
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
