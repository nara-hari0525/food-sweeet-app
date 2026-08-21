import React, { useState, useEffect, useRef } from 'react';
import {
  User,
  Camera,
  Edit3,
  Bookmark,
  ChevronDown,
  ChevronUp,
  Globe,
  Check,
  ChefHat,
  Sparkles,
  Sliders,
  Utensils,
  ArrowRight,
  Flame,
  Users
} from 'lucide-react';
import { TabType } from '../types';

interface UserProfileData {
  name: string;
  email: string;
  region: string;
  avatarUrl: string | null;
  diet: string;
  spiceTolerance: 'Mild' | 'Medium' | 'Bold & Fiery';
  defaultServings: number;
  favoriteCuisines: string[];
}

const DEFAULT_PROFILE: UserProfileData = {
  name: 'Chintan Rahari',
  email: 'chintanarahari005@gmail.com',
  region: 'India',
  avatarUrl: null,
  diet: 'Flexible / All Cuisines',
  spiceTolerance: 'Medium',
  defaultServings: 4,
  favoriteCuisines: ['North Indian', 'South Indian', 'Italian'],
};

const REGIONS = [
  'India',
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'Italy',
  'France',
  'Japan',
  'Singapore',
  'Other / Global',
];

const DIETARY_OPTIONS = [
  'Flexible / All Cuisines',
  'Vegetarian',
  'Vegan',
  'Pescatarian',
  'Gluten-Conscious',
  'Keto / Low Carb',
];

const CUISINE_OPTIONS = [
  'North Indian',
  'South Indian',
  'Italian',
  'French',
  'Mediterranean',
  'East Asian',
  'Mexican',
];

