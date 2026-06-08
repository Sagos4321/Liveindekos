(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function p(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=p(t);fetch(t.href,s)}})();function b(a){return new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",minimumFractionDigits:0,maximumFractionDigits:0}).format(a)}function D(){return"id_"+Math.random().toString(36).substr(2,9)}function h(a,i="success"){const p=document.getElementById("toast-container");if(!p)return;const e=document.createElement("div");e.className=`toast toast-${i}`;let t="";i==="success"?t='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>':i==="error"?t='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>':t='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',e.innerHTML=`
    <span class="toast-icon">${t}</span>
    <span class="toast-message">${a}</span>
  `,p.appendChild(e),setTimeout(()=>e.classList.add("show"),10),setTimeout(()=>{e.classList.remove("show"),setTimeout(()=>e.remove(),300)},3e3)}function T(a){return{Wifi:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.117 16.64a4 4 0 015.767 0M5.724 14.129a7.002 7.002 0 0112.552 0M3.243 11.24a11 11 0 0117.513 0M12 20h.01" /></svg>',AC:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',Kasur:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16H5V5zm0 9h14M5 17h14" /></svg>',Lemari:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v16h16V4H4zm6 0v16M4 10h16M10 8H8m6 0h-2" /></svg>',TV:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h18M3 16h18" /></svg>',"Kamar Mandi Dalam":'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 4h8M8 12h8" /></svg>',Kulkas:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2zm0 8h14M9 6h2m-2 8h2" /></svg>',"Dapur Bersama":'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>',"Parkir Motor":'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',"Parkir Mobil":'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>',"Penjaga Kost":'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>'}[a]||'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>'}const F=[{id:"owner_1",email:"owner@liveindekos.com",password:"password",name:"Budi Handoko",role:"owner",avatar:"BH"},{id:"renter_1",email:"renter@liveindekos.com",password:"password",name:"Rian Saputra",role:"renter",avatar:"RS"}],_=[{id:"prop_1",name:"Kos Tambora Tipe A Jatinangor",gender:"putra",size:"3x4",priceMonth:12e5,priceYear:13e6,city:"Bandung",address:"Jl. Tambora No. 24, Hegarmanah, Jatinangor",latlong:"-6.9272, 107.7709",description:"Kost putra strategis dekat dengan kampus UNPAD dan ITB Jatinangor. Lingkungan aman dengan keamanan 24 jam. Kamar mandi dalam dengan air bersih yang melimpah.",facilities:["Wifi","Kasur","Lemari","Kamar Mandi Dalam","Parkir Motor","Penjaga Kost"],images:["https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80"],ownerId:"owner_1",status:"active"},{id:"prop_2",name:"Kos Harmoni Asri Yogyakarta",gender:"putri",size:"4x4",priceMonth:15e5,priceYear:165e5,city:"Yogyakarta",address:"Gg. Harmoni No. 12, Caturtunggal, Depok, Sleman",latlong:"-7.7793, 110.3876",description:"Kost khusus putri eksklusif, dekat UGM dan UNY. Kamar luas, full furnished, ada AC dan pemanas air di kamar mandi. Lengkap dengan dapur bersama.",facilities:["Wifi","AC","Kasur","Lemari","TV","Kamar Mandi Dalam","Kulkas","Dapur Bersama","Parkir Mobil","Parkir Motor"],images:["https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"],ownerId:"owner_1",status:"active"},{id:"prop_3",name:"Kos Pejanggik Condongcatur",gender:"campur",size:"3.5x4",priceMonth:18e5,priceYear:2e7,city:"Yogyakarta",address:"Jl. Pejanggik No. 8, Condongcatur, Sleman",latlong:"-7.7554, 110.4022",description:"Kost campur eksklusif, dekat dengan UPN Veteran dan AMIKOM. Fasilitas modern dengan sirkulasi udara baik. Dilengkapi ruang santai bersama.",facilities:["Wifi","AC","Kasur","Lemari","Kamar Mandi Dalam","Dapur Bersama","Parkir Motor"],images:["https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"],ownerId:"owner_1",status:"active"},{id:"prop_4",name:"Kos Ping Gomong Bandung",gender:"putri",size:"3x3",priceMonth:95e4,priceYear:1e7,city:"Bandung",address:"Gg. Ping Gomong III No. 42, Coblong, Dago",latlong:"-6.8841, 107.6135",description:"Kost putri ekonomis namun nyaman di kawasan Dago Bandung. Dekat kampus ITB dan UNPAD Dipatiukur. Suasana tenang dan sejuk khas Bandung.",facilities:["Wifi","Kasur","Lemari","Kulkas","Dapur Bersama","Parkir Motor"],images:["https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80"],ownerId:"owner_1",status:"active"},{id:"prop_5",name:"Kos Onel Tipe A Tebet",gender:"campur",size:"4x5",priceMonth:25e5,priceYear:28e6,city:"Jakarta",address:"Jl. Tebet Barat Dalam Raya No. 102, Jakarta Selatan",latlong:"-6.2372, 106.8488",description:"Kost campur eksklusif premium di pusat Tebet. Desain minimalis modern, parkir luas, free cleaning kamar setiap minggu. Dekat stasiun Tebet dan pusat kuliner.",facilities:["Wifi","AC","Kasur","Lemari","TV","Kamar Mandi Dalam","Kulkas","Dapur Bersama","Parkir Mobil","Parkir Motor","Penjaga Kost"],images:["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"],ownerId:"owner_1",status:"active"},{id:"prop_6",name:"Kos Putri Muslim Lowokwaru",gender:"putri",size:"3x3",priceMonth:85e4,priceYear:9e6,city:"Malang",address:"Jl. Lowokwaru Indah No. 5, Malang",latlong:"-7.9427, 112.6174",description:"Kost khusus putri muslimah yang aman dan tenang. Sangat dekat dengan Universitas Brawijaya dan UIN Malang. Dikelola langsung oleh keluarga penjaga kost.",facilities:["Wifi","Kasur","Lemari","Dapur Bersama","Parkir Motor","Penjaga Kost"],images:["https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&w=800&q=80"],ownerId:"owner_2",status:"active"}],O=[{id:"book_1",renterId:"renter_1",renterName:"Rian Saputra",propertyId:"prop_1",propertyName:"Kos Tambora Tipe A Jatinangor",price:12e5,duration:3,totalPrice:361e4,startDate:"2026-07-01",paymentMethod:"bank_transfer",status:"pending",createdAt:"2026-06-07"}],R=[{id:"chat_1",renterId:"renter_1",ownerId:"owner_1",ownerName:"Budi Handoko (Pemilik)",propertyName:"Kos Tambora Tipe A Jatinangor",propertyId:"prop_1",messages:[{sender:"renter_1",text:"Hallo, selamat pagi ibu...",time:"09.30"},{sender:"owner_1",text:"Pagi mbaa.. Ada yang bisa saya bantu terkait kost Tambora?",time:"09.37"}]},{id:"chat_2",renterId:"renter_1",ownerId:"owner_1",ownerName:"Budi Handoko (Pemilik)",propertyName:"Kos Harmoni Asri Yogyakarta",propertyId:"prop_2",messages:[{sender:"renter_1",text:"Halo, apakah kamar kost putri Harmoni masih ready?",time:"Yesterday"},{sender:"owner_1",text:"Pagi dek.. kamarnya masih ready ya. Sisa 1 kamar kosong di lantai 2.",time:"Yesterday"}]}];function q(){localStorage.getItem("liveindekos_users")||localStorage.setItem("liveindekos_users",JSON.stringify(F)),localStorage.getItem("liveindekos_properties")||localStorage.setItem("liveindekos_properties",JSON.stringify(_)),localStorage.getItem("liveindekos_bookings")||localStorage.setItem("liveindekos_bookings",JSON.stringify(O)),localStorage.getItem("liveindekos_chats")||localStorage.setItem("liveindekos_chats",JSON.stringify(R))}function v(a){return JSON.parse(localStorage.getItem(`liveindekos_${a}`))}function I(a,i){localStorage.setItem(`liveindekos_${a}`,JSON.stringify(i))}function w(){const a=sessionStorage.getItem("liveindekos_session");return a?JSON.parse(a):null}function L(a){a?sessionStorage.setItem("liveindekos_session",JSON.stringify(a)):sessionStorage.removeItem("liveindekos_session"),A()}const n={currentFilter:{city:"",gender:"",priceMax:"",facilities:[]},activeChatId:null,activeWizardStep:1,wizardData:{}};function P(){const a=window.location.hash||"#/";if(B(),document.querySelectorAll(".nav-link").forEach(i=>i.classList.remove("active")),a==="#/"||a==="")document.getElementById("nav-home").classList.add("active"),V();else if(a.startsWith("#/search")){document.getElementById("nav-search").classList.add("active");const i=new URLSearchParams(a.split("?")[1]||"");n.currentFilter.gender=i.get("type")||"",n.currentFilter.city=i.get("city")||"",U()}else if(a.startsWith("#/kost/")){const i=a.split("#/kost/")[1];W(i)}else if(a==="#/chat"){if(!w()){h("Silakan masuk terlebih dahulu untuk mengakses Chat.","error"),window.location.hash="#/",x("login");return}document.getElementById("nav-chat").classList.add("active"),S()}else if(a==="#/renter"){const i=w();if(!i||i.role!=="renter"){window.location.hash="#/";return}document.getElementById("nav-renter-dash").classList.add("active"),J()}else if(a==="#/owner"){const i=w();if(!i||i.role!=="owner"){window.location.hash="#/";return}document.getElementById("nav-owner-dash").classList.add("active"),z()}else window.location.hash="#/"}function A(){const a=w(),i=document.getElementById("nav-auth-buttons"),p=document.getElementById("nav-user-profile"),e=document.getElementById("role-toggle-container"),t=document.getElementById("nav-chat"),s=document.getElementById("nav-renter-dash"),l=document.getElementById("nav-owner-dash"),m=document.getElementById("nav-avatar");a?(i.style.display="none",p.style.display="flex",m.textContent=a.avatar||a.name.substring(0,2).toUpperCase(),t.style.display="block",a.role==="renter"?(s.style.display="block",l.style.display="none",e.style.display="flex",document.getElementById("btn-role-renter").classList.add("active"),document.getElementById("btn-role-owner").classList.remove("active")):(s.style.display="none",l.style.display="block",e.style.display="flex",document.getElementById("btn-role-renter").classList.remove("active"),document.getElementById("btn-role-owner").classList.add("active")),H()):(i.style.display="flex",p.style.display="none",e.style.display="none",t.style.display="none",s.style.display="none",l.style.display="none")}function H(){const a=w();if(!a)return;const e=v("chats").filter(s=>s.renterId===a.id||s.ownerId===a.id).reduce((s,l)=>{const m=l.messages[l.messages.length-1];return m&&m.sender!==a.id?s+1:s},0),t=document.getElementById("nav-chat-badge");e>0?(t.textContent=e,t.style.display="inline-flex"):t.style.display="none"}function V(){const a=document.getElementById("app-content"),p=v("properties").filter(e=>e.status==="active").slice(0,3);a.innerHTML=`
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
          ${p.map(e=>N(e)).join("")}
        </div>
      </div>
    </section>
  `,document.getElementById("btn-home-search").addEventListener("click",()=>{const e=document.getElementById("home-search-city").value.trim(),t=document.getElementById("home-search-gender").value;window.location.hash=`#/search?city=${encodeURIComponent(e)}&type=${t}`}),document.querySelectorAll(".category-card").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.type;window.location.hash=`#/search?type=${t}`})})}function N(a){const i={putra:"Putra",putri:"Putri",campur:"Campur"},p=a.images&&a.images.length>0?a.images[0]:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80";return`
    <div class="kost-card" onclick="window.location.hash='#/kost/${a.id}'">
      <div class="kost-card-img-wrapper">
        <span class="badge-category ${a.gender}">${i[a.gender]}</span>
        <img class="kost-card-img" src="${p}" alt="${a.name}" onerror="this.src='https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80'">
      </div>
      <div class="kost-card-content">
        <div class="kost-card-price">${b(a.priceMonth)} <span>/ bulan</span></div>
        <h3 class="kost-card-title">${a.name}</h3>
        <div class="kost-card-loc">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>${a.city}</span>
        </div>
        <div class="kost-card-facilities">
          ${a.facilities.slice(0,4).map(e=>`
            <div class="facility-badge-mini" data-tooltip="${e}">
              ${T(e)}
            </div>
          `).join("")}
          ${a.facilities.length>4?`<div class="facility-badge-mini" style="font-size:10px; font-weight:700;">+${a.facilities.length-4}</div>`:""}
        </div>
      </div>
    </div>
  `}function U(){const a=document.getElementById("app-content"),i=v("properties").filter(t=>t.status==="active");a.innerHTML=`
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
              <option value="Jakarta" ${n.currentFilter.city==="Jakarta"?"selected":""}>Jakarta</option>
              <option value="Bandung" ${n.currentFilter.city==="Bandung"?"selected":""}>Bandung</option>
              <option value="Yogyakarta" ${n.currentFilter.city==="Yogyakarta"?"selected":""}>Yogyakarta</option>
              <option value="Surabaya" ${n.currentFilter.city==="Surabaya"?"selected":""}>Surabaya</option>
              <option value="Malang" ${n.currentFilter.city==="Malang"?"selected":""}>Malang</option>
            </select>
          </div>

          <div class="filter-group">
            <label for="filter-gender">Tipe Kost</label>
            <select id="filter-gender">
              <option value="">Semua Kategori</option>
              <option value="putra" ${n.currentFilter.gender==="putra"?"selected":""}>Putra</option>
              <option value="putri" ${n.currentFilter.gender==="putri"?"selected":""}>Putri</option>
              <option value="campur" ${n.currentFilter.gender==="campur"?"selected":""}>Campur</option>
            </select>
          </div>

          <div class="filter-group">
            <label for="filter-price">Harga Maksimal (Rp/Bulan)</label>
            <input type="number" id="filter-price" placeholder="Contoh: 1500000" value="${n.currentFilter.priceMax||""}">
          </div>

          <div class="filter-group">
            <label>Fasilitas Utama</label>
            <div class="checkbox-list">
              ${["Wifi","AC","Kamar Mandi Dalam","Parkir Motor","Dapur Bersama"].map(t=>{const s=n.currentFilter.facilities.includes(t)?"checked":"";return`
                  <label class="checkbox-item">
                    <input type="checkbox" class="filter-facility-check" value="${t}" ${s}>
                    <span>${t}</span>
                  </label>
                `}).join("")}
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
  `;const p=()=>{let t=[...i];return n.currentFilter.city&&(t=t.filter(l=>l.city.toLowerCase().includes(n.currentFilter.city.toLowerCase()))),n.currentFilter.gender&&(t=t.filter(l=>l.gender===n.currentFilter.gender)),n.currentFilter.priceMax&&(t=t.filter(l=>l.priceMonth<=parseInt(n.currentFilter.priceMax))),n.currentFilter.facilities.length>0&&(t=t.filter(l=>n.currentFilter.facilities.every(m=>l.facilities.includes(m)))),document.getElementById("search-sort").value==="lowest"?t.sort((l,m)=>l.priceMonth-m.priceMonth):t.sort((l,m)=>m.priceMonth-l.priceMonth),t},e=()=>{const t=p(),s=document.getElementById("search-results-grid"),l=document.getElementById("search-count-label");l.textContent=`Menampilkan ${t.length} Kost`,t.length===0?s.innerHTML=`
        <div style="grid-column: 1/-1; text-align:center; padding:60px 0; color:var(--text-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48" style="margin-bottom:12px; color:var(--text-light);">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p style="font-weight:700; font-size:16px;">Kost tidak ditemukan</p>
          <p style="font-size:13px; margin-top:4px;">Coba ubah kriteria filter pencarian Anda.</p>
        </div>
      `:s.innerHTML=t.map(m=>N(m)).join("")};document.getElementById("filter-city").addEventListener("change",t=>{n.currentFilter.city=t.target.value,e()}),document.getElementById("filter-gender").addEventListener("change",t=>{n.currentFilter.gender=t.target.value,e()}),document.getElementById("filter-price").addEventListener("input",t=>{n.currentFilter.priceMax=t.target.value,e()}),document.querySelectorAll(".filter-facility-check").forEach(t=>{t.addEventListener("change",()=>{const s=[];document.querySelectorAll(".filter-facility-check:checked").forEach(l=>s.push(l.value)),n.currentFilter.facilities=s,e()})}),document.getElementById("search-sort").addEventListener("change",e),document.getElementById("btn-clear-filters").addEventListener("click",()=>{n.currentFilter={city:"",gender:"",priceMax:"",facilities:[]},document.getElementById("filter-city").value="",document.getElementById("filter-gender").value="",document.getElementById("filter-price").value="",document.querySelectorAll(".filter-facility-check").forEach(t=>t.checked=!1),e()}),e()}function W(a){const i=document.getElementById("app-content"),e=v("properties").find(o=>o.id===a);if(!e){i.innerHTML='<div class="container" style="padding:60px 0; text-align:center;"><h2>Kost tidak ditemukan!</h2><a href="#/" class="btn btn-primary" style="margin-top:16px;">Kembali</a></div>';return}const t={putra:"Putra",putri:"Putri",campur:"Campur"},s={putra:"putra",putri:"putri",campur:"campur"},l=e.images&&e.images.length>0?e.images[0]:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80",m=e.images&&e.images.length>1?e.images.slice(1):["https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80","https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80"];i.innerHTML=`
    <div class="container">
      <div class="detail-layout">
        
        <!-- Left Column: Specs, descriptions, photos -->
        <div class="detail-main">
          
          <!-- Image Gallery Grid -->
          <div class="detail-gallery">
            <img class="gallery-large" src="${l}" alt="${e.name}">
            <div class="gallery-thumbs">
              <img class="gallery-thumb" src="${m[0]}" alt="Thumb 1">
              <img class="gallery-thumb" src="${m[1]||m[0]}" alt="Thumb 2">
            </div>
          </div>

          <!-- Header Titles -->
          <div class="detail-header">
            <div class="detail-header-top">
              <div>
                <span class="badge-category ${s[e.gender]}" style="position:static; margin-bottom:8px; display:inline-block;">
                  Kost ${t[e.gender]}
                </span>
                <h1 class="detail-title">${e.name}</h1>
                <p style="color:var(--text-muted); font-size:14px; margin-top:6px; display:flex; align-items:center; gap:4px;">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>${e.address}, Kota ${e.city}</span>
                </p>
              </div>
            </div>
            
            <div class="detail-specs">
              <div class="spec-item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                <span>Dimensi ${e.size} m</span>
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
            <p class="detail-desc">${e.description}</p>
          </div>

          <!-- Facilities section -->
          <div class="detail-section">
            <h3>Fasilitas Kamar & Umum</h3>
            <div class="facilities-grid">
              ${e.facilities.map(o=>`
                <div class="facility-item">
                  ${T(o)}
                  <span>${o}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Location Maps Selection -->
          <div class="detail-section">
            <h3>Lokasi & Peta Lingkungan</h3>
            <div class="location-map-placeholder">
              <!-- OpenStreetMap iframe for interactive coordinates rendering -->
              <iframe src="https://maps.google.com/maps?q=${e.latlong.split(",")[0]},${e.latlong.split(",")[1]}&z=15&output=embed"></iframe>
            </div>
            <div class="location-address">Google Maps Koordinat: ${e.latlong}</div>
          </div>
        </div>

        <!-- Right Column: Booking Box Widget -->
        <div class="detail-sidebar">
          <div class="booking-panel">
            <div class="booking-panel-price" id="booking-aside-price-title">
              ${b(e.priceMonth)} <span>/ bulan</span>
            </div>

            <form class="booking-form" id="form-booking-calculator">
              <div class="booking-input-group">
                <label>Mulai Kost Tanggal</label>
                <input type="date" id="booking-start-date" required value="${new Date().toISOString().split("T")[0]}">
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
  `;const k=document.getElementById("calc-base-price"),f=document.getElementById("calc-total-price"),d=document.getElementById("booking-duration"),c=()=>{const o=parseInt(d.value),u=d.options[d.selectedIndex].dataset.type;let g=0;u==="month"?g=e.priceMonth*o:g=e.priceYear,k.textContent=b(g),f.textContent=b(g+1e4)};d.addEventListener("change",c),c(),document.getElementById("form-booking-calculator").addEventListener("submit",o=>{o.preventDefault();const r=w();if(!r){h("Silakan masuk/login terlebih dahulu untuk menyewa.","error"),x("login");return}if(r.role!=="renter"){h("Hanya akun Pencari Kost yang dapat mengajukan sewa.","error");return}const u=document.getElementById("booking-start-date").value,g=parseInt(d.value),M=d.options[d.selectedIndex].dataset.type;let y=M==="month"?e.priceMonth*g:e.priceYear;document.getElementById("booking-modal-kost-title").textContent=e.name,document.getElementById("booking-modal-kost-loc").textContent=`📍 ${e.address}, ${e.city}`,document.getElementById("booking-modal-start").textContent=u,document.getElementById("booking-modal-duration").textContent=d.options[d.selectedIndex].text,document.getElementById("booking-modal-calc-price").textContent=b(y),document.getElementById("booking-modal-calc-total").textContent=b(y+1e4),n.bookingSubmission={propertyId:e.id,propertyName:e.name,price:M==="month"?e.priceMonth:e.priceYear/12,duration:g,totalPrice:y+1e4,startDate:u},$("booking-modal")}),document.getElementById("btn-chat-owner").addEventListener("click",()=>{if(!w()){h("Silakan login terlebih dahulu untuk chat.","error"),x("login");return}Y(e)})}function Y(a){const i=w(),p=v("chats");let e=p.find(t=>t.renterId===i.id&&t.propertyId===a.id);if(e)n.activeChatId=e.id;else{const s=v("users").find(m=>m.id===a.ownerId)||{name:"Pemilik Kost"},l={id:D(),renterId:i.id,ownerId:a.ownerId,ownerName:`${s.name} (Pemilik)`,propertyName:a.name,propertyId:a.id,messages:[{sender:a.ownerId,text:`Halo! Terima kasih tertarik dengan ${a.name}. Ada yang bisa saya bantu?`,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}]};p.unshift(l),I("chats",p),n.activeChatId=l.id}window.location.hash="#/chat"}function S(){const a=document.getElementById("app-content"),i=w(),e=v("chats").filter(o=>o.renterId===i.id||o.ownerId===i.id),t=e.length===0?`
    <div style="text-align:center; padding:40px 10px; color:var(--text-muted); font-size:13px;">Belum ada riwayat percakapan.</div>
  `:e.map(o=>{const u=i.role==="owner"?"Pencari Kost":o.ownerName,g=o.messages[o.messages.length-1]||{text:"Belum ada pesan",time:""};return`
      <div class="chat-item ${n.activeChatId===o.id?"active":""}" data-chat-id="${o.id}">
        <div class="chat-avatar">${u.substring(0,2).toUpperCase()}</div>
        <div class="chat-info">
          <div class="chat-title-row">
            <span class="chat-title">${o.propertyName}</span>
            <span class="chat-time">${g.time}</span>
          </div>
          <div style="font-size: 11px; font-weight:600; color:var(--secondary); margin-bottom:2px;">${u}</div>
          <div class="chat-last-message">${g.text}</div>
        </div>
      </div>
    `}).join(""),s=e.find(o=>o.id===n.activeChatId);let l="";if(s){const r=i.role==="owner"?"Pencari Kost":s.ownerName;l=`
      <div class="chat-window">
        <div class="chat-header">
          <div class="chat-header-user">
            <div class="chat-avatar" style="width:36px; height:36px; font-size:12px;">${r.substring(0,2).toUpperCase()}</div>
            <div>
              <div class="chat-header-title">${s.propertyName}</div>
              <div class="chat-header-status">${r} • Online</div>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" id="chat-mobile-back" style="display:none;">Kembali</button>
        </div>
        <div class="chat-messages" id="chat-messages-container">
          ${s.messages.map(u=>`
              <div class="message-bubble ${u.sender===i.id?"outgoing":"incoming"}">
                <div style="word-break: break-word;">${u.text}</div>
                <span class="message-time">${u.time}</span>
              </div>
            `).join("")}
        </div>
        <div class="chat-input-bar">
          <input type="text" id="chat-type-input" placeholder="Tulis pesan Anda...">
          <button class="btn btn-primary btn-sm" id="btn-chat-send" style="height:44px; padding:0 18px;">Kirim</button>
        </div>
      </div>
    `}else l=`
      <div class="chat-window-placeholder">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <p style="font-weight:700; font-size:15px;">Mulai Percakapan</p>
        <p style="font-size:12px; margin-top:2px;">Pilih salah satu pesan masuk di sebelah kiri.</p>
      </div>
    `;a.innerHTML=`
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
          ${t}
        </div>
      </div>
      <div class="chat-main-container" id="chat-main-container" style="height:100%;">
        ${l}
      </div>
    </div>
  `;const m=document.getElementById("chat-messages-container");m&&(m.scrollTop=m.scrollHeight),document.querySelectorAll(".chat-item").forEach(o=>{o.addEventListener("click",()=>{if(n.activeChatId=o.dataset.chatId,S(),window.innerWidth<=992){document.getElementById("chat-inbox-panel").style.display="none";const r=document.querySelector(".chat-window");r&&(r.classList.add("active"),document.getElementById("chat-mobile-back").style.display="block")}})});const k=document.getElementById("chat-mobile-back");k&&k.addEventListener("click",()=>{document.getElementById("chat-inbox-panel").style.display="flex";const o=document.querySelector(".chat-window");o&&o.classList.remove("active")});const f=document.getElementById("chat-type-input"),d=document.getElementById("btn-chat-send"),c=()=>{if(!f)return;const o=f.value.trim();if(!o)return;const r=v("chats"),u=r.find(g=>g.id===n.activeChatId);if(u){const g=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});u.messages.push({sender:i.id,text:o,time:g}),I("chats",r),f.value="",S(),setTimeout(()=>{const E=v("chats"),M=E.find(y=>y.id===n.activeChatId);if(M){let y="Baik dek, silakan diajukan sewanya melalui halaman detail kost terlebih dahulu ya.";o.toLowerCase().includes("harga")||o.toLowerCase().includes("diskon")?y="Harga pas sesuai rincian ya dek. Untuk sewa 1 tahun ada potongan khusus yang tertera.":o.toLowerCase().includes("ready")||o.toLowerCase().includes("kosong")?y="Kamar masih ready ya dek! Silakan isi formulir sewa agar kamarnya bisa langsung diproses.":(o.toLowerCase().includes("fasilitas")||o.toLowerCase().includes("wifi"))&&(y="Fasilitas lengkap sesuai deskripsi properti ya dek, wifi juga kencang untuk ngerjain tugas."),M.messages.push({sender:u.ownerId,text:y,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),I("chats",E),window.location.hash==="#/chat"&&n.activeChatId===M.id?(S(),h("Pesan balasan baru dari pemilik kost!","info")):H()}},1500)}};d&&(d.addEventListener("click",c),f.addEventListener("keypress",o=>{o.key==="Enter"&&c()}))}function J(){const a=document.getElementById("app-content"),i=w(),p=v("bookings").filter(s=>s.renterId===i.id),e={pending:'<span class="status-badge pending">Menunggu Persetujuan</span>',active:'<span class="status-badge active">Aktif</span>',rejected:'<span class="status-badge rejected">Ditolak</span>',finished:'<span class="status-badge finished">Selesai</span>'},t=p.length===0?`
    <tr><td colspan="6" style="text-align:center; padding:40px; color:var(--text-muted);">Belum ada riwayat pengajuan sewa kost.</td></tr>
  `:p.map((s,l)=>`
    <tr>
      <td>${l+1}</td>
      <td><strong>${s.propertyName}</strong></td>
      <td>${s.startDate}</td>
      <td>${s.duration} Bulan</td>
      <td><strong>${b(s.totalPrice)}</strong></td>
      <td>${e[s.status]}</td>
    </tr>
  `).join("");a.innerHTML=`
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
              ${t}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `}function z(){const a=document.getElementById("app-content"),i=w(),p=v("properties"),e=p.filter(r=>r.ownerId===i.id),s=v("bookings").filter(r=>{const u=p.find(g=>g.id===r.propertyId);return u&&u.ownerId===i.id}),l=e.length,m=s.filter(r=>r.status==="pending").length,k=s.filter(r=>r.status==="active").length,f=s.filter(r=>r.status==="active"||r.status==="finished").reduce((r,u)=>r+(u.totalPrice-1e4),0),d={pending:'<span class="status-badge pending">Menunggu</span>',active:'<span class="status-badge active">Disetujui (Aktif)</span>',rejected:'<span class="status-badge rejected">Ditolak</span>',finished:'<span class="status-badge finished">Selesai</span>'},c=s.length===0?`
    <tr><td colspan="7" style="text-align:center; padding:30px; color:var(--text-muted);">Belum ada pengajuan sewa masuk.</td></tr>
  `:s.map((r,u)=>{const g=r.status==="pending"?`
      <div style="display:flex; gap:6px;">
        <button class="btn btn-primary btn-sm btn-approve-booking" data-id="${r.id}" style="padding:4px 10px; height:30px; font-size:11px; background-color:var(--success);">Setujui</button>
        <button class="btn btn-danger btn-sm btn-reject-booking" data-id="${r.id}" style="padding:4px 10px; height:30px; font-size:11px;">Tolak</button>
      </div>
    `:"-";return`
      <tr>
        <td>${u+1}</td>
        <td><strong>${r.renterName}</strong></td>
        <td>${r.propertyName}</td>
        <td>${r.startDate}</td>
        <td>${r.duration} Bulan</td>
        <td>${d[r.status]}</td>
        <td>${g}</td>
      </tr>
    `}).join(""),o=e.length===0?`
    <div style="text-align:center; padding:40px; color:var(--text-muted); border:1px dashed var(--border); border-radius:var(--radius-sm);">
      Belum mendaftarkan properti kost. Mulai dengan klik tombol "Tambah Kost".
    </div>
  `:e.map(r=>`
    <div class="owner-prop-card">
      <img class="owner-prop-img" src="${r.images[0]}" alt="${r.name}">
      <div class="owner-prop-info">
        <h4 class="owner-prop-title">${r.name}</h4>
        <div class="owner-prop-meta">
          Kota: ${r.city} • Tipe: ${r.gender.toUpperCase()} • Harga: ${b(r.priceMonth)} / bulan
          ${r.status==="pending"?' • <span style="color:var(--warning); font-weight:700;">Menunggu Review Admin</span>':""}
        </div>
      </div>
      <div class="owner-prop-actions">
        <button class="btn btn-secondary btn-sm btn-edit-kost" data-id="${r.id}">Edit</button>
        <button class="btn btn-danger btn-sm btn-delete-kost" style="padding:8px;" data-id="${r.id}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  `).join("");a.innerHTML=`
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
            <span class="stat-val">${l}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon pending">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">Pengajuan Pending</span>
            <span class="stat-val">${m}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">Penyewa Aktif</span>
            <span class="stat-val">${k}</span>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon revenue">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16V5" /></svg>
          </div>
          <div class="stat-info">
            <span class="stat-label">Total Pendapatan</span>
            <span class="stat-val">${b(f)}</span>
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
            ${o}
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
                ${c}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  `,document.getElementById("btn-add-property-trigger").addEventListener("click",()=>{Q()}),document.querySelectorAll(".btn-approve-booking").forEach(r=>{r.addEventListener("click",()=>{const u=r.dataset.id;K(u,"active")})}),document.querySelectorAll(".btn-reject-booking").forEach(r=>{r.addEventListener("click",()=>{const u=r.dataset.id;K(u,"rejected")})}),document.querySelectorAll(".btn-delete-kost").forEach(r=>{r.addEventListener("click",()=>{confirm("Apakah Anda yakin ingin menghapus kost ini?")&&G(r.dataset.id)})}),document.querySelectorAll(".btn-edit-kost").forEach(r=>{r.addEventListener("click",()=>{h("Fitur edit detail kost saat ini sedang dalam pengembangan.","info")})})}function K(a,i){const p=v("bookings"),e=p.find(t=>t.id===a);if(e){if(e.status=i,I("bookings",p),i==="active"){h("Pengajuan sewa kost disetujui!","success");const t=v("chats"),s=v("properties").find(m=>m.id===e.propertyId);let l=t.find(m=>m.renterId===e.renterId&&m.propertyId===e.propertyId);l||(l={id:D(),renterId:e.renterId,ownerId:s.ownerId,ownerName:`${w().name} (Pemilik)`,propertyName:s.name,propertyId:s.id,messages:[]},t.unshift(l)),l.messages.push({sender:s.ownerId,text:`Selamat dek! Pengajuan sewa Anda untuk ${s.name} telah saya setujui. Silakan persiapkan diri untuk check-in sesuai tanggal mulai (${e.startDate}). Hubungi saya jika butuh bantuan.`,time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}),I("chats",t)}else h("Pengajuan sewa kost ditolak.","error");z()}}function G(a){let i=v("properties");i=i.filter(p=>p.id!==a),I("properties",i),h("Properti kost berhasil dihapus.","success"),z()}function B(){document.querySelectorAll(".modal-overlay").forEach(a=>a.classList.remove("show"))}function $(a){B();const i=document.getElementById(a);i&&i.classList.add("show")}function x(a="login"){const i=document.getElementById("auth-view-login"),p=document.getElementById("auth-view-register"),e=document.getElementById("auth-view-otp"),t=document.getElementById("auth-view-success");i.style.display="none",p.style.display="none",e.style.display="none",t.style.display="none";const s=document.getElementById("auth-title"),l=document.getElementById("auth-subtitle");a==="login"?(s.textContent="Welcome Back!",l.textContent="Sign in to continue to LiveInn",i.style.display="block"):a==="register"?(s.textContent="Bonjour!",l.textContent="Create a new account to find your room",p.style.display="block"):a==="otp"?(s.textContent="Verify Your Email",l.textContent="Enter the 5-digit verification code sent to your email",e.style.display="block"):a==="success"&&(s.textContent="",l.textContent="",t.style.display="block"),$("auth-modal")}function Q(){n.activeWizardStep=1,n.wizardData={facilities:[],images:[],ktpImage:""},document.getElementById("wizard-form-1").reset(),document.getElementById("wizard-form-2").reset(),document.getElementById("wizard-form-3").reset(),document.getElementById("ktp-preview-container").innerHTML="",document.getElementById("kost-preview-container").innerHTML="",document.getElementById("wizard-map-picker").classList.remove("selected"),document.getElementById("wizard-latlong").value="",C(),$("wizard-modal")}function C(){document.querySelectorAll(".wizard-content-step").forEach(p=>p.classList.remove("active")),document.getElementById(`wizard-step-content-${n.activeWizardStep}`).classList.add("active"),document.querySelectorAll(".wizard-step-node").forEach((p,e)=>{const t=e+1;p.className="wizard-step-node",t===n.activeWizardStep?p.classList.add("active"):t<n.activeWizardStep&&p.classList.add("completed")});const a=document.getElementById("wizard-bar"),i=(n.activeWizardStep-1)/3*100;a.style.width=`${i}%`}function j(a){return new Promise((i,p)=>{const e=new FileReader;e.readAsDataURL(a),e.onload=()=>i(e.result),e.onerror=t=>p(t)})}document.addEventListener("DOMContentLoaded",()=>{q(),A(),P(),window.addEventListener("hashchange",P),document.querySelectorAll(".modal-overlay").forEach(d=>{d.addEventListener("click",c=>{c.target===d&&B()})}),["auth-close-btn","booking-close-btn","receipt-close-btn","wizard-close-btn"].forEach(d=>{const c=document.getElementById(d);c&&c.addEventListener("click",B)}),document.getElementById("btn-login-trigger").addEventListener("click",()=>x("login")),document.getElementById("btn-register-trigger").addEventListener("click",()=>x("register")),document.getElementById("link-to-register").addEventListener("click",()=>x("register")),document.getElementById("link-to-login").addEventListener("click",()=>x("login")),document.getElementById("btn-role-renter").addEventListener("click",()=>{const d=w();d&&d.role!=="renter"&&(d.role="renter",L(d),window.location.hash="#/",h("Beralih peran sebagai Pencari Kost","info"))}),document.getElementById("btn-role-owner").addEventListener("click",()=>{const d=w();d&&d.role!=="owner"&&(d.role="owner",L(d),window.location.hash="#/owner",h("Beralih peran sebagai Pemilik Kost","info"))}),document.getElementById("btn-logout").addEventListener("click",()=>{L(null),window.location.hash="#/",h("Berhasil keluar akun.","success")}),document.getElementById("form-login").addEventListener("submit",d=>{d.preventDefault();const c=document.getElementById("login-email").value.trim(),o=document.getElementById("login-password").value,u=v("users").find(g=>(g.email===c||g.name===c)&&g.password===o);u?(L(u),B(),h(`Selamat datang kembali, ${u.name}!`,"success"),u.role==="owner"?window.location.hash="#/owner":window.location.hash="#/"):h("Email atau password salah!","error")});const i=d=>{const c=v("users")[d==="google"?1:0];L(c),B(),h(`Berhasil masuk menggunakan ${d==="google"?"Google":"Apple ID"}.`,"success"),c.role==="owner"?window.location.hash="#/owner":window.location.hash="#/"};document.getElementById("auth-oauth-google").addEventListener("click",()=>i("google")),document.getElementById("auth-oauth-apple").addEventListener("click",()=>i("apple")),document.getElementById("form-register").addEventListener("submit",d=>{d.preventDefault();const c=document.getElementById("reg-name").value.trim(),o=document.getElementById("reg-email").value.trim(),r=document.getElementById("reg-role").value,u=document.getElementById("reg-password").value;if(v("users").some(E=>E.email===o)){h("Email sudah terdaftar!","error");return}n.registrationForm={id:D(),email:o,password:u,name:c,role:r,avatar:c.substring(0,2).toUpperCase()},x("otp")}),document.getElementById("form-otp").addEventListener("submit",d=>{d.preventDefault();const c=document.querySelectorAll(".otp-input");if(Array.from(c).map(u=>u.value).join("").length<5){h("Silakan masukkan 5 digit kode OTP lengkap.","error");return}const r=v("users");r.push(n.registrationForm),I("users",r),L(n.registrationForm),x("success")}),document.getElementById("btn-resend-otp").addEventListener("click",()=>{h("Kode OTP baru telah dikirim ke email Anda.","success")});const p=document.querySelectorAll(".otp-input");p.forEach((d,c)=>{d.addEventListener("input",()=>{d.value&&c<p.length-1&&p[c+1].focus()}),d.addEventListener("keydown",o=>{o.key==="Backspace"&&!d.value&&c>0&&p[c-1].focus()})}),document.getElementById("btn-success-finish").addEventListener("click",()=>{B(),w().role==="owner"?window.location.hash="#/owner":window.location.hash="#/"}),document.getElementById("form-booking-submit").addEventListener("submit",d=>{d.preventDefault();const c=document.getElementById("booking-payment-method").value,o=n.bookingSubmission;if(o){const r=w(),u={id:"book_"+Math.random().toString(36).substr(2,5),renterId:r.id,renterName:r.name,propertyId:o.propertyId,propertyName:o.propertyName,price:o.price,duration:o.duration,totalPrice:o.totalPrice,startDate:o.startDate,paymentMethod:c,status:"pending",createdAt:new Date().toISOString().split("T")[0]},g=v("bookings");g.push(u),I("bookings",g),document.getElementById("receipt-id").textContent=`TX-${u.id.toUpperCase()}`,document.getElementById("receipt-kost").textContent=u.propertyName,document.getElementById("receipt-total").textContent=b(u.totalPrice),$("receipt-modal"),delete n.bookingSubmission}}),document.getElementById("btn-receipt-finish").addEventListener("click",()=>{B(),window.location.hash="#/renter"}),document.getElementById("wizard-form-1").addEventListener("submit",d=>{d.preventDefault(),n.wizardData.name=document.getElementById("wizard-name").value.trim(),n.wizardData.gender=document.getElementById("wizard-gender").value,n.wizardData.size=document.getElementById("wizard-size").value,n.wizardData.priceMonth=parseInt(document.getElementById("wizard-price-month").value),n.wizardData.priceYear=parseInt(document.getElementById("wizard-price-year").value),n.wizardData.description=document.getElementById("wizard-desc").value.trim()||"Kost bersih nyaman terjangkau.";const c=[];document.querySelectorAll('input[name="wizard-facilities"]:checked').forEach(o=>c.push(o.value)),n.wizardData.facilities=c,n.activeWizardStep=2,C()}),document.getElementById("wizard-back-2").addEventListener("click",()=>{n.activeWizardStep=1,C()});const e=document.getElementById("wizard-map-picker");e.addEventListener("click",d=>{e.classList.add("selected");const c=(-7.7-Math.random()*.1).toFixed(4),o=(110.3+Math.random()*.1).toFixed(4);document.getElementById("wizard-latlong").value=`${c}, ${o}`,h("Titik koordinat berhasil dikunci pada peta.","success")}),document.getElementById("wizard-form-2").addEventListener("submit",d=>{d.preventDefault();const c=document.getElementById("wizard-latlong").value;if(!c){h("Silakan pilih lokasi koordinat pada peta terlebih dahulu.","error");return}n.wizardData.city=document.getElementById("wizard-city").value,n.wizardData.address=document.getElementById("wizard-address").value.trim(),n.wizardData.latlong=c,n.activeWizardStep=3,C()}),document.getElementById("wizard-back-3").addEventListener("click",()=>{n.activeWizardStep=2,C()});const t=document.getElementById("upload-ktp-box"),s=document.getElementById("wizard-ktp-file"),l=document.getElementById("ktp-preview-container");t.addEventListener("click",()=>s.click()),s.addEventListener("change",async()=>{if(s.files&&s.files[0]){const d=s.files[0];try{const c=await j(d);n.wizardData.ktpImage=c,l.innerHTML=`
          <img class="upload-preview-item" src="${c}" alt="KTP Preview">
        `,h("KTP berhasil diunggah.","success")}catch{h("Gagal memproses file KTP.","error")}}});const m=document.getElementById("upload-kost-box"),k=document.getElementById("wizard-kost-file"),f=document.getElementById("kost-preview-container");m.addEventListener("click",()=>k.click()),k.addEventListener("change",async()=>{if(k.files&&k.files.length>0){f.innerHTML="",n.wizardData.images=[];for(let d=0;d<Math.min(k.files.length,3);d++){const c=k.files[d];try{const o=await j(c);n.wizardData.images.push(o),f.innerHTML+=`
            <img class="upload-preview-item" src="${o}" alt="Kost Preview ${d+1}">
          `}catch(o){console.error(o)}}h(`${n.wizardData.images.length} Foto Kost berhasil dimuat.`,"success")}}),document.getElementById("wizard-form-3").addEventListener("submit",async d=>{d.preventDefault(),n.wizardData.images.length===0&&n.wizardData.images.push("https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80");const c={id:"prop_"+Math.random().toString(36).substr(2,5),name:n.wizardData.name,gender:n.wizardData.gender,size:n.wizardData.size,priceMonth:n.wizardData.priceMonth,priceYear:n.wizardData.priceYear,city:n.wizardData.city,address:n.wizardData.address,latlong:n.wizardData.latlong,description:n.wizardData.description,facilities:n.wizardData.facilities.length>0?n.wizardData.facilities:["Wifi","Kasur"],images:n.wizardData.images,ownerId:w().id,status:"pending"},o=v("properties");o.unshift(c),I("properties",o),n.activeWizardStep=4,C(),setTimeout(()=>{const r=v("properties"),u=r.find(g=>g.id===c.id);u&&(u.status="active",I("properties",r),h(`Kost "${c.name}" telah disetujui oleh admin dan kini aktif!`,"success"),window.location.hash==="#/owner"&&z())},6e3)}),document.getElementById("wizard-success-finish").addEventListener("click",()=>{B(),z()})});
