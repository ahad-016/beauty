import React, { useState } from 'react';
import { 
  Sparkles, Clock, CheckCircle2, Search, ArrowRight, 
  Scissors, User, Heart, ShieldCheck, HelpCircle 
} from 'lucide-react';
import { SERVICES_DATA, SALON_INFO } from '../data/salonData';

interface ServicesPageProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBookingModal }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'women-hair', label: "Women's Haute Hair" },
    { id: 'men-grooming', label: "Men's Executive Grooming" },
    { id: 'skin-aesthetics', label: 'Clinical Skin & Glow' },
    { id: 'hands-feet', label: 'Russian Nails & Spa Feet' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesQuery = 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen py-12 pb-24">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#14151B] border border-[#D4AF37]/30 text-xs text-[#E8C172]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Lucknow Price Menu</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            The Bespoke Services Menu
          </h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
            Transparent pricing, medical-grade hygiene, and premium formulations tailored to individual hair and skin profiles.
          </p>

          {/* Search Bar */}
          <div className="pt-2 max-w-md mx-auto">
            <div className="relative">
              <Search className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search services (e.g. Balayage, Hydra, Beard, Nails)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#14151B] border border-white/15 focus:border-[#D4AF37] rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-2.5 text-xs text-gray-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E8C172] text-[#0D0E12] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                  : 'bg-[#14151B] text-[#D8D2C6] hover:bg-[#1F212A] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="luxury-card rounded-2xl overflow-hidden flex flex-col sm:flex-row group"
              >
                {/* Image */}
                <div className="sm:w-2/5 relative aspect-square sm:aspect-auto overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {service.popular && (
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider">
                      Signature
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-[#E8C172] transition-colors">
                        {service.name}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-4 text-xs text-gray-400 mb-3">
                      <span className="text-[#E8C172] font-semibold text-sm">
                        {service.price}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 text-gray-400 mr-1" />
                        {service.duration}
                      </span>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed mb-3">
                      {service.description}
                    </p>

                    {/* Consultation Note */}
                    {service.consultationNote && (
                      <div className="p-2.5 rounded-lg bg-[#14151B] border border-white/5 text-[11px] text-[#E8C172]/90 mb-3 flex items-start space-x-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{service.consultationNote}</span>
                      </div>
                    )}

                    {/* Key Benefits */}
                    {service.benefits && service.benefits.length > 0 && (
                      <div className="space-y-1 mb-4">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center space-x-1.5 text-[11px] text-gray-300">
                            <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onOpenBookingModal(service.name)}
                      className="flex-1 luxury-btn-gold py-2 rounded-xl text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-black" />
                      <span>Book This Service</span>
                    </button>

                    <a
                      href={`https://wa.me/${SALON_INFO.cleanPhone}?text=${encodeURIComponent(
                        `Hello Glam with Ruchi! ✨ I'd like more details regarding "${service.name}".`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-[#14151B] border border-white/10 hover:border-[#D4AF37] text-[#E8C172] text-xs flex items-center"
                      title="Ask on WhatsApp"
                    >
                      WhatsApp
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-sm text-gray-400">
              No services found matching "{searchQuery}". Try browsing by categories above.
            </p>
          </div>
        )}
      </div>

      {/* Hygiene Promise Callout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 rounded-3xl bg-[#14151B] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
              The Glam With Ruchi Guarantee
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Medical-Grade Hospital Sterilization
            </h3>
            <p className="text-xs text-gray-300 max-w-lg leading-relaxed">
              Every scissor, cuticle nipper, and e-file bit is sealed in medical-grade indicator pouches and sterilized in our on-site high-pressure autoclave.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onOpenBookingModal()}
              className="luxury-btn-gold px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center"
            >
              Book Consultation
            </button>
            <a
              href={`tel:${SALON_INFO.cleanPhone}`}
              className="luxury-btn-outline px-6 py-3 rounded-full text-xs font-semibold flex items-center justify-center"
            >
              Call +91 88873 49599
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
