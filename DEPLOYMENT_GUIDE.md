# Portfolyo Deployment Rehberi

Portfolyonuzu online yayınlamak için birkaç seçenek var. En kolay ve ücretsiz yöntemler:

## 🚀 Yöntem 1: GitHub Pages (Önerilen)

### Adımlar:

1. **GitHub Repository Oluştur**
   - GitHub'da yeni bir repository oluştur
   - Repository adı: `portfolio` veya `vetha-portfolio` (kendi ismini kullan)
   - Public olarak ayarla
   - README ekleme (opsiyonel)

2. **Projeyi GitHub'a Yükle**
   ```bash
   cd "/Users/vethacagdas/Desktop/Kişisel Portfolio"
   
   # Git başlat
   git init
   
   # Tüm dosyaları ekle
   git add .
   
   # İlk commit
   git commit -m "Initial commit: Portfolio website"
   
   # GitHub repo'ya bağla (kendi repo URL'ini kullan)
   git remote add origin https://github.com/vethacagdas/portfolio.git
   
   # Ana branch'i main olarak ayarla
   git branch -M main
   
   # GitHub'a gönder
   git push -u origin main
   ```

3. **GitHub Pages'i Aktif Et**
   - GitHub'da repository sayfasına git
   - Settings > Pages sekmesine tıkla
   - Source: "Deploy from a branch" seç
   - Branch: "main" seç
   - Folder: "/ (root)" seç
   - Save butonuna tıkla

4. **URL'yi Al**
   - Birkaç dakika sonra site hazır olacak
   - URL: `https://vethacagdas.github.io/portfolio/`
   - (Repository adına göre değişir)

### Özel Domain (Opsiyonel)
- Custom domain eklemek istersen:
  - Settings > Pages > Custom domain
  - Domain adını gir (örn: portfolio.vethacagdas.com)

---

## 🌐 Yöntem 2: Netlify (Çok Kolay)

### Adımlar:

1. **Netlify Hesabı Oluştur**
   - https://www.netlify.com adresine git
   - GitHub ile giriş yap (en kolay)

2. **Projeyi Yükle**
   - Netlify dashboard'da "Add new site" > "Deploy manually"
   - Veya GitHub repo'yu bağla (otomatik deploy)

3. **Drag & Drop**
   - Tüm portfolyo klasörünü sürükle-bırak
   - Otomatik olarak deploy edilecek

4. **URL'yi Al**
   - Netlify otomatik bir URL verir
   - Örnek: `https://vetha-portfolio.netlify.app`
   - Custom domain ekleyebilirsin

### Netlify Avantajları:
- ✅ Çok hızlı deploy
- ✅ Otomatik HTTPS
- ✅ Custom domain (ücretsiz)
- ✅ Form handling (contact form için)

---

## ⚡ Yöntem 3: Vercel (Hızlı)

### Adımlar:

1. **Vercel Hesabı Oluştur**
   - https://vercel.com adresine git
   - GitHub ile giriş yap

2. **Projeyi Import Et**
   - "New Project" tıkla
   - GitHub repo'yu seç
   - Deploy butonuna tıkla

3. **URL'yi Al**
   - Otomatik URL: `https://portfolio-xxx.vercel.app`
   - Custom domain ekleyebilirsin

---

## 🔍 SEO Optimizasyonu (Google'da Bulunmak İçin)

Portfolyonuzun Google'da görünmesi için:

### 1. Meta Tags Ekle (index.html'e)

```html
<head>
    <!-- Mevcut meta tags'a ekle -->
    <meta name="description" content="Vetha Çağdaş - Unity Game Developer, Product & Data Analyst. Portfolio showcasing game development, data analysis, and web development projects.">
    <meta name="keywords" content="Vetha Çağdaş, Unity Developer, Game Developer, Data Analyst, Portfolio, Web Developer">
    <meta name="author" content="Vetha Çağdaş">
    
    <!-- Open Graph (Social Media) -->
    <meta property="og:title" content="Vetha Çağdaş - Portfolio">
    <meta property="og:description" content="Unity Game Developer, Product & Data Analyst Portfolio">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://vethacagdas.github.io/portfolio/">
    <meta property="og:image" content="https://vethacagdas.github.io/portfolio/assets/og-image.png">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Vetha Çağdaş - Portfolio">
    <meta name="twitter:description" content="Unity Game Developer, Product & Data Analyst Portfolio">
</head>
```

### 2. robots.txt Oluştur

```
User-agent: *
Allow: /
Sitemap: https://vethacagdas.github.io/portfolio/sitemap.xml
```

### 3. sitemap.xml Oluştur

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://vethacagdas.github.io/portfolio/</loc>
    <lastmod>2025-01-XX</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 4. Google Search Console'a Ekle
- https://search.google.com/search-console
- Site URL'ni ekle
- Doğrulama yap (HTML tag veya DNS)

---

## 📝 Deployment Sonrası Checklist

- [ ] Tüm linkler çalışıyor mu?
- [ ] Responsive tasarım mobilde test edildi mi?
- [ ] Form çalışıyor mu? (eğer backend varsa)
- [ ] Tüm görseller yüklendi mi?
- [ ] GitHub linkleri doğru mu?
- [ ] Meta tags eklendi mi?
- [ ] robots.txt ve sitemap.xml eklendi mi?
- [ ] Google Analytics eklenmeli mi? (opsiyonel)

---

## 🎯 Hızlı Başlangıç (GitHub Pages)

En hızlı yöntem:

1. GitHub'da yeni repo oluştur
2. Dosyaları yükle
3. Settings > Pages > Deploy from main branch
4. 5 dakika içinde hazır! 🎉

---

## 💡 İpuçları

- **Custom Domain**: Daha profesyonel görünmek için kendi domain'in olabilir
- **Analytics**: Google Analytics ekleyerek ziyaretçi sayısını takip edebilirsin
- **Backup**: GitHub'da kodların güvende, her zaman geri yükleyebilirsin
- **Updates**: Değişiklik yaptığında sadece `git push` yap, otomatik güncellenir

---

**Soruların varsa yardımcı olabilirim!** 🚀

