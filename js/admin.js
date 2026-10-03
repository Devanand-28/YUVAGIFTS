// ===== GUARD =====
if (!localStorage.getItem('yuvagifts_admin')) location.href = "admin-login.html";

// ===== SALES DATA =====
const salesData = [
  { date: "2026-10-01", product: "Classic Crimson Rose Bouquet",       customer: "Rahul Sharma",  amount: 799,  status: "Delivered" },
  { date: "2026-10-01", product: "Artisan Belgian Chocolate Box",       customer: "Priya Menon",   amount: 1299, status: "Delivered" },
  { date: "2026-10-02", product: "Heritage Plush Teddy Bear",          customer: "Amit Kumar",    amount: 599,  status: "Delivered" },
  { date: "2026-10-02", product: "Haute Parfumerie Trio Set",          customer: "Sneha Reddy",   amount: 2499, status: "Delivered" },
  { date: "2026-10-02", product: "Minimalist Monogram Ceramic Mug",    customer: "Vikram Joshi",  amount: 399,  status: "Dispatched" },
  { date: "2026-10-03", product: "Royal Celebration Gift Hamper",       customer: "Neha Parekh",   amount: 3999, status: "In Transit" },
  { date: "2026-10-03", product: "Bespoke Engraved Photo Frame",       customer: "Karan Desai",   amount: 899,  status: "Preparing" }
];

// ===== HELPERS =====
const inr  = n  => '₹' + Number(n).toLocaleString('en-IN');
const $    = id => document.getElementById(id);
const STORE_KEY = 'yuvagifts_products';

// ===== LOAD / SAVE PRODUCTS TO localStorage =====
function loadProducts() {
  const saved = localStorage.getItem(STORE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length) {
        products.length = 0;
        parsed.forEach(p => products.push(p));
      }
    } catch (e) { /* ignore */ }
  }
}

function persistProducts() {
  localStorage.setItem(STORE_KEY, JSON.stringify(products));
}

function nextId() {
  return products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
}

// ===== STATS =====
function updateStats() {
  $('totalProducts').textContent = products.length;
  $('totalSales').textContent    = salesData.length;
  $('productsSold').textContent  = products.reduce((s, p) => s + Number(p.sold), 0);
  $('totalRevenue').textContent  = inr(salesData.reduce((s, x) => s + x.amount, 0));
}

// ===== ADMIN TABLE =====
function renderAdminTable() {
  const q = ($('adminSearch')?.value || '').toLowerCase().trim();
  const rows = products.filter(p =>
    p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  );
  
  $('productTable').innerHTML = rows.length
    ? rows.map(p => {
        const thumbHTML = p.image
          ? `<img src="${p.image}" alt="" style="width:44px; height:44px; object-fit:cover; border-radius:6px; border:1px solid #e5e7eb">`
          : `<span style="font-size:1.6rem">${p.emoji || '🎁'}</span>`;

        const priceHTML = p.originalPrice
          ? `<div><strong>${inr(p.price)}</strong> <span style="font-size:0.75rem; text-decoration:line-through; color:#9ca3af">${inr(p.originalPrice)}</span></div>`
          : `<strong>${inr(p.price)}</strong>`;

        return `
        <tr id="row-${p.id}" class="${p.stock <= 15 ? 'low-stock-row' : ''}">
          <td><span class="row-id">#${p.id}</span></td>
          <td>${thumbHTML}</td>
          <td>
            <strong>${p.name}</strong>
            ${p.tag ? `<br><span style="font-size:0.72rem; color:var(--berry); font-weight:600">${p.tag}</span>` : ''}
          </td>
          <td><span class="cat-tag cat-${p.category}">${p.category}</span></td>
          <td>${priceHTML}</td>
          <td class="${p.stock <= 15 ? 'low' : ''}"><strong>${p.stock}</strong> ${p.stock <= 15 ? '⚠️' : ''}</td>
          <td>${p.sold}</td>
          <td>★ ${Number(p.rating).toFixed(1)} <span style="font-size:0.75rem; color:#9ca3af">(${p.reviews})</span></td>
          <td class="action-cell">
            <button class="btn-edit" onclick="editProduct(${p.id})" title="Edit product details">Edit</button>
            <button class="btn-del"  onclick="confirmDelete(${p.id})" title="Remove product">Delete</button>
          </td>
        </tr>`;
      }).join('')
    : `<tr><td colspan="9" style="text-align:center;color:var(--muted);padding:2.5rem">No matching catalog items found.</td></tr>`;
}

// ===== FORM: TOGGLE =====
let formVisible = true;
function toggleForm() {
  formVisible = !formVisible;
  $('productForm').style.display = formVisible ? '' : 'none';
  $('formToggleBtn').textContent = formVisible ? 'Hide Editor Form ▲' : 'Show Editor Form ▼';
}

