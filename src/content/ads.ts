export interface EducationalSponsor {
  id: string;
  name: string;
  category: "vocabulary" | "exam-prep" | "literature" | "grammar" | "science";
  headline: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  badge: string;
  featured?: boolean;
}

export interface AdConfiguration {
  adsenseClientId: string;
  defaultSlotLeaderboard: string;
  defaultSlotRectangle: string;
  enableAdBlockerFallback: boolean;
  disclosureText: string;
  ethicalNotice: string;
}

export const adConfig: AdConfiguration = {
  adsenseClientId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "",
  defaultSlotLeaderboard: process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD || "",
  defaultSlotRectangle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_RECTANGLE || "",
  enableAdBlockerFallback: true,
  disclosureText: "Advertisement &middot; Sponsored Educational Content",
  ethicalNotice:
    "Notice: Website advertisements help fund free hosting and open-source educational documentation. The Tap & Learn mobile application operates 100% offline with zero cloud tracking and zero third-party ads.",
};

export const educationalSponsorsList: EducationalSponsor[] = [
  {
    id: "gre-sat-prep",
    name: "Oxford & Cambridge Lexicon Partners",
    category: "exam-prep",
    headline: "Accelerate Your Academic English & Vocabulary Mastery",
    description:
      "Access over 3,000 verified academic collocations, root-word breakdowns, and printable PDF study guides tailored for ESL, SAT, and GRE exam candidates.",
    ctaText: "Explore Study Guides",
    ctaUrl: "https://github.com/Tap-learnn/tap-learn.web",
    badge: "Academic Partner",
    featured: true,
  },
  {
    id: "medical-lexicon",
    name: "Global Literacy Lab",
    category: "science",
    headline: "Medical & Science Terminology Study Decks",
    description:
      "Master complex anatomical, pharmacological, and clinical Latin roots with free downloadable offline study flashcards and audio guides.",
    ctaText: "Get Free Flashcards",
    ctaUrl: "https://github.com/Tap-learnn/tap-learn.web",
    badge: "Medical Roots",
  },
  {
    id: "grammar-guides",
    name: "EduTech Ventures",
    category: "grammar",
    headline: "Interactive Bilingual Grammar Reference Guides",
    description:
      "Structured English explanations and clause-analysis cheat sheets designed for international students reading advanced textbooks and legal papers.",
    ctaText: "View Grammar Decks",
    ctaUrl: "https://github.com/Tap-learnn/tap-learn.web",
    badge: "Grammar Tools",
  },
  {
    id: "open-pdf-repo",
    name: "Open Reader Foundation",
    category: "literature",
    headline: "Public Domain Academic PDF Repository",
    description:
      "Over 10,000 classic literature, philosophy, and history PDFs formatted specifically with selectable high-resolution text for tap-to-define readers.",
    ctaText: "Browse Free PDFs",
    ctaUrl: "https://github.com/Tap-learnn/tap-learn.web",
    badge: "Free Library",
  },
  {
    id: "phonetics-mastery",
    name: "Acoustic Linguistics Institute",
    category: "vocabulary",
    headline: "Phonetic IPA & English Accent Audio Lab",
    description:
      "Interactive audio breakdowns of non-intuitive English vowel shifts, silent letters, and syllable stress patterns for ESL fluency.",
    ctaText: "Listen to Phonetics",
    ctaUrl: "https://github.com/Tap-learnn/tap-learn.web",
    badge: "Phonetics Lab",
  },
];
