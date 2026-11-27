# ZUNO APK

Telefon odaklı Android proje çalışma alanı. GitHub Pages arayüzü projeleri tarayıcıda düzenler; Android APK üretimi GitHub Actions üzerinden yapılır.

## GitHub Pages
Repository → Settings → Pages → Deploy from a branch → `main` / `/(root)`.

## Özellikler
- Mobil uyumlu proje oluşturma ve yönetme
- Dosya editörü, HTML/CSS/JS canlı önizleme
- Dosya/ZIP içe aktarma ve proje ZIP dışa aktarma
- JSON proje yedeği / geri yükleme
- Taslakların cihaz tarayıcısında saklanması
- PWA kabuğu ve temel çevrimdışı önbellek

**Önemli:** GitHub Pages tarayıcı arayüzü Android SDK/Gradle çalıştırmaz. APK, Actions workflow'unda Android/Capacitor projesi hazırlanarak oluşturulur. Web arayüzünde projeyi düzenlemek, otomatik olarak o projeyi APK'ya dönüştürmek anlamına gelmez; mevcut workflow repodaki ZUNO uygulamasını paketler.

## Gerçek, imzalı Android Release APK
Workflow: [ZUNO Android Release APK](.github/workflows/build-android.yml)

Workflow desteklenen kaynak değişikliklerinde otomatik çalışır; ayrıca Actions sayfasından manuel başlatılabilir. Başarılı derlemede:
1. Capacitor Android kabuğu oluşturulur ve web dosyaları senkronize edilir.
2. GitHub Actions secrets ile **Release** imzası uygulanır.
3. APK, `ZUNO-APK-release` artifact olarak yüklenir.
4. Aynı APK GitHub Release'e eklenir; sürüm etiketi `zuno-apk-0.2.<run_number>` biçimindedir.

### İlk imza kurulumu
Repository → Settings → Secrets and variables → Actions içinde şu secrets bulunmalı:
- `ZUNO_KEYSTORE_BASE64` — release keystore dosyasının Base64 içeriği
- `ZUNO_KEYSTORE_PASSWORD`
- `ZUNO_KEY_ALIAS`
- `ZUNO_KEY_PASSWORD`

Keystore ve parolaları kaynak koda koymayın. Bu keystore kaybolursa veya değiştirilirse mevcut uygulamanın üzerine güncelleme imzalanamaz; anahtarı güvenli yedekleyin.

## Güncelleme kontrolü
Android paketindeki sürüm meta verisi workflow tarafından `0.2.<run_number>` olarak damgalanır; Android versionCode da her workflow çalışmasında artar. Uygulamanın güncelleme ekranı GitHub Releases API'deki son yayını kontrol eder ve Release içindeki APK varlığını arar.

APK'nın mevcut kurulumun üzerine yüklenebilmesi için aynı package ID (`com.mm2ultimatehub.zunoapk`) ve **aynı release imza sertifikası** gerekir. Android yükleme onayı kullanıcıdan istenir; uygulama bu akışta sessizce APK kurmaz.

## Güvenlik
API anahtarlarını, keystore dosyasını veya parolalarını HTML/JavaScript içine ya da commit'e eklemeyin. Yalnızca GitHub Actions secrets kullanın.
