import React from 'react';
import { CHECKOUT_URL } from '../data';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function NotificationBar() {
  return (
    <div className="bg-[#0F172A] text-white py-2 px-4 sticky top-0 z-40 border-b border-white/10 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm">
        <div className="flex items-center gap-2 font-medium">
          <span className="inline-flex items-center gap-1 bg-[#22c55e] text-white font-bold px-2 py-0.5 rounded text-[10px] sm:text-xs animate-pulse">
            <Sparkles className="w-3 h-3" /> OFERTA ESPECIAL
          </span>
          <span className="text-gray-300">Desconto promocional de 85% ativo por tempo limitado!</span>
        </div>

        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          <span className="hidden sm:flex items-center gap-1 text-gray-400 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e]" /> Garantia 7 dias
          </span>
          <a
            href={CHECKOUT_URL}
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold px-3 py-1 rounded-full transition shadow-sm hover:scale-105 active:scale-95 text-xs"
          >
            GARANTIR POR R$ 7,00
          </a>
        </div>
      </div>
    </div>
  );
}
