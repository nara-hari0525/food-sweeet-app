import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Volume2,
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  Timer,
  Sparkles,
  Mic,
  MicOff,
  Flame,
  Clock
} from 'lucide-react';
import { Recipe } from '../types';

interface CookingModeModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const CookingModeModal: React.FC<CookingModeModalProps> = ({ recipe, onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceNotice, setVoiceNotice] = useState<string | null>(null);

  // Timer states
  const [timerSeconds, setTimerSeconds] = useState(300); // 5 mins default
  const [timerRunning, setTimerRunning] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  const totalSteps = recipe.instructions.length;
  const isLastStep = currentStepIndex === totalSteps - 1;
  const currentStepText = recipe.instructions[currentStepIndex] || '';

  // Timer tick effect
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && timerRunning) {
      setTimerRunning(false);
      // Play ding or speech
      if ('speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance('Timer finished! Check your dish.');
        window.speechSynthesis.speak(u);
      }
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  // Voice speech synthesis
  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(
        `Step ${currentStepIndex + 1} of ${totalSteps}. ${currentStepText}`
      );
      utterance.rate = 0.95;
      utterance.pitch = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  // Voice recognition / command toggle
  const toggleVoiceControl = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setVoiceNotice('Voice control not supported in this browser. Use buttons to navigate.');
      setTimeout(() => setVoiceNotice(null), 3500);
      return;
    }

    if (isListening) {
      setIsListening(false);
      setVoiceNotice(null);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setVoiceNotice('Listening for "Next", "Back", "Repeat", or "Timer"...');
      };

      recognition.onresult = (event: any) => {
        const last = event.results.length - 1;
        const command = event.results[last][0].transcript.trim().toLowerCase();

        if (command.includes('next') || command.includes('forward')) {
          handleNext();
          setVoiceNotice('Voice Command: Moving to next step');
        } else if (command.includes('back') || command.includes('previous')) {
          handlePrev();
          setVoiceNotice('Voice Command: Moving to previous step');
        } else if (command.includes('read') || command.includes('repeat')) {
          handleSpeak();
          setVoiceNotice('Voice Command: Reading instructions');
        } else if (command.includes('timer')) {
          setShowTimer(true);
          setTimerRunning((prev) => !prev);
          setVoiceNotice('Voice Command: Toggling kitchen timer');
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } catch (e) {
      setIsListening(false);
    }
  };

  const handleToggleComplete = (idx: number) => {
    setCompletedSteps((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handleNext = () => {
    if (!completedSteps.includes(currentStepIndex)) {
      setCompletedSteps((prev) => [...prev, currentStepIndex]);
    }
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      if (isSpeaking) {
        window.speechSynthesis?.cancel();
        setIsSpeaking(false);
      }
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
      if (isSpeaking) {
        window.speechSynthesis?.cancel();
        setIsSpeaking(false);
      }
    }
  };

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const addTimerMinutes = (mins: number) => {
    setTimerSeconds((prev) => Math.max(0, prev + mins * 60));
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#2C241F]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#FFFDF7] border border-[#DED5C5] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="px-5 py-4 border-b border-[#DED5C5] bg-[#F8F3E8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B85C38] bg-[#B85C38]/10 px-2.5 py-1 rounded-full border border-[#B85C38]/20">
              Cooking Mode
            </span>
            <h2 className="font-serif font-bold text-base sm:text-lg text-[#2C241F] line-clamp-1">
              {recipe.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FFFDF7] border border-[#DED5C5] text-[#766B63] hover:text-[#2C241F] flex items-center justify-center cursor-pointer transition-colors shadow-xs"
            title="Exit cooking mode"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Subtle Step Progress Indicator */}
        <div className="w-full bg-[#DED5C5]/50 h-2">
          <div
            className="bg-[#294936] h-full transition-all duration-300 rounded-r-full"
            style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
          />
        </div>

        {/* Cooking Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Step Meta & Controls */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-xl sm:text-2xl text-[#294936]">
                  Step {currentStepIndex + 1}
                </span>
                <span className="text-xs text-[#766B63] font-medium font-sans">
                  of {totalSteps}
                </span>
              </div>

              {/* Action Toolbar (Read, Voice, Timer) */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Voice Read aloud */}
                <button
                  onClick={handleSpeak}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border ${
                    isSpeaking
                      ? 'bg-[#B85C38] text-white border-[#B85C38]'
                      : 'bg-[#F8F3E8] text-[#2C241F] border-[#DED5C5] hover:bg-[#FFFDF7]'
                  }`}
                  title="Read step instruction aloud"
                >
                  {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#B85C38]" />}
                  <span className="hidden sm:inline">{isSpeaking ? 'Stop' : 'Read'}</span>
                </button>

                {/* Voice Control Listener */}
                <button
                  onClick={toggleVoiceControl}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border ${
                    isListening
                      ? 'bg-[#294936] text-white border-[#294936] animate-pulse'
                      : 'bg-[#F8F3E8] text-[#2C241F] border-[#DED5C5] hover:bg-[#FFFDF7]'
                  }`}
                  title="Toggle hands-free voice commands"
                >
                  {isListening ? <Mic className="w-3.5 h-3.5 text-white" /> : <MicOff className="w-3.5 h-3.5 text-[#766B63]" />}
                  <span className="hidden sm:inline">Voice</span>
                </button>

                {/* Kitchen Timer Toggle */}
                <button
                  onClick={() => setShowTimer(!showTimer)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border ${
                    showTimer
                      ? 'bg-[#294936] text-white border-[#294936]'
                      : 'bg-[#F8F3E8] text-[#2C241F] border-[#DED5C5] hover:bg-[#FFFDF7]'
                  }`}
                  title="Open cooking timer"
                >
                  <Clock className="w-3.5 h-3.5 text-[#B85C38]" />
                  <span className="hidden sm:inline">Timer</span>
                </button>
              </div>
            </div>

            {/* Voice notice popup */}
            {voiceNotice && (
              <div className="mb-4 p-2.5 rounded-xl bg-[#F8F3E8] border border-[#DED5C5] text-xs font-medium text-[#294936] flex items-center gap-2 animate-fadeIn">
                <Sparkles className="w-4 h-4 text-[#B85C38] shrink-0" />
                <span>{voiceNotice}</span>
              </div>
            )}

            {/* Integrated Kitchen Timer Panel */}
            {showTimer && (
              <div className="mb-5 p-4 rounded-2xl bg-[#F8F3E8] border border-[#DED5C5] flex flex-col sm:flex-row items-center justify-between gap-3 animate-fadeIn">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#294936]/10 flex items-center justify-center text-[#294936]">
                    <Timer className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-[#766B63] block">
                      Kitchen Timer
                    </span>
                    <span className="font-serif font-bold text-2xl text-[#2C241F]">
                      {formatTimer(timerSeconds)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className="px-4 py-1.5 rounded-xl bg-[#294936] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs cursor-pointer hover:bg-[#203a2b]"
                  >
                    {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span>{timerRunning ? 'Pause' : 'Start'}</span>
                  </button>
                  <button
                    onClick={() => {
                      setTimerRunning(false);
                      setTimerSeconds(300);
                    }}
                    className="p-2 rounded-xl bg-[#FFFDF7] border border-[#DED5C5] text-[#766B63] hover:text-[#2C241F] cursor-pointer"
                    title="Reset to 5m"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => addTimerMinutes(1)}
                    className="px-2.5 py-1.5 rounded-xl bg-[#FFFDF7] border border-[#DED5C5] text-xs font-semibold text-[#2C241F] cursor-pointer hover:bg-[#F8F3E8]"
                  >
                    +1m
                  </button>
                  <button
                    onClick={() => addTimerMinutes(5)}
                    className="px-2.5 py-1.5 rounded-xl bg-[#FFFDF7] border border-[#DED5C5] text-xs font-semibold text-[#2C241F] cursor-pointer hover:bg-[#F8F3E8]"
                  >
                    +5m
                  </button>
                </div>
              </div>
            )}

            {/* Large Recipe Photo in Step Interface */}
            <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden mb-6 border border-[#DED5C5]">
              <img
                src={recipe.imageUrl}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C241F]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white/90 font-medium">
                  {recipe.title} • {recipe.time} total time
                </span>
              </div>
            </div>

            {/* Large, Readable Instruction Card */}
            <div className="bg-[#F8F3E8] border border-[#DED5C5] rounded-2xl p-6 mb-4 shadow-xs">
              <p className="text-lg sm:text-2xl text-[#2C241F] font-serif leading-relaxed">
                {currentStepText}
              </p>
            </div>

            {/* Mark as Done Checkbox Button */}
            <div className="flex justify-center">
              <button
                onClick={() => handleToggleComplete(currentStepIndex)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer border ${
                  completedSteps.includes(currentStepIndex)
                    ? 'bg-[#294936] text-[#FFFDF7] border-[#294936] shadow-xs'
                    : 'bg-[#FFFDF7] text-[#2C241F] border-[#DED5C5] hover:border-[#294936]'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {completedSteps.includes(currentStepIndex)
                    ? 'Step Completed'
                    : 'Mark Step as Done'}
                </span>
              </button>
            </div>
          </div>

          {/* Bottom Navigation Controls */}
          <div className="pt-6 border-t border-[#DED5C5] flex items-center justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className={`px-4 sm:px-5 py-3 rounded-xl border border-[#DED5C5] text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                currentStepIndex === 0
                  ? 'opacity-40 cursor-not-allowed text-[#766B63] bg-[#F8F3E8]'
                  : 'bg-[#FFFDF7] text-[#2C241F] hover:bg-[#F8F3E8]'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <span className="text-xs text-[#766B63] font-medium hidden sm:inline">
              Step {currentStepIndex + 1} of {totalSteps}
            </span>

            {isLastStep ? (
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl bg-[#294936] text-[#FFFDF7] font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover:bg-[#203a2b] cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Finish Cooking</span>
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-3 rounded-xl bg-[#B85C38] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm hover:bg-[#a24e2e] cursor-pointer"
              >
                <span>Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
