// Currency Data
const currencies = {
    'INR': { symbol: '₹', rate: 1, flag: '🇮🇳', name: 'Indian Rupee' },
    'USD': { symbol: '$', rate: 0.012, flag: '🇺🇸', name: 'US Dollar' },
    'EUR': { symbol: '€', rate: 0.011, flag: '🇪🇺', name: 'Euro' },
    'GBP': { symbol: '£', rate: 0.0095, flag: '🇬🇧', name: 'British Pound' },
    'AUD': { symbol: 'A$', rate: 0.018, flag: '🇦🇺', name: 'Australian Dollar' },
    'CAD': { symbol: 'C$', rate: 0.016, flag: '🇨🇦', name: 'Canadian Dollar' },
    'AED': { symbol: 'AED', rate: 0.044, flag: '🇦🇪', name: 'UAE Dirham' },
    'SGD': { symbol: 'S$', rate: 0.016, flag: '🇸🇬', name: 'Singapore Dollar' }
};

let currentCurrency = 'INR';

// Product Data (prices stored in INR)
const products = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        category: "audio",
        price: 2499,
        rating: 4.5,
        reviews: 128,
        icon: "🎧",
        description: "Experience crystal-clear sound with active noise cancellation. Perfect for students attending online classes or enjoying music.",
        features: ["40-hour battery life", "Active Noise Cancellation", "Bluetooth 5.0", "Foldable design", "Built-in microphone"]
    },
    {
        id: 2,
        name: "Smartphone Pro Max",
        category: "mobiles",
        price: 15999,
        rating: 4.8,
        reviews: 256,
        icon: "📱",
        description: "Powerful smartphone with amazing camera and long battery life. Perfect for photography and gaming enthusiasts.",
        features: ["6.5-inch AMOLED display", "48MP triple camera", "5000mAh battery", "128GB storage", "Fast charging"]
    },
    {
        id: 3,
        name: "Gaming Laptop Ultra",
        category: "laptops",
        price: 45999,
        rating: 4.7,
        reviews: 89,
        icon: "💻",
        description: "High-performance laptop for gaming and heavy tasks. Ideal for students doing video editing or programming.",
        features: ["Intel i7 processor", "16GB RAM", "512GB SSD", "NVIDIA GTX graphics", "15.6-inch Full HD display"]
    },
    {
        id: 4,
        name: "Bluetooth Earbuds",
        category: "audio",
        price: 1299,
        rating: 4.3,
        reviews: 342,
        icon: "🎵",
        description: "Compact and stylish earbuds with great sound quality. Perfect for daily commute and workouts.",
        features: ["20-hour playtime", "IPX4 water resistant", "Touch controls", "Charging case included", "Clear call quality"]
    },
    {
        id: 5,
        name: "Budget Smartphone",
        category: "mobiles",
        price: 8999,
        rating: 4.2,
        reviews: 178,
        icon: "📲",
        description: "Affordable smartphone with all essential features. Great choice for students on a budget.",
        features: ["6-inch HD display", "13MP camera", "4000mAh battery", "64GB storage", "Dual SIM support"]
    },
    {
        id: 6,
        name: "Student Laptop",
        category: "laptops",
        price: 28999,
        rating: 4.6,
        reviews: 145,
        icon: "⌨️",
        description: "Lightweight laptop perfect for students. Great for assignments, research, and online classes.",
        features: ["Intel i5 processor", "8GB RAM", "256GB SSD", "14-inch display", "10-hour battery life"]
    },
    {
        id: 7,
        name: "Studio Headphones",
        category: "audio",
        price: 3999,
        rating: 4.9,
        reviews: 67,
        icon: "🎼",
        description: "Professional-grade headphones for music lovers. Exceptional sound quality for the price.",
        features: ["Studio-quality sound", "Comfortable ear pads", "Detachable cable", "Foldable design", "Premium build quality"]
    },
    {
        id: 8,
        name: "5G Smartphone",
        category: "mobiles",
        price: 12499,
        rating: 4.5,
        reviews: 203,
        icon: "📞",
        description: "Future-ready 5G smartphone with blazing-fast internet speeds. Stay connected like never before.",
        features: ["5G connectivity", "6.4-inch display", "32MP selfie camera", "4500mAh battery", "Fast processor"]
    },
    {
        id: 9,
        name: "Ultrabook Pro",
        category: "laptops",
        price: 52999,
        rating: 4.8,
        reviews: 92,
        icon: "🖥️",
        description: "Premium ultrabook with sleek design and powerful performance. Perfect for professionals and serious students.",
        features: ["Intel i7 processor", "16GB RAM", "1TB SSD", "13.3-inch 4K display", "All-day battery life"]
    }
];

