import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, Sparkles, ShieldCheck, Heart, ArrowRight, 
  MapPin, Phone, Award, CheckCircle2, 
  Clock, Scissors, Gem, Crown, Compass
} from 'lucide-react';
import { InstagramIcon } from '../components/InstagramIcon';
import { SALON_INFO, SERVICES_DATA, REVIEWS_DATA, GALLERY_ITEMS } from '../data/salonData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

interface HomePageProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBookingModal }) => {
  const signatureServices = SERVICES_DATA.filter((s) => s.popular).slice(0, 4);
  const featuredGallery = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
        {/* Background Image with Luxury Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85"
            alt="Glam with Ruchi Luxury Unisex Studio Ambiance"
            className="w-full h-full object-cover object-center scale-105 transform animate-subtleZoom opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E12] via-[#0D0E12]/80 to-[#0D0E12]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D0E12]/40 to-[#0D0E12]" />
        </div>

        {/* Ambient Gold Particle / Shimmer Effect Glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E8C172]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#14151B]/90 border border-[#D4AF37]/40 shadow-xl mb-6">
            <span className="flex text-[#E8C172]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </span>
            <span className="text-xs font-semibold text-white tracking-wide">
              5.0 ★ Rated in Lucknow (54+ Verified Reviews)
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="hidden sm:inline text-xs text-[#E8C172] font-medium">
              Matiyari Chauraha
            </span>
          </div>

          {/* Luxury English Brand Moniker */}
          <p className="text-xs sm:text-sm font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-medium mb-3">
            Glam with Ruchi • Luxury Unisex Salon & Bridal Studio
          </p>

