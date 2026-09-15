# Yumiverse 🍔

Yumiverse, doğru hamburgeri hazırlamaya odaklanan küçük ve sevimli bir web oyunudur. Malzemeleri tabağa doğru sırayla ekleyin, siparişi servis edin ve en yüksek skora ulaşın.

## Oynanış

Ekranın sağ üstündeki siparişi takip edin. Soldaki malzemelere tıklayarak hamburgerinizi oluşturun; ardından **SERVE** düğmesiyle siparişi teslim edin.

Sipariş doğruysa **+100** puan, yanlışsa **-25** puan kazanırsınız. Her servis sonrasında hamburger sıfırlanır ve yeniden hazırlanabilir.

## Özellikler

- Tıklanabilir hamburger malzemeleri
- Katman katman hamburger oluşturma animasyonu
- Sipariş doğrulama ve anlık geri bildirim
- Canlı skor takibi
- Phaser ile hazırlanmış tarayıcı tabanlı oyun deneyimi

## Teknolojiler

- [Phaser](https://phaser.io/) 4
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)

## Başlangıç

Projeyi yerel bilgisayarınızda çalıştırmak için [Node.js](https://nodejs.org/) (güncel LTS sürümü önerilir) yüklü olmalıdır.

```bash
git clone <depo-adresi>
cd yumiverse/frontend
npm install
npm run dev
```

Komutun gösterdiği yerel adresi (genellikle `http://localhost:5173`) tarayıcıda açın.

## Üretim Derlemesi

```bash
cd frontend
npm run build
```

Derleme çıktısı `frontend/dist` klasörüne oluşturulur. Yerelde önizlemek için:

```bash
npm run preview
```

## Proje Yapısı

```text
yumiverse/
├── backend/                 # Gelecekteki sunucu tarafı için başlangıç noktası
├── frontend/
│   ├── public/assets/food/  # Yemek malzemeleri ve tabak görselleri
│   └── src/
│       ├── scenes/
│       │   └── GameScene.ts # Oyun mantığı, skor ve sipariş kontrolü
│       └── main.ts          # Phaser oyun yapılandırması
└── README.md
```

## Geliştirme Notları

- Yeni malzeme eklemek için görseli `frontend/public/assets/food/` içine koyup sahnede yüklemeniz yeterlidir.
- Skor ve servis sonucu aynı sahnede yönetilir; yeni seviyeler veya farklı siparişler eklemek için iyi bir başlangıç noktasıdır.

