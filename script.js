// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ============ MOBILE NAVIGATION ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    const spans = navToggle.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        gsap.to(spans[0], { duration: 0.3, rotation: 45, y: 12, x: 10 });
        gsap.to(spans[1], { duration: 0.3, opacity: 0 });
        gsap.to(spans[2], { duration: 0.3, rotation: -45, y: -12, x: 10 });
    } else {
        gsap.to(spans[0], { duration: 0.3, rotation: 0, y: 0, x: 0 });
        gsap.to(spans[1], { duration: 0.3, opacity: 1 });
        gsap.to(spans[2], { duration: 0.3, rotation: 0, y: 0, x: 0 });
    }
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        gsap.to(spans[0], { duration: 0.3, rotation: 0, y: 0, x: 0 });
        gsap.to(spans[1], { duration: 0.3, opacity: 1 });
        gsap.to(spans[2], { duration: 0.3, rotation: 0, y: 0, x: 0 });
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
    }
});

// ============ CONTACT FORM ============
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        try {
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            gsap.to(submitBtn, {
                duration: 0.3,
                scale: 0.95,
            });
            
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            submitBtn.textContent = 'Message Sent!';
            gsap.to(submitBtn, {
                duration: 0.3,
                scale: 1,
                backgroundColor: '#10b981'
            });
            
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                gsap.to(submitBtn, {
                    duration: 0.3,
                    backgroundColor: ''
                });
            }, 3000);
            
        } catch (error) {
            console.error('Error:', error);
            submitBtn.textContent = 'Error sending message';
            submitBtn.style.background = '#ef4444';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }
    });
}

// ============ ADVANCED GSAP ANIMATIONS ============
window.addEventListener('load', () => {
    // Hero title character animation with stagger
    const chars = document.querySelectorAll('.hero-title .char');
    if (chars.length > 0) {
        const tl = gsap.timeline();
        
        tl.from(chars, {
            duration: 0.6,
            opacity: 0,
            y: 50,
            rotationZ: -10,
            stagger: 0.05,
            ease: 'back.out'
        });
    }

    // Tech badges with scale and rotation
    gsap.from('.tech-stack-hero .tech-badge', {
        duration: 0.6,
        opacity: 0,
        scale: 0.6,
        rotationZ: -45,
        stagger: 0.1,
        delay: 0.5,
        ease: 'elastic.out(1.2, 0.75)'
    });

    // Hero buttons stagger animation
    gsap.from('.hero-buttons .btn', {
        duration: 0.7,
        opacity: 0,
        y: 30,
        skewY: 5,
        stagger: 0.15,
        delay: 0.8,
        ease: 'back.out'
    });

    // Tech showcase circles entrance with complex animation
    const techCircles = gsap.utils.toArray('.tech-circle');
    gsap.from(techCircles, {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        rotationZ: 180,
        stagger: 0.12,
        delay: 0.3,
        ease: 'back.out(1.7)'
    });

    gsap.from('.center-circle', {
        duration: 1,
        opacity: 0,
        scale: 0,
        rotationZ: -360,
        delay: 0.8,
        ease: 'elastic.out(1.3, 0.5)'
    });

    // Project cards scroll-triggered animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top center+=150',
                markers: false,
                toggleActions: 'play none none reverse'
            },
            duration: 0.9,
            opacity: 0,
            y: 80,
            rotationX: 10,
            skewY: 2,
            ease: 'power3.out',
            stagger: 0.15
        });

        // Hover animation for project cards
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.image-content');
            gsap.to(icon, {
                duration: 0.4,
                scale: 1.15,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.image-content');
            gsap.to(icon, {
                duration: 0.4,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

    // Skill cards with staggered reveal
    gsap.utils.toArray('.skill-category').forEach((skill, index) => {
        gsap.from(skill, {
            scrollTrigger: {
                trigger: skill,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            opacity: 0,
            y: 60,
            x: index % 2 === 0 ? -40 : 40,
            rotationY: index % 2 === 0 ? 10 : -10,
            ease: 'power3.out',
            stagger: 0.1
        });
    });

    // Section titles animation
    gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top center+=200',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            opacity: 0,
            y: 30,
            scale: 0.9,
            ease: 'back.out'
        });

        // Animate the underline
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top center+=200'
            },
            duration: 1.2,
            boxShadow: '0 0 0 rgba(99, 102, 241, 0)',
            ease: 'power3.out',
            delay: 0.3
        });
    });

    // Floating animation for tech circles
    gsap.to('.tech-circle', {
        duration: 4,
        y: -15,
        stagger: 0.15,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
    });

    // Rotating center circle
    gsap.to('.center-circle', {
        duration: 25,
        rotation: 360,
        repeat: -1,
        ease: 'none'
    });

    // Parallax effect on scroll
    gsap.utils.toArray('section').forEach((section) => {
        const bg = section.querySelector('::before');
        
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                scrub: 0.5,
                markers: false
            },
            backgroundPosition: '50% 100%',
            ease: 'none'
        });
    });

    // Contact form input focus animation
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                duration: 0.3,
                scale: 1.02,
                boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                ease: 'power2.out'
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                duration: 0.3,
                scale: 1,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                ease: 'power2.out'
            });
        });
    });

    // Social links hover animation
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.4,
                scale: 1.3,
                rotationZ: 360,
                ease: 'elastic.out(1.2, 0.75)'
            });

            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '100%';
            ripple.style.height = '100%';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.pointerEvents = 'none';
            link.style.position = 'relative';
            link.appendChild(ripple);

            gsap.to(ripple, {
                duration: 0.6,
                scale: 2,
                opacity: 0,
                onComplete: () => ripple.remove(),
                ease: 'power2.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.4,
                scale: 1,
                rotationZ: 0,
                ease: 'power2.out'
            });
        });
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            gsap.to(navbar, {
                duration: 0.3,
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.85)'
            });
        } else {
            gsap.to(navbar, {
                duration: 0.3,
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)'
            });
        }
    });

    // Skill items stagger on hover
    document.querySelectorAll('.skill-category').forEach(category => {
        const items = category.querySelectorAll('li');
        category.addEventListener('mouseenter', () => {
            gsap.to(items, {
                duration: 0.4,
                opacity: 1,
                x: 0,
                stagger: 0.05,
                ease: 'power2.out'
            });
        });

        category.addEventListener('mouseleave', () => {
            gsap.to(items, {
                duration: 0.4,
                opacity: 1,
                x: 0,
                ease: 'power2.out'
            });
        });
    });

    // Animate tech stack icons in project cards
    projectCards.forEach(card => {
        const techStack = card.querySelector('.tech-stack');
        const techItems = techStack ? techStack.querySelectorAll('small') : [];
        
        if (techItems.length > 0) {
            card.addEventListener('mouseenter', () => {
                gsap.to(techItems, {
                    duration: 0.4,
                    scale: 1.2,
                    rotate: 360,
                    stagger: 0.08,
                    ease: 'back.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(techItems, {
                    duration: 0.4,
                    scale: 1,
                    rotate: 0,
                    stagger: 0.08,
                    ease: 'power2.out'
                });
            });
        }
    });

    // Page load completion animation
    gsap.to('body', {
        duration: 0.8,
        autoAlpha: 1,
        ease: 'power2.out'
    });

    console.log('✨ Modern Portfolio loaded with advanced GSAP animations!');
});



