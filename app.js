/* =====================================================
   GLOW UP PIECES — app.js
   ===================================================== */

// ── PRODUCT DATA ─────────────────────────────────────
// Each product has its own unique Unsplash photo ID
const PRODUCTS = [
  // ── LIP PRODUCTS ──────────────────────────────────
  {
    id: 1, cat: 'lips',
    name: 'VelvetKiss Matte Lip Cream',
    desc: 'Ultra-pigmented matte formula that stays for 8 hours. Non-drying, no feathering — just pure velvety color.',
    price: 299, oldPrice: 380,
    badge: 'bestseller',
    img: "https://th.bing.com/th/id/OIP.7a3N4WU6jlHEhubKca0cawHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2, cat: 'lips',
    name: 'GlossyGlow Lip Oil',
    desc: 'Nourishing lip oil with a mirror-shine finish. Plumps and hydrates with castor oil and vitamin E.',
    price: 249,
    badge: 'new',
    img: 'https://www.gosupps.com/media/catalog/product/7/1/71qsM3_0o4L.jpg'
  },
  {
    id: 3, cat: 'lips',
    name: 'NudeScene Lip Liner',
    desc: 'Creamy, long-wearing liner that defines and preps lips. Shade range covers nudes to deep berries.',
    price: 189,
    badge: null,
    img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=480&q=85'
  },
  // ── EYE MAKEUP ────────────────────────────────────
  {
    id: 4, cat: 'eyes',
    name: 'DepthCharge Eyeshadow Palette',
    desc: '18-shade palette ranging from everyday wearables to dramatic smoky shades. Blendable, buildable color.',
    price: 699, oldPrice: 850,
    badge: 'sale',
    img: 'https://th.bing.com/th/id/R.7d3d18f897b04c5d857aba5f3688533f?rik=zWK739UQMzsBng&riu=http%3a%2f%2fwww.deckofscarlet.com%2fcdn%2fshop%2ffiles%2fDoS-Eyeshadow-Palette-Maximalist-_-Solar-Aura-Campaign-2.jpg%3fv%3d1707209742&ehk=o7SpOS5M%2fyprYD8m6nuoiFO6SglNAOOljds3VqWbZEk%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    id: 5, cat: 'eyes',
    name: 'FlutterLash Fiber Mascara',
    desc: 'Bamboo fiber formula adds 3× length and volume. Clump-free brush gives dramatic, separated lashes.',
    price: 349,
    badge: 'bestseller',
    img: 'https://tse1.mm.bing.net/th/id/OIP.Nk5s6QsrSR3Ro_wmfWYe1wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 6, cat: 'eyes',
    name: 'InkLine Precision Eyeliner',
    desc: 'Ultra-fine felt tip delivers precise cat-eye wings. Waterproof, smudge-proof, all-day wear.',
    price: 229,
    badge: null,
    img: 'https://goldenrose.nl/wp-content/uploads/2020/10/Precision-Liner-01.jpg'
  },
  // ── FACE & FOUNDATION ─────────────────────────────
  {
    id: 7, cat: 'face',
    name: 'SkinMatch HD Foundation',
    desc: 'Medium-to-full coverage foundation in 24 shades. Breathable formula with hyaluronic acid for all-day comfort.',
    price: 549,
    badge: 'bestseller',
    img: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=480&q=85'
  },
  {
    id: 8, cat: 'face',
    name: 'DewDrop Liquid Highlighter',
    desc: 'Buildable liquid glow drops in pearl, champagne & rose gold. Mix into foundation or wear alone.',
    price: 379, oldPrice: 450,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=480&q=85'
  },
  {
    id: 9, cat: 'face',
    name: 'BronzeGlow Contour Stick',
    desc: 'Creamy, blendable contour + bronzer duo stick. Sculpts cheekbones and adds a sun-kissed warmth.',
    price: 329,
    badge: 'new',
    img: 'https://camillestyles.com/wp-content/uploads/2023/06/Fenty-Beauty-Match-Stix-Matte-Contour-Skinstick.webp'
  },
  {
    id: 10, cat: 'face',
    name: 'BlushBurst Powder Blush',
    desc: 'Finely milled blush with a natural flush and subtle shimmer. Lasts 10+ hours without creasing.',
    price: 299,
    badge: null,
    img: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=480&q=85'
  },
  // ── SKINCARE ──────────────────────────────────────
  {
    id: 11, cat: 'skincare',
    name: 'GlowPrep Vitamin C Serum',
    desc: 'Brightening 15% Vitamin C serum with ferulic acid. Fades dark spots and preps skin for a luminous makeup base.',
    price: 649,
    badge: 'bestseller',
    img: 'https://media.sephora.eu/content/dam/digital/pim/published/S/SEPHORA%20COLLECTION/P10061396/105741-media_5.jpeg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined'
  },
  {
    id: 12, cat: 'skincare',
    name: 'HydraVeil Moisturizing Cream',
    desc: 'Lightweight but deeply hydrating cream with ceramides and niacinamide. Plumps skin for a soft-focus effect.',
    price: 499, oldPrice: 599,
    badge: 'sale',
    img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=480&q=85'
  },
  {
    id: 13, cat: 'skincare',
    name: 'ClearStart Micellar Cleanser',
    desc: 'Gentle micellar water that lifts makeup, unclogs pores, and balances skin without stripping moisture.',
    price: 349,
    badge: 'new',
    img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=480&q=85'
  },
  // ── TOOLS & BRUSHES ───────────────────────────────
  {
    id: 14, cat: 'tools',
    name: 'SilkBlend 10-Brush Set',
    desc: 'Professional-grade synthetic brush set for face, eye, and lip application. Ergonomic rose-gold handles.',
    price: 799, oldPrice: 999,
    badge: 'bestseller',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=480&q=85'
  },
  {
    id: 15, cat: 'tools',
    name: 'MicroVelvet Beauty Sponge',
    desc: 'Vegan micro-velour sponge for seamless foundation blending. Use dry for coverage, wet for an airbrush finish.',
    price: 179,
    badge: null,
    img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=480&q=85'
  },
];