// Format price with currency
function formatPrice(price) {
    const currency = currencies[currentCurrency];
    const convertedPrice = price * currency.rate;
    
    if (currentCurrency === 'INR') {
        return `${currency.symbol}${convertedPrice.toLocaleString('en-IN')}`;
    } else {
        return `${currency.symbol}${convertedPrice.toFixed(2)}`;
    }
}

// Change Currency
function changeCurrency(newCurrency) {
    currentCurrency = newCurrency;
    localStorage.setItem('selectedCurrency', newCurrency);
    
    // Update currency selector display
    updateCurrencyDisplay();
    
    // Re-render products with new currency
    const isHomePage = window.location.pathname.includes('index.html') || window.location.pathname === '/';
    const productsToShow = isHomePage ? products.slice(0, 6) : products;
    renderProducts(productsToShow);
    
    // Close currency dropdown
    closeCurrencyDropdown();
    
    showNotification(`Currency changed to ${currencies[newCurrency].name}`);
}

// Update currency display
function updateCurrencyDisplay() {
    const currencyBtn = document.getElementById('currencyBtn');
    if (currencyBtn) {
        const currency = currencies[currentCurrency];
        currencyBtn.innerHTML = `
            <span class="currency-flag">${currency.flag}</span>
            <span class="currency-code">${currentCurrency}</span>
            <i class="fas fa-chevron-down"></i>
        `;
    }
}

// Toggle currency dropdown
function toggleCurrencyDropdown() {
    const dropdown = document.getElementById('currencyDropdown');
    dropdown.classList.toggle('active');
}

// Close currency dropdown
function closeCurrencyDropdown() {
    const dropdown = document.getElementById('currencyDropdown');
    dropdown.classList.remove('active');
}

let cart = [];
let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Load saved currency
    const savedCurrency = localStorage.getItem('selectedCurrency');
    if (savedCurrency && currencies[savedCurrency]) {
        currentCurrency = savedCurrency;
    }
    updateCurrencyDisplay();
    
    // Only show top 6 products on homepage
    const isHomePage = window.location.pathname.includes('index.html') || window.location.pathname === '/';
    const productsToShow = isHomePage ? products.slice(0, 6) : products;
    renderProducts(productsToShow);
    setupEventListeners();
    addScrollAnimations();
    
    // Start urgency timer
    if (isHomePage) {
        startUrgencyTimer();
        setupExitIntent();
    }
    
    // Close currency dropdown when clicking outside
    document.addEventListener('click', function(e) {
        const currencySelector = document.querySelector('.currency-selector');
        if (currencySelector && !currencySelector.contains(e.target)) {
            closeCurrencyDropdown();
        }
    });
});

