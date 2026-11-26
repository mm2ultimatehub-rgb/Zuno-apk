# ZUNO APK

**Mobile Android Studio** — telefon odaklı, GitHub Pages üzerinde çalışan Android proje çalışma alanı.

## Kullanım
1. GitHub repository → **Settings → Pages**.
2. Build and deployment bölümünde **Deploy from a branch** seç.
3. Branch: **main**, folder: **/(root)**, ardından **Save**.
4. Pages adresini açıp projeni oluştur.

## Bu sürümde
- Mobil uyumlu koyu/mint arayüz
- Proje oluşturma, isim değiştirme ve silme
- Android paket kimliği biçimi doğrulama
- Projeye dosya ekleme ve kaynak editörü
- HTML/CSS/JS için izole canlı önizleme
- ZIP proje içe aktarma ve ZIP dışa aktarma
- JSON proje yedeği oluşturma / geri yükleme
- Version name, version code ve build profili ayarları
- Yerel tarayıcı depolaması ve otomatik taslak kaydı
- PWA olarak ana ekrana yükleme (uyumlu tarayıcılarda)
- Uygulama kabuğu için service worker ve temel çevrimdışı açılış önbelleği

## Önemli sınırlar
Bu bir **tarayıcı tabanlı proje çalışma alanıdır**, Android Studio'nun tam karşılığı değildir. GitHub Pages üzerinde Android SDK veya Gradle çalıştırılmaz. Şu an gerçek APK build, APK imzalama, release yayınlama ve uygulama içi güncelleme backend'i yoktur. Build ayar ekranı bu bağlantıya hazırlık içindir; sahte APK indirme göstermez.

PWA önbelleği arayüzün temel dosyalarını saklar; ilk ziyaret ve yeni sürüm yüklemesi için internet gerekir. ZIP işlemleri için JSZip CDN kullanılır; ZIP açma/dışa aktarma sırasında internet bağlantısı gerekir. Projeler varsayılan olarak cihazın tarayıcısında saklanır. Tarayıcı verilerini silmeden önce **JSON yedeği** indir.

## Güvenlik
API anahtarını veya keystore parolasını frontend / GitHub Pages dosyalarına yazma. Bunlar yalnızca güvenli backend secrets olarak tutulmalıdır.


## Gerçek Android APK derlemesi (GitHub Actions)

Bu repoya Capacitor Android kabuğu ve `.github/workflows/build-android.yml` eklendi. GitHub Actions, web arayüzünü Android uygulamasına paketler ve **imzalı Release APK** üretir.

### İlk kurulum — imzalama secrets

Repo → **Settings → Secrets and variables → Actions → New repository secret** bölümünde şu dört secret'ı oluştur:

- `ZUNO_KEYSTORE_BASE64` — release `.jks` / `.keystore` dosyasının Base64 içeriği
- `ZUNO_KEYSTORE_PASSWORD` — keystore parolası
- `ZUNO_KEY_ALIAS` — anahtar alias'ı
- `ZUNO_KEY_PASSWORD` — anahtar parolası

Keystore'u veya parolaları kaynak koda commit etme. Base64 üretimi için yerel bilgisayarda `base64 -w 0 zuno-release.keystore` kullanılabilir; Android/Termux ortamlarında `base64 zuno-release.keystore` çıktısının tamamını kopyala.

### Derlemeyi çalıştırma ve APK'yı alma

1. Repo → **Actions** → **ZUNO Android Release APK**.
2. **Run workflow** ile manuel başlat veya desteklenen kaynak dosyaları `main` branch'e gönder.
3. Workflow başarılı olunca çalışmanın **Artifacts** bölümünden `ZUNO-APK-release` dosyasını indir.

Workflow signing secret'ları eksikse güvenli şekilde hata verir; imzasız APK'yı release olarak sunmaz. Bu workflow APK'yı artifact olarak verir, otomatik GitHub Release oluşturmaz ve uygulama içi OTA güncelleme henüz sağlamaz.
