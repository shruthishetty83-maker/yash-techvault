// ELECTROHUB DEALS DATA
// Hot deals, flash sales, and special offers

const dealsData = {
    flashSale: [
        {
            name: "Samsung Galaxy S24 Ultra",
            originalPrice: 129999,
            dealPrice: 89999,
            discount: 31,
            image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "Snapdragon 8 Gen 3, 200MP camera, S Pen",
            rating: 4.5,
            reviews: 2456,
            stock: 15,
            totalStock: 50,
            badge: "FLASH SALE"
        },
        {
            name: "Apple AirPods Pro 2",
            originalPrice: 26900,
            dealPrice: 18999,
            discount: 29,
            image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "Active Noise Cancellation, USB-C, Spatial Audio",
            rating: 5,
            reviews: 3456,
            stock: 8,
            totalStock: 30,
            badge: "FLASH SALE"
        },
        {
            name: "Sony WH-1000XM5",
            originalPrice: 29990,
            dealPrice: 19990,
            discount: 33,
            image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "Industry-leading noise cancellation, 30hr battery",
            rating: 4.5,
            reviews: 1876,
            stock: 12,
            totalStock: 40,
            badge: "FLASH SALE"
        },
        {
            name: "MacBook Air M2",
            originalPrice: 119900,
            dealPrice: 89900,
            discount: 25,
            image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
            desc: "13.6\" Liquid Retina, 8GB RAM, 256GB SSD",
            rating: 5,
            reviews: 4567,
            stock: 5,
            totalStock: 20,
            badge: "FLASH SALE"
        }
    ],
    
    smartphoneDeals: [
        {
            name: "iPhone 16 Pro",
            originalPrice: 134900,
            dealPrice: 119900,
            discount: 11,
            image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "A18 Pro, 48MP camera system, titanium design",
            rating: 5,
            reviews: 3456,
            stock: 20,
            totalStock: 50,
            badge: "HOT DEAL"
        },
        {
            name: "OnePlus 15",
            originalPrice: 73000,
            dealPrice: 59999,
            discount: 18,
            image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "Snapdragon powerhouse, 100W charging",
            rating: 4.5,
            reviews: 2134,
            stock: 35,
            totalStock: 80,
            badge: "BEST VALUE"
        },
        {
            name: "Google Pixel 11 Pro",
            originalPrice: 100000,
            dealPrice: 84999,
            discount: 15,
            image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "Tensor G5, Gemini AI, computational photography",
            rating: 5,
            reviews: 1567,
            stock: 18,
            totalStock: 40,
            badge: "AI POWERED"
        },
        {
            name: "Xiaomi 15 Ultra",
            originalPrice: 130000,
            dealPrice: 109999,
            discount: 15,
            image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "Leica quad camera, Snapdragon 8 Elite",
            rating: 4.5,
            reviews: 1876,
            stock: 22,
            totalStock: 60,
            badge: "CAMERA PRO"
        }
    ],
    
    audioDeals: [
        {
            name: "Bose QuietComfort Ultra",
            originalPrice: 32900,
            dealPrice: 24999,
            discount: 24,
            image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "Spatial audio, 24hr battery, premium comfort",
            rating: 4.5,
            reviews: 789,
            stock: 15,
            totalStock: 35,
            badge: "PREMIUM"
        },
        {
            name: "JBL Flip 6",
            originalPrice: 12999,
            dealPrice: 7999,
            discount: 38,
            image: "https://images.pexels.com/photos/1279406/pexels-photo-1279406.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "Portable Bluetooth speaker, IP67 waterproof",
            rating: 4.5,
            reviews: 1567,
            stock: 45,
            totalStock: 100,
            badge: "BEST SELLER"
        },
        {
            name: "Samsung Galaxy Buds3 Pro",
            originalPrice: 19999,
            dealPrice: 14999,
            discount: 25,
            image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "ANC, 360 audio, 30hr battery with case",
            rating: 4,
            reviews: 2345,
            stock: 28,
            totalStock: 70,
            badge: "NEW"
        },
        {
            name: "Beats Studio Pro",
            originalPrice: 34999,
            dealPrice: 26999,
            discount: 23,
            image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
            desc: "Lossless audio, ANC, 40hr battery",
            rating: 4.5,
            reviews: 1234,
            stock: 12,
            totalStock: 30,
            badge: "PREMIUM"
        }
    ],
    
    laptopDeals: [
        {
            name: "Dell XPS 15",
            originalPrice: 189990,
            dealPrice: 149990,
            discount: 21,
            image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
            desc: "Intel i7, 16GB RAM, 512GB SSD, RTX 4050",
            rating: 4.5,
            reviews: 342,
            stock: 8,
            totalStock: 25,
            badge: "CLEARANCE"
        },
        {
            name: "ASUS ROG Zephyrus G16",
            originalPrice: 150000,
            dealPrice: 129999,
            discount: 13,
            image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
            desc: "RTX 5080, Intel Core Ultra 9, 240Hz display",
            rating: 5,
            reviews: 234,
            stock: 6,
            totalStock: 15,
            badge: "GAMING"
        },
        {
            name: "HP Omen Max 16",
            originalPrice: 140000,
            dealPrice: 119999,
            discount: 14,
            image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
            desc: "RTX 5090, upgradable RAM/SSD, gaming beast",
            rating: 4.5,
            reviews: 456,
            stock: 10,
            totalStock: 30,
            badge: "GAMING"
        },
        {
            name: "Acer Swift 3",
            originalPrice: 69990,
            dealPrice: 49990,
            discount: 29,
            image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
            desc: "AMD Ryzen 7, 16GB RAM, 512GB SSD, lightweight",
            rating: 4,
            reviews: 223,
            stock: 25,
            totalStock: 60,
            badge: "BEST VALUE"
        }
    ]
};

