// Translation System
const translations = {
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            education: 'Education',
            projects: 'Projects',
            skills: 'Skills',
            experience: 'Experience',
            volunteering: 'Volunteering',
            contact: 'Contact'
        },
        hero: {
            subtitle: 'Unity Game Developer · Product & Data Analyst',
            description: 'Crafting digital experiences through game development, data analysis, and innovative solutions. Passionate about turning ideas into interactive realities.',
            viewWork: 'View My Work',
            getInTouch: 'Get In Touch',
            scroll: 'Scroll',
            gameDev: 'Game Dev',
            dataAnalysis: 'Data Analysis',
            programming: 'Programming'
        },
        about: {
            title: 'About Me',
            p1: 'I\'m a passionate Unity Game Developer and Product & Data Analyst with a unique blend of technical expertise and creative vision. Currently pursuing degrees in Computer Education Technology, Mechanical Engineering, and Economics at Boğaziçi University, I bring a multidisciplinary approach to every project.',
            p2: 'My journey spans from developing engaging game experiences to analyzing complex datasets and improving business processes. I thrive on solving challenging problems and creating solutions that make a real impact.',
            yearsExp: 'Years Experience',
            projectsCompleted: 'Projects Completed',
            technologies: 'Technologies'
        },
        education: {
            title: 'Education',
            bachelorScience: 'Bachelor of Science',
            bachelorArt: 'Bachelor of Art',
            major: 'Major',
            minor: 'Minor',
            present: 'Present'
        },
        projects: {
            title: 'Featured Projects',
            subtitle: 'Exploring innovation across gaming, music, and video platforms',
            featured: 'Featured',
            viewPortfolio: 'View Portfolio',
            viewCode: 'View Code',
            liveDemo: 'Live Demo',
            download: 'Download Game',
            languageLearning: {
                title: 'LinguaQuest - Educational Language Learning Platform',
                description: 'I developed a modern and interactive language learning platform. LinguaQuest is designed to make users\' language learning processes fun and effective. It offers a comprehensive learning experience with gamification elements, progress tracking, and user-friendly interface.',
                tags: ['Web Development', 'Educational Tech', 'Interactive Learning'],
                features: ['Interactive Learning Experience', 'Progress Tracking System', 'Gamification Elements', 'User-Friendly Interface']
            },
            musicPlatform: {
                title: 'SoundWave - Music Streaming Platform',
                description: 'I developed a modern and user-friendly music streaming platform. SoundWave is an interactive web application that allows users to discover their favorite songs, create playlists, and personalize their music experience. It stands out with its responsive design and smooth user experience.',
                tags: ['Web Development', 'Music Tech', 'JavaScript'],
                features: ['Music Discovery & Playback', 'Playlist Management', 'User Personalization', 'Responsive Design']
            },
            taskManager: {
                title: 'TaskVault - Task Management Application',
                description: 'A modern task management application I developed to increase productivity. TaskVault allows users to organize, prioritize, and track their tasks. It offers a comprehensive productivity solution with drag-and-drop features, category management, and progress tracking.',
                tags: ['Web Development', 'Productivity', 'JavaScript'],
                features: ['Task Organization & Prioritization', 'Drag-and-Drop Interface', 'Category Management', 'Progress Tracking']
            },
            galaxy: {
                title: 'Galaksinin Koruyucuları (Guardians of the Galaxy)',
                description: 'A Unity-based space adventure game developed as a final project. This immersive game features engaging gameplay mechanics, space exploration, and interactive elements. Built with Unity game engine and C# scripting, showcasing skills in game design, programming, and user experience optimization.',
                tags: ['Unity', 'Game Development', 'C#'],
                features: ['Space Adventure Gameplay', 'Unity Game Engine', 'C# Scripting', 'Interactive Game Mechanics']
            }
        },
        skills: {
            title: 'Skills & Technologies',
            gameDevelopment: 'Game Development',
            programming: 'Programming',
            dataAnalytics: 'Data & Analytics',
            aiRobotics: 'AI & Robotics'
        },
        experience: {
            title: 'Professional Experience'
        },
        volunteering: {
            title: 'Volunteering',
            csInstructor: 'CS Instructor',
            volunteer: 'Volunteer',
            darussafaka: {
                description: 'Teaching computer science to students, helping them develop technical skills and fostering a passion for technology.'
            },
            tog: {
                description: 'Actively contributing to community service initiatives and social responsibility projects for the past 5 years.'
            }
        },
        languages: {
            title: 'Languages',
            turkish: 'Turkish',
            english: 'English',
            native: 'Native',
            fluent: 'Fluent'
        },
        contact: {
            title: 'Get In Touch',
            subtitle: 'Let\'s collaborate on your next project',
            email: 'Email',
            phone: 'Phone',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            name: 'Your Name',
            emailPlaceholder: 'Your Email',
            subject: 'Subject',
            message: 'Your Message',
            sendMessage: 'Send Message',
            messageSent: 'Message Sent!'
        },
        footer: {
            rights: 'All rights reserved.'
        }
    },
    tr: {
        nav: {
            home: 'Ana Sayfa',
            about: 'Hakkımda',
            education: 'Eğitim',
            projects: 'Projeler',
            skills: 'Yetenekler',
            experience: 'Deneyim',
            volunteering: 'Gönüllülük',
            contact: 'İletişim'
        },
        hero: {
            subtitle: 'Unity Oyun Geliştirici · Ürün & Veri Analisti',
            description: 'Oyun geliştirme, veri analizi ve yenilikçi çözümler aracılığıyla dijital deneyimler yaratıyorum. Fikirleri interaktif gerçekliklere dönüştürmeye tutkulu bir şekilde çalışıyorum.',
            viewWork: 'Çalışmalarımı Gör',
            getInTouch: 'İletişime Geç',
            scroll: 'Kaydır',
            gameDev: 'Oyun Geliştirme',
            dataAnalysis: 'Veri Analizi',
            programming: 'Programlama'
        },
        about: {
            title: 'Hakkımda',
            p1: 'Teknik uzmanlık ve yaratıcı vizyonun benzersiz bir karışımına sahip tutkulu bir Unity Oyun Geliştirici ve Ürün & Veri Analistiyim. Şu anda Boğaziçi Üniversitesi\'nde Bilgisayar Eğitimi Teknolojisi, Makine Mühendisliği ve Ekonomi alanlarında derece peşinde koşuyorum ve her projeye çok disiplinli bir yaklaşım getiriyorum.',
            p2: 'Yolculuğum, etkileyici oyun deneyimleri geliştirmekten karmaşık veri setlerini analiz etmeye ve iş süreçlerini iyileştirmeye uzanıyor. Zorlu problemleri çözmekten ve gerçek bir etki yaratan çözümler yaratmaktan keyif alıyorum.',
            yearsExp: 'Yıl Deneyim',
            projectsCompleted: 'Tamamlanan Proje',
            technologies: 'Teknoloji'
        },
        education: {
            title: 'Eğitim',
            bachelorScience: 'Fen Bilimleri Lisansı',
            bachelorArt: 'Sanat Lisansı',
            major: 'Ana Dal',
            minor: 'Yan Dal',
            present: 'Devam Ediyor'
        },
        projects: {
            title: 'Öne Çıkan Projeler',
            subtitle: 'Oyun, müzik ve video platformlarında yenilik keşfetmek',
            featured: 'Öne Çıkan',
            viewPortfolio: 'Portfolyoyu Görüntüle',
            viewCode: 'Kodu Görüntüle',
            liveDemo: 'Canlı Demo',
            download: 'Oyunu İndir',
            languageLearning: {
                title: 'LinguaQuest - Eğitsel Dil Öğrenme Platformu',
                description: 'Modern ve interaktif bir dil öğrenme platformu geliştirdim. LinguaQuest, kullanıcıların dil öğrenme süreçlerini eğlenceli ve etkili hale getirmek için tasarlandı. Oyunlaştırma öğeleri, ilerleme takibi ve kullanıcı dostu arayüz ile kapsamlı bir öğrenme deneyimi sunuyor.',
                tags: ['Web Geliştirme', 'Eğitim Teknolojisi', 'İnteraktif Öğrenme'],
                features: ['İnteraktif Öğrenme Deneyimi', 'İlerleme Takip Sistemi', 'Oyunlaştırma Öğeleri', 'Kullanıcı Dostu Arayüz']
            },
            musicPlatform: {
                title: 'SoundWave - Müzik Dinleme Platformu',
                description: 'Modern ve kullanıcı dostu bir müzik dinleme platformu geliştirdim. SoundWave, kullanıcıların favori şarkılarını keşfetmesini, çalma listeleri oluşturmasını ve müzik deneyimini kişiselleştirmesini sağlayan interaktif bir web uygulamasıdır. Responsive tasarım ve akıcı kullanıcı deneyimi ile öne çıkıyor.',
                tags: ['Web Geliştirme', 'Müzik Teknolojisi', 'JavaScript'],
                features: ['Müzik Keşfi & Çalma', 'Çalma Listesi Yönetimi', 'Kullanıcı Kişiselleştirme', 'Responsive Tasarım']
            },
            taskManager: {
                title: 'TaskVault - Görev Yönetim Uygulaması',
                description: 'Verimliliği artırmak için geliştirdiğim modern bir görev yönetim uygulaması. TaskVault, kullanıcıların görevlerini organize etmesini, önceliklendirmesini ve takip etmesini sağlar. Drag-and-drop özellikleri, kategori yönetimi ve ilerleme takibi ile kapsamlı bir üretkenlik çözümü sunuyor.',
                tags: ['Web Geliştirme', 'Üretkenlik', 'JavaScript'],
                features: ['Görev Organizasyonu & Önceliklendirme', 'Sürükle-Bırak Arayüzü', 'Kategori Yönetimi', 'İlerleme Takibi']
            },
            galaxy: {
                title: 'Galaksinin Koruyucuları (Guardians of the Galaxy)',
                description: 'Final projesi olarak geliştirilen Unity tabanlı bir uzay macera oyunu. Bu etkileyici oyun, ilgi çekici oyun mekanikleri, uzay keşfi ve interaktif öğeler içeriyor. Unity oyun motoru ve C# scriptleme ile geliştirildi, oyun tasarımı, programlama ve kullanıcı deneyimi optimizasyonu becerilerini sergiliyor.',
                tags: ['Unity', 'Oyun Geliştirme', 'C#'],
                features: ['Uzay Macera Oyun Mekaniği', 'Unity Oyun Motoru', 'C# Scriptleme', 'İnteraktif Oyun Mekanikleri']
            }
        },
        skills: {
            title: 'Yetenekler & Teknolojiler',
            gameDevelopment: 'Oyun Geliştirme',
            programming: 'Programlama',
            dataAnalytics: 'Veri & Analitik',
            aiRobotics: 'AI & Robotik'
        },
        experience: {
            title: 'Profesyonel Deneyim'
        },
        volunteering: {
            title: 'Gönüllülük',
            csInstructor: 'Bilgisayar Bilimi Eğitmeni',
            volunteer: 'Gönüllü',
            darussafaka: {
                description: 'Öğrencilere bilgisayar bilimi öğretiyorum, teknik beceriler geliştirmelerine yardımcı oluyorum ve teknolojiye olan tutkularını besliyorum.'
            },
            tog: {
                description: 'Son 5 yıldır toplum hizmeti girişimlerine ve sosyal sorumluluk projelerine aktif olarak katkıda bulunuyorum.'
            }
        },
        languages: {
            title: 'Diller',
            turkish: 'Türkçe',
            english: 'İngilizce',
            native: 'Ana Dil',
            fluent: 'Akıcı'
        },
        contact: {
            title: 'İletişime Geçin',
            subtitle: 'Bir sonraki projenizde işbirliği yapalım',
            email: 'E-posta',
            phone: 'Telefon',
            github: 'GitHub',
            linkedin: 'LinkedIn',
            name: 'Adınız',
            emailPlaceholder: 'E-posta Adresiniz',
            subject: 'Konu',
            message: 'Mesajınız',
            sendMessage: 'Mesaj Gönder',
            messageSent: 'Mesaj Gönderildi!'
        },
        footer: {
            rights: 'Tüm hakları saklıdır.'
        }
    }
};

