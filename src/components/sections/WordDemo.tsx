"use client";

import * as React from "react";
import {
  Volume2,
  Bookmark,
  BookmarkCheck,
  Sparkles,
  Layers,
  BookOpen,
  Info,
  Check,
  ArrowDown,
} from "lucide-react";
import { demoLexicon, samplePassages, type DemoWordDetail } from "@/content/demoWords";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WordDemo() {
  const [selectedWordKey, setSelectedWordKey] = React.useState<string>("resilience");
  const [isEasyMode, setIsEasyMode] = React.useState<boolean>(false);
  const [savedWords, setSavedWords] = React.useState<Set<string>>(new Set(["resilience"]));
  const [isSpeaking, setIsSpeaking] = React.useState<boolean>(false);
  const [saveToast, setSaveToast] = React.useState<string | null>(null);
  const sheetRef = React.useRef<HTMLDivElement>(null);

  const activeEntry: DemoWordDetail = demoLexicon[selectedWordKey] || demoLexicon["resilience"];
  const passage = samplePassages[0];

  const handleWordTap = (targetKey: string) => {
    setSelectedWordKey(targetKey);
  };

  // Smooth scroll only when user explicitly requests on mobile
  const scrollToSheet = () => {
    sheetRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  // Web Speech API for TTS Pronunciation
  const handlePronounce = (word: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US";
      utterance.rate = 0.9;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleSaveWord = (word: string) => {
    setSavedWords((prev) => {
      const next = new Set(prev);
      if (next.has(word)) {
        next.delete(word);
        setSaveToast(`Removed "${word}" from saved vocabulary`);
      } else {
        next.add(word);
        setSaveToast(`Saved "${word}" to your offline vocabulary!`);
      }
      return next;
    });

    setTimeout(() => {
      setSaveToast(null);
    }, 2800);
  };

  return (
    <section id="demo" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-brand-200/40 via-purple-200/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Live Interactive Demo"
          badgeVariant="brand"
          title="Try Tap & Learn Right in"
          highlight="Your Browser"
          subtitle="Experience the actual mobile word-lookup flow. Tap any highlighted word below to open the authentic definition sheet with audio pronunciation, plain-English mode, and bookmarks."
        />

        {/* Demo Notice Banner */}
        <div className="mt-8 max-w-2xl mx-auto bg-brand-50/80 border border-brand-200/80 rounded-2xl p-3 sm:p-4 flex items-center justify-between gap-3 text-xs sm:text-sm text-brand-900 shadow-sm">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-brand-600 shrink-0" />
            <span>
              <strong>Simulated Offline Demo:</strong> Runs 100% locally in your browser with zero network requests.
            </span>
          </div>
          <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-brand-200/70 text-brand-800 font-bold text-[11px] uppercase tracking-wide">
            Interactive
          </span>
        </div>

        {/* Two-Column Demo Workbench */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Simulated PDF Reading Canvas */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 shadow-card border border-slate-200 relative">
            {/* Top Toolbar mimicking mobile PDF Reader */}
            <div className="flex items-center justify-between pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xs shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {passage.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    {passage.source}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                  Page 4 of 28
                </span>
              </div>
            </div>

            {/* Reading Document Canvas */}
            <div className="prose prose-slate max-w-none text-slate-800 text-base sm:text-lg leading-[2] sm:leading-[2.2] font-normal selection:bg-brand-100">
              <div className="bg-slate-50/70 p-4 sm:p-7 rounded-2xl border border-slate-100">
                {passage.tokens.map((token, index) => {
                  if (!token.isTarget || !token.targetKey) {
                    return <span key={index}>{token.text}</span>;
                  }

                  const isSelected = selectedWordKey === token.targetKey;
                  const isSaved = savedWords.has(token.targetKey);

                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleWordTap(token.targetKey!)}
                      aria-pressed={isSelected}
                      className={`inline-flex items-center mx-1 px-2.5 sm:px-3 py-1 sm:py-0.5 my-1 rounded-lg font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 touch-manipulation min-h-[38px] ${
                        isSelected
                          ? "bg-brand-600 text-white shadow-md shadow-brand-600/30 scale-105"
                          : isSaved
                          ? "bg-purple-100 text-purple-800 hover:bg-purple-200 border-b-2 border-purple-400"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-200 border-b-2 border-blue-400 animate-soft-pulse"
                      }`}
                      title={`Tap to define "${token.text}"`}
                    >
                      <span>{token.text}</span>
                      {isSaved && !isSelected && (
                        <span className="ml-1 w-1.5 h-1.5 rounded-full bg-purple-600 inline-block" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Jump-To-Sheet Indicator */}
            <div className="mt-4 flex lg:hidden items-center justify-between gap-2 p-2.5 rounded-xl bg-brand-50 border border-brand-100 text-brand-800 text-xs">
              <span className="font-semibold">
                Selected: <strong className="capitalize text-brand-900">{activeEntry.lemma}</strong>
              </span>
              <button
                type="button"
                onClick={scrollToSheet}
                className="flex items-center gap-1 font-bold text-brand-700 hover:underline min-h-[36px] px-2 py-1"
              >
                <span>View Sheet</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Helper Hint */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-600 inline-block" />
                <span>Tap any colored word to inspect its definition</span>
              </div>
              <div className="flex items-center gap-2 text-purple-700 font-medium">
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>{savedWords.size} word{savedWords.size === 1 ? "" : "s"} saved in this demo</span>
              </div>
            </div>
          </div>

          {/* Right Column: Replicated Mobile WordMeaningBottomSheet */}
          <div ref={sheetRef} className="lg:col-span-5 relative scroll-mt-24">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden transition-all duration-300">
              {/* Header Drag Handle mimicking Android ModalBottomSheet */}
              <div className="pt-3 pb-1 flex justify-center">
                <div className="w-12 h-1.5 rounded-full bg-slate-300" />
              </div>

              {/* Sheet Body */}
              <div className="p-5 sm:p-7 space-y-5">
                {/* Word Title + Pronunciation + Actions */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 capitalize tracking-tight">
                        {activeEntry.lemma}
                      </h3>
                      {/* Audio Pronunciation Button */}
                      <button
                        type="button"
                        onClick={() => handlePronounce(activeEntry.lemma)}
                        aria-label={`Listen to pronunciation of ${activeEntry.lemma}`}
                        className={`p-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                          isSpeaking
                            ? "bg-brand-600 text-white animate-pulse"
                            : "bg-brand-50 text-brand-600 hover:bg-brand-100"
                        }`}
                        title="Click to hear pronunciation"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Phonetic IPA + Part of Speech */}
                    <div className="flex items-center gap-2.5 mt-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-slate-500 font-mono">
                        {activeEntry.phonetic}
                      </span>
                      <span className="px-2 sm:px-2.5 py-0.5 rounded-md bg-brand-50 text-brand-700 font-bold text-xs capitalize border border-brand-100">
                        {activeEntry.partOfSpeech}
                      </span>
                    </div>
                  </div>

                  {/* Bookmark Button with 44x44px touch target */}
                  <button
                    type="button"
                    onClick={() => toggleSaveWord(activeEntry.lemma)}
                    aria-label={
                      savedWords.has(activeEntry.lemma)
                        ? `Remove ${activeEntry.lemma} from saved vocabulary`
                        : `Save ${activeEntry.lemma} to vocabulary`
                    }
                    className={`p-3 rounded-2xl border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 min-w-[44px] min-h-[44px] flex items-center justify-center ${
                      savedWords.has(activeEntry.lemma)
                        ? "bg-purple-50 text-accent-purple border-purple-200 hover:bg-purple-100"
                        : "bg-slate-50 text-slate-400 border-slate-200 hover:text-slate-600 hover:bg-slate-100"
                    }`}
                    title={savedWords.has(activeEntry.lemma) ? "Saved to Library" : "Save Word"}
                  >
                    {savedWords.has(activeEntry.lemma) ? (
                      <BookmarkCheck className="w-5 h-5 fill-accent-purple" />
                    ) : (
                      <Bookmark className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Mode Selector Toggle Switch (Standard vs Plain English) */}
                <div className="bg-slate-100 p-1 rounded-2xl flex items-center border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setIsEasyMode(false)}
                    className={`flex-1 py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-h-[40px] ${
                      !isEasyMode
                        ? "bg-brand-600 text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span>Standard Mode</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEasyMode(true)}
                    className={`flex-1 py-2.5 px-2 sm:px-3 rounded-xl text-xs sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-h-[40px] ${
                      isEasyMode
                        ? "bg-accent-purple text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Plain English</span>
                  </button>
                </div>

                {/* Definition Box */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                    isEasyMode
                      ? "bg-purple-50/70 border-purple-100 text-purple-950"
                      : "bg-blue-50/60 border-blue-100 text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {isEasyMode ? (
                      <span className="text-[11px] font-black uppercase tracking-wider text-accent-purple flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5" /> Plain-English Meaning
                      </span>
                    ) : (
                      <span className="text-[11px] font-black uppercase tracking-wider text-brand-600 flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5" /> Academic Definition
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base leading-relaxed font-medium">
                    {isEasyMode ? activeEntry.plainEnglishDefinition : activeEntry.standardDefinition}
                  </p>
                </div>

                {/* Example Sentence */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                    Example Usage:
                  </span>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{activeEntry.example}&rdquo;
                  </div>
                </div>

                {/* Synonyms Chips */}
                {activeEntry.synonyms.length > 0 && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                      Contextual Synonyms:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeEntry.synonyms.map((syn) => (
                        <span
                          key={syn}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
                        >
                          {syn}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Etymology / Tip Note */}
                {activeEntry.tip && (
                  <p className="text-[11px] text-slate-600 pt-3 border-t border-slate-100 leading-snug">
                    💡 <strong>Word Note:</strong> {activeEntry.tip}
                  </p>
                )}
              </div>
            </div>

            {/* Toast Feedback Fixed to viewport bottom on all screens */}
            {saveToast && (
              <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-full shadow-2xl flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-4 duration-200 whitespace-nowrap border border-slate-700">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{saveToast}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
