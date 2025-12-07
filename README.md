# WEARLY
 Wearly - Clothing Website  A modern, responsive clothing e-commerce website built with HTML, CSS, and vanilla JavaScript.  
## Features

- **6 Complete Pages**: Home, Products, About, Review, Service, and Login
- **Modern Minimalist Design**: Clean, elegant UI with smooth animations
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Filtering**: Filter products by category (Pant, Shirt, T-shirt)
- **Shopping Cart**: Add to cart functionality with localStorage persistence
- **Modal Popups**: Interactive modals for product/collection details
- **Customer Reviews**: Display customer reviews with star ratings
- **Form Validation**: Login form with email and password validation

## Project Structure

```
WEARLY/
├── index.html                 # Home page
├── pages/
│   ├── products.html         # Products page with filtering
│   ├── about.html            # About page with collections
│   ├── review.html           # Customer reviews page
│   ├── service.html          # Services page
│   └── login.html            # Login page
├── components/
│   ├── navbar.html           # Navigation component
│   └── footer.html           # Footer component
├── assets/
│   ├── css/
│   │   ├── main.css          # Main stylesheet
│   │   ├── components.css    # Component styles
│   │   └── responsive.css    # Responsive design
│   ├── js/
│   │   ├── main.js           # Common functionality
│   │   ├── products.js       # Products page logic
│   │   └── about.js          # About page modals
│   └── images/               # Image assets
└── README.md
```

## Pages Overview

### Home Page
- Hero section with welcome message
- "Shop Now" button linking to products
- Wearly Collections section with three categories (Pant, Shirt, T-shirt)
- Each category card links to products page with filter

### Products Page
- Grid layout of product cards
- Category filter buttons (All, Pant, Shirt, T-shirt)
- Each product shows: image, name, price
- "Buy Now" and "Add to Cart" buttons
- Cart counter in navbar
- Products dynamically rendered from JavaScript

### About Page
- Collection blocks showcasing different dress collections
- "Click to View More" button on each collection
- Modal popup showing detailed information about collections
- Features, pricing, and descriptions

### Review Page
- Grid of customer review cards (8 reviews)
- Each review includes: customer avatar, name, star rating, review text
- Responsive layout

### Service Page
- Service cards: Fast Delivery, 10 Days Replacement, 24×7 Support
- Contact information section
- Get Help section
- Social media links
- Our Branches section with location details
- Login page link

### Login Page
- Clean, centered login form
- Email and password fields
- Form validation
- Error messages for invalid inputs

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, Grid, Flexbox
- **JavaScript (ES6+)**: Vanilla JavaScript for interactivity
- **Font Awesome**: Icons (via CDN)
- **Unsplash**: Product and collection images (via API)

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 480px, 768px, 1024px, 1440px
- Hamburger menu for mobile navigation
- Flexible grid layouts

### Shopping Cart
- Add products to cart
- Cart persists in localStorage
- Cart counter updates across all pages
- Visual feedback when items are added

### Interactive Elements
- Smooth animations and transitions
- Hover effects on cards and buttons
- Modal popups with close functionality
- Filter buttons with active states
- Mobile menu toggle

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Getting Started

1. Clone or download the project
2. Open `index.html` in a web browser
3. No build process or dependencies required - pure HTML/CSS/JS

## Customization

### Colors
Edit CSS variables in `assets/css/main.css`:
```css
:root {
    --primary-color: #000000;
    --secondary-color: #f5f5f5;
    /* ... */
}
```

### Products
Add or modify products in `assets/js/products.js`:
```javascript
const products = [
    { id: 1, name: 'Product Name', category: 'pant', price: 49.99, image: 'url' },
    // ...
];
```

### Collections
Modify collection data in `assets/js/about.js`:
```javascript
const collections = {
    1: {
        title: 'Collection Name',
        // ...
    }
};
```

## License

This project is open source and available for personal and commercial use.

## Contact

For questions or support, please contact: info@wearly.com

---

Built with ❤️ for Wearly
