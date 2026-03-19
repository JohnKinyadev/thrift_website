/*
  products.js
  ----------
  Contains product data for the Thrift Boutique demo.
  This is a frontend-only app, so all product data lives here.
*/

const PRODUCTS = [
  {
    id: "p001",
    title: "Vintage Rose Midi Dress",
    category: "Clothes",
    price: 49.99,
    rating: 4.7,
    sold: 21,
    images: [
      "https://images.unsplash.com/photo-1520975691833-1a2ee584e9a4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520975973301-53d61f431c1f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1514995669114-54c6b620d3c8?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "A flowing midi dress with delicate floral details. Comfortable, breathable, and perfect for brunch or a garden party.",
    tags: ["floral", "feminine", "summer"],
  },
  {
    id: "p002",
    title: "Blush Leather Crossbody",
    category: "Handbags",
    price: 64.0,
    rating: 4.8,
    sold: 37,
    images: [
      "https://images.unsplash.com/photo-1520975691833-1a2ee584e9a4?auto=format&fit=crop&w=900&q=80", // reused for demo
      "https://images.unsplash.com/photo-1522184216312-6a2a0b8d5a0a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1602524203288-63e06f34a6d4?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Soft blush leather meets streamlined design. This crossbody is the perfect companion for errands or date night.",
    tags: ["everyday", "leather", "compact"],
  },
  {
    id: "p003",
    title: "Retro Platform Sneakers",
    category: "Shoes",
    price: 78.5,
    rating: 4.6,
    sold: 54,
    images: [
      "https://images.unsplash.com/photo-1520976228732-2c23b46d48f4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1616590153687-7c8a94d5f2a8?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520975772740-c0ee2a72b9b4?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Vintage-inspired platform sneakers with cushioned soles. Add a touch of street chic to any outfit.",
    tags: ["retro", "casual", "statement"],
  },
  {
    id: "p004",
    title: "Silk Scarf Set",
    category: "Accessories",
    price: 24.99,
    rating: 4.9,
    sold: 89,
    images: [
      "https://images.unsplash.com/photo-1520975655593-31234405eb70?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520975701823-82cc2f2c9f6d?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "A set of two silk scarves that can be worn in your hair, around your neck, or as a bag accessory. Subtle vintage vibe.",
    tags: ["silk", "chic", "gift"],
  },
  {
    id: "p005",
    title: "Pastel Knit Sweater",
    category: "Clothes",
    price: 39.99,
    rating: 4.5,
    sold: 43,
    images: [
      "https://images.unsplash.com/photo-1520975805737-8f4e0a1f4e1b?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520975814298-2a31eafc4f78?auto=format&fit=crop&w=900&q=80"
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
      "https://images.unsplash.com/photo-1520975719796-1c8f4b2ccb52?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520975725645-93c2bf9b925a?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Spacious tote with soft cream canvas and faux leather handles. Durable, stylish, and perfect for everyday carry.",
    tags: ["canvas", "everyday", "oversized"],
  },
  {
    id: "p007",
    title: "Blush Suede Slides",
    category: "Shoes",
    price: 34.75,
    rating: 4.3,
    sold: 26,
    images: [
      "https://images.unsplash.com/photo-1520979634580-f1f3f6b5b9b2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520979652909-4fb469e7b9eb?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Effortless slides with a suede top and cushioned sole. Great for easy summer days.",
    tags: ["comfort", "summer", "easy"],
  },
  {
    id: "p008",
    title: "Pearl Statement Earrings",
    category: "Accessories",
    price: 29.5,
    rating: 4.8,
    sold: 73,
    images: [
      "https://images.unsplash.com/photo-1520975866916-4eae9422cbab?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520979812742-4ba2af3f8c31?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Delicate pearl drop earrings that elevate any outfit—from day to night.",
    tags: ["pearls", "jewelry", "elegant"],
  },
  {
    id: "p009",
    title: "Soft Linen Blazer",
    category: "Clothes",
    price: 89.99,
    rating: 4.7,
    sold: 19,
    images: [
      "https://images.unsplash.com/photo-1520975902301-6aa2dbe8a4b6?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520975943515-7d73c4f43f37?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Lightweight linen blazer that layers beautifully. A soft neutral that pairs with all your wardrobe.",
    tags: ["blazer", "layering", "neutral"],
  },
  {
    id: "p010",
    title: "Straw Woven Clutch",
    category: "Handbags",
    price: 32.0,
    rating: 4.4,
    sold: 58,
    images: [
      "https://images.unsplash.com/photo-1520975898630-78c8b9026c2e?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520975974778-5410262a03a1?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "A summery clutch with natural straw weave and a snap closure. Light, breezy, and stylish.",
    tags: ["summer", "beach", "woven"],
  },
  {
    id: "p011",
    title: "Velvet Platform Heels",
    category: "Shoes",
    price: 92.0,
    rating: 4.6,
    sold: 14,
    images: [
      "https://images.unsplash.com/photo-1520975932271-8c11182a4f6c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1520975978084-78973f5b6dc3?auto=format&fit=crop&w=900&q=80"
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

function getProductsByFilter({ query, category, minPrice, maxPrice, sort }) {
  let results = PRODUCTS.slice();

  if (category && category !== "All") {
    results = results.filter((p) => p.category === category);
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