// Use unique real Unsplash photo IDs per product (override generic images)
const PRODUCT_IMGS = {
  1:  'https://th.bing.com/th/id/OIP.7a3N4WU6jlHEhubKca0cawHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',   // red lipstick tube
  2:  'https://www.gosupps.com/media/catalog/product/7/1/71qsM3_0o4L.jpg',   // lip gloss
  3:  'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=480&q=85',   // nude makeup closeup
  4:  'https://th.bing.com/th/id/R.7d3d18f897b04c5d857aba5f3688533f?rik=zWK739UQMzsBng&riu=http%3a%2f%2fwww.deckofscarlet.com%2fcdn%2fshop%2ffiles%2fDoS-Eyeshadow-Palette-Maximalist-_-Solar-Aura-Campaign-2.jpg%3fv%3d1707209742&ehk=o7SpOS5M%2fyprYD8m6nuoiFO6SglNAOOljds3VqWbZEk%3d&risl=&pid=ImgRaw&r=0',   // eyeshadow palette
  5:  'https://evalinabeauty.com/cdn/shop/products/flutterproduct_swash.jpg?v=1677609863&width=1445',   // eyeliner/eye
  6: 'https://goldenrose.nl/wp-content/uploads/2020/10/Precision-Liner-01.jpg',   // mascara/eye
  7:  'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=480&q=85',   // foundation bottles
  8:  'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=480&q=85',   // glittery highlighter
  9:  'https://camillestyles.com/wp-content/uploads/2023/06/Fenty-Beauty-Match-Stix-Matte-Contour-Skinstick.webp',   // skincare/contour product
  10: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=480&q=85',   // blush palette
  11: 'https://media.sephora.eu/content/dam/digital/pim/published/S/SEPHORA%20COLLECTION/P10061396/105741-media_5.jpeg?scaleWidth=undefined&scaleHeight=undefined&scaleMode=undefined',   // serum dropper bottle
  12: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=480&q=85',      // moisturizer jar
  13: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=480&q=85',   // cleanser pump bottle
  14: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=480&q=85',   // makeup brushes set
  15: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=480&q=85',      // beauty blender sponge
};

PRODUCTS.forEach(p => { if (PRODUCT_IMGS[p.id]) p.img = PRODUCT_IMGS[p.id]; });

