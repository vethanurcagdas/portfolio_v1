# 🚀 Hızlı Deployment Rehberi

Portfolyonuzu 5 dakikada online yayınlayın!

## GitHub Pages ile Yayınlama (En Kolay)

### 1. GitHub Repository Oluştur
1. https://github.com adresine git
2. Sağ üstteki "+" > "New repository" tıkla
3. Repository adı: `portfolio` (veya istediğin isim)
4. **Public** seç (önemli!)
5. "Create repository" tıkla

### 2. Dosyaları GitHub'a Yükle

Terminal'de şu komutları çalıştır:

```bash
# Portfolyo klasörüne git
cd "/Users/vethacagdas/Desktop/Kişisel Portfolio"

# Git başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: Portfolio website"

# GitHub repo'ya bağla (KENDİ REPO URL'İNİ KULLAN)
git remote add origin https://github.com/vethacagdas/portfolio.git

# Ana branch
git branch -M main

# GitHub'a gönder
git push -u origin main
```

**Not:** Eğer GitHub'da zaten bir repo varsa, URL'yi ona göre değiştir.

### 3. GitHub Pages'i Aktif Et
1. GitHub'da repository sayfasına git
2. Üst menüden **Settings** tıkla
3. Sol menüden **Pages** tıkla
4. **Source** bölümünde:
   - Branch: **main** seç
   - Folder: **/ (root)** seç
5. **Save** butonuna tıkla

### 4. Site Hazır! 🎉
- Birkaç dakika bekle (2-5 dakika)
- Site URL'i: `https://vethacagdas.github.io/portfolio/`
- (Repository adına göre değişir)

---

## Alternatif: Netlify (Daha Hızlı)

### 1. Netlify'e Git
- https://www.netlify.com
- GitHub ile giriş yap

### 2. Deploy
- "Add new site" > "Deploy manually"
- Tüm portfolyo klasörünü sürükle-bırak
- Hemen hazır! (30 saniye)

### 3. URL
- Otomatik URL: `https://random-name.netlify.app`
- Settings'ten custom domain ekleyebilirsin

---

## Google'da Görünmek İçin

### 1. Google Search Console
1. https://search.google.com/search-console
2. "Add property" > "URL prefix"
3. Site URL'ni gir: `https://vethacagdas.github.io/portfolio/`
4. Doğrulama yap (HTML tag yöntemi)
5. GitHub Pages Settings'te custom domain bölümüne verilen tag'i ekle

### 2. Sitemap Gönder
1. Search Console'da "Sitemaps" sekmesi
2. Sitemap URL: `https://vethacagdas.github.io/portfolio/sitemap.xml`
3. "Submit" tıkla

---

## Güncelleme Yapmak İçin

Değişiklik yaptıktan sonra:

```bash
cd "/Users/vethacagdas/Desktop/Kişisel Portfolio"

git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages otomatik olarak güncellenecek (1-2 dakika).

---

## Sorun Giderme

**Site açılmıyor?**
- 5-10 dakika bekle (ilk deploy biraz uzun sürebilir)
- Repository'nin Public olduğundan emin ol
- Settings > Pages'de doğru branch seçili mi kontrol et

**404 hatası?**
- index.html dosyası root klasörde olmalı
- Dosya adı tam olarak `index.html` olmalı (büyük/küçük harf önemli)

**Değişiklikler görünmüyor?**
- Hard refresh yap (Ctrl+F5 veya Cmd+Shift+R)
- Birkaç dakika bekle (cache sorunu olabilir)

---

**Başarılar! 🚀**

