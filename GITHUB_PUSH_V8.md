# GitHub'a "update v8" Versiyonunu Push Etme

## ⚠️ ÖNEMLİ: Force Push Gerekecek

Main branch'e eski bir versiyon (update v8) geri aldık. GitHub'a push etmek için **force push** yapmamız gerekiyor.

---

## Yöntem 1: GitHub Desktop (ÖNERİLEN - Kolay)

### Adım 1: GitHub Desktop'ı Aç
1. GitHub Desktop uygulamasını aç
2. Repository'ni seç: `portfolio_v1`

### Adım 2: Force Push Yap
1. **"Repository"** menüsüne tıkla
2. **"Push origin"** yerine **"Force push origin"** seçeneğini bul
3. Veya: **"Branch"** → **"Force push to origin"**
4. Onayla

### Adım 3: Kontrol Et
1. GitHub web sitesine git: `https://github.com/vethanurcagdas/portfolio_v1`
2. Son commit'in "update v8" olduğunu kontrol et
3. GitHub Pages'in güncellenmesini bekle (1-2 dakika)

---

## Yöntem 2: Terminal (İleri Seviye)

### ⚠️ DİKKAT: Bu komut remote'taki yeni commit'leri SİLECEK!

```bash
cd "/Users/vethacagdas/Desktop/Kişisel Portfolio"

# Force push yap
git push origin main --force

# Veya daha güvenli (force-with-lease)
git push origin main --force-with-lease
```

---

## Sonraki Adımlar

1. **GitHub Pages Linkini Kontrol Et:**
   - `https://vethanurcagdas.github.io/portfolio_v1/`
   - 1-2 dakika bekle, güncellenmesi için

2. **Telefonda Test Et:**
   - GitHub Pages linkini telefonda aç
   - Projeler bölümünü kontrol et
   - Yazılar, linkler görünüyor mu?

3. **Beğenirsen:**
   - Bu versiyonla devam et
   - Gerekirse küçük düzeltmeler yap

4. **Beğenmezsen:**
   - Başka bir versiyona dönebiliriz
   - Veya projeler bölümünü basitleştirebiliriz

---

## ⚠️ UYARI

Force push yapmak, GitHub'daki yeni commit'leri (v9, v10, v11, ... v20) **SİLECEK**. 

Eğer bu commit'lerde önemli bir şey varsa, önce yedek al:
```bash
# Yeni bir branch oluştur (yedek)
git checkout -b backup-before-v8
git push origin backup-before-v8
```

Sonra main'e geri dön:
```bash
git checkout main
git reset --hard 665ff13
git push origin main --force
```


