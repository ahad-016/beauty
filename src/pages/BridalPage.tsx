import React, { useState } from 'react';
import { 
  Sparkles, Crown, CheckCircle2, Calendar, MapPin, 
  User, Phone, MessageCircle, Heart, Star, ShieldCheck, ArrowRight 
} from 'lucide-react';
import { BRIDAL_PACKAGES, SALON_INFO } from '../data/salonData';

interface BridalPageProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const BridalPage: React.FC<BridalPageProps> = ({ onOpenBookingModal }) => {
  const [brideName, setBrideName] = useState('');
  const [phone, setPhone] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [venue, setVenue] = useState('');
  const [events, setEvents] = useState<string[]>(['Wedding / Pheras']);
  const [guestCount, setGuestCount] = useState('Only Bride');
  const [packageInterest, setPackageInterest] = useState('The Royal Awadhi Bride (Signature Suite)');
  const [notes, setNotes] = useState('');

  const toggleEvent = (eventStr: string) => {
    if (events.includes(eventStr)) {
      setEvents(events.filter((e) => e !== eventStr));
    } else {
      setEvents([...events, eventStr]);
    }
  };

  const handleBridalSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `👑 *ROYAL BRIDAL & GROOM SUITE INQUIRY* 👑
🏛 *Studio:* Glam with Ruchi, Matiyari Chauraha, Lucknow
👤 *Bride / Groom:* ${brideName}
📱 *Contact:* ${phone}
📅 *Wedding / Event Date:* ${weddingDate}
📍 *Venue / Location:* ${venue || 'Lucknow Studio'}
💍 *Desired Package:* ${packageInterest}
🎉 *Functions Selected:* ${events.join(', ')}
👥 *Family / Bridesmaids Makeovers:* ${guestCount}
📝 *Bridal Vision / Outfit details:* ${notes || 'Looking for personalized consultation'}

Please let me know Ruchi's availability for a private consultation!`;

    const whatsappUrl = `https://wa.me/${SALON_INFO.cleanPhone}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen py-12 pb-24">
      
      {/* Editorial Hero Banner */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-[#14151B] border border-[#D4AF37]/40 text-xs text-[#E8C172] mb-4">
          <Crown className="w-3.5 h-3.5" />
          <span>Bespoke Couture Bridal & Groom Lounge</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
          The Royal <span className="gold-text-gradient italic">Awadhi Couture</span> Suite
        </h1>

        <p className="text-sm sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
          Where timeless Awadhi royal elegance harmonizes with contemporary high-fashion makeup and master hair artistry. Curated by Ruchi for unforgettable weddings.
        </p>

        {/* Feature stats */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 pt-8 text-xs text-gray-300">
          <span className="flex items-center">
            <Star className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37] mr-1.5" />
            18-Hour Waterproof Hold
          </span>
          <span className="flex items-center">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] mr-1.5" />
            HD 4K Camera & Video Ready
          </span>
          <span className="flex items-center">
            <Heart className="w-4 h-4 text-pink-400 mr-1.5" />
            Private VIP Dressing Chamber
          </span>
        </div>
      </div>

      {/* Bridal Lookbook Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
            The Lookbook
          </span>
          <h2 className="font-serif text-3xl font-bold text-white mt-1">
            Bridal & Groom Signature Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BRIDAL_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`luxury-card rounded-3xl overflow-hidden flex flex-col justify-between relative ${
                pkg.popular ? 'border-[#D4AF37]/60 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Requested
                </div>
              )}

              {/* Package Header Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14151B] via-transparent to-black/30" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[11px] text-[#E8C172] font-semibold uppercase tracking-wider">
                    {pkg.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                    {pkg.title}
                  </h3>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-baseline justify-between pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs text-gray-400">All-Inclusive Experience</span>
                      <p className="font-serif text-3xl font-bold text-[#E8C172]">
                        {pkg.price}
                      </p>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {pkg.idealFor}
                    </span>
                  </div>

                  <p className="text-xs text-gray-300 italic pt-4 mb-4">
                    "{pkg.tagline}"
                  </p>

                  <div className="space-y-2.5">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setPackageInterest(pkg.title);
                      // Scroll smoothly to inquiry form
                      document.getElementById('bridal-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 luxury-btn-gold py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5"
                  >
                    <Crown className="w-3.5 h-3.5 text-black" />
                    <span>Inquire for Wedding</span>
                  </button>

                  <button
                    onClick={() => onOpenBookingModal(pkg.title)}
                    className="luxury-btn-outline px-4 py-3 rounded-xl text-xs font-semibold"
                  >
                    Direct Slot
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bridal Consultation Routing Form */}
      <div id="bridal-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#14151B] border border-[#D4AF37]/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background ambient glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              Direct WhatsApp Concierge
            </span>
            <h2 className="font-serif text-3xl font-bold text-white mt-1">
              Book Your Private Bridal Consultation
            </h2>
            <p className="text-xs text-gray-300 mt-2 leading-relaxed">
              Fill in your celebration specifications below. This routes directly to Ruchi's personal bridal coordinator on WhatsApp (+91 88873 49599).
            </p>
          </div>

          <form onSubmit={handleBridalSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                  <User className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                  Bride / Groom Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Radhika Agarwal"
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                  className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                  <Phone className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 88873 49599"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                  Wedding / Function Date *
                </label>
                <input
                  type="date"
                  required
                  value={weddingDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center">
                  <MapPin className="w-3.5 h-3.5 text-[#D4AF37] mr-1" />
                  Wedding Venue / Hotel in Lucknow
                </label>
                <input
                  type="text"
                  placeholder="e.g. Taj Mahal Hotel, Faizabad Road Lawn, Studio"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Select Celebrations */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">
                Select Functions Required:
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  'Wedding / Pheras',
                  'Cocktail / Sangeet',
                  'Haldi Ceremony',
                  'Mehendi Night',
                  'Reception Gala',
                  'Pre-Bridal Spa Week'
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => toggleEvent(item)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      events.includes(item)
                        ? 'bg-[#D4AF37] text-black font-semibold shadow-md'
                        : 'bg-[#1F212A] text-gray-300 hover:bg-[#2A2D3A] border border-white/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Package Interest */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Preferred Suite Package:
              </label>
              <select
                value={packageInterest}
                onChange={(e) => setPackageInterest(e.target.value)}
                className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
              >
                {BRIDAL_PACKAGES.map((pkg) => (
                  <option key={pkg.id} value={pkg.title} className="bg-[#14151B]">
                    {pkg.title} ({pkg.price})
                  </option>
                ))}
              </select>
            </div>

            {/* Personal Vision Notes */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Outfit Colors, Jewelry Details or Vision
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Red and gold traditional lehenga, desire dewy skin with defined eyes, need dupatta pinning..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#1F212A] border border-white/15 focus:border-[#D4AF37] rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full luxury-btn-gold py-4 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-2xl"
            >
              <MessageCircle className="w-4 h-4 text-black" />
              <span>Route Bridal Inquiry to WhatsApp (+91 88873 49599)</span>
            </button>
          </form>

        </div>
      </div>

    </div>
  );
};