// ── ORDERS ────────────────────────────────────────────
const ORDERS = {
  'GUP-2024-001': { step: 3, steps: ['Order Placed','Processing','Shipped','Out for Delivery','Delivered'] },
  'GUP-2024-002': { step: 4, steps: ['Order Placed','Processing','Shipped','Out for Delivery','Delivered'] },
  'GUP-2024-003': { step: 1, steps: ['Order Placed','Processing','Shipped','Out for Delivery','Delivered'] },
  'GUP-2024-004': { step: 0, steps: ['Order Placed','Processing','Shipped','Out for Delivery','Delivered'] },
};

// ── INVENTORY ─────────────────────────────────────────
const INVENTORY = [
  { name:'VelvetKiss Matte Lip Cream',    sku:'GUP-LIP-001', cat:'Lips',       price:299, stock:138 },
  { name:'GlossyGlow Lip Oil',            sku:'GUP-LIP-002', cat:'Lips',       price:249, stock:74  },
  { name:'NudeScene Lip Liner',           sku:'GUP-LIP-003', cat:'Lips',       price:189, stock:11  },
  { name:'DepthCharge Eyeshadow Palette', sku:'GUP-EYE-001', cat:'Eyes',       price:699, stock:55  },
  { name:'FlutterLash Fiber Mascara',     sku:'GUP-EYE-002', cat:'Eyes',       price:349, stock:160 },
  { name:'InkLine Precision Eyeliner',    sku:'GUP-EYE-003', cat:'Eyes',       price:229, stock:0   },
  { name:'SkinMatch HD Foundation',       sku:'GUP-FCE-001', cat:'Face',       price:549, stock:90  },
  { name:'DewDrop Liquid Highlighter',    sku:'GUP-FCE-002', cat:'Face',       price:379, stock:43  },
  { name:'BronzeGlow Contour Stick',      sku:'GUP-FCE-003', cat:'Face',       price:329, stock:8   },
  { name:'BlushBurst Powder Blush',       sku:'GUP-FCE-004', cat:'Face',       price:299, stock:66  },
  { name:'GlowPrep Vitamin C Serum',      sku:'GUP-SKN-001', cat:'Skincare',   price:649, stock:120 },
  { name:'HydraVeil Moisturizing Cream',  sku:'GUP-SKN-002', cat:'Skincare',   price:499, stock:0   },
  { name:'ClearStart Micellar Cleanser',  sku:'GUP-SKN-003', cat:'Skincare',   price:349, stock:77  },
  { name:'SilkBlend 10-Brush Set',        sku:'GUP-TLS-001', cat:'Tools',      price:799, stock:32  },
  { name:'MicroVelvet Beauty Sponge',     sku:'GUP-TLS-002', cat:'Tools',      price:179, stock:200 },
];

// ── REVIEWS ───────────────────────────────────────────
let REVIEWS = [
  { name:'Andrea T.',  product:'VelvetKiss Matte Lip Cream',    stars:5, av:'A', text:'Finally a Filipino lip cream that rivals high-end brands! The Rosewood shade is perfection on my morena skin. Lasts through meals!' },
  { name:'Carmela R.', product:'FlutterLash Fiber Mascara',     stars:5, av:'C', text:'I\'ve been loyal to a Korean mascara for years but this Glow Up one just HITS. Length + volume, no clumps at all. Daily essential.' },
  { name:'Joshua M.',  product:'SkinMatch HD Foundation',       stars:5, av:'J', text:'Found my exact shade — Warm Caramel 06. Looks like skin, not cake. Stays fresh even after work + gym. Will not go back.' },
  { name:'Diane L.',   product:'DepthCharge Eyeshadow Palette', stars:4, av:'D', text:'18 shades for ₱699? Insane value. Pigmentation is great for the price. The shimmers are blinding. One star off only because packaging could be sturdier.' },
  { name:'Tricia V.',  product:'GlowPrep Vitamin C Serum',      stars:5, av:'T', text:'Two weeks of use and my dark spots have visibly faded. Skin is noticeably brighter in the morning. Will buy again and again.' },
  { name:'Paolo G.',   product:'SilkBlend 10-Brush Set',        stars:5, av:'P', text:'I\'m a professional MUA and these brushes are honestly better than some sets I\'ve paid 3× the price for. Super soft, no shedding.' },
];

