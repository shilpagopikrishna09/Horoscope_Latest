export interface ZodiacSign {
  id: string;
  name: string;
  symbol: string;
  element: "fire" | "earth" | "air" | "water";
  dateRange: string;
  traits: string[];
  ruling: string;
  emoji: string;
}

export const zodiacSigns: ZodiacSign[] = [
  {
    id: "aries",
    name: "Aries",
    symbol: "♈",
    element: "fire",
    dateRange: "Mar 21 - Apr 19",
    traits: ["Energetic", "Passionate", "Leader", "Confident"],
    ruling: "Mars",
    emoji: "🐏",
  },
  {
    id: "taurus",
    name: "Taurus",
    symbol: "♉",
    element: "earth",
    dateRange: "Apr 20 - May 20",
    traits: ["Reliable", "Patient", "Practical", "Devoted"],
    ruling: "Venus",
    emoji: "🐂",
  },
  {
    id: "gemini",
    name: "Gemini",
    symbol: "♊",
    element: "air",
    dateRange: "May 21 - Jun 20",
    traits: ["Adaptable", "Curious", "Social", "Witty"],
    ruling: "Mercury",
    emoji: "👥",
  },
  {
    id: "cancer",
    name: "Cancer",
    symbol: "♋",
    element: "water",
    dateRange: "Jun 21 - Jul 22",
    traits: ["Intuitive", "Emotional", "Protective", "Nurturing"],
    ruling: "Moon",
    emoji: "🦀",
  },
  {
    id: "leo",
    name: "Leo",
    symbol: "♌",
    element: "fire",
    dateRange: "Jul 23 - Aug 22",
    traits: ["Generous", "Loyal", "Creative", "Dramatic"],
    ruling: "Sun",
    emoji: "🦁",
  },
  {
    id: "virgo",
    name: "Virgo",
    symbol: "♍",
    element: "earth",
    dateRange: "Aug 23 - Sep 22",
    traits: ["Analytical", "Practical", "Kind", "Hardworking"],
    ruling: "Mercury",
    emoji: "👸",
  },
  {
    id: "libra",
    name: "Libra",
    symbol: "♎",
    element: "air",
    dateRange: "Sep 23 - Oct 22",
    traits: ["Diplomatic", "Fair-minded", "Social", "Idealistic"],
    ruling: "Venus",
    emoji: "⚖️",
  },
  {
    id: "scorpio",
    name: "Scorpio",
    symbol: "♏",
    element: "water",
    dateRange: "Oct 23 - Nov 21",
    traits: ["Passionate", "Mysterious", "Intuitive", "Intense"],
    ruling: "Pluto",
    emoji: "🦂",
  },
  {
    id: "sagittarius",
    name: "Sagittarius",
    symbol: "♐",
    element: "fire",
    dateRange: "Nov 22 - Dec 21",
    traits: ["Adventurous", "Optimistic", "Philosophical", "Free-spirited"],
    ruling: "Jupiter",
    emoji: "🏹",
  },
  {
    id: "capricorn",
    name: "Capricorn",
    symbol: "♑",
    element: "earth",
    dateRange: "Dec 22 - Jan 19",
    traits: ["Ambitious", "Disciplined", "Practical", "Responsible"],
    ruling: "Saturn",
    emoji: "🐐",
  },
  {
    id: "aquarius",
    name: "Aquarius",
    symbol: "♒",
    element: "air",
    dateRange: "Jan 20 - Feb 18",
    traits: ["Independent", "Innovative", "Humanitarian", "Eccentric"],
    ruling: "Uranus",
    emoji: "🏺",
  },
  {
    id: "pisces",
    name: "Pisces",
    symbol: "♓",
    element: "water",
    dateRange: "Feb 19 - Mar 20",
    traits: ["Compassionate", "Artistic", "Intuitive", "Gentle"],
    ruling: "Neptune",
    emoji: "🐟",
  },
];

export const elementColors = {
  fire: {
    bg: "bg-gradient-to-br from-red-500 to-orange-500",
    text: "text-red-600",
    icon: "🔥",
  },
  earth: {
    bg: "bg-gradient-to-br from-green-500 to-emerald-600",
    text: "text-green-600",
    icon: "🌍",
  },
  air: {
    bg: "bg-gradient-to-br from-blue-400 to-cyan-500",
    text: "text-blue-500",
    icon: "💨",
  },
  water: {
    bg: "bg-gradient-to-br from-blue-600 to-indigo-600",
    text: "text-blue-700",
    icon: "💧",
  },
};

