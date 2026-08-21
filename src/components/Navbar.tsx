import React from 'react';
import { Home, Compass, Bookmark, User } from 'lucide-react';
import { TabType } from '../types';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  savedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onSelectTab, savedCount }) => {
  const navItems: { id: TabType; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'discover', label: 'Discover', icon: Compass },
    { id: 'saved', label: 'Saved', icon: Bookmark },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFDF7]/95 backdrop-blur-md border-t border-[#DED5C5] px-3 py-1.5 sm:py-2">
      <div className="max-w-md mx-auto flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-4 rounded-xl transition-all relative cursor-pointer group ${
                isActive
                  ? 'text-[#294936]'
                  : 'text-[#766B63] hover:text-[#2C241F]'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110 text-[#294936] stroke-[2.3]' : 'stroke-[1.8] group-hover:scale-105'
                  }`}
                />
                {item.id === 'saved' && savedCount > 0 && (
                  <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-[#B85C38] text-white text-[9px] font-bold flex items-center justify-center shadow-xs">
                    {savedCount}
                  </span>
                )}
              </div>
              <span className={`text-[11px] mt-0.5 tracking-tight ${isActive ? 'font-bold text-[#294936]' : 'font-medium'}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="w-4 h-0.5 bg-[#B85C38] rounded-full mt-0.5" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

