import React, { useState, useRef } from 'react';
import {
  X,
  Printer,
  Download,
  Share2,
  Copy,
  Check,
  Sparkles,
  Clock,
  Users,
  ChefHat,
  Flame,
  Image as ImageIcon,
  FileText,
  Sliders,
  UtensilsCrossed,
  Heart,
  Scale
} from 'lucide-react';
import { Recipe } from '../types';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface RecipeCardModalProps {
  recipe: Recipe;
  isOpen: boolean;
  onClose: () => void;
  initialServingsScale?: number;
}

export const RecipeCardModal: React.FC<RecipeCardModalProps> = ({
  recipe,
  isOpen,
  onClose,
  initialServingsScale = 1,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [includeImage, setIncludeImage] = useState<boolean>(true);
  const [includeNutrition, setIncludeNutrition] = useState<boolean>(true);
  const [includeNotes, setIncludeNotes] = useState<boolean>(true);
  const [cardTheme, setCardTheme] = useState<'classic' | 'vintage' | 'minimal'>('classic');
  const [cardSize, setCardSize] = useState<'letter' | 'index'>('letter');
  const [servingsScale, setServingsScale] = useState<number>(initialServingsScale);
  const [isExportingPdf, setIsExportingPdf] = useState<boolean>(false);
  const [isExportingImage, setIsExportingImage] = useState<boolean>(false);
  const [copiedText, setCopiedText] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const baseServings = parseInt(recipe.servings) || 2;
  const scaledServings = Math.round(baseServings * servingsScale);

  const handleDownloadPdf = async () => {
    if (!cardRef.current) return;
    setIsExportingPdf(true);
    showToast('Generating high-resolution PDF...');

    try {
      // Temporarily ensure card styling is optimal for rasterization
      const element = cardRef.current;
      
      const canvas = await html2canvas(element, {
        scale: 2.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: cardTheme === 'vintage' ? '#F4EDE2' : '#FFFDF7',
        logging: false,
        windowWidth: 1024,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      const isLetter = cardSize === 'letter';

      // Orientation & format
      const pdf = new jsPDF({
        orientation: isLetter ? 'portrait' : 'landscape',
        unit: 'mm',
        format: isLetter ? 'a4' : [127, 178], // 5x7 inches in mm
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;

      let renderWidth = pdfWidth - 16; // 8mm margins
      let renderHeight = renderWidth / ratio;

      if (renderHeight > pdfHeight - 16) {
        renderHeight = pdfHeight - 16;
        renderWidth = renderHeight * ratio;
      }

      const posX = (pdfWidth - renderWidth) / 2;
      const posY = (pdfHeight - renderHeight) / 2;

      pdf.addImage(imgData, 'JPEG', posX, posY, renderWidth, renderHeight);
      
      const sanitizedName = (recipe.title || 'Recipe')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      pdf.save(`${sanitizedName}-Recipe-Card.pdf`);
      showToast('PDF downloaded successfully!');
    } catch (err) {
      console.error('PDF export error:', err);
      showToast('Could not generate PDF. You can also use the Print button.');
    } finally {
      setIsExportingPdf(false);
    }
  };

  const handleDownloadPng = async () => {
    if (!cardRef.current) return;
    setIsExportingImage(true);
    showToast('Rendering PNG image...');

    try {
      const element = cardRef.current;
      const canvas = await html2canvas(element, {
        scale: 2.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#FFFDF7',
      });

      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      const sanitizedName = (recipe.title || 'Recipe')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-');
      link.download = `${sanitizedName}-card.png`;
      link.href = dataUrl;
      link.click();
      showToast('Recipe card PNG downloaded!');
    } catch (err) {
      console.error('PNG export error:', err);
      showToast('Failed to export image.');
    } finally {
      setIsExportingImage(false);
    }
  };

  const handlePrintCard = () => {
    window.print();
  };

  const handleCopyCardText = async () => {
    const text = `📖 ${recipe.title.toUpperCase()}
----------------------------------------
⏱ Time: ${recipe.time} | 👥 Servings: ${scaledServings} | 👨‍🍳 Difficulty: ${recipe.difficulty}
🔥 Calories: ${recipe.calories || (recipe.nutrition ? `${recipe.nutrition.calories} kcal` : 'N/A')}

📝 INGREDIENTS:
${recipe.ingredients.map((ing, i) => ` • ${ing}`).join('\n')}

👨‍🍳 INSTRUCTIONS:
${recipe.instructions.map((step, i) => ` ${i + 1}. ${step}`).join('\n\n')}
${
  recipe.substitutions && recipe.substitutions.length > 0 && includeNotes
    ? `\n💡 CHEF'S NOTES & SUBSTITUTIONS:\n${recipe.substitutions
        .map((s) => ` • ${s.original} ➔ ${s.substitute} ${s.notes ? `(${s.notes})` : ''}`)
        .join('\n')}`
    : ''
}
----------------------------------------
Crafted with Cooksweet • Classic Culinary Collection`;

    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      }
      setCopiedText(true);
      showToast('Recipe card formatted text copied!');
      setTimeout(() => setCopiedText(false), 2000);
    } catch (e) {
      showToast('Failed to copy text.');
    }
  };

  // Theme styling helpers
  const getThemeBg = () => {
    switch (cardTheme) {
      case 'vintage':
        return 'bg-[#F4EDE2] border-[#C5B49C] text-[#362B24]';
      case 'minimal':
        return 'bg-[#FFFFFF] border-[#E5E7EB] text-[#1F2937]';
      case 'classic':
      default:
        return 'bg-[#FFFDF7] border-[#DED5C5] text-[#2C241F]';
    }
  };

  return (
    <div
      id="recipe-card-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-60 bg-[#294936] text-[#FFFDF7] px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-md flex items-center gap-2 border border-[#FFFDF7]/20">
          <Sparkles className="w-4 h-4 text-[#E6C687]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Modal Box */}
      <div className="relative w-full max-w-5xl bg-[#F8F3E8] border border-[#DED5C5] rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 bg-[#FFFDF7] border-b border-[#DED5C5]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#294936]/10 text-[#294936] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#2C241F] leading-tight">
                Export to Recipe Card
              </h3>
              <p className="text-xs text-[#766B63]">
                Format, print, or download a classic keepsake recipe card
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#F8F3E8] hover:bg-[#DED5C5] text-[#2C241F] flex items-center justify-center transition-all cursor-pointer border border-[#DED5C5]"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Left Controls, Right Preview */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#F8F3E8]">
          {/* Controls Panel (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Action Bar */}
            <div className="bg-[#FFFDF7] p-4 rounded-2xl border border-[#DED5C5] space-y-2.5 shadow-xs">
              <h4 className="font-serif font-bold text-sm text-[#2C241F] flex items-center gap-1.5 pb-1 border-b border-[#DED5C5]">
                <Download className="w-4 h-4 text-[#294936]" />
                Export & Print Actions
              </h4>

              <button
                onClick={handleDownloadPdf}
                disabled={isExportingPdf}
                className="w-full py-3 px-4 rounded-xl bg-[#294936] hover:bg-[#203a2b] disabled:opacity-60 text-white font-serif font-bold text-sm flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{isExportingPdf ? 'Exporting PDF...' : 'Download PDF Card'}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handlePrintCard}
                  className="py-2.5 px-3 rounded-xl bg-[#FFFDF7] hover:bg-[#F8F3E8] text-[#2C241F] font-serif font-semibold text-xs flex items-center justify-center gap-1.5 border border-[#DED5C5] transition-all cursor-pointer"
                  title="Open Print Dialog"
                >
                  <Printer className="w-4 h-4 text-[#6B705C]" />
                  <span>Print Card</span>
                </button>

                <button
                  onClick={handleDownloadPng}
                  disabled={isExportingImage}
                  className="py-2.5 px-3 rounded-xl bg-[#FFFDF7] hover:bg-[#F8F3E8] text-[#2C241F] font-serif font-semibold text-xs flex items-center justify-center gap-1.5 border border-[#DED5C5] transition-all cursor-pointer"
                  title="Download as PNG"
                >
                  <ImageIcon className="w-4 h-4 text-[#B85C38]" />
                  <span>PNG Image</span>
                </button>
              </div>

              <button
                onClick={handleCopyCardText}
                className="w-full py-2.5 px-3 rounded-xl bg-[#F8F3E8] hover:bg-[#DED5C5] text-[#2C241F] text-xs font-semibold flex items-center justify-center gap-1.5 border border-[#DED5C5] transition-all cursor-pointer"
              >
                {copiedText ? (
                  <>
                    <Check className="w-4 h-4 text-[#294936]" />
                    <span>Card Text Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#766B63]" />
                    <span>Copy Formatted Text</span>
                  </>
                )}
              </button>
            </div>

            {/* Customization Options */}
            <div className="bg-[#FFFDF7] p-4 rounded-2xl border border-[#DED5C5] space-y-4 shadow-xs">
              <h4 className="font-serif font-bold text-sm text-[#2C241F] flex items-center gap-1.5 pb-1 border-b border-[#DED5C5]">
                <Sliders className="w-4 h-4 text-[#B85C38]" />
                Card Style & Layout
              </h4>

              {/* Theme Picker */}
              <div>
                <label className="text-xs font-bold text-[#766B63] uppercase tracking-wider block mb-1.5">
                  Aesthetic Theme
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'classic', label: 'Classic Cream' },
                    { id: 'vintage', label: 'Vintage Kraft' },
                    { id: 'minimal', label: 'Clean White' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setCardTheme(t.id as any)}
                      className={`py-2 px-2 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                        cardTheme === t.id
                          ? 'bg-[#294936] text-white border-[#294936] font-bold shadow-xs'
                          : 'bg-[#F8F3E8] text-[#766B63] border-[#DED5C5] hover:text-[#2C241F]'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format / Layout */}
              <div>
                <label className="text-xs font-bold text-[#766B63] uppercase tracking-wider block mb-1.5">
                  Card Format
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCardSize('letter')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                      cardSize === 'letter'
                        ? 'bg-[#294936] text-white border-[#294936] font-bold shadow-xs'
                        : 'bg-[#F8F3E8] text-[#766B63] border-[#DED5C5]'
                    }`}
                  >
                    📄 Full Page (A4/Letter)
                  </button>
                  <button
                    onClick={() => setCardSize('index')}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                      cardSize === 'index'
                        ? 'bg-[#294936] text-white border-[#294936] font-bold shadow-xs'
                        : 'bg-[#F8F3E8] text-[#766B63] border-[#DED5C5]'
                    }`}
                  >
                    🏷️ 5x7" Index Card
                  </button>
                </div>
              </div>

              {/* Serving portion scale */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-[#766B63] uppercase tracking-wider">
                    Servings Portions
                  </label>
                  <span className="text-xs font-bold text-[#294936]">
                    {scaledServings} servings ({servingsScale}x)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[0.5, 1, 1.5, 2].map((sc) => (
                    <button
                      key={sc}
                      onClick={() => setServingsScale(sc)}
                      className={`flex-1 py-1.5 rounded-md text-xs font-semibold border transition-all cursor-pointer ${
                        servingsScale === sc
                          ? 'bg-[#294936] text-white border-[#294936]'
                          : 'bg-[#F8F3E8] text-[#766B63] border-[#DED5C5]'
                      }`}
                    >
                      {sc}x
                    </button>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-2 pt-2 border-t border-[#DED5C5]">
                <label className="flex items-center justify-between text-xs text-[#2C241F] cursor-pointer">
                  <span>Include Recipe Photo</span>
                  <input
                    type="checkbox"
                    checked={includeImage}
                    onChange={(e) => setIncludeImage(e.target.checked)}
                    className="accent-[#294936] w-4 h-4 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between text-xs text-[#2C241F] cursor-pointer">
                  <span>Include Nutrition Summary</span>
                  <input
                    type="checkbox"
                    checked={includeNutrition}
                    onChange={(e) => setIncludeNutrition(e.target.checked)}
                    className="accent-[#294936] w-4 h-4 cursor-pointer"
                  />
                </label>

                <label className="flex items-center justify-between text-xs text-[#2C241F] cursor-pointer">
                  <span>Include Chef's Notes & Substitutions</span>
                  <input
                    type="checkbox"
                    checked={includeNotes}
                    onChange={(e) => setIncludeNotes(e.target.checked)}
                    className="accent-[#294936] w-4 h-4 cursor-pointer"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Live Card Preview (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col items-center justify-start overflow-auto">
            <div className="w-full mb-2 flex items-center justify-between text-xs text-[#766B63] px-2">
              <span className="font-serif italic">Live Card Preview</span>
              <span>Ready for high-res rendering</span>
            </div>

            {/* Printable Recipe Card Container */}
            <div
              ref={cardRef}
              id="printable-recipe-card"
              className={`printable-recipe-card w-full ${getThemeBg()} border-2 rounded-2xl p-6 sm:p-8 shadow-sm transition-all relative overflow-hidden`}
              style={{
                maxWidth: cardSize === 'index' ? '680px' : '760px',
              }}
            >
              {/* Outer Decorative Classical Border Frame */}
              <div className="absolute inset-2 border border-current opacity-20 pointer-events-none rounded-xl" />
              <div className="absolute inset-3 border-t border-b border-current opacity-10 pointer-events-none" />

              {/* Card Header & Brand Emblem */}
              <div className="flex items-center justify-between border-b-2 border-[#294936]/20 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#294936] text-white flex items-center justify-center">
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-serif font-bold text-xs uppercase tracking-widest text-[#294936] block">
                      Cooksweet
                    </span>
                    <span className="text-[10px] text-[#766B63] font-sans">
                      Classic Culinary Collection
                    </span>
                  </div>
                </div>

                <div className="text-right flex items-center gap-1.5 justify-end flex-wrap">
                  {recipe.state && (
                    <span className="inline-block px-2 py-0.5 rounded-full bg-[#B85C38]/15 text-[#B85C38] font-bold text-[10px] uppercase tracking-wider font-sans">
                      {recipe.state}
                    </span>
                  )}
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#294936]/10 text-[#294936] font-bold text-[11px] uppercase tracking-wider font-sans">
                    {recipe.cuisine || recipe.category || 'Featured Dish'}
                  </span>
                </div>
              </div>

              {/* Title & Metadata Top Grid */}
              <div className="flex flex-col sm:flex-row gap-4 items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="font-serif font-bold text-2xl sm:text-3xl text-current leading-tight mb-1">
                    {recipe.title}
                  </h1>
                  {recipe.description && (
                    <p className="text-xs sm:text-sm italic opacity-80 font-serif leading-relaxed line-clamp-2">
                      "{recipe.description}"
                    </p>
                  )}
                </div>

                {/* Optional Hero Image Thumbnail */}
                {includeImage && recipe.imageUrl && (
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-current/20 shrink-0 bg-[#DED5C5] shadow-xs">
                    <img
                      src={recipe.imageUrl}
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                )}
              </div>

              {/* Metadata Highlights Bar */}
              <div className="grid grid-cols-4 gap-2 py-2 px-3 rounded-xl bg-current/5 border border-current/10 mb-5 text-center font-sans text-xs">
                <div>
                  <span className="block font-bold text-current">{recipe.time}</span>
                  <span className="text-[9px] uppercase tracking-wider opacity-70">Total Time</span>
                </div>
                <div className="border-l border-current/10">
                  <span className="block font-bold text-current">{scaledServings} Servings</span>
                  <span className="text-[9px] uppercase tracking-wider opacity-70">Portions</span>
                </div>
                <div className="border-l border-current/10">
                  <span className="block font-bold text-current">{recipe.difficulty}</span>
                  <span className="text-[9px] uppercase tracking-wider opacity-70">Difficulty</span>
                </div>
                <div className="border-l border-current/10">
                  <span className="block font-bold text-[#B85C38]">
                    {recipe.calories || (recipe.nutrition ? `${recipe.nutrition.calories} kcal` : '380 kcal')}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider opacity-70">Calories</span>
                </div>
              </div>

              {/* Ingredients & Instructions (2-Columns or Stacked depending on size) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-4">
                {/* Ingredients Column (5 cols) */}
                <div className="md:col-span-5 bg-current/3 p-3.5 rounded-xl border border-current/10">
                  <h3 className="font-serif font-bold text-sm uppercase tracking-wider text-current mb-2.5 pb-1 border-b border-current/15 flex items-center justify-between">
                    <span>Ingredients</span>
                    <span className="text-[10px] font-sans opacity-70 font-normal">
                      {recipe.ingredients.length} items
                    </span>
                  </h3>
                  <ul className="space-y-1.5 text-xs font-serif leading-relaxed">
                    {recipe.ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#294936] mt-1.5 shrink-0" />
                        <span className="opacity-90">{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions Column (7 cols) */}
                <div className="md:col-span-7">
                  <h3 className="font-serif font-bold text-sm uppercase tracking-wider text-current mb-2.5 pb-1 border-b border-current/15">
                    Directions & Steps
                  </h3>
                  <ol className="space-y-2.5 text-xs font-serif leading-relaxed">
                    {recipe.instructions.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#294936] text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="opacity-90 pt-0.5">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Optional Chef's Notes / Substitutions */}
              {includeNotes && recipe.substitutions && recipe.substitutions.length > 0 && (
                <div className="mt-3 p-3 rounded-xl bg-[#294936]/5 border border-[#294936]/15 text-xs">
                  <div className="font-serif font-bold text-[11px] text-[#294936] mb-1 uppercase tracking-wider">
                    Chef's Notes & Substitutions
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {recipe.substitutions.slice(0, 3).map((sub, sIdx) => (
                      <div key={sIdx} className="text-[11px] leading-tight">
                        <span className="font-semibold">{sub.original}</span> ➔ {sub.substitute}
                        {sub.notes && <span className="opacity-70 italic block">({sub.notes})</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Optional Nutrition Facts Row */}
              {includeNutrition && recipe.nutrition && (
                <div className="mt-3 pt-2.5 border-t border-current/15 flex flex-wrap items-center justify-between text-[11px] font-sans opacity-80 gap-2">
                  <span className="font-bold uppercase tracking-wider text-[10px]">
                    Nutrition Facts / Serving:
                  </span>
                  <div className="flex items-center gap-3">
                    <span><b>{recipe.nutrition.calories}</b> kcal</span>
                    <span><b>{recipe.nutrition.protein}g</b> Protein</span>
                    <span><b>{recipe.nutrition.carbs}g</b> Carbs</span>
                    <span><b>{recipe.nutrition.fat}g</b> Fat</span>
                    <span><b>{recipe.nutrition.fiber}g</b> Fiber</span>
                  </div>
                </div>
              )}

              {/* Footer Stamp */}
              <div className="mt-4 pt-3 border-t border-current/15 flex items-center justify-between text-[10px] opacity-60 font-sans">
                <span>Handcrafted with Cooksweet • Classic Culinary Companion</span>
                <span>cooksweet.app</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