// Render Products
function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-category', product.category);
        
        const stars = '⭐'.repeat(Math.floor(product.rating));
        
        productCard.innerHTML = `
            <div class="stock-badge">In Stock</div>
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <div class="product-rating">${stars} ${product.rating}</div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-reviews">${product.reviews} reviews</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        
        // Add click event to open modal
        productCard.addEventListener('click', function(e) {
            if (!e.target.classList.contains('add-to-cart-btn')) {
                openProductModal(product.id);
            }
        });
        
        productsGrid.appendChild(productCard);
    });
}

// Filter Products by Category
function filterProducts(category) {
    currentCategory = category;
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);
    
    renderProducts(filteredProducts);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    
    // Show notification
    showNotification(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
    
    // Animate cart icon
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 300);
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        font-weight: bold;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Open Product Modal
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const modalBody = document.getElementById('modalBody');
    
    const stars = '⭐'.repeat(Math.floor(product.rating));
    
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-product-image">${product.icon}</div>
            <div class="modal-product-info">
                <h2>${product.name}</h2>
                <div class="modal-product-rating">${stars} ${product.rating} (${product.reviews} reviews)</div>
                <div class="modal-product-price">${formatPrice(product.price)}</div>
                <p class="modal-product-description">${product.description}</p>
                <div class="modal-product-features">
                    <h3>Key Features:</h3>
                    <ul>
                        ${product.features.map(feature => `<li><i class="fas fa-check-circle"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
                <button class="modal-add-to-cart" onclick="addToCart(${product.id}); closeModal();">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('active');
}

// Search Products
function searchProducts(query) {
    const searchResults = document.getElementById('searchResults');
    
    if (!query) {
        searchResults.innerHTML = '';
        return;
    }
    
    const results = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p style="padding: 20px; text-align: center; color: #666;">No products found</p>';
        return;
    }
    
    searchResults.innerHTML = results.map(product => `
        <div class="search-result-item" onclick="openProductModal(${product.id}); closeSearch();">
            <div class="search-result-icon">${product.icon}</div>
            <div class="search-result-info">
                <h4>${product.name}</h4>
                <p>${formatPrice(product.price)}</p>
            </div>
        </div>
    `).join('');
}

// Close Search
function closeSearch() {
    const searchOverlay = document.getElementById('searchOverlay');
    searchOverlay.classList.remove('active');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

// Scroll Animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Animate sections on scroll
    document.querySelectorAll('.product-card, .testimonial-card, .offer-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        icon.className = document.body.classList.contains('dark-mode') 
            ? 'fas fa-sun' 
            : 'fas fa-moon';
    });
    
    // Search Icon
    const searchIcon = document.getElementById('searchIcon');
    const searchOverlay = document.getElementById('searchOverlay');
    const searchClose = document.getElementById('searchClose');
    const searchInput = document.getElementById('searchInput');
    
    searchIcon.addEventListener('click', function() {
        searchOverlay.classList.add('active');
        searchInput.focus();
    });
    
    searchClose.addEventListener('click', closeSearch);
    
    searchInput.addEventListener('input', function() {
        searchProducts(this.value);
    });
    
    // Close search on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSearch();
            closeModal();
        }
    });
    
    // Modal Close
    document.getElementById('modalClose').addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    document.getElementById('productModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    // Close search when clicking outside
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            closeSearch();
        }
    });
    
    // Category Buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            categoryButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterProducts(this.getAttribute('data-category'));
        });
    });
    
    // CTA Button - check if it exists (only on home page)
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton && ctaButton.tagName === 'BUTTON') {
        ctaButton.addEventListener('click', function() {
            window.location.href = 'products.html';
        });
    }
    
    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('🎉 Thank you for subscribing! Check your email for exclusive deals!');
        this.reset();
    });
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Thank you! We will contact you soon! 🎉');
        this.reset();
    });
    
    // Smooth Scroll for Nav Links (only for hash links)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Cart Icon Click
    document.querySelector('.cart-icon').addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Your cart is empty! Start shopping! 🛒');
        } else {
            let cartItems = 'Your Cart:\n\n';
            let total = 0;
            cart.forEach(item => {
                cartItems += `${item.icon} ${item.name} - ${formatPrice(item.price)}\n`;
            });
            cartItems += '\n💡 Tip: Click on products to see more details!';
            alert(cartItems);
        }
    });
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