// Language Toggle Functionality
const langToggle = document.getElementById('langToggle');
const langText = document.getElementById('langText');
const html = document.documentElement;

// Load saved language or default to English
let currentLang = localStorage.getItem('language') || 'en';
updateLanguage(currentLang);

// Language toggle event
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'tr' : 'en';
    localStorage.setItem('language', currentLang);
    updateLanguage(currentLang);
});

function updateLanguage(lang) {
    html.setAttribute('lang', lang);
    langText.textContent = lang === 'en' ? 'TR' : 'EN';
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            translation = translation?.[k];
        }
        
        if (translation) {
            // Check if it's an array index (for features)
            if (typeof translation === 'string') {
                element.textContent = translation;
            }
        }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            translation = translation?.[k];
        }
        
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update project features dynamically
    updateProjectFeatures(lang);
}

function updateProjectFeatures(lang) {
    const projects = ['languageLearning', 'musicPlatform', 'taskManager', 'galaxy'];
    projects.forEach(projectName => {
        const features = translations[lang].projects[projectName].features;
        const featureItems = document.querySelectorAll(`[data-project="${projectName}"] .feature-item span`);
        featureItems.forEach((item, index) => {
            if (features[index]) {
                item.textContent = features[index];
            }
        });
    });
}

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Load saved theme or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

