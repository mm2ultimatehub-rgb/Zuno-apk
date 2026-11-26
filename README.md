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
