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
    name: "DIY Family Fashion Guide",
    price: "11.99",
    description:
      "Create stylish outfits for the whole family with this comprehensive sewing guide.",
    image: "/1.png",
    categories: ["WOMEN", "KIDS"],
    details: [
      "Patterns for all ages: women, teens, and children",
      "Includes casual and dressy styles",
      "Step-by-step instructions for each garment",
      "Fabric selection tips",
      "Sizing guide for all body types",
      "Customization ideas for personal touches",
    ],
  },
  {
    id: 2,
    name: "Be Dreamy Dress Pattern Bundle",
    price: "24.99",
    description:
      "Craft beautiful, dreamy dresses for all ages with this versatile pattern collection.",
    image: "/2.png",
    categories: ["WOMEN", "KIDS"],
    details: [
      "Sizes from doll to 6XL",
      "Includes children's sizes from 12 months to Big Kid 12",
      "Multiple sleeve and length options",
      "Suitable for various fabrics",
      "Easy-to-follow instructions",
      "Perfect for matching family outfits",
    ],
  },
  {
    id: 3,
    name: "Lounge Bundle: Simone + Véronik",
    price: "39.99",
    description:
      "Comfortable and stylish loungewear patterns for relaxed elegance at home.",
    image: "/3.png",
    categories: ["WOMEN", "ADULTS"],
    details: [
      "Two patterns included: Simone robe and Véronik slip dress",
      "Size-inclusive designs",
      "Suitable for lightweight fabrics",
      "Quick and easy to sew",
      "Perfect for gifts or self-care",
      "Customizable length options",
    ],
  },
  {
    id: 4,
    name: "Women's Dress Pattern Capule",
    price: "59.99",
    description:
      "A comprehensive collection of dress patterns for various styles and occasions.",
    image: "/4.png",
    categories: ["WOMEN", "ADULTS"],
    details: [
      "7 versatile dress patterns included",
      "Sizes range from XXS to 6XL",
      "Styles include: Crossover, Be Dreamy, Wrapped in Love, Anticipation, Tulip, Be Captivating, and Be Graceful",
      "Suitable for beginners to advanced sewists",
      "Detailed instructions and pattern pieces",
      "Mix and match options for endless outfit possibilities",
    ],
  },
  {
    id: 5,
    name: "Versatile Tops Collection",
    price: "19.99",
    description:
      "A diverse collection of stylish tops for all body types and occasions.",
    image: "/5.png",
    categories: ["WOMEN", "ADULTS"],
    details: [
      "Sizes XXS - 7XL",
      "Variety of styles: leopard print, striped, tie-dye, solid colors",
      "Casual and dressy options",
      "Inclusive sizing for all body types",
      "Multiple sleeve lengths and necklines",
      "Mix and match for various outfits",
    ],
  },
  {
    id: 6,
    name: "Rome Collection: Cielo + Fiore + Pietra",
    price: "43.99",
    description:
      "Elegant and versatile patterns inspired by the beauty of Rome.",
    image: "/6.png",
    categories: ["WOMEN", "ADULTS"],
    details: [
      "Three patterns included: Cielo (dress), Fiore (top and skirt), Pietra (top and pants)",
      "Sizes inclusive",
      "Breathable fabrics ideal for warm weather",
      "Mix and match options",
      "Suitable for casual and semi-formal occasions",
      "Easy to sew patterns for beginners and advanced sewists",
    ],
  },
  {
    id: 7,
    name: "Floral Dress Pattern Collection",
    price: "69.99",
    description:
      "A beautiful array of floral dress patterns for every style and season.",
    image: "/7.png",
    categories: ["WOMEN", "ADULTS"],
    details: [
      "Includes Tee Dress, Monday Morning Dress, Breezy Dress, Everywhere Dress, Love the 90's Dress, True Beauty Dress, Sweetie Pie Dress, and Tres Belle Dress Patterns",
      "Various sleeve options and lengths",
      "Suitable for different body types",
      "Multiple neckline choices",
      "Perfect for spring and summer",
      "Easy-to-follow instructions for all skill levels",
    ],
  },
  {
    id: 8,
    name: "Chez Moi Bundle: All Patterns",
    price: "99.99",
    description:
      "Complete loungewear and intimates pattern collection for ultimate comfort at home.",
    image: "/8.png",
    categories: ["WOMEN", "ADULTS"],
    details: [
      "Includes patterns for robes, slip dresses, bras, and underwear",
      "Size-inclusive designs",
      "Suitable for various fabric types",
      "Mix and match options for personalized sets",
      "Ideal for self-care and gifting",
      "Detailed instructions for lingerie construction",
    ],
  },
  {
    id: 9,
    name: "Floral Maxi Dress Pattern",
    price: "28.99",
    description:
      "Create stunning floral maxi dresses for all ages with this versatile pattern.",
    image: "/9.png",
    categories: ["WOMEN", "KIDS"],
    details: [
      "Sizes: Kids 12 months - Big Kid 12 & Adult Sizes XXS - 5XL",
      "Multiple sleeve options",
      "Various length choices, including maxi",
      "Suitable for light to medium-weight fabrics",
      "Perfect for mother-daughter matching outfits",
      "Beginner-friendly with detailed instructions",
    ],
  },
  {
    id: 10,
    name: "Adult Swimwear Pattern Bundle",
    price: "58.99",
    description:
      "Comprehensive collection of swimwear patterns for all body types and preferences.",
    image: "/10.png",
    categories: ["WOMEN", "ADULTS"],
    details: [
      "Includes: Boardshorts (XS - 5XL), Gathered Tankini (XXS - 6XL), Oasis (XXS - 5XL), Colorblock Mix & Match (XXS - 6XL), Racerback Wrap (XXS - 6XL), Waterfall (XXS - 4XL), & Wave Rider Rash Guard Set (XXS - 6XL)",
      "Diverse styles for various body types and coverage preferences",
      "Mix and match options for personalized looks",
      "Suitable for beginners to advanced sewists",
      "Detailed instructions for working with stretch fabrics",
      "Options for both men's and women's swimwear",
    ],
  },
  {
    id: 11,
    name: "Versatile Wardrobe Pattern Collection",
    price: "98.99",
    description:
      "A comprehensive set of patterns to create a versatile and stylish wardrobe for all occasions.",
    image: "/11.png",
    categories: ["WOMEN", "ADULTS"],
    details: [
      "Contains: Elevated Blazer Jacket Pattern, Everyday Tee Pattern, Tres Belle Wrap Tunic & Dress Pattern, Oversized Tee Pattern for Adults, Staycation Tiered Tunic & Dress Pattern, Floral Shore Romper Pattern, Slow Sunday Top, Tunic & Dress Pattern, Be Pretty Dress Pattern for Adults, Feel Pretty Pants Pattern, Relaxed Raglan Romper & Dress Pattern",
      "Size-inclusive designs for various body types",
      "Mix and match pieces for countless outfit combinations",
      "Suitable for different seasons and occasions",
      "Detailed instructions for all skill levels",
      "Options for casual, work, and dressy styles",
    ],
  },
  {
    id: 12,
    name: "Family Love Pattern Capsule",
    price: "129.99",
    description:
      "Create matching outfits for the whole family with this adorable pattern collection.",
    image: "/12.png",
    categories: ["WOMEN", "MEN", "KIDS"],
    details: [
      "Includes patterns for adults, children, and dolls",
      "Coordinating styles for family photoshoots or special occasions",
      "Options for casual and dressy outfits",
      "Size range covers infants to adults",
      "Easy-to-follow instructions for all skill levels",
      "Mix and match options for personalized family looks",
    ],
  },
];
