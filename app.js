// app.js - Liveindekos Core JavaScript Application
import { formatIDR, generateId, showToast, getFacilityIcon } from './utils.js';

// ==========================================
// 1. DATABASE CONFIGURATION & MOCK DATA
// ==========================================

const DEFAULT_USERS = [
  {
    id: 'owner_1',
    email: 'owner@liveindekos.com',
    password: 'password',
    name: 'Budi Handoko',
    role: 'owner',
    avatar: 'BH'
  },
  {
    id: 'renter_1',
    email: 'renter@liveindekos.com',
    password: 'password',
    name: 'Rian Saputra',
    role: 'renter',
    avatar: 'RS'
  }
];

const DEFAULT_PROPERTIES = [
  {
    id: 'prop_1',
    name: 'Kos Tambora Tipe A Jatinangor',
    gender: 'putra',
    size: '3x4',
    priceMonth: 1200000,
    priceYear: 13000000,
    city: 'Bandung',
    address: 'Jl. Tambora No. 24, Hegarmanah, Jatinangor',
    latlong: '-6.9272, 107.7709',
    description: 'Kost putra strategis dekat dengan kampus UNPAD dan ITB Jatinangor. Lingkungan aman dengan keamanan 24 jam. Kamar mandi dalam dengan air bersih yang melimpah.',
    facilities: ['Wifi', 'Kasur', 'Lemari', 'Kamar Mandi Dalam', 'Parkir Motor', 'Penjaga Kost'],
    images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80'],
    ownerId: 'owner_1',
    status: 'active' // active, pending (waiting for admin)
  },
  {
    id: 'prop_2',
    name: 'Kos Harmoni Asri Yogyakarta',
    gender: 'putri',
    size: '4x4',
    priceMonth: 1500000,
    priceYear: 16500000,
    city: 'Yogyakarta',
    address: 'Gg. Harmoni No. 12, Caturtunggal, Depok, Sleman',
    latlong: '-7.7793, 110.3876',
    description: 'Kost khusus putri eksklusif, dekat UGM dan UNY. Kamar luas, full furnished, ada AC dan pemanas air di kamar mandi. Lengkap dengan dapur bersama.',
    facilities: ['Wifi', 'AC', 'Kasur', 'Lemari', 'TV', 'Kamar Mandi Dalam', 'Kulkas', 'Dapur Bersama', 'Parkir Mobil', 'Parkir Motor'],
    images: ['https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80'],
    ownerId: 'owner_1',
    status: 'active'
  },
  {
    id: 'prop_3',
    name: 'Kos Pejanggik Condongcatur',
    gender: 'campur',
    size: '3.5x4',
    priceMonth: 1800000,
    priceYear: 20000000,
    city: 'Yogyakarta',
    address: 'Jl. Pejanggik No. 8, Condongcatur, Sleman',
    latlong: '-7.7554, 110.4022',
    description: 'Kost campur eksklusif, dekat dengan UPN Veteran dan AMIKOM. Fasilitas modern dengan sirkulasi udara baik. Dilengkapi ruang santai bersama.',
    facilities: ['Wifi', 'AC', 'Kasur', 'Lemari', 'Kamar Mandi Dalam', 'Dapur Bersama', 'Parkir Motor'],
    images: ['https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80'],
    ownerId: 'owner_1',
    status: 'active'
  },
  {
    id: 'prop_4',
    name: 'Kos Ping Gomong Bandung',
    gender: 'putri',
    size: '3x3',
    priceMonth: 950000,
    priceYear: 10000000,
    city: 'Bandung',
    address: 'Gg. Ping Gomong III No. 42, Coblong, Dago',
    latlong: '-6.8841, 107.6135',
    description: 'Kost putri ekonomis namun nyaman di kawasan Dago Bandung. Dekat kampus ITB dan UNPAD Dipatiukur. Suasana tenang dan sejuk khas Bandung.',
    facilities: ['Wifi', 'Kasur', 'Lemari', 'Kulkas', 'Dapur Bersama', 'Parkir Motor'],
    images: ['https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80'],
    ownerId: 'owner_1',
    status: 'active'
  },
  {
    id: 'prop_5',
    name: 'Kos Onel Tipe A Tebet',
    gender: 'campur',
    size: '4x5',
    priceMonth: 2500000,
    priceYear: 28000000,
    city: 'Jakarta',
    address: 'Jl. Tebet Barat Dalam Raya No. 102, Jakarta Selatan',
    latlong: '-6.2372, 106.8488',
    description: 'Kost campur eksklusif premium di pusat Tebet. Desain minimalis modern, parkir luas, free cleaning kamar setiap minggu. Dekat stasiun Tebet dan pusat kuliner.',
    facilities: ['Wifi', 'AC', 'Kasur', 'Lemari', 'TV', 'Kamar Mandi Dalam', 'Kulkas', 'Dapur Bersama', 'Parkir Mobil', 'Parkir Motor', 'Penjaga Kost'],
    images: ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'],
    ownerId: 'owner_1',
    status: 'active'
  },
  {
    id: 'prop_6',
    name: 'Kos Putri Muslim Lowokwaru',
    gender: 'putri',
    size: '3x3',
    priceMonth: 850000,
    priceYear: 9000000,
    city: 'Malang',
    address: 'Jl. Lowokwaru Indah No. 5, Malang',
    latlong: '-7.9427, 112.6174',
    description: 'Kost khusus putri muslimah yang aman dan tenang. Sangat dekat dengan Universitas Brawijaya dan UIN Malang. Dikelola langsung oleh keluarga penjaga kost.',
    facilities: ['Wifi', 'Kasur', 'Lemari', 'Dapur Bersama', 'Parkir Motor', 'Penjaga Kost'],
    images: ['https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80'],
    ownerId: 'owner_2', // another owner
    status: 'active'
  }
];

const DEFAULT_BOOKINGS = [
  {
    id: 'book_1',
    renterId: 'renter_1',
    renterName: 'Rian Saputra',
    propertyId: 'prop_1',
    propertyName: 'Kos Tambora Tipe A Jatinangor',
    price: 1200000,
    duration: 3, // 3 months
    totalPrice: 3610000, // (1.2m * 3) + 10k fee
    startDate: '2026-07-01',
    paymentMethod: 'bank_transfer',
    status: 'pending', // pending, active, rejected, finished
    createdAt: '2026-06-07'
  }
];

const DEFAULT_CHATS = [
  {
    id: 'chat_1',
    renterId: 'renter_1',
    ownerId: 'owner_1',
    ownerName: 'Budi Handoko (Pemilik)',
    propertyName: 'Kos Tambora Tipe A Jatinangor',
    propertyId: 'prop_1',
    messages: [
      { sender: 'renter_1', text: 'Hallo, selamat pagi ibu...', time: '09.30' },
      { sender: 'owner_1', text: 'Pagi mbaa.. Ada yang bisa saya bantu terkait kost Tambora?', time: '09.37' }
    ]
  },
  {
    id: 'chat_2',
    renterId: 'renter_1',
    ownerId: 'owner_1',
    ownerName: 'Budi Handoko (Pemilik)',
    propertyName: 'Kos Harmoni Asri Yogyakarta',
    propertyId: 'prop_2',
    messages: [
      { sender: 'renter_1', text: 'Halo, apakah kamar kost putri Harmoni masih ready?', time: 'Yesterday' },
      { sender: 'owner_1', text: 'Pagi dek.. kamarnya masih ready ya. Sisa 1 kamar kosong di lantai 2.', time: 'Yesterday' }
    ]
  }
];

// Load Database State
function initDb() {
  if (!localStorage.getItem('liveindekos_users')) {
    localStorage.setItem('liveindekos_users', JSON.stringify(DEFAULT_USERS));
  }
  if (!localStorage.getItem('liveindekos_properties')) {
    localStorage.setItem('liveindekos_properties', JSON.stringify(DEFAULT_PROPERTIES));
  }
  if (!localStorage.getItem('liveindekos_bookings')) {
    localStorage.setItem('liveindekos_bookings', JSON.stringify(DEFAULT_BOOKINGS));
  }
  if (!localStorage.getItem('liveindekos_chats')) {
    localStorage.setItem('liveindekos_chats', JSON.stringify(DEFAULT_CHATS));
  }
}

// Get data from localStorage
function getDbTable(tableName) {
  return JSON.parse(localStorage.getItem(`liveindekos_${tableName}`));
}

