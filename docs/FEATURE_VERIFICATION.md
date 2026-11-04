# Tap & Learn — Feature Verification Matrix

**Last Verified:** Production Codebase Review (`com.tapandlearn`)  
**Status:** Canonical Reference

| Feature ID | Feature Name | Codebase Status | Promotional Claim on Website |
|---|---|---|---|
| **F01** | Offline PDF Reading | ✅ Verified in `PdfReaderScreen.kt` | "Read PDFs anywhere without an internet connection." |
| **F02** | Tap-to-Define Lexicon | ✅ Verified in `WordMeaningBottomSheet.kt` | "Tap any unfamiliar word to view instant definitions and IPA phonetics." |
| **F03** | Standard & Plain English Modes | ✅ Verified in `WordMeaningBottomSheet.kt` (Standard vs Easy toggle) | "Toggle between detailed academic definitions and simple, easy-to-grasp explanations." |
| **F04** | Audio Pronunciation | ✅ Verified in `TtsManager.kt` via on-device TTS | "Hear correct native pronunciation powered by on-device text-to-speech." |
| **F05** | Vocabulary Builder & Bookmarks | ✅ Verified in `SavedWordsScreen.kt` & `VocabularyRepository.kt` | "Save words directly to your personal library for future revision." |
| **F06** | Interactive Flashcards | ✅ Verified in `FlashcardsScreen.kt` | "Strengthen retention with quick flashcard flips on saved vocabulary." |
| **F07** | Knowledge Quizzes | ✅ Verified in `QuizScreen.kt` | "Challenge your comprehension with automated multiple-choice vocabulary quizzes." |
| **F08** | Reading Statistics | ✅ Verified in `ReadingStatisticsScreen.kt` | "Track reading progress, books opened, and vocabulary expansion over time." |
| **F09** | 100% Local Privacy | ✅ Verified in `AndroidManifest.xml` (no INTERNET permission in MVP) | "No account required, no tracking. Your books and study data never leave your phone." |
| **F10** | App Store / Play Store Release | ⏳ Release pending; no public store link | Transparent "Coming Soon / Get Notified" state; no fake download links. |
