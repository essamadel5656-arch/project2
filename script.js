// Shared catalog data powers the collection, home slider, and product detail pages.
const productCatalog = [
  { id: "dress-1", category: "wedding", folder: "فساتين زفاف حريمي", image: "1.jpg", name: "فستان ملكي", description: "فستان زفاف ملكي بتطريزات ناعمة وتنورة واسعة لإطلالة مميزة في ليلة العمر." },
  { id: "dress-2", category: "wedding", folder: "فساتين زفاف حريمي", image: "2.jpg", name: "فستان لؤلؤ", description: "تصميم رومانسي بتفاصيل لامعة وقصة أنيقة تبرز جمال إطلالتك." },
  { id: "dress-3", category: "wedding", folder: "فساتين زفاف حريمي", image: "3.jpg", name: "فستان كلاسيك", description: "فستان كلاسيكي بتطريز دقيق وأكمام شفافة لأسلوب أنثوي راقٍ." },
  { id: "dress-4", category: "wedding", folder: "فساتين زفاف حريمي", image: "00ed44450544ed32c851ab97980ba74f.avif", name: "فستان كريستال", description: "تصميم سهرة مطرز بالخرز اللامع لإطلالة ملفتة وأنيقة." },
  { id: "dress-5", category: "wedding", folder: "فساتين زفاف حريمي", image: "02bcbf08591658ea69204b1cd34c30ff.jpg", name: "فستان رومانسي", description: "فستان زفاف بتفاصيل ورود ناعمة وتدرجات أنيقة تناسب ليلة استثنائية." },
  { id: "dress-6", category: "wedding", folder: "فساتين زفاف حريمي", image: "18c58c4c935d574503d889115bdff29b.avif", name: "فستان روز", description: "تصميم ناعم مزين بتفاصيل وردية لافتة وقصة انسيابية." },
  { id: "dress-7", category: "wedding", folder: "فساتين زفاف حريمي", image: "342ae3f46297fe9d51677d70d9a84662.jpg", name: "فستان إليانا", description: "فستان زفاف أبيض مزين بتطريزات رقيقة وتفاصيل أنثوية." },
  { id: "dress-8", category: "wedding", folder: "فساتين زفاف حريمي", image: "4c1994bfabedfe5a40d4e593e35062ad.avif", name: "فستان نادين", description: "فستان سهرة بتطريزات ورود أنيقة ولمسات داكنة مميزة." },
  { id: "dress-9", category: "wedding", folder: "فساتين زفاف حريمي", image: "4f1db3cb75bad49733c1191fb7d09d53.jpg", name: "فستان لونا", description: "فستان زفاف فاخر مطرز بتفاصيل لامعة وتنورة ملكية." },
  { id: "dress-10", category: "wedding", folder: "فساتين زفاف حريمي", image: "8477b4bd45d4e3c826ce160b34c1c145.jpg", name: "فستان سماوي", description: "تصميم زفاف بلون هادئ وقصة عصرية تناسب العروس الباحثة عن التميز." },
  { id: "dress-11", category: "wedding", folder: "فساتين زفاف حريمي", image: "9db220924610084df14e027c2ae6b87a.jpg", name: "فستان أمارا", description: "فستان زفاف مطرز بتفاصيل براقة وقصة واسعة لأجواء ملكية." },
  { id: "dress-12", category: "wedding", folder: "فساتين زفاف حريمي", image: "bbfec155c50cf2e07f9e3cc7c1b5d779.jpg", name: "فستان فينتج", description: "تصميم مستوحى من الأناقة الكلاسيكية يجمع التفاصيل الناعمة مع قصة مميزة." },
  { id: "dress-13", category: "wedding", folder: "فساتين زفاف حريمي", image: "download.png", name: "فستان إيلارا", description: "فستان أوف شولدر أنيق بقصة انسيابية وتفاصيل عصرية." },
  { id: "suit-1", category: "suits", folder: "بدل رجالي", image: "1.jpg", name: "بدلة توكسيدو", description: "بدلة عريس سوداء كلاسيكية بفيونكة أنيقة وتفاصيل رسمية متكاملة." },
  { id: "suit-2", category: "suits", folder: "بدل رجالي", image: "2.jpg", name: "بدلة مخططة", description: "بدلة رجالي داكنة بخطوط رفيعة وإكسسوارات أنيقة لإطلالة مختلفة." },
  { id: "suit-3", category: "suits", folder: "بدل رجالي", image: "3.jpg", name: "بدلة العريس", description: "بدلة سوداء أنيقة بلمسات عنابية وتفاصيل مصممة للمناسبات الخاصة." },
  { id: "suit-4", category: "suits", folder: "بدل رجالي", image: "1579c84c89af8bcb5fe782ac49c62dad.jpg", name: "بدلة كلاسيك", description: "إطلالة رسمية متكاملة بقصة كلاسيكية أنيقة." },
  { id: "suit-5", category: "suits", folder: "بدل رجالي", image: "250aee23584fec2bd33ce45c92207e2e.jpg", name: "بدلة رويال", description: "بدلة عريس بتصميم مميز وخامات أنيقة لمظهر واثق في ليلة العمر." },
  { id: "suit-6", category: "suits", folder: "بدل رجالي", image: "34d3202f70c01b2d0efc16c6bdd15a14.jpg", name: "بدلة فيرا", description: "بدلة سهرة بتفاصيل لافتة وتصميم يناسب المناسبات الرسمية." },
  { id: "suit-7", category: "suits", folder: "بدل رجالي", image: "9255400063a9c543f6485327fae9acb3.jpg", name: "بدلة مونارك", description: "تصميم أنيق بتفاصيل رسمية دقيقة وإطلالة عريس متكاملة." },
  { id: "suit-8", category: "suits", folder: "بدل رجالي", image: "99c6c8eb4509fbf52067f12b11e3c281.jpg", name: "بدلة أونيكس", description: "بدلة داكنة أنيقة بقصة عصرية وإكسسوارات تكمل المظهر." },
  { id: "suit-9", category: "suits", folder: "بدل رجالي", image: "ab0db281a08a4fa63203452855a10dce.jpg", name: "بدلة فينتج", description: "بدلة سوداء رسمية بتفاصيل أنيقة مستوحاة من الطراز الكلاسيكي." },
  { id: "suit-10", category: "suits", folder: "بدل رجالي", image: "download (1).png", name: "بدلة مونتي", description: "توكسيدو أسود بلمسات رمادية لإطلالة راقية ولافتة." },
  { id: "suit-11", category: "suits", folder: "بدل رجالي", image: "download (2).png", name: "بدلة إيليت", description: "بدلة عريس أنيقة بتصميم رسمي يليق بلحظاتك المهمة." },
  { id: "suit-12", category: "suits", folder: "بدل رجالي", image: "download.png", name: "بدلة كلاسيك", description: "إطلالة توكسيدو متكاملة بقصة أنيقة وتفاصيل رسمية." }
];

