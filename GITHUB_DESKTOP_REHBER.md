# 🖥️ GitHub Desktop ile Portfolyo Yükleme Rehberi

## Adım 1: GitHub Desktop İndir ve Kur

1. **GitHub Desktop İndir**
   - Tarayıcıda şu adresi aç: https://desktop.github.com
   - **"Download for macOS"** butonuna tıkla
   - İndirilen dosyayı aç ve kurulumu tamamla

2. **GitHub Desktop'u Aç**
   - Applications klasöründen GitHub Desktop'u aç
   - İlk açılışta giriş ekranı gelecek

## Adım 2: GitHub Hesabınla Giriş Yap

1. **"Sign in to GitHub.com"** butonuna tıkla
2. Tarayıcı açılacak, GitHub hesabınla giriş yap
3. "Authorize GitHub Desktop" butonuna tıkla
4. GitHub Desktop'a geri dön

## Adım 3: Repository Ekle

1. **GitHub Desktop'da:**
   - Üst menüden **"File"** > **"Add Local Repository"** tıkla
   - Veya **"File"** > **"New Repository"** (yeni oluşturmak için)

2. **Klasörü Seç:**
   - "Choose..." butonuna tıkla
   - Finder'da: Desktop > **"Kişisel Portfolio"** klasörünü seç
   - **"Add Repository"** tıkla

## Adım 4: GitHub'a Yükle

1. **Repository Kontrolü:**
   - Sol tarafta "Kişisel Portfolio" repository'sini göreceksin
   - Sağ tarafta değişiklikler listesi var

2. **Commit Yap:**
   - Sol altta "Summary" kutusuna: "Initial commit: Portfolio website" yaz
   - **"Commit to main"** butonuna tıkla

3. **GitHub'a Push:**
   - Üst menüden **"Repository"** > **"Push origin"** tıkla
   - Veya sağ üstteki **"Publish repository"** butonuna tıkla
   - Eğer "Publish repository" görünüyorsa, ona tıkla (ilk kez yükleniyorsa)

4. **Repository Ayarları:**
   - "Publish repository" penceresi açılacak
   - Name: `portfolio` (veya istediğin isim)
   - Description: "Personal Portfolio Website" (opsiyonel)
   - **"Keep this code private"** kutusunu BOŞALT (Public olsun!)
   - **"Publish repository"** yeşil butonuna tıkla

## Adım 5: GitHub Pages'i Aktif Et

1. **GitHub Web'de:**
   - https://github.com/vethacagdas/portfolio adresine git
   - (Repository adına göre değişir)

2. **Settings > Pages:**
   - Repository sayfasında **"Settings"** tıkla
   - Sol menüden **"Pages"** tıkla
   - Source: **"Deploy from a branch"** seç
   - Branch: **"main"** seç
   - Folder: **"/ (root)"** seç
   - **"Save"** butonuna tıkla

## Adım 6: Site Hazır! 🎉

- 2-5 dakika bekle
- Site URL'i: `https://vethacagdas.github.io/portfolio/`
- (Repository adına göre değişir)

---

## Güncelleme Yapmak İçin

1. Dosyalarda değişiklik yap
2. GitHub Desktop'u aç
3. Değişiklikler otomatik görünecek
4. "Summary" kutusuna mesaj yaz (örn: "Update projects")
5. **"Commit to main"** tıkla
6. **"Push origin"** tıkla (üst menüden)

---

## Sorun Giderme

**"Add Local Repository" çalışmıyor:**
- Klasör zaten git repository'si (normal)
- Direkt "Publish repository" yapabilirsin

**"Publish repository" görünmüyor:**
- Repository zaten GitHub'da olabilir
- "Push origin" yap

**Site açılmıyor:**
- 5-10 dakika bekle
- Settings > Pages'de doğru ayarları kontrol et
- Repository'nin Public olduğundan emin ol

---

**GitHub Desktop çok daha kolay! Terminal komutlarına gerek yok!** 🚀




