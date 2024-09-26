export interface Shirt {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  details: string[];
  categories?: string[];
}

export const shirts: Shirt[] = [
  {
    id: 1,
    name: "DIY Classic White Tee Guide",
    price: "11.99",
    description:
      "Learn to create the perfect white t-shirt with this comprehensive guide.",
    image: "/1.png",
    categories: ["WOMEN", "KIDS"],
    details: [
      "Step-by-step instructions",
      "Fabric selection tips",
      "Sewing techniques for beginners",
      "Fit and sizing guide",
      "Care and maintenance advice",
      "Includes printable patterns",
    ],
  },
  {
    id: 2,
    name: "Vintage Blue Trio Tutorial",
    price: "24.99",
    description:
      "Master the art of crafting vintage-inspired blue t-shirts with this detailed manual.",
    image: "/2.png",
    categories: ["WOMEN", "KIDS"],
    details: [
      "Dyeing techniques for various blue shades",
      "Distressing and aging methods",
      "Vintage print application",
      "Fabric care for longevity",
      "Tips for achieving the perfect worn-in look",
      "Includes three vintage-style patterns",
    ],
  },
  {
    id: 3,
    name: "Retro Rainbow Pack",
    price: "39.99",
    description:
      "Seven vibrant t-shirts inspired by the colors of the rainbow.",
    image: "/3.png",
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
    image: "/4.png",
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
    image: "/5.png",
    categories: ["WOMEN"],
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
    image: "/6.png",
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
    image: "/7.png",
    categories: ["WOMEN", "ADULTS"],
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
    image: "/8.png",
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
    image: "/9.png",
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
    image: "/10.png",
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
    image: "/11.png",
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
    name: "Rock Band Tee Design Workshop",
    price: "129.99",
    description:
      "Create authentic vintage-inspired band t-shirts with this comprehensive guide.",
    image: "/12.png",
    details: [
      "Band logo design principles",
      "Screen printing techniques",
      "Aging and distressing methods",
      "Copyright considerations for band merchandise",
      "Case studies of iconic band tees",
      "Includes templates for classic rock styles",
    ],
  },
];
