import React, { useState } from 'react';
import { 
  MapPin, Phone, Clock, Mail, MessageCircle, 
  Car, Send, CheckCircle2, Navigation, Compass, Sparkles 
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactPage: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `✨ *INQUIRY / FEEDBACK FOR GLAM WITH RUCHI* ✨
👤 *Name:* ${formName}
📱 *Phone:* ${formPhone}
💬 *Message:* ${formMessage}

Sent from website contact page.`;

    const whatsappUrl = `https://wa.me/${SALON_INFO.cleanPhone}?text=${encodeURIComponent(formattedMessage)}`;
    setFormSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setFormSuccess(false);
      setFormName('');
      setFormPhone('');
      setFormMessage('');
    }, 1000);
  };

  return (
    <div className="min-h-screen py-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#14151B] border border-[#D4AF37]/30 text-xs text-[#E8C172] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Matiyari Chauraha Sanctuary</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Find & Connect With Us
          </h1>

          <p className="text-sm text-gray-300 mt-2 font-light">
            Conveniently situated near Matiyari Crossing on Faizabad Road, Lucknow. Dedicated parking, valet assistance, and private VIP suites.
          </p>
        </div>

        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Address & Plus Code */}
          <div className="luxury-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#E8C172] mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-1">
                Studio Address
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                {SALON_INFO.address}
              </p>
              <p className="text-[11px] text-[#E8C172] mt-2 font-mono">
                Plus Code: {SALON_INFO.plusCode}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#E8C172] hover:text-white flex items-center"
              >
                <span>Navigate via Google Maps</span>
                <Navigation className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          {/* Card 2: Operating Hours */}
          <div className="luxury-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#E8C172] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-1">
                Operating Timings
              </h3>
              <div className="text-xs text-gray-300 space-y-1.5 mt-2">
                <p className="flex justify-between">
                  <span className="text-white">Monday - Sunday:</span>
                  <span>10:00 AM – 10:00 PM</span>
                </p>
                <p className="flex justify-between text-[#E8C172]">
                  <span className="font-semibold">Friday Special:</span>
                  <span>1:00 PM – 10:00 PM</span>
                </p>
                <p className="text-[11px] text-gray-400 pt-1">
                  *Last walk-in appointment accepted at 9:00 PM
                </p>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10">
              <span className="text-[11px] text-green-400 flex items-center">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-ping" />
                Open Today for Pre-Bookings
              </span>
            </div>
          </div>

          {/* Card 3: Direct Concierge Phone & WhatsApp */}
          <div className="luxury-card p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#E8C172] mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-1">
                Direct Contact
              </h3>
              <p className="text-xs text-gray-300 mb-2">
                Click to call directly or connect over WhatsApp:
              </p>
              <a
                href={`tel:${SALON_INFO.cleanPhone}`}
                className="font-mono text-base font-bold text-[#E8C172] hover:text-white block transition-colors"
              >
                +91 88873 49599
              </a>
              <p className="text-[11px] text-gray-400 mt-1">
                Instagram: {SALON_INFO.instagramHandle}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex gap-2">
              <a
                href={`https://wa.me/${SALON_INFO.cleanPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-btn-gold px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1 text-black" />
                WhatsApp
              </a>
              <a
                href={`tel:${SALON_INFO.cleanPhone}`}
                className="luxury-btn-outline px-4 py-1.5 rounded-lg text-xs font-semibold"
              >
                Call
              </a>
            </div>
          </div>
        </div>

        {/* Map & Parking Guide Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Interactive Embedded Google Map */}
          <div className="lg:col-span-7 bg-[#14151B] border border-[#D4AF37]/30 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-4 bg-[#1F212A] border-b border-white/10 flex justify-between items-center text-xs">
              <span className="font-serif font-bold text-white flex items-center">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] mr-1.5" />
                Live Map Location • Matiyari Chauraha, Lucknow
              </span>
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8C172] hover:underline flex items-center"
              >
                Full Screen Map ↗
              </a>
            </div>

            {/* Embedded Google Maps iframe centered at Matiyari Chauraha, Lucknow */}
            <div className="relative aspect-[16/10] w-full">
              <iframe
                title="Glam with Ruchi Salon Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.341492211925!2d81.01859345!3d26.8848464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be173426e2547%3A0xbef5336bf9b59ca5!2sMatiyari%20Crossing%2C%20Faizabad%20Rd%2C%20Lucknow%2C%20Uttar%20Pradesh%20226028!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-4 bg-[#14151B] text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-2">
              <span>Coordinates: 26.8837° N, 81.0256° E (Faizabad Road Corridor)</span>
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-btn-gold px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider"
              >
                Get Step-by-Step Directions
              </a>
            </div>
          </div>

          {/* Right: Parking, Transit & Landmarks Guide */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-card p-6 rounded-2xl space-y-4">
              <h3 className="font-serif text-xl font-bold text-white flex items-center">
                <Car className="w-5 h-5 text-[#D4AF37] mr-2" />
                Transit & Parking Guide
              </h3>

              <div className="space-y-3 text-xs text-gray-300">
                <div className="p-3 rounded-xl bg-[#14151B] border border-white/5 space-y-1">
                  <p className="text-white font-semibold flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 mr-1.5" />
                    Complimentary Valet & Customer Parking
                  </p>
                  <p className="text-gray-400 text-[11px]">
                    Dedicated secure parking space available directly in front of the studio building for both four-wheelers and two-wheelers.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#14151B] border border-white/5 space-y-1">
                  <p className="text-white font-semibold">Prominent Landmarks</p>
                  <p className="text-gray-400 text-[11px]">
                    Located adjacent to Matiyari Chauraha, close to Chinhat Market junction, prominent colleges on Faizabad Road, and easily accessible from Gomti Nagar & Indira Nagar.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#14151B] border border-white/5 space-y-1">
                  <p className="text-white font-semibold">Cab & Auto Drop-off</p>
                  <p className="text-gray-400 text-[11px]">
                    Set your destination on Uber / Ola / Rapido as "Matiyari Chauraha, Faizabad Road". Drivers drop off right by the main entrance.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-[#14151B] border border-[#D4AF37]/30 p-6 rounded-2xl">
              <h4 className="font-serif text-lg font-bold text-white mb-2">
                Quick Message to Salon Desk
              </h4>
              <p className="text-xs text-gray-400 mb-4">
                Have a query about a bridal package or hair treatment? Send us a quick note.
              </p>

              <form onSubmit={handleContactSubmit} className="space-y-3">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full bg-[#1F212A] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone / WhatsApp"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-[#1F212A] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    required
                    placeholder="What would you like to ask?"
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full bg-[#1F212A] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full luxury-btn-gold py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5"
                >
                  <Send className="w-3.5 h-3.5 text-black" />
                  <span>Send via WhatsApp</span>
                </button>

                {formSuccess && (
                  <p className="text-[11px] text-green-400 text-center animate-fadeIn">
                    Redirecting to WhatsApp...
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
