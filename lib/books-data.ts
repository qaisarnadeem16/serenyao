export interface Book {
  id: string;
  title: string;
  titleGerman?: string;
  slug: string;
  collection: string;
  category: string;
  image: string;
  imageGerman?: string;
  amazonUrl?: string;
  banners?: string[];
  banner?: string;
  mockups: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  whatsInside: {
    title: string;
    items: string[];
  };
  description?: string;
  ageRange?: string;
  language?: "English" | "German" | "Both";
}

export interface Collection {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  books: Book[];
}

export const booksData: Collection[] = [
  {
    id: "kids",
    name: "Serenyao Kids Collection",
    tagline: "Where stories grow. Where imagination begins.",
    description: "Lovingly designed books that spark imagination, calm, and color.",
    image: "/assets/Banner_gesamt.29.9_/16.png",
    books: [
      {
        id: "magical-princess-kingdom",
        title: "Magical Princess Kingdom",
        titleGerman: "Magische Prinzessinnen Königreich",
        slug: "magical-princess-kingdom",
        collection: "kids",
        category: "Kids Coloring Books",
        image: "/assets/Serenyao Kids Collection/Kids coloring book/Magical Princess Kingdom.png",
        imageGerman: "/assets/Serenyao Kids Collection/Kids coloring book/German_Magisches Prinzessinnen Königreich.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/16.png",
          "/assets/Banner_gesamt.29.9_/17.png",
          "/assets/Banner_gesamt.29.9_/18.png",
        ],
        mockups: [
          "/assets/Serenyao Kids Collection/Kids coloring book/Magical Princess Kingdom.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Magical Princess Kingdom.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Magical Princess Kingdom.png",
        ],
        benefits: [
          {
            title: "Spark Creativity",
            description: "Beautiful princess-themed illustrations that inspire young artists to explore colors and express themselves.",
          },
          {
            title: "Develop Fine Motor Skills",
            description: "Carefully designed patterns help children improve hand-eye coordination and pencil control.",
          },
          {
            title: "Calm & Focus",
            description: "Engaging coloring activities that promote mindfulness and help children find peaceful moments.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "50+ unique princess-themed coloring pages",
            "Thick, high-quality paper perfect for crayons and markers",
            "Age-appropriate designs for children 4-8 years",
            "Single-sided pages to prevent bleed-through",
            "Beautiful cover design that kids will love",
          ],
        },
      },
      {
        id: "knight-dragon",
        title: "Knight & Dragon Coloring Book",
        titleGerman: "Ritter und Drachen",
        slug: "knight-dragon",
        collection: "kids",
        category: "Kids Coloring Books",
        image: "/assets/Serenyao Kids Collection/Kids coloring book/Knight&Dragons.png",
        imageGerman: "/assets/Serenyao Kids Collection/Kids coloring book/German_Ritter&Drachen.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/19.png",
          "/assets/Banner_gesamt.29.9_/20.png",
          "/assets/Banner_gesamt.29.9_/21.png",
        ],
        mockups: [
          "/assets/Serenyao Kids Collection/Kids coloring book/Knight&Dragons.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Knight&Dragons.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Knight&Dragons.png",
        ],
        benefits: [
          {
            title: "Adventure Awaits",
            description: "Epic scenes of knights and dragons that fuel imagination and storytelling.",
          },
          {
            title: "Build Confidence",
            description: "Encouraging designs that make every child feel like a creative hero.",
          },
          {
            title: "Screen-Free Fun",
            description: "Hours of engaging activity that keeps kids entertained without screens.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "45+ exciting knight and dragon illustrations",
            "Bold outlines perfect for young colorists",
            "Stories waiting to be colored and imagined",
            "Durable pages that withstand enthusiastic coloring",
            "Perfect for ages 5-10",
          ],
        },
      },
      {
        id: "ocean-coloring",
        title: "Ocean Coloring Book",
        titleGerman: "Mein Unterwasser Malbuch",
        slug: "ocean-coloring",
        collection: "kids",
        category: "Kids Coloring Books",
        image: "/assets/Serenyao Kids Collection/Kids coloring book/Ocean Coloring Book.png",
        imageGerman: "/assets/Serenyao Kids Collection/Kids coloring book/German_Zauberhaftes Unterwasser.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/22.png",
          "/assets/Banner_gesamt.29.9_/23.png",
          "/assets/Banner_gesamt.29.9_/24.png",
        ],
        mockups: [
          "/assets/Serenyao Kids Collection/Kids coloring book/Ocean Coloring Book.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Ocean Coloring Book.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Ocean Coloring Book.png",
        ],
        benefits: [
          {
            title: "Explore the Deep",
            description: "Discover the wonders of ocean life through beautiful marine-themed illustrations.",
          },
          {
            title: "Educational Fun",
            description: "Learn about sea creatures while developing artistic skills and creativity.",
          },
          {
            title: "Relaxing Activity",
            description: "Calming ocean scenes that help children unwind and focus.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "50+ underwater adventure pages",
            "Diverse sea creatures and ocean scenes",
            "Educational content about marine life",
            "High-quality paper for all coloring tools",
            "Suitable for ages 4-9",
          ],
        },
      },
      {
        id: "unicorn-coloring",
        title: "Unicorn Coloring Book",
        titleGerman: "Einhorn Ausmalbuch",
        slug: "unicorn-coloring",
        collection: "kids",
        category: "Kids Coloring Books",
        image: "/assets/Serenyao Kids Collection/Kids coloring book/Unicorn Coloring book.png",
        imageGerman: "/assets/Serenyao Kids Collection/Kids coloring book/German_Einhorn Ausmalbuch.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/25.png",
          "/assets/Banner_gesamt.29.9_/26.png",
          "/assets/Banner_gesamt.29.9_/27.png",
        ],
        mockups: [
          "/assets/Serenyao Kids Collection/Kids coloring book/Unicorn Coloring book.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Unicorn Coloring book.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Unicorn Coloring book.png",
        ],
        benefits: [
          {
            title: "Magical Moments",
            description: "Enchanting unicorn designs that bring joy and wonder to every coloring session.",
          },
          {
            title: "Boost Imagination",
            description: "Fantasy-filled pages that encourage creative thinking and storytelling.",
          },
          {
            title: "Perfect Gift",
            description: "A delightful book that makes any child's day magical and special.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "40+ magical unicorn illustrations",
            "Dreamy fantasy scenes and patterns",
            "Single-sided pages for easy display",
            "Premium paper quality",
            "Ideal for ages 4-8",
          ],
        },
      },
      {
        id: "dot-to-dot",
        title: "Dot-to-Dot Adventure",
        titleGerman: "Malen nach Zahlen",
        slug: "dot-to-dot",
        collection: "kids",
        category: "Kids Coloring Books",
        image: "/assets/Serenyao Kids Collection/Kids coloring book/Dot to Dot Adventures.png",
        imageGerman: "/assets/Serenyao Kids Collection/Kids coloring book/German_Malen nach Zahlen.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/28.png",
          "/assets/Banner_gesamt.29.9_/29.png",
          "/assets/Banner_gesamt.29.9_/30.png",
        ],
        mockups: [
          "/assets/Serenyao Kids Collection/Kids coloring book/Dot to Dot Adventures.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Dot to Dot Adventures.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Dot to Dot Adventures.png",
        ],
        benefits: [
          {
            title: "Learn Numbers",
            description: "Fun way to practice counting and number recognition while creating art.",
          },
          {
            title: "Problem Solving",
            description: "Develops logical thinking and sequencing skills through connect-the-dots puzzles.",
          },
          {
            title: "Sense of Achievement",
            description: "Completing each puzzle builds confidence and provides a rewarding experience.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "30+ dot-to-dot puzzles",
            "Progressive difficulty levels",
            "Hidden pictures revealed after connecting",
            "Number sequences from 1-50",
            "Perfect for ages 5-10",
          ],
        },
      },
      {
        id: "doodle-first",
        title: "Doodle – My First Coloring Book (Ages 1–3)",
        titleGerman: "Kritzeln – Malbuch zum Vorlesen",
        slug: "doodle-first",
        collection: "kids",
        category: "Kids Coloring Books",
        image: "/assets/Serenyao Kids Collection/Kids coloring book/Doodle my first coloring book.png",
        imageGerman: "/assets/Serenyao Kids Collection/Kids coloring book/German_Kritzel Malbuch zum Vorlesen.png",
        language: "Both",
        ageRange: "1-3",
        banners: [
          "/assets/Banner_gesamt.29.9_/31.png",
          "/assets/Banner_gesamt.29.9_/32.png",
          "/assets/Banner_gesamt.29.9_/33.png",
        ],
        mockups: [
          "/assets/Serenyao Kids Collection/Kids coloring book/Doodle my first coloring book.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Doodle my first coloring book.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Doodle my first coloring book.png",
        ],
        benefits: [
          {
            title: "First Steps in Art",
            description: "Simple, large designs perfect for tiny hands just beginning their creative journey.",
          },
          {
            title: "Sensory Development",
            description: "Helps toddlers develop hand-eye coordination and fine motor skills.",
          },
          {
            title: "Bonding Time",
            description: "Perfect for parents and children to enjoy together during reading and coloring.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "Extra-large, simple illustrations",
            "Thick pages that won't tear easily",
            "Safe, non-toxic paper quality",
            "20+ age-appropriate designs",
            "Perfect for crayons and washable markers",
          ],
        },
      },
      {
        id: "big-toddler",
        title: "Big Toddler Coloring Book (1–3)",
        slug: "big-toddler",
        collection: "kids",
        category: "Kids Coloring Books",
        image: "/assets/Serenyao Kids Collection/Kids coloring book/Doodle my first coloring book.png",
        language: "English",
        ageRange: "1-3",
        banners: [
          "/assets/Banner_gesamt.29.9_/34.png",
          "/assets/Banner_gesamt.29.9_/35.png",
          "/assets/Banner_gesamt.29.9_/36.png",
        ],
        mockups: [
          "/assets/Serenyao Kids Collection/Kids coloring book/Doodle my first coloring book.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Doodle my first coloring book.png",
          "/assets/Serenyao Kids Collection/Kids coloring book/Doodle my first coloring book.png",
        ],
        benefits: [
          {
            title: "Perfect for Little Hands",
            description: "Designed specifically for toddlers with large, simple shapes and bold lines.",
          },
          {
            title: "Early Learning",
            description: "Introduces colors, shapes, and basic concepts through fun coloring activities.",
          },
          {
            title: "Durable Design",
            description: "Built to withstand enthusiastic toddler coloring with thick, tear-resistant pages.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "50+ toddler-friendly pages",
            "Large, simple illustrations",
            "Thick, durable paper",
            "Safe for all ages",
            "Perfect first coloring book",
          ],
        },
      },
      // Kids Storybooks
      {
        id: "bear-mouse-silver-moon",
        title: "Bear & Mouse and the Silver Moon",
        slug: "bear-mouse-silver-moon",
        collection: "kids",
        category: "Kids Storybooks & Picture Books",
        image: "/assets/images/product-1.jpg",
        language: "English",
        banners: [
          "/assets/Banner_gesamt.29.9_/37.png",
          "/assets/Banner_gesamt.29.9_/38.png",
          "/assets/Banner_gesamt.29.9_/39.png",
        ],
        mockups: [
          "/assets/images/product-1.jpg",
          "/assets/images/product-1.jpg",
          "/assets/images/product-1.jpg",
        ],
        benefits: [
          {
            title: "Bedtime Stories",
            description: "Gentle, calming stories perfect for winding down before sleep.",
          },
          {
            title: "Friendship Lessons",
            description: "Heartwarming tales that teach valuable lessons about friendship and kindness.",
          },
          {
            title: "Beautiful Illustrations",
            description: "Stunning artwork that brings the story to life and captivates young readers.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "Beautifully illustrated story",
            "Gentle bedtime narrative",
            "Lessons about friendship",
            "Perfect for ages 3-7",
            "Hardcover edition available",
          ],
        },
      },
      {
        id: "bear-mouse-whispering-river",
        title: "Bear & Mouse and the Whispering River",
        slug: "bear-mouse-whispering-river",
        collection: "kids",
        category: "Kids Storybooks & Picture Books",
        image: "/assets/images/product-2.jpg",
        language: "English",
        banners: [
          "/assets/Banner_gesamt.29.9_/40.png",
          "/assets/Banner_gesamt.29.9_/41.png",
          "/assets/Banner_gesamt.29.9_/42.png",
        ],
        mockups: [
          "/assets/images/product-2.jpg",
          "/assets/images/product-2.jpg",
          "/assets/images/product-2.jpg",
        ],
        benefits: [
          {
            title: "Nature Adventures",
            description: "Explore the wonders of nature through Bear and Mouse's river adventure.",
          },
          {
            title: "Calming Narrative",
            description: "Soothing story that helps children relax and find peace.",
          },
          {
            title: "Character Development",
            description: "Follow beloved characters on new adventures that build on previous stories.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "Continuing Bear & Mouse adventure",
            "Nature-themed illustrations",
            "Calming bedtime story",
            "Ages 3-7",
            "Beautiful hardcover",
          ],
        },
      },
      {
        id: "pebbel-stories",
        title: "Pebbel Stories",
        slug: "pebbel-stories",
        collection: "kids",
        category: "Kids Storybooks & Picture Books",
        image: "/assets/images/product-3.jpg",
        language: "English",
        banners: [
          "/assets/Banner_gesamt.29.9_/43.png",
          "/assets/Banner_gesamt.29.9_/44.png",
          "/assets/Banner_gesamt.29.9_/45.png",
        ],
        mockups: [
          "/assets/images/product-3.jpg",
          "/assets/images/product-3.jpg",
          "/assets/images/product-3.jpg",
        ],
        benefits: [
          {
            title: "Collection of Tales",
            description: "Multiple stories featuring Pebbel and friends in one delightful book.",
          },
          {
            title: "Imaginative Worlds",
            description: "Rich storytelling that sparks imagination and creativity in young minds.",
          },
          {
            title: "Reading Development",
            description: "Engaging stories that help develop reading skills and vocabulary.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "Multiple Pebbel adventures",
            "Colorful illustrations throughout",
            "Age-appropriate stories",
            "Perfect for ages 4-8",
            "Collection format",
          ],
        },
      },
    ],
  },
  {
    id: "mindfulness",
    name: "Serenyao Mindfulness Collection",
    tagline: "Quiet moments. Clear mind. A softer way to grow.",
    description: "Find calm in color and clarity. Journals and coloring books to help you slow down and reconnect with yourself.",
    image: "/assets/Banner_gesamt.29.9_/49.png",
    books: [
      {
        id: "magical-mandala-moments",
        title: "Magical Mandala Moments",
        slug: "magical-mandala-moments",
        collection: "mindfulness",
        category: "Mandala Books",
        image: "/assets/Serenyao Mindfulness Collection/Mandala Books/Magic Mandala Moments.png",
        language: "English",
        banners: [
          "/assets/Banner_gesamt.29.9_/46.png",
          "/assets/Banner_gesamt.29.9_/47.png",
          "/assets/Banner_gesamt.29.9_/48.png",
        ],
        mockups: [
          "/assets/Serenyao Mindfulness Collection/Mandala Books/Magic Mandala Moments.png",
          "/assets/Serenyao Mindfulness Collection/Mandala Books/Magic Mandala Moments.png",
          "/assets/Serenyao Mindfulness Collection/Mandala Books/Magic Mandala Moments.png",
        ],
        benefits: [
          {
            title: "Stress Relief",
            description: "Intricate mandala designs that help you unwind and find inner peace through focused coloring.",
          },
          {
            title: "Mindful Practice",
            description: "Perfect for meditation and mindfulness, bringing calm to your daily routine.",
          },
          {
            title: "Artistic Expression",
            description: "Beautiful patterns that allow for creative expression and personal artistic style.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "50+ unique mandala designs",
            "Single-sided pages for framing",
            "High-quality paper for all mediums",
            "Various complexity levels",
            "Perfect for adults and teens",
          ],
        },
      },
      {
        id: "wildlife-animal-mandalas",
        title: "Wildlife Animal Mandalas",
        titleGerman: "Wildlife Tiermandalas",
        slug: "wildlife-animal-mandalas",
        collection: "mindfulness",
        category: "Mandala Books",
        image: "/assets/Serenyao Mindfulness Collection/Mandala Books/Wildlife Animals Mandalas.png",
        imageGerman: "/assets/Serenyao Mindfulness Collection/Mandala Books/German_Wildlife Tier Mandalas.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/49.png",
          "/assets/Banner_gesamt.29.9_/50.png",
          "/assets/Banner_gesamt.29.9_/51.png",
        ],
        mockups: [
          "/assets/Serenyao Mindfulness Collection/Mandala Books/Wildlife Animals Mandalas.png",
          "/assets/Serenyao Mindfulness Collection/Mandala Books/Wildlife Animals Mandalas.png",
          "/assets/Serenyao Mindfulness Collection/Mandala Books/Wildlife Animals Mandalas.png",
        ],
        benefits: [
          {
            title: "Nature Connection",
            description: "Connect with nature through beautiful animal-themed mandala designs.",
          },
          {
            title: "Therapeutic Coloring",
            description: "Experience the calming effects of coloring while celebrating wildlife.",
          },
          {
            title: "Unique Designs",
            description: "Stunning combination of mandala patterns and animal illustrations.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "40+ wildlife mandala designs",
            "Diverse animal patterns",
            "Single-sided pages",
            "Premium paper quality",
            "For all skill levels",
          ],
        },
      },
      // Journals
      {
        id: "gratitude-journal",
        title: "My Gratitude Journal",
        titleGerman: "Mein Dankbarkeitsjournal",
        slug: "gratitude-journal",
        collection: "mindfulness",
        category: "Journals & Mindfulness",
        image: "/assets/Serenyao Mindfulness Collection/Journals & Mindfulness/My Gratitude Journal.png",
        imageGerman: "/assets/Serenyao Mindfulness Collection/Journals & Mindfulness/German_Mein Dankbarkeits Journal.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/52.png",
          "/assets/Banner_gesamt.29.9_/53.png",
          "/assets/Banner_gesamt.29.9_/54.png",
        ],
        mockups: [
          "/assets/Serenyao Mindfulness Collection/Journals & Mindfulness/My Gratitude Journal.png",
          "/assets/Serenyao Mindfulness Collection/Journals & Mindfulness/My Gratitude Journal.png",
          "/assets/Serenyao Mindfulness Collection/Journals & Mindfulness/My Gratitude Journal.png",
        ],
        benefits: [
          {
            title: "Daily Reflection",
            description: "Structured prompts that help you cultivate gratitude and positive thinking every day.",
          },
          {
            title: "Mental Wellbeing",
            description: "Research shows gratitude journaling improves mood and overall mental health.",
          },
          {
            title: "Beautiful Design",
            description: "Elegant journal that makes daily practice a joy and something to look forward to.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "90 days of gratitude prompts",
            "Reflection pages",
            "Beautiful cover design",
            "High-quality paper",
            "Perfect size for daily use",
          ],
        },
      },
    ],
  },
  {
    id: "comfy-cute",
    name: "Serenyao Comfy & Cute Collection",
    tagline: "Soft, cozy, aesthetic moments for every age.",
    description: "Beautiful coloring books that bring comfort, cuteness, and calm to your creative moments.",
    image: "/assets/Banner_gesamt.29.9_/16.png",
    books: [
      {
        id: "best-friends",
        title: "Best Friends Coloring Book",
        titleGerman: "Beste Freunde",
        slug: "best-friends",
        collection: "comfy-cute",
        category: "Comfy & Cute",
        image: "/assets/Serenyao Cute & Comfy Collection/Best Friends Forever.png",
        imageGerman: "/assets/Serenyao Cute & Comfy Collection/German_Beste Freude für immer.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/55.png",
          "/assets/Banner_gesamt.29.9_/56.png",
          "/assets/Banner_gesamt.29.9_/57.png",
        ],
        mockups: [
          "/assets/Serenyao Cute & Comfy Collection/Best Friends Forever.png",
          "/assets/Serenyao Cute & Comfy Collection/Best Friends Forever.png",
          "/assets/Serenyao Cute & Comfy Collection/Best Friends Forever.png",
        ],
        benefits: [
          {
            title: "Celebrate Friendship",
            description: "Adorable designs that celebrate the joy and warmth of friendship.",
          },
          {
            title: "Cozy Vibes",
            description: "Soft, comforting illustrations that bring a sense of peace and happiness.",
          },
          {
            title: "Perfect Gift",
            description: "Ideal gift for friends, featuring designs that spread love and positivity.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "45+ friendship-themed pages",
            "Cute and cozy illustrations",
            "Single-sided pages",
            "Premium paper quality",
            "For all ages",
          ],
        },
      },
      {
        id: "girl-moments",
        title: "Girl Moments Coloring Book",
        titleGerman: "Comfy Girl Moments",
        slug: "girl-moments",
        collection: "comfy-cute",
        category: "Comfy & Cute",
        image: "/assets/Serenyao Cute & Comfy Collection/Comfy Girl Moments.png",
        imageGerman: "/assets/Serenyao Cute & Comfy Collection/German_Comfy Girl Moments.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/58.png",
          "/assets/Banner_gesamt.29.9_/59.png",
          "/assets/Banner_gesamt.29.9_/60.png",
        ],
        mockups: [
          "/assets/Serenyao Cute & Comfy Collection/Comfy Girl Moments.png",
          "/assets/Serenyao Cute & Comfy Collection/Comfy Girl Moments.png",
          "/assets/Serenyao Cute & Comfy Collection/Comfy Girl Moments.png",
        ],
        benefits: [
          {
            title: "Self-Care Focus",
            description: "Beautiful designs that celebrate self-love, self-care, and personal moments.",
          },
          {
            title: "Aesthetic Appeal",
            description: "Trendy, Instagram-worthy illustrations that inspire creativity and joy.",
          },
          {
            title: "Empowerment",
            description: "Positive messages and designs that empower and uplift.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "50+ empowering girl moments",
            "Aesthetic illustrations",
            "Positive affirmations",
            "High-quality pages",
            "Perfect for teens and adults",
          ],
        },
      },
      {
        id: "cozy-corner",
        title: "Cozy Corner",
        titleGerman: "Cozy Corner",
        slug: "cozy-corner",
        collection: "comfy-cute",
        category: "Comfy & Cute",
        image: "/assets/Serenyao Cute & Comfy Collection/Cozy Corner.png",
        imageGerman: "/assets/Serenyao Cute & Comfy Collection/German_Cozy Corner.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/61.png",
          "/assets/Banner_gesamt.29.9_/62.png",
          "/assets/Banner_gesamt.29.9_/63.png",
        ],
        mockups: [
          "/assets/Serenyao Cute & Comfy Collection/Cozy Corner.png",
          "/assets/Serenyao Cute & Comfy Collection/Cozy Corner.png",
          "/assets/Serenyao Cute & Comfy Collection/Cozy Corner.png",
        ],
        benefits: [
          {
            title: "Ultimate Comfort",
            description: "The coziest designs that bring warmth and comfort to your coloring time.",
          },
          {
            title: "Relaxation",
            description: "Perfect for unwinding after a long day with soothing, gentle illustrations.",
          },
          {
            title: "Hygge Vibes",
            description: "Embrace the Danish concept of hygge with these cozy, comforting pages.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "40+ cozy corner scenes",
            "Warm, comforting designs",
            "Single-sided pages",
            "Premium paper",
            "For all ages",
          ],
        },
      },
      {
        id: "cute-comfy",
        title: "Cute & Comfy",
        titleGerman: "Cute&Comfy Stressfreies Ausmalen",
        slug: "cute-comfy",
        collection: "comfy-cute",
        category: "Comfy & Cute",
        image: "/assets/Serenyao Cute & Comfy Collection/Cute&Comfy Stress Refief coloring.png",
        imageGerman: "/assets/Serenyao Cute & Comfy Collection/German_Cute&Comfy Stressfreies Ausmalen.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/64.png",
          "/assets/Banner_gesamt.29.9_/65.png",
          "/assets/Banner_gesamt.29.9_/66.png",
        ],
        mockups: [
          "/assets/Serenyao Cute & Comfy Collection/Cute&Comfy Stress Refief coloring.png",
          "/assets/Serenyao Cute & Comfy Collection/Cute&Comfy Stress Refief coloring.png",
          "/assets/Serenyao Cute & Comfy Collection/Cute&Comfy Stress Refief coloring.png",
        ],
        benefits: [
          {
            title: "Stress Relief",
            description: "Designed specifically to help reduce stress and anxiety through coloring.",
          },
          {
            title: "Cute & Calming",
            description: "Adorable designs that bring both joy and peace to your coloring experience.",
          },
          {
            title: "Therapeutic",
            description: "Proven therapeutic benefits of coloring for mental wellness and relaxation.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "50+ stress-relief designs",
            "Cute and calming patterns",
            "Single-sided pages",
            "High-quality paper",
            "Perfect for stress relief",
          ],
        },
      },
    ],
  },
  {
    id: "seasons",
    name: "Serenyao Seasons Collection",
    tagline: "Where every season finds its color.",
    description: "Celebrate the beauty of each season with our special seasonal coloring books.",
    image: "/assets/Banner_gesamt.29.9_/16.png",
    books: [
      {
        id: "christmas-coloring",
        title: "Christmas Coloring Book",
        titleGerman: "Zauberhaftes Weihnachts Ausmalbuch",
        slug: "christmas-coloring",
        collection: "seasons",
        category: "Seasonal Specials",
        image: "/assets/Serenyao Seasons Collection/Cute Christmas Coloring Book.png",
        imageGerman: "/assets/Serenyao Seasons Collection/German_Zauberhaftes Weihnachts Ausmalbuch.png",
        language: "Both",
        banners: [
          "/assets/Banner_gesamt.29.9_/67.png",
          "/assets/Banner_gesamt.29.9_/68.png",
          "/assets/Banner_gesamt.29.9_/69.png",
        ],
        mockups: [
          "/assets/Serenyao Seasons Collection/Cute Christmas Coloring Book.png",
          "/assets/Serenyao Seasons Collection/Cute Christmas Coloring Book.png",
          "/assets/Serenyao Seasons Collection/Cute Christmas Coloring Book.png",
        ],
        benefits: [
          {
            title: "Holiday Magic",
            description: "Bring the joy and magic of Christmas to life through beautiful coloring pages.",
          },
          {
            title: "Family Activity",
            description: "Perfect for family time during the holiday season, bringing everyone together.",
          },
          {
            title: "Festive Fun",
            description: "Celebrate the season with delightful Christmas-themed illustrations and designs.",
          },
        ],
        whatsInside: {
          title: "What's Inside",
          items: [
            "45+ Christmas-themed pages",
            "Holiday scenes and patterns",
            "Single-sided pages",
            "Premium paper quality",
            "Perfect holiday gift",
          ],
        },
      },
    ],
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  for (const collection of booksData) {
    const book = collection.books.find((b) => b.slug === slug);
    if (book) return book;
  }
  return undefined;
}

export function getBooksByCollection(collectionId: string): Book[] {
  const collection = booksData.find((c) => c.id === collectionId);
  return collection ? collection.books : [];
}

export function getAllBooks(): Book[] {
  return booksData.flatMap((collection) => collection.books);
}