// Save data to localStorage
function saveDbTable(tableName, data) {
  localStorage.setItem(`liveindekos_${tableName}`, JSON.stringify(data));
}

// ==========================================
// 2. SESSION MANAGEMENT
// ==========================================

function getCurrentUser() {
  const user = sessionStorage.getItem('liveindekos_session');
  return user ? JSON.parse(user) : null;
}

function setCurrentUser(user) {
  if (user) {
    sessionStorage.setItem('liveindekos_session', JSON.stringify(user));
  } else {
    sessionStorage.removeItem('liveindekos_session');
  }
  updateNavbarState();
}

// ==========================================
// 3. APPLICATION STATE & ROUTING
// ==========================================

const AppState = {
  currentFilter: {
    city: '',
    gender: '',
    priceMax: '',
    facilities: []
  },
  activeChatId: null,
  activeWizardStep: 1,
  wizardData: {}
};

// Simple Client-side Router
function handleRoute() {
  const hash = window.location.hash || '#/';
  
  // Close modals on page navigation
  closeAllModals();

  // Reset active menu indicator
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

  if (hash === '#/' || hash === '') {
    document.getElementById('nav-home').classList.add('active');
    renderHome();
  } else if (hash.startsWith('#/search')) {
    document.getElementById('nav-search').classList.add('active');
    
    // Parse URL params for filters
    const urlParams = new URLSearchParams(hash.split('?')[1] || '');
    AppState.currentFilter.gender = urlParams.get('type') || '';
    AppState.currentFilter.city = urlParams.get('city') || '';
    
    renderSearch();
  } else if (hash.startsWith('#/kost/')) {
    const propId = hash.split('#/kost/')[1];
    renderDetail(propId);
  } else if (hash === '#/chat') {
    const user = getCurrentUser();
    if (!user) {
      showToast('Silakan masuk terlebih dahulu untuk mengakses Chat.', 'error');
      window.location.hash = '#/';
      openAuthModal('login');
      return;
    }
    document.getElementById('nav-chat').classList.add('active');
    renderChat();
  } else if (hash === '#/renter') {
    const user = getCurrentUser();
    if (!user || user.role !== 'renter') {
      window.location.hash = '#/';
      return;
    }
    document.getElementById('nav-renter-dash').classList.add('active');
    renderRenterDashboard();
  } else if (hash === '#/owner') {
    const user = getCurrentUser();
    if (!user || user.role !== 'owner') {
      window.location.hash = '#/';
      return;
    }
    document.getElementById('nav-owner-dash').classList.add('active');
    renderOwnerDashboard();
  } else {
    // 404 fallback
    window.location.hash = '#/';
  }
}

// Update navbar appearance based on authentication session
function updateNavbarState() {
  const user = getCurrentUser();
  const authBtns = document.getElementById('nav-auth-buttons');
  const userProfile = document.getElementById('nav-user-profile');
  const roleToggle = document.getElementById('role-toggle-container');
  const navChat = document.getElementById('nav-chat');
  const navRenter = document.getElementById('nav-renter-dash');
  const navOwner = document.getElementById('nav-owner-dash');
  const avatar = document.getElementById('nav-avatar');

  if (user) {
    authBtns.style.display = 'none';
    userProfile.style.display = 'flex';
    avatar.textContent = user.avatar || user.name.substring(0, 2).toUpperCase();
    navChat.style.display = 'block';

    // Show dashboard according to user role
    if (user.role === 'renter') {
      navRenter.style.display = 'block';
      navOwner.style.display = 'none';
      roleToggle.style.display = 'flex';
      document.getElementById('btn-role-renter').classList.add('active');
      document.getElementById('btn-role-owner').classList.remove('active');
    } else {
      navRenter.style.display = 'none';
      navOwner.style.display = 'block';
      roleToggle.style.display = 'flex';
      document.getElementById('btn-role-renter').classList.remove('active');
      document.getElementById('btn-role-owner').classList.add('active');
    }

    // Refresh chat badge notification
    updateChatBadgeCount();
  } else {
    authBtns.style.display = 'flex';
    userProfile.style.display = 'none';
    roleToggle.style.display = 'none';
    navChat.style.display = 'none';
    navRenter.style.display = 'none';
    navOwner.style.display = 'none';
  }
}

function updateChatBadgeCount() {
  const user = getCurrentUser();
  if (!user) return;

  const chats = getDbTable('chats');
  const userChats = chats.filter(c => c.renterId === user.id || c.ownerId === user.id);
  const totalUnread = userChats.reduce((acc, chat) => {
    // Just mock that the last message is unread if not sent by current user
    const lastMsg = chat.messages[chat.messages.length - 1];
    if (lastMsg && lastMsg.sender !== user.id) {
      return acc + 1;
    }
    return acc;
  }, 0);

  const badge = document.getElementById('nav-chat-badge');
  if (totalUnread > 0) {
    badge.textContent = totalUnread;
    badge.style.display = 'inline-flex';
  } else {
    badge.style.display = 'none';
  }
}

// ==========================================
// 4. RENDERING FUNCTIONS
// ==========================================

// --- LANDING / HOME PAGE ---
function renderHome() {
  const appContent = document.getElementById('app-content');
  
  // Get active properties
  const properties = getDbTable('properties').filter(p => p.status === 'active');
  const featuredKosts = properties.slice(0, 3); // Take first 3 for featured

  appContent.innerHTML = `
    <!-- Hero Banner -->
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-text">
          <h1>Cari Kost Impian<br>Tanpa Ribet di <span>Liveindekos</span></h1>
          <p>Dapatkan hunian kost terbaik yang nyaman, aman, dan bersih di berbagai kota besar di Indonesia. Dilengkapi informasi fasilitas terlengkap dan sewa langsung ke pemilik.</p>
          
          <!-- Search Box -->
          <div class="search-widget">
            <div class="search-grid">
              <div class="search-field">
                <label>Pilih Lokasi</label>
                <div class="search-input-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input type="text" id="home-search-city" placeholder="Mau ngekos di mana? (Yogyakarta, Bandung...)">
                </div>
              </div>
              <div class="search-field">
                <label>Tipe Kost</label>
                <select id="home-search-gender">
                  <option value="">Semua Tipe</option>
                  <option value="putra">Putra</option>
                  <option value="putri">Putri</option>
                  <option value="campur">Campur</option>
                </select>
              </div>
              <div class="search-field" style="justify-content: flex-end;">
                <button class="btn btn-primary btn-full" id="btn-home-search">Temukan Kost</button>
              </div>
            </div>
          </div>
        </div>

        <div class="hero-image-container">
          <div class="hero-bg-accent"></div>
          <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80" alt="Liveindekos Cozy Room" class="hero-img">
        </div>
      </div>
    </section>

    <!-- Categories Block -->
    <section class="categories">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>Pilihan Kategori Kost</h2>
            <p>Jelajahi kost yang cocok berdasarkan tipe penyewa</p>
          </div>
        </div>
        <div class="category-grid">
          <div class="category-card putra" data-type="putra">
            <div class="cat-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3>Kost Putra</h3>
            <p>Khusus pria, lingkungan mandiri & tenang</p>
          </div>
          <div class="category-card putri" data-type="putri">
            <div class="cat-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3>Kost Putri</h3>
            <p>Khusus wanita, terjamin & tertib</p>
          </div>
          <div class="category-card campur" data-type="campur">
            <div class="cat-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3>Kost Campur</h3>
            <p>Kost terbuka putra/putri, praktis & modern</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Popular Boarding House Grid -->
    <section class="featured-list">
      <div class="container">
        <div class="section-header">
          <div>
            <h2>Rekomendasi Kost Terpopuler</h2>
            <p>Kamar pilihan dengan review terbaik dan harga kompetitif</p>
          </div>
          <a href="#/search" class="btn btn-secondary btn-sm">Lihat Semua</a>
        </div>

        <div class="kost-grid">
          ${featuredKosts.map(k => renderKostCard(k)).join('')}
        </div>
      </div>
    </section>
  `;

  // Attach landing page search triggers
  document.getElementById('btn-home-search').addEventListener('click', () => {
    const city = document.getElementById('home-search-city').value.trim();
    const gender = document.getElementById('home-search-gender').value;
    window.location.hash = `#/search?city=${encodeURIComponent(city)}&type=${gender}`;
  });

  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const type = card.dataset.type;
      window.location.hash = `#/search?type=${type}`;
    });
  });
}

