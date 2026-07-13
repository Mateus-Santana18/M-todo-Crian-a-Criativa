import React from 'react';
import { BONUSES_DATA } from '../data';
import { Gift, CheckCircle } from 'lucide-react';

export default function Bonuses() {
  return (
    <section id="sec-bonus" data-section="Bônus" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF1CF] text-[#E4A107] px-4 py-1.5 rounded-full font-bold text-xs mb-3">
            <Gift className="w-4 h-4" /> PRESENTES EXCLUSIVOS DE HOJE
          </div>
          <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#0F172A]">
            ADQUIRINDO O KIT COMPLETO<br />
            <mark className="bg-[#FFF1CF] text-[#E4A107] px-3 py-1 rounded-xl inline-block mt-2 shadow-sm">
              VOCÊ LEVA 3 BÔNUS IMPERDIVEIS
            </mark>
          </h2>
        </div>

        <div className="space-y-8">
          {BONUSES_DATA.map((bonus, index) => (
            <div
              key={bonus.id}
              className="border-[3px] border-[#C7D2FE] bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 hover:border-[#4C6FFF] transition duration-300 shadow-sm"
            >
              <div className="relative flex-shrink-0 w-48 sm:w-56 aspect-square flex items-center justify-center">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-2 left-2 bg-[#15803d] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow uppercase tracking-wider">
                  BRINDE #{index + 1}
                </div>
              </div>

              <div className="text-center md:text-left flex-1">
                <span className="inline-block bg-[#d5ffcf] text-[#15803d] text-xs font-extrabold px-3.5 py-1 rounded-full mb-3 uppercase tracking-wider shadow-2xs">
                  ✨ INCLUSO GRATUITAMENTE
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-center md:justify-start gap-2 mb-3">
                  <h3 className="font-fredoka text-xl sm:text-2xl font-bold text-[#4C6FFF] tracking-wide">
                    {bonus.title}
                  </h3>
                  <div className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-bold bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg w-fit mx-auto md:mx-0">
                    <span className="text-gray-400 line-through">R$ 19,00</span>
                    <span className="text-[#15803d]">GRÁTIS</span>
                  </div>
                </div>
                <p className="text-[#374151] text-sm sm:text-base leading-relaxed font-medium">
                  {bonus.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 text-center">
          <p className="text-sm sm:text-base text-green-900 font-bold flex items-center justify-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
            Todos os 3 bônus serão enviados no mesmo e-mail de acesso imediato!
          </p>
        </div>
      </div>
    </section>
  );
}
