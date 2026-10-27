import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertySearchPanel, PropertySearchParams } from './components/PropertySearchPanel';
import { FeaturedProperties } from './components/FeaturedProperties';
import { ExploreByCategory } from './components/ExploreByCategory';
import { PropertyCatalog } from './components/PropertyCatalog';
import { WhyVastuVihar } from './components/WhyVastuVihar';
import { AboutVastuVihar } from './components/AboutVastuVihar';
import { FindUsSection } from './components/FindUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ScheduleVisitModal } from './components/ScheduleVisitModal';
import { PROPERTIES, VASTU_VIHAR_CONTACT } from './data/properties';
import { Property, PropertyCategory } from './types/property';
import { MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>('all');
  const [searchParams, setSearchParams] = useState<PropertySearchParams | null>(null);
  const [catalogMinPrice, setCatalogMinPrice] = useState<number | undefined>(undefined);
  const [catalogMaxPrice, setCatalogMaxPrice] = useState<number | undefined>(undefined);
  const [catalogSearchKeyword, setCatalogSearchKeyword] = useState<string>('');
  
  // Modals state
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [prefilledPropertyForVisit, setPrefilledPropertyForVisit] = useState<Property | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter properties based on search panel parameters for quick featured view
  const filteredFeaturedProperties = useMemo(() => {
    if (!searchParams) return PROPERTIES;

    return PROPERTIES.filter((prop) => {
      // 1. Property Type
      if (searchParams.propertyType !== 'all') {
        if (prop.type !== searchParams.propertyType) {
          return false;
        }
      }

      // 2. Preferred Location
      if (searchParams.location !== 'all') {
        const searchLoc = searchParams.location.toLowerCase();
        const matchesLoc = 
          prop.location.toLowerCase().includes(searchLoc) ||
          prop.landmark.toLowerCase().includes(searchLoc);
        if (!matchesLoc) return false;
      }

      // 3. Budget Range
      if (searchParams.minBudget > 0 && prop.priceRaw < searchParams.minBudget) {
        return false;
      }
      if (searchParams.maxBudget > 0 && prop.priceRaw > searchParams.maxBudget) {
        return false;
      }

      return true;
    });
  }, [searchParams]);

  // Handle Search from the Hero Docked Search Bar
  const handleSearch = (params: PropertySearchParams) => {
    setSearchParams(params);
    if (params.minBudget > 0) {
      setCatalogMinPrice(params.minBudget);
    }
    if (params.maxBudget > 0) {
      setCatalogMaxPrice(params.maxBudget);
    }
    if (params.propertyType !== 'all') {
      if (params.propertyType.includes('Plot') || params.propertyType.includes('Land')) {
        setSelectedCategory('plots');
      } else if (params.propertyType.includes('Commercial') || params.propertyType.includes('Office')) {
        setSelectedCategory('commercial');
      } else {
        setSelectedCategory('residential');
      }
    }
    handleNavigate('properties');
  };

  const handleResetSearch = () => {
    setSearchParams(null);
    setCatalogMinPrice(undefined);
    setCatalogMaxPrice(undefined);
    setCatalogSearchKeyword('');
  };

  const handleSelectCategory = (category: PropertyCategory) => {
    setSelectedCategory(category);
    handleNavigate('properties');
  };

  const handleOpenScheduleVisit = (property?: Property) => {
    setPrefilledPropertyForVisit(property || null);
    setScheduleModalOpen(true);
  };

  const handleBookVisitFromDetails = (property: Property) => {
    setSelectedProperty(null);
    setPrefilledPropertyForVisit(property);
    setScheduleModalOpen(true);
  };

  const floatingWhatsappUrl = `https://wa.me/${VASTU_VIHAR_CONTACT.whatsappNumber}?text=${encodeURIComponent(
    'Hello Vastu Vihar sales desk, I am looking for property details in Munger near Air India Flyover. Please connect me with an advisor.'
  )}`;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0E2B63] flex flex-col font-sans selection:bg-[#29A8E0]/25 selection:text-[#0E2B63]">
      {/* 3-Zone Sticky Header with Official Vastu Vihar Logo Lockup */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenScheduleVisit={() => handleOpenScheduleVisit()}
      />

      {/* Main Content in Attractive, High-Converting Editorial Order */}
      <main className="flex-1">
        {/* 1. First Screen: Hero Section with Full-Width Indian Architecture Photo */}
        <Hero
          onExploreProperties={() => handleNavigate('properties')}
          onTalkToTeam={() => handleNavigate('contact')}
        />

        {/* 2. Modern Property Search Panel (Docked Below Hero) */}
        <PropertySearchPanel onSearch={handleSearch} />

        {/* 3. Explore by Category Section (Residential, Commercial, Land and Plots) */}
        <ExploreByCategory onSelectCategory={handleSelectCategory} />

        {/* 4. Curated Featured Properties Spotlight */}
        <FeaturedProperties
          properties={filteredFeaturedProperties}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onScheduleVisit={(prop) => handleOpenScheduleVisit(prop)}
          onViewAllProperties={() => handleNavigate('properties')}
          isFiltered={searchParams !== null}
          onResetSearch={searchParams !== null ? handleResetSearch : undefined}
        />

        {/* 5. Comprehensive Properties Catalog with Interactive Price Range Slider */}
        <div id="properties">
          <PropertyCatalog
            properties={PROPERTIES}
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onScheduleVisit={(prop) => handleOpenScheduleVisit(prop)}
            initialMinPrice={catalogMinPrice}
            initialMaxPrice={catalogMaxPrice}
            searchKeyword={catalogSearchKeyword}
          />
        </div>

        {/* 6. Why Vastu Vihar (4 Trust Pillars & Customer Ethics) */}
        <WhyVastuVihar onScheduleVisit={() => handleOpenScheduleVisit()} />

        {/* 7. About Vastu Vihar (Brand Heritage, Vedic Vastu Principles, Munger Corridor) */}
        <AboutVastuVihar />

        {/* 8. Find Us (Munger Terminal Road, Near Air India Flyover, Transit Times, Directions) */}
        <FindUsSection />

        {/* 9. Contact Section (Private Site Tour Booking Form & WhatsApp Desk) */}
        <ContactSection prefilledProperty={prefilledPropertyForVisit ? prefilledPropertyForVisit.title : ''} />
      </main>

      {/* 10. Footer (Navigation, Contact Details, Location, Real Estate Disclaimer) */}
      <Footer
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

      {/* Interactive Property Detail Modal with Gallery, Floor Plans & EMI Calculator */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onBookSiteVisit={handleBookVisitFromDetails}
        />
      )}

      {/* Instant Site Visit Booking Modal */}
      <ScheduleVisitModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        preselectedProperty={prefilledPropertyForVisit}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Quick Contact Assistance" className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        <a
          href={floatingWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BE5A] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Direct WhatsApp Chat with Vastu Vihar sales team"
        >
          <MessageCircle className="w-5 h-5 fill-white text-transparent shrink-0" />
          <span className="text-xs font-bold hidden sm:inline whitespace-nowrap">
            WhatsApp Enquiry
          </span>
        </a>

        <a
          href={`tel:${VASTU_VIHAR_CONTACT.phoneClean}`}
          className="p-3 bg-[#0E2B63] hover:bg-[#0A1F4D] text-white rounded-full shadow-xl border border-[#29A8E0]/40 transition-all duration-300 hover:scale-105 sm:hidden"
          aria-label="Call Vastu Vihar sales office"
        >
          <Phone className="w-4 h-4 text-[#29A8E0]" />
        </a>
      </aside>
    </div>
  );
}
