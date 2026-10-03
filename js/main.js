// ===== PRODUCT DATA =====
const products = [
  {
    id: 1,
    name: "Classic Crimson Rose Bouquet",
    category: "birthday",
    price: 799,
    originalPrice: 999,
    tag: "Bestseller",
    emoji: "🌹",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80",
    stock: 25,
    sold: 140,
    rating: 4.9,
    reviews: 52,
    description: "A breathtaking hand-tied arrangement of 24 freshly cut crimson roses, wrapped in imported biodegradable kraft paper and finished with a bespoke double-satin ribbon.",
    includes: ["24 Handpicked Red Roses", "Eco-Friendly Kraft Wrapping", "Double-Face Satin Ribbon", "Embossed Greeting Card with Custom Note"],
    deliveryTime: "Same Day"
  },
  {
    id: 2,
    name: "Artisan Belgian Chocolate Box",
    category: "anniversary",
    price: 1299,
    originalPrice: 1599,
    tag: "Popular",
    emoji: "🍫",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80",
    stock: 40,
    sold: 295,
    rating: 4.9,
    reviews: 86,
    description: "A decadent tasting collection of 24 handcrafted Belgian pralines, truffles, and ganaches housed in a rigid matte-finish gift box with gold-foil filigree.",
    includes: ["24 Handcrafted Belgian Chocolates", "Rigid Keepsake Gift Box", "Flavor Guide & Tasting Notes", "Gold Foil Ribbon & Card"],
    deliveryTime: "Same Day"
  },
  {
    id: 3,
    name: "Haute Parfumerie Trio Set",
    category: "birthday",
    price: 2499,
    originalPrice: 2999,
    tag: "Luxury Edition",
    emoji: "🧴",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    stock: 15,
    sold: 92,
    rating: 4.8,
    reviews: 34,
    description: "A prestigious fragrance gift chest featuring three 30ml eau de parfum sprays: Velvet Rose & Oud, Citrus Vetiver, and Warm Amber Woods.",
    includes: ["3 Eau De Parfum Sprays (30ml each)", "Velvet-Lined Keepsake Chest", "Magnetic Closure Gift Packaging", "Personal Note Card"],
    deliveryTime: "Next Day"
  },
  {
    id: 4,
    name: "Heritage Plush Teddy Bear",
    category: "festival",
    price: 599,
    originalPrice: 799,
    tag: "Classic Gift",
    emoji: "🧸",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=80",
    stock: 50,
    sold: 380,
    rating: 4.7,
    reviews: 104,
    description: "A delightfully soft 45cm keepsake teddy bear crafted from hypoallergenic micro-fleece, adorned with a signature grosgrain bow.",
    includes: ["45cm Hypoallergenic Plush Bear", "Signature Grosgrain Bow", "Protective Dust Bag", "Gift Tag"],
    deliveryTime: "Same Day"
  },
  {
    id: 5,
    name: "Bespoke Engraved Photo Frame",
    category: "anniversary",
    price: 899,
    originalPrice: 1199,
    tag: "Custom Made",
    emoji: "🖼️",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
    stock: 30,
    sold: 210,
    rating: 4.9,
    reviews: 67,
    description: "An artisan solid oak photo frame custom precision-engraved with your chosen names and significant date. Accommodates 5x7 inch cherished memories.",
    includes: ["Solid Oak Frame (5×7 in)", "Anti-Glare Protective Glass", "Free Laser Engraving", "Table Stand & Wall Mount"],
    deliveryTime: "2–3 Days"
  },
  {
    id: 6,
    name: "Royal Celebration Gift Hamper",
    category: "wedding",
    price: 3999,
    originalPrice: 4799,
    tag: "Grand Hamper",
    emoji: "🎁",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
    stock: 10,
    sold: 75,
    rating: 5.0,
    reviews: 28,
    description: "An opulent wedding and celebration wicker chest packed with Belgian truffles, hand-poured soy candle, luxury dry fruits, roasted nuts, and a keepsake greeting card.",
    includes: ["Handcrafted Wicker Basket", "Belgian Truffles (200g)", "Artisan Scented Candle", "Premium California Almonds & Cashews", "Engraved Keepsake Card"],
    deliveryTime: "Next Day"
  },
  {
    id: 7,
    name: "Brass Festival Lantern Set",
    category: "festival",
    price: 1499,
    originalPrice: 1899,
    tag: "Handcrafted",
    emoji: "🪔",
    image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=600&q=80",
    stock: 20,
    sold: 165,
    rating: 4.8,
    reviews: 49,
    description: "A set of four antiqued brass hanging lanterns featuring intricate lattice openwork, creating ambient patterns of warm light for festive evenings.",
    includes: ["4 Hand-Finished Brass Lanterns", "8 LED Warm Tea Lights", "Braided Hanging Cords", "Festive Packaging"],
    deliveryTime: "Same Day"
  },
  {
    id: 8,
    name: "Minimalist Monogram Ceramic Mug",
    category: "birthday",
    price: 399,
    originalPrice: 549,
    tag: "Personalized",
    emoji: "☕",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    stock: 60,
    sold: 490,
    rating: 4.6,
    reviews: 130,
    description: "A 350ml high-fired stoneware mug featuring personalized calligraphy monogram in metallic gold. Microwave, dishwasher, and everyday safe.",
    includes: ["350ml Fine Stoneware Mug", "Custom Monogram / Name Print", "Gift Cushion Box"],
    deliveryTime: "2–3 Days"
  },
  {
    id: 9,
    name: "925 Sterling Silver Interlock Bracelet",
    category: "wedding",
    price: 2999,
    originalPrice: 3599,
    tag: "Fine Jewelry",
    emoji: "💍",
    image: "https://images.unsplash.com/photo-1611591475878-654b9d0339d1?auto=format&fit=crop&w=600&q=80",
    stock: 12,
    sold: 82,
    rating: 4.9,
    reviews: 31,
    description: "Hallmarked 925 sterling silver chain bracelet with polished interlocking circles signifying unbroken love. Presented in an emerald velvet jewel case.",
    includes: ["Hallmarked 925 Sterling Silver Bracelet", "Certificate of Authenticity", "Emerald Velvet Jewel Pouch", "Ribboned Presentation Box"],
    deliveryTime: "Next Day"
  },
  {
    id: 10,
    name: "Botanical Soy Aromatherapy Trio",
    category: "anniversary",
    price: 699,
    originalPrice: 899,
    tag: "Eco-Luxury",
    emoji: "🕯️",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80",
    stock: 35,
    sold: 245,
    rating: 4.8,
    reviews: 70,
    description: "Three amber glass candles poured with 100% natural soy wax and pure essential oils: French Lavender, Smoked Vanilla, and Damask Rose. 35+ hours burn time each.",
    includes: ["3 Soy Wax Candles (150g each)", "Crackling Wooden Wicks", "Amber Glass Vessels", "Botanical Gift Box"],
    deliveryTime: "Same Day"
  },
  {
    id: 11,
    name: "Monochrome Chrono Watch Gift Set",
    category: "birthday",
    price: 1999,
    originalPrice: 2499,
    tag: "Gentleman's Choice",
    emoji: "⌚",
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80",
    stock: 18,
    sold: 115,
    rating: 4.7,
    reviews: 42,
    description: "An understated modern minimalist chronograph with scratch-resistant sapphire-coated glass, genuine Italian top-grain leather strap, and Japanese quartz movement.",
    includes: ["Minimalist Quartz Timepiece", "Italian Leather Strap", "Strap Adjustment Tool", "Hinged Leatherette Display Case"],
    deliveryTime: "Next Day"
  },
  {
    id: 12,
    name: "Festive Grandeur Sweets & Diya Chest",
    category: "festival",
    price: 1799,
    originalPrice: 2199,
    tag: "Festive Special",
    emoji: "🎊",
    image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=600&q=80",
    stock: 22,
    sold: 160,
    rating: 4.8,
    reviews: 58,
    description: "A traditional celebratory chest featuring artisanal silver-leaf sweets, roasted cashews, terracotta scented diyas, and an embossed golden greeting card.",
    includes: ["Artisanal Sweets Collection (300g)", "Roasted Salted Cashews (150g)", "4 Terracotta Scented Diyas", "Gold Foil Greeting Card", "Embossed Festive Trunk"],
    deliveryTime: "Same Day"
  }
];

