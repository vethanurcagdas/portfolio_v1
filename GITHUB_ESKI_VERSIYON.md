# GitHub'da Eski Versiyona Dönme Rehberi

## Yöntem 1: GitHub Web Arayüzünden (Kolay)

### Adım 1: GitHub Repository'ne Git
1. GitHub'da repository'ni aç: `https://github.com/vethanurcagdas/portfolio_v1`
2. Sağ üstte **"History"** veya **"Commits"** butonuna tıkla
3. Veya URL'ye `/commits/main` ekle: `https://github.com/vethanurcagdas/portfolio_v1/commits/main`

### Adım 2: Eski Commit'i Bul
1. Commit listesinde aşağı kaydır
2. Projeler bölümünün düzgün çalıştığı bir commit'i bul
3. Önerilen commit'ler:
   - `update v10` veya daha öncesi (sayfa sayfa yapısı eklenmeden önce)
   - `update v8` veya `update v7` (basit versiyonlar)

### Adım 3: Commit'i Aç
1. Commit mesajına tıkla (örn: "update v10")
2. Sağ üstte **"Browse files"** butonuna tıkla
3. Artık o commit'in dosyalarını görüyorsun

### Adım 4: Dosyaları İndir
1. Yeşil **"Code"** butonuna tıkla
2. **"Download ZIP"** seçeneğini seç
3. ZIP'i indir ve aç
4. Dosyaları mevcut klasörüne kopyala (yedek al!)

---

## Yöntem 2: Git Komutlarıyla (Terminal)

### Adım 1: Mevcut Değişiklikleri Yedekle
```bash
cd "/Users/vethacagdas/Desktop/Kişisel Portfolio"
git stash  # Mevcut değişiklikleri sakla
```

### Adım 2: Eski Commit'e Git
```bash
# Commit listesini gör
git log --oneline -20

# Örnek: update v10'a dön
git checkout 6172e46  # veya git checkout c2b81f5 (update v10)

# Veya belirli bir commit'e geçici olarak git
git checkout <commit-hash>
```

### Adım 3: Test Et
1. Localhost'ta aç: `http://localhost:8000`
2. Mobilde test et
3. Düzgün çalışıyorsa, bu versiyonu kullan

### Adım 4: Geri Dön (İstersen)
```bash
git checkout main  # Ana branch'e dön
git stash pop      # Değişiklikleri geri getir
```

---

## Yöntem 3: Belirli Dosyaları Eski Versiyondan Geri Yükle

### Sadece script.js'i eski versiyondan almak:
```bash
# Örnek: update v10'dan script.js'i al
git checkout 6172e46 -- script.js

# Veya update v8'den
git checkout 665ff13 -- script.js
```

### Sadece styles.css'i eski versiyondan almak:
```bash
git checkout 6172e46 -- styles.css
```

---

## Önerilen Commit'ler

### Basit ve Çalışan Versiyonlar:
- **`update v10`** (6172e46) - Sayfa sayfa yapısı eklenmeden önce
- **`update v8`** (665ff13) - Daha basit versiyon
- **`update v7`** (eadf4ed) - En basit versiyon

### Kontrol Et:
```bash
# Her commit'in detaylarını gör
git show 6172e46 --stat  # Hangi dosyalar değişmiş?

# Belirli bir dosyayı gör
git show 6172e46:script.js | head -50  # script.js'in ilk 50 satırı
```

---

## Güvenli Yöntem: Yeni Branch Oluştur

Eski versiyonu test etmek için yeni bir branch oluştur:

```bash
# Eski commit'ten yeni branch oluştur
git checkout -b test-old-version 6172e46

# Test et, beğenirsen main'e merge et
# Beğenmezsen: git checkout main
```

---

## ⚠️ DİKKAT

1. **Yedek Al**: Eski versiyona dönmeden önce mevcut dosyaları yedekle
2. **Test Et**: Localhost'ta mutlaka test et
3. **Commit Etme**: Eski versiyona döndükten sonra değişiklikleri commit etmeden önce düşün

---

## Hızlı Çözüm: Sadece Projeler Bölümünü Basitleştir

Eğer eski versiyona dönmek istemiyorsan, projeler bölümünü basitleştirebiliriz:
- Sayfa sayfa yapısını kaldır
- Normal dikey scroll yap
- Mobilde de düzgün çalışır

Bu daha kolay ve hızlı olabilir!