// Handle Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Get the submit button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        try {
            // Show loading state
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API endpoint)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Success message
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.background = '#10b981';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
            
            console.log('Form data:', data);
        } catch (error) {
            console.error('Error:', error);
            submitBtn.textContent = 'Error sending message';
            submitBtn.style.background = '#ef4444';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 3000);
        }
    });
}

// Smooth scroll behavior for navigation links
const smoothScroll = (target, duration = 1000) => {
    const element = document.querySelector(target);
    if (!element) return;
    
    const targetPosition = element.offsetTop - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let start = null;
    
    const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };
    
    const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
    
    requestAnimationFrame(animation);
};

// Add scroll event listener for navbar styling
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
});

// Intersection Observer for fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Lazy load images with placeholder
const lazyImages = document.querySelectorAll('img[data-src]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                obs.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// Typing animation for hero title (optional enhancement)
const typeWriter = (element, text, speed = 100) => {
    let index = 0;
    element.textContent = '';
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Initialize animations on page load
window.addEventListener('load', () => {
    // Hero title character animation
    const chars = document.querySelectorAll('.hero-title .char');
    if (chars.length > 0) {
        gsap.from(chars, {
            duration: 0.8,
            opacity: 0,
            y: 20,
            stagger: 0.05,
            ease: 'back.out'
        });
    }

    // Hero buttons animation
    gsap.from('.hero-buttons .btn', {
        duration: 0.8,
        opacity: 0,
        y: 20,
        stagger: 0.2,
        delay: 0.5,
        ease: 'back.out'
    });

    // Tech stack badges animation
    gsap.from('.tech-stack-hero .tech-badge', {
        duration: 0.6,
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        delay: 0.8,
        ease: 'back.out'
    });

    // Tech showcase circles animation
    gsap.from('.tech-circle', {
        duration: 1,
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        delay: 0.3,
        ease: 'back.out'
    });

    gsap.from('.center-circle', {
        duration: 0.8,
        opacity: 0,
        scale: 0,
        delay: 0.7,
        ease: 'elastic.out'
    });

    // Project cards scroll animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top center+=100',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: 'power3.out'
        });
    });

    // Skill categories scroll animation
    const skillCards = document.querySelectorAll('.skill-category');
    skillCards.forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top center+=100',
                toggleActions: 'play none none none'
            },
            duration: 0.8,
            opacity: 0,
            y: 40,
            ease: 'power3.out'
        });
    });

    // Animate project image icons on hover
    projectCards.forEach(card => {
        const icon = card.querySelector('.image-content');
        if (icon) {
            card.addEventListener('mouseenter', () => {
                gsap.to(icon, {
                    duration: 0.3,
                    scale: 1.1,
                    ease: 'power2.out'
                });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(icon, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        }
    });

    // Floating animation for tech circles
    gsap.to('.tech-circle', {
        duration: 3,
        y: -10,
        stagger: 0.1,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
    });

    // Rotating center circle
    gsap.to('.center-circle', {
        duration: 20,
        rotation: 360,
        repeat: -1,
        ease: 'none'
    });

    console.log('Portfolio website loaded with GSAP animations!');
});

// Detect dark mode preference
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

const applyDarkMode = (isDark) => {
    if (isDark) {
        document.documentElement.style.setProperty('--text-dark', '#f3f4f6');
        document.documentElement.style.setProperty('--text-light', '#d1d5db');
        document.documentElement.style.setProperty('--bg-light', '#1f2937');
        document.documentElement.style.setProperty('--bg-white', '#111827');
        document.documentElement.style.setProperty('--border-color', '#374151');
    }
};

// Apply dark mode if user prefers it
if (prefersDarkMode.matches) {
    applyDarkMode(true);
}

// Listen for changes in dark mode preference
prefersDarkMode.addEventListener('change', (e) => {
    applyDarkMode(e.matches);
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { typeWriter, smoothScroll };
}
