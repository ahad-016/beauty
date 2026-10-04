import { ServiceItem, ReviewItem, GalleryItem, BridalPackage } from '../types';

export const SALON_INFO = {
  name: "Glam with Ruchi Unisex Salon",
  hindiName: "ग्लैम विथ रुचि यूनिसेक्स सैलून",
  instagramHandle: "@ruchistudio2026",
  instagramUrl: "https://www.instagram.com/ruchistudio2026",
  tagline: "Curated Elegance. Bespoke Styling. Lucknow's Premier Unisex Sanctuary.",
  subTagline: "Where Parisian precision meets royal Awadhi bridal opulence.",
  phone: "+91 88873 49599",
  cleanPhone: "918887349599",
  whatsappUrl: "https://wa.me/918887349599",
  address: "Near Matiyari Chauraha, Faizabad Road, Lucknow, Uttar Pradesh 226028",
  landmark: "Beside Matiyari Crossing, Main Faizabad Road, adjacent to Chinhat corridor",
  plusCode: "V2HQ+62 Lucknow",
  googleMapsUrl: "https://maps.google.com/?q=Matiyari+Chauraha+Faizabad+Road+Lucknow+226028",
  hoursRegular: "Mon - Sun: 10:00 AM – 10:00 PM",
  hoursFriday: "Fri: 1:00 PM – 10:00 PM",
  rating: 5.0,
  reviewCount: 54,
  features: [
    "5.0 ★ Google Verified Studio",
    "Woman-Owned & Led Studio",
    "LGBTQ+ Safe & Inclusive Sanctuary",
    "Autoclave Hospital-Grade Sterilized Tools",
    "Premium International Formulations (K18, L'Oréal Professionnel, Olaplex, MAC)"
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  // Women's Hair
  {
    id: "wh-1",
    name: "French Balayage & Foilayage Signature",
    category: "women-hair",
    price: "₹6,499 onwards",
    duration: "180 - 240 mins",
    description: "Custom hand-painted French dimensional balayage tailored to Indian skin tones, finished with an acid gloss toner and bond repair.",
    consultationNote: "Complimentary face-mapping color consultation included.",
    benefits: ["Seamless regrowth transition", "Bespoke caramel/hazelnut toners", "Zero harsh demarcations"],
    popular: true,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wh-2",
    name: "Nanoplastia Organic Hair Glass Treatment",
    category: "women-hair",
    price: "₹5,999 onwards",
    duration: "180 mins",
    description: "Formaldehyde-free revolutionary amino acid smoothing therapy that straightens and seals mirror-like shine while revitalizing damaged cortex.",
    consultationNote: "Safe for chemically treated and color-treated hair.",
    benefits: ["Zero noxious fumes", "Lasts 5-7 months", "Deep internal lipid restoration"],
    popular: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wh-3",
    name: "K18 Molecular Biomimetic Hair Spa",
    category: "women-hair",
    price: "₹2,499",
    duration: "60 mins",
    description: "Reverses polypeptide chain breakage at the molecular core. Reconnects broken keratin chains for immediate bounce and tensile strength.",
    consultationNote: "Recommended post-bleach or chemical treatments.",
    benefits: ["Instant elasticity restore", "Non-heavy clean feel", "Scientifically proven reversal"],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wh-4",
    name: "Haute Couture Precision Haircut & Styling",
    category: "women-hair",
    price: "₹999",
    duration: "45 mins",
    description: "Bespoke scissor work taking into account bone structure, hair density, and everyday lifestyle, followed by a luxury blowout.",
    consultationNote: "Includes scalp massage and luxury texturizing styling.",
    benefits: ["Volume enhancement", "Effortless air-dry movement", "Personalized advice"],
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "wh-5",
    name: "Keratin Caviar Silk Infusion",
    category: "women-hair",
    price: "₹4,499 onwards",
    duration: "150 mins",
    description: "Intense frizz-control treatment enriched with caviar extract, sealing moisture against Lucknow's humid summers and monsoon air.",
    consultationNote: "Customizable curl-retention or sleek pin-straight finish.",
    benefits: ["100% frizz control", "Velvety touch", "Humidity resistant"],
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80"
  },

  // Men's Executive Grooming
  {
    id: "mg-1",
    name: "Executive Beard Sculpting & Hot Towel Ozone Ritual",
    category: "men-grooming",
    price: "₹599",
    duration: "40 mins",
    description: "Razor precision contouring with hot steamed herbal towel, calming tea tree pre-shave elixir, and organic argan beard butter massage.",
    consultationNote: "Tailored to accentuate jawline and facial symmetry.",
    benefits: ["Razor burn prevention", "Deep pore unclogging", "Sharp editorial lines"],
    popular: true,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mg-2",
    name: "Signature Skin-Fade / Scissor Craft Cut",
    category: "men-grooming",
    price: "₹499",
    duration: "45 mins",
    description: "Seamless graduation taper, textured crop or modern gentleman's comb-over tailored with Japanese steel shears and Wahl detailers.",
    consultationNote: "Includes refreshing scalp tonic massage and styling.",
    benefits: ["Razor-clean edges", "Balanced head contouring", "Matte clay finish"],
    popular: true,
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mg-3",
    name: "Charcoal Detox Detan & Brightening Facial",
    category: "men-grooming",
    price: "₹1,299",
    duration: "50 mins",
    description: "Activated Japanese binchotan charcoal peel-off to lift stubborn urban pollution, sun tan, and blackheads without drying out skin.",
    consultationNote: "Perfect prior to weddings, parties, and corporate meetings.",
    benefits: ["Instant radiance", "Shrinks enlarged pores", "Zero greasiness"],
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "mg-4",
    name: "Men's Anti-Hairfall Peptide Scalp Therapy",
    category: "men-grooming",
    price: "₹1,799",
    duration: "60 mins",
    description: "High-frequency microcurrent scalp stimulation with copper peptides and red clover extract to strengthen hair follicles.",
    consultationNote: "Addresses crown thinning and dry flaky scalp.",
    benefits: ["Stimulates micro-circulation", "Controls excess sebum", "Soothes inflammation"],
    image: "https://images.unsplash.com/photo-1517832606589-7629c339590a?auto=format&fit=crop&w=800&q=80"
  },

  // Skin & Aesthetics
  {
    id: "sa-1",
    name: "Medical-Grade Hydra-Infusion Glass Glow",
    category: "skin-aesthetics",
    price: "₹2,999",
    duration: "75 mins",
    description: "7-step vortex vacuum extraction with multi-acid peels, hyaluronic acid saturation, and cryo-cold hammer for pore shrinking.",
    consultationNote: "Zero downtime with immediate reflective glass skin finish.",
    benefits: ["Deep blackhead removal", "Ultra-deep hydration", "Camera-ready glow"],
    popular: true,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sa-2",
    name: "24K Aurum Gold Radiance Facial",
    category: "skin-aesthetics",
    price: "₹3,499",
    duration: "80 mins",
    description: "Pure colloidal 24K gold foil infusion combined with saffron and licorice root extracts designed to restore regal luminosity.",
    consultationNote: "The favored bridal and groom pre-event treatment.",
    benefits: ["Boosts cellular collagen", "Fades hyperpigmentation", "Royal radiance"],
    popular: true,
    image: "https://images.unsplash.com/photo-1512290900672-1f55b9e07833?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sa-3",
    name: "Korean Glass Skin & Spicule Collagen Treatment",
    category: "skin-aesthetics",
    price: "₹3,899",
    duration: "90 mins",
    description: "Natural marine microneedle spicules infused with EGF epidermal growth factors, centella asiatica, and polydeoxyribonucleotide (PDRN).",
    consultationNote: "Recommended 48-72 hours before your major celebration.",
    benefits: ["Firms skin elasticity", "Tightens open pores", "De-puffs and sculpts contours"],
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sa-4",
    name: "AHA Lactic & Glycolic Milk Glow Peel",
    category: "skin-aesthetics",
    price: "₹1,899",
    duration: "45 mins",
    description: "Gentle non-invasive chemical exfoliation dissolving dead stratum corneum cells and evening patchy Lucknow summer sun damage.",
    consultationNote: "Sunscreen application mandatory post-service.",
    benefits: ["Zero peeling flakiness", "Brightens complexion", "Ultra smooth canvas for makeup"],
    image: "https://images.unsplash.com/photo-1522337094346-24e548819a5c?auto=format&fit=crop&w=800&q=80"
  },

  // Hands & Feet Spa
  {
    id: "hf-1",
    name: "Russian Dry E-File Luxury Manicure",
    category: "hands-feet",
    price: "₹1,299",
    duration: "60 mins",
    description: "Painless high-precision diamond bit electric filing for ultra-clean cuticle pockets, rubber base coat, and flawless perimeter gel paint.",
    consultationNote: "Provides up to 4 weeks of clean outgrowth.",
    benefits: ["Painless cuticle contouring", "Chip-resistant durability", "High-fashion aesthetic"],
    popular: true,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hf-2",
    name: "Couture Gel Extensions & Chrome Glaze Art",
    category: "hands-feet",
    price: "₹2,499 onwards",
    duration: "100 mins",
    description: "Full sculpted soft-gel tips with custom almond/coffin shaping, Hailey Bieber glazed donut chrome finish or custom bridal 3D stones.",
    consultationNote: "Bring your dream bridal moodboard or let Ruchi design it.",
    benefits: ["Zero nail bed damage", "Gloss that will not scratch", "Photogenic perfection"],
    popular: true,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hf-3",
    name: "Warm Rose & Paraffin Reflexology Pedicure",
    category: "hands-feet",
    price: "₹1,499",
    duration: "60 mins",
    description: "Epsom salt soak with damask rose petals, callus peel buffing, warm peach paraffin bath, and 20-minute acupressure leg massage.",
    consultationNote: "Relieves tired feet and deeply softens cracked heels.",
    benefits: ["Deep muscular relaxation", "Baby-soft heels", "Boosts lymphatic circulation"],
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80"
  }
];

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: "bp-1",
    title: "The Royal Awadhi Bride (Signature Suite)",
    subtitle: "Ruchi's Masterpiece Experience",
    tagline: "Unmatched royalty crafted for the modern Indian bride.",
    price: "₹18,999",
    idealFor: "Wedding Day Main Ceremony & Pheras",
    features: [
      "Ultra-HD Airbrush or Silicon Base Makeup with Waterproof 18-hour hold",
      "Bespoke Bridal Hair Sculpting with Fresh Floral / Jewelry placement",
      "Luxe 3D Mink Lashes & Lens Assistance",
      "Dupatta Draping & Traditional Jewelry Setting with precision pins",
      "Complimentary Pre-Bridal K18 Hair Bond Repair & 24K Gold Glow Mini-Facial",
      "On-location or Studio Private VIP Bridal Suite with refreshments"
    ],
    popular: true,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bp-2",
    title: "The Couture Reception Glamour",
    subtitle: "High-Fashion Editorial Aesthetic",
    tagline: "Glass-skin finish with sultry smokey eyes and Hollywood waves.",
    price: "₹12,499",
    idealFor: "Reception, Sangeet & Cocktail Night",
    features: [
      "High-Definition Glass Finish Makeup tailored for 4K video cameras",
      "Hollywood Glam Waves, Texturized Ponytail or Modern French Twist",
      "Custom Contouring to sculpt cheekbones and collarbones",
      "Saree / Gown / Lehenga Draping with steam iron touch-up",
      "Touch-up Survival Kit for the evening"
    ],
    popular: false,
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bp-3",
    title: "Sun-Kissed Haldi & Mehendi Minimalist",
    subtitle: "Dewy & Fresh Floral Radiance",
    tagline: "Weightless breathability with romantic floral braids.",
    price: "₹8,499",
    idealFor: "Haldi, Mehendi, Engagement & Chuda Ceremonies",
    features: [
      "Weightless Dewy Glow Makeup resisting turmeric stains and tears",
      "Romantic Textured Braid with baby's breath or gajra integration",
      "Subtle peachy lip stain and waterproof kohl",
      "Outfit Draping & Flower Jewelry pinning"
    ],
    popular: false,
    image: "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "bp-4",
    title: "The Regal Groom Grooming Suite",
    subtitle: "Executive Pre-Wedding Sophistication",
    tagline: "Subtle elegance to look commanding beside your bride.",
    price: "₹5,499",
    idealFor: "Grooms & Best Men",
    features: [
      "High-Definition Camera-Ready Invisible Skin Detan & Concealing",
      "Precision Beard Architecture & Hot Herbal Steam Razor Contouring",
      "Executive Scissor Haircut with Matte Texture Sculpting",
      "Pre-Wedding Charcoal Pore Detox & Scalp Rebalancing Therapy",
      "Safa / Turban Tying & Stole Draping Assistance"
    ],
    popular: false,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Shambhavi Verma",
    role: "Bride • Gomti Nagar, Lucknow",
    rating: 5,
    date: "2 weeks ago",
    content: "Ruchi ma'am gave me the bridal makeover of my dreams for my wedding at Faizabad Road! She understands skin tones like no other artist in Lucknow. My makeup didn't budge through 8 hours of pheras and emotional moments. Everyone praised how radiant yet natural I looked.",
    verified: true,
    service: "Royal Awadhi Bridal Suite"
  },
  {
    id: "rev-2",
    author: "Aditya Pratap Singh",
    role: "Client • Chinhat, Lucknow",
    rating: 5,
    date: "1 month ago",
    content: "Finding an ultra-clean, classy unisex salon in Matiyari Chauraha was difficult until Glam with Ruchi opened. Got a skin fade and beard sculpting done before my brother's engagement. The hot towel ozone steam and attention to detail are on par with 5-star hotel salons.",
    verified: true,
    service: "Executive Beard & Haircut"
  },
  {
    id: "rev-3",
    author: "Ananya Saxena",
    role: "Client • Indira Nagar, Lucknow",
    rating: 5,
    date: "3 weeks ago",
    content: "Their Nanoplastia hair treatment completely transformed my damaged, frizzy hair into silk. Zero smell or burning eyes, and Ruchi personally guided me on post-care products. Definitely the premier salon on Faizabad Road.",
    verified: true,
    service: "Nanoplastia Organic Treatment"
  },
  {
    id: "rev-4",
    author: "Dr. Tanya Mehrotra",
    role: "Dermatologist • Lucknow",
    rating: 5,
    date: "2 months ago",
    content: "As a doctor, hygiene is my highest priority. I was thoroughly impressed to see autoclave-sterilized pouches opened right in front of me for my Russian manicure. Ruchi's salon sets an exemplary standard for safety and luxury.",
    verified: true,
    service: "Russian Dry Manicure"
  },
  {
    id: "rev-5",
    author: "Rohan & Priyanshu",
    role: "Regular Clients • Matiyari, Lucknow",
    rating: 5,
    date: "A month ago",
    content: "The staff is polite, courteous, and respectful. The ambiance has soft jazz, ambient gold lighting, and smells divine. Plus, booking appointments via WhatsApp is seamless. 5/5 stars well deserved!",
    verified: true,
    service: "Hydra-Infusion & Detan"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Couture Awadhi Bridal Transformation",
    category: "makeup",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Custom HD Airbrush with Kundan Mathapatti Setting",
    featured: true
  },
  {
    id: "gal-2",
    title: "French Caramel Dimensional Balayage",
    category: "hair",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Soft seamless transition on virgin dark brown hair",
    featured: true
  },
  {
    id: "gal-3",
    title: "Russian Glazed Donut Nail Sculpting",
    category: "nails",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Clean e-file Russian cuticle finish with chrome pearl",
    featured: false
  },
  {
    id: "gal-4",
    title: "Executive Modern Gentleman Fade",
    category: "hair",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Razor-sharp low fade and matte contour styling",
    featured: false
  },
  {
    id: "gal-5",
    title: "Private VIP Bridal Studio Sanctuary",
    category: "ambiance",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Ambient lighting, velvet lounge and private dressing chambers",
    featured: true
  },
  {
    id: "gal-6",
    title: "Cocktail Evening Smokey Eye & Waves",
    category: "makeup",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Sultry graphic liner with dewy reflective skin",
    featured: false
  },
  {
    id: "gal-7",
    title: "Hair Botox Silk Infusion",
    category: "hair",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Liquid glass sheen restoring chemically sensitized hair",
    featured: false
  },
  {
    id: "gal-8",
    title: "Minimalist Pastel Haldi Look",
    category: "makeup",
    image: "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Romantic textured braid laced with fresh baby's breath",
    featured: false
  },
  {
    id: "gal-9",
    title: "Sterilized Clean Nail Bar Ambiance",
    category: "ambiance",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80",
    subtitle: "Medical-grade hospital sterilization in a luxury setting",
    featured: false
  }
];

export const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"
];

export const FRIDAY_TIME_SLOTS = [
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
  "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM", "09:00 PM"
];

export const BEFORE_AFTER_ITEMS = [
  {
    id: "trans-1",
    title: "Russian Keratin Hair Botox Transformation",
    subtitle: "From extreme bleach frizzle to reflective liquid silk",
    beforeImage: "https://images.unsplash.com/photo-1584297091622-af8e5fd9e5b9?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    service: "Nanoplastia & Hair Botox",
    duration: "Single Session • 3 Hours",
    verdict: "Zero frizz, 100% moisture retention, mirror gloss finish."
  },
  {
    id: "trans-2",
    title: "Hydra-Infusion Glass Skin Radiance",
    subtitle: "From tired, sun-tanned skin to plump porcelain glow",
    beforeImage: "https://images.unsplash.com/photo-1512290900672-1f55b9e07833?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    service: "Korean Glass Glow & 24K Gold Peeling",
    duration: "75 Minutes",
    verdict: "Pores minimized, instant hydration, camera ready with zero makeup."
  }
];
