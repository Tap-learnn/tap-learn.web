export interface AssetReference {
  filename: string;
  sourcePath: string;
  category: "mobile-screen" | "brand-asset" | "marketing";
  status: "approved" | "provisional";
  description: string;
  usageLocation: string;
}

export const assetInventory: AssetReference[] = [
  {
    filename: "app_logo_3d.webp",
    sourcePath: "/brand/app_logo_3d.webp",
    category: "brand-asset",
    status: "approved",
    description: "Official Tap & Learn 3D glossy logo with purple book and magnifying glass symbol",
    usageLocation: "Navbar, Hero badge, and branding callouts",
  },
  {
    filename: "home_header_logo.webp",
    sourcePath: "/brand/home_header_logo.webp",
    category: "brand-asset",
    status: "approved",
    description: "Horizontal wordmark brand logo used in mobile app top app bar",
    usageLocation: "Navbar header and footer signature",
  },
  {
    filename: "ic_3d_purple_book.webp",
    sourcePath: "/brand/ic_3d_purple_book.webp",
    category: "brand-asset",
    status: "approved",
    description: "Official 3D rendered purple textbook icon",
    usageLocation: "Feature cards and decorative 3D floating accents",
  },
  {
    filename: "ic_3d_folder.webp",
    sourcePath: "/brand/ic_3d_folder.webp",
    category: "brand-asset",
    status: "approved",
    description: "Official 3D rendered documents folder icon",
    usageLocation: "Features section and offline storage callout",
  },
  {
    filename: "05_Home_Screen.png",
    sourcePath: "/screenshots/05_Home_Screen.png",
    category: "mobile-screen",
    status: "approved",
    description: "Mobile Home Dashboard showing recent books, library shortcuts, and reading stats",
    usageLocation: "Screenshots gallery and Device Frame showcase",
  },
  {
    filename: "07_PDF_Reader.png",
    sourcePath: "/screenshots/07_PDF_Reader.png",
    category: "mobile-screen",
    status: "approved",
    description: "Active PDF reading interface with clean document viewer and page control",
    usageLocation: "Hero phone mockup and core features walkthrough",
  },
  {
    filename: "08_Word_Meaning.png",
    sourcePath: "/screenshots/08_Word_Meaning.png",
    category: "mobile-screen",
    status: "approved",
    description: "Interactive word meaning bottom sheet with phonetic IPA, definitions, and examples",
    usageLocation: "Interactive Demo background, How It Works step 2",
  },
  {
    filename: "06_PDF_Library.png",
    sourcePath: "/screenshots/06_PDF_Library.png",
    category: "mobile-screen",
    status: "approved",
    description: "Document library showcasing imported PDF files, progress meters, and search",
    usageLocation: "Screenshots gallery",
  },
  {
    filename: "10_Saved_Words.png",
    sourcePath: "/screenshots/10_Saved_Words.png",
    category: "mobile-screen",
    status: "approved",
    description: "Vocabulary repository of bookmarked words organized with review intervals",
    usageLocation: "Screenshots gallery",
  },
  {
    filename: "11_Flashcards.png",
    sourcePath: "/screenshots/11_Flashcards.png",
    category: "mobile-screen",
    status: "approved",
    description: "Active recall flashcard study screen",
    usageLocation: "Features section and Screenshots gallery",
  },
  {
    filename: "12_Quiz.png",
    sourcePath: "/screenshots/12_Quiz.png",
    category: "mobile-screen",
    status: "approved",
    description: "Multiple-choice vocabulary quiz testing retention",
    usageLocation: "Screenshots gallery",
  },
  {
    filename: "13_Reading_Statistics.png",
    sourcePath: "/screenshots/13_Reading_Statistics.png",
    category: "mobile-screen",
    status: "approved",
    description: "Reading progress metrics and vocabulary expansion chart",
    usageLocation: "Screenshots gallery",
  },
  {
    filename: "14_Settings.png",
    sourcePath: "/screenshots/14_Settings.png",
    category: "mobile-screen",
    status: "approved",
    description: "App configuration, dictionary mode selection, and theme controls",
    usageLocation: "Screenshots gallery",
  },
];
