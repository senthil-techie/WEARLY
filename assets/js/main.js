// Wearly - Main JavaScript

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navbarNav = document.getElementById('navbarNav');
    
    if (menuToggle && navbarNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navbarNav.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navbarNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navbarNav.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navbarNav.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navbarNav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navbarNav.classList.remove('active');
            }
        });
    }
    
    // Update cart count
    updateCartCount();
    
    // Set active nav link based on current page
    setActiveNavLink();
});

// Update Cart Count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const cart = getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems || '0';
    }
}

// Get Cart from LocalStorage
function getCart() {
    const cart = localStorage.getItem('wearly_cart');
    return cart ? JSON.parse(cart) : [];
}

// Save Cart to LocalStorage
function saveCart(cart) {
    localStorage.setItem('wearly_cart', JSON.stringify(cart));
    updateCartCount();
}

// Set Active Nav Link
function setActiveNavLink() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (currentPage.includes(href) || 
            (currentPage.endsWith('index.html') && href.includes('index.html')) ||
            (currentPage.endsWith('/') && href.includes('index.html'))) {
            link.classList.add('active');
        }
    });
}

// Smooth Scroll
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Utility: Format Price
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