// Generate Kost Card element markup
function renderKostCard(kost) {
  const genderLabels = { putra: 'Putra', putri: 'Putri', campur: 'Campur' };
  const mainImage = kost.images && kost.images.length > 0 ? kost.images[0] : 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80';
  
  return `
    <div class="kost-card" onclick="window.location.hash='#/kost/${kost.id}'">
      <div class="kost-card-img-wrapper">
        <span class="badge-category ${kost.gender}">${genderLabels[kost.gender]}</span>
        <img class="kost-card-img" src="${mainImage}" alt="${kost.name}" onerror="this.src='https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80'">
      </div>
      <div class="kost-card-content">
        <div class="kost-card-price">${formatIDR(kost.priceMonth)} <span>/ bulan</span></div>
        <h3 class="kost-card-title">${kost.name}</h3>
        <div class="kost-card-loc">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>${kost.city}</span>
        </div>
        <div class="kost-card-facilities">
          ${kost.facilities.slice(0, 4).map(f => `
            <div class="facility-badge-mini" data-tooltip="${f}">
              ${getFacilityIcon(f)}
            </div>
          `).join('')}
          ${kost.facilities.length > 4 ? `<div class="facility-badge-mini" style="font-size:10px; font-weight:700;">+${kost.facilities.length - 4}</div>` : ''}
        </div>
      </div>
    </div>
  `;
}

// --- EXPLORE / SEARCH SEARCH RESULTS PAGE ---
function renderSearch() {
  const appContent = document.getElementById('app-content');
  const properties = getDbTable('properties').filter(p => p.status === 'active');

  appContent.innerHTML = `
    <div class="container">
      <div class="search-view-layout">
        
        <!-- Filter Sidebar -->
        <aside class="filter-sidebar">
          <h3>
            <span>Filter Cari</span>
            <button style="font-size:11px; color:var(--secondary); font-weight:700;" id="btn-clear-filters">Reset</button>
          </h3>
          
          <div class="filter-group">
            <label for="filter-city">Pilih Kota</label>
            <select id="filter-city">
              <option value="">Semua Kota</option>
              <option value="Jakarta" ${AppState.currentFilter.city === 'Jakarta' ? 'selected' : ''}>Jakarta</option>
              <option value="Bandung" ${AppState.currentFilter.city === 'Bandung' ? 'selected' : ''}>Bandung</option>
              <option value="Yogyakarta" ${AppState.currentFilter.city === 'Yogyakarta' ? 'selected' : ''}>Yogyakarta</option>
              <option value="Surabaya" ${AppState.currentFilter.city === 'Surabaya' ? 'selected' : ''}>Surabaya</option>
              <option value="Malang" ${AppState.currentFilter.city === 'Malang' ? 'selected' : ''}>Malang</option>
            </select>
          </div>

          <div class="filter-group">
            <label for="filter-gender">Tipe Kost</label>
            <select id="filter-gender">
              <option value="">Semua Kategori</option>
              <option value="putra" ${AppState.currentFilter.gender === 'putra' ? 'selected' : ''}>Putra</option>
              <option value="putri" ${AppState.currentFilter.gender === 'putri' ? 'selected' : ''}>Putri</option>
              <option value="campur" ${AppState.currentFilter.gender === 'campur' ? 'selected' : ''}>Campur</option>
            </select>
          </div>

          <div class="filter-group">
            <label for="filter-price">Harga Maksimal (Rp/Bulan)</label>
            <input type="number" id="filter-price" placeholder="Contoh: 1500000" value="${AppState.currentFilter.priceMax || ''}">
          </div>

          <div class="filter-group">
            <label>Fasilitas Utama</label>
            <div class="checkbox-list">
              ${['Wifi', 'AC', 'Kamar Mandi Dalam', 'Parkir Motor', 'Dapur Bersama'].map(facility => {
                const checked = AppState.currentFilter.facilities.includes(facility) ? 'checked' : '';
                return `
                  <label class="checkbox-item">
                    <input type="checkbox" class="filter-facility-check" value="${facility}" ${checked}>
                    <span>${facility}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        </aside>

        <!-- Search Results Listing Grid -->
        <section>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
            <div style="font-size:14px; color:var(--text-muted);" id="search-count-label">Menampilkan 0 Kost</div>
            <div style="display:flex; gap:10px; align-items:center;">
              <span style="font-size:12px; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Urutan</span>
              <select id="search-sort" style="padding:6px 12px; border-radius:var(--radius-sm); border:1px solid var(--border); font-size:13px; font-weight:600;">
                <option value="lowest">Harga Terendah</option>
                <option value="highest">Harga Tertinggi</option>
              </select>
            </div>
          </div>

          <div class="kost-grid" id="search-results-grid"></div>
        </section>

      </div>
    </div>
  `;

  // Attach filters state update triggers
  const getFilteredProperties = () => {
    let filtered = [...properties];

    // Filter by city
    if (AppState.currentFilter.city) {
      filtered = filtered.filter(p => p.city.toLowerCase().includes(AppState.currentFilter.city.toLowerCase()));
    }

    // Filter by gender
    if (AppState.currentFilter.gender) {
      filtered = filtered.filter(p => p.gender === AppState.currentFilter.gender);
    }

    // Filter by max price
    if (AppState.currentFilter.priceMax) {
      filtered = filtered.filter(p => p.priceMonth <= parseInt(AppState.currentFilter.priceMax));
    }

    // Filter by facilities (AND logic)
    if (AppState.currentFilter.facilities.length > 0) {
      filtered = filtered.filter(p => 
        AppState.currentFilter.facilities.every(fac => p.facilities.includes(fac))
      );
    }

    // Sort items
    const sortVal = document.getElementById('search-sort').value;
    if (sortVal === 'lowest') {
      filtered.sort((a, b) => a.priceMonth - b.priceMonth);
    } else {
      filtered.sort((a, b) => b.priceMonth - a.priceMonth);
    }

    return filtered;
  };

  const updateResultsUI = () => {
    const results = getFilteredProperties();
    const grid = document.getElementById('search-results-grid');
    const label = document.getElementById('search-count-label');

    label.textContent = `Menampilkan ${results.length} Kost`;

    if (results.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding:60px 0; color:var(--text-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48" style="margin-bottom:12px; color:var(--text-light);">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p style="font-weight:700; font-size:16px;">Kost tidak ditemukan</p>
          <p style="font-size:13px; margin-top:4px;">Coba ubah kriteria filter pencarian Anda.</p>
        </div>
      `;
    } else {
      grid.innerHTML = results.map(k => renderKostCard(k)).join('');
    }
  };

  // Listen for filter input changes
  document.getElementById('filter-city').addEventListener('change', (e) => {
    AppState.currentFilter.city = e.target.value;
    updateResultsUI();
  });

  document.getElementById('filter-gender').addEventListener('change', (e) => {
    AppState.currentFilter.gender = e.target.value;
    updateResultsUI();
  });

  document.getElementById('filter-price').addEventListener('input', (e) => {
    AppState.currentFilter.priceMax = e.target.value;
    updateResultsUI();
  });

  document.querySelectorAll('.filter-facility-check').forEach(chk => {
    chk.addEventListener('change', () => {
      const activeFacs = [];
      document.querySelectorAll('.filter-facility-check:checked').forEach(c => activeFacs.push(c.value));
      AppState.currentFilter.facilities = activeFacs;
      updateResultsUI();
    });
  });

  document.getElementById('search-sort').addEventListener('change', updateResultsUI);

  document.getElementById('btn-clear-filters').addEventListener('click', () => {
    AppState.currentFilter = { city: '', gender: '', priceMax: '', facilities: [] };
    document.getElementById('filter-city').value = '';
    document.getElementById('filter-gender').value = '';
    document.getElementById('filter-price').value = '';
    document.querySelectorAll('.filter-facility-check').forEach(c => c.checked = false);
    updateResultsUI();
  });

  // Initial load
  updateResultsUI();
}