const WHATSAPP_NUMBER = "918637604442";

// ===== SYNC WITH ADMIN-ADDED PRODUCTS =====
(function syncAdminProducts() {
  const saved = localStorage.getItem('yuvagifts_products');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length) {
        products.length = 0;
        parsed.forEach(p => products.push(p));
      }
    } catch (e) { /* ignore */ }
  }
})();

// ===== SHARED NAVBAR + FOOTER =====
function renderChrome() {
  const page = location.pathname.split('/').pop() || 'index.html';
  const isAdmin = page.startsWith('admin');
  const link = (href, label, cls = '') =>
    `<li><a href="${href}" class="${cls} ${page === href ? 'active' : ''}">${label}</a></li>`;
  const links = isAdmin && page === 'admin-dashboard.html'
    ? link('index.html', 'View Storefront') + `<li><a href="#" onclick="logoutAdmin()">Log Out</a></li>`
    : link('index.html', 'Home') + link('products.html', 'Shop Catalog') + link('about.html', 'About Us') + link('contact.html', 'Contact') +
      link('login.html', 'Client Login') + link('admin-login.html', 'Admin Portal', 'admin-btn');

  const nav = document.getElementById('nav');
  if (nav) {
    nav.outerHTML = `<nav class="navbar" role="navigation" aria-label="Main navigation"><div class="wrap">
      <a href="index.html" class="logo">
        <span class="logo-mark">YG</span>
        <span class="logo-text">YUVA<b>GIFTS</b></span>
        ${page === 'admin-dashboard.html' ? '<span class="admin-badge">Admin</span>' : ''}
      </a>
      <button class="menu-toggle" aria-label="Toggle navigation" onclick="document.querySelector('.nav-links').classList.toggle('open')">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <ul class="nav-links">${links}</ul>
    </div></nav>`;
  }

  const f = document.getElementById('footer');
  if (f) {
    f.outerHTML = `<footer class="footer" role="contentinfo">
      <div class="footer-inner">
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <span class="logo-mark">YG</span>
            <span class="logo-text">YUVA<b>GIFTS</b></span>
          </a>
          <p>India's premier gifting boutique. Handcrafted floral arrangements, artisanal hampers, and bespoke keepsakes for life's most meaningful moments.</p>
          <div class="footer-badges">
            <span class="trust-pill">🔒 Verified Secure</span>
            <span class="trust-pill">✨ 100% Quality Guaranteed</span>
          </div>
        </div>
        <div class="footer-links">
          <h4>Collections</h4>
          <a href="products.html?cat=birthday">Birthday Celebrations</a>
          <a href="products.html?cat=anniversary">Anniversary Milestones</a>
          <a href="products.html?cat=wedding">Wedding & Bridal</a>
          <a href="products.html?cat=festival">Festive & Holiday</a>
          <a href="products.html">All Curated Gifts</a>
        </div>
        <div class="footer-links">
          <h4>Customer Care</h4>
          <a href="about.html">Our Craft & Story</a>
          <a href="contact.html">Customer Support</a>
          <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank">Order Tracking via WhatsApp</a>
          <a href="contact.html">Corporate & Bulk Inquiries</a>
          <a href="login.html">Client Account</a>
        </div>
        <div class="footer-links">
          <h4>Concierge Service</h4>
          <p class="concierge-desc">Need assistance selecting the perfect gift or custom styling? Speak directly with our gifting consultant.</p>
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I'd%20like%20assistance%20with%20custom%20gifting" target="_blank" class="footer-wa-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Chat with Concierge
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Yuvagifts Luxury Goods Pvt. Ltd. All rights reserved.</p>
        <div class="footer-sublinks">
          <span>Standard Delivery Terms</span>
          <span>Privacy Policy</span>
          <span>Quality Assurance</span>
        </div>
      </div>
    </footer>`;
  }
}
document.addEventListener('DOMContentLoaded', renderChrome);

