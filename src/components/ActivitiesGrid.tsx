import React, { useState, useEffect } from 'react';
import { ACTIVITIES_DATA } from '../data';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ActivitiesGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  // Hook to detect visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(4);
      } else if (window.innerWidth >= 640) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = ACTIVITIES_DATA.length - visibleCards;

  // Reset index if it overflows on resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCards, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds autoplay

    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  return (
    <section id="sec-atividades" data-section="Atividades" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C7D2FE]/40 text-[#4C6FFF] text-xs font-bold mb-3 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> AMOSTRAS DO MATERIAL
        </div>
        <h2 className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#0F172A] tracking-tight">
          🎨 Conheça algumas atividades do Método Criança Criativa
        </h2>
        <p className="text-[#374151] mb-12 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          🖨️ Imprima quando quiser ou acompanhe as instruções pelo celular e comece a brincar em poucos minutos.
        </p>

        {/* Carousel Container */}
        <div 
          className="relative group/carousel max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Outer track wrapper */}
          <div className="overflow-hidden rounded-2xl py-2 px-1">
            <div 
              className="flex transition-transform duration-500 ease-out -mx-3"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {ACTIVITIES_DATA.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <div className="bg-[#F8FAFC] rounded-2xl p-4 border-[3px] border-[#C7D2FE] h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div className="relative rounded-xl overflow-hidden mb-4 aspect-square bg-slate-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-[#0F172A]/80 backdrop-blur text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                        {item.ageGroup}
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold text-[#4C6FFF] uppercase tracking-wider block mb-1">
                          {item.category}
                        </span>
                        <h3 className="font-fredoka font-bold text-lg text-[#0F172A] mb-2 line-clamp-2 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-gray-500 font-medium">
                        <span>✂️ {item.materials.length} materiais</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-16px] top-1/2 -translate-y-1/2 bg-white text-[#0F172A] p-3 rounded-full border-2 border-[#C7D2FE] shadow-lg hover:border-[#4C6FFF] hover:text-[#4C6FFF] transition duration-200 z-10 md:opacity-0 md:group-hover/carousel:opacity-100 focus:opacity-100 active:scale-95 cursor-pointer"
            aria-label="Atividade anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-white text-[#0F172A] p-3 rounded-full border-2 border-[#C7D2FE] shadow-lg hover:border-[#4C6FFF] hover:text-[#4C6FFF] transition duration-200 z-10 md:opacity-0 md:group-hover/carousel:opacity-100 focus:opacity-100 active:scale-95 cursor-pointer"
            aria-label="Próxima atividade"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators / Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx 
                    ? 'bg-[#4C6FFF] w-6' 
                    : 'bg-[#C7D2FE] hover:bg-[#4C6FFF]/50'
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
          </div>
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
