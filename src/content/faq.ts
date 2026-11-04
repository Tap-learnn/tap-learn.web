export interface FaqItem {
  question: string;
  answer: string;
  category: "offline" | "features" | "privacy" | "availability";
}

export const faqList: FaqItem[] = [
  {
    question: "Does Tap & Learn require an internet connection to look up words?",
    answer:
      "No. Tap & Learn operates 100% offline. The English lexicon and definitions are bundled directly into the application, so you can read on flights, commutes, or in remote areas without Wi-Fi or cellular data.",
    category: "offline",
  },
  {
    question: "How does the tap-to-define feature work in PDF files?",
    answer:
      "When viewing any text-based PDF, tap or select any word. Tap & Learn captures the word coordinates and queries its offline dictionary database, instantly surfacing the word's definition, phonetic notation, and contextual example in a sleek bottom sheet.",
    category: "features",
  },
  {
    question: "What is the difference between 'Standard' and 'Plain English' modes?",
    answer:
      "Standard mode delivers rigorous, academic definitions with full etymology and parts of speech. Plain English mode translates complex ideas into simple, clear words so you can quickly understand challenging vocabulary without getting bogged down.",
    category: "features",
  },
  {
    question: "Are my documents or reading activity uploaded to a server?",
    answer:
      "Never. All PDF rendering, text extraction, saved vocabulary, and reading statistics remain strictly on your local device. Tap & Learn has no user account requirement and sends zero reading data to the cloud.",
    category: "privacy",
  },
  {
    question: "Can I review and practice words I find while reading?",
    answer:
      "Yes! When you look up a word, tap the Bookmark icon to save it. You can review your saved vocabulary anytime using interactive Flashcards and multiple-choice Quizzes designed for active recall.",
    category: "features",
  },
  {
    question: "When and where can I download the app?",
    answer:
      "Tap & Learn is in final pre-release readiness for Android on the Google Play Store, with iOS in active development. You can try our live interactive browser demo on this page and join our notification list to be notified the moment the store release goes live.",
    category: "availability",
  },
];
