// Wearly - Products JavaScript

// Product Data
const products = [
    // Pants
    { id: 1, name: 'Classic Denim Jeans', category: 'pant', price: 49.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop' },
    { id: 2, name: 'Slim Fit Chinos', category: 'pant', price: 39.99, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=600&fit=crop' },
    { id: 3, name: 'Cargo Pants', category: 'pant', price: 44.99, image: 'https://images.unsplash.com/photo-1506629905607-cc2c0c0b0a5a?w=600&h=600&fit=crop' },
    { id: 4, name: 'Athletic Joggers', category: 'pant', price: 34.99, image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=600&fit=crop' },
    { id: 5, name: 'Formal Trousers', category: 'pant', price: 54.99, image: 'https://images.unsplash.com/photo-1594938291221-94f18cbbd3a0?w=600&h=600&fit=crop' },
    { id: 6, name: 'Wide Leg Pants', category: 'pant', price: 42.99, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop' },
    
    // Shirts
    { id: 7, name: 'Formal Dress Shirt', category: 'shirt', price: 29.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop' },
    { id: 8, name: 'Casual Button Shirt', category: 'shirt', price: 24.99, image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop' },
    { id: 9, name: 'Plaid Shirt', category: 'shirt', price: 27.99, image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=600&fit=crop' },
    { id: 10, name: 'Linen Shirt', category: 'shirt', price: 32.99, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=600&fit=crop' },
    { id: 11, name: 'Oxford Shirt', category: 'shirt', price: 35.99, image: 'https://images.unsplash.com/photo-1602810316250-f627e84c6dfe?w=600&h=600&fit=crop' },
    { id: 12, name: 'Denim Shirt', category: 'shirt', price: 28.99, image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    
    // T-shirts
    { id: 13, name: 'Classic White T-Shirt', category: 't-shirt', price: 14.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 14, name: 'V-Neck T-Shirt', category: 't-shirt', price: 16.99, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop' },
    { id: 15, name: 'Polo T-Shirt', category: 't-shirt', price: 19.99, image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop' },
    { id: 16, name: 'Graphic Print T-Shirt', category: 't-shirt', price: 22.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop' },
    { id: 17, name: 'Striped T-Shirt', category: 't-shirt', price: 18.99, image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 18, name: 'Long Sleeve T-Shirt', category: 't-shirt', price: 21.99, image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

let currentCategory = 'all';

// Initialize Products Page
document.addEventListener('DOMContentLoaded', function() {
    // Check for category filter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        currentCategory = categoryParam;
        // Set active filter button
        const filterBtn = document.querySelector(`[data-category="${categoryParam}"]`);
        if (filterBtn) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            filterBtn.classList.add('active');
        }
    }
    
    renderProducts();
    setupFilterButtons();
    updateCartCount();
});

// Setup Filter Buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current category
            currentCategory = this.getAttribute('data-category');
            
            // Render filtered products
            renderProducts();
        });
    });
}

// Render Products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    // Filter products by category
    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);
    
    // Clear grid
    productsGrid.innerHTML = '';
    
    // Render each product
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <div class="product-actions">
                <button class="btn btn-outline buy-now-btn" data-product-id="${product.id}">Buy Now</button>
                <button class="btn add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
    
    // Add event listeners
    const buyNowBtn = card.querySelector('.buy-now-btn');
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    
    buyNowBtn.addEventListener('click', () => handleBuyNow(product));
    addToCartBtn.addEventListener('click', () => handleAddToCart(product));
    
    return card;
}

// Handle Buy Now
function handleBuyNow(product) {
    // Add to cart and redirect (in real app, this would go to checkout)
    handleAddToCart(product);
    alert(`Added ${product.name} to cart! Proceeding to checkout...`);
    // In a real app: window.location.href = 'checkout.html';
}

// Handle Add to Cart
function handleAddToCart(product) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: product.category,
            quantity: 1
        });
    }
    
    saveCart(cart);
    
    // Show feedback
    showCartNotification(`${product.name} added to cart!`);
}

// Show Cart Notification
function showCartNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add slide animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
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
