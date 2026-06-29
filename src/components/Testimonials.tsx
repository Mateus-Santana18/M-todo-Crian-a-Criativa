import React from 'react';
import { TESTIMONIALS_DATA } from '../data';
import { MessageSquareQuote, Star, ThumbsUp, Check } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="sec-depoimentos" data-section="Depoimentos" className="py-16 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 text-[#0F172A] tracking-tight">
          Quem confiou, <span className="text-[#4C6FFF]">aprovou!</span>
        </h2>
        <p className="text-[#374151] mb-2 text-base sm:text-lg font-medium">
          Mais de 9.000 pais e professores em todo o Brasil já transformaram a rotina das crianças com nosso método
        </p>
        <p className="text-gray-500 mb-10 text-xs sm:text-sm font-semibold animate-pulse">
          👉 Deslize para os lados para ler as avaliações reais
        </p>

        {/* Scrollable Testimonials Carousel */}
        <div className="overflow-x-auto scrollbar-hide -mx-4 pb-6 px-4 cursor-grab active:cursor-grabbing select-none">
          <div className="flex gap-6 w-max">
            {TESTIMONIALS_DATA.map((rev) => (
              <div
                key={rev.id}
                className="w-80 sm:w-96 bg-white rounded-3xl p-6 shadow-xl border border-slate-200/80 text-left flex flex-col justify-between flex-shrink-0 transform hover:-translate-y-1 transition duration-300 relative"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-[#E4A107]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-gray-400 ml-2">5.0</span>
                  </div>

                  <p className="text-sm text-[#374151] leading-relaxed mb-6 font-normal italic">
                    "{rev.content}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#4C6FFF]"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-[#0F172A] flex items-center gap-1">
                        {rev.name}
                        <span className="w-3.5 h-3.5 bg-[#22c55e] text-white rounded-full inline-flex items-center justify-center text-[9px]" title="Comprador Verificado">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                      </h4>
                      <p className="text-[11px] text-gray-500 line-clamp-1">{rev.role}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-500">
                      <ThumbsUp className="w-3 h-3 text-[#4C6FFF]" /> {rev.likes}
                    </span>
                    <div className="text-[10px] text-gray-400 mt-0.5">{rev.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
