import React from 'react';
import { ACTIVITIES_DATA } from '../data';
import { Activity } from '../types';
import { Eye, Sparkles, HandMetal } from 'lucide-react';

interface ActivitiesGridProps {
  onSelectActivity: (activity: Activity) => void;
}

export default function ActivitiesGrid({ onSelectActivity }: ActivitiesGridProps) {
  return (
    <section id="sec-atividades" data-section="Atividades" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7D2FE]/40 text-[#4C6FFF] text-xs font-bold mb-3 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> AMOSTRAS DO MATERIAL
        </div>
        <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#0F172A] tracking-tight">
          Conheça um pouco das atividades do kit
        </h2>
        <p className="text-[#374151] mb-12 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          Você consegue imprimir em qualquer lugar, ou aplicar as brincadeiras lúdicas apenas olhando as instruções pelo celular de forma rápida.
        </p>

        {/* Activity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {ACTIVITIES_DATA.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectActivity(item)}
              className="group bg-[#F8FAFC] rounded-2xl p-4 border-[3px] border-[#C7D2FE] hover:border-[#4C6FFF] transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              <div className="relative rounded-xl overflow-hidden mb-4 aspect-square bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-white text-[#0F172A] font-bold text-xs py-2 px-4 rounded-full flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                    <Eye className="w-4 h-4 text-[#4C6FFF]" /> Ver Detalhes
                  </span>
                </div>
                <span className="absolute top-2.5 left-2.5 bg-[#0F172A]/80 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {item.ageGroup}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#4C6FFF] uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-fredoka font-bold text-lg text-[#0F172A] mb-2 line-clamp-2 leading-snug group-hover:text-[#4C6FFF] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-gray-500 font-medium">
                  <span>✂️ {item.materials.length} materiais</span>
                  <span className="text-[#4C6FFF] font-bold group-hover:underline">Abrir →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#FFF4DE] border border-[#FFE4A0] rounded-2xl p-6 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-full bg-[#E4A107] text-white flex items-center justify-center text-2xl flex-shrink-0 shadow-md">
              🎨
            </div>
            <div>
              <h4 className="font-fredoka font-bold text-lg text-[#0F172A]">Todas as +150 atividades estão organizadas por idade!</h4>
              <p className="text-xs sm:text-sm text-gray-700">De 0 a 12 anos. Brincadeiras sensoriais, desafios cognitivos e arte.</p>
            </div>
          </div>
          <a
            href="#comparativo"
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold text-sm py-3 px-6 rounded-full transition shadow whitespace-nowrap"
          >
            QUERO MEU KIT COMPLETO
          </a>
        </div>
      </div>
    </section>
  );
}
