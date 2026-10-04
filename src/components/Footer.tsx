import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Clock, Heart, 
  ShieldCheck, Sparkles, Send, CheckCircle2 
} from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setTimeout(() => {
        setNewsletterEmail('');
        setNewsletterSuccess(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#0A0B0E] border-t border-[#D4AF37]/20 text-[#D8D2C6] pt-16 pb-24 md:pb-16 relative overflow-hidden">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Ethos */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center bg-[#14151B]">
                <span className="font-serif text-lg font-bold text-[#E8C172]">G</span>
                <span className="font-serif text-xs text-white/80">R</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-wide">
                  GLAM with Ruchi
                </h3>
                <p className="text-[10px] text-[#D4AF37] tracking-widest uppercase font-medium">
                  Premier Unisex Salon & Bridal Studio • Lucknow
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Curated Elegance. Bespoke Styling. Lucknow's premier unisex sanctuary for haute coiffure, HD bridal makeovers, and executive gentleman grooming.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] bg-[#14151B] border border-[#D4AF37]/30 text-[#E8C172]">
                <ShieldCheck className="w-3 h-3 mr-1 text-[#D4AF37]" />
                Autoclave Sterilized Tools
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] bg-[#14151B] border border-pink-500/30 text-pink-300">
                <Heart className="w-3 h-3 mr-1 text-pink-400 fill-pink-400" />
                Woman-Owned Studio
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] bg-[#14151B] border border-purple-500/30 text-purple-300">
                🌈 LGBTQ+ Safe Sanctuary
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-3">
              Sanctuary Menu
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link to="/services" className="hover:text-[#E8C172] transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 mr-2" />
                  French Balayage & Foilayage
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E8C172] transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 mr-2" />
                  Nanoplastia & Hair Botox
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E8C172] transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 mr-2" />
                  Executive Beard Sculpting & Fade
                </Link>
              </li>
              <li>
                <Link to="/bridal-makeover" className="hover:text-[#E8C172] transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 mr-2" />
                  HD Royal Bridal Makeovers
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E8C172] transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 mr-2" />
                  Korean Glass Skin & Hydra-Facials
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E8C172] transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 mr-2" />
                  Russian E-File Dry Manicure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours & Location */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wider mb-4 border-l-2 border-[#D4AF37] pl-3">
              Location & Hours
            </h4>
            
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Near Matiyari Chauraha</p>
                  <p>Faizabad Road, Chinhat, Lucknow, UP 226028</p>
                  <p className="text-[11px] text-[#E8C172] mt-0.5 font-mono">
                    Plus Code: {SALON_INFO.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Operating Hours</p>
                  <p>Mon - Sun: 10:00 AM – 10:00 PM</p>
                  <p className="text-[#E8C172]">Friday: 1:00 PM – 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${SALON_INFO.cleanPhone}`}
                  className="text-white hover:text-[#E8C172] font-semibold transition-colors"
                >
                  +91 88873 49599
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#14151B] border border-[#D4AF37]/40 text-[#E8C172] text-[11px] hover:bg-[#D4AF37] hover:text-black transition-all"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Festive Offers & Instagram */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wider border-l-2 border-[#D4AF37] pl-3">
              Bridal & Festive Club
            </h4>
            <p className="text-xs text-gray-400">
              Subscribe for exclusive wedding season privileges, pre-bridal packages, and festive makeover vouchers.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#14151B] border border-white/15 focus:border-[#D4AF37] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 p-1.5 bg-[#D4AF37] text-black rounded-lg hover:bg-[#E8C172] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {newsletterSuccess && (
                <div className="flex items-center text-[11px] text-green-400 space-x-1.5 animate-fadeIn">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Welcome to the Glam Club! Privilege card saved.</span>
                </div>
              )}
            </form>

            <div className="pt-2">
              <p className="text-[11px] text-gray-400 mb-2">Connect on Instagram:</p>
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs text-[#E8C172] hover:text-white transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <span className="font-mono">{SALON_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>
            © {new Date().getFullYear()} Glam with Ruchi Unisex Salon. All Rights Reserved. Crafted for Lucknow's finest.
          </p>

          <div className="flex items-center space-x-5 text-gray-400 text-[11px]">
            <span>Matiyari Chauraha, Faizabad Road, Lucknow</span>
            <span>•</span>
            <span className="text-[#E8C172]">5.0 ★ Google Verified</span>
            <span>•</span>
            <span>Hygiene Assured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
