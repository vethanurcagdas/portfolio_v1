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
            // NEVER hide project-content or project-content-page
            if (!entry.target.classList.contains('project-content') && 
                !entry.target.classList.contains('project-content-page') &&
                !entry.target.closest('.project-content')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

// Observe elements for animation (EXCLUDE project-content and project-content-page completely)
const animateElements = document.querySelectorAll('.skill-category, .timeline-item, .stat-item, .education-card, .volunteering-card, .language-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Project cards: Only animate the card container, NEVER the content
document.querySelectorAll('.project-card').forEach(card => {
    card.style.transition = 'transform 0.6s ease-out';
    // Don't observe project-card with IntersectionObserver to prevent content hiding
});

// Split project content into 3 pages for mobile (horizontal scroll)
// Desktop: Keep normal layout
function splitProjectContentIntoPages() {
    const projectContents = document.querySelectorAll('.project-content');
    const isMobile = window.innerWidth <= 968;
    
    projectContents.forEach((content) => {
        const existingWrapper = content.querySelector('.project-content-wrapper');
        
        // Desktop: Remove wrapper if exists, restore normal layout
        if (!isMobile) {
            if (existingWrapper) {
                const allContent = [];
                existingWrapper.querySelectorAll('.project-content-page').forEach(page => {
                    Array.from(page.children).forEach(child => {
                        allContent.push(child.cloneNode(true));
                    });
                });
                content.innerHTML = '';
                allContent.forEach(child => content.appendChild(child));
            }
            // Ensure visibility
            content.style.opacity = '1';
            content.style.visibility = 'visible';
            return;
        }
        
        // Mobile: Create 3 pages if not already created
        if (isMobile) {
            // Check if already correctly set up
            if (existingWrapper) {
                const pages = existingWrapper.querySelectorAll('.project-content-page');
                if (pages.length === 3) {
                    // Force visibility
                    pages.forEach(page => {
                        page.style.opacity = '1';
                        page.style.visibility = 'visible';
                        page.style.display = 'flex';
                        page.querySelectorAll('*').forEach(child => {
                            child.style.opacity = '1';
                            child.style.visibility = 'visible';
                        });
                    });
                    return;
                }
            }
            
            // Remove existing wrapper if incorrect
            if (existingWrapper) {
                existingWrapper.remove();
            }
            
            // Get original children
            const children = Array.from(content.children);
            if (children.length === 0) return;
            
            // Find elements
            const tags = children.find(el => el.classList.contains('project-tags'));
            const title = children.find(el => el.classList.contains('project-title'));
            const description = children.find(el => el.classList.contains('project-description'));
            const features = children.find(el => el.classList.contains('project-features'));
            const tech = children.find(el => el.classList.contains('project-tech'));
            const links = children.find(el => el.classList.contains('project-links'));
            
            // Create wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'project-content-wrapper';
            
            // Page 1: Tags + Title + Description (first part)
            const page1 = document.createElement('div');
            page1.className = 'project-content-page';
            if (tags) {
                const tagsClone = tags.cloneNode(true);
                page1.appendChild(tagsClone);
            }
            if (title) {
                const titleClone = title.cloneNode(true);
                page1.appendChild(titleClone);
            }
            if (description) {
                const descClone = description.cloneNode(true);
                const text = descClone.textContent || descClone.innerText || '';
                const midPoint = Math.floor(text.length / 2);
                const firstPart = text.substring(0, midPoint);
                descClone.textContent = firstPart + '...';
                page1.appendChild(descClone);
            }
            wrapper.appendChild(page1);
            
            // Page 2: Description (rest) + Features
            const page2 = document.createElement('div');
            page2.className = 'project-content-page';
            if (description) {
                const descClone = description.cloneNode(true);
                const text = descClone.textContent || descClone.innerText || '';
                const midPoint = Math.floor(text.length / 2);
                const secondPart = text.substring(midPoint);
                descClone.textContent = '...' + secondPart;
                page2.appendChild(descClone);
            }
            if (features) {
                const featuresClone = features.cloneNode(true);
                page2.appendChild(featuresClone);
            }
            wrapper.appendChild(page2);
            
            // Page 3: Tech + Links
            const page3 = document.createElement('div');
            page3.className = 'project-content-page';
            if (tech) {
                const techClone = tech.cloneNode(true);
                page3.appendChild(techClone);
            }
            if (links) {
                const linksClone = links.cloneNode(true);
                page3.appendChild(linksClone);
            }
            wrapper.appendChild(page3);
            
            // Clear and add wrapper
            content.innerHTML = '';
            content.appendChild(wrapper);
            
            // Force visibility on all pages
            wrapper.querySelectorAll('.project-content-page').forEach(page => {
                page.style.opacity = '1';
                page.style.visibility = 'visible';
                page.style.display = 'flex';
                page.querySelectorAll('*').forEach(child => {
                    child.style.opacity = '1';
                    child.style.visibility = 'visible';
                });
            });
        }
    });
}

// Project Content Scroll Indicators (3 dots for mobile)
function initProjectScrollIndicators() {
    const projectContents = document.querySelectorAll('.project-content');
    const isMobile = window.innerWidth <= 968;
    
    projectContents.forEach((content, index) => {
        const projectCard = content.closest('.project-card');
        const existingIndicator = projectCard ? projectCard.querySelector('.project-scroll-indicator') : null;
        
        // Desktop: Remove indicators
        if (!isMobile) {
            if (existingIndicator) {
                existingIndicator.remove();
            }
            return;
        }
        
        // Mobile: Create 3-dot indicator
        if (isMobile) {
            // Remove existing if any
            if (existingIndicator) {
                existingIndicator.remove();
            }
            
            // Check if has pages
            const wrapper = content.querySelector('.project-content-wrapper');
            if (!wrapper || wrapper.querySelectorAll('.project-content-page').length !== 3) {
                return;
            }
            
            // Create indicator
            const indicator = document.createElement('div');
            indicator.className = 'project-scroll-indicator';
            
            // Create 3 dots
            for (let i = 0; i < 3; i++) {
                const dot = document.createElement('span');
                dot.className = 'scroll-dot';
                if (i === 0) dot.classList.add('active');
                indicator.appendChild(dot);
            }
            
            // Insert indicator
            if (projectCard) {
                projectCard.appendChild(indicator);
            }
            
            // Update indicator on scroll
            const updateIndicator = () => {
                const scrollLeft = content.scrollLeft;
                const clientWidth = content.clientWidth;
                const scrollWidth = content.scrollWidth;
                const maxScroll = scrollWidth - clientWidth;
                
                if (maxScroll <= 0) return;
                
                // Calculate current page (0, 1, or 2)
                const scrollPercentage = scrollLeft / maxScroll;
                let currentPage = 0;
                if (scrollPercentage > 0.66) {
                    currentPage = 2;
                } else if (scrollPercentage > 0.33) {
                    currentPage = 1;
                }
                
                // Update dots
                const dots = indicator.querySelectorAll('.scroll-dot');
                dots.forEach((dot, i) => {
                    if (i === currentPage) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            };
            
            content.addEventListener('scroll', updateIndicator);
            updateIndicator();
        }
    });
}

// Image Gallery Carousel
function initImageGallery() {
    const gallery = document.querySelector('.image-gallery');
    if (!gallery) return;
    
    const images = gallery.querySelectorAll('.gallery-image');
    const dots = gallery.querySelectorAll('.gallery-dot');
    const prevBtn = gallery.querySelector('.gallery-prev');
    const nextBtn = gallery.querySelector('.gallery-next');
    
    let currentIndex = 0;
    const totalImages = images.length;
    
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }
    
    function nextImage() {
        const nextIndex = (currentIndex + 1) % totalImages;
        showImage(nextIndex);
    }
    
    function prevImage() {
        const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(prevIndex);
    }
    
    // Button events
    if (nextBtn) {
        nextBtn.addEventListener('click', nextImage);
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', prevImage);
    }
    
    // Dot events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showImage(index));
    });
    
    // Auto-play (optional - every 5 seconds)
    let autoPlayInterval = setInterval(nextImage, 5000);
    
    // Pause on hover
    gallery.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
    
    gallery.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(nextImage, 5000);
    });
    
    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    gallery.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    gallery.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            nextImage();
        }
        if (touchEndX > touchStartX + 50) {
            prevImage();
        }
    }
}

