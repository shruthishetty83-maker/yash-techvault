// ============================================
// ELECTROHUB PERFORMANCE OPTIMIZATION UTILITIES
// ============================================

// 1. DEBOUNCE - Prevents excessive function calls
function debounce(func, wait = 300) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 2. THROTTLE - Limits function execution rate
function throttle(func, limit = 100) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 3. REQUEST ANIMATION FRAME THROTTLE - Smooth animations
function rafThrottle(func) {
    let rafId = null;
    return function(...args) {
        if (rafId === null) {
            rafId = requestAnimationFrame(() => {
                func.apply(this, args);
                rafId = null;
            });
        }
    };
}

// 4. BATCH DOM UPDATES - Reduce reflows
class DOMBatcher {
    constructor() {
        this.queue = [];
        this.isScheduled = false;
    }

    add(callback) {
        this.queue.push(callback);
        if (!this.isScheduled) {
            this.isScheduled = true;
            requestAnimationFrame(() => this.flush());
        }
    }

    flush() {
        const fragment = document.createDocumentFragment();
        this.queue.forEach(callback => callback(fragment));
        this.queue = [];
        this.isScheduled = false;
    }
}

// 5. VIRTUAL SCROLLING - Load only visible items
class VirtualScroller {
    constructor(container, items, renderItem, itemHeight = 300) {
        this.container = container;
        this.items = items;
        this.renderItem = renderItem;
        this.itemHeight = itemHeight;
        this.visibleStart = 0;
        this.visibleEnd = 0;
        this.scrollTop = 0;
        
        this.init();
    }

    init() {
        this.container.style.position = 'relative';
        this.viewport = document.createElement('div');
        this.viewport.style.cssText = 'overflow-y: auto; height: 100%;';
        
        this.spacer = document.createElement('div');
        this.spacer.style.height = `${this.items.length * this.itemHeight}px`;
        
        this.content = document.createElement('div');
        this.content.style.cssText = 'position: absolute; top: 0; left: 0; right: 0;';
        
        this.viewport.appendChild(this.spacer);
        this.viewport.appendChild(this.content);
        this.container.appendChild(this.viewport);
        
        this.viewport.addEventListener('scroll', throttle(() => this.onScroll(), 50));
        this.render();
    }

    onScroll() {
        this.scrollTop = this.viewport.scrollTop;
        this.render();
    }

    render() {
        const viewportHeight = this.viewport.clientHeight;
        const start = Math.floor(this.scrollTop / this.itemHeight);
        const end = Math.ceil((this.scrollTop + viewportHeight) / this.itemHeight);
        
        // Add buffer for smooth scrolling
        this.visibleStart = Math.max(0, start - 5);
        this.visibleEnd = Math.min(this.items.length, end + 5);
        
        this.content.innerHTML = '';
        this.content.style.transform = `translateY(${this.visibleStart * this.itemHeight}px)`;
        
        const fragment = document.createDocumentFragment();
        for (let i = this.visibleStart; i < this.visibleEnd; i++) {
            const item = this.renderItem(this.items[i], i);
            fragment.appendChild(item);
        }
        this.content.appendChild(fragment);
    }

    updateItems(newItems) {
        this.items = newItems;
        this.spacer.style.height = `${this.items.length * this.itemHeight}px`;
        this.render();
    }
}

// 6. SMART CACHE - Cache with expiration
class SmartCache {
    constructor(maxAge = 300000) { // 5 minutes default
        this.cache = new Map();
        this.maxAge = maxAge;
    }

    set(key, value) {
        this.cache.set(key, {
            value,
            timestamp: Date.now()
        });
    }

    get(key) {
        const item = this.cache.get(key);
        if (!item) return null;
        
        if (Date.now() - item.timestamp > this.maxAge) {
            this.cache.delete(key);
            return null;
        }
        
        return item.value;
    }

    clear() {
        this.cache.clear();
    }

    has(key) {
        return this.get(key) !== null;
    }
}

// 7. IMAGE LAZY LOADER - Optimized image loading
class ImageLazyLoader {
    constructor(options = {}) {
        this.options = {
            rootMargin: '50px',
            threshold: 0.01,
            ...options
        };
        this.observer = null;
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                this.options
            );
        }
    }

    observe(images) {
        if (!this.observer) {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => this.loadImage(img));
            return;
        }

        images.forEach(img => {
            if (img.dataset.src) {
                this.observer.observe(img);
            }
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.loadImage(entry.target);
                this.observer.unobserve(entry.target);
            }
        });
    }

    loadImage(img) {
        const src = img.dataset.src;
        if (!src) return;

        img.style.opacity = '0.5';
        
        const tempImg = new Image();
        tempImg.onload = () => {
            img.src = src;
            img.style.opacity = '1';
            img.style.transition = 'opacity 0.3s ease';
            img.removeAttribute('data-src');
        };
        
        tempImg.onerror = () => {
            img.src = 'https://via.placeholder.com/400x300/667eea/ffffff?text=Image+Error';
            img.style.opacity = '1';
        };
        
        tempImg.src = src;
    }
}

// 8. EVENT DELEGATION - Efficient event handling
class EventDelegator {
    constructor(container) {
        this.container = container;
        this.handlers = new Map();
    }

    on(selector, eventType, handler) {
        const key = `${eventType}-${selector}`;
        
        if (!this.handlers.has(key)) {
            const delegatedHandler = (e) => {
                const target = e.target.closest(selector);
                if (target && this.container.contains(target)) {
                    handler.call(target, e);
                }
            };
            
            this.container.addEventListener(eventType, delegatedHandler);
            this.handlers.set(key, delegatedHandler);
        }
    }

    off(selector, eventType) {
        const key = `${eventType}-${selector}`;
        const handler = this.handlers.get(key);
        
        if (handler) {
            this.container.removeEventListener(eventType, handler);
            this.handlers.delete(key);
        }
    }

    destroy() {
        this.handlers.forEach((handler, key) => {
            const [eventType] = key.split('-');
            this.container.removeEventListener(eventType, handler);
        });
        this.handlers.clear();
    }
}

// 9. MEMORY OPTIMIZER - Clean up unused resources
class MemoryOptimizer {
    constructor() {
        this.cleanupTasks = [];
    }

    register(cleanupFn) {
        this.cleanupTasks.push(cleanupFn);
    }

    cleanup() {
        this.cleanupTasks.forEach(task => {
            try {
                task();
            } catch (e) {
                console.warn('Cleanup task failed:', e);
            }
        });
        this.cleanupTasks = [];
    }

    autoCleanup(interval = 60000) { // 1 minute
        setInterval(() => {
            if (document.hidden) {
                this.cleanup();
            }
        }, interval);
    }
}

// 10. PERFORMANCE MONITOR - Track performance metrics
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
    }

    mark(name) {
        if (window.performance && window.performance.mark) {
            performance.mark(name);
        }
    }

    measure(name, startMark, endMark) {
        if (window.performance && window.performance.measure) {
            try {
                performance.measure(name, startMark, endMark);
                const measure = performance.getEntriesByName(name)[0];
                this.metrics[name] = measure.duration;
                return measure.duration;
            } catch (e) {
                console.warn('Performance measure failed:', e);
            }
        }
        return 0;
    }

    getMetrics() {
        return this.metrics;
    }

    logMetrics() {
        console.table(this.metrics);
    }
}

// Export utilities
window.PerformanceUtils = {
    debounce,
    throttle,
    rafThrottle,
    DOMBatcher,
    VirtualScroller,
    SmartCache,
    ImageLazyLoader,
    EventDelegator,
    MemoryOptimizer,
    PerformanceMonitor
};
