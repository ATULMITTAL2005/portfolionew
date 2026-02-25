# Responsive Portfolio Website

A modern, fully responsive portfolio website built with HTML5, CSS3, and JavaScript. Features a clean design, smooth animations, and mobile-first responsive layout.

## Features

### ✨ Core Functionality
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Natural scroll animations between sections
- **Dark Mode Support**: Automatically detects and supports dark mode preference
- **Contact Form**: Interactive form with validation and feedback
- **Lazy Loading**: Images load efficiently with intersection observer
- **Animations**: Smooth fade-in animations on scroll

### 🎨 Design Highlights
- Modern gradient backgrounds
- Smooth transitions and hover effects
- Professional typography and spacing
- Accessible color contrast
- Beautiful card-based layouts
- Icon integration using Font Awesome

### 📱 Sections Included
1. **Navigation Bar** - Fixed header with responsive menu
2. **Hero Section** - Eye-catching introduction with CTA buttons
3. **About** - Personal introduction section
4. **Projects** - Showcase featured projects with tags
5. **Skills** - Categorized technical skills
6. **Contact** - Contact form and information
7. **Footer** - Social links and copyright

## Customization Guide

### 1. Personal Information
Edit the following in `index.html`:
- Replace "Your Name" in the hero section (Line 33)
- Update "Your City, Your Country" in contact section (Line 175)
- Change email: replace `your.email@example.com` (Line 161)
- Update phone number: replace `+1234567890` (Line 166)

### 2. Social Links
Update social media links in the footer section (Lines 183-188):
```html
<a href="your-github-url" title="GitHub"><i class="fab fa-github"></i></a>
<a href="your-linkedin-url" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
<!-- etc. -->
```

### 3. Projects
Modify the projects in `index.html` (Lines 109-147):
- Change project titles
- Update descriptions
- Modify technology tags
- Add links to actual projects

### 4. Skills
Update your skills in `index.html` (Lines 150-172):
- Add/remove skill categories
- Update skill names

### 5. About Section
Edit the about text in `index.html` (Lines 94-96) with your background and experience.

### 6. Colors & Styling
Customize colors in `styles.css` (Lines 2-10):
```css
:root {
    --primary-color: #6366f1;      /* Main color */
    --secondary-color: #8b5cf6;    /* Accent color */
    --text-dark: #1f2937;          /* Text color */
    --text-light: #6b7280;         /* Light text */
    --bg-light: #f9fafb;           /* Light background */
    --bg-white: #ffffff;           /* White background */
    /* ... more variables ... */
}
```

## File Structure

```
portfolio/
├── index.html          # Main HTML file with all content
├── styles.css          # All styling and responsive rules
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icon library (CDN)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 769px - 1199px
- **Mobile**: 480px - 768px
- **Small Mobile**: Below 480px

## Features Implementation

### Mobile Menu
The navigation automatically converts to a hamburger menu on mobile devices. Click to toggle the menu.

### Form Submission
The contact form shows loading and success states. Currently simulates submission - integrate with your backend API by modifying the `contactForm` event listener in `script.js`.

### Animations
- **Scroll Animations**: Elements fade in as they come into view
- **Hover Effects**: Cards lift up on hover
- **Smooth Navigation**: Links scroll smoothly to sections
- **Menu Animation**: Hamburger menu animates when toggled

### Dark Mode
Automatically applies dark mode if user's system preference is set. You can customize dark mode colors in `script.js` lines 158-166.

## Getting Started

1. Open `index.html` in your web browser
2. Customize the content with your information
3. Update the color scheme if desired
4. Connect the contact form to your backend service
5. Deploy to hosting (GitHub Pages, Netlify, Vercel, etc.)

## Integration Tips

### Connect Contact Form
Replace the form submission handler in `script.js` with:
```javascript
const response = await fetch('your-backend-endpoint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

### Add Google Analytics
Add before closing `</body>` tag in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Add Favicon
Add to the `<head>` section:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

## Performance Optimization

- Minify CSS and JavaScript for production
- Optimize images and use modern formats (WebP)
- Enable gzip compression on your server
- Use a CDN for Font Awesome

## Accessibility

The website includes:
- Semantic HTML5 structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus states for interactive elements
- Reduced motion preferences support

## License

This portfolio template is free to use and modify for personal or commercial projects.

## Support

For questions or issues, review the code comments or modify the CSS/JavaScript as needed. The code is well-documented for easy customization.

---

Happy coding! 🚀
