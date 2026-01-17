// Additional 130 Mobile Products Data
const additionalMobiles = [
    // Products 21-40
    { name: "Samsung Galaxy S24 Plus", price: "₹94,999", desc: "6.7-inch AMOLED, Exynos 2400, 50MP camera", rating: 4.5, reviews: 1876 },
    { name: "iPhone 16", price: "₹79,900", desc: "A18 chip, 48MP camera, Dynamic Island", rating: 5, reviews: 3456 },
    { name: "Xiaomi 14 Pro", price: "₹79,999", desc: "Leica camera, Snapdragon 8 Gen 3, 120W charging", rating: 4.5, reviews: 1234 },
    { name: "OnePlus 14", price: "₹59,999", desc: "Hasselblad camera, 100W charging, OxygenOS", rating: 4, reviews: 2134 },
    { name: "Google Pixel 10", price: "₹74,999", desc: "Tensor G4, AI features, clean Android", rating: 4.5, reviews: 1567 },
    { name: "Samsung Galaxy Z Flip6", price: "₹99,999", desc: "Foldable flip, compact design, flagship specs", rating: 4.5, reviews: 987, badge: "Foldable" },
    { name: "Vivo X100 Pro", price: "₹89,999", desc: "Zeiss optics, Dimensity 9300, 120W fast charge", rating: 4.5, reviews: 876 },
    { name: "Oppo Find X6 Pro", price: "₹84,999", desc: "Hasselblad camera, Snapdragon 8 Gen 2", rating: 4, reviews: 765 },
    { name: "Realme GT 6", price: "₹44,999", desc: "Snapdragon 8s Gen 3, 120W charging", rating: 4, reviews: 1456, badge: "Best Value" },
    { name: "Nothing Phone 2a Plus", price: "₹29,999", desc: "Dimensity 7350, Glyph interface, 50MP camera", rating: 4, reviews: 2345 },
    { name: "Motorola Edge 50 Ultra", price: "₹59,999", desc: "Snapdragon 8s Gen 3, 125W charging, wooden back", rating: 4.5, reviews: 654 },
    { name: "Honor Magic 6 Pro", price: "₹79,999", desc: "Snapdragon 8 Gen 3, AI features, 5600mAh battery", rating: 4.5, reviews: 543 },
    { name: "Sony Xperia 1 VI", price: "₹1,09,999", desc: "4K OLED, Zeiss optics, pro camera features", rating: 4.5, reviews: 432, badge: "Pro" },
    { name: "ASUS Zenfone 11 Ultra", price: "₹74,999", desc: "Snapdragon 8 Gen 3, compact flagship, gimbal camera", rating: 4, reviews: 876 },
    { name: "iQOO 13", price: "₹59,999", desc: "Snapdragon 8 Elite, gaming features, 120W charging", rating: 4.5, reviews: 1234, badge: "Gaming" },
    { name: "Poco F6 Pro", price: "₹34,999", desc: "Snapdragon 8 Gen 2, 120W charging, AMOLED display", rating: 4, reviews: 2345, badge: "Best Value" },
    { name: "Redmi K80 Pro", price: "₹39,999", desc: "Snapdragon 8 Gen 3, 120W charging, flagship killer", rating: 4.5, reviews: 1876 },
    { name: "Samsung Galaxy A55", price: "₹39,999", desc: "Exynos 1480, 50MP OIS camera, IP67 rating", rating: 4, reviews: 2134 },
    { name: "iPhone 15 Pro Max", price: "₹1,49,900", desc: "A17 Pro, titanium design, 5x telephoto", rating: 5, reviews: 4567 },
    { name: "OnePlus 13R", price: "₹42,999", desc: "Snapdragon 8 Gen 2, 100W charging, value flagship", rating: 4, reviews: 1567, badge: "Popular" },
    
    // Products 41-60
    { name: "Vivo V40 Pro", price: "₹49,999", desc: "Dimensity 9200+, Zeiss camera, 80W charging", rating: 4, reviews: 987 },
    { name: "Oppo Reno 12 Pro", price: "₹44,999", desc: "Dimensity 9200+, 80W charging, curved display", rating: 4, reviews: 876 },
    { name: "Realme 13 Pro+", price: "₹34,999", desc: "Snapdragon 7s Gen 2, 120W charging, 200MP camera", rating: 4, reviews: 1456 },
    { name: "Xiaomi 13T Pro", price: "₹49,999", desc: "Dimensity 9200+, Leica camera, 120W charging", rating: 4.5, reviews: 1234 },
    { name: "Samsung Galaxy S23 FE", price: "₹49,999", desc: "Exynos 2200, 50MP camera, flagship features", rating: 4, reviews: 2134 },
    { name: "Google Pixel 9", price: "₹79,999", desc: "Tensor G4, AI photography, 7 years updates", rating: 4.5, reviews: 1876 },
    { name: "Motorola Razr 40 Ultra", price: "₹89,999", desc: "Foldable flip, Snapdragon 8+ Gen 1, large cover screen", rating: 4, reviews: 654, badge: "Foldable" },
    { name: "Honor 200 Pro", price: "₹57,999", desc: "Snapdragon 8s Gen 3, 100MP camera, 100W charging", rating: 4, reviews: 543 },
    { name: "Nothing Phone 2", price: "₹44,999", desc: "Snapdragon 8+ Gen 1, Glyph interface, unique design", rating: 4.5, reviews: 2345 },
    { name: "iQOO 12", price: "₹52,999", desc: "Snapdragon 8 Gen 3, 120W charging, gaming phone", rating: 4.5, reviews: 1234, badge: "Gaming" },
    { name: "Poco X7 Pro", price: "₹27,999", desc: "Dimensity 8300 Ultra, 67W charging, AMOLED", rating: 4, reviews: 2876, badge: "Best Value" },
    { name: "Redmi Note 14 Pro+", price: "₹29,999", desc: "Snapdragon 7s Gen 3, 200MP camera, 120W charging", rating: 4, reviews: 3456 },
    { name: "Samsung Galaxy M55", price: "₹29,999", desc: "Snapdragon 7 Gen 1, 50MP camera, 45W charging", rating: 4, reviews: 1876 },
    { name: "Vivo T3 Ultra", price: "₹35,999", desc: "Dimensity 9200+, 80W charging, curved AMOLED", rating: 4, reviews: 987 },
    { name: "Oppo F27 Pro+", price: "₹32,999", desc: "Dimensity 7050, 67W charging, slim design", rating: 4, reviews: 876 },
    { name: "Realme GT Neo 6", price: "₹29,999", desc: "Snapdragon 7+ Gen 3, 120W charging, gaming mode", rating: 4, reviews: 1567 },
    { name: "OnePlus Nord 4", price: "₹29,999", desc: "Snapdragon 7+ Gen 3, 100W charging, metal unibody", rating: 4.5, reviews: 2134 },
    { name: "Xiaomi 14", price: "₹69,999", desc: "Snapdragon 8 Gen 3, Leica camera, compact flagship", rating: 4.5, reviews: 1456 },
    { name: "Google Pixel 9 Pro", price: "₹1,09,999", desc: "Tensor G4, AI features, pro camera system", rating: 5, reviews: 1234 },
    { name: "Samsung Galaxy Z Fold6", price: "₹1,64,999", desc: "Large foldable, S Pen support, multitasking king", rating: 4.5, reviews: 876, badge: "Foldable" },
    
    // Products 61-80
    { name: "iPhone 15 Pro", price: "₹1,29,900", desc: "A17 Pro, titanium, action button, USB-C", rating: 5, reviews: 3876 },
    { name: "Motorola Edge 50 Pro", price: "₹34,999", desc: "Snapdragon 7 Gen 3, 125W charging, curved display", rating: 4, reviews: 654 },
    { name: "Honor Magic 6", price: "₹54,999", desc: "Snapdragon 8 Gen 3, AI features, 5450mAh battery", rating: 4.5, reviews: 543 },
    { name: "ASUS ROG Phone 7", price: "₹79,999", desc: "Snapdragon 8 Gen 2, gaming beast, 165Hz display", rating: 4.5, reviews: 987, badge: "Gaming" },
    { name: "Sony Xperia 5 V", price: "₹84,999", desc: "Compact flagship, Zeiss optics, 4K HDR OLED", rating: 4, reviews: 432 },
    { name: "Vivo X90 Pro", price: "₹84,999", desc: "Dimensity 9200, Zeiss camera, 120W charging", rating: 4.5, reviews: 876 },
    { name: "Oppo Find N3 Flip", price: "₹94,999", desc: "Foldable flip, Dimensity 9200, large cover screen", rating: 4, reviews: 543, badge: "Foldable" },
    { name: "Realme GT 5 Pro", price: "₹42,999", desc: "Snapdragon 8 Gen 3, 100W charging, flagship killer", rating: 4, reviews: 1567 },
    { name: "Nothing Phone 1", price: "₹32,999", desc: "Snapdragon 778G+, Glyph interface, unique design", rating: 4, reviews: 2876 },
    { name: "iQOO Neo 9 Pro", price: "₹39,999", desc: "Snapdragon 8 Gen 2, 120W charging, gaming features", rating: 4.5, reviews: 1234 },
    { name: "Poco F5 Pro", price: "₹29,999", desc: "Snapdragon 8+ Gen 1, 67W charging, AMOLED", rating: 4, reviews: 2345, badge: "Best Value" },
    { name: "Redmi K70 Pro", price: "₹34,999", desc: "Snapdragon 8 Gen 2, 120W charging, 2K display", rating: 4.5, reviews: 1876 },
    { name: "Samsung Galaxy A35", price: "₹30,999", desc: "Exynos 1380, 50MP camera, IP67 rating", rating: 4, reviews: 2134 },
    { name: "OnePlus 12R", price: "₹39,999", desc: "Snapdragon 8 Gen 2, 100W charging, value flagship", rating: 4.5, reviews: 1987 },
    { name: "Vivo V30 Pro", price: "₹41,999", desc: "Dimensity 8200, Aura Light, 80W charging", rating: 4, reviews: 987 },
    { name: "Oppo Reno 11 Pro", price: "₹39,999", desc: "Dimensity 8200, 80W charging, curved display", rating: 4, reviews: 876 },
    { name: "Realme 12 Pro+", price: "₹29,999", desc: "Snapdragon 7s Gen 2, 67W charging, 200MP camera", rating: 4, reviews: 1567 },
    { name: "Xiaomi 13 Pro", price: "₹79,999", desc: "Snapdragon 8 Gen 2, Leica camera, 120W charging", rating: 4.5, reviews: 1456 },
    { name: "Google Pixel 8 Pro", price: "₹1,06,999", desc: "Tensor G3, AI features, 7 years updates", rating: 4.5, reviews: 1234 },
    { name: "Samsung Galaxy S23 Ultra", price: "₹1,24,999", desc: "Snapdragon 8 Gen 2, 200MP camera, S Pen", rating: 5, reviews: 3456 },
    
    // Products 81-100
    { name: "iPhone 15 Plus", price: "₹89,900", desc: "A16 Bionic, 48MP camera, large display", rating: 4.5, reviews: 2876 },
    { name: "Motorola Edge 40 Pro", price: "₹49,999", desc: "Snapdragon 8 Gen 2, 125W charging, curved display", rating: 4, reviews: 654 },
    { name: "Honor 90 Pro", price: "₹44,999", desc: "Snapdragon 8+ Gen 1, 200MP camera, 90W charging", rating: 4, reviews: 543 },
    { name: "ASUS Zenfone 10", price: "₹62,999", desc: "Snapdragon 8 Gen 2, compact flagship, gimbal camera", rating: 4.5, reviews: 876 },
    { name: "Sony Xperia 10 V", price: "₹44,999", desc: "Snapdragon 695, compact design, 5000mAh battery", rating: 4, reviews: 432 },
    { name: "Vivo X80 Pro", price: "₹79,999", desc: "Snapdragon 8 Gen 1, Zeiss camera, 80W charging", rating: 4.5, reviews: 987 },
    { name: "Oppo Find X5 Pro", price: "₹69,999", desc: "Snapdragon 8 Gen 1, Hasselblad camera, 80W charging", rating: 4, reviews: 765 },
    { name: "Realme GT 3", price: "₹42,999", desc: "Snapdragon 8+ Gen 1, 240W charging, fastest charging", rating: 4.5, reviews: 1567 },
    { name: "iQOO 11", price: "₹59,999", desc: "Snapdragon 8 Gen 2, 120W charging, gaming phone", rating: 4.5, reviews: 1234, badge: "Gaming" },
    { name: "Poco X6 Pro", price: "₹26,999", desc: "Dimensity 8300 Ultra, 67W charging, AMOLED", rating: 4, reviews: 2876, badge: "Best Value" },
    { name: "Redmi Note 13 Pro+", price: "₹31,999", desc: "Dimensity 7200 Ultra, 200MP camera, 120W charging", rating: 4, reviews: 3456 },
    { name: "Samsung Galaxy M54", price: "₹26,999", desc: "Exynos 1380, 108MP camera, 25W charging", rating: 4, reviews: 1876 },
    { name: "OnePlus Nord 3", price: "₹33,999", desc: "Dimensity 9000, 80W charging, flagship killer", rating: 4.5, reviews: 2134 },
    { name: "Vivo T2 Pro", price: "₹24,999", desc: "Dimensity 7200, 66W charging, curved AMOLED", rating: 4, reviews: 987 },
    { name: "Oppo F25 Pro", price: "₹23,999", desc: "Dimensity 7050, 67W charging, slim design", rating: 4, reviews: 876 },
    { name: "Realme 11 Pro+", price: "₹27,999", desc: "Dimensity 7050, 100W charging, 200MP camera", rating: 4, reviews: 1567 },
    { name: "Xiaomi 12 Pro", price: "₹62,999", desc: "Snapdragon 8 Gen 1, 120W charging, 2K display", rating: 4.5, reviews: 1456 },
    { name: "Google Pixel 8", price: "₹75,999", desc: "Tensor G3, AI features, clean Android", rating: 4.5, reviews: 1234 },
    { name: "Samsung Galaxy S23", price: "₹74,999", desc: "Snapdragon 8 Gen 2, 50MP camera, compact flagship", rating: 4.5, reviews: 2876 },
    { name: "iPhone 15", price: "₹79,900", desc: "A16 Bionic, 48MP camera, Dynamic Island", rating: 5, reviews: 3876 },
    
    // Products 101-120
    { name: "Motorola Edge 40", price: "₹29,999", desc: "Dimensity 8020, 68W charging, curved display", rating: 4, reviews: 654 },
    { name: "Honor 80 Pro", price: "₹34,999", desc: "Snapdragon 8+ Gen 1, 160MP camera, 66W charging", rating: 4, reviews: 543 },
    { name: "Vivo Y200 Pro", price: "₹24,999", desc: "Snapdragon 695, 44W charging, AMOLED display", rating: 4, reviews: 987 },
    { name: "Oppo A3 Pro", price: "₹19,999", desc: "Dimensity 6300, 45W charging, IP69 rating", rating: 4, reviews: 1234 },
    { name: "Realme Narzo 70 Pro", price: "₹19,999", desc: "Dimensity 7050, 67W charging, 50MP camera", rating: 4, reviews: 1567, badge: "Best Value" },
    { name: "iQOO Z9 Pro", price: "₹24,999", desc: "Snapdragon 7 Gen 3, 80W charging, AMOLED", rating: 4, reviews: 1234 },
    { name: "Poco M6 Pro", price: "₹14,999", desc: "Dimensity 7200 Ultra, 67W charging, 64MP camera", rating: 4, reviews: 2345 },
    { name: "Redmi 13 Pro", price: "₹18,999", desc: "Snapdragon 7s Gen 2, 67W charging, 200MP camera", rating: 4, reviews: 1876 },
    { name: "Samsung Galaxy F55", price: "₹26,999", desc: "Snapdragon 7 Gen 1, 50MP camera, 45W charging", rating: 4, reviews: 1234 },
    { name: "OnePlus Nord CE 4", price: "₹24,999", desc: "Snapdragon 7 Gen 3, 100W charging, AMOLED", rating: 4, reviews: 1567 },
    { name: "Vivo Y100", price: "₹23,999", desc: "Snapdragon 695, 80W charging, AMOLED display", rating: 4, reviews: 987 },
    { name: "Oppo K12", price: "₹25,999", desc: "Snapdragon 7 Gen 3, 100W charging, 50MP camera", rating: 4, reviews: 876 },
    { name: "Realme P1 Pro", price: "₹21,999", desc: "Snapdragon 7s Gen 2, 45W charging, curved display", rating: 4, reviews: 1234 },
    { name: "Xiaomi Redmi Note 13", price: "₹17,999", desc: "Snapdragon 685, 33W charging, 108MP camera", rating: 4, reviews: 2876 },
    { name: "Samsung Galaxy A25", price: "₹22,999", desc: "Exynos 1280, 50MP camera, IP67 rating", rating: 4, reviews: 1567 },
    { name: "Motorola G85", price: "₹17,999", desc: "Snapdragon 6s Gen 3, 33W charging, pOLED display", rating: 4, reviews: 654 },
    { name: "Honor X9b", price: "₹25,999", desc: "Snapdragon 6 Gen 1, 108MP camera, 5800mAh battery", rating: 4, reviews: 543 },
    { name: "Vivo T3", price: "₹19,999", desc: "Dimensity 7200, 44W charging, AMOLED display", rating: 4, reviews: 987 },
    { name: "Oppo A79", price: "₹18,999", desc: "Dimensity 6020, 33W charging, 50MP camera", rating: 4, reviews: 876 },
    { name: "Realme Narzo 60 Pro", price: "₹23,999", desc: "Dimensity 7050, 100W charging, 100MP camera", rating: 4, reviews: 1234 },
    
    // Products 121-140
    { name: "iQOO Z9", price: "₹19,999", desc: "Dimensity 7200, 44W charging, AMOLED display", rating: 4, reviews: 1567 },
    { name: "Poco X6", price: "₹21,999", desc: "Snapdragon 7s Gen 2, 67W charging, AMOLED", rating: 4, reviews: 2345, badge: "Best Value" },
    { name: "Redmi 12", price: "₹10,999", desc: "Snapdragon 4 Gen 2, 18W charging, 50MP camera", rating: 4, reviews: 3456 },
    { name: "Samsung Galaxy M35", price: "₹19,999", desc: "Exynos 1380, 50MP camera, 25W charging", rating: 4, reviews: 1876 },
    { name: "OnePlus Nord CE 3", price: "₹26,999", desc: "Snapdragon 782G, 80W charging, AMOLED", rating: 4, reviews: 1234 },
    { name: "Vivo Y56", price: "₹19,999", desc: "Dimensity 700, 44W charging, 50MP camera", rating: 4, reviews: 987 },
    { name: "Oppo A98", price: "₹18,999", desc: "Snapdragon 695, 67W charging, 64MP camera", rating: 4, reviews: 876 },
    { name: "Realme 10 Pro+", price: "₹24,999", desc: "Dimensity 1080, 67W charging, curved AMOLED", rating: 4, reviews: 1567 },
    { name: "Xiaomi 11T Pro", price: "₹39,999", desc: "Snapdragon 888, 120W charging, 108MP camera", rating: 4.5, reviews: 1456 },
    { name: "Samsung Galaxy A54", price: "₹38,999", desc: "Exynos 1380, 50MP OIS camera, IP67 rating", rating: 4, reviews: 2134 },
    { name: "Motorola G73", price: "₹18,999", desc: "Dimensity 930, 30W charging, 50MP camera", rating: 4, reviews: 654 },
    { name: "Honor X8b", price: "₹16,999", desc: "Snapdragon 680, 35W charging, 108MP camera", rating: 4, reviews: 543 },
    { name: "Vivo Y27", price: "₹15,999", desc: "MediaTek Helio G85, 44W charging, 50MP camera", rating: 4, reviews: 987 },
    { name: "Oppo A58", price: "₹15,999", desc: "Dimensity 700, 33W charging, 50MP camera", rating: 4, reviews: 876 },
    { name: "Realme C55", price: "₹13,999", desc: "MediaTek Helio G88, 33W charging, 64MP camera", rating: 4, reviews: 1234 },
    { name: "iQOO Z7 Pro", price: "₹23,999", desc: "Dimensity 7200, 66W charging, curved AMOLED", rating: 4, reviews: 1567 },
    { name: "Poco C65", price: "₹8,999", desc: "MediaTek Helio G85, 18W charging, 50MP camera", rating: 4, reviews: 2876, badge: "Budget" },
    { name: "Redmi A3", price: "₹7,999", desc: "MediaTek Helio G36, 10W charging, 8MP camera", rating: 3.5, reviews: 3456, badge: "Budget" },
    { name: "Samsung Galaxy A15", price: "₹16,999", desc: "Dimensity 6100+, 25W charging, 50MP camera", rating: 4, reviews: 1876 },
    { name: "Infinix Note 40 Pro", price: "₹21,999", desc: "Dimensity 7020, 45W charging, 108MP camera", rating: 4, reviews: 1234 }
];