// Mock horoscope data - in a real app, this would come from an API
export const generateDailyHoroscope = (signId: string): string => {
  const horoscopes = {
    aries: [
      "Today brings dynamic energy your way, Aries. Channel your natural leadership into new projects that showcase your pioneering spirit.",
      "Your ruling planet Mars ignites your passion today. Take bold action on something you've been considering - the stars are aligned in your favor.",
      "Adventure calls to you today, Ram. Trust your instincts and embrace opportunities that challenge your courage and determination.",
    ],
    taurus: [
      "Stability and comfort are your themes today, Taurus. Focus on building something lasting rather than chasing quick wins.",
      "Venus brings harmony to your relationships today. It's an ideal time to strengthen bonds and appreciate life's simple pleasures.",
      "Your practical nature serves you well today, Bull. Trust your steady approach - slow and steady wins the race.",
    ],
    gemini: [
      "Communication flows effortlessly today, Gemini. Your wit and charm open doors to new connections and exciting conversations.",
      "Mercury enhances your mental agility today. It's perfect timing for learning something new or sharing your knowledge with others.",
      "Variety is the spice of life today, Twins. Embrace change and let your curiosity guide you to unexpected discoveries.",
    ],
    cancer: [
      "Your intuition is especially strong today, Cancer. Trust those gut feelings - they're leading you toward emotional fulfillment.",
      "The Moon illuminates your nurturing nature today. Focus on caring for yourself and those you love most deeply.",
      "Home and family take center stage today, Crab. Create a sanctuary of peace and let your protective instincts guide you.",
    ],
    leo: [
      "The spotlight finds you naturally today, Leo. Embrace your moment to shine and let your creative spirit illuminate the world.",
      "Your generous heart attracts abundance today, Lion. Share your gifts freely and watch how they multiply and return to you.",
      "Confidence radiates from you today. Step into leadership roles and inspire others with your natural charisma and warmth.",
    ],
    virgo: [
      "Attention to detail serves you brilliantly today, Virgo. Your methodical approach turns chaos into order and confusion into clarity.",
      "Service to others brings deep satisfaction today, Maiden. Your helpful nature creates positive ripples throughout your community.",
      "Health and wellness deserve focus today. Listen to your body's wisdom and make choices that nurture your overall well-being.",
    ],
    libra: [
      "Balance and harmony are your superpowers today, Libra. Mediate conflicts with grace and bring peace to challenging situations.",
      "Beauty surrounds you today, Scales. Take time to appreciate art, nature, and the aesthetic pleasures that feed your soul.",
      "Partnerships flourish under today's influence. Collaborate with others and find the perfect middle ground in all negotiations.",
    ],
    scorpio: [
      "Transformation is in the air today, Scorpio. Embrace change as an opportunity to shed old patterns and emerge renewed.",
      "Your magnetic intensity draws people to you today, Scorpion. Use this power wisely to create meaningful connections.",
      "Mysteries reveal themselves to your penetrating gaze today. Trust your ability to see beneath surfaces to hidden truths.",
    ],
    sagittarius: [
      "Adventure beckons from distant horizons today, Sagittarius. Expand your worldview through travel, learning, or philosophical exploration.",
      "Your optimism is contagious today, Archer. Share your enthusiasm and inspire others to reach for their highest aspirations.",
      "Freedom calls to your restless spirit today. Break free from limitations and follow your arrow toward exciting new territories.",
    ],
    capricorn: [
      "Ambition drives you steadily upward today, Capricorn. Your disciplined approach to goals yields tangible, lasting results.",
      "Structure and organization are your allies today, Goat. Build solid foundations that will support your long-term success.",
      "Authority comes naturally to you today. Step into leadership roles with confidence and guide others with your practical wisdom.",
    ],
    aquarius: [
      "Innovation flows through you today, Aquarius. Your unique perspective on old problems reveals brilliant, unconventional solutions.",
      "Friendship and community energize you today, Water Bearer. Connect with like-minded souls who share your humanitarian vision.",
      "Independence is your strength today. March to your own drumbeat and let your individuality inspire positive change around you.",
    ],
    pisces: [
      "Compassion guides your actions today, Pisces. Your empathetic nature heals wounds and brings comfort to those in need.",
      "Creativity flows like water today, Fish. Dive deep into artistic pursuits and let your imagination swim in boundless oceans.",
      "Intuition whispers ancient wisdom today. Listen to your inner voice and trust the spiritual insights that surface from your depths.",
    ],
  };

  const signHoroscopes =
    horoscopes[signId as keyof typeof horoscopes] || horoscopes.aries;
  const randomIndex = Math.floor(Math.random() * signHoroscopes.length);
  return signHoroscopes[randomIndex];
};

export const getDailyAffirmation = (signId: string): string => {
  const affirmations = {
    aries: "I am a powerful force of positive change and courage.",
    taurus: "I am grounded in strength and surrounded by abundance.",
    gemini: "I communicate with clarity and connect with authentic joy.",
    cancer: "I trust my intuition and nurture myself with love.",
    leo: "I shine my light brightly and inspire others to do the same.",
    virgo: "I create order and beauty in everything I touch.",
    libra: "I bring harmony and balance to every situation.",
    scorpio: "I transform challenges into opportunities for growth.",
    sagittarius: "I embrace adventure and expand my horizons fearlessly.",
    capricorn: "I achieve my goals through dedication and persistence.",
    aquarius: "I innovate and inspire positive change in the world.",
    pisces: "I flow with compassion and trust my inner wisdom.",
  };

  return (
    affirmations[signId as keyof typeof affirmations] || affirmations.aries
  );
};

