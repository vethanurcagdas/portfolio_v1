# 🔧 GitHub Pages 404 Hatası Çözümü

404 hatası alıyorsan, GitHub Pages henüz aktif değil veya yanlış yapılandırılmış demektir.

## ✅ Kontrol Listesi

### 1. GitHub Pages Ayarları

1. **GitHub Repository Sayfasına Git:**
   - https://github.com/vethacagdas/portfolio_v1
   - Üst menüden **"Settings"** tıkla

2. **Pages Sekmesi:**
   - Sol menüden **"Pages"** tıkla
   - (Eğer "Pages" görünmüyorsa, repository Public değil demektir - Public yap!)

3. **Source Ayarları:**
   - **Source:** "Deploy from a branch" seç
   - **Branch:** "main" seç
   - **Folder:** "/ (root)" seç
   - **Save** butonuna tıkla

4. **Bekle:**
   - 2-5 dakika bekle
   - Sayfayı yenile (F5)
   - Yeşil bir mesaj göreceksin: "Your site is live at..."

### 2. Repository Public mi?

- Repository sayfasında (ana sayfa)
- Sağ üstte "Settings" yanında repository ayarları var
- "Change visibility" veya benzer bir buton görüyorsan, Public olduğundan emin ol

### 3. index.html Dosyası Root'ta mı?

- Repository sayfasında dosyaları kontrol et
- `index.html` dosyası en üstte (root'ta) olmalı
- Bir klasörün içinde olmamalı

### 4. GitHub Actions Kontrolü

1. Repository sayfasında **"Actions"** sekmesine tıkla
2. Eğer bir build/hata varsa, orada görünecek
3. Yeşil tik işareti görüyorsan, build başarılı demektir

---

## 🚀 Hızlı Çözüm

Eğer hala çalışmıyorsa:

1. **GitHub Desktop'ta:**
   - Değişiklikleri push et (eğer varsa)
   - "Push origin" butonuna tıkla

2. **GitHub Web'de:**
   - Settings > Pages
   - Source'u tekrar seç ve Save yap
   - 5 dakika bekle

3. **Tarayıcıda:**
   - Hard refresh yap: **Cmd + Shift + R** (Mac) veya **Ctrl + F5** (Windows)
   - Cache temizlenmiş olur

---

## 📝 Kontrol Et

- ✅ Repository Public mi?
- ✅ Settings > Pages'de Source ayarlı mı?
- ✅ Branch: main, Folder: / (root) seçili mi?
- ✅ index.html root'ta mı?
- ✅ 5 dakika bekledin mi?

---

**Hala çalışmıyorsa, GitHub Pages ayarları ekranının screenshot'ını paylaş, birlikte çözelim!**