// Function to create product HTML
function createProductHTML(product, index) {
    const stars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    let starsHTML = '';
    for (let i = 0; i < stars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(product.rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    const badgeHTML = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';
    
    return `
        <div class="product-box" data-product-index="${index}">
            ${badgeHTML}
            <button class="product-quick-view-btn" onclick="openQuickView(${index})">
                <i class="fas fa-eye"></i> Quick View
            </button>
            <div class="product-image-box">
                <img src="https://images.unsplash.com/photo-${index % 2 === 0 ? '1511707171634-5f897ff02aa9' : '1598327105666-5b89351aff97'}?w=400&h=300&fit=crop" alt="${product.name}" class="product-image-real">
            </div>
            <div class="product-info">
                <div class="product-rating">
                    ${starsHTML}
                    <span>(${product.reviews})</span>
                </div>
                <h3>${product.name}</h3>
                <p class="product-description">${product.desc}</p>
                <div class="price-box">
                    <span class="product-price">${product.price}</span>
                </div>
                <button class="buy-button"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
            </div>
        </div>
    `;
}

// Function to open quick view modal
function openQuickView(index) {
    const product = additionalMobiles[index];
    const modal = document.getElementById('quickViewModal');
    const modalBody = document.getElementById('quickViewBody');
    
    const stars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;
    let starsHTML = '';
    for (let i = 0; i < stars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(product.rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    const badgeHTML = product.badge ? `<div class="quick-view-badge ${product.badge.toLowerCase()}">${product.badge}</div>` : '';
    
    // Extract specs from description
    const specs = product.desc.split(', ');
    let specsHTML = '';
    specs.forEach((spec, i) => {
        const labels = ['Processor', 'Camera', 'Charging', 'Display', 'Battery', 'Storage'];
        specsHTML += `
            <div class="spec-item">
                <span class="spec-label">${labels[i] || 'Feature'}</span>
                <span class="spec-value">${spec}</span>
            </div>
        `;
    });
    
    const productImage = `https://images.unsplash.com/photo-${index % 2 === 0 ? '1511707171634-5f897ff02aa9' : '1598327105666-5b89351aff97'}?w=600&h=600&fit=crop`;
    
    modalBody.innerHTML = `
        <div class="quick-view-image">
            <img src="${productImage}" alt="${product.name}">
        </div>
        <div class="quick-view-info">
            ${badgeHTML}
            <h2>${product.name}</h2>
            <div class="quick-view-rating">
                ${starsHTML}
                <span>${product.rating} (${product.reviews} reviews)</span>
            </div>
            <div class="quick-view-price">${product.price}</div>
            <p class="quick-view-description">${product.desc}</p>
            <div class="quick-view-specs">
                <h3>Specifications</h3>
                ${specsHTML}
            </div>
            <div class="quick-view-actions">
                <button class="quick-view-btn primary" onclick="addToCart('${product.name}', '${product.price}', '${product.desc}', '${productImage}'); closeQuickView();">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
                <button class="quick-view-btn secondary" onclick="closeQuickView()">
                    <i class="fas fa-times"></i> Close
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// Function to close quick view modal
function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    modal.classList.remove('active');
}

// OPTIMIZED: Add products to the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const productGrid = document.querySelector('.product-grid');
    if (productGrid) {
        // Use DocumentFragment for better performance
        const fragment = document.createDocumentFragment();
        const tempDiv = document.createElement('div');
        
        // Batch render products
        additionalMobiles.forEach((product, index) => {
            tempDiv.innerHTML = createProductHTML(product, index);
            fragment.appendChild(tempDiv.firstElementChild);
        });
        
        productGrid.appendChild(fragment);
        
        // Defer non-critical operations
        requestAnimationFrame(() => {
            storeOriginalPrices();
            updateAllPrices();
            
            // Use event delegation instead of individual listeners
            productGrid.addEventListener('click', function(e) {
                const buyBtn = e.target.closest('.buy-button');
                if (buyBtn) {
                    e.stopPropagation();
                    const productBox = buyBtn.closest('.product-box');
                    const productIndex = parseInt(productBox.dataset.productIndex);
                    
                    if (additionalMobiles[productIndex]) {
                        const product = additionalMobiles[productIndex];
                        const img = productBox.querySelector('.product-image-real');
                        addToCart(product.name, product.price, product.desc, img ? img.src : '');
                    }
                }
            });
        });
    }
});

// Success notification
function showSuccessNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}
