export interface Shirt {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  details: string[];
}

export const shirts: Shirt[] = [
  {
    id: 1,
    name: "Classic White Tee",
    price: "11.99",
    description:
      "A timeless white t-shirt that's perfect for any casual occasion.",
    image: "/1.jpg",
    details: [
      "100% cotton",
      "Crew neck",
      "Short sleeves",
      "Regular fit",
      "Sizes: S, M, L, XL, XXL",
      "Color: White",
      "Use: Casual wear",
    ],
  },
  {
    id: 2,
    name: "Vintage Blue Trio",
    price: "24.99",
    description:
      "A set of three vintage-inspired blue t-shirts with a worn-in look.",
    image: "/2.jpg",
    details: [
      "Soft washed fabric",
      "Various shades of blue",
      "Distressed print",
      "Sizes: XS, S, M, L, XL",
      "Color: Blue",
      "Use: Casual, streetwear",
    ],
  },
  {
    id: 3,
    name: "Retro Rainbow Pack",
    price: "39.99",
    description:
      "Seven vibrant t-shirts inspired by the colors of the rainbow.",
    image: "/3.jpg",
    details: [
      "Set of 7 shirts",
      "Bright, bold colors",
      "Soft jersey fabric",
      "Unisex design",
      "Sizes: XS, S, M, L, XL, XXL",
      "Colors: Red, Orange, Yellow, Green, Blue, Indigo, Violet",
      "Use: Casual, festivals, pride events",
    ],
  },
  {
    id: 4,
    name: "Monochrome Essentials",
    price: "59.99",
    description:
      "A versatile set of ten t-shirts in classic black and white shades.",
    image: "/4.jpg",
    details: [
      "Set of 10 shirts",
      "5 black, 5 white",
      "Premium cotton blend",
      "Tagless for comfort",
      "Sizes: S, M, L, XL",
      "Colors: Black, White",
      "Use: Casual, layering, workwear",
    ],
  },
  {
    id: 5,
    name: "Pastel Dream Collection",
    price: "19.99",
    description:
      "A dreamy assortment of t-shirts in soft, soothing pastel hues.",
    image: "/5.jpg",
    details: [
      "Assorted pastel colors",
      "Lightweight fabric",
      "Perfect for layering",
      "Relaxed fit",
      "Sizes: XS, S, M, L",
      "Colors: Soft Pink, Baby Blue, Mint Green, Lavender, Peach",
      "Use: Casual, spring/summer wear",
    ],
  },
  {
    id: 6,
    name: "Earth Tones Bundle",
    price: "43.99",
    description: "A curated selection of t-shirts in warm, earthy colors.",
    image: "/6.jpg",
    details: [
      "Natural color palette",
      "Organic cotton options",
      "Eco-friendly dyes",
      "Variety of necklines",
      "Sizes: S, M, L, XL, XXL",
      "Colors: Brown, Beige, Olive, Rust, Terracotta",
      "Use: Casual, outdoor activities",
    ],
  },
  {
    id: 7,
    name: "Neon Nights Set",
    price: "69.99",
    description:
      "Make a statement with this bold collection of neon-colored t-shirts.",
    image: "/7.jpg",
    details: [
      "Ultra-bright neon colors",
      "Glow-in-the-dark options",
      "Perfect for parties",
      "Moisture-wicking fabric",
      "Sizes: XS, S, M, L, XL",
      "Colors: Neon Pink, Neon Green, Neon Yellow, Neon Orange",
      "Use: Nightlife, parties, sports",
    ],
  },
  {
    id: 8,
    name: "Graphic Print Variety",
    price: "99.99",
    description:
      "Express yourself with this diverse set of graphic print t-shirts.",
    image: "/8.jpg",
    details: [
      "Unique graphic designs",
      "Artist collaborations",
      "Limited edition prints",
      "High-quality screen printing",
      "Sizes: S, M, L, XL",
      "Colors: Various",
      "Use: Casual, self-expression",
    ],
  },
  {
    id: 9,
    name: "Tie-Dye Explosion",
    price: "28.99",
    description:
      "Add a splash of color to your wardrobe with these vibrant tie-dye t-shirts.",
    image: "/9.jpg",
    details: [
      "Hand-dyed",
      "One-of-a-kind patterns",
      "Pre-shrunk",
      "Hippie-inspired designs",
      "Sizes: XS, S, M, L, XL, XXL",
      "Colors: Multi-colored tie-dye patterns",
      "Use: Casual, festivals, beach wear",
    ],
  },
  {
    id: 10,
    name: "Striped Sailor Collection",
    price: "58.99",
    description:
      "Channel nautical vibes with this collection of classic striped t-shirts.",
    image: "/10.jpg",
    details: [
      "Horizontal stripe patterns",
      "Navy and white color schemes",
      "Breathable cotton",
      "Perfect for coastal style",
      "Sizes: S, M, L, XL",
      "Colors: Navy/White, Red/White, Black/White",
      "Use: Casual, beach outings, sailing",
    ],
  },
  {
    id: 11,
    name: "Minimalist Mono Set",
    price: "98.99",
    description:
      "Embrace simplicity with this set of sleek, monochromatic t-shirts.",
    image: "/11.jpg",
    details: [
      "Solid colors",
      "Clean, modern design",
      "Slim fit option",
      "Premium combed cotton",
      "Sizes: XS, S, M, L, XL",
      "Colors: Black, White, Gray, Navy",
      "Use: Casual, minimalist fashion, workwear",
    ],
  },
  {
    id: 12,
    name: "Vintage Band Tee Collection",
    price: "129.99",
    description:
      "Rock out with this collection of vintage-inspired band t-shirts.",
    image: "/12.jpg",
    details: [
      "Classic rock band logos",
      "Distressed print effect",
      "Soft, worn-in feel",
      "Collector's edition designs",
      "Sizes: S, M, L, XL, XXL",
      "Colors: Various (depending on band design)",
      "Use: Casual, concerts, music festivals",
    ],
  },
];