// ── STATE ─────────────────────────────────────────────
let cart = [];
let currentPD = null;
let pdQty = 1;
let pickedStars = 0;

// ── INIT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  renderInventory();
  renderReviews();
  setupNav();
  setupCats();
  setupSearch();
  setupStarPicker();
  updateCartBadge();
});

// ── SCROLL ────────────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', scrollY > 60);
  highlightNav();
});

function highlightNav() {
  const ids = ['home','products','about','team','inventory','suppliers','reviews','contact'];
  const y = scrollY + 140;
  ids.forEach(id => {
    const el = document.getElementById(id);
    const lk = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!el || !lk) return;
    const active = y >= el.offsetTop && y < el.offsetTop + el.offsetHeight;
    lk.classList.toggle('active', active);
  });
}

// ── NAV / HAMBURGER ───────────────────────────────────
function setupNav() {
  const ham = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  ham.addEventListener('click', () => {
    links.classList.toggle('open');
    ham.innerHTML = links.classList.contains('open')
      ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  document.querySelectorAll('.nav-link').forEach(l =>
    l.addEventListener('click', () => {
      links.classList.remove('open');
      ham.innerHTML = '<i class="fas fa-bars"></i>';
    })
  );
  document.getElementById('cartBtn').addEventListener('click', openCart);
}

// ── CATEGORIES ────────────────────────────────────────
function setupCats() {
  document.querySelectorAll('.cat-btn').forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.cat);
    })
  );
}

// ── RENDER PRODUCTS ───────────────────────────────────
function renderProducts(cat) {
  const list = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  document.getElementById('productGrid').innerHTML = list.map(p => `
    <article class="p-card" onclick="openPD(${p.id})">
      <div class="p-img-wrap">
        <img class="p-img" src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="p-bdg ${p.badge === 'bestseller' ? 'bdg-best' : p.badge === 'new' ? 'bdg-new' : 'bdg-sale'}">${p.badge === 'bestseller' ? '🔥 Bestseller' : p.badge === 'new' ? '✨ New' : '🏷 Sale'}</span>` : ''}
      </div>
      <div class="p-body">
        <div class="p-cat">${catLabel(p.cat)}</div>
        <div class="p-name">${p.name}</div>
        <div class="p-desc">${p.desc}</div>
        <div class="p-foot">
          <div class="p-price">
            ${p.oldPrice ? `<span class="old-p">₱${p.oldPrice}</span>` : ''}₱${p.price}
          </div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function catLabel(c) {
  return { lips:'Lip Products', eyes:'Eye Makeup', face:'Face & Foundation', skincare:'Skincare', tools:'Tools & Brushes' }[c] || c;
}

// ── PRODUCT DETAIL ────────────────────────────────────
function openPD(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentPD = p; pdQty = 1;
  document.getElementById('pdInner').innerHTML = `
    <div class="pd-inner">
      <img class="pd-img" src="${p.img}" alt="${p.name}" />
      <div class="pd-body">
        <div class="pd-cat">${catLabel(p.cat)}</div>
        <div class="pd-name">${p.name}</div>
        <div class="pd-price">₱${p.price}</div>
        <div class="pd-desc">${p.desc}</div>
        <div class="pd-qty">
          <span>Qty:</span>
          <div class="qty-ctrl">
            <button class="q-btn" onclick="chPdQty(-1)"><i class="fas fa-minus"></i></button>
            <span class="qty-num" id="pdQtyN">1</span>
            <button class="q-btn" onclick="chPdQty(1)"><i class="fas fa-plus"></i></button>
          </div>
        </div>
        <button class="pd-add" onclick="addToCartQty(${p.id})">
          <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
      </div>
    </div>
  `;
  document.getElementById('pdBg').classList.add('open');
}
function closePD() { document.getElementById('pdBg').classList.remove('open'); }
document.getElementById('pdBg').addEventListener('click', e => { if (e.target === e.currentTarget) closePD(); });

function chPdQty(d) {
  pdQty = Math.max(1, pdQty + d);
  const el = document.getElementById('pdQtyN');
  if (el) el.textContent = pdQty;
}
function addToCartQty(id) {
  const p = PRODUCTS.find(x => x.id === id);
  for (let i = 0; i < pdQty; i++) addToCart(id, true);
  toast(`${pdQty}× ${p.name} added to bag 🛍️`);
  closePD();
}

// ── CART ──────────────────────────────────────────────
function addToCart(id, silent = false) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const ex = cart.find(i => i.id === id);
  ex ? ex.qty++ : cart.push({ ...p, qty: 1 });
  updateCartBadge();
  renderCartItems();
  if (!silent) toast(`${p.name} added to bag 🛍️`);
}

