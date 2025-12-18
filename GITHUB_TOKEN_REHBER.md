# 🔐 GitHub Token Oluşturma Rehberi

GitHub'a terminalden push yapmak için token gerekiyor. İşte adımlar:

## Adım 1: GitHub'da Token Oluştur

1. **GitHub'a Git**
   - https://github.com adresine git
   - Giriş yap

2. **Settings'e Git**
   - Sağ üstte profil fotoğrafına tıkla
   - **"Settings"** seç

3. **Developer Settings**
   - Sol menüden en altta **"Developer settings"** tıkla

4. **Personal Access Tokens**
   - **"Personal access tokens"** > **"Tokens (classic)"** tıkla
   - Veya direkt: https://github.com/settings/tokens

5. **Generate New Token**
   - **"Generate new token"** > **"Generate new token (classic)"** tıkla

6. **Token Ayarları**
   - Note: "Portfolio Deploy" yaz (ne için olduğunu hatırlamak için)
   - Expiration: "90 days" veya "No expiration" seç
   - Scopes: Şunları işaretle:
     - ✅ **repo** (tüm kutucukları işaretler)
     - ✅ **workflow** (opsiyonel)

7. **Generate Token**
   - En altta **"Generate token"** yeşil butonuna tıkla
   - **ÖNEMLİ:** Token'ı hemen kopyala! (bir daha göremezsin)
   - Örnek: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

## Adım 2: Terminal'de Kullan

Token'ı kopyaladıktan sonra, terminal'de şu komutu çalıştır:

```bash
cd "/Users/vethacagdas/Desktop/Kişisel Portfolio"
git push -u origin main
```

Username sorduğunda: GitHub kullanıcı adını gir (vethacagdas)
Password sorduğunda: Token'ı yapıştır (ghp_... ile başlayan)

---

## Alternatif: GitHub Desktop (Daha Kolay!)

Terminal karmaşık geliyorsa:

1. **GitHub Desktop İndir**
   - https://desktop.github.com
   - İndir ve kur

2. **GitHub ile Giriş Yap**
   - GitHub Desktop'u aç
   - GitHub hesabınla giriş yap

3. **Repository Ekle**
   - File > Add Local Repository
   - "Kişisel Portfolio" klasörünü seç

4. **Push Yap**
   - "Publish repository" butonuna tıkla
   - Otomatik GitHub'a yükler!

---

## En Kolay: Web Arayüzü

Terminal zor geliyorsa, GitHub web'den yükle:

1. https://github.com/vethacagdas/portfolio adresine git
2. "Add file" > "Upload files"
3. Dosyaları sürükle-bırak
4. "Commit changes" tıkla

---

**Hangi yöntemi tercih edersin?**





