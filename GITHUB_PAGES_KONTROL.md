# 🔍 GitHub Pages Kontrol ve Çözüm

## Adım 1: GitHub Desktop'ta Push Et

1. **GitHub Desktop'u aç**
2. Değişiklikler görünecek (yeşil + işaretleri)
3. Sol altta "Summary" kutusuna: "Update URLs for portfolio_v1" yaz
4. **"Commit to main"** tıkla
5. **"Push origin"** butonuna tıkla (sağ üstte veya üst menüden)

## Adım 2: GitHub Pages Ayarlarını Kontrol Et

1. **GitHub Web'de:**
   - https://github.com/vethacagdas/portfolio_v1 adresine git
   - Üst menüden **"Settings"** tıkla

2. **Pages Sekmesi:**
   - Sol menüden **"Pages"** tıkla
   - (Eğer "Pages" görünmüyorsa, repository Public değil demektir)

3. **Source Ayarları:**
   - **"Deploy from a branch"** seçili olmalı
   - **Branch:** "main" seç
   - **Folder:** "/ (root)" seç
   - **"Save"** butonuna tıkla

4. **Kontrol:**
   - Sayfayı yenile
   - Yeşil bir kutu göreceksin: "Your site is live at https://vethacagdas.github.io/portfolio_v1/"
   - Eğer görünmüyorsa, 5 dakika bekle ve tekrar kontrol et

## Adım 3: Actions Kontrolü

1. Repository sayfasında **"Actions"** sekmesine tıkla
2. Eğer bir build işlemi varsa, orada görünecek
3. Yeşil tik işareti = başarılı
4. Kırmızı X = hata (detaylarına bak)

## Adım 4: Site Kontrolü

1. **5-10 dakika bekle** (GitHub Pages build etmesi için)
2. Tarayıcıda: https://vethacagdas.github.io/portfolio_v1/
3. **Hard refresh yap:** Cmd + Shift + R (Mac) veya Ctrl + F5 (Windows)

---

## ❌ Hala Çalışmıyorsa

### Kontrol Listesi:
- [ ] Repository Public mi? (Settings > Danger Zone'da kontrol et)
- [ ] Settings > Pages'de Source ayarlı mı?
- [ ] Branch: "main", Folder: "/ (root)" seçili mi?
- [ ] index.html dosyası root'ta mı? (repository sayfasında kontrol et)
- [ ] GitHub Desktop'ta push yaptın mı?
- [ ] 10 dakika bekledin mi?

### Alternatif Çözüm:

Eğer hala çalışmıyorsa, repository'yi silip yeniden oluştur:

1. GitHub'da repository'yi sil (Settings > Danger Zone > Delete this repository)
2. GitHub Desktop'ta "Publish repository" yap
3. Yeni repository oluştur
4. GitHub Pages'i aktif et

---

**GitHub Desktop'ta push yaptın mı? Settings > Pages'de ne görüyorsun?**







