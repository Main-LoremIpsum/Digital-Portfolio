/* ==========================================================================
   Padayon Café — Shared data
   Menu item names are grounded in real customer mentions (Foodpanda / FB).
   Prices are ESTIMATES for demo purposes — replace with real price list.
   Reviews are ILLUSTRATIVE SAMPLES for demo purposes — replace with real,
   admin-approved customer reviews before launch.
   ========================================================================== */

const BRANCHES = {
  ateneo: {
    id: "ateneo",
    name: "Ateneo Avenue",
    fullName: "Padayon Café – Ateneo Avenue",
    address: "Mother Francisca Street, Ateneo Avenue, Brgy. Bagumbayan, 4th District, Naga City, Camarines Sur",
    landmark: "Near JFS Eagles Dormitory",
    hours: "Daily · 8:00 AM – 10:00 PM",
    phone: "0927 460 9550",
    rating: 5.0,
    reviewCount: "100+",
    mapQuery: "JFS Eagles Dormitory, Ateneo Avenue, Naga City, Camarines Sur",
    foodpanda: "https://www.foodpanda.ph/restaurant/ufpc/padayon-cafe-ateneo-avenue"
  },
  panganiban: {
    id: "panganiban",
    name: "Panganiban Drive",
    fullName: "Padayon Café – Panganiban Drive",
    address: "Panganiban Drive, Brgy. Concepción Pequeña, 3rd District, Naga City, Camarines Sur",
    landmark: "In front of Super Metro",
    hours: "Daily · 8:00 AM – 11:59 PM",
    phone: "0927 460 9550",
    rating: 5.0,
    reviewCount: "500+",
    mapQuery: "Super Metro, Panganiban Drive, Naga City, Camarines Sur",
    foodpanda: "https://www.foodpanda.ph/restaurant/trk3/padayon-cafe-panganiban-drive"
  }
};