// Handle touch events for project content to allow vertical scrolling
function initProjectTouchHandlers() {
    const isMobile = window.innerWidth <= 968;
    if (!isMobile) return;
    
    const projectContents = document.querySelectorAll('.project-content');
    
    projectContents.forEach((content) => {
        let touchStartX = 0;
        let touchStartY = 0;
        let isScrolling = false;
        
        content.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isScrolling = false;
        }, { passive: true });
        
        content.addEventListener('touchmove', (e) => {
            if (!touchStartX || !touchStartY) return;
            
            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const deltaX = Math.abs(touchX - touchStartX);
            const deltaY = Math.abs(touchY - touchStartY);
            
            // If vertical movement is greater, allow vertical scroll
            if (deltaY > deltaX && deltaY > 10) {
                // Vertical scroll - let the page scroll
                isScrolling = true;
                // Temporarily disable horizontal scroll
                content.style.overflowX = 'hidden';
                // Allow the event to propagate for vertical scrolling
                return;
            } else if (deltaX > deltaY && deltaX > 10) {
                // Horizontal scroll - allow it
                isScrolling = true;
                content.style.overflowX = 'auto';
            }
        }, { passive: true });
        
        content.addEventListener('touchend', () => {
            // Re-enable horizontal scroll after a short delay
            setTimeout(() => {
                content.style.overflowX = 'auto';
                touchStartX = 0;
                touchStartY = 0;
                isScrolling = false;
            }, 100);
        }, { passive: true });
    });
}

// Initialize projects
function initProjects() {
    setTimeout(() => {
        splitProjectContentIntoPages();
        setTimeout(() => {
            initProjectScrollIndicators();
            initProjectTouchHandlers();
            // Force visibility
            document.querySelectorAll('.project-content-page').forEach(page => {
                page.style.opacity = '1';
                page.style.visibility = 'visible';
                page.style.display = 'flex';
                page.querySelectorAll('*').forEach(child => {
                    child.style.opacity = '1';
                    child.style.visibility = 'visible';
                });
            });
        }, 100);
    }, 100);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initProjects();
        initImageGallery();
    });
} else {
    initProjects();
    initImageGallery();
}

// Also run on window load as backup
window.addEventListener('load', () => {
    initProjects();
    initImageGallery();
});

// Re-initialize on resize
let globalResizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(globalResizeTimeout);
    globalResizeTimeout = setTimeout(() => {
        initProjects();
    }, 250);
});

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

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    // Show button when scrolled down 300px
    if (scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
    
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

// Scroll to Top Button Click Handler
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact Social Media Buttons
const contactButtons = document.querySelectorAll('.contact-button');
contactButtons.forEach(button => {
    button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
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