interface ProfileScreenProps {
  savedCount: number;
  onNavigate: (tab: TabType) => void;
  onOpenMealPlan?: () => void;
  onOpenNutrition?: () => void;
  onOpenKitchenAi?: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  savedCount,
  onNavigate,
}) => {
  // Load profile from localStorage
  const [profile, setProfile] = useState<UserProfileData>(() => {
    try {
      const saved = localStorage.getItem('cooksweet_user_profile');
      if (saved) {
        return { ...DEFAULT_PROFILE, ...JSON.parse(saved) };
      }
    } catch {}
    return DEFAULT_PROFILE;
  });

  // Expandable sections state
  const [expandedSection, setExpandedSection] = useState<'edit' | 'preferences' | 'saved' | null>(null);

  // Edit form state
  const [editName, setEditName] = useState(profile.name);
  const [editEmail, setEditEmail] = useState(profile.email);
  const [editRegion, setEditRegion] = useState(profile.region);
  const [editAvatar, setEditAvatar] = useState<string | null>(profile.avatarUrl);
  const [isSavedBanner, setIsSavedBanner] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Save profile to localStorage
  const handleSaveProfile = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const updated: UserProfileData = {
      ...profile,
      name: editName.trim() || 'Home Chef',
      email: editEmail.trim() || profile.email,
      region: editRegion,
      avatarUrl: editAvatar,
    };
    setProfile(updated);
    try {
      localStorage.setItem('cooksweet_user_profile', JSON.stringify(updated));
    } catch {}
    setIsSavedBanner(true);
    setTimeout(() => setIsSavedBanner(false), 2500);
    setExpandedSection(null);
  };

  const handleUpdatePreferences = (newPrefs: Partial<UserProfileData>) => {
    const updated = { ...profile, ...newPrefs };
    setProfile(updated);
    try {
      localStorage.setItem('cooksweet_user_profile', JSON.stringify(updated));
    } catch {}
  };

  const handleToggleCuisine = (cuisine: string) => {
    const exists = profile.favoriteCuisines.includes(cuisine);
    const updated = exists
      ? profile.favoriteCuisines.filter((c) => c !== cuisine)
      : [...profile.favoriteCuisines, cuisine];
    handleUpdatePreferences({ favoriteCuisines: updated });
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setEditAvatar(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleSection = (section: 'edit' | 'preferences' | 'saved') => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  // User initials for fallback avatar
  const initials = profile.name
    ? profile.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'CH';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 pb-28">
      {/* Toast Notification */}
      {isSavedBanner && (
        <div className="mb-4 p-3 rounded-2xl bg-[#294936] text-[#FFFDF7] text-xs sm:text-sm font-sans font-medium flex items-center justify-between shadow-sm animate-fadeIn">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#B85C38]" />
            <span>Profile details updated successfully.</span>
          </div>
        </div>
      )}

      {/* 1. Minimal Personal Cookbook Identity Card */}
      <div className="bg-[#FFFDF7] border border-[#DED5C5] rounded-3xl p-6 sm:p-8 shadow-xs mb-6 text-center sm:text-left flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
        {/* Photo Avatar */}
        <div className="relative group shrink-0">
          <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden bg-[#294936] text-[#FFFDF7] flex items-center justify-center font-serif font-bold text-2xl sm:text-3xl shadow-xs border-2 border-[#DED5C5]">
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <span>{initials}</span>
            )}
          </div>
          <button
            onClick={() => {
              setExpandedSection('edit');
              fileInputRef.current?.click();
            }}
            className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-[#B85C38] text-white flex items-center justify-center border-2 border-[#FFFDF7] shadow-xs hover:bg-[#9E4929] transition-colors cursor-pointer"
            title="Change photo"
          >
            <Camera className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Identity Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
            <h1 className="font-serif font-bold text-2xl sm:text-3xl text-[#2C241F] tracking-tight truncate">
              {profile.name}
            </h1>
            <span className="inline-block self-center sm:self-auto text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#294936]/10 text-[#294936] border border-[#294936]/20">
              Cookbook Curator
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#766B63] font-sans truncate mb-2">
            {profile.email}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            {profile.region && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#F8F3E8] border border-[#DED5C5] text-[#2C241F] text-xs font-sans font-medium">
                <Globe className="w-3 h-3 text-[#6B705C]" />
                {profile.region}
              </span>
            )}
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#F8F3E8] border border-[#DED5C5] text-[#6B705C] text-xs font-sans">
              <Bookmark className="w-3 h-3 text-[#B85C38]" />
              {savedCount} Saved Dishes
            </span>
          </div>
        </div>
      </div>

      {/* 2. Primary Expandable Action Sections */}
      <div className="space-y-4">
        {/* SECTION A: Edit Profile */}
        <div className="bg-[#FFFDF7] border border-[#DED5C5] rounded-3xl overflow-hidden shadow-xs transition-all">
          <button
            onClick={() => toggleSection('edit')}
            className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8F3E8]/50 transition-colors"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F8F3E8] border border-[#DED5C5] text-[#294936] flex items-center justify-center shrink-0">
                <Edit3 className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-base sm:text-lg text-[#2C241F]">
                  Edit Profile
                </h2>
                <p className="text-xs text-[#766B63] font-serif">
                  Update your display name, photo, and regional origin
                </p>
              </div>
            </div>
            {expandedSection === 'edit' ? (
              <ChevronUp className="w-5 h-5 text-[#766B63]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#766B63]" />
            )}
          </button>

          {expandedSection === 'edit' && (
            <div className="p-5 sm:p-6 pt-0 border-t border-[#DED5C5] animate-fadeIn space-y-4">
              {/* Photo selector */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#766B63] block mb-2 font-sans">
                  Profile Photo (Optional)
                </label>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#294936] text-[#FFFDF7] flex items-center justify-center font-serif font-bold overflow-hidden border border-[#DED5C5]">
                    {editAvatar ? (
                      <img src={editAvatar} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <span>{initials}</span>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleAvatarUpload}
                    accept="image/*"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-3.5 py-1.5 rounded-xl bg-[#FFFDF7] border border-[#DED5C5] hover:border-[#294936] text-xs font-semibold text-[#2C241F] cursor-pointer"
                  >
                    Upload New Image
                  </button>
                  {editAvatar && (
                    <button
                      type="button"
                      onClick={() => setEditAvatar(null)}
                      className="text-xs text-[#B85C38] hover:underline font-semibold cursor-pointer"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>

              {/* Display Name */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#766B63] block mb-1.5 font-sans">
                  Display Name
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Your Name (e.g. Chef Chintan)"
                  className="w-full px-4 py-2.5 bg-[#F8F3E8] border border-[#DED5C5] rounded-xl text-sm text-[#2C241F] focus:border-[#294936] focus:outline-none font-serif"
                />
              </div>

              {/* Account Email */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#766B63] block mb-1.5 font-sans">
                  Email Address
                </label>
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 bg-[#F8F3E8] border border-[#DED5C5] rounded-xl text-sm text-[#2C241F] focus:border-[#294936] focus:outline-none font-sans"
                />
              </div>

              {/* Region / Country */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#766B63] block mb-1.5 font-sans">
                  Country or Region (For culinary recommendations)
                </label>
                <select
                  value={editRegion}
                  onChange={(e) => setEditRegion(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#F8F3E8] border border-[#DED5C5] rounded-xl text-sm text-[#2C241F] focus:border-[#294936] focus:outline-none font-serif cursor-pointer"
                >
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setEditName(profile.name);
                    setEditEmail(profile.email);
                    setEditRegion(profile.region);
                    setEditAvatar(profile.avatarUrl);
                    setExpandedSection(null);
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-[#766B63] hover:text-[#2C241F] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleSaveProfile()}
                  className="px-5 py-2 rounded-xl bg-[#B85C38] hover:bg-[#9E4929] text-white text-xs font-semibold shadow-xs cursor-pointer active:scale-98 transition-all"
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>

        {/* SECTION B: Cooking Preferences */}
        <div className="bg-[#FFFDF7] border border-[#DED5C5] rounded-3xl overflow-hidden shadow-xs transition-all">
          <button
            onClick={() => toggleSection('preferences')}
            className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8F3E8]/50 transition-colors"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F8F3E8] border border-[#DED5C5] text-[#294936] flex items-center justify-center shrink-0">
                <Sliders className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-base sm:text-lg text-[#2C241F]">
                  Cooking Preferences
                </h2>
                <p className="text-xs text-[#766B63] font-serif">
                  Dietary style, spice tolerance, and favorite traditions
                </p>
              </div>
            </div>
            {expandedSection === 'preferences' ? (
              <ChevronUp className="w-5 h-5 text-[#766B63]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#766B63]" />
            )}
          </button>

          {expandedSection === 'preferences' && (
            <div className="p-5 sm:p-6 pt-0 border-t border-[#DED5C5] animate-fadeIn space-y-5">
              {/* Dietary Style */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#766B63] block mb-2 font-sans">
                  Dietary Style
                </label>
                <div className="flex flex-wrap gap-2">
                  {DIETARY_OPTIONS.map((diet) => {
                    const isSelected = profile.diet === diet;
                    return (
                      <button
                        key={diet}
                        onClick={() => handleUpdatePreferences({ diet })}
                        className={`px-3 py-1.5 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#294936] text-[#FFFDF7] border-[#294936] shadow-xs font-semibold'
                            : 'bg-[#F8F3E8] text-[#2C241F] border-[#DED5C5] hover:border-[#6B705C]'
                        }`}
                      >
                        {diet}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Spice Tolerance */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#766B63] block mb-2 font-sans flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-[#B85C38]" />
                  Spice Tolerance
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Mild', 'Medium', 'Bold & Fiery'] as const).map((spice) => {
                    const isSelected = profile.spiceTolerance === spice;
                    return (
                      <button
                        key={spice}
                        onClick={() => handleUpdatePreferences({ spiceTolerance: spice })}
                        className={`py-2 px-3 rounded-xl text-xs font-sans text-center transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#B85C38] text-white border-[#B85C38] font-bold shadow-xs'
                            : 'bg-[#F8F3E8] text-[#2C241F] border-[#DED5C5] hover:border-[#6B705C]'
                        }`}
                      >
                        {spice}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Default Servings */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#766B63] block mb-2 font-sans flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-[#6B705C]" />
                  Default Household Servings
                </label>
                <div className="flex gap-2">
                  {[1, 2, 4, 6, 8].map((serv) => {
                    const isSelected = profile.defaultServings === serv;
                    return (
                      <button
                        key={serv}
                        onClick={() => handleUpdatePreferences({ defaultServings: serv })}
                        className={`w-10 h-10 rounded-xl text-xs font-sans font-bold transition-all cursor-pointer border flex items-center justify-center ${
                          isSelected
                            ? 'bg-[#294936] text-white border-[#294936] shadow-xs'
                            : 'bg-[#F8F3E8] text-[#2C241F] border-[#DED5C5] hover:border-[#6B705C]'
                        }`}
                      >
                        {serv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Favorite Regional Cuisines */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#766B63] block mb-2 font-sans">
                  Favorite Culinary Traditions
                </label>
                <div className="flex flex-wrap gap-2">
                  {CUISINE_OPTIONS.map((cuisine) => {
                    const isSelected = profile.favoriteCuisines.includes(cuisine);
                    return (
                      <button
                        key={cuisine}
                        onClick={() => handleToggleCuisine(cuisine)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-[#294936] text-[#FFFDF7] border-[#294936] font-semibold'
                            : 'bg-[#F8F3E8] text-[#2C241F] border-[#DED5C5] hover:border-[#6B705C]'
                        }`}
                      >
                        {cuisine}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SECTION C: Saved Recipes & Library */}
        <div className="bg-[#FFFDF7] border border-[#DED5C5] rounded-3xl overflow-hidden shadow-xs transition-all">
          <button
            onClick={() => toggleSection('saved')}
            className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8F3E8]/50 transition-colors"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#F8F3E8] border border-[#DED5C5] text-[#B85C38] flex items-center justify-center shrink-0">
                <Bookmark className="w-4 h-4 fill-[#B85C38]" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-base sm:text-lg text-[#2C241F]">
                  Saved Recipes ({savedCount})
                </h2>
                <p className="text-xs text-[#766B63] font-serif">
                  Quick access to your curated culinary collection
                </p>
              </div>
            </div>
            {expandedSection === 'saved' ? (
              <ChevronUp className="w-5 h-5 text-[#766B63]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#766B63]" />
            )}
          </button>

          {expandedSection === 'saved' && (
            <div className="p-5 sm:p-6 pt-0 border-t border-[#DED5C5] animate-fadeIn space-y-4">
              <p className="text-xs sm:text-sm text-[#766B63] font-serif">
                You have {savedCount} classic dish{savedCount === 1 ? '' : 'es'} bookmarked in your personal cookbook.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onNavigate('saved')}
                  className="px-5 py-2.5 rounded-xl bg-[#294936] hover:bg-[#203a2b] text-[#FFFDF7] text-xs font-semibold font-sans flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-all"
                >
                  <span>Open Full Saved Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigate('discover')}
                  className="px-4 py-2.5 rounded-xl bg-[#F8F3E8] border border-[#DED5C5] text-[#2C241F] text-xs font-semibold font-sans flex items-center justify-center gap-1.5 cursor-pointer hover:bg-[#EFEAE1]"
                >
                  <Utensils className="w-3.5 h-3.5 text-[#6B705C]" />
                  <span>Discover More Dishes</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
