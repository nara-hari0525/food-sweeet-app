import React, { useState, useEffect } from 'react';
import {
  X,
  Copy,
  Check,
  Share2,
  Download,
  Mail,
  MessageSquare,
  Send,
  ExternalLink,
  Bluetooth,
  HardDrive,
  Sparkles,
  FileText
} from 'lucide-react';
import { Recipe } from '../types';
import {
  formatRecipeShareText,
  getRecipeShareUrl,
  triggerNativeShare,
  getAppShareUrls,
  downloadRecipeFile
} from '../utils/shareUtils';

interface AndroidShareSheetProps {
  recipe: Recipe;
  isOpen: boolean;
  onClose: () => void;
  onOpenRecipeCard?: () => void;
}

export const AndroidShareSheet: React.FC<AndroidShareSheetProps> = ({
  recipe,
  isOpen,
  onClose,
  onOpenRecipeCard,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleCopyLink = async () => {
    const url = getRecipeShareUrl(recipe);
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      } else {
        const input = document.createElement('input');
        input.value = url;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setIsCopied(true);
      showToast('Link copied to clipboard');
      setTimeout(() => setIsCopied(false), 2000);
    } catch (e) {
      showToast('Failed to copy link');
    }
  };

  const handleCopyFullRecipe = async () => {
    const fullText = formatRecipeShareText(recipe);
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(fullText);
      }
      showToast('Full recipe copied with ingredients & steps');
    } catch (e) {
      showToast('Failed to copy recipe text');
    }
  };

  const handleSystemShare = async () => {
    const shareText = formatRecipeShareText(recipe);
    const shareUrl = getRecipeShareUrl(recipe);

    const used = await triggerNativeShare({
      title: recipe.title,
      text: shareText,
      url: shareUrl,
    });

    if (used) {
      onClose();
    } else {
      showToast('Opening standard share options below');
    }
  };

  const shareUrls = getAppShareUrls(recipe);

  const handleAppClick = (appKey: keyof typeof shareUrls) => {
    const targetUrl = shareUrls[appKey];
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      onClose();
    }
  };

  const handleDownloadTxt = () => {
    downloadRecipeFile(recipe, 'txt');
    showToast('Recipe downloaded as text file');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#2C241F]/60 backdrop-blur-xs transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      {/* Android Bottom Sheet Container */}
      <div
        className="w-full max-w-lg bg-[#FFFDF7] border-t border-x border-[#DED5C5] rounded-t-[28px] p-5 sm:p-6 pb-8 shadow-2xl text-[#2C241F] transform transition-transform animate-slideUp max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Android Drag Handle */}
        <div className="w-12 h-1.5 bg-[#DED5C5] rounded-full mx-auto mb-4 shrink-0" />

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <h2 className="font-serif font-bold text-lg text-[#2C241F]">Share Recipe</h2>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#294936]/10 text-[#294936] border border-[#294936]/20 font-sans">
              Android Sharesheet
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F8F3E8] text-[#766B63] hover:text-[#2C241F] flex items-center justify-center cursor-pointer transition-colors border border-[#DED5C5]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Preview Card (Android 14 Rich Preview) */}
        <div className="bg-[#F8F3E8] border border-[#DED5C5] rounded-2xl p-3.5 flex items-center gap-3.5 mb-5 shrink-0">
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#DED5C5]"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-serif font-bold text-sm text-[#2C241F] truncate">
              {recipe.title}
            </h3>
            <p className="text-xs text-[#766B63] truncate mt-0.5 font-sans">
              {recipe.time} • {recipe.servings} Servings • {recipe.difficulty}
            </p>
            <span className="text-[11px] text-[#294936] font-medium block truncate mt-0.5 font-serif">
              Cooksweet Cookbook Recipe
            </span>
          </div>
        </div>

        {/* Scrollable Actions Area */}
        <div className="overflow-y-auto space-y-5 flex-1 pr-1">
          {/* Quick Action Chips */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#766B63] block mb-2.5 font-sans">
              Quick Actions
            </span>
            <div className="flex flex-wrap gap-2">
              {/* Native System Chooser Action */}
              <button
                onClick={handleSystemShare}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#294936] text-[#FFFDF7] text-xs font-semibold shadow-xs hover:bg-[#203a2b] transition-all cursor-pointer font-sans"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share via System Chooser</span>
              </button>

              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F8F3E8] hover:bg-[#FFFDF7] border border-[#DED5C5] text-xs font-medium text-[#2C241F] transition-colors cursor-pointer font-sans"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#294936]" />
                    <span className="text-[#294936] font-semibold">Link Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#766B63]" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>

              {/* Export to Recipe Card (PDF / Print) */}
              {onOpenRecipeCard && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenRecipeCard();
                  }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#294936]/10 hover:bg-[#294936]/20 border border-[#294936]/30 text-xs font-semibold text-[#294936] transition-colors cursor-pointer font-sans"
                >
                  <FileText className="w-3.5 h-3.5 text-[#294936]" />
                  <span>Recipe Card (PDF)</span>
                </button>
              )}

              {/* Copy Full Text */}
              <button
                onClick={handleCopyFullRecipe}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F8F3E8] hover:bg-[#FFFDF7] border border-[#DED5C5] text-xs font-medium text-[#2C241F] transition-colors cursor-pointer font-sans"
              >
                <FileText className="w-3.5 h-3.5 text-[#766B63]" />
                <span>Copy Full Recipe</span>
              </button>

              {/* Save / Export File */}
              <button
                onClick={handleDownloadTxt}
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F8F3E8] hover:bg-[#FFFDF7] border border-[#DED5C5] text-xs font-medium text-[#2C241F] transition-colors cursor-pointer font-sans"
              >
                <Download className="w-3.5 h-3.5 text-[#766B63]" />
                <span>Save .txt</span>
              </button>
            </div>
          </div>

          {/* Android Target Apps Grid */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#766B63] block mb-3 font-sans">
              Direct App Intents
            </span>

            <div className="grid grid-cols-4 gap-y-4 gap-x-2 text-center">
              {/* WhatsApp */}
              <button
                onClick={() => handleAppClick('whatsapp')}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-white text-[#25D366]" />
                </div>
                <span className="text-xs text-[#2C241F] mt-1.5 font-medium font-sans">
                  WhatsApp
                </span>
              </button>

              {/* Messages / SMS */}
              <button
                onClick={() => handleAppClick('sms')}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1A73E8] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Send className="w-6 h-6 fill-white text-[#1A73E8]" />
                </div>
                <span className="text-xs text-[#2C241F] mt-1.5 font-medium font-sans">
                  Messages
                </span>
              </button>

              {/* Gmail */}
              <button
                onClick={() => handleAppClick('gmail')}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EA4335] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 fill-white text-[#EA4335]" />
                </div>
                <span className="text-xs text-[#2C241F] mt-1.5 font-medium font-sans">
                  Gmail
                </span>
              </button>

              {/* Telegram */}
              <button
                onClick={() => handleAppClick('telegram')}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#229ED9] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-[#2C241F] mt-1.5 font-medium font-sans">
                  Telegram
                </span>
              </button>

              {/* Google Drive / Cloud */}
              <button
                onClick={handleDownloadTxt}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0F9D58] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <HardDrive className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-[#2C241F] mt-1.5 font-medium font-sans">
                  Drive
                </span>
              </button>

              {/* Bluetooth */}
              <button
                onClick={handleDownloadTxt}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0082FC] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Bluetooth className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs text-[#2C241F] mt-1.5 font-medium font-sans">
                  Bluetooth
                </span>
              </button>

              {/* Social / X */}
              <button
                onClick={() => handleAppClick('twitter')}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#2C241F] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs text-[#2C241F] mt-1.5 font-medium font-sans">
                  Social
                </span>
              </button>

              {/* More / Native Intent */}
              <button
                onClick={handleSystemShare}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F8F3E8] border border-[#DED5C5] text-[#294936] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <Share2 className="w-6 h-6" />
                </div>
                <span className="text-xs text-[#294936] mt-1.5 font-semibold font-sans">
                  Share via...
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Toast feedback */}
        {toastMessage && (
          <div className="mt-4 p-2.5 rounded-xl bg-[#294936] text-[#FFFDF7] text-xs font-semibold text-center flex items-center justify-center gap-2 animate-fadeIn font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#B85C38]" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};
