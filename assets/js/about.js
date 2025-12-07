// Wearly - About Page JavaScript

// Collection Data
const collections = {
    1: {
        title: 'Spring Collection 2025',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop',
        description: 'Discover our latest spring collection featuring vibrant colors and fresh designs. Perfect for the season with comfortable fabrics and modern styles.',
        details: 'Our Spring Collection 2025 brings together the best of contemporary fashion with seasonal trends. Each piece is carefully crafted using premium materials that ensure both comfort and durability. The collection includes a wide range of colors from soft pastels to bold brights, perfect for expressing your personal style this spring.',
        price: 'Starting from $24.99',
        features: [
            'Premium quality fabrics',
            'Eco-friendly materials',
            'Modern and trendy designs',
            'Comfortable fit for all body types',
            'Machine washable'
        ]
    },
    2: {
        title: 'Summer Essentials',
        image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=500&fit=crop',
        description: 'Stay cool and stylish with our summer essentials. Lightweight materials and breathable fabrics designed for comfort in warm weather.',
        details: 'Beat the heat in style with our Summer Essentials collection. Designed with lightweight, breathable fabrics that keep you comfortable even on the hottest days. The collection features moisture-wicking technology and UV protection, making it perfect for outdoor activities and everyday wear.',
        price: 'Starting from $19.99',
        features: [
            'Lightweight and breathable',
            'Moisture-wicking technology',
            'UV protection',
            'Quick-dry materials',
            'Versatile styling options'
        ]
    },
    3: {
        title: 'Casual Wear',
        image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop',
        description: 'Everyday comfort meets style. Our casual collection offers versatile pieces perfect for any occasion, from work to weekend.',
        details: 'The Casual Wear collection is all about effortless style and everyday comfort. These versatile pieces seamlessly transition from work to weekend, offering the perfect balance of comfort and sophistication. Made with soft, durable fabrics that maintain their shape and color wash after wash.',
        price: 'Starting from $16.99',
        features: [
            'Versatile and comfortable',
            'Easy-care fabrics',
            'Timeless designs',
            'Perfect for everyday wear',
            'Mix and match options'
        ]
    },
    4: {
        title: 'Formal Attire',
        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop',
        description: 'Elegant and sophisticated formal wear for special occasions. Premium quality fabrics and impeccable tailoring for the perfect fit.',
        details: 'Make a lasting impression with our Formal Attire collection. Each piece is crafted with meticulous attention to detail, using premium fabrics and expert tailoring. Perfect for business meetings, formal events, and special occasions. The collection features classic designs with modern touches.',
        price: 'Starting from $49.99',
        features: [
            'Premium quality fabrics',
            'Expert tailoring',
            'Classic and timeless designs',
            'Perfect fit guarantee',
            'Professional appearance'
        ]
    }
};

// Initialize About Page
document.addEventListener('DOMContentLoaded', function() {
    setupViewMoreButtons();
    setupModal();
});

// Setup View More Buttons
function setupViewMoreButtons() {
    const viewMoreButtons = document.querySelectorAll('.view-more-btn');
    
    viewMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const collectionId = this.getAttribute('data-collection');
            openModal(collectionId);
        });
    });
}

// Setup Modal
function setupModal() {
    const modal = document.getElementById('collectionModal');
    const modalClose = document.getElementById('modalClose');
    
    if (!modal || !modalClose) return;
    
    // Close button
    modalClose.addEventListener('click', closeModal);
    
    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Open Modal
function openModal(collectionId) {
    const modal = document.getElementById('collectionModal');
    const collection = collections[collectionId];
    
    if (!modal || !collection) return;
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = collection.title;
    document.getElementById('modalImage').src = collection.image;
    document.getElementById('modalImage').alt = collection.title;
    document.getElementById('modalPrice').textContent = collection.price;
    
    // Populate details
    const modalDetails = document.getElementById('modalDetails');
    modalDetails.innerHTML = `
        <p style="margin-bottom: var(--spacing-md); color: var(--text-secondary); line-height: 1.7;">
            ${collection.details}
        </p>
        <h4 style="margin-top: var(--spacing-lg); margin-bottom: var(--spacing-md);">Key Features:</h4>
        <ul style="list-style: none; padding: 0;">
            ${collection.features.map(feature => `
                <li style="padding: var(--spacing-sm) 0; color: var(--text-secondary);">
                    <i class="fas fa-check" style="color: var(--primary-color); margin-right: var(--spacing-sm);"></i>
                    ${feature}
                </li>
            `).join('')}
        </ul>
    `;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('collectionModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

