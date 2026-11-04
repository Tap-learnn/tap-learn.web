export interface DemoWordDetail {
  lemma: string;
  phonetic: string;
  partOfSpeech: string;
  standardDefinition: string;
  plainEnglishDefinition: string;
  example: string;
  synonyms: string[];
  antonyms?: string[];
  tip?: string;
}

export interface DemoPassage {
  id: string;
  title: string;
  source: string;
  tokens: Array<{
    text: string;
    isTarget: boolean;
    targetKey?: string;
  }>;
}

export const demoLexicon: Record<string, DemoWordDetail> = {
  resilience: {
    lemma: "resilience",
    phonetic: "/rɪˈzɪl.jəns/",
    partOfSpeech: "noun",
    standardDefinition:
      "The capacity of an organism, system, or individual to withstand or recover quickly from difficult conditions, shocks, or emotional adversity.",
    plainEnglishDefinition:
      "The inner strength to bounce back and stay strong even when things get tough or go wrong.",
    example:
      "Her mental resilience helped her overcome repeated setbacks during medical research.",
    synonyms: ["fortitude", "toughness", "endurance", "grit"],
    antonyms: ["fragility", "vulnerability"],
    tip: "Derived from the Latin 'resilire', meaning 'to spring back'.",
  },
  luminous: {
    lemma: "luminous",
    phonetic: "/ˈluː.mɪ.nəs/",
    partOfSpeech: "adjective",
    standardDefinition:
      "Emitting or reflecting steady, suffused, or glowing light; figuratively clear, enlightened, or easily understood.",
    plainEnglishDefinition:
      "Shining brightly with glowing light; full of clarity and warmth.",
    example:
      "The deep-sea bioluminescent jellyfish cast a luminous glow across the dark ocean trench.",
    synonyms: ["radiant", "glowing", "lucid", "brilliant"],
    antonyms: ["opaque", "dark", "dim"],
    tip: "Related to 'illumination' and 'luminary'.",
  },
  curiosity: {
    lemma: "curiosity",
    phonetic: "/ˌkjʊə.riˈɒs.ə.ti/",
    partOfSpeech: "noun",
    standardDefinition:
      "A strong intrinsic desire to know, discover, or understand something novel, complex, or unfamiliar.",
    plainEnglishDefinition:
      "An eager eagerness to learn new things and ask questions about the world.",
    example:
      "Scientific curiosity has sparked humanity's greatest astronomical and technological leaps.",
    synonyms: ["inquisitiveness", "interest", "wonder", "inquiry"],
    antonyms: ["indifference", "apathy"],
    tip: "Active curiosity is proven to boost memory retention by up to 40%.",
  },
  profound: {
    lemma: "profound",
    phonetic: "/prəˈfaʊnd/",
    partOfSpeech: "adjective",
    standardDefinition:
      "Possessing or demonstrating great intellectual depth, insight, or emotional intensity; extending far below the surface.",
    plainEnglishDefinition:
      "Very deep, important, and meaningful; having a major lasting effect.",
    example:
      "Reading classical literature had a profound impact on her worldview and analytical writing.",
    synonyms: ["deep", "insightful", "momentous", "thorough"],
    antonyms: ["superficial", "shallow", "trivial"],
    tip: "From Latin 'profundus' (pro = forth, fundus = bottom).",
  },
  serendipity: {
    lemma: "serendipity",
    phonetic: "/ˌser.ənˈdɪp.ə.ti/",
    partOfSpeech: "noun",
    standardDefinition:
      "The faculty or phenomenon of finding valuable or pleasant things not sought for; fortunate coincidence.",
    plainEnglishDefinition:
      "A happy accident where you unexpectedly find something wonderful while looking for something else.",
    example:
      "Discovering penicillin was a stroke of scientific serendipity that revolutionized modern medicine.",
    synonyms: ["chance", "good fortune", "fluke", "kismet"],
    antonyms: ["misfortune", "predictability"],
    tip: "Coined by Horace Walpole in 1754 from the Persian fairy tale 'The Three Princes of Serendip'.",
  },
};

export const samplePassages: DemoPassage[] = [
  {
    id: "science-ocean",
    title: "The Midnight Zone: Exploring the Abyssal Depths",
    source: "Marine Biology & Oceanographic Foundations · Chapter 4",
    tokens: [
      { text: "When explorers descend into the abyss, they encounter creatures exhibiting remarkable ", isTarget: false },
      { text: "resilience", isTarget: true, targetKey: "resilience" },
      { text: " against crushing atmospheric pressures. Surrounded by utter darkness, many species produce a ", isTarget: false },
      { text: "luminous", isTarget: true, targetKey: "luminous" },
      { text: " display of bioluminescence to navigate and communicate. Driven by unrelenting human ", isTarget: false },
      { text: "curiosity", isTarget: true, targetKey: "curiosity" },
      { text: ", modern oceanographers continue to uncover ", isTarget: false },
      { text: "profound", isTarget: true, targetKey: "profound" },
      { text: " ecological mysteries, often guided by pure scientific ", isTarget: false },
      { text: "serendipity", isTarget: true, targetKey: "serendipity" },
      { text: " as ancient underwater wonders are revealed.", isTarget: false },
    ],
  },
];
