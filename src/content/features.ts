export interface Feature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: "BookOpen" | "Sparkles" | "Layers" | "Volume2" | "Bookmark" | "BrainCircuit" | "BarChart3" | "ShieldCheck";
  badge?: string;
  category: "reading" | "vocabulary" | "privacy";
}

export const featuresList: Feature[] = [
  {
    id: "offline-pdf-reader",
    title: "100% Offline PDF Reader",
    tagline: "No internet required",
    description:
      "Open and read your study documents, medical notes, textbooks, and research papers directly from your device storage with instant page navigation and smooth scrolling.",
    iconName: "BookOpen",
    badge: "Offline First",
    category: "reading",
  },
  {
    id: "instant-tap-lookup",
    title: "Instant Tap-to-Define",
    tagline: "Never lose your reading flow",
    description:
      "Simply tap or select any unfamiliar word on a page. A clean lookup sheet surfaces the precise definition, part of speech, and usage examples without switching apps.",
    iconName: "Sparkles",
    badge: "Core Feature",
    category: "reading",
  },
  {
    id: "dual-definition-modes",
    title: "Standard & Plain English Modes",
    tagline: "Definitions that make sense",
    description:
      "Toggle effortlessly between rigorous academic definitions and beginner-friendly, simplified explanations designed for rapid comprehension.",
    iconName: "Layers",
    badge: "Adaptive",
    category: "reading",
  },
  {
    id: "audio-pronunciation",
    title: "Native Audio Pronunciation",
    tagline: "Master phonetic confidence",
    description:
      "Listen to crystal-clear word pronunciations and study accurate IPA phonetic notations, powered entirely by your device's built-in text-to-speech engine.",
    iconName: "Volume2",
    badge: "Built-in TTS",
    category: "vocabulary",
  },
  {
    id: "saved-vocabulary-library",
    title: "Personal Vocabulary Vault",
    tagline: "Build a lasting word bank",
    description:
      "Bookmark difficult words with a single tap. Your saved words remember the exact document and page where you discovered them.",
    iconName: "Bookmark",
    badge: "Smart Bookmarks",
    category: "vocabulary",
  },
  {
    id: "flashcards-and-quizzes",
    title: "Spaced Flashcards & Practice Quizzes",
    tagline: "Active recall built-in",
    description:
      "Transform your saved reading vocabulary into interactive flashcards and multiple-choice quizzes to reinforce memory retention.",
    iconName: "BrainCircuit",
    badge: "Active Learning",
    category: "vocabulary",
  },
  {
    id: "reading-analytics",
    title: "Reading Progress & Stats",
    tagline: "Celebrate learning milestones",
    description:
      "Monitor reading time, documents explored, and vocabulary expansion metrics over days and weeks with private on-device statistics.",
    iconName: "BarChart3",
    badge: "Analytics",
    category: "reading",
  },
  {
    id: "zero-tracking-privacy",
    title: "Guaranteed Zero-Data Tracking",
    tagline: "Your books belong to you",
    description:
      "No mandatory accounts, no cloud sync, and no third-party tracking scripts. Your PDFs and learning history stay private on your hardware.",
    iconName: "ShieldCheck",
    badge: "100% Private",
    category: "privacy",
  },
];