export const getDailyLuckyNumber = (signId: string): number => {
  // Generate a consistent daily number based on sign and date
  const today = new Date().toDateString();
  const seed = `${signId}-${today}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash % 99) + 1; // Numbers 1-99
};

export const getDailyLuckyColor = (
  signId: string,
): { name: string; hex: string; description: string } => {
  const colorsByElement = {
    fire: [
      {
        name: "Crimson",
        hex: "#DC143C",
        description: "Bold and passionate energy",
      },
      {
        name: "Orange",
        hex: "#FF6B35",
        description: "Creative and enthusiastic vibes",
      },
      { name: "Gold", hex: "#FFD700", description: "Success and confidence" },
      {
        name: "Scarlet",
        hex: "#FF2400",
        description: "Power and determination",
      },
    ],
    earth: [
      {
        name: "Forest Green",
        hex: "#228B22",
        description: "Growth and stability",
      },
      {
        name: "Brown",
        hex: "#8B4513",
        description: "Grounding and reliability",
      },
      {
        name: "Emerald",
        hex: "#50C878",
        description: "Prosperity and harmony",
      },
      { name: "Olive", hex: "#808000", description: "Wisdom and peace" },
    ],
    air: [
      { name: "Sky Blue", hex: "#87CEEB", description: "Clear communication" },
      {
        name: "Silver",
        hex: "#C0C0C0",
        description: "Mental clarity and insight",
      },
      {
        name: "Lavender",
        hex: "#E6E6FA",
        description: "Inspiration and creativity",
      },
      { name: "Turquoise", hex: "#40E0D0", description: "Fresh perspectives" },
    ],
    water: [
      {
        name: "Deep Blue",
        hex: "#00008B",
        description: "Emotional depth and intuition",
      },
      { name: "Teal", hex: "#008080", description: "Healing and renewal" },
      { name: "Purple", hex: "#800080", description: "Spiritual connection" },
      { name: "Indigo", hex: "#4B0082", description: "Psychic awareness" },
    ],
  };

  const sign = zodiacSigns.find((s) => s.id === signId);
  const element = sign?.element || "air";
  const colors = colorsByElement[element];

  // Generate consistent daily color based on sign and date
  const today = new Date().toDateString();
  const seed = `${signId}-color-${today}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

export const getDailyCompatibleSign = (signId: string): ZodiacSign => {
  const compatibilityMap = {
    aries: ["leo", "sagittarius", "gemini", "aquarius"],
    taurus: ["virgo", "capricorn", "cancer", "pisces"],
    gemini: ["libra", "aquarius", "aries", "leo"],
    cancer: ["scorpio", "pisces", "taurus", "virgo"],
    leo: ["aries", "sagittarius", "gemini", "libra"],
    virgo: ["taurus", "capricorn", "cancer", "scorpio"],
    libra: ["gemini", "aquarius", "leo", "sagittarius"],
    scorpio: ["cancer", "pisces", "virgo", "capricorn"],
    sagittarius: ["aries", "leo", "libra", "aquarius"],
    capricorn: ["taurus", "virgo", "scorpio", "pisces"],
    aquarius: ["gemini", "libra", "sagittarius", "aries"],
    pisces: ["cancer", "scorpio", "capricorn", "taurus"],
  };

  const compatibleSigns =
    compatibilityMap[signId as keyof typeof compatibilityMap] ||
    compatibilityMap.aries;

  // Generate consistent daily compatible sign
  const today = new Date().toDateString();
  const seed = `${signId}-compatible-${today}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  const index = Math.abs(hash) % compatibleSigns.length;
  const compatibleSignId = compatibleSigns[index];

  return zodiacSigns.find((s) => s.id === compatibleSignId) || zodiacSigns[0];
};

export const getDailyLuckTime = (
  signId: string,
): { period: string; description: string } => {
  const timeSlots = [
    {
      period: "6:00 - 8:00 AM",
      description: "Dawn brings fresh opportunities",
    },
    {
      period: "8:00 - 10:00 AM",
      description: "Morning energy peaks for success",
    },
    {
      period: "10:00 AM - 12:00 PM",
      description: "Mid-morning focus and clarity",
    },
    {
      period: "12:00 - 2:00 PM",
      description: "Afternoon power and confidence",
    },
    { period: "2:00 - 4:00 PM", description: "Creative energy flows freely" },
    { period: "4:00 - 6:00 PM", description: "Social connections flourish" },
    { period: "6:00 - 8:00 PM", description: "Evening harmony and balance" },
    { period: "8:00 - 10:00 PM", description: "Twilight intuition and wisdom" },
    {
      period: "10:00 PM - 12:00 AM",
      description: "Night brings deep insights",
    },
  ];

  // Generate consistent daily luck time
  const today = new Date().toDateString();
  const seed = `${signId}-time-${today}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  const index = Math.abs(hash) % timeSlots.length;
  return timeSlots[index];
};
