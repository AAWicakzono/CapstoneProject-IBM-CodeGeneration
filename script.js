// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('nav button');
const navLinks = document.querySelector('nav .hidden.md\\:flex');

if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        navLinks.classList.toggle('hidden');
        navLinks.classList.toggle('flex');
        navLinks.classList.toggle('flex-col');
        navLinks.classList.toggle('absolute');
        navLinks.classList.toggle('top-16');
        navLinks.classList.toggle('left-0');
        navLinks.classList.toggle('w-full');
        navLinks.classList.toggle('bg-slate-900');
        navLinks.classList.toggle('p-4');
        navLinks.classList.toggle('space-y-4');
    });
}

// Form submission handler
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        
        // Show success message (you can replace this with actual form submission)
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .project-card, .skill-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state to navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('nav a[href^="#"]');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('text-primary');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('text-primary');
        }
    });
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const yearElements = document.querySelectorAll('footer p');
if (yearElements.length > 0) {
    yearElements[0].innerHTML = yearElements[0].innerHTML.replace('2025', currentYear);
}

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll('.animate-float');
    
    floatingElements.forEach((element, index) => {
        const speed = 0.1 + (index * 0.05);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu if open
        if (navLinks && !navLinks.classList.contains('hidden')) {
            navLinks.classList.add('hidden');
        }
    }
});

// Performance: Lazy load images if any are added later
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('image-loading');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('🎨 Magic Portfolio initialized successfully!');
