/**
 * LY PRINTING - Interactive Engine
 * Handling WhatsApp Order Generation, Dynamic Paper Materials Selector,
 * Live Material Explanations, Dynamic Calculator, Portfolio Filters, and FAQ.
 */

// =============================================================================
// 1. CONFIGURATION
// Nomor WhatsApp Resmi LY Printing: +62 895-0505-7376
// =============================================================================
const LY_CONFIG = {
  storeName: "LY PRINTING",
  whatsappNumber: "6289505057376", // Nomor WhatsApp Resmi
  businessHours: "08.00 - 21.00 WIB",
  email: "order@lyprinting.com"
};

// =============================================================================
// 2. DATA BAHAN KERTAS & PENJELASAN RAMAH AWAM
// Menjelaskan karakteristik kertas dalam bahasa sehari-hari (seperti kalender, dll)
// =============================================================================
const PRODUCT_MATERIALS = {
  "Spanduk & Banner": [
    {
      name: "Bahan Flexy Standard (Rp 24.000 / m)",
      desc: "🚩 Terpal flexy standar kuat & anti luntur, sangat ekonomis untuk spanduk toko, warung makan, promosi, dan event outdoor."
    },
    {
      name: "Bahan Flexy Korea (Rp 55.000 / m)",
      desc: "🛡️ Terpal Flexy Korea 440g super tebal dan serat padat, kualitas terbaik anti robek dan tahan panas hujan berbulan-bulan."
    },
    {
      name: "X-Banner 1 Set + Tiang (Rp 75.000 / set)",
      desc: "🖼️ Paket komplit cetakan visual tajam + tiang rangka X penyangga + sarung tas. Bebas request desain untuk sempro, wisuda & toko."
    }
  ],
  "Stiker & Label Kemasan": [
    {
      name: "Stiker Vinyl Anti Air Label Produk (Rp 10.000 / A3+)",
      desc: "💧 Bahan vinyl putih 100% anti air & tahan freezer es, 1 lembar A3+ bisa dapat puluhan sampai ratusan pcs label botol/makanan."
    },
    {
      name: "Stiker Motor Vinyl + Laminasi + Cutting Pola (Rp 30.000 / A3+)",
      desc: "🏍️ Bahan vinyl outdoor tebal + lapisan laminasi anti gores + cutting pola presisi (tinggal kelupas dan tempel di motor/helm/laptop)."
    }
  ],
  "Brosur / Flyer / Kalender": [
    {
      name: "Brosur 1 Sisi (Rp 1.000 / pcs)",
      desc: "📄 Kertas Art Paper glossy mengkilap cetak 1 sisi full colour, hemat untuk sebar promo massal."
    },
    {
      name: "Brosur 2 Sisi Bolak-Balik (Rp 1.500 / pcs)",
      desc: "📑 Kertas Art Paper glossy cetak bolak-balik 2 sisi depan belakang, muat info promosi lebih banyak."
    }
  ],
  "Undangan Pernikahan / Acara": [
    {
      name: "Undangan Kertas BC (Rp 1.300 / pcs, Promo 500 pcs: Rp 1.000)",
      desc: "💌 Kertas Brief Card halus elegan. Free plastik opp kelipatan. Pemesanan 500 pcs hanya Rp 1.000/pcs + Bonus Undangan Website!"
    }
  ],
  "Kartu Nama Bisnis": [
    {
      name: "Kartu Nama 1 Sisi (Rp 40.000 / box)",
      desc: "💼 Kertas Art Carton tebal berkualitas cetak 1 sisi tajam, 1 box isi 100 lembar free box mika bening."
    },
    {
      name: "Kartu Nama 2 Sisi Bolak-Balik (Rp 50.000 / box)",
      desc: "✨ Kertas Art Carton 310g cetak 2 sisi depan belakang eksklusif, muat logo, kontak & QR code, isi 100 pcs free box mika."
    }
  ],
  "Daftar Menu Cetak": [
    {
      name: "Art Paper Super Glossy (Rp 10.000 / lembar)",
      desc: "🍽️ Kertas licin mengkilap super glossy, warna menu makanan dan minuman terlihat sangat pop-out dan menggugah selera."
    },
    {
      name: "Art Paper + Laminating Tebal (Rp 15.000 / lembar)",
      desc: "💧 Kertas Art Paper dilapisi laminating press tebal, anti air, tahan cipratan minyak, kaku dan mudah dilap bersih."
    }
  ],
  "ID Card & Lanyard": [
    {
      name: "Cetak ID Card Satuan (Rp 9.000 / pcs)",
      desc: "💳 Bahan standar kartu ATM anti luntur & awet, sudut membulat rapi untuk kartu nama, member, atau identitas panitia."
    },
    {
      name: "Lanyard + ID Card 1 Set (Rp 35.000 / set)",
      desc: "🏷️ 1 Paket komplit tali lanyard tissue lembut 2 cm cetak bolak-balik + stopper/kait + ID Card. Cetak banyak harga semakin murah!"
    }
  ],
  "Foto Polaroid & Strip": [
    {
      name: "Cetak Foto Polaroid (Rp 500 / pcs)",
      desc: "📸 Foto polaroid kertas glossy tebal aesthetic, abadikan momen wisuda, bestie, dan liburan dengan harga super hemat."
    },
    {
      name: "Cetak Photo Strip 3-4 Frame (Rp 800 / pcs)",
      desc: "🎞️ Foto memanjang 3-4 frame photobooth style kekinian, kertas foto super glossy anti pudar."
    }
  ],
  "Cetak Foto 2D + Bingkai": [
    {
      name: "Cetak Foto 2D + Bingkai (Mulai Ukuran 10R)",
      desc: "🖼️ Menerima cetak foto 2D + bingkai frame mewah, bebas pilih ukuran (rekomendasi mulai 10R ke atas) & bebas request desain."
    }
  ],
  "Custom Merchandise & Kado": [
    {
      name: "Mug Keramik Custom (Rp 30.000 / pcs)",
      desc: "☕ Mug keramik putih food-grade SNI dicetak desain custom foto & ucapan keliling 360° anti luntur."
    },
    {
      name: "Kertas Kado Custom 32×48 cm (Rp 5.000 / pcs)",
      desc: "🎁 Kertas kado bahan Art Paper 150 gsm tebal & mengkilap, ukuran 32×48 cm, bebas request foto & motif unik."
    }
  ],
  "Cetak Custom Lainnya": [
    {
      name: "Konsultasi Khusus dengan Tim Percetakan LY 🦋",
      desc: "💬 Punya kebutuhan cetak unik lainnya? Sampaikan detailnya, tim kami siap wujudkan dengan standar presisi lambang kupu-kupu!"
    }
  ]
};