// Suggested rental prices in EGP; promo prices are reserved for the home slider looks.
const productPrices = {
  "dress-1": { price: 14500, salePrice: 11900 },
  "dress-2": { price: 13200, salePrice: 10800 },
  "dress-3": { price: 12500, salePrice: 9900 },
  "dress-4": { price: 11800 },
  "dress-5": { price: 12700 },
  "dress-6": { price: 9900 },
  "dress-7": { price: 11200 },
  "dress-8": { price: 8600 },
  "dress-9": { price: 13800 },
  "dress-10": { price: 10500 },
  "dress-11": { price: 15200 },
  "dress-12": { price: 9400 },
  "dress-13": { price: 12100 },
  "suit-1": { price: 8500, salePrice: 6900 },
  "suit-2": { price: 8200, salePrice: 6600 },
  "suit-3": { price: 7900, salePrice: 6400 },
  "suit-4": { price: 5800 },
  "suit-5": { price: 8800 },
  "suit-6": { price: 7200 },
  "suit-7": { price: 7600 },
  "suit-8": { price: 8100 },
  "suit-9": { price: 6900 },
  "suit-10": { price: 9200 },
  "suit-11": { price: 9500 },
  "suit-12": { price: 6200 }
};

const productImageUrl = (product) => encodeURI(`${product.folder}/${product.image}`);
const productCategoryName = (product) => product.category === "wedding" ? "فساتين زفاف" : "بدل زفاف رجالي";
const formatPrice = (price) => `${new Intl.NumberFormat("ar-EG").format(price)} ج.م`;
const productPrice = (product) => productPrices[product.id];
const discountPercent = (product) => {
  const prices = productPrice(product);
  return prices?.salePrice ? Math.round((1 - prices.salePrice / prices.price) * 100) : 0;
};

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const themeStorageKey = "lavender-atelier-theme";
  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(isDark));
      themeToggle.setAttribute("aria-label", isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن");
      themeToggle.title = isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن";
      themeToggle.querySelector("span").textContent = isDark ? "☀" : "☾";
    }
  };

  let savedTheme = "light";
  try {
    savedTheme = localStorage.getItem(themeStorageKey) === "dark" ? "dark" : "light";
  } catch {
    // Theme switching remains available for the current page if storage is blocked.
  }
  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      try {
        localStorage.setItem(themeStorageKey, nextTheme);
      } catch {
        // Keep the selected theme for this page when storage is unavailable.
      }
    });
  }

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "فتح القائمة" : "إغلاق القائمة");
      mainNav.classList.toggle("is-open", !isOpen);
    });
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "فتح القائمة");
        mainNav.classList.remove("is-open");
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || menuToggle.getAttribute("aria-expanded") !== "true") return;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "فتح القائمة");
      mainNav.classList.remove("is-open");
      menuToggle.focus();
    });
  }

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const productGrid = document.querySelector("[data-product-grid]");
  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const productCount = document.querySelector("[data-product-count]");
  const emptyState = document.querySelector(".empty-state");
  const searchInput = document.querySelector("[data-product-search]");
  const sortSelect = document.querySelector("[data-product-sort]");
  let selectedFilter = "all";

  if (productGrid) {
    productCatalog.forEach((product) => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.dataset.category = product.category;
      card.dataset.productId = product.id;
      card.dataset.search = `${product.name} ${productCategoryName(product)}`.toLocaleLowerCase("ar");
      const prices = productPrice(product);
      if (prices?.salePrice) card.classList.add("on-sale");

      const link = document.createElement("a");
      link.className = "product-image";
      link.href = `product.html?id=${encodeURIComponent(product.id)}`;
      const image = document.createElement("img");
      image.src = productImageUrl(product);
      image.alt = `${productCategoryName(product)}: ${product.name}`;
      image.loading = "lazy";
      image.decoding = "async";
      if (prices?.salePrice) {
        const saleBadge = document.createElement("span");
        saleBadge.className = "sale-badge";
        saleBadge.textContent = `خصم ${discountPercent(product)}٪`;
        link.append(saleBadge);
      }
      const action = document.createElement("span");
      action.className = "product-action";
      action.setAttribute("aria-hidden", "true");
      action.textContent = "＋";
      link.append(image, action);

      const info = document.createElement("div");
      info.className = "product-info";
      const nameBlock = document.createElement("div");
      const category = document.createElement("span");
      category.className = "product-category";
      category.textContent = productCategoryName(product);
      const name = document.createElement("h3");
      name.textContent = product.name;
      nameBlock.append(category, name);
      const price = document.createElement("span");
      price.className = "product-price";
      if (prices?.salePrice) {
        const oldPrice = document.createElement("del");
        oldPrice.textContent = formatPrice(prices.price);
        const currentPrice = document.createElement("strong");
        currentPrice.textContent = formatPrice(prices.salePrice);
        const salePrice = document.createElement("span");
        salePrice.className = "sale-price";
        salePrice.append(oldPrice, currentPrice);
        price.append(salePrice);
      } else {
        price.textContent = formatPrice(prices.price);
      }
      info.append(nameBlock, price);
      card.append(link, info);
      productGrid.append(card);
    });

    const filterProducts = () => {
      let visibleCount = 0;
      const searchTerm = searchInput?.value.trim().toLocaleLowerCase("ar") ?? "";
      filterButtons.forEach((button) => {
        const isActive = button.dataset.filter === selectedFilter;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });
      productGrid.querySelectorAll(".product-card").forEach((card) => {
        const matchesFilter = selectedFilter === "all" || card.dataset.category === selectedFilter;
        const matchesSearch = !searchTerm || card.dataset.search.includes(searchTerm);
        const isVisible = matchesFilter && matchesSearch;
        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });
      if (productCount) productCount.textContent = String(visibleCount);
      if (emptyState) {
        emptyState.hidden = visibleCount > 0;
        emptyState.textContent = searchTerm ? "لم نعثر على تصميم بهذا الاسم. جربي كلمة أخرى." : "لا توجد تصاميم في هذا القسم حالياً.";
      }

      document.querySelectorAll("[data-filter-count]").forEach((count) => {
        const category = count.dataset.filterCount;
        const amount = category === "all"
          ? productGrid.querySelectorAll(".product-card").length
          : productGrid.querySelectorAll(`.product-card[data-category="${category}"]`).length;
        count.textContent = String(amount);
      });
    };

    const initialHash = window.location.hash;
    selectedFilter = initialHash === "#dresses" ? "wedding" : initialHash === "#suits" ? "suits" : "all";
    filterProducts();
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        selectedFilter = button.dataset.filter;
        filterProducts();
      });
    });
    searchInput?.addEventListener("input", filterProducts);
    sortSelect?.addEventListener("change", () => {
      const sorted = [...productCatalog];
      if (sortSelect.value === "name") {
        sorted.sort((a, b) => a.name.localeCompare(b.name, "ar"));
      } else if (sortSelect.value === "category") {
        sorted.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name, "ar"));
      }
      const cards = new Map([...productGrid.children].map((card) => [card.dataset.productId, card]));
      sorted.forEach((product) => {
        const card = cards.get(product.id);
        if (card) productGrid.append(card);
      });
    });
    document.addEventListener("keydown", (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k" && searchInput) {
        event.preventDefault();
        searchInput.focus();
      }
      if (event.key === "Escape" && searchInput === document.activeElement) {
        searchInput.value = "";
        filterProducts();
        searchInput.blur();
      }
    });
  }

  const heroSlides = document.querySelector("[data-hero-slides]");
  const heroContent = document.querySelector("[data-hero-content]");
  const dotsContainer = document.querySelector("[data-slider-dots]");
  if (heroSlides && heroContent && dotsContainer) {
    const featuredProducts = ["dress-1", "dress-2", "dress-3", "suit-1", "suit-2", "suit-3"]
      .map((id) => productCatalog.find((product) => product.id === id))
      .filter(Boolean);
    const dots = [];
    featuredProducts.forEach((product, index) => {
      const backdrop = document.createElement("img");
      backdrop.className = "hero-slide-backdrop";
      backdrop.src = productImageUrl(product);
      backdrop.alt = "";
      backdrop.setAttribute("aria-hidden", "true");
      heroSlides.append(backdrop);

      const image = document.createElement("img");
      image.className = "hero-slide-image";
      image.src = productImageUrl(product);
      image.alt = "";
      image.setAttribute("aria-hidden", "true");
      heroSlides.append(image);

      const dot = document.createElement("button");
      dot.className = "slider-dot";
      dot.type = "button";
      dot.setAttribute("aria-label", `عرض التصميم ${index + 1}: ${product.name}`);
      dot.addEventListener("click", () => showSlide(index));
      dotsContainer.append(dot);
      dots.push(dot);
    });

    let activeSlide = 0;
    let intervalId;
    let userPaused = false;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const slideImages = [...heroSlides.querySelectorAll(".hero-slide-image")];
    const slideBackdrops = [...heroSlides.querySelectorAll(".hero-slide-backdrop")];

    const showSlide = (index) => {
      activeSlide = (index + featuredProducts.length) % featuredProducts.length;
      const product = featuredProducts[activeSlide];
      slideImages.forEach((image, imageIndex) => {
        const isActive = imageIndex === activeSlide;
        image.classList.toggle("is-active", isActive);
        image.setAttribute("aria-hidden", String(!isActive));
      });
      slideBackdrops.forEach((image, imageIndex) => {
        image.classList.toggle("is-active", imageIndex === activeSlide);
      });
      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeSlide;
        dot.classList.toggle("active", isActive);
        if (isActive) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });

      heroContent.replaceChildren();
      const eyebrow = document.createElement("p");
      eyebrow.className = "eyebrow light-eyebrow";
      eyebrow.textContent = product.category === "wedding" ? "لحظتكِ تستحق إطلالة استثنائية" : "أناقة العريس تبدأ من هنا";
      const title = document.createElement("h1");
      title.textContent = product.name;
      const copy = document.createElement("p");
      copy.className = "hero-copy";
      copy.textContent = "أناقة مختارة بعناية لتكون جزءاً من أجمل ذكرياتكما.";
      const priceOffer = document.createElement("div");
      priceOffer.className = "hero-price-offer";
      const prices = productPrice(product);
      if (prices.salePrice) {
        const saleBadge = document.createElement("span");
        saleBadge.className = "hero-sale-badge";
        saleBadge.textContent = `عرض خاص · خصم ${discountPercent(product)}٪`;
        const oldPrice = document.createElement("del");
        oldPrice.textContent = formatPrice(prices.price);
        const currentPrice = document.createElement("strong");
        currentPrice.textContent = formatPrice(prices.salePrice);
        priceOffer.append(saleBadge, oldPrice, currentPrice);
      } else {
        const currentPrice = document.createElement("strong");
        currentPrice.textContent = formatPrice(prices.price);
        priceOffer.append(currentPrice);
      }
      const actions = document.createElement("div");
      actions.className = "hero-actions";
      const productLink = document.createElement("a");
      productLink.className = "button button-gold";
      productLink.href = `product.html?id=${encodeURIComponent(product.id)}`;
      productLink.append("اكتشفي التصميم ");
      const arrow = document.createElement("span");
      arrow.textContent = "←";
      productLink.append(arrow);
      const collectionLink = document.createElement("a");
      collectionLink.className = "text-link light-link";
      collectionLink.href = `collection.html#${product.category === "wedding" ? "dresses" : "suits"}`;
      collectionLink.textContent = "تصفحي المجموعة ↗";
      actions.append(productLink, collectionLink);
      heroContent.append(eyebrow, title, copy, priceOffer, actions);
    };

    const stopAutoplay = () => {
      if (intervalId) window.clearInterval(intervalId);
      intervalId = undefined;
    };
    const startAutoplay = () => {
      stopAutoplay();
      if (!userPaused && !reducedMotion && !slider?.matches(":hover") && !slider?.contains(document.activeElement)) {
        intervalId = window.setInterval(() => showSlide(activeSlide + 1), 5500);
      }
    };

    showSlide(0);
    document.querySelector(".slider-prev")?.addEventListener("click", () => {
      showSlide(activeSlide - 1);
      startAutoplay();
    });
    document.querySelector(".slider-next")?.addEventListener("click", () => {
      showSlide(activeSlide + 1);
      startAutoplay();
    });
    const pauseButton = document.querySelector(".slider-pause");
    pauseButton?.addEventListener("click", () => {
      userPaused = !userPaused;
      pauseButton.setAttribute("aria-pressed", String(userPaused));
      pauseButton.setAttribute("aria-label", userPaused ? "تشغيل العرض التلقائي" : "إيقاف العرض التلقائي");
      pauseButton.textContent = userPaused ? "▶" : "Ⅱ";
      startAutoplay();
    });

    const slider = document.querySelector("#home-slider");
    slider?.addEventListener("mouseenter", stopAutoplay);
    slider?.addEventListener("mouseleave", startAutoplay);
    slider?.addEventListener("focusin", stopAutoplay);
    slider?.addEventListener("focusout", startAutoplay);
    startAutoplay();
  }

  const detailContainer = document.querySelector("[data-product-detail]");
  if (detailContainer) {
    const selectedId = new URLSearchParams(window.location.search).get("id");
    const product = productCatalog.find((item) => item.id === selectedId);
    if (product) {
      const category = productCategoryName(product);
      const image = detailContainer.querySelector("[data-detail-image]");
      image.src = productImageUrl(product);
      image.alt = `${category}: ${product.name}`;
      detailContainer.querySelector("[data-detail-category]").textContent = category;
      detailContainer.querySelector("[data-detail-title]").textContent = product.name;
      detailContainer.querySelector("[data-detail-description]").textContent = product.description;
      const detailPrice = detailContainer.querySelector("[data-detail-price]");
      const prices = productPrice(product);
      detailPrice.replaceChildren();
      const priceLabel = document.createElement("span");
      priceLabel.textContent = "سعر الإيجار";
      const currentPrice = document.createElement("strong");
      currentPrice.textContent = formatPrice(prices.salePrice ?? prices.price);
      detailPrice.append(priceLabel);
      if (prices.salePrice) {
        detailPrice.classList.add("has-sale");
        const oldPrice = document.createElement("del");
        oldPrice.textContent = formatPrice(prices.price);
        const discount = document.createElement("span");
        discount.className = "detail-discount";
        discount.textContent = `خصم ${discountPercent(product)}٪`;
        detailPrice.append(oldPrice, currentPrice, discount);
      } else {
        detailPrice.classList.remove("has-sale");
        detailPrice.append(currentPrice);
      }
      document.querySelector("[data-product-breadcrumb]").textContent = product.name;
      document.querySelector("[data-collection-link]").href = `collection.html#${product.category === "wedding" ? "dresses" : "suits"}`;
      document.querySelector("[data-booking-link]").href = `contact.html?product=${encodeURIComponent(product.id)}#booking`;
      document.title = `${product.name} | أتيليه لافندر`;
    } else {
      detailContainer.hidden = true;
      document.querySelector("[data-product-not-found]").hidden = false;
    }
  }

  const bookingForm = document.querySelector("#booking-form");
  if (bookingForm) {
    const requestedProduct = new URLSearchParams(window.location.search).get("product");
    const selectedProduct = productCatalog.find((product) => product.id === requestedProduct);
    if (selectedProduct) {
      const serviceSelect = bookingForm.querySelector('select[name="service"]');
      const messageInput = bookingForm.querySelector('textarea[name="message"]');
      if (serviceSelect) serviceSelect.value = selectedProduct.category === "wedding" ? "dress" : "suit";
      if (messageInput) messageInput.value = `أرغب في الاستفسار عن ${selectedProduct.name}.`;
    }

    const dateInput = bookingForm.querySelector('input[name="event-date"]');
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    if (dateInput) dateInput.min = localToday;
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!bookingForm.reportValidity()) return;
      const status = bookingForm.querySelector(".form-status");
      if (status) {
        status.textContent = "تم التحقق من بياناتكِ، لكن إرسال الحجز غير متاح حالياً. يرجى التواصل معنا هاتفياً لتأكيد الموعد.";
      }
    });
  }

  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealTargets = document.querySelectorAll(
      ".intro-inner, .categories .section-heading, .category-card, .quote-inner, .testimonials .section-heading, .testimonial-card, .home-cta-inner, .story-image, .story-copy, .center-heading, .value-card, .about-cta-inner, .contact-info, .booking-form, .map-heading, .collection-heading, .filters, .collection-tools, .product-card, .product-detail"
    );
    if (revealTargets.length) {
      document.documentElement.classList.add("reveal-ready");
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.05, rootMargin: "0px 0px -25px 0px" });

      revealTargets.forEach((target) => {
        target.classList.add("reveal-on-scroll");
        revealObserver.observe(target);
      });
    }
  }
});
