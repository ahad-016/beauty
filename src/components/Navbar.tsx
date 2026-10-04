import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Calendar, Menu, X, Star, Sparkles, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services & Menu', path: '/services' },
    { name: 'Bridal & Groom Suite', path: '/bridal-makeover' },
    { name: 'Transformations', path: '/gallery' },
    { name: 'Contact & Map', path: '/contact' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#14151B] border-b border-[#D4AF37]/20 text-[11px] md:text-xs text-[#D8D2C6] py-1.5 px-4 tracking-wider">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-[#E8C172] font-medium">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37] mr-1" />
              5.0 ★ Rated in Lucknow (54+ Verified Reviews)
            </span>
            <span className="hidden md:inline text-white/30">•</span>
            <span className="hidden md:flex items-center text-white/80">
              <MapPin className="w-3 h-3 text-[#D4AF37] mr-1" />
              Near Matiyari Chauraha, Faizabad Road
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline text-xs text-[#E8C172]/90">
              Woman-Owned Studio • LGBTQ+ Inclusive
            </span>
            <a
              href={`tel:${SALON_INFO.cleanPhone}`}
              className="text-[#E8C172] hover:text-white flex items-center font-semibold transition-colors"
            >
              <Phone className="w-3 h-3 mr-1" />
              +91 88873 49599
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0D0E12]/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3'
            : 'bg-[#0D0E12]/70 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Monogram */}
          <Link to="/" className="group flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full border border-[#D4AF37]/60 flex items-center justify-center bg-gradient-to-br from-[#1F212A] to-[#0D0E12] shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:border-[#E8C172] transition-colors">
              <span className="font-serif text-lg font-bold text-[#E8C172] tracking-tighter">G</span>
              <span className="font-serif text-xs font-light text-white/80 -ml-0.5">R</span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#D4AF37] rounded-full animate-pulse" />
            </div>
            <div>
              <div className="flex items-baseline space-x-1.5">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#F3DE9E] transition-colors">
                  GLAM
                </span>
                <span className="text-[11px] font-sans tracking-widest text-[#D4AF37] uppercase font-light">
                  with Ruchi
                </span>
              </div>
              <p className="text-[9px] text-[#D8D2C6]/70 tracking-widest uppercase -mt-0.5">
                Unisex Salon & Bridal Studio • Lucknow
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm tracking-wide transition-all relative py-1 ${
                    isActive
                      ? 'text-[#E8C172] font-semibold'
                      : 'text-[#D8D2C6] hover:text-[#F3DE9E]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              to="/book-appointment"
              className="luxury-btn-gold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-black" />
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => onOpenBookingModal()}
              className="sm:hidden p-2 rounded-full bg-[#D4AF37] text-black text-xs font-bold"
              aria-label="Book appointment"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#F7F5F0] hover:text-[#D4AF37] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-xl animate-fadeIn">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#14151B] border-l border-[#D4AF37]/30 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="font-serif text-lg font-bold text-white">GLAM with Ruchi</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-full text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="py-6 space-y-4">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 text-base transition-colors ${
                        isActive
                          ? 'text-[#E8C172] font-semibold border-l-2 border-[#D4AF37] pl-3'
                          : 'text-[#D8D2C6] hover:text-white pl-3'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Footer with Actions */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <Link
                to="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full luxury-btn-gold py-3 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center shadow-lg"
              >
                <Calendar className="w-4 h-4 mr-2 text-black" />
                Book Appointment
              </Link>

              <a
                href={`tel:${SALON_INFO.cleanPhone}`}
                className="w-full luxury-btn-outline py-2.5 rounded-xl text-center text-xs font-semibold flex items-center justify-center"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-[#D4AF37]" />
                Call +91 88873 49599
              </a>

              <div className="text-center pt-2">
                <p className="text-[11px] text-gray-400">
                  Faizabad Road, Matiyari Chauraha, Lucknow
                </p>
                <p className="text-[10px] text-[#D4AF37] mt-0.5 font-medium">
                  5.0 ★ Google Rated • 54+ Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
