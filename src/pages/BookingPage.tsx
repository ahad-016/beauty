import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, Clock, Calendar, 
  User, Phone, MessageCircle, ArrowRight, ArrowLeft, ShieldCheck, MapPin 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES_DATA, SALON_INFO, TIME_SLOTS, FRIDAY_TIME_SLOTS } from '../data/salonData';
import { ServiceItem } from '../types';

export const BookingPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('women-hair');
  const [selectedServices, setSelectedServices] = useState<ServiceItem[]>([SERVICES_DATA[0]]);
  
  // Date setup - default to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [selectedDate, setSelectedDate] = useState<string>(tomorrow.toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  
  // Client details
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Check if date is Friday
  const isFriday = selectedDate ? new Date(selectedDate).getDay() === 5 : false;
  const currentSlots = isFriday ? FRIDAY_TIME_SLOTS : TIME_SLOTS;

  const categories = [
    { id: 'women-hair', name: "Women's Haute Coiffure", icon: "✨" },
    { id: 'men-grooming', name: "Men's Executive Lounge", icon: "✂️" },
    { id: 'skin-aesthetics', name: 'Clinical Skin & Facials', icon: "🌸" },
    { id: 'hands-feet', name: 'Russian Nails & Pedicures', icon: "💅" },
  ];

  const categoryServices = SERVICES_DATA.filter(
    (s) => s.category === selectedCategory
  );

  const toggleService = (service: ServiceItem) => {
    if (selectedServices.some((s) => s.id === service.id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#E8C172', '#FFFFFF', '#FFF1CA']
      });
    } catch {
      // fallback
    }

    setIsSubmitted(true);

    const serviceNames = selectedServices.map((s) => s.name).join(', ');
    const whatsappMessage = `✨ *LUXURY APPOINTMENT RESERVATION* ✨
🏛 *Salon:* Glam with Ruchi Unisex Salon, Lucknow
📍 *Location:* Near Matiyari Chauraha, Faizabad Road
👤 *Client Name:* ${clientName}
📱 *Phone:* ${clientPhone}
💅 *Selected Services:* ${serviceNames}
📅 *Reserved Date:* ${selectedDate}
⏰ *Preferred Time:* ${selectedTime}
📝 *Client Notes:* ${specialNotes || 'Standard booking'}

Please confirm availability for this slot. Thank you!`;

    const whatsappUrl = `https://wa.me/${SALON_INFO.cleanPhone}?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  return (
    <div className="min-h-screen py-12 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#14151B] border border-[#D4AF37]/30 text-xs text-[#E8C172] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Frictionless Multi-Step Concierge</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Reserve Your Salon Slot
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Instant booking confirmation directly routed to Ruchi's desk on WhatsApp (+91 88873 49599).
          </p>
        </div>

        {/* Step Indicator Progress Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-white/10 z-0" />
            
            {[
              { num: 1, label: 'Category' },
              { num: 2, label: 'Treatments' },
              { num: 3, label: 'Date & Time' },
              { num: 4, label: 'Confirm' }
            ].map((step) => {
              const isDone = currentStep > step.num;
              const isCurrent = currentStep === step.num;
              return (
                <div key={step.num} className="relative z-10 flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isDone
                        ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                        : isCurrent
                        ? 'bg-[#E8C172] text-black border-2 border-white shadow-[0_0_15px_rgba(232,193,114,0.6)]'
                        : 'bg-[#14151B] text-gray-400 border border-white/20'
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="w-4 h-4" /> : step.num}
                  </div>
                  <span className={`text-[11px] mt-1.5 font-medium ${isCurrent ? 'text-[#E8C172]' : 'text-gray-400'}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Wizard Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          
          {/* Left Column: Active Step Controls */}
          <div className="lg:col-span-8 bg-[#14151B] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {!isSubmitted ? (
              <div>
                
                {/* STEP 1: Select Category */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Step 1: Choose Experience Realm
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        Select the salon department you wish to book with.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {categories.map((cat) => (
                        <div
                          key={cat.id}
                          onClick={() => {
                            setSelectedCategory(cat.id);
                            // Auto select the first service in this category
                            const first = SERVICES_DATA.find((s) => s.category === cat.id);
                            if (first) setSelectedServices([first]);
                          }}
                          className={`p-5 rounded-2xl cursor-pointer border transition-all flex items-center space-x-4 ${
                            selectedCategory === cat.id
                              ? 'bg-gradient-to-r from-[#1F212A] to-[#14151B] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                              : 'bg-[#181920] border-white/10 hover:border-white/25'
                          }`}
                        >
                          <span className="text-2xl p-2 rounded-xl bg-black/40">{cat.icon}</span>
                          <div>
                            <h4 className="font-serif text-base font-bold text-white">
                              {cat.name}
                            </h4>
                            <p className="text-[11px] text-gray-400 mt-0.5">
                              {SERVICES_DATA.filter((s) => s.category === cat.id).length} luxury protocols
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 flex justify-end">
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="luxury-btn-gold px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
                      >
                        <span>Continue to Services</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Select Specific Services */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-white">
                          Step 2: Select Treatments
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">
                          You can select multiple treatments for a combined session.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {categoryServices.map((service) => {
                        const isSelected = selectedServices.some((s) => s.id === service.id);
                        return (
                          <div
                            key={service.id}
                            onClick={() => toggleService(service)}
                            className={`p-4 rounded-2xl cursor-pointer border transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-[#1F212A] border-[#D4AF37] shadow-md'
                                : 'bg-[#14151B] border-white/10 hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-5 h-5 rounded-md flex items-center justify-center border text-black text-xs ${
                                  isSelected ? 'bg-[#D4AF37] border-[#D4AF37]' : 'border-gray-500'
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-4 h-4" />}
                              </div>

                              <div>
                                <h4 className="text-sm font-serif font-bold text-white">
                                  {service.name}
                                </h4>
                                <div className="flex items-center space-x-3 text-xs text-gray-400 mt-0.5">
                                  <span className="text-[#E8C172] font-semibold">{service.price}</span>
                                  <span>•</span>
                                  <span>{service.duration}</span>
                                </div>
                              </div>
                            </div>

                            <span className="text-xs font-semibold text-gray-300">
                              {isSelected ? 'Selected' : '+ Add'}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="luxury-btn-outline px-6 py-3 rounded-full text-xs font-semibold flex items-center space-x-1.5"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        onClick={() => setCurrentStep(3)}
                        className="luxury-btn-gold px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
                      >
                        <span>Pick Date & Time</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Pick Date & Time */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Step 3: Select Date & Time Slot
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        Operating Hours: Mon - Sun (10 AM - 10 PM) | Friday: (1 PM - 10 PM)
                      </p>
                    </div>

                    {/* Date Picker */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 flex items-center">
                        <Calendar className="w-4 h-4 text-[#D4AF37] mr-1.5" />
                        Choose Date:
                      </label>
                      <input
                        type="date"
                        required
                        value={selectedDate}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-[#1F212A] border border-white/20 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                      />
                      {isFriday && (
                        <p className="text-xs text-[#E8C172] mt-1.5">
                          Friday hours: Studio opens at 1:00 PM for afternoon & evening services.
                        </p>
                      )}
                    </div>

                    {/* Time Slot Grid */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 flex items-center">
                        <Clock className="w-4 h-4 text-[#D4AF37] mr-1.5" />
                        Choose Preferred Slot:
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {currentSlots.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                              selectedTime === slot
                                ? 'bg-[#D4AF37] text-black font-bold shadow-md'
                                : 'bg-[#1F212A] text-gray-300 hover:bg-[#2A2D3A] border border-white/10'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 flex justify-between">
                      <button
                        onClick={() => setCurrentStep(2)}
                        className="luxury-btn-outline px-6 py-3 rounded-full text-xs font-semibold flex items-center space-x-1.5"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        onClick={() => setCurrentStep(4)}
                        className="luxury-btn-gold px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2"
                      >
                        <span>Final Details</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 4: Client Details & WhatsApp Confirmation */}
                {currentStep === 4 && (
                  <form onSubmit={handleFinalSubmit} className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white">
                        Step 4: Client Verification
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        Please provide your contact details to generate your reservation receipt.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                          <User className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Shalini Roy"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                          <Phone className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 88873 49599"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                        Specific Consultation Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="e.g. Sensitive scalp, previous bleach history, wedding outfit color..."
                        value={specialNotes}
                        onChange={(e) => setSpecialNotes(e.target.value)}
                        className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                      />
                    </div>

                    <div className="pt-4 flex justify-between items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="luxury-btn-outline px-6 py-3 rounded-full text-xs font-semibold flex items-center space-x-1.5"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="flex-1 luxury-btn-gold py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-2xl"
                      >
                        <MessageCircle className="w-4 h-4 text-black" />
                        <span>Confirm via WhatsApp (+91 88873 49599)</span>
                      </button>
                    </div>
                  </form>
                )}

              </div>
            ) : (
              /* Success / Confetti Receipt */
              <div className="text-center py-10 space-y-5 animate-scaleUp">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center text-green-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-3xl font-bold text-white">
                  Reservation Receipt Dispatched!
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#E8C172]">{clientName}</strong>. Your WhatsApp chat has been triggered to <strong className="text-white">+91 88873 49599</strong>. Ruchi's desk will confirm your reserved slot instantly.
                </p>

                <div className="p-6 rounded-2xl bg-[#1F212A] border border-[#D4AF37]/30 text-left text-xs space-y-2.5 max-w-md mx-auto shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-gray-400">Date & Slot:</span>
                    <span className="text-[#E8C172] font-semibold">{selectedDate} at {selectedTime}</span>
                  </div>
                  <div className="border-b border-white/10 pb-2">
                    <span className="text-gray-400 block mb-1">Selected Services:</span>
                    {selectedServices.map((s) => (
                      <p key={s.id} className="text-white font-medium pl-2">
                        • {s.name} ({s.price})
                      </p>
                    ))}
                  </div>
                  <div className="pt-1 text-gray-400 flex items-center">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37] mr-1 shrink-0" />
                    <span>Near Matiyari Chauraha, Faizabad Road, Lucknow</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/${SALON_INFO.cleanPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="luxury-btn-gold px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center"
                  >
                    Open WhatsApp Chat Now
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                    }}
                    className="luxury-btn-outline px-6 py-3 rounded-full text-xs font-semibold"
                  >
                    Book Another Service
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Live Booking Summary Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="luxury-card rounded-3xl p-6 border border-[#D4AF37]/30 shadow-xl">
              <h4 className="font-serif text-lg font-bold text-white border-b border-white/10 pb-3 flex items-center justify-between">
                <span>Reservation Summary</span>
                <span className="text-xs text-[#E8C172] font-normal font-sans">
                  {selectedServices.length} Selected
                </span>
              </h4>

              {/* Items List */}
              <div className="py-4 space-y-3">
                {selectedServices.map((s) => (
                  <div key={s.id} className="flex justify-between items-start text-xs">
                    <div>
                      <p className="text-white font-medium">{s.name}</p>
                      <p className="text-gray-400 text-[11px]">{s.duration}</p>
                    </div>
                    <span className="text-[#E8C172] font-semibold shrink-0 ml-2">
                      {s.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Date & Time display */}
              <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-gray-300">
                  <span>Selected Date:</span>
                  <span className="text-white font-medium">{selectedDate}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Selected Time:</span>
                  <span className="text-[#E8C172] font-semibold">{selectedTime}</span>
                </div>
              </div>

              {/* Assurances */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-[11px] text-gray-400">
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>No prepayment needed</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  <span>Hospital-grade autoclave sterilized tools</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Matiyari Chauraha, Faizabad Road</span>
                </div>
              </div>
            </div>

            {/* Direct Studio Call Card */}
            <div className="p-5 rounded-2xl bg-[#14151B] border border-white/10 text-center space-y-2">
              <p className="text-xs text-gray-400">Prefer direct telephone conversation?</p>
              <a
                href={`tel:${SALON_INFO.cleanPhone}`}
                className="inline-flex items-center space-x-2 text-xs text-[#E8C172] font-bold hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Ruchi at +91 88873 49599</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