/* icon key refers to an id in the <symbol> sprite defined in main.js render helpers */
const MENU_ITEMS = [
  { id: "spanish-latte", name: "Spanish Latte", desc: "Espresso, steamed milk, condensed milk sweetness.", category: "coffee", icon: "cup", best: true,
    price: { ateneo: 119, panganiban: 109 }, available: { ateneo: true, panganiban: true } },
  { id: "cafe-latte", name: "Café Latte", desc: "Smooth espresso balanced with steamed milk.", category: "coffee", icon: "cup", best: false,
    price: { ateneo: 99, panganiban: 95 }, available: { ateneo: true, panganiban: true } },
  { id: "smores-latte", name: "S'mores Latte", desc: "Chocolate, toasted marshmallow, espresso.", category: "coffee", icon: "cup", best: true,
    price: { ateneo: 139, panganiban: 129 }, available: { ateneo: true, panganiban: true } },
  { id: "americano", name: "Iced Americano", desc: "Double shot espresso over ice, cut with water.", category: "coffee", icon: "cup", best: false,
    price: { ateneo: 89, panganiban: 85 }, available: { ateneo: true, panganiban: true } },

  { id: "matcha-latte", name: "Matcha Latte", desc: "Stone-ground matcha whisked with fresh milk.", category: "non-coffee", icon: "leaf", best: true,
    price: { ateneo: 129, panganiban: 119 }, available: { ateneo: true, panganiban: true } },
  { id: "matcha-tiramisu", name: "Matcha Tiramisu Latte", desc: "Matcha latte layered with tiramisu cream.", category: "non-coffee", icon: "leaf", best: false,
    price: { ateneo: 139, panganiban: 129 }, available: { ateneo: true, panganiban: true } },
  { id: "kiwi-tea", name: "Kiwi Fruit Tea", desc: "Fruit tea steeped with real kiwi bits.", category: "non-coffee", icon: "leaf", best: false,
    price: { ateneo: 109, panganiban: 99 }, available: { ateneo: true, panganiban: true } },
  { id: "lemon-yakult", name: "Lemon Yakult", desc: "Refreshing yakult over lemon and ice.", category: "non-coffee", icon: "leaf", best: false,
    price: { ateneo: 99, panganiban: 89 }, available: { ateneo: true, panganiban: false } },

  { id: "grilled-cheese", name: "Grilled Cheese Sandwich", desc: "Buttered toast, melted cheese blend, served warm.", category: "meals", icon: "plate", best: true,
    price: { ateneo: 109, panganiban: 99 }, available: { ateneo: true, panganiban: true } },
  { id: "tuna-kani", name: "Tuna Kani Melt", desc: "Tuna and kani salad melted over toasted bread.", category: "meals", icon: "plate", best: false,
    price: { ateneo: 139, panganiban: 129 }, available: { ateneo: true, panganiban: true } },

  { id: "red-velvet-cookie", name: "Red Velvet Cookie", desc: "Soft-baked cookie with cream cheese chips.", category: "desserts", icon: "cookie", best: true,
    price: { ateneo: 69, panganiban: 65 }, available: { ateneo: true, panganiban: true } },
  { id: "matcha-cookie", name: "Matcha Cookie", desc: "Soft-baked cookie with a stone-ground matcha crumb.", category: "desserts", icon: "cookie", best: false,
    price: { ateneo: 69, panganiban: 65 }, available: { ateneo: true, panganiban: true } },
  { id: "caramel-bars", name: "Caramel Bars", desc: "Chewy caramel-filled bars, cut thick.", category: "desserts", icon: "cookie", best: false,
    price: { ateneo: 79, panganiban: 75 }, available: { ateneo: true, panganiban: true } },
  { id: "vanilla-ice-cream", name: "Vanilla Ice Cream", desc: "Classic scoop, served on its own or à la mode.", category: "desserts", icon: "cookie", best: false,
    price: { ateneo: 59, panganiban: 55 }, available: { ateneo: false, panganiban: true } },

  { id: "fries", name: "Seasoned Fries", desc: "Crisp-cut fries tossed in café seasoning.", category: "snacks", icon: "plate", best: false,
    price: { ateneo: 79, panganiban: 75 }, available: { ateneo: true, panganiban: true } },
  { id: "nachos", name: "Loaded Nachos", desc: "Corn chips, melted cheese, salsa on the side.", category: "snacks", icon: "plate", best: false,
    price: { ateneo: 129, panganiban: 119 }, available: { ateneo: true, panganiban: true } }
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "coffee", label: "Coffee" },
  { id: "non-coffee", label: "Non-Coffee" },
  { id: "meals", label: "Meals" },
  { id: "desserts", label: "Desserts" },
  { id: "snacks", label: "Snacks" }
];

/* Sample / illustrative reviews — replace with real admin-approved reviews. */
const REVIEWS = [
  { name: "Angelica R.", initials: "AR", rating: 5, branch: "ateneo", date: "2026-06-14", featured: true,
    comment: "My go-to study spot near campus. The Spanish latte is consistent every visit and the corner seats by the window are perfect for reviewing between classes." },
  { name: "Miguel S.", initials: "MS", rating: 5, branch: "panganiban", date: "2026-06-02", featured: true,
    comment: "Pulled an all-nighter here for a school project and the staff were patient with our long stay and refills. Solid coffee, kind service." },
  { name: "Patricia D.", initials: "PD", rating: 4, branch: "ateneo", date: "2026-05-21", featured: false,
    comment: "Matcha latte and the matcha cookie together is a great combo. Cozy interior, though it does get full during peak afternoon hours." },
  { name: "Joshua T.", initials: "JT", rating: 5, branch: "panganiban", date: "2026-05-09", featured: false,
    comment: "Been ordering the same Café Latte for months and it's never inconsistent. Easy to find too, right across Super Metro." },
  { name: "Bea M.", initials: "BM", rating: 5, branch: "ateneo", date: "2026-04-27", featured: true,
    comment: "Grilled cheese sandwich paired with the S'mores latte is my comfort order. Great place to read in the afternoon." },
  { name: "Paolo V.", initials: "PV", rating: 4, branch: "panganiban", date: "2026-04-11", featured: false,
    comment: "Ordered for a small group meeting and everything came out quick. Would love more seating during rush hour, otherwise great." }
];

const RATING_SUMMARY = {
  average: 5.0,
  total: "600+",
  distribution: { 5: 82, 4: 14, 3: 3, 2: 1, 1: 0 }
};
