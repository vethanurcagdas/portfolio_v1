# 📸 Adım Adım Görsel Rehber - Dosya Yükleme

## Yöntem 1: GitHub Web Arayüzü (Detaylı)

### Adım 1: Repository Oluştur
1. https://github.com adresine git
2. Sağ üst köşede **profil fotoğrafının yanındaki "+"** işaretine tıkla
3. **"New repository"** seç
4. Repository name: `portfolio` yaz
5. **Public** seç (mutlaka!)
6. **"Add a README file"** kutusunu BOŞALT (işaretli olmasın)
7. En altta **"Create repository"** yeşil butonuna tıkla

### Adım 2: Dosya Yükleme Yeri (ÇOK ÖNEMLİ!)

Repository oluşturduktan sonra şu ekranı göreceksin:

**Eğer repository BOŞSA (README yoksa):**
- Ekranda büyük bir mesaj göreceksin: **"Quick setup"** yazısı
- Hemen altında şu linkler var:
  - "…or create a new repository on the command line"
  - "…or push an existing repository from the command line"
  - **"…or upload an existing file"** ← BUNU BUL!
- **"upload an existing file"** linkine tıkla

**Eğer repository'de README varsa:**
- Repository sayfasının **üst kısmında** (dosya listesinin üstünde)
- **"Add file"** butonu var (yeşil buton)
- **"Add file"** > **"Upload files"** tıkla

### Adım 3: Dosyaları Yükle

1. **GitHub sayfasında:**
   - Büyük bir alan göreceksin: "Drag files here to add them to your repository"
   - Veya "choose your files" linki var

2. **Mac Finder'da:**
   - Finder'ı aç (Dock'ta)
   - Sol tarafta **"Desktop"** tıkla
   - **"Kişisel Portfolio"** klasörünü bul
   - Klasöre çift tıkla (içine gir)

3. **Dosyaları seç:**
   - **Command + A** tuşlarına bas (tüm dosyaları seç)
   - Veya tek tek seç:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`
     - `robots.txt`
     - `sitemap.xml`
     - `.gitignore`

4. **Sürükle-Bırak:**
   - Seçili dosyaları tut
   - GitHub tarayıcı sekmesine geç
   - "Drag files here" yazısının olduğu alana bırak

5. **Commit:**
   - Dosyalar yüklendikten sonra en altta
   - **"Commit changes"** yeşil butonuna tıkla
   - Mesaj kutusuna: "Initial commit" yaz (opsiyonel)
   - Tekrar **"Commit changes"** tıkla

---

## Yöntem 2: Netlify (ÇOK DAHA KOLAY! ÖNERİLEN)

GitHub karmaşık geliyorsa, Netlify çok daha kolay:

### Adım 1: Netlify'e Git
1. https://www.netlify.com adresine git
2. **"Sign up"** veya **"Log in"** tıkla
3. **"Sign up with GitHub"** seç (GitHub hesabınla giriş yap)

### Adım 2: Site Yükle
1. Netlify dashboard'da (ana sayfa)
2. **"Add new site"** butonuna tıkla
3. **"Deploy manually"** seçeneğini tıkla

4. **Büyük bir alan göreceksin:**
   - "Drag and drop your site output folder here"
   - Veya "Browse to upload" linki

5. **Finder'da:**
   - Desktop > "Kişisel Portfolio" klasörünü aç
   - **Tüm klasörü seç** (Command + A)
   - Netlify sayfasındaki alana **sürükle-bırak**

6. **Otomatik Deploy:**
   - Dosyalar yüklendikten sonra otomatik deploy başlar
   - 30 saniye içinde hazır!

7. **Site URL:**
   - Otomatik bir URL verilir: `https://random-name-123.netlify.app`
   - Bu URL'i kopyala ve paylaş!

### Netlify Avantajları:
- ✅ Terminal komutu yok
- ✅ GitHub'a yükleme yok
- ✅ Sadece sürükle-bırak
- ✅ 30 saniyede hazır
- ✅ Otomatik HTTPS
- ✅ Custom domain ekleyebilirsin (ücretsiz)

---

## Yöntem 3: ZIP ile Yükleme (Alternatif)

Eğer sürükle-bırak çalışmazsa:

1. **Portfolyo klasörünü ZIP yap:**
   - Finder'da "Kişisel Portfolio" klasörüne sağ tıkla
   - **"Compress 'Kişisel Portfolio'"** seç
   - `Kişisel Portfolio.zip` dosyası oluşur

2. **GitHub'da:**
   - "Add file" > "Upload files"
   - ZIP dosyasını yükle
   - GitHub otomatik açacak

---

## Hangi Yöntemi Seçmeliyim?

**Netlify önerilir çünkü:**
- En kolay
- En hızlı
- Terminal yok
- GitHub'a yükleme yok

**GitHub Pages istiyorsan:**
- Ücretsiz
- GitHub'da kodların durur
- Ama biraz daha karmaşık

---

## Sorun mu Var?

**"Add file" butonunu bulamıyorum:**
- Repository sayfasının en üstüne bak
- Yeşil butonlar arasında "Add file" var

**Dosyalar yüklenmiyor:**
- Tarayıcıyı yenile (F5)
- Başka tarayıcı dene (Chrome, Safari)
- ZIP yapıp yükle

**"Drag files here" alanı görünmüyor:**
- "upload an existing file" linkine tıkla
- Veya Netlify kullan (daha kolay!)

---

**Netlify en kolay yöntem! Önce onu dene!** 🚀