// =============================================================================
// 3. DOM ELEMENTS INITIALIZATION
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Navigation elements
  const navbar = document.getElementById("navbar");
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.getElementById("navLinks");
  const navLinkItems = document.querySelectorAll(".nav-link");

  // Form & Preview elements
  const waOrderForm = document.getElementById("waOrderForm");
  const custNameInput = document.getElementById("custName");
  const custPhoneInput = document.getElementById("custPhone");
  const custCityInput = document.getElementById("custCity");
  const orderProductSelect = document.getElementById("orderProduct");
  const orderMaterialSelect = document.getElementById("orderMaterial");
  const materialExplainerText = document.getElementById("materialExplainerText");
  const orderDimensionsInput = document.getElementById("orderDimensions");
  const orderQuantityInput = document.getElementById("orderQuantity");
  const designStatusSelect = document.getElementById("designStatus");
  const orderFinishingInput = document.getElementById("orderFinishing");
  const previewTextContent = document.getElementById("previewTextContent");
  const chatTimeNow = document.getElementById("chatTimeNow");

  // Calculator elements
  const calcProduct = document.getElementById("calcProduct");
  const spandukFields = document.getElementById("spandukFields");
  const bannerWidth = document.getElementById("bannerWidth");
  const bannerHeight = document.getElementById("bannerHeight");
  const bannerMaterial = document.getElementById("bannerMaterial");
  const calcQty = document.getElementById("calcQty");
  const calcQtyLabel = document.getElementById("calcQtyLabel");
  const btnMinusQty = document.getElementById("btnMinusQty");
  const btnPlusQty = document.getElementById("btnPlusQty");
  const calcFinishing = document.getElementById("calcFinishing");
  const calcDetailSize = document.getElementById("calcDetailSize");
  const calcDetailUnitPrice = document.getElementById("calcDetailUnitPrice");
  const calcTotalResult = document.getElementById("calcTotalResult");
  const discountRow = document.getElementById("discountRow");
  const calcDiscountText = document.getElementById("calcDiscountText");
  const btnApplyToOrder = document.getElementById("btnApplyToOrder");

  // Floating WhatsApp elements
  const floatingWaBtn = document.getElementById("floatingWaBtn");
  const waPopupCard = document.getElementById("waPopupCard");
  const closeWaPopup = document.getElementById("closeWaPopup");
  const quickChips = document.querySelectorAll(".quick-chip");

  // Portfolio filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  // FAQ accordion
  const faqItems = document.querySelectorAll(".faq-item");

  // Toast
  const toastNotification = document.getElementById("toastNotification");
  const toastMessage = document.getElementById("toastMessage");

  // =============================================================================
  // 4. NAVBAR SCROLL & MOBILE TOGGLE
  // =============================================================================
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    highlightNavOnScroll();
  });

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  navLinkItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  function highlightNavOnScroll() {
    const scrollPos = window.scrollY + 140;
    const sections = document.querySelectorAll("section[id], footer[id]");

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinkItems.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // =============================================================================
  // 5. DYNAMIC PAPER MATERIALS DROPDOWN & LIVE EXPLANATION
  // =============================================================================
  function populateMaterialsForProduct(productName, targetMaterialName = "") {
    if (!orderMaterialSelect) return;

    // Find material list for the product
    let materials = PRODUCT_MATERIALS[productName];

    // Fallback if not direct match
    if (!materials) {
      const keys = Object.keys(PRODUCT_MATERIALS);
      const matchedKey = keys.find(k => productName.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(productName.toLowerCase()));
      materials = matchedKey ? PRODUCT_MATERIALS[matchedKey] : PRODUCT_MATERIALS["Undangan Pernikahan / Acara"];
    }

    // Clear current options
    orderMaterialSelect.innerHTML = "";

    // Add options
    materials.forEach((mat, idx) => {
      const opt = document.createElement("option");
      opt.value = mat.name;
      opt.textContent = mat.name;
      opt.setAttribute("data-desc", mat.desc);

      if (targetMaterialName && mat.name.toLowerCase().includes(targetMaterialName.toLowerCase())) {
        opt.selected = true;
      } else if (!targetMaterialName && idx === 0) {
        opt.selected = true;
      }

      orderMaterialSelect.appendChild(opt);
    });

    // Update material explanation text
    updateMaterialExplanation();
  }

  function updateMaterialExplanation() {
    if (!orderMaterialSelect || !materialExplainerText) return;

    const selectedOption = orderMaterialSelect.options[orderMaterialSelect.selectedIndex];
    if (selectedOption) {
      const desc = selectedOption.getAttribute("data-desc") || "Pilihan bahan berkualitas standar percetakan LY Printing.";
      materialExplainerText.innerHTML = desc;
    }
  }

  // Listen to product selection change
  if (orderProductSelect) {
    orderProductSelect.addEventListener("change", () => {
      populateMaterialsForProduct(orderProductSelect.value);

      // Contextual default dimensions & quantities
      const prod = orderProductSelect.value;
      if (prod.includes("Undangan")) {
        orderDimensionsInput.value = "Standar Lipat 2 (13.5 x 19 cm)";
        orderQuantityInput.value = "200 pcs";
      } else if (prod.includes("Kartu")) {
        orderDimensionsInput.value = "9 x 5.5 cm (Standar Box)";
        orderQuantityInput.value = "2 box";
      } else if (prod.includes("Brosur") || prod.includes("Kalender")) {
        orderDimensionsInput.value = "Ukuran A5 (14.8 x 21 cm)";
        orderQuantityInput.value = "1 rim (500 lembar)";
      } else if (prod.includes("Stiker")) {
        orderDimensionsInput.value = "Diameter 5 cm (Lembaran A3+)";
        orderQuantityInput.value = "5 lembar A3+";
      } else if (prod.includes("Nota")) {
        orderDimensionsInput.value = "Ukuran 1/4 Folio (10.5 x 16.5 cm)";
        orderQuantityInput.value = "10 buku (Rangkap 2)";
      } else if (prod.includes("Kaos")) {
        orderDimensionsInput.value = "Ukuran L & XL (Desain A3 Depan)";
        orderQuantityInput.value = "12 pcs";
      } else if (prod.includes("Spanduk")) {
        orderDimensionsInput.value = "3 x 1 meter";
        orderQuantityInput.value = "1 lembar";
      }

      updateOrderMessagePreview();
    });
  }

  // Listen to material dropdown change
  if (orderMaterialSelect) {
    orderMaterialSelect.addEventListener("change", () => {
      updateMaterialExplanation();
      updateOrderMessagePreview();
    });
  }

  // Initial population of material dropdown
  if (orderProductSelect) {
    populateMaterialsForProduct(orderProductSelect.value);
  }

  // =============================================================================
  // 6. WHATSAPP ORDER FORM & LIVE PREVIEW GENERATOR
  // =============================================================================
  function formatCurrency(num) {
    return "Rp " + Math.round(num).toLocaleString("id-ID");
  }

  function getFormattedCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  function updateOrderMessagePreview() {
    const name = custNameInput ? custNameInput.value.trim() || "[Nama Anda]" : "[Nama Anda]";
    const phone = custPhoneInput ? custPhoneInput.value.trim() || "[No. WhatsApp Anda]" : "[No. WhatsApp Anda]";
    const city = custCityInput ? custCityInput.value.trim() || "-" : "-";
    const product = orderProductSelect ? orderProductSelect.value : "Undangan Pernikahan / Acara";
    const material = orderMaterialSelect ? orderMaterialSelect.value : "Kertas Jasmine (Glitter Mewah)";
    const dimensions = orderDimensionsInput ? orderDimensionsInput.value.trim() || "-" : "-";
    const quantity = orderQuantityInput ? orderQuantityInput.value.trim() || "1" : "1";
    const designStatus = designStatusSelect ? designStatusSelect.value : "File Siap Cetak";
    const paymentMethodSelect = document.getElementById("paymentMethod");
    const paymentMethod = paymentMethodSelect ? paymentMethodSelect.value : "Sistem COD (Bayar di Tempat)";
    const finishing = orderFinishingInput && orderFinishingInput.value.trim() ? orderFinishingInput.value.trim() : "Standar rapi";

    const previewTemplate = `Halo Admin *${LY_CONFIG.storeName}*, saya ingin memesan cetakan dengan rincian berikut:

📋 *DETAIL PESANAN CETAK*
• *Nama Pemesan*: ${name}
• *No. WhatsApp*: ${phone}
• *Alamat / Kota*: ${city}
• *Metode Bayar*: ${paymentMethod}
• *Jenis Produk*: *${product}*
• *Pilihan Bahan*: ${material}
• *Ukuran / Dimensi*: ${dimensions}
• *Jumlah / Qty*: ${quantity}
• *Kesiapan Desain*: ${designStatus}
• *Finishing / Catatan*: ${finishing}

Mohon dicek dan diinfokan total biayanya ya min. Terima kasih! 🙏`;

    if (previewTextContent) {
      previewTextContent.textContent = previewTemplate;
    }
    if (chatTimeNow) {
      chatTimeNow.textContent = `${getFormattedCurrentTime()} ✓✓`;
    }

    return previewTemplate;
  }

  const paymentMethodSelect = document.getElementById("paymentMethod");
  const formInputs = [
    custNameInput, custPhoneInput, custCityInput, paymentMethodSelect,
    orderProductSelect, orderMaterialSelect, orderDimensionsInput,
    orderQuantityInput, designStatusSelect, orderFinishingInput
  ];

  formInputs.forEach(input => {
    if (input) {
      input.addEventListener("input", updateOrderMessagePreview);
      input.addEventListener("change", updateOrderMessagePreview);
    }
  });

  updateOrderMessagePreview();

  // Handle form submission to WhatsApp
  if (waOrderForm) {
    waOrderForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = custNameInput.value.trim();
      const phone = custPhoneInput.value.trim();
      const quantity = orderQuantityInput.value.trim();

      if (!name) {
        showToast("Mohon masukkan Nama Anda!");
        custNameInput.focus();
        return;
      }

      if (!phone) {
        showToast("Mohon masukkan Nomor WhatsApp Anda!");
        custPhoneInput.focus();
        return;
      }

      if (!quantity) {
        showToast("Mohon isi Jumlah Cetak yang diinginkan!");
        orderQuantityInput.focus();
        return;
      }

      const rawMessage = updateOrderMessagePreview();
      const encodedMessage = encodeURIComponent(rawMessage);
      const waUrl = `https://wa.me/${LY_CONFIG.whatsappNumber}?text=${encodedMessage}`;

      showToast("Membuka WhatsApp ke +62 895-0505-7376...");

      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 400);
    });
  }

  // =============================================================================
  // 7. PRICE ESTIMATOR / CALCULATOR SIMULATOR
  // =============================================================================
  function calculatePrice() {
    if (!calcProduct) return;

    const productType = calcProduct.value;
    let qty = parseInt(calcQty.value) || 1;
    if (qty < 1) qty = 1;

    let finishingCost = parseInt(calcFinishing.value) || 0;
    let unitPrice = 0;
    let sizeText = "";
    let subtotal = 0;
    let discountPercent = 0;

    if (productType === "spanduk") {
      spandukFields.style.display = "block";
      calcQtyLabel.textContent = "Jumlah Spanduk (Pcs)";

      const width = parseFloat(bannerWidth.value) || 1;
      const height = parseFloat(bannerHeight.value) || 1;
      const area = Math.max(width * height, 1);
      const pricePerMeter = parseInt(bannerMaterial.value) || 24000;

      unitPrice = pricePerMeter;
      const materialName = pricePerMeter === 55000 ? "Flexy Korea 440g Super Tebal" : "Flexy Standard";
      sizeText = `${area.toFixed(2)} m² (${width} × ${height} m) • ${materialName}`;

      const totalArea = area * qty;
      subtotal = (totalArea * pricePerMeter) + (finishingCost * qty);

      if (totalArea >= 15) {
        discountPercent = 8;
      }
    } else {
      spandukFields.style.display = "none";

      if (productType === "xbanner") {
        calcQtyLabel.textContent = "Jumlah Set (Banner + Tiang X)";
        unitPrice = 75000;
        sizeText = "1 Set Lengkap + Tiang Penyangga (Bebas Request Desain)";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
        if (qty >= 5) discountPercent = 7;
      } else if (productType === "stiker_label") {
        calcQtyLabel.textContent = "Jumlah Lembar A3+ (Bisa Muat Banyak Pcs Label)";
        unitPrice = 10000;
        sizeText = "Stiker Vinyl Putih 100% Anti Air Tahan Freezer";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
        if (qty >= 10) discountPercent = 10;
      } else if (productType === "stiker_motor") {
        calcQtyLabel.textContent = "Jumlah Lembar A3+ (Muat Beberapa Pcs)";
        unitPrice = 30000;
        sizeText = "Vinyl Tebal Outdoor + Laminasi Anti Gores + Cutting Pola";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
        if (qty >= 5) discountPercent = 10;
      } else if (productType === "brosur_1sisi") {
        calcQtyLabel.textContent = "Jumlah Brosur 1 Sisi (Pcs)";
        unitPrice = 1000;
        sizeText = "Bahan Art Paper Glossy Licin Cetak 1 Sisi Tajam";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
        if (qty >= 500) discountPercent = 10;
      } else if (productType === "brosur_2sisi") {
        calcQtyLabel.textContent = "Jumlah Brosur 2 Sisi Bolak-Balik (Pcs)";
        unitPrice = 1500;
        sizeText = "Bahan Art Paper Glossy Cetak 2 Sisi Bolak-Balik";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
        if (qty >= 500) discountPercent = 10;
      } else if (productType === "undangan_bc") {
        calcQtyLabel.textContent = "Jumlah Undangan (Pcs)";
        if (qty >= 500) {
          unitPrice = 1000;
          sizeText = "Promo 500 Pcs: Free Plastik + Free Undangan Website! 🎁";
        } else {
          unitPrice = 1300;
          sizeText = "Kertas BC Halus Elegan (Free Plastik Kelipatan)";
        }
        subtotal = (qty * unitPrice) + (finishingCost * qty);
      } else if (productType === "kartu_1sisi") {
        calcQtyLabel.textContent = "Jumlah Box (1 Box = 100 pcs)";
        unitPrice = 40000;
        sizeText = "Art Carton Tebal 1 Sisi (Free Box Mika Transparan)";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
        if (qty >= 5) discountPercent = 10;
      } else if (productType === "kartu_2sisi") {
        calcQtyLabel.textContent = "Jumlah Box (1 Box = 100 pcs)";
        unitPrice = 50000;
        sizeText = "Art Carton 310g 2 Sisi Bolak-Balik (Free Box Mika)";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
        if (qty >= 5) discountPercent = 10;
      } else if (productType === "menu_glossy") {
        calcQtyLabel.textContent = "Jumlah Lembar Daftar Menu (Pcs)";
        unitPrice = 10000;
        sizeText = "Bahan Art Paper Super Glossy Licin Mengkilap";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
      } else if (productType === "menu_laminating") {
        calcQtyLabel.textContent = "Jumlah Lembar Daftar Menu (Pcs)";
        unitPrice = 15000;
        sizeText = "Art Paper + Laminating Press Tebal (Anti Air & Minyak)";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
      } else if (productType === "id_card") {
        calcQtyLabel.textContent = "Jumlah ID Card (Pcs)";
        unitPrice = 9000;
        sizeText = "Standar Kartu ATM Anti Luntur Sudut Membulat Rapi";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
        if (qty >= 20) discountPercent = 10;
      } else if (productType === "lanyard_set") {
        calcQtyLabel.textContent = "Jumlah Paket Lanyard + ID Card (Set)";
        unitPrice = 35000;
        sizeText = "1 Set Tali Lanyard Tissue + Kait/Stopper + ID Card (Banyak Makin Murah)";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
        if (qty >= 20) discountPercent = 15;
      } else if (productType === "polaroid") {
        calcQtyLabel.textContent = "Jumlah Cetak Polaroid (Pcs)";
        unitPrice = 500;
        sizeText = "Kertas Foto Glossy Aesthetic Kekinian";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
      } else if (productType === "photo_strip") {
        calcQtyLabel.textContent = "Jumlah Cetak Photo Strip (Pcs)";
        unitPrice = 800;
        sizeText = "Photo Strip Memanjang 3-4 Frame Photobooth Hits";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
      } else if (productType === "mug") {
        calcQtyLabel.textContent = "Jumlah Mug Custom (Pcs)";
        unitPrice = 30000;
        sizeText = "Keramik Putih Food-Grade SNI (Bebas Request Desain)";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
        if (qty >= 12) discountPercent = 10;
      } else if (productType === "kertas_kado") {
        calcQtyLabel.textContent = "Jumlah Lembar Kertas Kado (Pcs)";
        unitPrice = 5000;
        sizeText = "Art Paper 150 gsm Ukuran 32×48 cm (Bebas Request Desain)";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
        if (qty >= 20) discountPercent = 10;
      } else if (productType === "foto_frame") {
        calcQtyLabel.textContent = "Jumlah Foto + Bingkai (Pcs)";
        unitPrice = 50000;
        sizeText = "Cetak Foto 2D + Bingkai Frame Minimalis (Mulai Ukuran 10R)";
        subtotal = (qty * unitPrice) + (finishingCost * qty);
      }
    }

    let totalAfterDiscount = subtotal;
    if (discountPercent > 0) {
      const discountVal = subtotal * (discountPercent / 100);
      totalAfterDiscount = subtotal - discountVal;
      discountRow.style.display = "flex";
      calcDiscountText.textContent = `-${discountPercent}% Diskon Grosir`;
    } else {
      discountRow.style.display = "none";
    }

    calcDetailSize.textContent = sizeText;
    calcDetailUnitPrice.textContent = formatCurrency(unitPrice);
    calcTotalResult.textContent = formatCurrency(totalAfterDiscount);
  }

  const calcInputs = [calcProduct, bannerWidth, bannerHeight, bannerMaterial, calcQty, calcFinishing];
  calcInputs.forEach(elem => {
    if (elem) {
      elem.addEventListener("input", calculatePrice);
      elem.addEventListener("change", calculatePrice);
    }
  });

  if (btnMinusQty) {
    btnMinusQty.addEventListener("click", () => {
      let val = parseInt(calcQty.value) || 1;
      if (val > 1) {
        calcQty.value = val - 1;
        calculatePrice();
      }
    });
  }

  if (btnPlusQty) {
    btnPlusQty.addEventListener("click", () => {
      let val = parseInt(calcQty.value) || 1;
      calcQty.value = val + 1;
      calculatePrice();
    });
  }

  calculatePrice();

  // "Order Estimasi Ini" action: Apply to order form
  if (btnApplyToOrder) {
    btnApplyToOrder.addEventListener("click", () => {
      const productType = calcProduct.value;
      const qty = calcQty.value;
      const totalEst = calcTotalResult.textContent;

      if (productType === "spanduk") {
        orderProductSelect.value = "Spanduk & Banner";
        populateMaterialsForProduct("Spanduk & Banner", bannerMaterial.value === "55000" ? "Flexy Korea" : "Flexy Standard");
        orderDimensionsInput.value = `${bannerWidth.value} x ${bannerHeight.value} meter`;
        orderQuantityInput.value = `${qty} lembar`;
        orderFinishingInput.value = `Estimasi kalkulator: ${totalEst}. Finishing mata ayam pojok.`;
      } else if (productType === "xbanner") {
        orderProductSelect.value = "Spanduk & Banner";
        populateMaterialsForProduct("Spanduk & Banner", "X-Banner");
        orderDimensionsInput.value = "60 x 160 cm (1 Set + Tiang)";
        orderQuantityInput.value = `${qty} set`;
        orderFinishingInput.value = `Estimasi kalkulator: ${totalEst}. Bebas request desain.`;
      } else if (productType.includes("stiker")) {
        orderProductSelect.value = "Stiker & Label Kemasan";
        populateMaterialsForProduct("Stiker & Label Kemasan", productType === "stiker_motor" ? "Stiker Motor" : "Vinyl Anti Air");
        orderDimensionsInput.value = "Ukuran Lembar A3+";
        orderQuantityInput.value = `${qty} lembar A3+`;
        orderFinishingInput.value = `Estimasi kalkulator: ${totalEst}.`;
      } else if (productType.includes("brosur")) {
        orderProductSelect.value = "Brosur / Flyer / Kalender";
        populateMaterialsForProduct("Brosur / Flyer / Kalender", productType === "brosur_2sisi" ? "2 Sisi" : "1 Sisi");
        orderDimensionsInput.value = "Ukuran Standar A5";
        orderQuantityInput.value = `${qty} pcs`;
        orderFinishingInput.value = `Estimasi kalkulator: ${totalEst}.`;
      } else if (productType === "undangan_bc") {
        orderProductSelect.value = "Undangan Pernikahan / Acara";
        populateMaterialsForProduct("Undangan Pernikahan / Acara", "Undangan Kertas BC");
        orderDimensionsInput.value = "Standar Undangan BC";
        orderQuantityInput.value = `${qty} pcs`;
        orderFinishingInput.value = `Estimasi kalkulator: ${totalEst}. Free plastik OPP.`;
      } else if (productType.includes("kartu")) {
        orderProductSelect.value = "Kartu Nama Bisnis";
        populateMaterialsForProduct("Kartu Nama Bisnis", productType === "kartu_2sisi" ? "2 Sisi" : "1 Sisi");
        orderDimensionsInput.value = "9 x 5.5 cm (Free Box Mika)";
        orderQuantityInput.value = `${qty} box (isi ${qty * 100} pcs)`;
        orderFinishingInput.value = `Estimasi kalkulator: ${totalEst}.`;
      } else if (productType.includes("menu")) {
        orderProductSelect.value = "Daftar Menu Cetak";
        populateMaterialsForProduct("Daftar Menu Cetak", productType === "menu_laminating" ? "Laminating" : "Glossy");
        orderDimensionsInput.value = "Ukuran A4 / F4";
        orderQuantityInput.value = `${qty} lembar`;
        orderFinishingInput.value = `Estimasi kalkulator: ${totalEst}.`;
      } else if (productType.includes("polaroid") || productType.includes("strip") || productType === "foto_frame") {
        orderProductSelect.value = productType === "foto_frame" ? "Cetak Foto 2D + Bingkai" : "Foto Polaroid & Strip";
        populateMaterialsForProduct(orderProductSelect.value);
        orderDimensionsInput.value = productType === "foto_frame" ? "Mulai Ukuran 10R" : (productType === "polaroid" ? "Polaroid" : "Photo Strip");
        orderQuantityInput.value = `${qty} pcs`;
        orderFinishingInput.value = `Estimasi kalkulator: ${totalEst}.`;
      } else {
        orderProductSelect.value = "Custom Merchandise & Kado";
        populateMaterialsForProduct("Custom Merchandise & Kado", productType === "mug" ? "Mug" : "Kertas Kado");
        orderDimensionsInput.value = productType === "mug" ? "Standar Mug Keramik SNI" : "32 x 48 cm";
        orderQuantityInput.value = `${qty} pcs`;
        orderFinishingInput.value = `Estimasi kalkulator: ${totalEst}.`;
      }

      updateOrderMessagePreview();

      const orderSec = document.getElementById("order-section");
      if (orderSec) {
        orderSec.scrollIntoView({ behavior: "smooth" });
      }

      showToast("Data kalkulator dimasukkan ke formulir pesanan!");
    });
  }

  // =============================================================================
  // 8. SELECT PAPER DIRECTLY FROM "PANDUAN BAHAN KERTAS"
  // =============================================================================
  const selectPaperBtns = document.querySelectorAll(".select-paper-btn");

  selectPaperBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const targetMaterial = btn.getAttribute("data-material");
      const targetProduct = btn.getAttribute("data-product");

      if (targetProduct && orderProductSelect) {
        orderProductSelect.value = targetProduct;
        populateMaterialsForProduct(targetProduct, targetMaterial);
      }

      updateOrderMessagePreview();

      const orderSec = document.getElementById("order-section");
      if (orderSec) {
        orderSec.scrollIntoView({ behavior: "smooth" });
      }

      showToast(`Bahan dipilih: ${targetMaterial.split('(')[0].trim()}`);
    });
  });

  // =============================================================================
  // 9. SELECT PRODUCT DIRECTLY FROM SERVICE CARDS & PORTFOLIO
  // =============================================================================
  const selectProductBtns = document.querySelectorAll(".select-product-btn, .order-from-portfolio, .quick-order-link");

  selectProductBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const productName = btn.getAttribute("data-product");

      if (productName) {
        for (let i = 0; i < orderProductSelect.options.length; i++) {
          if (orderProductSelect.options[i].value.toLowerCase().includes(productName.toLowerCase()) || 
              productName.toLowerCase().includes(orderProductSelect.options[i].value.toLowerCase())) {
            orderProductSelect.selectedIndex = i;
            break;
          }
        }

        populateMaterialsForProduct(orderProductSelect.value);

        if (productName.includes("Spanduk")) {
          orderDimensionsInput.value = "3 x 1 meter";
          orderQuantityInput.value = "1 lembar";
        } else if (productName.includes("Undangan")) {
          orderDimensionsInput.value = "Standar Lipat 2";
          orderQuantityInput.value = "200 pcs";
        } else if (productName.includes("Kartu")) {
          orderDimensionsInput.value = "9 x 5.5 cm";
          orderQuantityInput.value = "2 box";
        } else if (productName.includes("Stiker")) {
          orderDimensionsInput.value = "Diameter 5 cm (Bulat)";
          orderQuantityInput.value = "5 lembar A3+";
        } else if (productName.includes("Brosur") || productName.includes("Kalender")) {
          orderDimensionsInput.value = "Ukuran A5";
          orderQuantityInput.value = "1 rim";
        } else if (productName.includes("Kaos") || productName.includes("Merchandise") || productName.includes("Mug")) {
          orderDimensionsInput.value = "Custom Mug / Merchandise";
          orderQuantityInput.value = "2 pcs";
        } else if (productName.includes("Foto") && productName.includes("Bingkai")) {
          orderDimensionsInput.value = "Ukuran 10R (20 x 25 cm)";
          orderQuantityInput.value = "1 set frame";
        } else if (productName.includes("Polaroid") || productName.includes("Strip")) {
          orderDimensionsInput.value = "Ukuran Polaroid 2R / Strip 3 Frame";
          orderQuantityInput.value = "25 pcs";
        } else if (productName.includes("Lanyard") || productName.includes("ID Card")) {
          orderDimensionsInput.value = "Tali 2cm + Card PVC 85.6x54mm";
          orderQuantityInput.value = "5 set";
        } else if (productName.includes("Menu")) {
          orderDimensionsInput.value = "Ukuran A4 Glossy";
          orderQuantityInput.value = "5 lembar";
        } else if (productName.includes("Kado")) {
          orderDimensionsInput.value = "Ukuran 32 x 48 cm";
          orderQuantityInput.value = "10 lembar";
        }

        updateOrderMessagePreview();

        const orderSec = document.getElementById("order-section");
        if (orderSec) {
          orderSec.scrollIntoView({ behavior: "smooth" });
        }

        showToast(`Produk "${productName}" siap dipesan!`);
      }
    });
  });

  // =============================================================================
  // 9B. SERVICE CATALOG FILTER TABS
  // =============================================================================
  const serviceFilterBtns = document.querySelectorAll(".service-filter-btn");
  const serviceCards = document.querySelectorAll("#servicesGrid .service-card");

  serviceFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      serviceFilterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      serviceCards.forEach(card => {
        const cardCategory = card.getAttribute("data-category") || "";

        if (filterVal === "all" || cardCategory.includes(filterVal)) {
          card.classList.remove("hide");
        } else {
          card.classList.add("hide");
        }
      });
    });
  });

  // =============================================================================
  // 10. PORTFOLIO FILTER TABS
  // =============================================================================
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filterVal = btn.getAttribute("data-filter");

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category") || "";

        if (filterVal === "all" || itemCategory.includes(filterVal)) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
    });
  });

  // =============================================================================
  // 10B. PORTFOLIO LIGHTBOX MODAL
  // =============================================================================
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const lightboxOrderBtn = document.getElementById("lightboxOrderBtn");
  const zoomableElements = document.querySelectorAll(".portfolio-media-compact, .portfolio-img-zoomable");

  let currentLightboxProduct = "";

  zoomableElements.forEach(elem => {
    elem.addEventListener("click", (e) => {
      e.stopPropagation();
      const img = elem.tagName === "IMG" ? elem : elem.querySelector("img");
      if (!img || !lightboxModal) return;

      const src = img.getAttribute("src");
      const title = img.getAttribute("data-title") || img.getAttribute("alt") || "Hasil Cetak Percetakan";
      const desc = img.getAttribute("data-desc") || "Hasil pengerjaan percetakan presisi berkualitas tinggi oleh LY PRINTING.";
      currentLightboxProduct = img.getAttribute("data-product") || "Spanduk & Banner";

      lightboxImg.src = src;
      lightboxImg.alt = title;
      lightboxTitle.textContent = title;
      lightboxDesc.textContent = desc;

      lightboxModal.classList.add("active");
      lightboxModal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove("active");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal && lightboxModal.classList.contains("active")) {
      closeLightbox();
    }
  });

  if (lightboxOrderBtn) {
    lightboxOrderBtn.addEventListener("click", () => {
      closeLightbox();
      if (orderProductSelect && currentLightboxProduct) {
        for (let i = 0; i < orderProductSelect.options.length; i++) {
          if (orderProductSelect.options[i].value.toLowerCase().includes(currentLightboxProduct.toLowerCase()) ||
              currentLightboxProduct.toLowerCase().includes(orderProductSelect.options[i].value.toLowerCase())) {
            orderProductSelect.selectedIndex = i;
            break;
          }
        }
        populateMaterialsForProduct(orderProductSelect.value);
        updateOrderMessagePreview();
      }
      const orderSec = document.getElementById("order-section");
      if (orderSec) {
        orderSec.scrollIntoView({ behavior: "smooth" });
      }
      showToast(`Produk dipilih! Formulir pesanan telah disesuaikan.`);
    });
  }

  // =============================================================================
  // 11. FAQ ACCORDION
  // =============================================================================
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach(faq => faq.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // =============================================================================
  // 12. FLOATING WHATSAPP BUTTON & QUICK CHIP ACTIONS
  // =============================================================================
  if (floatingWaBtn) {
    floatingWaBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      waPopupCard.classList.toggle("open");
    });
  }

  if (closeWaPopup) {
    closeWaPopup.addEventListener("click", (e) => {
      e.stopPropagation();
      waPopupCard.classList.remove("open");
    });
  }

  document.addEventListener("click", (e) => {
    if (waPopupCard && waPopupCard.classList.contains("open")) {
      if (!waPopupCard.contains(e.target) && e.target !== floatingWaBtn) {
        waPopupCard.classList.remove("open");
      }
    }
  });

  quickChips.forEach(chip => {
    chip.addEventListener("click", (e) => {
      const msg = chip.getAttribute("data-msg");
      if (msg) {
        e.preventDefault();
        const waUrl = `https://wa.me/${LY_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, "_blank");
        waPopupCard.classList.remove("open");
      } else if (chip.id === "chipFillForm") {
        waPopupCard.classList.remove("open");
      }
    });
  });

  // =============================================================================
  // 13. TOAST NOTIFICATION UTILITY
  // =============================================================================
  let toastTimer;
  function showToast(msg) {
    if (!toastNotification || !toastMessage) return;

    toastMessage.textContent = msg;
    toastNotification.classList.add("show");

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove("show");
    }, 3200);
  }
});
