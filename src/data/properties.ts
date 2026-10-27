import { Property } from '../types/property';

export const VASTU_VIHAR_CONTACT = {
  brandName: 'Vastu Vihar',
  phone: '+91 98765 43210',
  phoneClean: '919876543210',
  whatsappNumber: '919876543210',
  email: 'sales@vastuvihar-munger.com',
  address: 'Munger Terminal Road, Near Air India Flyover, Munger, Bihar - 811201',
  officeHours: 'Monday to Saturday: 9:30 AM – 7:00 PM | Sunday: 10:00 AM – 5:00 PM',
  googleMapsQuery: 'Munger Terminal Road Near Air India Flyover Munger',
};

export const PROPERTIES: Property[] = [
  {
    id: 'vv-imperial-duplex',
    title: 'Vastu Vihar Imperial Duplex',
    subtitle: 'Independent 4BHK Luxury Villa with Private Garden',
    category: 'residential',
    type: 'Duplex Bungalow',
    price: '₹ 85.00 Lakh',
    priceRaw: 8500000,
    location: 'Munger Terminal Road',
    landmark: '500m from Air India Flyover',
    area: '2,450 sq.ft',
    carpetArea: '2,100 sq.ft',
    facing: 'North-East (Ishan Kon - Auspicious Vastu)',
    possession: 'Ready to Move',
    status: 'Ready to Move',
    bhk: '4 BHK',
    bathrooms: 4,
    parking: '2 Covered Car Spaces',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Designed in meticulous harmony with authentic Vedic Vastu Shastra and contemporary architectural lines. This standalone luxury duplex offers grand double-height living spaces, dedicated puja sanctum, expansive private landscaped lawn, and premium marble flooring.',
    highlights: [
      '100% Vastu compliant orientation with North-East main entrance',
      'Individual freehold ownership with immediate registry & mutation support',
      'Independent borewell, rainwater harvesting & 3-phase electrical connection',
      'Spacious master bedroom with walk-in wardrobe & sunset balcony'
    ],
    amenities: [
      'Gated Security & CCTV Surveillance',
      'Landscaped Private Garden',
      'Solar Powered Street Lighting',
      'Intercom Connectivity to Guardhouse',
      'Dedicated Puja Room',
      'Paved Wide Access Driveway'
    ],
    floorPlanDetails: {
      groundFloor: '1,350 sq.ft — Grand Living Hall, Dining, Modular Kitchen, Guest Suite, Puja Sanctum & Verandah',
      firstFloor: '1,100 sq.ft — Master Suite with Balcony, 2 Kids Bedrooms, Family Lounge & Study Nook',
      terrace: 'Private open rooftop terrace with pergola preparation and water storage'
    },
    brochureName: 'Vastu_Vihar_Imperial_Duplex_Brochure.pdf',
    isFeatured: true,
  },
  {
    id: 'vv-panorama-3bhk',
    title: 'Vastu Vihar Panorama Suites',
    subtitle: 'Premium 3BHK High-Rise Apartments with Scenic Balconies',
    category: 'residential',
    type: 'Luxury 3BHK',
    price: '₹ 56.50 Lakh',
    priceRaw: 5650000,
    location: 'Terminal Road Junction',
    landmark: 'Adjacent to Air India Flyover Exit',
    area: '1,620 sq.ft',
    carpetArea: '1,320 sq.ft',
    facing: 'East Facing (Surya Dwar)',
    possession: 'Immediate Registry',
    status: 'Ready to Move',
    bhk: '3 BHK',
    bathrooms: 3,
    parking: '1 Reserved Basement Slot',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Elevated contemporary living for modern Indian families seeking tranquility without sacrificing city connectivity. Features aerodynamic cross-ventilation, abundant natural daylight, and unhindered skyline vistas.',
    highlights: [
      'Spacious 8-foot deep balconies with glass railings',
      'Dual high-speed elevators with power backup',
      'Reinforced earthquake-resistant RCC frame structure',
      'Proximity to premier schools, healthcare, and transit corridors'
    ],
    amenities: [
      'Children Play Area with Safe Turf',
      'Senior Citizens Relaxation Pavilion',
      '24/7 Power Backup for Common Areas & Elevators',
      'Multi-tier Security Gate with Visitor Logging',
      'Badminton Court & Walking Track',
      'Rainwater Harvesting System'
    ],
    floorPlanDetails: {
      groundFloor: 'Grand entrance lobby with reception and visitor seating',
      firstFloor: 'Floor layout: 4 units per floor ensuring maximum privacy and zero wall-sharing for bedrooms',
      terrace: 'Common landscaped rooftop viewing deck'
    },
    brochureName: 'Vastu_Vihar_Panorama_Suites.pdf',
    isFeatured: true,
  },
  {
    id: 'vv-comfort-2bhk',
    title: 'Vastu Vihar Classic Homes',
    subtitle: 'Thoughtfully Engineered 2BHK Family Residences',
    category: 'residential',
    type: 'Premium 2BHK',
    price: '₹ 38.00 Lakh',
    priceRaw: 3800000,
    location: 'Munger Terminal Road',
    landmark: 'Near Air India Flyover',
    area: '1,050 sq.ft',
    carpetArea: '880 sq.ft',
    facing: 'North Facing',
    possession: 'Ready to Move',
    status: 'Ready to Move',
    bhk: '2 BHK',
    bathrooms: 2,
    parking: '1 Dedicated Stilt Parking',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'An optimal balance of space optimization, affordability, and premier craftsmanship. Ideal for young families and smart investors looking for reliable rental yields and capital appreciation.',
    highlights: [
      'High rental demand corridor near commercial terminals',
      'Bank approved by all major nationalized and private banks',
      'Zero dead-space layout maximizing functional carpet utility',
      'Premium vitrified tiles and brass hardware fittings'
    ],
    amenities: [
      '24-Hour Municipal & Deep Tube-well Water Supply',
      'Fire Fighting Infrastructure as per National Building Code',
      'Underground Drainage & Sewerage Lines',
      'Dedicated Transformer for Uninterrupted Voltage'
    ],
    brochureName: 'Vastu_Vihar_Classic_Homes_2BHK.pdf',
    isFeatured: false,
  },
  {
    id: 'vv-capital-commercial',
    title: 'Vastu Vihar Capital Arcade',
    subtitle: 'Prime Road-Front Commercial Showrooms & Retail Outlets',
    category: 'commercial',
    type: 'Commercial Retail',
    price: '₹ 62.00 Lakh',
    priceRaw: 6200000,
    location: 'Main Terminal Road Frontage',
    landmark: 'Directly Facing Air India Flyover Approach',
    area: '950 sq.ft',
    carpetArea: '820 sq.ft',
    facing: 'Main Highway Facing (East)',
    possession: 'Ready for Fit-out',
    status: 'Ready to Move',
    parking: 'Ample Frontage Customer Parking',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'High footfall commercial frontage located on the primary arterial Munger Terminal Road. Engineered for banks, diagnostic centers, branded retail stores, and corporate regional offices.',
    highlights: [
      'Over 25,000+ daily vehicle movement vantage point',
      '14-foot ceiling heights suited for mezzanine storage',
      'Heavy-load floor slabs with seamless glass showcase provisions',
      'Dedicated commercial power load sanction available'
    ],
    amenities: [
      'High Visibility Signage Fascia',
      '60-ft Wide Frontage Service Road',
      'Common Washroom Clusters on Each Floor',
      'Heavy Duty Goods Lift Provision'
    ],
    brochureName: 'Vastu_Vihar_Capital_Commercial_Brochure.pdf',
    isFeatured: true,
  },
  {
    id: 'vv-executive-suites',
    title: 'Vastu Vihar Corporate Hub',
    subtitle: 'Grade-A Executive Office Spaces for Professionals',
    category: 'commercial',
    type: 'Office Suite',
    price: '₹ 45.00 Lakh',
    priceRaw: 4500000,
    location: 'Munger Terminal Road',
    landmark: 'Near Air India Flyover Roundabout',
    area: '780 sq.ft',
    carpetArea: '690 sq.ft',
    facing: 'North-East Facing',
    possession: 'Immediate Registry',
    status: 'Ready to Move',
    parking: 'Covered Executive Parking',
    images: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Designed for doctors, chartered accountants, legal firms, and corporate regional offices. Combines professional prestige with quiet, air-conditioned acoustic comfort and high-speed internet readiness.',
    highlights: [
      'Fiber-optic internet conduits pre-installed',
      'Professional concierge and reception desk at lobby',
      'Common conference room facility bookable on demand',
      '24/7 access with biometric entry support'
    ],
    amenities: [
      'Visitor Waiting Lounge',
      'Centralised Air-Conditioning Ducting Support',
      '100% DG Generator Backup for IT loads',
      'Modern High-Speed Elevators'
    ],
    brochureName: 'Vastu_Vihar_Corporate_Hub.pdf',
    isFeatured: false,
  },
  {
    id: 'vv-emerald-plots',
    title: 'Vastu Vihar Emerald Enclave',
    subtitle: 'Clear-Title Gated Residential Plots (2.5 & 3 Katha)',
    category: 'plots',
    type: 'Gated Residential Plot',
    price: '₹ 32.50 Lakh',
    priceRaw: 3250000,
    location: 'Munger Terminal Road',
    landmark: '800m from Air India Flyover',
    area: '2.5 Katha (~3,400 sq.ft)',
    facing: 'North & East Facing Plots Available',
    possession: 'Immediate Registry & Mutation',
    status: 'Immediate Registry',
    parking: '30-ft Wide Concrete Internal Road',
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77d61?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Invest in secure, appreciating land with clear legal chain of title. Fully demarcated plots situated in an organized gated community featuring concrete roads, electrical poles, drainage lines, and perimeter boundary walls.',
    highlights: [
      '100% crystal-clear title with 30-year search verification history',
      'Ready for immediate construction and registry',
      'High ground level with zero water-logging during monsoon',
      'Vastu-compliant rectangular plot dimensions'
    ],
    amenities: [
      'Gated Entry Arch with Security Cabin',
      '30-Foot Wide Blacktop Internal Roads',
      'Underground Storm Drainage Network',
      'Transformer & Streetlight Poles Installed',
      'Avenue Tree Plantation along Boundaries'
    ],
    brochureName: 'Vastu_Vihar_Emerald_Plots_Brochure.pdf',
    isFeatured: true,
  },
  {
    id: 'vv-terminal-commercial-plot',
    title: 'Vastu Vihar Prime Highway Land',
    subtitle: 'High-Value Commercial Land on Munger Terminal Road',
    category: 'plots',
    type: 'Commercial Plot',
    price: '₹ 1.25 Crore',
    priceRaw: 12500000,
    location: 'Direct Frontage on Munger Terminal Road',
    landmark: 'Air India Flyover Corridor',
    area: '5 Katha (~6,800 sq.ft)',
    facing: 'North-East Main Road',
    possession: 'Immediate Possession',
    status: 'Immediate Registry',
    parking: 'Massive Frontage for Heavy Vehicles',
    images: [
      'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    ],
    description: 'Rare opportunity to acquire prominent commercial land along the rapidly appreciating Munger Terminal Road corridor. Unmatched visibility for commercial complexes, banquet halls, logistics hubs, or hospital ventures.',
    highlights: [
      'Over 75 feet wide direct road frontage',
      'Commercial zoning permissions and NOC approvals verified',
      'Direct connectivity to highway network and rail terminal',
      'Clear unencumbered ownership ready for instant registry'
    ],
    amenities: [
      'High-Load HT Power Line Connectivity Proximity',
      'Wide Heavy-Vehicle Ingress & Egress Turnaround',
      'Boundary Pillars Pre-fixed with GPS coordinates'
    ],
    brochureName: 'Vastu_Vihar_Highway_Land_Details.pdf',
    isFeatured: false,
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    number: '01',
    title: 'Vedic Vastu & Modern Architecture',
    description: 'Every project layout harmonizes timeless Vastu principles (proper daylight, cross-breezes, and positive cosmic orientations) with contemporary engineering standards.',
  },
  {
    number: '02',
    title: '100% Verified Clear-Title Registry',
    description: 'We adhere to absolute transparency. All residential villas, apartments, and plots carry verified 30-year title chains, immediate registration, and complete bank loan approvals.',
  },
  {
    number: '03',
    title: 'Prime Munger Terminal Connectivity',
    description: 'Strategically situated on Munger Terminal Road near the Air India Flyover, offering swift connectivity to transit hubs, healthcare, schools, and city markets.',
  },
  {
    number: '04',
    title: 'Zero Hidden Costs & Fair Pricing',
    description: 'Clear pricing terms with documented schedules. No surprise maintenance deposits or hidden escalation clauses during your home-buying journey.',
  },
  {
    number: '05',
    title: 'Dedicated Site Visit & Relationship Team',
    description: 'Personalized private site visits in air-conditioned vehicles, complete legal verification assistance, and dedicated customer relationship managers from booking to possession.',
  }
];

export const LOCATION_HIGHLIGHTS = [
  { label: 'Air India Flyover', distance: '300 Meters', time: '1 min drive' },
  { label: 'Munger Terminal Road Corridor', distance: 'Direct Frontage', time: 'Zero transit' },
  { label: 'Munger Railway Station', distance: '3.2 Kilometers', time: '8 mins drive' },
  { label: 'District Hospital & Medical Hub', distance: '2.5 Kilometers', time: '6 mins drive' },
  { label: 'Kendriya Vidyalaya & Top Schools', distance: '1.8 Kilometers', time: '4 mins drive' },
  { label: 'Central Market & Commercial Hub', distance: '2.8 Kilometers', time: '7 mins drive' },
];
