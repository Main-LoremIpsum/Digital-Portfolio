/* ==========================================================================
   BABU — shared data
   --------------------------------------------------------------------------
   Menu names, prices, categories and descriptions are taken from Babu
   Coffee & More – Naga City Subdivision on Foodpanda (verified).
   Reviews are short customer quotes sampled from the same Foodpanda page.
   ========================================================================== */

const SITE = {
  name: "BABU",
  tagline: "your quality street cafe",
  city: "Naga City, Camarines Sur",
  addressShort: "Naga City Subdivision, Zone 1, Brgy. Triangulo",
  address: "25 Ilang-Ilang St., Naga City Subdivision, Zone 1, Barangay Triangulo (3rd District), Naga City, Camarines Sur",
  hours: [
    { days: "Monday – Saturday", time: "8:00 AM – 10:00 PM" },
    { days: "Sunday",        time: "1:00 PM – 10:00 PM" }
  ],
  rating: 5.0,
  reviewCount: "1,000+",
  minOrder: "₱99",
  facebook: "https://www.facebook.com/babudrinks/",
  instagram: "https://www.instagram.com/babucoffeeeee/",
  foodpanda: "https://www.foodpanda.ph/restaurant/smmc/babu-coffee-and-more-naga-city-subdivision",
  maps: "https://www.google.com/maps/search/?api=1&query=Ilang-Ilang%20Street%20Naga%20City%20Subdivision%20Camarines%20Sur"
};

/* ---- Minimal line-art icons (inline SVG; inherit currentColor) ---- */
const ART = {
  cup:    `<svg viewBox="0 0 64 64" fill="none" stroke="#3A2A1C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 26h30v12a12 12 0 0 1-12 12h-6a12 12 0 0 1-12-12V26Z"/><path d="M44 28h4a6 6 0 0 1 0 12h-4"/><path d="M28 12c1.6 2.4.5 4-1 5.6-1.4 1.6-1.8 4.4 0 6.4M18 12c1.6 2.4.5 4-1 5.6-1.4 1.6-1.8 4.4 0 6.4"/></svg>`,
  tall:   `<svg viewBox="0 0 64 64" fill="none" stroke="#3A2A1C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 12h16v34a5 5 0 0 1-5 5h-6a5 5 0 0 1-5-5V12Z"/><path d="M25 22h14M22 14l20 0"/><path d="M27 34l10 9M32 34l8 8"/></svg>`,
  milk: `<svg viewBox="0 0 64 64" fill="none" stroke="#3A2A1C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M26 12h12l3 34a4 4 0 0 1-4 4H27a4 4 0 0 1-4-4l3-34Z"/><path d="M24 26h16"/><path d="M25 12c-1 5 1 9 4 12M39 12c1 5-1 9-4 12"/></svg>`,
  matcha: `<svg viewBox="0 0 64 64" fill="none" stroke="#3A2A1C" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10h24v34a3 3 0 0 1-3 3H23a3 3 0 0 1-3-3V10Z"/><path d="M22 20h20M22 27h20"/><path d="M40 22c8 4 12 12 10 20-1-6-5-10-10-12"/></svg>`,
  bottle: `<svg viewBox="0 0 64 64" fill="none" stroke="#4A2A16" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="20" y="14" width="24" height="40" rx="5"/><path d="M30 8c4 3 6 6 6 10"/><path d="M22 34h20"/><circle cx="29" cy="42" r="2.4" fill="currentColor" stroke="none"/><circle cx="37" cy="44" r="2.4" fill="currentColor" stroke="none"/></svg>`,
  pops:  `<svg viewBox="0 0 64 64" fill="none" stroke="#4A2A16" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 12h16v40a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4V12Z"/><path d="M28 4h8l-3 7h-2l-3-7Z"/><path d="M25 26l14 12M31 27l10 9"/></svg>`,
  plate: `<svg viewBox="0 0 64 64" fill="none" stroke="#4A3322" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="34" r="20"/><circle cx="32" cy="34" r="10"/><path d="M21 22c5 4 8 8 9 13M46 24c0 6-3 9-7 11"/></svg>`,
  sando: `<svg viewBox="0 0 64 64" fill="none" stroke="#4A3322" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="28" width="40" height="14" rx="3"/><path d="M20 28V20c0-4 8-4 12-8 4 4 12 4 12 8v-6M22 48c0 3 4 3 6-1M42 48c0 3-4 4-6 0"/></svg>`,
  fries: `<svg viewBox="0 0 64 64" fill="none" stroke="#7A3A12" stroke-width="2.6" stroke-linecap="round"><rect x="20" y="22" width="9" height="16" rx="2"/><rect x="30" y="20" width="9" height="16" rx="2"/><path d="M27 20l-4-8"/></svg>`
};

