# Portfolio Website Creation Prompt

## Proje Açıklaması
Modern, profesyonel ve etkileyici bir kişisel portfolyo websitesi oluştur. Site, kişinin projelerini, yeteneklerini ve deneyimlerini sergilemeli.

## Tasarım Gereksinimleri

### 1. Genel Tasarım Yaklaşımı
- **Minimalist ve temiz** bir tasarım tercih et (mevcut portfolyodan farklı olarak)
- **Açık renk paleti** kullan (pastel tonlar veya canlı renkler)
- **Kartlar yerine daha organik şekiller** kullan (yuvarlak köşeler, asimetrik düzenler)
- **Büyük tipografi** ve bol beyaz alan kullan

### 2. Renk Paleti
- Ana renk: Mavi tonları (#4A90E2, #5BA3F5) veya Mor tonları (#9B59B6, #8E44AD)
- İkincil renk: Turuncu (#FF6B6B) veya Yeşil (#51CF66)
- Arka plan: Açık gri (#F8F9FA) veya Beyaz (#FFFFFF)
- Metin: Koyu gri (#2C3E50) veya Siyah (#1A1A1A)

### 3. Layout Yapısı
- **Tek sayfa scroll** tasarımı (smooth scrolling)
- **Asimetrik grid** düzeni (projeler için)
- **Sticky navigation** (kaydırırken sabit kalacak)
- **Parallax efektleri** (arka plan görselleri için)

## Bölümler

### 1. Hero Section
- Büyük, bold başlık (isim)
- Kısa bir tagline veya meslek tanımı
- Animasyonlu arka plan (gradient veya geometrik şekiller)
- Scroll indicator (aşağı ok animasyonu)
- Sosyal medya linkleri (ikonlar)

### 2. About Me
- Profil fotoğrafı (yuvarlak veya yuvarlak köşeli)
- 2-3 paragraf kişisel hikaye
- İstatistikler (proje sayısı, yıl deneyim, vb.) - kartlar halinde
- Kişilik özellikleri (soft skills) - tag'ler halinde

### 3. Skills
- **Dairesel progress bar'lar** veya **yıldız sistemi** kullan
- Kategorilere göre grupla (Frontend, Backend, Tools, vb.)
- Her skill için yüzde veya seviye göster
- Hover efektleri ekle

### 4. Projects
- **Masonry layout** (Pinterest tarzı) veya **Zigzag layout** kullan
- Her proje için:
  - Büyük görsel/thumbnail
  - Proje adı
  - Kısa açıklama (2-3 cümle)
  - Teknoloji tag'leri
  - GitHub ve Live Demo linkleri
- Hover'da görsel büyüsün veya overlay göster

### 5. Experience
- **Vertical timeline** yerine **Horizontal timeline** kullan
- Veya **Kart tabanlı** düzen (kronolojik sıra)
- Her iş için:
  - Şirket adı ve pozisyon
  - Tarih aralığı
  - Açıklama (bullet points)
  - Şirket logosu (opsiyonel)

### 6. Education
- **Kartlar halinde** göster
- Her eğitim için:
  - Okul adı
  - Bölüm/Derece
  - Tarih
  - Önemli dersler veya başarılar

### 7. Contact
- **İki sütunlu** düzen:
  - Sol: İletişim bilgileri (email, telefon, adres)
  - Sağ: İletişim formu
- Form alanları:
  - İsim
  - Email
  - Konu
  - Mesaj
- Form gönderildiğinde animasyonlu feedback göster

## Özellikler

### 1. Tema Sistemi
- **Light mode** (varsayılan)
- **Dark mode** (toggle butonu ile)
- Renkler otomatik değişmeli

### 2. Dil Desteği
- **İngilizce** (varsayılan)
- **Türkçe** (veya başka bir dil)
- Dil değiştirme butonu
- Tüm içerik çevrilmeli

### 3. Animasyonlar
- **Fade-in** efektleri (scroll'da görünür olma)
- **Slide-in** animasyonları
- **Hover** efektleri (butonlar, kartlar)
- **Smooth transitions** (tüm etkileşimlerde)

### 4. Responsive Design
- **Mobile-first** yaklaşım
- Tablet ve desktop için optimize
- Hamburger menü (mobilde)
- Touch-friendly butonlar

## Teknik Gereksinimler

### Teknolojiler
- HTML5 (semantic tags)
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome (ikonlar)
- Google Fonts (tipografi - Inter, Poppins, veya Montserrat)

### Dosya Yapısı
```
portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

### Özellikler
- **LocalStorage** kullan (tema ve dil tercihlerini kaydet)
- **Smooth scroll** (navigation linklerinde)
- **Form validation** (JavaScript ile)
- **Intersection Observer** (scroll animasyonları için)
- **No external dependencies** (jQuery, React, vb. kullanma)

## İçerik Yapısı

### Kişisel Bilgiler
- İsim
- Meslek/Unvan
- Kısa bio (1-2 cümle)
- Profil fotoğrafı
- İletişim bilgileri

### Projeler (Minimum 3-4)
Her proje için:
- Proje adı (yaratıcı isim)
- Kısa açıklama
- Teknolojiler
- GitHub linki
- Live demo linki (varsa)
- Görsel/thumbnail

### Deneyim (Kronolojik)
- Şirket adı
- Pozisyon
- Tarih aralığı
- Sorumluluklar (3-5 madde)

### Eğitim
- Okul adı
- Bölüm
- Derece
- Tarih

### Yetenekler
- Kategori bazında grupla
- Her skill için seviye göster
- Toplam 10-15 skill

## Tasarım İpuçları

1. **Tipografi Hiyerarşisi**
   - H1: 48-64px (hero başlık)
   - H2: 36-48px (bölüm başlıkları)
   - H3: 24-32px (alt başlıklar)
   - Body: 16-18px

2. **Spacing**
   - Bölümler arası: 80-120px
   - Elementler arası: 24-40px
   - Padding: 16-32px

3. **Shadows & Effects**
   - Subtle shadows (box-shadow: 0 2px 8px rgba(0,0,0,0.1))
   - Hover'da shadow artışı
   - Border-radius: 8-16px

4. **Buttons**
   - Primary: Dolu renkli, beyaz metin
   - Secondary: Outline, renkli border
   - Hover: Scale veya shadow efekti

## Özel Notlar

- **Mevcut portfolyodan farklı** olmalı (renk, layout, stil)
- **Kişiselleştirilebilir** olmalı (kolayca içerik değiştirilebilmeli)
- **Performans odaklı** (hızlı yüklenmeli)
- **SEO friendly** (meta tags, semantic HTML)
- **Accessibility** (ARIA labels, keyboard navigation)

## Bonus Özellikler (Opsiyonel)

- **Blog bölümü** (yazılar için)
- **Testimonials** (referanslar)
- **Achievements** (başarılar, sertifikalar)
- **Download CV** butonu
- **Social media feed** entegrasyonu
- **Contact form backend** (Formspree, EmailJS)

## Sonuç

Bu portfolyo, kişinin profesyonel kimliğini yansıtmalı ve ziyaretçileri etkilemeli. Modern, temiz ve kullanıcı dostu olmalı. Tüm özellikler çalışır durumda olmalı ve responsive tasarıma sahip olmalı.

---

**Not:** Bu prompt, mevcut portfolyodan farklı bir tasarım ve yapı önerir. Renk paleti, layout düzeni ve genel stil açısından farklılıklar içerir.