function updateCartBadge() {
  document.getElementById('cartCount').textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function renderCartItems() {
  const box = document.getElementById('cartItems');
  if (!cart.length) {
    box.innerHTML = '<div class="empty-bag"><i class="fas fa-shopping-bag"></i><p>Your bag is empty</p></div>';
    document.getElementById('cartTotal').textContent = '₱0';
    return;
  }
  box.innerHTML = cart.map(item => `
    <div class="ci">
      <img class="ci-img" src="${item.img}" alt="${item.name}" />
      <div class="ci-info">
        <h5>${item.name}</h5>
        <p>₱${item.price}</p>
      </div>
      <div class="ci-qty">
        <button class="q-btn" onclick="cQty(${item.id},-1)"><i class="fas fa-minus"></i></button>
        <span>${item.qty}</span>
        <button class="q-btn" onclick="cQty(${item.id},1)"><i class="fas fa-plus"></i></button>
        <button class="ci-del" onclick="removeCI(${item.id})"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
  `).join('');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = `₱${total.toLocaleString()}`;
}

function cQty(id, d) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCartBadge(); renderCartItems();
}
function removeCI(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartBadge(); renderCartItems();
}

function openCart()  {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  renderCartItems();
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
}

// ── CHECKOUT ──────────────────────────────────────────
function checkout() {
  if (!cart.length) { toast('Your bag is empty!'); return; }
  closeCart();
  show('ckStep1'); hide('ckStep2'); hide('ckStep3');
  document.getElementById('checkoutBg').classList.add('open');
}
function goPayment() {
  const n = document.getElementById('chkName').value.trim();
  const a = document.getElementById('chkAddress').value.trim();
  if (!n || !a) { toast('Please fill in your shipping details.'); return; }
  hide('ckStep1'); show('ckStep2');
}
function placeOrder() {
  const id = 'GUP-' + Date.now().toString().slice(-6);
  document.getElementById('orderIdOut').textContent = `Order ID: ${id}`;
  hide('ckStep2'); show('ckStep3');
  cart = []; updateCartBadge(); renderCartItems();
}
function closeCheckout() { document.getElementById('checkoutBg').classList.remove('open'); }
document.getElementById('checkoutBg').addEventListener('click', e => { if (e.target === e.currentTarget) closeCheckout(); });

// ── ORDER TRACKER ─────────────────────────────────────
function trackOrder() {
  const val = document.getElementById('orderInput').value.trim().toUpperCase();
  const res = document.getElementById('trackerResult');
  const order = ORDERS[val];
  if (!order) {
    res.innerHTML = `<p class="tracker-note">Order not found. Try: GUP-2024-001</p>`;
    return;
  }
  const icons = ['fa-receipt','fa-cog','fa-box','fa-truck','fa-home'];
  const stepsHtml = order.steps.map((label, i) => {
    const done   = i < order.step;
    const active = i === order.step;
    return `
      <div class="t-step ${done ? 'done' : ''} ${active ? 'active' : ''}">
        <div class="t-dot"><i class="fas ${icons[i]}"></i></div>
        <div class="t-lbl">${label}</div>
      </div>
    `;
  }).join('');
  res.innerHTML = `
    <div class="t-steps">${stepsHtml}</div>
    <p class="t-status">Current Status: <strong>${order.steps[order.step]}</strong></p>
  `;
}

