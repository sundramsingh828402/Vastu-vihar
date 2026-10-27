import React, { useState, useMemo } from 'react';
import { Property, PropertyCategory } from '../types/property';
import { PropertyCard } from './PropertyCard';
import { Filter, Search, RotateCcw, Building2, Store, Map, SlidersHorizontal, IndianRupee } from 'lucide-react';

interface PropertyCatalogProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  onScheduleVisit: (property: Property) => void;
  activeCategory: PropertyCategory;
  onCategoryChange: (category: PropertyCategory) => void;
  searchKeyword?: string;
  initialBudgetPreset?: string;
  initialMinPrice?: number;
  initialMaxPrice?: number;
}

// Helper to format values in Lakhs / Crores
const formatLakhCrore = (val: number): string => {
  if (val >= 10000000) {
    const cr = val / 10000000;
    return `₹${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }
  const lakh = val / 100000;
  return `₹${lakh % 1 === 0 ? lakh.toFixed(0) : lakh.toFixed(1)} Lakh`;
};

const ABSOLUTE_MIN_PRICE = 2500000; // ₹25 Lakh
const ABSOLUTE_MAX_PRICE = 15000000; // ₹1.5 Crore
const PRICE_STEP = 250000; // ₹2.5 Lakh step

export const PropertyCatalog: React.FC<PropertyCatalogProps> = ({
  properties,
  onSelectProperty,
  onScheduleVisit,
  activeCategory,
  onCategoryChange,
  searchKeyword = '',
  initialBudgetPreset,
  initialMinPrice,
  initialMaxPrice,
}) => {
  // Budget filter states
  const [budgetDropdown, setBudgetDropdown] = useState<string>(initialBudgetPreset || 'all');
  const [minPrice, setMinPrice] = useState<number>(initialMinPrice || ABSOLUTE_MIN_PRICE);
  const [maxPrice, setMaxPrice] = useState<number>(initialMaxPrice || ABSOLUTE_MAX_PRICE);
  const [showSliderDetails, setShowSliderDetails] = useState<boolean>(true);

  // Other filter states
  const [bhkFilter, setBhkFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>(searchKeyword);

  // Sync initial budget preset if passed from parent
  React.useEffect(() => {
    if (initialBudgetPreset) {
      handleDropdownBudgetChange(initialBudgetPreset);
    }
  }, [initialBudgetPreset]);

  // Sync initial min and max price if passed from parent
  React.useEffect(() => {
    if (initialMinPrice !== undefined && initialMinPrice > 0) {
      setMinPrice(initialMinPrice);
    }
    if (initialMaxPrice !== undefined && initialMaxPrice > 0) {
      setMaxPrice(initialMaxPrice);
    }
  }, [initialMinPrice, initialMaxPrice]);

  // Update internal query if parent passes searchKeyword
  React.useEffect(() => {
    if (searchKeyword) {
      setSearchQuery(searchKeyword);
    }
  }, [searchKeyword]);

  // Handle Dropdown Change: Synchronizes dropdown selection with slider numeric boundaries
  const handleDropdownBudgetChange = (val: string) => {
    setBudgetDropdown(val);
    switch (val) {
      case 'under-40':
        setMinPrice(ABSOLUTE_MIN_PRICE);
        setMaxPrice(4000000);
        break;
      case '40-60':
        setMinPrice(4000000);
        setMaxPrice(6000000);
        break;
      case '60-85':
        setMinPrice(6000000);
        setMaxPrice(8500000);
        break;
      case '85-125':
        setMinPrice(8500000);
        setMaxPrice(12500000);
        break;
      case 'above-100':
        setMinPrice(10000000);
        setMaxPrice(ABSOLUTE_MAX_PRICE);
        break;
      case 'all':
      default:
        setMinPrice(ABSOLUTE_MIN_PRICE);
        setMaxPrice(ABSOLUTE_MAX_PRICE);
        break;
    }
  };

  // Handle Slider Changes: Automatically sets dropdown to 'custom' when moving sliders
  const handleMinSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val <= maxPrice) {
      setMinPrice(val);
      setBudgetDropdown('custom');
    }
  };

  const handleMaxSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    if (val >= minPrice) {
      setMaxPrice(val);
      setBudgetDropdown('custom');
    }
  };

  // Quick Preset Button Click
  const handleQuickPreset = (min: number, max: number, label: string) => {
    setMinPrice(min);
    setMaxPrice(max);
    setBudgetDropdown(label);
  };

  // Underlying Property Filtering Logic
  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      // 1. Category filter
      if (activeCategory !== 'all' && prop.category !== activeCategory) {
        return false;
      }

      // 2. Budget price range filtering (inclusive min and max price limits)
      if (prop.priceRaw < minPrice || prop.priceRaw > maxPrice) {
        return false;
      }

      // 3. Configuration (BHK) filter
      if (bhkFilter !== 'all') {
        if (bhkFilter === '2bhk' && prop.bhk !== '2 BHK') return false;
        if (bhkFilter === '3bhk' && prop.bhk !== '3 BHK') return false;
        if (bhkFilter === '4bhk' && prop.bhk !== '4 BHK') return false;
      }

      // 4. Possession / Registry Status filter
      if (statusFilter !== 'all' && prop.status !== statusFilter) {
        return false;
      }

      // 5. Keyword search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = prop.title.toLowerCase().includes(q);
        const matchesType = prop.type.toLowerCase().includes(q);
        const matchesLocation = prop.location.toLowerCase().includes(q);
        const matchesDesc = prop.description.toLowerCase().includes(q);
        const matchesArea = prop.area.toLowerCase().includes(q);
        if (!matchesTitle && !matchesType && !matchesLocation && !matchesDesc && !matchesArea) {
          return false;
        }
      }

      return true;
    });
  }, [properties, activeCategory, minPrice, maxPrice, bhkFilter, statusFilter, searchQuery]);

  // Reset all filters to default state
  const handleResetFilters = () => {
    onCategoryChange('all');
    setBudgetDropdown('all');
    setMinPrice(ABSOLUTE_MIN_PRICE);
    setMaxPrice(ABSOLUTE_MAX_PRICE);
    setBhkFilter('all');
    setStatusFilter('all');
    setSearchQuery('');
  };

  const isPriceFiltered = minPrice > ABSOLUTE_MIN_PRICE || maxPrice < ABSOLUTE_MAX_PRICE;
  const hasActiveFilters = 
    activeCategory !== 'all' || 
    isPriceFiltered || 
    bhkFilter !== 'all' || 
    statusFilter !== 'all' || 
    searchQuery.trim().length > 0;

  // Percentage calculations for slider visual track
  const minPercent = ((minPrice - ABSOLUTE_MIN_PRICE) / (ABSOLUTE_MAX_PRICE - ABSOLUTE_MIN_PRICE)) * 100;
  const maxPercent = ((maxPrice - ABSOLUTE_MIN_PRICE) / (ABSOLUTE_MAX_PRICE - ABSOLUTE_MIN_PRICE)) * 100;

  return (
    <section id="properties" className="py-20 bg-slate-50 border-t border-slate-200 township-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Category Segments */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E52424] font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#29A8E0]" />
              <span>Curated Property Portfolio</span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span>Munger Terminal Road</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#0E2B63] tracking-tight">
              Explore Our Developments
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl">
              Browse residential villas, apartments, commercial developments, and clear-deed land plots with direct highway connectivity.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs (Functional Buttons) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200 rounded-lg overflow-x-auto self-start md:self-auto border border-slate-300">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#0E2B63] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#0E2B63]'
              }`}
            >
              All Properties
            </button>
            <button
              onClick={() => onCategoryChange('residential')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeCategory === 'residential'
                  ? 'bg-[#0E2B63] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#0E2B63]'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Residential</span>
            </button>
            <button
              onClick={() => onCategoryChange('commercial')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeCategory === 'commercial'
                  ? 'bg-[#0E2B63] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#0E2B63]'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>Commercial</span>
            </button>
            <button
              onClick={() => onCategoryChange('plots')}
              className={`px-4 py-2 text-xs font-bold rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeCategory === 'plots'
                  ? 'bg-[#0E2B63] text-white shadow-sm'
                  : 'text-slate-700 hover:text-[#0E2B63]'
              }`}
            >
              <Map className="w-3.5 h-3.5" />
              <span>Land & Plots</span>
            </button>
          </div>
        </div>

        {/* Enhanced Secondary Filters Bar with Price Range Slider & Dropdown */}
        <div className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 mb-8 shadow-sm relative overflow-hidden">
          {/* Subtle logo ribbon accent */}
          <div className="absolute top-0 left-0 right-0 h-1 flex">
            <div className="w-1/4 bg-[#E52424]" />
            <div className="w-3/4 bg-[#29A8E0]" />
          </div>

          {/* Main 4-Column Filter Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
            {/* Search Input */}
            <div className="relative">
              <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                Search by Keyword
              </label>
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  placeholder="e.g. Duplex, 3BHK, Plot..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white"
                />
              </div>
            </div>

            {/* Budget Dropdown Filter */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                  Budget Preset
                </label>
                <button
                  type="button"
                  onClick={() => setShowSliderDetails(!showSliderDetails)}
                  className="text-[10px] text-[#E52424] hover:text-[#C62828] font-bold flex items-center gap-0.5 cursor-pointer"
                >
                  <SlidersHorizontal className="w-2.5 h-2.5" />
                  <span>{showSliderDetails ? 'Hide Slider' : 'Show Slider'}</span>
                </button>
              </div>
              <select
                value={budgetDropdown}
                onChange={(e) => handleDropdownBudgetChange(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white cursor-pointer font-medium"
              >
                <option value="all">Any Budget (All Prices)</option>
                <option value="under-40">Under ₹40 Lakh</option>
                <option value="40-60">₹40 Lakh – ₹60 Lakh</option>
                <option value="60-85">₹60 Lakh – ₹85 Lakh</option>
                <option value="85-125">₹85 Lakh – ₹1.25 Crore</option>
                <option value="above-100">Above ₹1 Crore (Prime Plots & Land)</option>
                {budgetDropdown === 'custom' && (
                  <option value="custom">Custom Slider Range</option>
                )}
              </select>
            </div>

            {/* Configuration (BHK) */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                Configuration
              </label>
              <select
                value={bhkFilter}
                onChange={(e) => setBhkFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white cursor-pointer"
              >
                <option value="all">Any Configuration</option>
                <option value="2bhk">2 BHK Flats</option>
                <option value="3bhk">3 BHK Flats</option>
                <option value="4bhk">4 BHK / Duplex</option>
              </select>
            </div>

            {/* Possession Status */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-1">
                Possession Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded text-slate-900 focus:outline-none focus:border-[#29A8E0] focus:bg-white cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="Ready to Move">Ready to Move</option>
                <option value="Immediate Registry">Immediate Registry</option>
              </select>
            </div>
          </div>

          {/* Interactive Price Range Slider Section */}
          {showSliderDetails && (
            <div className="mt-5 pt-5 border-t border-slate-200 bg-slate-50 p-4 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-[#E52424]/10 flex items-center justify-center text-[#E52424]">
                    <IndianRupee className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-[#0E2B63]">
                    Interactive Price Range Slider:
                  </span>
                  <span className="text-xs font-bold font-mono tabular-nums text-[#0E2B63] bg-white px-2.5 py-0.5 rounded border border-slate-200 shadow-2xs">
                    {formatLakhCrore(minPrice)} – {formatLakhCrore(maxPrice)}
                  </span>
                </div>

                {/* Quick budget chip shortcuts */}
                <div className="flex items-center gap-1.5 overflow-x-auto text-[11px]">
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider mr-1">Quick:</span>
                  <button
                    type="button"
                    onClick={() => handleQuickPreset(ABSOLUTE_MIN_PRICE, 4000000, 'under-40')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold border transition-colors cursor-pointer whitespace-nowrap ${
                      maxPrice === 4000000 && minPrice === ABSOLUTE_MIN_PRICE
                        ? 'bg-[#E52424] text-white border-[#E52424]'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    &lt; ₹40L
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickPreset(4000000, 6000000, '40-60')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold border transition-colors cursor-pointer whitespace-nowrap ${
                      minPrice === 4000000 && maxPrice === 6000000
                        ? 'bg-[#E52424] text-white border-[#E52424]'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    ₹40L - ₹60L
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickPreset(6000000, 8500000, '60-85')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold border transition-colors cursor-pointer whitespace-nowrap ${
                      minPrice === 6000000 && maxPrice === 8500000
                        ? 'bg-[#E52424] text-white border-[#E52424]'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    ₹60L - ₹85L
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickPreset(8500000, ABSOLUTE_MAX_PRICE, 'above-100')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold border transition-colors cursor-pointer whitespace-nowrap ${
                      minPrice === 8500000 && maxPrice === ABSOLUTE_MAX_PRICE
                        ? 'bg-[#E52424] text-white border-[#E52424]'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    ₹85L+
                  </button>
                </div>
              </div>

              {/* Slider Sliders & Track */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {/* Minimum Price Slider */}
                <div>
                  <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                    <span>Minimum Price</span>
                    <span className="font-bold text-[#0E2B63] font-mono tabular-nums">
                      {formatLakhCrore(minPrice)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={ABSOLUTE_MIN_PRICE}
                    max={maxPrice}
                    step={PRICE_STEP}
                    value={minPrice}
                    onChange={handleMinSliderChange}
                    className="w-full accent-[#E52424] cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
                    aria-label="Minimum Price Filter Slider"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
                    <span>{formatLakhCrore(ABSOLUTE_MIN_PRICE)}</span>
                    <span>Max: {formatLakhCrore(maxPrice)}</span>
                  </div>
                </div>

                {/* Maximum Price Slider */}
                <div>
                  <div className="flex justify-between text-[11px] text-slate-600 mb-1">
                    <span>Maximum Budget Limit</span>
                    <span className="font-bold text-[#0E2B63] font-mono tabular-nums">
                      {formatLakhCrore(maxPrice)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={minPrice}
                    max={ABSOLUTE_MAX_PRICE}
                    step={PRICE_STEP}
                    value={maxPrice}
                    onChange={handleMaxSliderChange}
                    className="w-full accent-[#E52424] cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
                    aria-label="Maximum Price Filter Slider"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
                    <span>Min: {formatLakhCrore(minPrice)}</span>
                    <span>{formatLakhCrore(ABSOLUTE_MAX_PRICE)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Active Filter Summary Row & Reset Action */}
          <div className="flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3 mt-4">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <Filter className="w-3.5 h-3.5 text-[#E52424] shrink-0" />
              <span>
                Showing <strong className="text-[#0E2B63] tabular-nums font-mono">{filteredProperties.length}</strong> of{' '}
                <span className="tabular-nums font-mono">{properties.length}</span> verified properties
              </span>
              {isPriceFiltered && (
                <>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span className="text-[#0E2B63] font-bold font-mono text-[11px] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                    Filtered: {formatLakhCrore(minPrice)} – {formatLakhCrore(maxPrice)}
                  </span>
                </>
              )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-[#E52424] hover:text-[#C62828] font-bold flex items-center gap-1 cursor-pointer transition-colors shrink-0"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Property Grid or Empty State */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
                onScheduleVisit={onScheduleVisit}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-slate-200 rounded-lg p-8 shadow-xs">
            <Building2 className="w-12 h-12 text-slate-400 mx-auto mb-3 stroke-[1.5]" />
            <h3 className="text-lg font-serif-luxury font-bold text-[#0E2B63]">
              No matching properties in this budget bracket
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-6 leading-relaxed">
              No properties found between <strong className="font-mono text-slate-700">{formatLakhCrore(minPrice)}</strong> and <strong className="font-mono text-slate-700">{formatLakhCrore(maxPrice)}</strong> under the current configuration. Adjust the price range slider or reset your filters.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  setMinPrice(ABSOLUTE_MIN_PRICE);
                  setMaxPrice(ABSOLUTE_MAX_PRICE);
                  setBudgetDropdown('all');
                }}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#E52424] hover:bg-[#C62828] rounded transition-colors cursor-pointer"
              >
                Expand Budget Range
              </button>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 rounded transition-colors cursor-pointer border border-slate-200"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
