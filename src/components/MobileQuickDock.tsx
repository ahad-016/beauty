import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface MobileQuickDockProps {
  onOpenBookingModal: () => void;
}

export const MobileQuickDock: React.FC<MobileQuickDockProps> = ({ onOpenBookingModal }) => {
  const whatsappBookingUrl = `https://wa.me/${SALON_INFO.cleanPhone}?text=${encodeURIComponent(
    "Hello Glam with Ruchi! ✨ I would like to inquire about booking an appointment at your Lucknow salon."
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 pb-safe bg-[#0D0E12]/95 backdrop-blur-xl border-t border-[#D4AF37]/30 shadow-[0_-5px_25px_rgba(0,0,0,0.8)]">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Direct Call */}
        <a
          href={`tel:${SALON_INFO.cleanPhone}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#14151B] border border-white/15 text-white flex items-center justify-center space-x-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs font-semibold">Call Now</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={whatsappBookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#1F2C24] border border-[#25D366]/40 text-[#4ADE80] flex items-center justify-center space-x-1.5 active:scale-95 transition-transform shadow-[0_0_15px_rgba(37,211,102,0.15)]"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={onOpenBookingModal}
          className="flex-1 py-2.5 px-3 rounded-xl luxury-btn-gold text-black flex items-center justify-center space-x-1.5 active:scale-95 transition-transform font-bold"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-xs">Book</span>
        </button>
      </div>
    </div>
  );
};