// ===== FORM: RESET =====
function resetForm() {
  $('productForm').reset();
  $('editId').value = '';
  $('fSold').value    = '0';
  $('fRating').value  = '4.9';
  $('fReviews').value = '0';
  $('fImage').value   = '';
  $('fOriginalPrice').value = '';
  $('fTag').value     = '';
  $('formTitle').textContent    = 'Create New Catalog Product';
  $('submitBtn').textContent    = 'Publish Product to Store';
  $('cancelBtn').style.display  = 'none';
  document.querySelectorAll('.editing-row').forEach(r => r.classList.remove('editing-row'));
}

// ===== FORM: EDIT =====
function editProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  if (!formVisible) toggleForm();
  
  $('editId').value         = p.id;
  $('fName').value          = p.name;
  $('fCategory').value      = p.category;
  $('fPrice').value         = p.price;
  $('fOriginalPrice').value = p.originalPrice || '';
  $('fTag').value           = p.tag || '';
  $('fStock').value         = p.stock;
  $('fSold').value          = p.sold;
  $('fRating').value        = p.rating;
  $('fReviews').value       = p.reviews;
  $('fDelivery').value      = p.deliveryTime || 'Same Day';
  $('fEmoji').value         = p.emoji || '';
  $('fImage').value         = p.image || '';
  $('fDesc').value          = p.description || '';
  $('fIncludes').value      = (p.includes || []).join('\n');
  
  $('formTitle').textContent   = `Modify Product #${p.id} – ${p.name}`;
  $('submitBtn').textContent   = 'Save Changes to Catalog';
  $('cancelBtn').style.display = 'inline-flex';
  
  document.querySelectorAll('.editing-row').forEach(r => r.classList.remove('editing-row'));
  const row = $(`row-${id}`);
  if (row) row.classList.add('editing-row');
  $('productFormPanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== FORM: SAVE (ADD OR EDIT) =====
function saveProduct(e) {
  e.preventDefault();
  const id = $('editId').value ? parseInt($('editId').value) : null;
  const includesRaw = $('fIncludes').value.trim();
  const includesList = includesRaw ? includesRaw.split('\n').map(s => s.trim()).filter(Boolean) : [];

  const originalPriceVal = $('fOriginalPrice').value ? parseInt($('fOriginalPrice').value) : null;

  const data = {
    id:           id || nextId(),
    name:         $('fName').value.trim(),
    category:     $('fCategory').value,
    price:        parseInt($('fPrice').value),
    originalPrice:originalPriceVal,
    tag:          $('fTag').value.trim() || undefined,
    stock:        parseInt($('fStock').value),
    sold:         parseInt($('fSold').value) || 0,
    rating:       parseFloat($('fRating').value) || 4.9,
    reviews:      parseInt($('fReviews').value) || 0,
    deliveryTime: $('fDelivery').value,
    emoji:        $('fEmoji').value.trim() || '🎁',
    image:        $('fImage').value.trim() || undefined,
    description:  $('fDesc').value.trim(),
    includes:     includesList
  };

  if (id) {
    const idx = products.findIndex(x => x.id === id);
    if (idx !== -1) products[idx] = data;
    toast(`Product "${data.name}" updated successfully.`);
  } else {
    products.push(data);
    toast(`Product "${data.name}" published to storefront.`);
  }

  persistProducts();
  resetForm();
  renderAdminTable();
  updateStats();

  setTimeout(() => {
    const row = $(`row-${data.id}`);
    if (row) {
      row.classList.add('saved-flash');
      setTimeout(() => row.classList.remove('saved-flash'), 1200);
    }
  }, 50);
}

// ===== DELETE FLOW =====
let pendingDeleteId = null;
function confirmDelete(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  pendingDeleteId = id;
  $('deleteModalMsg').textContent = `Are you certain you wish to delete "${p.name}"? This cannot be undone.`;
  const modal = $('deleteModal');
  modal.classList.add('open');
  $('confirmDeleteBtn').onclick = doDelete;
}

function closeDeleteModal() {
  $('deleteModal').classList.remove('open');
  pendingDeleteId = null;
}

function doDelete() {
  if (pendingDeleteId === null) return;
  const p = products.find(x => x.id === pendingDeleteId);
  const idx = products.findIndex(x => x.id === pendingDeleteId);
  if (idx !== -1) products.splice(idx, 1);
  persistProducts();
  closeDeleteModal();
  renderAdminTable();
  updateStats();
  if (p) toast(`Product "${p.name}" removed from catalog.`);
  if ($('editId').value == pendingDeleteId) resetForm();
}

// ===== SALES TABLE =====
function renderSalesTable() {
  $('salesTable').innerHTML = salesData.map(s => {
    const statusColor = s.status === 'Delivered' ? '#15803d; background:#ecfdf5' : '#b45309; background:#fef3c7';
    return `
    <tr>
      <td>${s.date}</td>
      <td><strong>${s.product}</strong></td>
      <td>${s.customer}</td>
      <td><strong>${inr(s.amount)}</strong></td>
      <td><span style="font-size:0.75rem; font-weight:700; padding:0.2rem 0.55rem; border-radius:99px; color:${statusColor}">${s.status}</span></td>
    </tr>`;
  }).join('');
}

// ===== INIT =====
loadProducts();
updateStats();
renderAdminTable();
renderSalesTable();
