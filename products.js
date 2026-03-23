/*
  products.js
  ----------
  Contains product data for the Thrift Boutique demo.
  This is a frontend-only app, so all product data lives here.
*/

const PRODUCTS = [
  {
    id: "p001",
    title: "Summer dress",
    category: "Clothes",
    price: 49.99,
    rating: 4.7,
    sold: 21,
    images: [
      "images/summer-dress.jpg",
    ],
    description:
      "A flowing midi dress with delicate floral details. Comfortable, breathable, and perfect for brunch or a garden party.",
    tags: ["floral", "feminine", "summer"],
  },
  {
    id: "p002",
    title: "pink-slingbag",
    category: "Handbags",
    price: 64.0,
    rating: 4.8,
    sold: 37,
    images: [
      "images/pink-slingbag.jpg",
    ],
    description:
      "beautiful handbag for dates and going out.",
    tags: ["everyday", "leather", "compact"],
  },
  {
    id: "p003",
    title: "Retro Puma Sneakers",
    category: "Shoes",
    price: 78.5,
    rating: 4.6,
    sold: 54,
    images: [
      "images/puma-sneakers.jpg",
    ],
    description:
      "Vintage-inspired platform sneakers with cushioned soles. Add a touch of street chic to any outfit.",
    tags: ["retro", "casual", "statement"],
  },
  {
    id: "p004",
    title: "diamond necklace",
    category: "Accessories",
    price: 24.99,
    rating: 4.9,
    sold: 89,
    images: [
      "images/diamond-necklace.jpg",
    ],
    description:
      "A set of two silk scarves that can be worn in your hair, around your neck, or as a bag accessory. Subtle vintage vibe.",
    tags: ["silk", "chic", "gift"],
  },
  {
    id: "p005",
    title: "sweatshirt",
    category: "Clothes",
    price: 39.99,
    rating: 4.5,
    sold: 43,
    images: [
      "images/white-sweatshirt.jpg",
    ],
    description:
      "Cozy knit with pretty pastel stripes. Lightweight yet warm—perfect for cool mornings and coffee runs.",
    tags: ["cozy", "knit", "pastel"],
  },
  {
    id: "p006",
    title: "Cream Tote Bag",
    category: "Handbags",
    price: 55.0,
    rating: 4.4,
    sold: 31,
    images: [
      "images/cream-tote-bag.jpg",
    ],
    description:
      "Spacious tote with soft cream canvas and faux leather handles. Durable, stylish, and perfect for everyday carry.",
    tags: ["canvas", "everyday", "oversized"],
  },
  {
    id: "p007",
    title: "New Balance Sneakers",
    category: "Shoes",
    price: 34.75,
    rating: 4.3,
    sold: 26,
    images: [
      "images/new-balance-sneakers.jpg",
    ],
    description:
      "Effortless sneakers with a suede top and cushioned sole. Great for easy summer days.",
    tags: ["comfort", "summer", "easy"],
  },
  {
    id: "p008",
    title: "Gold Statement Earrings",
    category: "Accessories",
    price: 29.5,
    rating: 4.8,
    sold: 73,
    images: [
      "images/gold-earring.jpg",
    ],
    description:
      "Delicate gold drop earrings that elevate any outfit—from day to night.",
    tags: ["pearls", "jewelry", "elegant"],
  },
  {
    id: "p009",
    title: "White Hoodie",
    category: "Clothes",
    price: 89.99,
    rating: 4.7,
    sold: 19,
    images: [
      "images/white-hoodie.jpg",
    ],
    description:
      "Lightweight linen blazer that layers beautifully. A soft neutral that pairs with all your wardrobe.",
    tags: ["blazer", "layering", "neutral"],
  },
  {
    id: "p010",
    title: "slingbag",
    category: "Handbags",
    price: 32.0,
    rating: 4.4,
    sold: 58,
    images: [
      "images/sling-bag.jpg",
    ],
    description:
      "A summery clutch with natural straw weave and a snap closure. Light, breezy, and stylish.",
    tags: ["summer", "beach", "woven"],
  },
  {
    id: "p011",
    title: "Glam Velvet Heels",
    category: "Shoes",
    price: 92.0,
    rating: 4.6,
    sold: 14,
    images: [
      "images/official-look-heels.jpg",
    ],
    description:
      "Glam velvet heels with a bold platform for a confident step. Perfect for evenings and events.",
    tags: ["glam", "heels", "night"],
  },
  {
    id: "p012",
    title: "Ribbed Crewneck Tee",
    category: "Clothes",
    price: 19.99,
    rating: 4.2,
    sold: 64,
    images: [
      "https://images.unsplash.com/photo-1520975728297-82c0d861e2ed?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520975890231-3b6a9f4b7d7f?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Soft ribbed tee with a flattering crew neck. A versatile basic that’s great alone or layered.",
    tags: ["basic", "ribbed", "everyday"],
  }
];

function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function normalizeCategory(category) {
  return typeof category === "string" ? category.trim().toLowerCase() : "";
}

function getProductsByFilter({ query, category, minPrice, maxPrice, sort }) {
  let results = PRODUCTS.slice();

  if (category && category !== "All") {
    const normalizedCategory = normalizeCategory(category);
    results = results.filter(
      (p) => normalizeCategory(p.category) === normalizedCategory
    );
  }
  if (query) {
    const q = query.trim().toLowerCase();
    results = results.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }
  if (!isNaN(minPrice)) {
    results = results.filter((p) => p.price >= minPrice);
  }
  if (!isNaN(maxPrice)) {
    results = results.filter((p) => p.price <= maxPrice);
  }

  if (sort === "priceAsc") {
    results.sort((a, b) => a.price - b.price);
  } else if (sort === "priceDesc") {
    results.sort((a, b) => b.price - a.price);
  }

  return results;
}

function getCategories() {
  const categories = new Set(PRODUCTS.map((p) => p.category));
  return ["All", ...Array.from(categories)];
}

function formatPrice(value) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}