// --- KOST DETAIL PAGE ---
function renderDetail(id) {
  const appContent = document.getElementById('app-content');
  const properties = getDbTable('properties');
  const kost = properties.find(p => p.id === id);

  if (!kost) {
    appContent.innerHTML = `<div class="container" style="padding:60px 0; text-align:center;"><h2>Kost tidak ditemukan!</h2><a href="#/" class="btn btn-primary" style="margin-top:16px;">Kembali</a></div>`;
    return;
  }

  const genderLabels = { putra: 'Putra', putri: 'Putri', campur: 'Campur' };
  const genderBadges = { putra: 'putra', putri: 'putri', campur: 'campur' };
  const mainImage = kost.images && kost.images.length > 0 ? kost.images[0] : 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80';
  const thumbImages = kost.images && kost.images.length > 1 ? kost.images.slice(1) : [
    'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80'
  ];

  appContent.innerHTML = `
    <div class="container">
      <div class="detail-layout">
        
        <!-- Left Column: Specs, descriptions, photos -->
        <div class="detail-main">
          
          <!-- Image Gallery Grid -->
          <div class="detail-gallery">
            <img class="gallery-large" src="${mainImage}" alt="${kost.name}">
            <div class="gallery-thumbs">
              <img class="gallery-thumb" src="${thumbImages[0]}" alt="Thumb 1">
              <img class="gallery-thumb" src="${thumbImages[1] || thumbImages[0]}" alt="Thumb 2">
            </div>
          </div>

          <!-- Header Titles -->
          <div class="detail-header">
            <div class="detail-header-top">
              <div>
                <span class="badge-category ${genderBadges[kost.gender]}" style="position:static; margin-bottom:8px; display:inline-block;">
                  Kost ${genderLabels[kost.gender]}
                </span>
                <h1 class="detail-title">${kost.name}</h1>
                <p style="color:var(--text-muted); font-size:14px; margin-top:6px; display:flex; align-items:center; gap:4px;">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>${kost.address}, Kota ${kost.city}</span>
                </p>
              </div>
            </div>
            
            <div class="detail-specs">
              <div class="spec-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                <span>Dimensi ${kost.size} m</span>
              </div>
              <div class="spec-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <span>Termasuk Listrik</span>
              </div>
            </div>
          </div>

          <!-- Description Section -->
          <div class="detail-section">
            <h3>Deskripsi Kost</h3>
            <p class="detail-desc">${kost.description}</p>
          </div>

          <!-- Facilities section -->
          <div class="detail-section">
            <h3>Fasilitas Kamar & Umum</h3>
            <div class="facilities-grid">
              ${kost.facilities.map(f => `
                <div class="facility-item">
                  ${getFacilityIcon(f)}
                  <span>${f}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Location Maps Selection -->
          <div class="detail-section">
            <h3>Lokasi & Peta Lingkungan</h3>
            <div class="location-map-placeholder">
              <!-- OpenStreetMap iframe for interactive coordinates rendering -->
              <iframe src="https://maps.google.com/maps?q=${kost.latlong.split(',')[0]},${kost.latlong.split(',')[1]}&z=15&output=embed"></iframe>
            </div>
            <div class="location-address">Google Maps Koordinat: ${kost.latlong}</div>
          </div>
        </div>

        <!-- Right Column: Booking Box Widget -->
        <div class="detail-sidebar">
          <div class="booking-panel">
            <div class="booking-panel-price" id="booking-aside-price-title">
              ${formatIDR(kost.priceMonth)} <span>/ bulan</span>
            </div>

            <form class="booking-form" id="form-booking-calculator">
              <div class="booking-input-group">
                <label>Mulai Kost Tanggal</label>
                <input type="date" id="booking-start-date" required value="${new Date().toISOString().split('T')[0]}">
              </div>

              <div class="booking-input-group">
                <label>Durasi Sewa</label>
                <select id="booking-duration">
                  <option value="1" data-type="month">1 Bulan</option>
                  <option value="3" data-type="month">3 Bulan</option>
                  <option value="6" data-type="month">6 Bulan</option>
                  <option value="12" data-type="year">1 Tahun</option>
                </select>
              </div>

              <div class="booking-calculator">
                <div class="calc-row">
                  <span>Biaya Sewa Pokok</span>
                  <span id="calc-base-price">Rp 0</span>
                </div>
                <div class="calc-row">
                  <span>Biaya Layanan</span>
                  <span>Rp 10.000</span>
                </div>
                <div class="calc-row total">
                  <span>Estimasi Total</span>
                  <span id="calc-total-price">Rp 0</span>
                </div>
              </div>

              <div class="booking-actions">
                <button type="submit" class="btn btn-primary btn-full">Ajukan Sewa</button>
                <button type="button" class="btn btn-outline btn-full" id="btn-chat-owner">Tanya Pemilik (Chat)</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  `;

  // Dynamic calculator helper
  const calcBasePrice = document.getElementById('calc-base-price');
  const calcTotalPrice = document.getElementById('calc-total-price');
  const durationSelect = document.getElementById('booking-duration');

  const updateDetailedInvoiceCost = () => {
    const duration = parseInt(durationSelect.value);
    const selectedOpt = durationSelect.options[durationSelect.selectedIndex];
    const unitType = selectedOpt.dataset.type;

    let base = 0;
    if (unitType === 'month') {
      base = kost.priceMonth * duration;
    } else {
      base = kost.priceYear;
    }

    calcBasePrice.textContent = formatIDR(base);
    calcTotalPrice.textContent = formatIDR(base + 10000);
  };

  durationSelect.addEventListener('change', updateDetailedInvoiceCost);
  updateDetailedInvoiceCost(); // run initially

  // Rent Submission Logic
  document.getElementById('form-booking-calculator').addEventListener('submit', (e) => {
    e.preventDefault();
    const user = getCurrentUser();
    if (!user) {
      showToast('Silakan masuk/login terlebih dahulu untuk menyewa.', 'error');
      openAuthModal('login');
      return;
    }

    if (user.role !== 'renter') {
      showToast('Hanya akun Pencari Kost yang dapat mengajukan sewa.', 'error');
      return;
    }

    // Launch Booking Payment Modal
    const startDate = document.getElementById('booking-start-date').value;
    const duration = parseInt(durationSelect.value);
    const selectedOpt = durationSelect.options[durationSelect.selectedIndex];
    const unitType = selectedOpt.dataset.type;
    
    let base = unitType === 'month' ? kost.priceMonth * duration : kost.priceYear;

    document.getElementById('booking-modal-kost-title').textContent = kost.name;
    document.getElementById('booking-modal-kost-loc').textContent = `📍 ${kost.address}, ${kost.city}`;
    document.getElementById('booking-modal-start').textContent = startDate;
    document.getElementById('booking-modal-duration').textContent = durationSelect.options[durationSelect.selectedIndex].text;
    
    document.getElementById('booking-modal-calc-price').textContent = formatIDR(base);
    document.getElementById('booking-modal-calc-total').textContent = formatIDR(base + 10000);

    // Save calculations transiently on the app state
    AppState.bookingSubmission = {
      propertyId: kost.id,
      propertyName: kost.name,
      price: unitType === 'month' ? kost.priceMonth : kost.priceYear / 12,
      duration: duration,
      totalPrice: base + 10000,
      startDate: startDate
    };

    openModal('booking-modal');
  });

  // Chat direct trigger
  document.getElementById('btn-chat-owner').addEventListener('click', () => {
    const user = getCurrentUser();
    if (!user) {
      showToast('Silakan login terlebih dahulu untuk chat.', 'error');
      openAuthModal('login');
      return;
    }

    // Redirect to chat screen and open/select property channel
    openOrCreateChatChannel(kost);
  });
}

// Open or create a chat channel with Owner of property
function openOrCreateChatChannel(kost) {
  const user = getCurrentUser();
  const chats = getDbTable('chats');
  
  // Find if chat exists
  let existing = chats.find(c => c.renterId === user.id && c.propertyId === kost.id);

  if (!existing) {
    // Make new channel
    const owners = getDbTable('users');
    const owner = owners.find(u => u.id === kost.ownerId) || { name: 'Pemilik Kost' };
    
    const newChannel = {
      id: generateId(),
      renterId: user.id,
      ownerId: kost.ownerId,
      ownerName: `${owner.name} (Pemilik)`,
      propertyName: kost.name,
      propertyId: kost.id,
      messages: [
        { sender: kost.ownerId, text: `Halo! Terima kasih tertarik dengan ${kost.name}. Ada yang bisa saya bantu?`, time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }
      ]
    };

    chats.unshift(newChannel); // add to front
    saveDbTable('chats', chats);
    AppState.activeChatId = newChannel.id;
  } else {
    AppState.activeChatId = existing.id;
  }

  window.location.hash = '#/chat';
}

// --- CHAT WEB PAGE VIEW ---
function renderChat() {
  const appContent = document.getElementById('app-content');
  const user = getCurrentUser();
  const chats = getDbTable('chats');

  // Filter channels belonging to current renter or owner
  const userChannels = chats.filter(c => c.renterId === user.id || c.ownerId === user.id);

  const inboxHtml = userChannels.length === 0 ? `
    <div style="text-align:center; padding:40px 10px; color:var(--text-muted); font-size:13px;">Belum ada riwayat percakapan.</div>
  ` : userChannels.map(channel => {
    const isOwnerView = user.role === 'owner';
    const oppositeName = isOwnerView ? 'Pencari Kost' : channel.ownerName;
    const lastMsg = channel.messages[channel.messages.length - 1] || { text: 'Belum ada pesan', time: '' };
    const isActive = AppState.activeChatId === channel.id ? 'active' : '';

    return `
      <div class="chat-item ${isActive}" data-chat-id="${channel.id}">
        <div class="chat-avatar">${oppositeName.substring(0, 2).toUpperCase()}</div>
        <div class="chat-info">
          <div class="chat-title-row">
            <span class="chat-title">${channel.propertyName}</span>
            <span class="chat-time">${lastMsg.time}</span>
          </div>
          <div style="font-size: 11px; font-weight:600; color:var(--secondary); margin-bottom:2px;">${oppositeName}</div>
          <div class="chat-last-message">${lastMsg.text}</div>
        </div>
      </div>
    `;
  }).join('');

  // Active channel messaging screen
  const activeChannel = userChannels.find(c => c.id === AppState.activeChatId);
  let activeWindowHtml = '';

  if (activeChannel) {
    const isOwnerView = user.role === 'owner';
    const partnerName = isOwnerView ? 'Pencari Kost' : activeChannel.ownerName;
    
    activeWindowHtml = `
      <div class="chat-window">
        <div class="chat-header">
          <div class="chat-header-user">
            <div class="chat-avatar" style="width:36px; height:36px; font-size:12px;">${partnerName.substring(0,2).toUpperCase()}</div>
            <div>
              <div class="chat-header-title">${activeChannel.propertyName}</div>
              <div class="chat-header-status">${partnerName} • Online</div>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" id="chat-mobile-back" style="display:none;">Kembali</button>
        </div>
        <div class="chat-messages" id="chat-messages-container">
          ${activeChannel.messages.map(m => {
            const side = m.sender === user.id ? 'outgoing' : 'incoming';
            return `
              <div class="message-bubble ${side}">
                <div style="word-break: break-word;">${m.text}</div>
                <span class="message-time">${m.time}</span>
              </div>
            `;
          }).join('')}
        </div>
        <div class="chat-input-bar">
          <input type="text" id="chat-type-input" placeholder="Tulis pesan Anda...">
          <button class="btn btn-primary btn-sm" id="btn-chat-send" style="height:44px; padding:0 18px;">Kirim</button>
        </div>
      </div>
    `;
  } else {
    activeWindowHtml = `
      <div class="chat-window-placeholder">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <p style="font-weight:700; font-size:15px;">Mulai Percakapan</p>
        <p style="font-size:12px; margin-top:2px;">Pilih salah satu pesan masuk di sebelah kiri.</p>
      </div>
    `;
  }

  appContent.innerHTML = `
    <div class="chat-layout">
      <div class="chat-inbox-panel" id="chat-inbox-panel">
        <div class="chat-inbox-header">
          <h2>Pesan Masuk</h2>
          <div class="chat-search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" id="chat-search-owner-input" placeholder="Cari pemilik kos atau percakapan...">
          </div>
        </div>
        <div class="chat-list" id="chat-inbox-list">
          ${inboxHtml}
        </div>
      </div>
      <div class="chat-main-container" id="chat-main-container" style="height:100%;">
        ${activeWindowHtml}
      </div>
    </div>
  `;

  // Auto-scroll messages list
  const msgContainer = document.getElementById('chat-messages-container');
  if (msgContainer) {
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  // Hook chat selection triggers
  document.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', () => {
      AppState.activeChatId = item.dataset.chatId;
      renderChat();
      // Manage mobile view toggling
      if (window.innerWidth <= 992) {
        document.getElementById('chat-inbox-panel').style.display = 'none';
        const win = document.querySelector('.chat-window');
        if (win) {
          win.classList.add('active');
          document.getElementById('chat-mobile-back').style.display = 'block';
        }
      }
    });
  });

  // Mobile Back Button trigger
  const mobBack = document.getElementById('chat-mobile-back');
  if (mobBack) {
    mobBack.addEventListener('click', () => {
      document.getElementById('chat-inbox-panel').style.display = 'flex';
      const win = document.querySelector('.chat-window');
      if (win) win.classList.remove('active');
    });
  }

  // Messaging inputs
  const chatInput = document.getElementById('chat-type-input');
  const chatSendBtn = document.getElementById('btn-chat-send');

  const executeSendMessage = () => {
    if (!chatInput) return;
    const txt = chatInput.value.trim();
    if (!txt) return;

    const dbChats = getDbTable('chats');
    const match = dbChats.find(c => c.id === AppState.activeChatId);

    if (match) {
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      match.messages.push({
        sender: user.id,
        text: txt,
        time: timeStr
      });

      saveDbTable('chats', dbChats);
      chatInput.value = '';
      
      // Instantly re-render
      renderChat();

      // Trigger automatic simulated owner reply after 1.5 seconds to showcase "live" inter-action
      setTimeout(() => {
        const refreshedChats = getDbTable('chats');
        const refreshedMatch = refreshedChats.find(c => c.id === AppState.activeChatId);
        
        if (refreshedMatch) {
          let botReplyText = "Baik dek, silakan diajukan sewanya melalui halaman detail kost terlebih dahulu ya.";
          
          if (txt.toLowerCase().includes('harga') || txt.toLowerCase().includes('diskon')) {
            botReplyText = "Harga pas sesuai rincian ya dek. Untuk sewa 1 tahun ada potongan khusus yang tertera.";
          } else if (txt.toLowerCase().includes('ready') || txt.toLowerCase().includes('kosong')) {
            botReplyText = "Kamar masih ready ya dek! Silakan isi formulir sewa agar kamarnya bisa langsung diproses.";
          } else if (txt.toLowerCase().includes('fasilitas') || txt.toLowerCase().includes('wifi')) {
            botReplyText = "Fasilitas lengkap sesuai deskripsi properti ya dek, wifi juga kencang untuk ngerjain tugas.";
          }

          refreshedMatch.messages.push({
            sender: match.ownerId,
            text: botReplyText,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          });

          saveDbTable('chats', refreshedChats);
          
          // Re-render chat only if the user is still on the chat page and on this channel
          if (window.location.hash === '#/chat' && AppState.activeChatId === refreshedMatch.id) {
            renderChat();
            showToast('Pesan balasan baru dari pemilik kost!', 'info');
          } else {
            updateChatBadgeCount();
          }
        }
      }, 1500);
    }
  };

  if (chatSendBtn) {
    chatSendBtn.addEventListener('click', executeSendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') executeSendMessage();
    });
  }
}

// --- RENTER PORTAL / DASHBOARD ---
function renderRenterDashboard() {
  const appContent = document.getElementById('app-content');
  const user = getCurrentUser();
  const bookings = getDbTable('bookings').filter(b => b.renterId === user.id);

  const statusLabel = {
    pending: '<span class="status-badge pending">Menunggu Persetujuan</span>',
    active: '<span class="status-badge active">Aktif</span>',
    rejected: '<span class="status-badge rejected">Ditolak</span>',
    finished: '<span class="status-badge finished">Selesai</span>'
  };

  const bookingRows = bookings.length === 0 ? `
    <tr><td colspan="6" style="text-align:center; padding:40px; color:var(--text-muted);">Belum ada riwayat pengajuan sewa kost.</td></tr>
  ` : bookings.map((b, idx) => `
    <tr>
      <td>${idx + 1}</td>
      <td><strong>${b.propertyName}</strong></td>
      <td>${b.startDate}</td>
      <td>${b.duration} Bulan</td>
      <td><strong>${formatIDR(b.totalPrice)}</strong></td>
      <td>${statusLabel[b.status]}</td>
    </tr>
  `).join('');

  appContent.innerHTML = `
    <div class="container dashboard-layout">
      <div class="dashboard-title-row">
        <div>
          <h1>Riwayat Sewa Saya</h1>
          <p style="color:var(--text-muted); font-size:14px; margin-top:2px;">Kelola pesanan dan invoice sewa kost Anda</p>
        </div>
        <a href="#/search" class="btn btn-primary">Cari Kost Baru</a>
      </div>

      <div class="dashboard-block">
        <div class="dashboard-block-header">
          <h2>Daftar Sewa & Pengajuan</h2>
        </div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Kost</th>
                <th>Mulai Sewa</th>
                <th>Durasi</th>
                <th>Total Bayar</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${bookingRows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// --- OWNER PORTAL / DASHBOARD ---
function renderOwnerDashboard() {
  const appContent = document.getElementById('app-content');
  const user = getCurrentUser();

  const allProperties = getDbTable('properties');
  const ownerProps = allProperties.filter(p => p.ownerId === user.id);

  const bookings = getDbTable('bookings');
  const ownerBookings = bookings.filter(b => {
    const prop = allProperties.find(p => p.id === b.propertyId);
    return prop && prop.ownerId === user.id;
  });

  // Calculate quick stats
  const totalListed = ownerProps.length;
  const pendingRequests = ownerBookings.filter(b => b.status === 'pending').length;
  const activeRenters = ownerBookings.filter(b => b.status === 'active').length;
  const totalRevenue = ownerBookings
    .filter(b => b.status === 'active' || b.status === 'finished')
    .reduce((sum, b) => sum + (b.totalPrice - 10000), 0); // subtract service fee

  const statusLabel = {
    pending: '<span class="status-badge pending">Menunggu</span>',
    active: '<span class="status-badge active">Disetujui (Aktif)</span>',
    rejected: '<span class="status-badge rejected">Ditolak</span>',
    finished: '<span class="status-badge finished">Selesai</span>'
  };

  const bookingRequestRows = ownerBookings.length === 0 ? `
    <tr><td colspan="7" style="text-align:center; padding:30px; color:var(--text-muted);">Belum ada pengajuan sewa masuk.</td></tr>
  ` : ownerBookings.map((b, idx) => {
    const actionBtns = b.status === 'pending' ? `
      <div style="display:flex; gap:6px;">
        <button class="btn btn-primary btn-sm btn-approve-booking" data-id="${b.id}" style="padding:4px 10px; height:30px; font-size:11px; background-color:var(--success);">Setujui</button>
        <button class="btn btn-danger btn-sm btn-reject-booking" data-id="${b.id}" style="padding:4px 10px; height:30px; font-size:11px;">Tolak</button>
      </div>
    ` : '-';

    return `
      <tr>
        <td>${idx + 1}</td>
        <td><strong>${b.renterName}</strong></td>
        <td>${b.propertyName}</td>
        <td>${b.startDate}</td>
        <td>${b.duration} Bulan</td>
        <td>${statusLabel[b.status]}</td>
        <td>${actionBtns}</td>
      </tr>
    `;
  }).join('');

  const propertyCards = ownerProps.length === 0 ? `
    <div style="text-align:center; padding:40px; color:var(--text-muted); border:1px dashed var(--border); border-radius:var(--radius-sm);">
      Belum mendaftarkan properti kost. Mulai dengan klik tombol "Tambah Kost".
    </div>
  ` : ownerProps.map(p => `
    <div class="owner-prop-card">
      <img class="owner-prop-img" src="${p.images[0]}" alt="${p.name}">
      <div class="owner-prop-info">
        <h4 class="owner-prop-title">${p.name}</h4>
        <div class="owner-prop-meta">
          Kota: ${p.city} • Tipe: ${p.gender.toUpperCase()} • Harga: ${formatIDR(p.priceMonth)} / bulan
          ${p.status === 'pending' ? ' • <span style="color:var(--warning); font-weight:700;">Menunggu Review Admin</span>' : ''}
        </div>
      </div>
      <div class="owner-prop-actions">
        <button class="btn btn-secondary btn-sm btn-edit-kost" data-id="${p.id}">Edit</button>
        <button class="btn btn-danger btn-sm btn-delete-kost" style="padding:8px;" data-id="${p.id}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  `).join('');

  appContent.innerHTML = `
    <div class="container dashboard-layout">
      <div class="dashboard-title-row">
        <div>
          <h1>Dashboard Kelola Kost</h1>
          <p style="color:var(--text-muted); font-size:14px; margin-top:2px;">Pantau performa bisnis dan pengelolaan penyewa Anda</p>
        </div>
        <button class="btn btn-primary" id="btn-add-property-trigger">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
          <span>Tambah Kost</span>
        </button>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon properties">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">Total Kost</span>
            <span class="stat-val">${totalListed}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon pending">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">Pengajuan Pending</span>
            <span class="stat-val">${pendingRequests}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">Penyewa Aktif</span>
            <span class="stat-val">${activeRenters}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon revenue">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16V5" /></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">Total Pendapatan</span>
            <span class="stat-val">${formatIDR(totalRevenue)}</span>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 24px;">
        
        <!-- Left: Properties List -->
        <div class="dashboard-block" style="margin-bottom:0;">
          <div class="dashboard-block-header">
            <h2>Daftar Properti Kost</h2>
          </div>
          <div class="owner-prop-list">
            ${propertyCards}
          </div>
        </div>

        <!-- Right: Incoming Rental Applications -->
        <div class="dashboard-block" style="margin-bottom:0;">
          <div class="dashboard-block-header">
            <h2>Daftar Pengajuan Sewa (Masuk)</h2>
          </div>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Penyewa</th>
                  <th>Kost</th>
                  <th>Mulai</th>
                  <th>Durasi</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                ${bookingRequestRows}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  `;

  // Attach Owner Add Property trigger
  document.getElementById('btn-add-property-trigger').addEventListener('click', () => {
    openOwnerPropertyWizard();
  });

  // Attach booking approval/rejection listeners
  document.querySelectorAll('.btn-approve-booking').forEach(btn => {
    btn.addEventListener('click', () => {
      const bId = btn.dataset.id;
      updateBookingStatus(bId, 'active');
    });
  });

  document.querySelectorAll('.btn-reject-booking').forEach(btn => {
    btn.addEventListener('click', () => {
      const bId = btn.dataset.id;
      updateBookingStatus(bId, 'rejected');
    });
  });

  // Edit / Delete Property hooks
  document.querySelectorAll('.btn-delete-kost').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Apakah Anda yakin ingin menghapus kost ini?')) {
        deleteKost(btn.dataset.id);
      }
    });
  });

  document.querySelectorAll('.btn-edit-kost').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Fitur edit detail kost saat ini sedang dalam pengembangan.', 'info');
    });
  });
}