// Theme toggle event
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'light') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// Navigation scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for animations
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

// Observe elements for animation
const animateElements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .stat-item, .education-card, .volunteering-card, .language-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Project Content Scroll Indicators
function initProjectScrollIndicators() {
    const projectContents = document.querySelectorAll('.project-content');
    
    projectContents.forEach((content, index) => {
        // Remove existing indicator if any
        const existingIndicator = content.parentElement.querySelector('.project-scroll-indicator');
        if (existingIndicator) {
            existingIndicator.remove();
        }
        
        // Check if content is scrollable (with a small threshold)
        const isScrollable = content.scrollWidth > content.clientWidth + 10;
        
        if (isScrollable) {
            // Create indicator container
            const indicator = document.createElement('div');
            indicator.className = 'project-scroll-indicator';
            indicator.setAttribute('data-project-index', index);
            
            // Calculate number of pages
            const pageCount = Math.max(1, Math.ceil(content.scrollWidth / content.clientWidth));
            
            // Create dots
            for (let i = 0; i < pageCount; i++) {
                const dot = document.createElement('span');
                dot.className = 'scroll-dot';
                if (i === 0) dot.classList.add('active');
                indicator.appendChild(dot);
            }
            
            // Insert indicator after project-content (inside project-card)
            const projectCard = content.closest('.project-card');
            if (projectCard) {
                projectCard.appendChild(indicator);
            } else {
                content.parentElement.appendChild(indicator);
            }
            
            // Update indicator on scroll
            const updateIndicator = () => {
                updateScrollIndicator(content, indicator, pageCount);
            };
            
            content.addEventListener('scroll', updateIndicator);
            
            // Initial update
            updateIndicator();
            
            // Update on resize
            let resizeTimeout;
            const handleResize = () => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    const newIsScrollable = content.scrollWidth > content.clientWidth + 10;
                    const newPageCount = Math.max(1, Math.ceil(content.scrollWidth / content.clientWidth));
                    
                    if (!newIsScrollable) {
                        indicator.remove();
                    } else if (newPageCount !== pageCount) {
                        // Recreate indicator if page count changed
                        indicator.remove();
                        initProjectScrollIndicators();
                    } else {
                        updateIndicator();
                    }
                }, 250);
            };
            
            window.addEventListener('resize', handleResize);
        }
    });
}

