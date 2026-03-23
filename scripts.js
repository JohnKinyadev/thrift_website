/*
  scripts.js
  ----------
  Shared UI logic for the Thrift Boutique demo.
*/

const STORAGE_CART_KEY = "thrift-boutique-cart";
const STORAGE_THEME_KEY = "thrift-boutique-theme";
const STORAGE_USERS_KEY = "thrift-boutique-users";
const STORAGE_SESSION_KEY = "thrift-boutique-session";

function getCart() {
  try {
    const raw = localStorage.getItem(STORAGE_CART_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.warn("Could not parse cart data", error);
    return {};
  }
}

function setCart(cart) {
  localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cart));
  renderCartCount();
}

function addToCart(productId, quantity = 1) {
  const cart = getCart();
  cart[productId] = (cart[productId] || 0) + quantity;
  setCart(cart);
}

function updateCartItem(productId, quantity) {
  const cart = getCart();
  if (quantity <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = quantity;
  }
  setCart(cart);
}

function removeFromCart(productId) {
  const cart = getCart();
  delete cart[productId];
  setCart(cart);
}

function clearCart() {
  setCart({});
}

function getStoredUsers() {
  try {
    const raw = localStorage.getItem(STORAGE_USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.warn("Could not parse user data", error);
    return [];
  }
}

function setStoredUsers(users) {
  localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  try {
    const raw = localStorage.getItem(STORAGE_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.warn("Could not parse session data", error);
    return null;
  }
}

function setCurrentUser(user) {
  if (!user) {
    localStorage.removeItem(STORAGE_SESSION_KEY);
    return;
  }

  localStorage.setItem(
    STORAGE_SESSION_KEY,
    JSON.stringify({
      name: user.name,
      email: user.email,
    })
  );
}

function signUpUser({ name, email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const users = getStoredUsers();
  const existingUser = users.find((user) => user.email === normalizedEmail);

  if (existingUser) {
    return {
      ok: false,
      message: "An account with that email already exists.",
    };
  }

  const user = {
    name: name.trim(),
    email: normalizedEmail,
    password,
  };

  users.push(user);
  setStoredUsers(users);
  setCurrentUser(user);

  return {
    ok: true,
    user: getCurrentUser(),
  };
}

function signInUser({ email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const users = getStoredUsers();
  const user = users.find(
    (entry) => entry.email === normalizedEmail && entry.password === password
  );

  if (!user) {
    return {
      ok: false,
      message: "We could not find a matching account for those details.",
    };
  }

  setCurrentUser(user);

  return {
    ok: true,
    user: getCurrentUser(),
  };
}

function signOutUser() {
  setCurrentUser(null);
}

function getCartCount() {
  const cart = getCart();
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function renderCartCount() {
  const count = getCartCount();
  document.querySelectorAll(".cart-count").forEach((el) => {
    el.textContent = count;
    el.setAttribute("aria-label", `Cart items: ${count}`);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_THEME_KEY, theme);
  const button = document.querySelector(".theme-toggle");
  if (button) {
    button.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

function loadTheme() {
  const saved = localStorage.getItem(STORAGE_THEME_KEY);
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
}

function setupThemeToggle() {
  const button = document.querySelector(".theme-toggle");
  if (!button) return;
  button.addEventListener("click", () => {
    toggleTheme();
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) {
      nav.classList.remove("open");
    }
  });
}

function initSite(activePage) {
  loadTheme();
  setupThemeToggle();
  setupMobileMenu();
  renderCartCount();
  setActiveNavLink(activePage);
}

function setActiveNavLink(activePage) {
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const page = link.getAttribute("data-page");
    if (page) {
      link.classList.toggle("active", page === activePage);
    }
  });
}

function showToast(message, { type = "info", duration = 2200 } = {}) {
  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("visible"));
  setTimeout(() => {
    toast.classList.remove("visible");
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function scrollToTopSmooth() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function createSkeletonCard() {
  const card = document.createElement("div");
  card.className = "product-card skeleton";
  card.innerHTML = `
    <div class="product-card__image"></div>
    <div class="product-card__body">
      <div class="skeleton-line short"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
    </div>
  `;
  return card;
}

function showSkeletonGrid(container, count = 8) {
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i += 1) {
    fragment.appendChild(createSkeletonCard());
  }
  container.appendChild(fragment);
}

function debounce(fn, wait = 220) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}
