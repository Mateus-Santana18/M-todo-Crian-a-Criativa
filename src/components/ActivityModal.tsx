import React from 'react';
import { Activity } from '../types';
import { CHECKOUT_URL } from '../data';
import { X, CheckCircle2, Sparkles, Scissors, Clock } from 'lucide-react';

interface ActivityModalProps {
  activity: Activity | null;
  onClose: () => void;
}

export default function ActivityModal({ activity, onClose }: ActivityModalProps) {
  if (!activity) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border-4 border-[#C7D2FE] relative max-h-[90vh] flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="relative h-48 sm:h-64 w-full bg-slate-100 flex-shrink-0">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-black/30" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition hover:scale-110 active:scale-95"
            aria-label="Fechar preview"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-[#4C6FFF] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {activity.category}
              </span>
              <span className="bg-[#E4A107] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                👶 {activity.ageGroup}
              </span>
            </div>
            <h3 className="font-fredoka text-2xl sm:text-3xl font-extrabold leading-tight">
              {activity.title}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-left">
          <p className="text-[#374151] text-base sm:text-lg leading-relaxed font-medium">
            {activity.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F8FAFC] p-5 rounded-2xl border border-slate-200">
            <div>
              <h4 className="font-fredoka font-bold text-[#0F172A] flex items-center gap-2 mb-3 text-sm uppercase tracking-wide">
                <Scissors className="w-4 h-4 text-[#4C6FFF]" /> Materiais Simples
              </h4>
              <ul className="space-y-2">
                {activity.materials.map((mat, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-[#4C6FFF] rounded-full mt-2 flex-shrink-0" />
                    <span>{mat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-fredoka font-bold text-[#0F172A] flex items-center gap-2 mb-3 text-sm uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-[#22c55e]" /> Benefícios Diretos
              </h4>
              <p className="text-sm text-gray-700 leading-normal bg-green-50 text-green-900 p-3 rounded-xl border border-green-200">
                🌱 {activity.benefit}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-fredoka font-bold text-[#0F172A] flex items-center gap-2 mb-3 text-base">
              <Clock className="w-4 h-4 text-[#E4A107]" /> Passo a Passo Prático (Exemplo do Kit)
            </h4>
            <ol className="space-y-3">
              {activity.steps.map((step, idx) => (
                <li key={idx} className="flex gap-3 text-sm sm:text-base text-gray-700">
                  <span className="flex-shrink-0 w-6 h-6 bg-[#C7D2FE] text-[#4C6FFF] font-bold rounded-full flex items-center justify-center text-xs">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div className="text-xs text-gray-500 text-center sm:text-left">
            Gostou dessa atividade? O Kit completo possui <strong>+150 brincadeiras</strong> prontas para imprimir ou ler no celular.
          </div>
          <a
            href={CHECKOUT_URL}
            className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-6 py-3 rounded-full text-center transition shadow-md whitespace-nowrap cta-pulse"
          >
            DESBLOQUEAR TUDO POR R$ 7
          </a>
        </div>
      </div>
    </div>
  );
}
