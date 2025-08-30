// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const pageSections = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get target section
        const targetId = link.getAttribute('href').substring(1);
        
        // Update active nav link
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
        
        // Show target section
        pageSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
        
        // Close mobile menu if open
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && subject && message) {
            // In a real application, you would send this data to a server
            alert('شكرًا لك على رسالتك! سوف نعود إليك قريبًا.');
            contactForm.reset();
        } else {
            alert('يرجى ملء جميع الحقول.');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .about-image');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize animation styles
document.querySelectorAll('.service-card, .about-image').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(50px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
// Trigger once on load
window.addEventListener('load', animateOnScroll);

// Testimonial slider (if needed in the future)
/*
const testimonialSlider = () => {
    // Implementation for testimonial slider
}
*/

// Counter animation for stats (if needed in the future)
/*
const counterAnimation = () => {
    // Implementation for counter animation
}
*/
