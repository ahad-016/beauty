import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ArrowRight } from 'lucide-react';
import { InstagramIcon } from '../components/InstagramIcon';
import { GALLERY_ITEMS, SALON_INFO } from '../data/salonData';
import { GalleryItem } from '../types';

interface GalleryPageProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBookingModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolios' },
    { id: 'hair', label: 'Haute Coiffure & Balayage' },
    { id: 'makeup', label: 'Bridal & Editorial Makeup' },
    { id: 'nails', label: 'Russian Nails & Art' },
    { id: 'ambiance', label: 'Studio Sanctuary' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen py-12 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#14151B] border border-[#D4AF37]/30 text-xs text-[#E8C172] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Lucknow Artistry Showcase</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
          Transformations & Lookbook
        </h1>

        <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mt-2 font-light">
          A visual curation of dimensional hair color, high-definition bridal artistry, Russian manicures, and our private luxury ambiance.
        </p>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#E8C172] text-[#0D0E12] shadow-md'
                  : 'bg-[#14151B] text-[#D8D2C6] hover:bg-[#1F212A] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="luxury-card rounded-2xl overflow-hidden group cursor-pointer relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] uppercase font-semibold text-[#E8C172]">
                  {item.category}
                </div>

                <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="font-serif text-lg font-bold text-white leading-snug group-hover:text-[#E8C172] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Community Banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#14151B] to-[#1F212A] border border-[#D4AF37]/30 text-center space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white mx-auto shadow-lg">
            <InstagramIcon className="w-6 h-6" />
          </div>

          <h3 className="font-serif text-2xl font-bold text-white">
            Tag Your Glam Moment
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
            Snap your post-makeover mirror selfie or slow-mo hair flip in our salon. Tag <strong className="text-[#E8C172]">#GlamWithRuchi</strong> & <strong className="text-[#E8C172]">{SALON_INFO.instagramHandle}</strong> to get featured on our feed!
          </p>

          <div className="pt-2">
            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 luxury-btn-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              <span>Follow @ruchistudio2026</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-2xl w-full bg-[#14151B] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">
                {selectedImage.category} Portfolio
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                {selectedImage.title}
              </h3>
              <p className="text-xs text-gray-300 mt-2">
                {selectedImage.subtitle}
              </p>

              <div className="pt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const title = selectedImage.title;
                    setSelectedImage(null);
                    onOpenBookingModal(title);
                  }}
                  className="luxury-btn-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center"
                >
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-black" />
                  Request This Style
                </button>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="luxury-btn-outline px-6 py-2.5 rounded-xl text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
