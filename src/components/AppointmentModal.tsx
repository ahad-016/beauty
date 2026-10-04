import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, SALON_INFO, TIME_SLOTS, FRIDAY_TIME_SLOTS } from '../data/salonData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
}) => {
  const [category, setCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('11:00 AM');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (prefilledService) {
      setSelectedService(prefilledService);
    } else {
      setSelectedService(SERVICES_DATA[0].name);
    }

    // Default to tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setDate(dateStr);
  }, [prefilledService, isOpen]);

  if (!isOpen) return null;

  // Determine if the selected date is a Friday
  const isFriday = date ? new Date(date).getDay() === 5 : false;
  const currentSlots = isFriday ? FRIDAY_TIME_SLOTS : TIME_SLOTS;

  const filteredServices = category === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === category);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#E8C172', '#FFFFFF', '#F3DE9E']
      });
    } catch {
      // fallback
    }

    setSubmitted(true);

    // Format WhatsApp message
    const message = `✨ *LUXURY APPOINTMENT INQUIRY* ✨
🏛 *Salon:* Glam with Ruchi Unisex Salon, Matiyari Chauraha, Lucknow
👤 *Client Name:* ${clientName}
📱 *Phone:* ${clientPhone}
💅 *Selected Service:* ${selectedService}
📅 *Preferred Date:* ${date}
⏰ *Time Slot:* ${timeSlot}
📝 *Special Requests:* ${notes || 'None'}

Please confirm my reservation slot! Thank you.`;

    const whatsappUrl = `https://wa.me/${SALON_INFO.cleanPhone}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab after a brief delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#14151B] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 shadow-[0_10px_50px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white bg-black/40 hover:bg-[#D4AF37]/20 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1F212A] border border-[#D4AF37]/30 text-xs text-[#E8C172] mb-2 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant VIP Booking Confirmation</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                Reserve Your Bespoke Experience
              </h3>
              <p className="text-xs text-[#D8D2C6]/80 mt-1">
                Glam with Ruchi Unisex Salon • Matiyari Chauraha, Lucknow
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category Quick Filter */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  1. Select Experience Realm
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {[
                    { id: 'all', label: 'All Services' },
                    { id: 'women-hair', label: "Women's Hair" },
                    { id: 'men-grooming', label: "Men's Grooming" },
                    { id: 'skin-aesthetics', label: 'Skin & Nails' },
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat.id}
                      onClick={() => setCategory(cat.id)}
                      className={`py-1.5 px-2 rounded-lg text-[11px] font-medium transition-all ${
                        category === cat.id
                          ? 'bg-[#D4AF37] text-black font-bold shadow-sm'
                          : 'bg-[#1F212A] text-gray-300 hover:bg-[#2A2D3A]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specific Service Dropdown */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  2. Choose Specific Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-colors"
                >
                  {filteredServices.map((service) => (
                    <option key={service.id} value={service.name} className="bg-[#14151B] text-white">
                      {service.name} ({service.price} • {service.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                  />
                  {isFriday && (
                    <span className="text-[10px] text-[#E8C172] mt-1 block">
                      Note: Friday timings are 1:00 PM – 10:00 PM
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                    Preferred Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                  >
                    {currentSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#14151B] text-white">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Client Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                    <User className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shreya Sharma"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Special Notes / Bridal Event Details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Wedding ceremony on 24th, need patch test for hair color..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full luxury-btn-gold py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Confirm Slot via WhatsApp (+91 88873 49599)</span>
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-2">
                  No advance payment required. Slot instantly confirmed with Ruchi's desk.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-4 animate-scaleUp">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center text-green-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-white">
              Appointment Request Sent!
            </h3>

            <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong className="text-[#E8C172]">{clientName}</strong>. Your reservation for <strong className="text-white">{selectedService}</strong> on <strong className="text-white">{date}</strong> at <strong className="text-white">{timeSlot}</strong> has been drafted.
            </p>

            <div className="p-4 rounded-2xl bg-[#1F212A] border border-[#D4AF37]/30 text-left text-xs space-y-2 max-w-sm mx-auto">
              <p className="text-gray-400">
                <span className="text-white font-medium">Salon:</span> Glam with Ruchi Unisex Salon
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">Address:</span> Near Matiyari Chauraha, Faizabad Road, Lucknow
              </p>
              <p className="text-[#E8C172] font-semibold">
                Direct Desk: +91 88873 49599
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-2.5 justify-center">
              <a
                href={`https://wa.me/${SALON_INFO.cleanPhone}?text=${encodeURIComponent(
                  `Hello Glam with Ruchi! ✨ I'm confirming my reservation for ${selectedService} on ${date} at ${timeSlot}. My name is ${clientName}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-btn-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center"
              >
                <MessageCircle className="w-4 h-4 mr-1.5 text-black" />
                Open WhatsApp Chat
              </a>
              <button
                onClick={handleResetAndClose}
                className="luxury-btn-outline px-6 py-2.5 rounded-xl text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
