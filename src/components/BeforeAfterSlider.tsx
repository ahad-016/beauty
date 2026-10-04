import React, { useState } from 'react';
import { Sparkles, ArrowLeftRight, CheckCircle2 } from 'lucide-react';
import { BEFORE_AFTER_ITEMS } from '../data/salonData';

interface BeforeAfterSliderProps {
  onBookService: (serviceName: string) => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onBookService }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const currentItem = BEFORE_AFTER_ITEMS[activeItemIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="w-full">
      {/* Category Switch Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1.5 rounded-full bg-[#14151B] border border-[#D4AF37]/30 shadow-lg">
          {BEFORE_AFTER_ITEMS.map((item, index) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(index);
                setSliderPosition(50);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                activeItemIndex === index
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E8C172] text-[#0D0E12] shadow-md'
                  : 'text-[#D8D2C6] hover:text-white'
              }`}
            >
              {index === 0 ? '✨ Hair Botox & Silk Infusion' : '🌸 Hydra-Infusion Glass Skin'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Split Comparison Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        {/* Interactive Comparison Viewport */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl select-none group">
            {/* After Image (Background) */}
            <img
              src={currentItem.afterImage}
              alt={`${currentItem.title} After`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-[#D4AF37]/40 text-[#E8C172] text-xs font-semibold uppercase tracking-wider">
              After • Glam Finish
            </div>

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentItem.beforeImage}
                alt={`${currentItem.title} Before`}
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider">
                Before
              </div>
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FFF1CA] via-[#D4AF37] to-[#B89025] z-20 pointer-events-none shadow-[0_0_12px_rgba(212,175,55,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#0D0E12] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                <ArrowLeftRight className="w-4 h-4 text-[#E8C172]" />
              </div>
            </div>

            {/* Native Invisible Range Input over the viewport for dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Drag to compare before and after"
            />
          </div>

          <div className="flex justify-between items-center text-xs text-gray-400 mt-3 px-2">
            <span>‹ Slide left to reveal After</span>
            <span className="text-[#E8C172] font-medium flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              Interactive Live Preview
            </span>
            <span>Slide right to inspect Before ›</span>
          </div>
        </div>

        {/* Narrative & Transformation Breakdown */}
        <div className="lg:col-span-5 space-y-5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#14151B] border border-[#D4AF37]/30 text-xs text-[#E8C172]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Lucknow Verified Transformation</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
            {currentItem.title}
          </h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            {currentItem.subtitle}
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center space-x-3 text-xs text-gray-300">
              <span className="w-24 text-gray-400 font-medium">Service Protocol:</span>
              <span className="text-[#E8C172] font-semibold">{currentItem.service}</span>
            </div>
            <div className="flex items-center space-x-3 text-xs text-gray-300">
              <span className="w-24 text-gray-400 font-medium">Studio Time:</span>
              <span className="text-white">{currentItem.duration}</span>
            </div>
            <div className="flex items-start space-x-3 text-xs text-gray-300">
              <span className="w-24 text-gray-400 font-medium shrink-0">Client Verdict:</span>
              <div className="flex items-start space-x-1.5 text-white/90">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{currentItem.verdict}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onBookService(currentItem.service)}
              className="luxury-btn-gold px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 mr-2 text-black" />
              Book This Transformation
            </button>
            <a
              href={`https://wa.me/918887349599?text=${encodeURIComponent(
                `Hello Glam with Ruchi! ✨ I saw the before/after results for "${currentItem.title}" and would love to consult with Ruchi.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-btn-outline px-5 py-3 rounded-full text-xs font-semibold flex items-center justify-center"
            >
              WhatsApp Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