// Function to create product HTML with deal styling
function createDealProductHTML(product) {
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

    const savings = product.originalPrice - product.dealPrice;
    const stockPercentage = (product.stock / product.totalStock) * 100;
    
    return `
        <div class="product-box">
            <div class="deal-badge">${product.badge}</div>
            <div class="savings-badge">Save ₹${savings.toLocaleString('en-IN')}</div>
            <div class="product-image-box">
                <img src="${product.image}" alt="${product.name}" class="product-image-real">
            </div>
            <div class="product-info">
                <div class="product-rating">
                    ${starsHTML}
                    <span>(${product.reviews})</span>
                </div>
                <h3>${product.name}</h3>
                <p class="product-description">${product.desc}</p>
                <div class="price-box">
                    <span class="old-price" data-original-price="₹${product.originalPrice}">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                    <span class="product-price" data-original-price="₹${product.dealPrice}">₹${product.dealPrice.toLocaleString('en-IN')}</span>
                    <span class="discount">${product.discount}% OFF</span>
                </div>
                <div class="stock-indicator">
                    Only ${product.stock} left in stock!
                    <div class="stock-bar">
                        <div class="stock-fill" style="width: ${stockPercentage}%"></div>
                    </div>
                </div>
                <button class="buy-button"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
            </div>
        </div>
    `;
}

// Load deals into page
document.addEventListener('DOMContentLoaded', function() {
    // Flash Sale
    const flashSaleGrid = document.getElementById('flashSaleGrid');
    if (flashSaleGrid) {
        dealsData.flashSale.forEach(product => {
            flashSaleGrid.insertAdjacentHTML('beforeend', createDealProductHTML(product));
        });
    }
    
    // Smartphone Deals
    const smartphoneDealsGrid = document.getElementById('smartphoneDealsGrid');
    if (smartphoneDealsGrid) {
        dealsData.smartphoneDeals.forEach(product => {
            smartphoneDealsGrid.insertAdjacentHTML('beforeend', createDealProductHTML(product));
        });
    }
    
    // Audio Deals
    const audioDealsGrid = document.getElementById('audioDealsGrid');
    if (audioDealsGrid) {
        dealsData.audioDeals.forEach(product => {
            audioDealsGrid.insertAdjacentHTML('beforeend', createDealProductHTML(product));
        });
    }
    
    // Laptop Deals
    const laptopDealsGrid = document.getElementById('laptopDealsGrid');
    if (laptopDealsGrid) {
        dealsData.laptopDeals.forEach(product => {
            laptopDealsGrid.insertAdjacentHTML('beforeend', createDealProductHTML(product));
        });
    }
});