          {/* Main Editorial Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            The Art of <br />
            <span className="gold-text-gradient italic">Refined Glamour</span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-sm sm:text-lg md:text-xl text-[#D8D2C6]/90 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Curated Elegance. Bespoke Styling. Lucknow's premier unisex sanctuary for haute coiffure, HD bridal makeovers, and executive gentleman grooming.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
            <Link
              to="/book-appointment"
              className="w-full sm:w-auto luxury-btn-gold px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-2xl"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Instant Booking</span>
            </Link>

            <Link
              to="/services"
              className="w-full sm:w-auto luxury-btn-outline px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </Link>
          </div>

          {/* Key Value Pill Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/10 text-left">
            <div className="p-3 rounded-xl bg-[#14151B]/60 border border-white/5 flex items-center space-x-2.5">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Sterilized Tools</p>
                <p className="text-[10px] text-gray-400">Hospital-Grade Autoclave</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#14151B]/60 border border-white/5 flex items-center space-x-2.5">
              <Crown className="w-5 h-5 text-[#E8C172] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">VIP Bridal Lounge</p>
                <p className="text-[10px] text-gray-400">Private Suite with Dressing</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#14151B]/60 border border-white/5 flex items-center space-x-2.5">
              <Heart className="w-5 h-5 text-pink-400 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Woman-Owned</p>
                <p className="text-[10px] text-gray-400">Personal Guidance by Ruchi</p>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#14151B]/60 border border-white/5 flex items-center space-x-2.5">
              <Gem className="w-5 h-5 text-[#D4AF37] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Global Formulations</p>
                <p className="text-[10px] text-gray-400">K18, L'Oréal & Olaplex</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SIGNATURE EXPERIENCE HIGHLIGHTS */}
      <section className="py-20 bg-[#0D0E12] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Signature Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2 mb-4">
              Curated Masterpieces for Hair & Skin
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Every appointment is a tailored ritual of consultation, precision execution, and sensory indulgence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Highlight 1: Women's Haute Coiffure */}
            <div className="luxury-card rounded-2xl overflow-hidden group flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80"
                  alt="French Balayage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-[#E8C172] border border-[#D4AF37]/30">
                  Haute Coiffure
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#E8C172] transition-colors">
                    French Balayage & Nanoplastia
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Dimensional hand-painted tones and organic zero-formaldehyde smoothing for liquid-silk hair.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#E8C172] font-semibold">From ₹5,999</span>
                  <button
                    onClick={() => onOpenBookingModal("French Balayage & Foilayage Signature")}
                    className="text-xs font-bold text-white hover:text-[#D4AF37] flex items-center"
                  >
                    Reserve <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Highlight 2: Men's Executive Grooming */}
            <div className="luxury-card rounded-2xl overflow-hidden group flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                  alt="Men's Executive Grooming"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-[#E8C172] border border-[#D4AF37]/30">
                  Men's Lounge
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#E8C172] transition-colors">
                    Executive Beard & Fade Lounge
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    Hot herbal ozone steam, razor symmetry, Japanese steel taper fades, and scalp therapy.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#E8C172] font-semibold">From ₹499</span>
                  <button
                    onClick={() => onOpenBookingModal("Executive Beard Sculpting & Hot Towel Ozone Ritual")}
                    className="text-xs font-bold text-white hover:text-[#D4AF37] flex items-center"
                  >
                    Reserve <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Highlight 3: HD Bridal Makeovers */}
            <div className="luxury-card rounded-2xl overflow-hidden group flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
                  alt="HD Bridal Makeover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-[#E8C172] border border-[#D4AF37]/30">
                  Bridal Suite
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#E8C172] transition-colors">
                    Royal Awadhi Bridal Makeover
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    18-hour waterproof airbrush, traditional mathapatti jewelry pinning, and private VIP chamber.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#E8C172] font-semibold">From ₹12,499</span>
                  <Link
                    to="/bridal-makeover"
                    className="text-xs font-bold text-white hover:text-[#D4AF37] flex items-center"
                  >
                    Lookbook <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Highlight 4: Aesthetics & Russian Manicures */}
            <div className="luxury-card rounded-2xl overflow-hidden group flex flex-col justify-between">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
                  alt="Hydra Glass Skin"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-[#E8C172] border border-[#D4AF37]/30">
                  Skin & Nails
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#E8C172] transition-colors">
                    Korean Glass Glow & Russian Nails
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">
                    7-step vortex vacuum hydra infusions and flawless e-file dry cuticle contouring.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-[#E8C172] font-semibold">From ₹1,299</span>
                  <button
                    onClick={() => onOpenBookingModal("Medical-Grade Hydra-Infusion Glass Glow")}
                    className="text-xs font-bold text-white hover:text-[#D4AF37] flex items-center"
                  >
                    Reserve <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E8C172] hover:text-white transition-colors"
            >
              <span>View Full Services & Price Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE BEFORE / AFTER SHOWCASE */}
      <section className="py-20 bg-[#14151B]/60 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Real Client Evidence
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2 mb-4">
              Witness The Transformation
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Drag the interactive slider to inspect the transformative power of our clinical-grade salon therapies.
            </p>
          </div>

          <BeforeAfterSlider onBookService={(service) => onOpenBookingModal(service)} />

        </div>
      </section>

      {/* 4. VERIFIED GOOGLE SOCIAL PROOF */}
      <section className="py-20 bg-[#0D0E12] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Overall Rating */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-2">
                <Star className="w-4 h-4 fill-[#D4AF37]" />
                <span>Google Social Proof</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Adored by Lucknow's Discerning Clients
              </h2>
            </div>

            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-[#14151B] border border-[#D4AF37]/30 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-black font-bold flex items-center justify-center text-lg font-serif">
                  5.0
                </div>
                <div>
                  <div className="flex text-[#E8C172]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-[11px] text-gray-400">
                    54+ Verified Google Reviews
                  </p>
                </div>
              </div>

              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex luxury-btn-outline px-4 py-2.5 rounded-xl text-xs font-semibold"
              >
                Write a Review ↗
              </a>
            </div>
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.slice(0, 3).map((review) => (
              <div key={review.id} className="luxury-card p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-serif text-base font-semibold text-white">
                        {review.author}
                      </h4>
                      <p className="text-[11px] text-gray-400">{review.role}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] bg-green-900/30 text-green-400 border border-green-500/30">
                      Verified
                    </span>
                  </div>

                  <div className="flex text-[#E8C172] mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed italic">
                    "{review.content}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="text-[#E8C172] font-medium">{review.service}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. INSTAGRAM AESTHETIC FEED PREVIEW */}
      <section className="py-20 bg-[#14151B]/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Visual Journal
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Follow The Aesthetic On Instagram
              </h2>
            </div>

            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-0 inline-flex items-center space-x-2 text-xs font-semibold text-[#E8C172] hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>{SALON_INFO.instagramHandle}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {featuredGallery.map((item) => (
              <a
                key={item.id}
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center">
                  <div>
                    <InstagramIcon className="w-5 h-5 text-[#E8C172] mx-auto mb-1" />
                    <p className="text-[10px] text-white font-medium line-clamp-2">
                      {item.title}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-6">
            <span className="text-xs text-gray-400">
              Tag us in your stories with <strong className="text-[#E8C172]">#GlamWithRuchi</strong> & <strong className="text-[#E8C172]">#RuchiStudioLucknow</strong>
            </span>
          </div>

        </div>
      </section>

      {/* 6. VIP SANCTUARY INVITATION / BANNER */}
      <section className="py-20 bg-gradient-to-r from-[#14151B] via-[#1F212A] to-[#14151B] border-t border-b border-[#D4AF37]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D0E12] border border-[#D4AF37]/40 text-xs text-[#E8C172]">
            <Crown className="w-3.5 h-3.5" />
            <span>Lucknow's High-End Unisex Destination</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Ready to Experience Refined Sophistication?
          </h2>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Located right near Matiyari Chauraha on Faizabad Road. Walk into an atmosphere of calming luxury, sterilized equipment, and tailored artistry.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/book-appointment"
              className="w-full sm:w-auto luxury-btn-gold px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-2xl"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Book Your Slot Today</span>
            </Link>

            <a
              href={`https://wa.me/${SALON_INFO.cleanPhone}?text=${encodeURIComponent(
                "Hello Glam with Ruchi! ✨ I'd like to ask a quick question before booking my visit."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto luxury-btn-outline px-7 py-3.5 rounded-full text-xs font-semibold flex items-center justify-center space-x-2"
            >
              <span>Chat with Ruchi on WhatsApp</span>
            </a>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37] mr-1.5" />
              10:00 AM – 10:00 PM (Fri: 1 PM - 10 PM)
            </span>
            <span className="flex items-center">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] mr-1.5" />
              Matiyari Chauraha, Faizabad Road, Lucknow
            </span>
            <span className="flex items-center">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] mr-1.5" />
              +91 88873 49599
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};
