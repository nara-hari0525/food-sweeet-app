import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { TabType } from '../types';

interface HeaderProps {
  currentTab: TabType;
  onNavigate: (tab: TabType) => void;
  onOpenKitchenAi?: () => void;
  savedCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenKitchenAi }) => {
  return (
    <header className="sticky top-0 z-30 bg-[#F8F3E8]/95 backdrop-blur-md border-b border-[#DED5C5] px-4 py-2.5 sm:px-6 transition-colors">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* App Logo & Classic Brand Title */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#294936] text-[#FFFDF7] flex items-center justify-center shadow-xs border border-[#294936]/20 transition-transform group-hover:scale-105">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif font-bold text-xl sm:text-2xl text-[#2C241F] tracking-tight group-hover:text-[#294936] transition-colors">
              Cooksweet
            </span>
            <span className="text-[10px] uppercase font-sans tracking-wider font-bold px-1.5 py-0.5 rounded bg-[#DED5C5]/70 text-[#6B705C]">
              Cookbook
            </span>
          </div>
        </button>

        {/* Header Right Action - Contextual AI Generator */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenKitchenAi || (() => onNavigate('home'))}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-semibold bg-[#FFFDF7] text-[#294936] border border-[#DED5C5] hover:border-[#294936] hover:bg-[#F8F3E8] transition-all cursor-pointer shadow-xs active:scale-95"
            title="Create recipe from available ingredients"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B85C38]" />
            <span className="font-medium">Kitchen AI</span>
          </button>
        </div>
      </div>
    </header>
  );
};