// ── INVENTORY ─────────────────────────────────────────
function renderInventory() {
  document.getElementById('inventoryBody').innerHTML = INVENTORY.map(item => {
    const cls = item.stock === 0 ? 's-out' : item.stock < 15 ? 's-low' : 's-in';
    const lbl = item.stock === 0 ? 'Out of Stock' : item.stock < 15 ? 'Low Stock' : 'In Stock';
    return `
      <tr>
        <td><strong>${item.name}</strong></td>
        <td><code style="font-size:.76rem;color:var(--muted)">${item.sku}</code></td>
        <td>${item.cat}</td>
        <td>₱${item.price}</td>
        <td>${item.stock || '—'}</td>
        <td><span class="s-badge ${cls}">${lbl}</span></td>
      </tr>
    `;
  }).join('');
}

// ── REVIEWS ───────────────────────────────────────────
function renderReviews() {
  document.getElementById('reviewsGrid').innerHTML = REVIEWS.map(r => `
    <div class="rv-card">
      <div class="rv-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
      <p class="rv-text">"${r.text}"</p>
      <div class="rv-author">
        <div class="rv-av">${r.av}</div>
        <div><h5>${r.name}</h5><p>${r.product}</p></div>
      </div>
    </div>
  `).join('');
}

function setupStarPicker() {
  const spans = document.querySelectorAll('#starPicker span');
  spans.forEach(s => {
    s.addEventListener('click', () => {
      pickedStars = +s.dataset.v;
      spans.forEach(x => x.classList.toggle('lit', +x.dataset.v <= pickedStars));
    });
    s.addEventListener('mouseenter', () => {
      spans.forEach(x => x.classList.toggle('lit', +x.dataset.v <= +s.dataset.v));
    });
  });
  document.getElementById('starPicker').addEventListener('mouseleave', () => {
    document.querySelectorAll('#starPicker span').forEach(x =>
      x.classList.toggle('lit', +x.dataset.v <= pickedStars)
    );
  });
}

function submitReview() {
  const name = document.getElementById('reviewName').value.trim();
  const prod = document.getElementById('reviewProduct').value.trim();
  const text = document.getElementById('reviewText').value.trim();
  if (!name || !text || !pickedStars) { toast('Fill in all fields and pick a star rating.'); return; }
  REVIEWS.unshift({ name, product: prod || 'Glow Up Pieces', stars: pickedStars, av: name[0].toUpperCase(), text });
  renderReviews();
  document.getElementById('reviewName').value = '';
  document.getElementById('reviewProduct').value = '';
  document.getElementById('reviewText').value = '';
  pickedStars = 0;
  document.querySelectorAll('#starPicker span').forEach(x => x.classList.remove('lit'));
  toast('Thank you for your review! ⭐');
}

// ── CONTACT ───────────────────────────────────────────
function sendMsg() {
  const n = document.getElementById('cName').value.trim();
  const e = document.getElementById('cEmail').value.trim();
  const m = document.getElementById('cMsg').value.trim();
  if (!n || !e || !m) { toast('Please fill in all required fields.'); return; }
  ['cName','cEmail','cSubject','cMsg'].forEach(id => document.getElementById(id).value = '');
  toast('Message sent! We\'ll reply within 24 hours 💌');
}

// ── SEARCH ────────────────────────────────────────────
function setupSearch() {
  document.getElementById('searchBtn').addEventListener('click', () => {
    document.getElementById('searchOverlay').classList.add('open');
    document.getElementById('searchInput').focus();
  });
  document.getElementById('searchClose').addEventListener('click', closeSearch);
  document.getElementById('searchInput').addEventListener('input', handleSearch);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });
}
function handleSearch(e) {
  const q = e.target.value.toLowerCase().trim();
  const box = document.getElementById('searchResults');
  if (!q) { box.innerHTML = ''; return; }
  const hits = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.cat.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q)
  );
  box.innerHTML = hits.length
    ? hits.map(p => `<div class="sr-item" onclick="searchPick(${p.id})"><strong>${p.name}</strong> — ₱${p.price}</div>`).join('')
    : '<p style="color:var(--muted)">No products found.</p>';
}
function searchPick(id) { closeSearch(); setTimeout(() => openPD(id), 200); }
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
}

// ── HELPERS ───────────────────────────────────────────
function show(id) { document.getElementById(id).classList.remove('hidden'); }
function hide(id) { document.getElementById(id).classList.add('hidden'); }

let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
}