// ===== TOAST =====
function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove('show'), 2600);
}

// ===== PRODUCT DETAIL MODAL =====
function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  const stars = renderStars(p.rating);
  const includesList = (p.includes || []).map(i => `<li><span class="check-icon">✓</span> <span>${i}</span></li>`).join('');
  const badge = p.stock <= 15
    ? `<span class="modal-badge badge-low">Only ${p.stock} units remaining</span>`
    : `<span class="modal-badge badge-ok">In Stock &amp; Ready to Ship</span>`;

  const imageHTML = p.image
    ? `<img src="${p.image}" alt="${p.name}" class="modal-product-photo" loading="eager" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
       <div class="modal-img-fallback" style="display:none">${p.emoji || '🎁'}</div>`
    : `<div class="modal-img-fallback">${p.emoji || '🎁'}</div>`;

  const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
  const originalPriceHTML = p.originalPrice ? `<span class="modal-orig-price">₹${p.originalPrice.toLocaleString('en-IN')}</span>` : '';
  const discountBadge = discount > 0 ? `<span class="discount-pill">${discount}% OFF</span>` : '';

  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalProductTitle">
      <button class="modal-close" onclick="closeModal()" aria-label="Close dialog">&times;</button>
      <div class="modal-grid">
        <div class="modal-photo-col">
          ${imageHTML}
          <div class="modal-photo-badges">
            <span class="photo-guarantee">✨ Complimentary Premium Wrapping</span>
          </div>
        </div>
        <div class="modal-body">
          <div class="modal-meta">
            <span class="category-tag">${p.category}</span>
            ${badge}
          </div>
          <h2 class="modal-name" id="modalProductTitle">${p.name}</h2>
          <div class="modal-rating">
            ${stars}
            <span class="rating-number">${p.rating}</span>
            <span class="rating-divider">·</span>
            <span class="review-link">${p.reviews} verified customer reviews</span>
          </div>

          <div class="modal-price-wrap">
            <span class="modal-price">₹${p.price.toLocaleString('en-IN')}</span>
            ${originalPriceHTML}
            ${discountBadge}
            <span class="tax-note">Inclusive of all taxes &amp; gift wrapping</span>
          </div>

          <p class="modal-desc">${p.description}</p>

          <div class="modal-delivery-promise">
            <div class="promise-item">
              <span class="p-icon">🚚</span>
              <div>
                <strong>${p.deliveryTime} Delivery</strong>
                <p>Express courier or scheduled slot available</p>
              </div>
            </div>
            <div class="promise-item">
              <span class="p-icon">💌</span>
              <div>
                <strong>Handwritten Card Included</strong>
                <p>Add your personalized message at checkout</p>
              </div>
            </div>
          </div>

          <div class="modal-includes">
            <h4>Curated In This Gift Set:</h4>
            <ul>${includesList}</ul>
          </div>

          <div class="modal-cta-row">
            <button class="btn-whatsapp modal-wa" onclick="sendToWhatsApp(${p.id})">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              <span>Instant Order via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>`;

  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add('open'));
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', escClose);
}

function closeModal() {
  const modal = document.querySelector('.modal-overlay');
  if (!modal) return;
  modal.classList.remove('open');
  setTimeout(() => modal.remove(), 280);
  document.removeEventListener('keydown', escClose);
}

function escClose(e) {
  if (e.key === 'Escape') closeModal();
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '<span class="star full">★</span>';
  if (half) s += '<span class="star half">★</span>';
  for (let i = full + (half ? 1 : 0); i < 5; i++) s += '<span class="star empty">★</span>';
  return `<span class="stars">${s}</span>`;
}

// ===== AUTH =====
function userLogin(e) {
  e.preventDefault();
  const email = document.getElementById('clientEmail')?.value || 'Client';
  toast(`Welcome back! Authenticated as ${email.split('@')[0]}`);
  localStorage.setItem('yuvagifts_client', 'true');
  setTimeout(() => location.href = "products.html", 800);
}

function socialLogin(provider) {
  toast(`Connecting with ${provider}... One moment.`);
  localStorage.setItem('yuvagifts_client', 'true');
  localStorage.setItem('yuvagifts_client_provider', provider);
  setTimeout(() => {
    toast(`Authenticated successfully via ${provider}!`);
    setTimeout(() => location.href = "products.html", 700);
  }, 900);
}

function adminLogin(e) {
  e.preventDefault();
  const u = document.getElementById('adminUser').value.trim();
  const p = document.getElementById('adminPass').value;
  if (u === "admin" && p === "admin123") {
    localStorage.setItem('yuvagifts_admin', 'true');
    location.href = "admin-dashboard.html";
  } else {
    toast("Invalid administrator credentials.");
  }
}

function logoutAdmin() {
  localStorage.removeItem('yuvagifts_admin');
  location.href = "admin-login.html";
}

function submitContact(e) {
  e.preventDefault();
  toast("Inquiry received. A gifting consultant will respond shortly.");
  e.target.reset();
}