function updateScrollIndicator(content, indicator, pageCount) {
    const scrollLeft = content.scrollLeft;
    const clientWidth = content.clientWidth;
    const scrollWidth = content.scrollWidth;
    const maxScroll = scrollWidth - clientWidth;
    
    if (maxScroll <= 0) {
        return;
    }
    
    // Calculate current page (0-indexed)
    const scrollPercentage = scrollLeft / maxScroll;
    const currentPage = Math.min(pageCount - 1, Math.round(scrollPercentage * (pageCount - 1)));
    
    // Update dots
    const dots = indicator.querySelectorAll('.scroll-dot');
    dots.forEach((dot, index) => {
        if (index === currentPage) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Initialize scroll indicators when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProjectScrollIndicators);
} else {
    initProjectScrollIndicators();
}

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.width = width;
            }, 100);
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Create mailto link
        const mailtoLink = `mailto:vethanurcagdas@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show success message
        const button = contactForm.querySelector('button[type="submit"]');
        const originalText = button.innerHTML;
        const currentLang = localStorage.getItem('language') || 'en';
        const sentText = translations[currentLang].contact.messageSent;
        button.innerHTML = `<i class="fas fa-check"></i> ${sentText}`;
        button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 3000);
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Typing effect for hero title (optional enhancement)
const heroTitle = document.querySelector('.hero-title .gradient-text');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// Add active state to navigation links based on scroll position
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--text-primary);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Console message
console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with ❤️ by Vetha Çağdaş', 'color: #8b5cf6; font-size: 12px;');