// Urgency Timer
function startUrgencyTimer() {
    const timerElement = document.getElementById('urgencyTimer');
    if (!timerElement) return;
    
    let hours = 2;
    let minutes = 45;
    let seconds = 0;
    
    setInterval(() => {
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours < 0) {
            hours = 2;
            minutes = 45;
            seconds = 0;
        }
        
        timerElement.textContent = `Ends in: ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

// Hero Search Bar
const heroSearchInput = document.getElementById('heroSearchInput');
const heroSearchBtn = document.getElementById('heroSearchBtn');

if (heroSearchInput && heroSearchBtn) {
    heroSearchBtn.addEventListener('click', function() {
        const query = heroSearchInput.value;
        if (query) {
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
    });
    
    heroSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value;
            if (query) {
                window.location.href = `products.html?search=${encodeURIComponent(query)}`;
            }
        }
    });
}

// Exit Intent Popup
function setupExitIntent() {
    let exitIntentShown = false;
    
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY <= 0 && !exitIntentShown) {
            showExitPopup();
            exitIntentShown = true;
        }
    });
}

function showExitPopup() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'exit-popup-overlay active';
    
    // Create popup
    const popup = document.createElement('div');
    popup.className = 'exit-popup active';
    popup.innerHTML = `
        <button class="exit-popup-close" onclick="closeExitPopup()">×</button>
        <h3>Wait! Don't Miss Out! 🎁</h3>
        <p>Get 10% OFF on your first order! Subscribe to our newsletter for exclusive deals.</p>
        <input type="email" placeholder="Enter your email" id="exitEmail">
        <button onclick="submitExitEmail()">Get My Discount</button>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    
    overlay.addEventListener('click', closeExitPopup);
}

function closeExitPopup() {
    const overlay = document.querySelector('.exit-popup-overlay');
    const popup = document.querySelector('.exit-popup');
    if (overlay) overlay.remove();
    if (popup) popup.remove();
}

function submitExitEmail() {
    const email = document.getElementById('exitEmail').value;
    if (email) {
        showNotification('🎉 Success! Check your email for your 10% discount code!');
        closeExitPopup();
    }
}

// Sticky Cart Button
window.addEventListener('scroll', function() {
    const stickyCart = document.querySelector('.sticky-cart');
    if (!stickyCart) {
        // Create sticky cart if it doesn't exist
        const cart = document.createElement('div');
        cart.className = 'sticky-cart';
        cart.innerHTML = '<i class="fas fa-shopping-cart"></i> <span>View Cart</span>';
        cart.addEventListener('click', function() {
            document.querySelector('.cart-icon').click();
        });
        document.body.appendChild(cart);
    }
    
    const scrollPosition = window.scrollY;
    const stickyCartElement = document.querySelector('.sticky-cart');
    
    if (scrollPosition > 500) {
        stickyCartElement.classList.add('show');
    } else {
        stickyCartElement.classList.remove('show');
    }
});


// Hero Slider Auto-Slide
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (dots[i]) dots[i].classList.remove('active');
    });
    
    if (slides[index]) {
        slides[index].classList.add('active');
        if (dots[index]) dots[index].classList.add('active');
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
    
    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
}

// Navbar Search
const navbarSearchInput = document.getElementById('navbarSearchInput');
const navbarSearchBtn = document.getElementById('navbarSearchBtn');

if (navbarSearchInput && navbarSearchBtn) {
    navbarSearchBtn.addEventListener('click', function() {
        const query = navbarSearchInput.value;
        if (query) {
            window.location.href = `products.html?search=${encodeURIComponent(query)}`;
        }
    });
    
    navbarSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value;
            if (query) {
                window.location.href = `products.html?search=${encodeURIComponent(query)}`;
            }
        }
    });
}