const ART_BG = {
  cup: "#EFE0C8", tall: "#EBDCC6", milk: "#EFE0D8", matcha: "#E2E8D2",
  bottle: "#F7E0CC", pops: "#F7E3C9", plate: "#F0E1BE", sando: "#F1E4C8", fries: "#F1E4C2"
};

const CATEGORIES = [
  { id: "all",    label: "All" },
  { id: "coffee", label: "Coffee" },
  { id: "drinks", label: "Non-Coffee" },
  { id: "eats",   label: "Eats" }
];

const MENU = [
  /* --- Hot coffee --- */
  { name: "Hot Caffe Latte", grp: "Hot Coffee", cat: "coffee", art: "cup", price: 185, desc: "12 oz · 2 shots of espresso, steamed milk." },
  { name: "Hot Caramel Macchiato", grp: "Hot Coffee", cat: "coffee", art: "cup", price: 220, desc: "12 oz · espresso, steamed milk, caramel sauce & vanilla syrup." },
  { name: "Hot Salted Caramel", grp: "Hot Coffee", cat: "coffee", art: "cup", price: 220, desc: "12 oz · espresso, steamed milk, salted-caramel syrup & caramel sauce." },
  { name: "Hot Spanish Latte", grp: "Hot Coffee", cat: "coffee", art: "cup", price: 205, best: true, desc: "12 oz · 2 shots of espresso, steamed milk, condensed milk." },

  /* --- Iced coffee --- */
  { name: "Iced Americano", grp: "Iced Coffee", cat: "coffee", art: "tall", price: 170, desc: "16 oz over ice · 2 shots of espresso, cut with water." },
  { name: "Iced Caffe Latte", grp: "Iced Coffee", cat: "coffee", art: "tall", price: 185, desc: "16 oz over ice · espresso, full-cream or oat milk (+15)." },
  { name: "Iced Caramel Macchiato", grp: "Iced Coffee", cat: "coffee", art: "tall", price: 220, best: true, desc: "16 oz · espresso, vanilla syrup, caramel & milk — the house favorite." },
  { name: "Iced Spanish Latte", grp: "Iced Coffee", cat: "coffee", art: "tall", price: 205, best: true, desc: "16 oz · espresso, condensed milk & your choice of milk." },
  { name: "Iced Salted Caramel", grp: "Iced Coffee", cat: "coffee", art: "tall", price: 220, desc: "16 oz · espresso, salted-caramel syrup, caramel sauce & milk." },
  { name: "Sea Salt Latte", grp: "Iced Coffee", cat: "coffee", art: "tall", price: 255, desc: "16 oz · espresso, milk & condensed milk with a sea-salt cream cap." },
  { name: "White Mocha", grp: "Iced Coffee", cat: "coffee", art: "tall", price: 255, desc: "16 oz · 2 shots of espresso, white-chocolate sauce, milk." },
  { name: "Cinnamon Latte", grp: "Iced Coffee", cat: "coffee", art: "tall", price: 255, desc: "16 oz · 2 shots of espresso, cream, a warm cinnamon finish." },

  /* --- Something new --- */
  { name: "Matcha Latte", grp: "Something New", cat: "drinks", art: "matcha", price: 215, best: true, note: "Oat / full-cream (+₱15 for oat)", desc: "16 oz over ice · premium matcha with full-cream or oat milk." },
  { name: "Berry Milk", grp: "Something New", cat: "drinks", art: "milk", price: 190, desc: "16 oz over ice · tapioca milk with strawberry purée." },
  { name: "Ube Milk", grp: "Something New", cat: "drinks", art: "milk", price: 190, desc: "Creamy, velvety ube (purple yam) milk." },

  /* --- Classic beverages --- */
  { name: "Mango Tapioca", grp: "Classic Beverages", cat: "drinks", art: "bottle", price: 150, best: true, desc: "The signature Mango Tapioca — a street classic." },
  { name: "Coco de Mangga", grp: "Classic Beverages", cat: "drinks", art: "bottle", price: 155, desc: "16 oz · mango purée & nata de coco." },
  { name: "Coco de Pandan", grp: "Classic Beverages", cat: "drinks", art: "bottle", price: 155, desc: "16 oz · pandan purée & nata de coco." },

  /* --- Soda pops --- */
  { name: "Green Apple Soda Pops", grp: "Soda Pops", cat: "drinks", art: "pops", price: 130, desc: "A refreshing green-apple & sparkling-soda blend." },
  { name: "Strawberry Soda Pops", grp: "Soda Pops", cat: "drinks", art: "pops", price: 130, desc: "A refreshing strawberry & sparkling-soda blend." },
  { name: "Blueberry Soda Pops", grp: "Soda Pops", cat: "drinks", art: "pops", price: 130, desc: "A refreshing blueberry & sparkling-soda blend." },

  /* --- All-day breakfast --- */
  { name: "Bacsilog", grp: "All-Day Breakfast", cat: "eats", art: "plate", price: 220, best: true, desc: "2 pcs BAC, garlic fried rice, sunny-side egg & cheese." },
  { name: "Hotsilog", grp: "All-Day Breakfast", cat: "eats", art: "plate", price: 199, best: true, desc: "Classic Pinoy silog: 2 pcs jumbo hotdog, garlic fried rice, sunny-side egg." },
  { name: "Spamsilog", grp: "All-Day Breakfast", cat: "eats", art: "plate", price: 199, best: true, desc: "2 pcs of Spam, garlic fried rice, sunny-side egg." },

  /* --- Sandwiches --- */
  { name: "Club Sandwich", grp: "Sandwiches", cat: "eats", art: "sando", price: 229, best: true, desc: "Crispy bacon, egg, sliced cheese, lettuce, tomato & cucumber with creamy mayo on toasted bread." },
  { name: "Spam & Egg Sandwich", grp: "Sandwiches", cat: "eats", art: "sando", price: 199, best: true, desc: "Classic Spam, egg, mayo & sliced cheese." },
  { name: "Ham & Cheese Sandwich", grp: "Sandwiches", cat: "eats", art: "sando", price: 165, desc: "Savory ham layered with sliced cheese, lettuce & mayo." },

  /* --- Fries --- */
  { name: "Cheese Fries", grp: "Fries", cat: "eats", art: "fries", price: 115, desc: "Crisp-cut fries in a savory cheese seasoning." },
  { name: "Sour Cream Fries", grp: "Fries", cat: "eats", art: "fries", price: 115, desc: "Crisp-cut fries finished in sour-cream seasoning." }
];

const MENU_GROUP_ORDER = ["Hot Coffee", "Iced Coffee", "Something New", "Classic Beverages", "Soda Pops", "All-Day Breakfast", "Sandwiches", "Fries"];

/* ---- Reviews (verbatim customer quotes from Foodpanda) ---- */
const REVIEWS = [
  { quote: "Very good — my wife really loves it, and it really tastes good.", name: "Dannehs", meta: "Foodpanda review", stars: 5 },
  { quote: "Yummy drinks, perfect for summer.", name: "Karmie", meta: "Foodpanda review", stars: 5 },
  { quote: "I love this matcha — this is what I want.", name: "Alejandra", meta: "Foodpanda review", stars: 5 },
  { quote: "Suki na ko dito ng Spamsilog at Caramel Macchiato. Madalas ito laging order.", name: "Jum", meta: "Foodpanda review", stars: 5 }
];