// Update rental application status
function updateBookingStatus(bookingId, status) {
  const bookings = getDbTable('bookings');
  const match = bookings.find(b => b.id === bookingId);
  
  if (match) {
    match.status = status;
    saveDbTable('bookings', bookings);
    
    if (status === 'active') {
      showToast('Pengajuan sewa kost disetujui!', 'success');
      
      // Auto-trigger a welcome message in chat between Owner and Renter
      const chats = getDbTable('chats');
      const prop = getDbTable('properties').find(p => p.id === match.propertyId);
      
      let chatChannel = chats.find(c => c.renterId === match.renterId && c.propertyId === match.propertyId);
      
      if (!chatChannel) {
        chatChannel = {
          id: generateId(),
          renterId: match.renterId,
          ownerId: prop.ownerId,
          ownerName: `${getCurrentUser().name} (Pemilik)`,
          propertyName: prop.name,
          propertyId: prop.id,
          messages: []
        };
        chats.unshift(chatChannel);
      }

      chatChannel.messages.push({
        sender: prop.ownerId,
        text: `Selamat dek! Pengajuan sewa Anda untuk ${prop.name} telah saya setujui. Silakan persiapkan diri untuk check-in sesuai tanggal mulai (${match.startDate}). Hubungi saya jika butuh bantuan.`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      saveDbTable('chats', chats);
    } else {
      showToast('Pengajuan sewa kost ditolak.', 'error');
    }
    
    renderOwnerDashboard();
  }
}

// Delete Property item
function deleteKost(propId) {
  let props = getDbTable('properties');
  props = props.filter(p => p.id !== propId);
  saveDbTable('properties', props);
  
  showToast('Properti kost berhasil dihapus.', 'success');
  renderOwnerDashboard();
}

// ==========================================
// 5. MODAL & WIZARD ACTIONS CONTROLLER
// ==========================================

// Close all overlay panels
function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(modal => modal.classList.remove('show'));
}

// Open modal wrapper
function openModal(id) {
  closeAllModals();
  const m = document.getElementById(id);
  if (m) m.classList.add('show');
}

// Auth modal specific launcher
function openAuthModal(viewType = 'login') {
  const loginView = document.getElementById('auth-view-login');
  const regView = document.getElementById('auth-view-register');
  const otpView = document.getElementById('auth-view-otp');
  const successView = document.getElementById('auth-view-success');

  loginView.style.display = 'none';
  regView.style.display = 'none';
  otpView.style.display = 'none';
  successView.style.display = 'none';

  const title = document.getElementById('auth-title');
  const subtitle = document.getElementById('auth-subtitle');

  if (viewType === 'login') {
    title.textContent = 'Welcome Back!';
    subtitle.textContent = 'Sign in to continue to LiveInn';
    loginView.style.display = 'block';
  } else if (viewType === 'register') {
    title.textContent = 'Bonjour!';
    subtitle.textContent = 'Create a new account to find your room';
    regView.style.display = 'block';
  } else if (viewType === 'otp') {
    title.textContent = 'Verify Your Email';
    subtitle.textContent = 'Enter the 5-digit verification code sent to your email';
    otpView.style.display = 'block';
  } else if (viewType === 'success') {
    title.textContent = '';
    subtitle.textContent = '';
    successView.style.display = 'block';
  }

  openModal('auth-modal');
}

// Multi-step Owner wizard property builder launcher
function openOwnerPropertyWizard() {
  AppState.activeWizardStep = 1;
  AppState.wizardData = {
    facilities: [],
    images: [],
    ktpImage: ''
  };

  // Reset forms
  document.getElementById('wizard-form-1').reset();
  document.getElementById('wizard-form-2').reset();
  document.getElementById('wizard-form-3').reset();

  document.getElementById('ktp-preview-container').innerHTML = '';
  document.getElementById('kost-preview-container').innerHTML = '';
  
  const mapPicker = document.getElementById('wizard-map-picker');
  mapPicker.classList.remove('selected');
  document.getElementById('wizard-latlong').value = '';

  updateWizardUI();
  openModal('wizard-modal');
}

function updateWizardUI() {
  // Hide all steps
  document.querySelectorAll('.wizard-content-step').forEach(c => c.classList.remove('active'));
  // Show active step
  document.getElementById(`wizard-step-content-${AppState.activeWizardStep}`).classList.add('active');

  // Update nodes indicator
  document.querySelectorAll('.wizard-step-node').forEach((node, idx) => {
    const stepNum = idx + 1;
    node.className = 'wizard-step-node';
    
    if (stepNum === AppState.activeWizardStep) {
      node.classList.add('active');
    } else if (stepNum < AppState.activeWizardStep) {
      node.classList.add('completed');
    }
  });

  // Update horizontal indicator bar percentage
  const bar = document.getElementById('wizard-bar');
  const percentage = ((AppState.activeWizardStep - 1) / 3) * 100;
  bar.style.width = `${percentage}%`;
}

// Convert files to base64 for persistent localStorage demonstration
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// ==========================================
// 6. INITIALIZATION & EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initDb();
  updateNavbarState();
  handleRoute();
  
  // Listen for hash changes
  window.addEventListener('hashchange', handleRoute);

  // General click outside/close modal handlers
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAllModals();
      }
    });
  });

  // Close buttons hooks
  const closeBtns = ['auth-close-btn', 'booking-close-btn', 'receipt-close-btn', 'wizard-close-btn'];
  closeBtns.forEach(id => {
    const b = document.getElementById(id);
    if (b) b.addEventListener('click', closeAllModals);
  });

  // Open Auth modal buttons
  document.getElementById('btn-login-trigger').addEventListener('click', () => openAuthModal('login'));
  document.getElementById('btn-register-trigger').addEventListener('click', () => openAuthModal('register'));
  
  document.getElementById('link-to-register').addEventListener('click', () => openAuthModal('register'));
  document.getElementById('link-to-login').addEventListener('click', () => openAuthModal('login'));

  // Role SWITCHER Pill toggle
  document.getElementById('btn-role-renter').addEventListener('click', () => {
    const user = getCurrentUser();
    if (user && user.role !== 'renter') {
      user.role = 'renter';
      setCurrentUser(user);
      window.location.hash = '#/';
      showToast('Beralih peran sebagai Pencari Kost', 'info');
    }
  });

  document.getElementById('btn-role-owner').addEventListener('click', () => {
    const user = getCurrentUser();
    if (user && user.role !== 'owner') {
      user.role = 'owner';
      setCurrentUser(user);
      window.location.hash = '#/owner';
      showToast('Beralih peran sebagai Pemilik Kost', 'info');
    }
  });

  // Logout trigger
  document.getElementById('btn-logout').addEventListener('click', () => {
    setCurrentUser(null);
    window.location.hash = '#/';
    showToast('Berhasil keluar akun.', 'success');
  });

  // Forms Submissions Handlers

  // 1. Login Form Submit
  document.getElementById('form-login').addEventListener('submit', (e) => {
    e.preventDefault();
    const mailVal = document.getElementById('login-email').value.trim();
    const passVal = document.getElementById('login-password').value;

    const users = getDbTable('users');
    const match = users.find(u => (u.email === mailVal || u.name === mailVal) && u.password === passVal);

    if (match) {
      setCurrentUser(match);
      closeAllModals();
      showToast(`Selamat datang kembali, ${match.name}!`, 'success');
      
      // Auto direct based on role
      if (match.role === 'owner') {
        window.location.hash = '#/owner';
      } else {
        window.location.hash = '#/';
      }
    } else {
      showToast('Email atau password salah!', 'error');
    }
  });

  // OAuth dummy logins
  const dummyOAuthLogin = (type) => {
    const user = getDbTable('users')[type === 'google' ? 1 : 0]; // Renter for Google, Owner for Apple
    setCurrentUser(user);
    closeAllModals();
    showToast(`Berhasil masuk menggunakan ${type === 'google' ? 'Google' : 'Apple ID'}.`, 'success');
    if (user.role === 'owner') {
      window.location.hash = '#/owner';
    } else {
      window.location.hash = '#/';
    }
  };

  document.getElementById('auth-oauth-google').addEventListener('click', () => dummyOAuthLogin('google'));
  document.getElementById('auth-oauth-apple').addEventListener('click', () => dummyOAuthLogin('apple'));

  // 2. Register Form Submit
  document.getElementById('form-register').addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = document.getElementById('reg-name').value.trim();
    const mailVal = document.getElementById('reg-email').value.trim();
    const roleVal = document.getElementById('reg-role').value;
    const passVal = document.getElementById('reg-password').value;

    const users = getDbTable('users');
    if (users.some(u => u.email === mailVal)) {
      showToast('Email sudah terdaftar!', 'error');
      return;
    }

    // Capture values into transient registration model
    AppState.registrationForm = {
      id: generateId(),
      email: mailVal,
      password: passVal,
      name: nameVal,
      role: roleVal,
      avatar: nameVal.substring(0,2).toUpperCase()
    };

    // Transition to OTP verification panel as shown in Figma flow
    openAuthModal('otp');
  });

  // 3. OTP verification Submit
  document.getElementById('form-otp').addEventListener('submit', (e) => {
    e.preventDefault();
    // Validate OTP inputs (just verify any input to succeed dummy workflow)
    const inputs = document.querySelectorAll('.otp-input');
    const otpCode = Array.from(inputs).map(i => i.value).join('');

    if (otpCode.length < 5) {
      showToast('Silakan masukkan 5 digit kode OTP lengkap.', 'error');
      return;
    }

    // Add to Database Table
    const users = getDbTable('users');
    users.push(AppState.registrationForm);
    saveDbTable('users', users);

    // Save active user session
    setCurrentUser(AppState.registrationForm);

    // Transition to successful registration alert
    openAuthModal('success');
  });

  // Resend OTP trigger
  document.getElementById('btn-resend-otp').addEventListener('click', () => {
    showToast('Kode OTP baru telah dikirim ke email Anda.', 'success');
  });

  // OTP inputs autofocus cursor advance listener
  const otpInputs = document.querySelectorAll('.otp-input');
  otpInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
      if (input.value && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !input.value && index > 0) {
        otpInputs[index - 1].focus();
      }
    });
  });

  // Finish register success screen button
  document.getElementById('btn-success-finish').addEventListener('click', () => {
    closeAllModals();
    if (getCurrentUser().role === 'owner') {
      window.location.hash = '#/owner';
    } else {
      window.location.hash = '#/';
    }
  });

  // 4. Booking Final Checkout Payment Form Submit
  document.getElementById('form-booking-submit').addEventListener('submit', (e) => {
    e.preventDefault();
    const method = document.getElementById('booking-payment-method').value;
    const transientDetails = AppState.bookingSubmission;

    if (transientDetails) {
      const activeUser = getCurrentUser();
      
      const newBooking = {
        id: 'book_' + Math.random().toString(36).substr(2, 5),
        renterId: activeUser.id,
        renterName: activeUser.name,
        propertyId: transientDetails.propertyId,
        propertyName: transientDetails.propertyName,
        price: transientDetails.price,
        duration: transientDetails.duration,
        totalPrice: transientDetails.totalPrice,
        startDate: transientDetails.startDate,
        paymentMethod: method,
        status: 'pending',
        createdAt: new Date().toISOString().split('T')[0]
      };

      // Push to Database
      const bookings = getDbTable('bookings');
      bookings.push(newBooking);
      saveDbTable('bookings', bookings);

      // Launch successful payment receipt overlay as designed in Figma screens
      document.getElementById('receipt-id').textContent = `TX-${newBooking.id.toUpperCase()}`;
      document.getElementById('receipt-kost').textContent = newBooking.propertyName;
      document.getElementById('receipt-total').textContent = formatIDR(newBooking.totalPrice);

      openModal('receipt-modal');
      
      // Clear calculations
      delete AppState.bookingSubmission;
    }
  });

  // Receipt Modal Close Button redirects to Renter Dashboard to monitor status
  document.getElementById('btn-receipt-finish').addEventListener('click', () => {
    closeAllModals();
    window.location.hash = '#/renter';
  });

  // 5. Wizard Step 1: basic details submit
  document.getElementById('wizard-form-1').addEventListener('submit', (e) => {
    e.preventDefault();
    AppState.wizardData.name = document.getElementById('wizard-name').value.trim();
    AppState.wizardData.gender = document.getElementById('wizard-gender').value;
    AppState.wizardData.size = document.getElementById('wizard-size').value;
    AppState.wizardData.priceMonth = parseInt(document.getElementById('wizard-price-month').value);
    AppState.wizardData.priceYear = parseInt(document.getElementById('wizard-price-year').value);
    AppState.wizardData.description = document.getElementById('wizard-desc').value.trim() || 'Kost bersih nyaman terjangkau.';

    // Gather active checkboxes
    const checkeds = [];
    document.querySelectorAll('input[name="wizard-facilities"]:checked').forEach(c => checkeds.push(c.value));
    AppState.wizardData.facilities = checkeds;

    // Proceed to Step 2
    AppState.activeWizardStep = 2;
    updateWizardUI();
  });

  // Wizard Step 2 back button trigger
  document.getElementById('wizard-back-2').addEventListener('click', () => {
    AppState.activeWizardStep = 1;
    updateWizardUI();
  });

  // Map coordinate clicks selector simulation
  const pickerMap = document.getElementById('wizard-map-picker');
  pickerMap.addEventListener('click', (e) => {
    pickerMap.classList.add('selected');
    
    // Simulate randomized coordinates matching Yogyakarta/Jakarta vicinity
    const lat = (-7.7 - Math.random() * 0.1).toFixed(4);
    const lng = (110.3 + Math.random() * 0.1).toFixed(4);
    
    document.getElementById('wizard-latlong').value = `${lat}, ${lng}`;
    showToast('Titik koordinat berhasil dikunci pada peta.', 'success');
  });

  // Wizard Step 2: Location form Submit
  document.getElementById('wizard-form-2').addEventListener('submit', (e) => {
    e.preventDefault();
    const latlong = document.getElementById('wizard-latlong').value;
    if (!latlong) {
      showToast('Silakan pilih lokasi koordinat pada peta terlebih dahulu.', 'error');
      return;
    }

    AppState.wizardData.city = document.getElementById('wizard-city').value;
    AppState.wizardData.address = document.getElementById('wizard-address').value.trim();
    AppState.wizardData.latlong = latlong;

    // Proceed to Step 3
    AppState.activeWizardStep = 3;
    updateWizardUI();
  });

  // Wizard Step 3 back button trigger
  document.getElementById('wizard-back-3').addEventListener('click', () => {
    AppState.activeWizardStep = 2;
    updateWizardUI();
  });

  // KTP Upload triggering slot
  const uploadKtpBox = document.getElementById('upload-ktp-box');
  const ktpFileInput = document.getElementById('wizard-ktp-file');
  const ktpPreview = document.getElementById('ktp-preview-container');

  uploadKtpBox.addEventListener('click', () => ktpFileInput.click());
  
  ktpFileInput.addEventListener('change', async () => {
    if (ktpFileInput.files && ktpFileInput.files[0]) {
      const file = ktpFileInput.files[0];
      try {
        const base64 = await fileToBase64(file);
        AppState.wizardData.ktpImage = base64;
        
        ktpPreview.innerHTML = `
          <img class="upload-preview-item" src="${base64}" alt="KTP Preview">
        `;
        showToast('KTP berhasil diunggah.', 'success');
      } catch (err) {
        showToast('Gagal memproses file KTP.', 'error');
      }
    }
  });

  // Property photos trigger uploads slot
  const uploadKostBox = document.getElementById('upload-kost-box');
  const kostFileInput = document.getElementById('wizard-kost-file');
  const kostPreview = document.getElementById('kost-preview-container');

  uploadKostBox.addEventListener('click', () => kostFileInput.click());

  kostFileInput.addEventListener('change', async () => {
    if (kostFileInput.files && kostFileInput.files.length > 0) {
      kostPreview.innerHTML = ''; // reset preview
      AppState.wizardData.images = [];

      for (let i = 0; i < Math.min(kostFileInput.files.length, 3); i++) {
        const file = kostFileInput.files[i];
        try {
          const base64 = await fileToBase64(file);
          AppState.wizardData.images.push(base64);
          
          kostPreview.innerHTML += `
            <img class="upload-preview-item" src="${base64}" alt="Kost Preview ${i+1}">
          `;
        } catch (err) {
          console.error(err);
        }
      }
      showToast(`${AppState.wizardData.images.length} Foto Kost berhasil dimuat.`, 'success');
    }
  });

  // Wizard Step 3 Final Form Submit (Creation)
  document.getElementById('wizard-form-3').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (AppState.wizardData.images.length === 0) {
      // Fallback dummy image if no file was loaded
      AppState.wizardData.images.push('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80');
    }

    // Setup property object model
    const newProperty = {
      id: 'prop_' + Math.random().toString(36).substr(2, 5),
      name: AppState.wizardData.name,
      gender: AppState.wizardData.gender,
      size: AppState.wizardData.size,
      priceMonth: AppState.wizardData.priceMonth,
      priceYear: AppState.wizardData.priceYear,
      city: AppState.wizardData.city,
      address: AppState.wizardData.address,
      latlong: AppState.wizardData.latlong,
      description: AppState.wizardData.description,
      facilities: AppState.wizardData.facilities.length > 0 ? AppState.wizardData.facilities : ['Wifi', 'Kasur'],
      images: AppState.wizardData.images,
      ownerId: getCurrentUser().id,
      status: 'pending' // waits for admin approval notification simulation
    };

    // Push to DB
    const properties = getDbTable('properties');
    properties.unshift(newProperty);
    saveDbTable('properties', properties);

    // Show step 4: Success confirmation screen
    AppState.activeWizardStep = 4;
    updateWizardUI();

    // In background, simulate Admin auto-approving the property after 5 seconds so they can search it!
    setTimeout(() => {
      const refreshedProps = getDbTable('properties');
      const propToApprove = refreshedProps.find(p => p.id === newProperty.id);
      if (propToApprove) {
        propToApprove.status = 'active';
        saveDbTable('properties', refreshedProps);
        
        // Show background notification
        showToast(`Kost "${newProperty.name}" telah disetujui oleh admin dan kini aktif!`, 'success');
        
        // If they are on Owner dashboard, refresh to update status text
        if (window.location.hash === '#/owner') {
          renderOwnerDashboard();
        }
      }
    }, 6000);
  });

  // Finish wizard success screen button
  document.getElementById('wizard-success-finish').addEventListener('click', () => {
    closeAllModals();
    renderOwnerDashboard();
  });
});
