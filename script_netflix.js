// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ============ NAVBAR SCROLL EFFECT ============
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============ MOBILE NAVIGATION ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        const spans = navToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            gsap.to(spans[0], { duration: 0.3, rotation: 45, y: 12, x: 10 });
            gsap.to(spans[1], { duration: 0.3, opacity: 0 });
            gsap.to(spans[2], { duration: 0.3, rotation: -45, y: -12, x: 10 });
        } else {
            gsap.to(spans, { duration: 0.3, rotation: 0, y: 0, x: 0, opacity: 1 });
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            gsap.to(spans, { duration: 0.3, rotation: 0, y: 0, x: 0, opacity: 1 });
        });
    });
}

// ============ HERO ANIMATIONS ============
window.addEventListener('load', () => {
    // Hero title animation
    const heroChars = document.querySelectorAll('.hero-title .char');
    if (heroChars.length > 0) {
        gsap.from(heroChars, {
            duration: 0.7,
            opacity: 0,
            y: 100,
            rotationZ: -10,
            stagger: 0.08,
            ease: 'back.out(1.5)'
        });
    }

    // Hero subtitle animation
    gsap.from('.hero-subtitle', {
        duration: 0.7,
        opacity: 0,
        y: 50,
        delay: 0.3,
        ease: 'power2.out'
    });

    // Hero description animation
    gsap.from('.hero-description', {
        duration: 0.7,
        opacity: 0,
        y: 50,
        delay: 0.5,
        ease: 'power2.out'
    });

    // Hero actions animation
    gsap.from('.hero-actions .btn', {
        duration: 0.7,
        opacity: 0,
        y: 50,
        scale: 0.9,
        stagger: 0.1,
        delay: 0.7,
        ease: 'back.out'
    });

    // Featured cards scroll animation
    gsap.utils.toArray('.featured-card').forEach((card) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            opacity: 0,
            y: 60,
            scale: 0.95,
            ease: 'power3.out'
        });
    });

    // Project tiles animation with stagger
    const projectTiles = gsap.utils.toArray('.project-tile');
    projectTiles.forEach((tile, index) => {
        gsap.from(tile, {
            scrollTrigger: {
                trigger: tile,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            opacity: 0,
            scale: 0.8,
            rotationZ: -5,
            ease: 'back.out'
        });

        // Project tile hover animation
        tile.addEventListener('mouseenter', () => {
            gsap.to(tile, {
                duration: 0.3,
                scale: 1.08,
                ease: 'power2.out'
            });
        });

        tile.addEventListener('mouseleave', () => {
            gsap.to(tile, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

    // Skill tabs animation
    gsap.utils.toArray('.skill-tab').forEach((tab) => {
        gsap.from(tab, {
            scrollTrigger: {
                trigger: tab,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            opacity: 0,
            x: -50,
            ease: 'power3.out'
        });
    });

    // Skill bars animation on scroll into view
    gsap.utils.toArray('.skill-bar span').forEach((bar) => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        gsap.to(bar, {
            scrollTrigger: {
                trigger: bar,
                start: 'top center+=100',
                toggleActions: 'play none none reverse'
            },
            duration: 1.5,
            width: width,
            ease: 'power2.out',
            delay: 0.2
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
            x: -50,
            scale: 0.95,
            ease: 'back.out'
        });
    });

    // Contact cards animation
    gsap.utils.toArray('.contact-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            opacity: 0,
            y: 50,
            rotationY: 10,
            ease: 'power3.out',
            stagger: 0.1
        });

        // Contact card hover effect
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                duration: 0.3,
                y: -5,
                boxShadow: '0 10px 40px rgba(229, 9, 20, 0.3)',
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                duration: 0.3,
                y: 0,
                boxShadow: 'none',
                ease: 'power2.out'
            });
        });
    });

    // Form input animations
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                duration: 0.3,
                scale: 1.02,
                boxShadow: '0 0 20px rgba(229, 9, 20, 0.3)',
                ease: 'power2.out'
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                duration: 0.3,
                scale: 1,
                boxShadow: '0 0 0 rgba(229, 9, 20, 0)',
                ease: 'power2.out'
            });
        });
    });

    // Social links animation
    gsap.utils.toArray('.social-links a').forEach((link) => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                duration: 0.3,
                scale: 1.2,
                rotationZ: 360,
                ease: 'back.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                duration: 0.3,
                scale: 1,
                rotationZ: 0,
                ease: 'power2.out'
            });
        });
    });

    // Play button animation
    const playBtn = document.getElementById('playBtn');
    if (playBtn) {
        playBtn.addEventListener('mouseenter', () => {
            gsap.to(playBtn, {
                duration: 0.3,
                scale: 1.1,
                ease: 'power2.out'
            });
        });

        playBtn.addEventListener('mouseleave', () => {
            gsap.to(playBtn, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    }

    // ============ EXPERIENCE SECTION ANIMATIONS ============
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 0.7,
            opacity: 0,
            x: -50,
            ease: 'power3.out',
            delay: index * 0.15
        });

        // Hover effect on timeline content
        const timelineContent = item.querySelector('.timeline-content');
        if (timelineContent) {
            item.addEventListener('mouseenter', () => {
                gsap.to(timelineContent, {
                    duration: 0.3,
                    scale: 1.02,
                    ease: 'power2.out'
                });
            });

            item.addEventListener('mouseleave', () => {
                gsap.to(timelineContent, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        }
    });

    // Timeline markers pulse animation
    gsap.utils.toArray('.timeline-marker').forEach((marker) => {
        gsap.to(marker, {
            scrollTrigger: {
                trigger: marker,
                start: 'top center+=200',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            boxShadow: '0 0 0 12px rgba(229, 9, 20, 0.2)',
            ease: 'power2.out'
        });
    });

    // ============ EDUCATION SECTION ANIMATIONS ============
    gsap.utils.toArray('.education-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            opacity: 0,
            y: 40,
            rotationX: 20,
            ease: 'back.out',
            delay: index * 0.1
        });

        // Icon rotation on hover
        const iconEl = card.querySelector('.education-icon');
        if (iconEl) {
            card.addEventListener('mouseenter', () => {
                gsap.to(iconEl, {
                    duration: 0.4,
                    rotationY: 360,
                    ease: 'back.out'
                });
                gsap.to(card, {
                    duration: 0.3,
                    scale: 1.05,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        }
    });

    // ============ ACHIEVEMENTS SECTION ANIMATIONS ============
    gsap.utils.toArray('.achievement-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 0.7,
            opacity: 0,
            scale: 0.8,
            rotationZ: -10,
            ease: 'back.out',
            delay: index * 0.15
        });

        // Icon pulse on hover
        const achievementIcon = card.querySelector('.achievement-icon');
        if (achievementIcon) {
            card.addEventListener('mouseenter', () => {
                gsap.to(achievementIcon, {
                    duration: 0.4,
                    scale: 1.15,
                    boxShadow: '0 15px 50px rgba(229, 9, 20, 0.5)',
                    ease: 'elastic.out(1, 0.5)'
                });
                gsap.to(card, {
                    duration: 0.3,
                    scale: 1.03,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(achievementIcon, {
                    duration: 0.4,
                    scale: 1,
                    boxShadow: '0 10px 30px rgba(229, 9, 20, 0.3)',
                    ease: 'power2.out'
                });
                gsap.to(card, {
                    duration: 0.3,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        }

        // Badge animation
        const badge = card.querySelector('.achievement-badge');
        if (badge) {
            gsap.from(badge, {
                scrollTrigger: {
                    trigger: badge,
                    start: 'top center+=150',
                    toggleActions: 'play none none reverse'
                },
                duration: 0.5,
                opacity: 0,
                y: 20,
                ease: 'power2.out',
                delay: 0.3
            });
        }
    });

    // ============ PROFILE SECTION ANIMATIONS ============
    const profileImageWrapper = document.querySelector('.profile-image-wrapper');
    if (profileImageWrapper) {
        gsap.from(profileImageWrapper, {
            scrollTrigger: {
                trigger: profileImageWrapper,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            opacity: 0,
            x: -100,
            rotationY: -20,
            ease: 'power3.out'
        });

        const profileImg = profileImageWrapper.querySelector('img');
        if (profileImg) {
            profileImg.addEventListener('mouseenter', () => {
                gsap.to(profileImg, {
                    duration: 0.4,
                    scale: 1.08,
                    ease: 'power2.out'
                });
            });

            profileImg.addEventListener('mouseleave', () => {
                gsap.to(profileImg, {
                    duration: 0.4,
                    scale: 1,
                    ease: 'power2.out'
                });
            });
        }
    }

    const profileContent = document.querySelector('.profile-content');
    if (profileContent) {
        gsap.from(profileContent, {
            scrollTrigger: {
                trigger: profileContent,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            opacity: 0,
            x: 100,
            ease: 'power3.out',
            delay: 0.2
        });
    }

    // Profile stats counter animation
    gsap.utils.toArray('.stat-number').forEach((stat) => {
        const finalValue = parseInt(stat.textContent);
        const isDecimal = stat.textContent.includes('+');
        
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 1.5,
            textContent: 0,
            ease: 'power2.out',
            onUpdate: function() {
                let value = Math.ceil(this.targets()[0].textContent);
                stat.textContent = value + (isDecimal ? '+' : '');
            }
        });
    });

    // Profile CTA buttons animation
    gsap.utils.toArray('.profile-cta .btn').forEach((btn, index) => {
        gsap.from(btn, {
            scrollTrigger: {
                trigger: btn,
                start: 'top center+=150',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            opacity: 0,
            y: 30,
            ease: 'back.out',
            delay: index * 0.15
        });

        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });

    console.log('🎬 Netflix-Style Portfolio loaded with GSAP animations!');
});

// ============ CONTACT FORM ============
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        gsap.to(submitBtn, {
            duration: 0.3,
            scale: 0.95,
            ease: 'power2.out'
        });
        
        setTimeout(() => {
            submitBtn.textContent = 'Message Sent! ✓';
            gsap.to(submitBtn, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
            
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
}
