import batik1 from '../../assets/batiks/batik-1.png';
import batik2 from '../../assets/batiks/batik-2.png';
import batik3 from '../../assets/batiks/batik-3.png';
import batik4 from '../../assets/batiks/batik-4.png';
import batik5 from '../../assets/batiks/batik-5.png';
import batik6 from '../../assets/batiks/batik-6.png';

const batiksData = [
  {
    nama: 'Batik Parang',
    asal: 'DI Yogyakarta',
    kota: 'Yogyakarta',
    image: batik1,
    filosofi: 'Batik Parang melambangkan kekuatan, keteguhan, serta perjuangan yang tidak pernah putus.',
    caraMembuat: 'Batik Parang dibuat dengan teknik cap dan tulis, menggunakan malam pada kain mori yang kemudian dicelup ke dalam pewarna alami.',
  },
  {
    nama: 'Batik Aselole',
    asal: 'Jawa Timur',
    kota: 'Surabaya',
    image: batik2,
    filosofi: 'Batik Aselole adalah simbol kehidupan masyarakat pesisir yang ceria dan penuh warna.',
    caraMembuat: 'Proses pembuatan Batik Aselole melalui teknik batik tulis, dimana motif laut dan perahu menjadi tema utama.',
  },
  {
    nama: 'Batik Makmur',
    asal: 'Kalimantan Utara',
    kota: 'Tarakan',
    image: batik3,
    filosofi: 'Batik Makmur menggambarkan kemakmuran dan kedamaian suku Dayak di Kalimantan.',
    caraMembuat: 'Batik Makmur dibuat dengan teknik batik cap dan pewarnaan alam yang mencerminkan keharmonisan dengan alam.',
  },
  {
    nama: 'Batik Kachaw',
    asal: 'Papua',
    kota: 'Jayapura',
    image: batik4,
    filosofi: 'Batik Kachaw merupakan simbol dari keanekaragaman flora dan fauna Papua, dengan motif khas burung cenderawasih.',
    caraMembuat: 'Batik Kachaw menggunakan teknik pewarnaan alami dari bahan tumbuhan asli Papua, dengan proses batik tulis yang detail.',
  },
  {
    nama: 'Batik Emyu',
    asal: 'Sumatera Utara',
    kota: 'Medan',
    image: batik5,
    filosofi: 'Batik Emyu melambangkan kekuatan dan kebijaksanaan budaya Batak, dengan corak khas ulos.',
    caraMembuat: 'Proses pembuatan Batik Emyu melalui teknik gabungan cap dan tulis dengan warna-warna cerah yang melambangkan semangat hidup.',
  },
  {
    nama: 'Batik Ragam',
    asal: 'Jawa Barat',
    kota: 'Bandung',
    image: batik6,
    filosofi: 'Batik Ragam adalah simbol keindahan alam Sunda dengan motif daun dan bunga yang melambangkan keharmonisan.',
    caraMembuat: 'Batik Ragam dibuat menggunakan teknik pewarnaan alam dengan proses cap dan tulis, menghasilkan warna-warna alami yang lembut.',
  },
  {
    nama: 'Batik Melayu',
    asal: 'Kepulauan Riau',
    kota: 'Tanjung Pinang',
    image: batik1, // Repeated image
    filosofi: 'Batik Melayu menggambarkan kekayaan budaya Melayu yang anggun dan bersahaja.',
    caraMembuat: 'Batik Melayu dibuat menggunakan teknik batik tulis dengan motif-motif khas melayu seperti bunga melati dan pucuk rebung.',
  },
  {
    nama: 'Batik Borneo',
    asal: 'Kalimantan Barat',
    kota: 'Pontianak',
    image: batik2, // Repeated image
    filosofi: 'Batik Borneo terinspirasi dari kekayaan alam dan budaya suku Dayak yang kuat.',
    caraMembuat: 'Proses pembuatan Batik Borneo menggunakan teknik cap dan pewarnaan alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Rote',
    asal: 'Nusa Tenggara Timur',
    kota: 'Kupang',
    image: batik3, // Repeated image
    filosofi: 'Batik Rote menampilkan motif khas Rote dengan simbol-simbol kehidupan masyarakat pesisir yang penuh semangat.',
    caraMembuat: 'Batik Rote dibuat dengan teknik tulis menggunakan pewarna alami yang menggambarkan laut dan ombak.',
  },
  {
    nama: 'Batik Aceh',
    asal: 'Aceh',
    kota: 'Banda Aceh',
    image: batik4, // Repeated image
    filosofi: 'Batik Aceh menggambarkan keagungan budaya Islam yang tercermin dalam motif geometris dan flora.',
    caraMembuat: 'Batik Aceh menggunakan teknik tulis dengan pewarnaan alam dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Sasambo',
    asal: 'Nusa Tenggara Barat',
    kota: 'Mataram',
    image: batik5, // Repeated image
    filosofi: 'Batik Sasambo mencerminkan kebersamaan tiga etnis besar di NTB yaitu Sasak, Samawa, dan Mbojo.',
    caraMembuat: 'Batik Sasambo dibuat dengan teknik cap dan tulis yang menggabungkan unsur budaya ketiga etnis tersebut.',
  },
  {
    nama: 'Batik Cendrawasih',
    asal: 'Papua Barat',
    kota: 'Manokwari',
    image: batik6, // Repeated image
    filosofi: 'Batik Cendrawasih menggambarkan keindahan dan kelestarian fauna khas Papua Barat, khususnya burung cendrawasih.',
    caraMembuat: 'Batik ini dibuat dengan teknik batik tulis yang detail, menggunakan pewarna alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Lampung',
    asal: 'Lampung',
    kota: 'Bandar Lampung',
    image: batik1, // Repeated image
    filosofi: 'Batik Lampung dikenal dengan motif gajah dan siger, lambang dari budaya Lampung yang kaya akan tradisi.',
    caraMembuat: 'Batik Lampung dibuat dengan teknik tulis dan cap, menggunakan pewarna alami yang berasal dari bahan lokal.',
  },
  {
    nama: 'Batik Bali',
    asal: 'Bali',
    kota: 'Denpasar',
    image: batik2, // Repeated image
    filosofi: 'Batik Bali menggabungkan keindahan alam pulau Dewata dengan unsur spiritual dan adat istiadat masyarakat Bali.',
    caraMembuat: 'Batik Bali dibuat dengan teknik tulis dan cap, sering menggunakan warna-warna cerah yang mewakili alam Bali.',
  },
  {
    nama: 'Batik Bangka',
    asal: 'Bangka Belitung',
    kota: 'Pangkal Pinang',
    image: batik3, // Repeated image
    filosofi: 'Batik Bangka mencerminkan kekayaan alam pulau timah dengan motif-motif seperti ikan dan tanaman laut.',
    caraMembuat: 'Batik Bangka dibuat dengan teknik cap dan tulis, pewarnaan dilakukan dengan bahan alami seperti tanaman indigo.',
  },
  {
    nama: 'Batik Betawi',
    asal: 'DKI Jakarta',
    kota: 'Jakarta',
    image: batik5, // Repeated image
    filosofi: 'Batik Betawi melambangkan keragaman budaya suku Betawi dengan motif khas ondel-ondel dan kembang kelapa.',
    caraMembuat: 'Batik Betawi menggunakan teknik tulis dan cap dengan warna-warna cerah yang mencerminkan semangat kota Jakarta.',
  },
  {
    nama: 'Batik Minang',
    asal: 'Sumatera Barat',
    kota: 'Padang',
    image: batik6, // Repeated image
    filosofi: 'Batik Minang menampilkan motif-motif khas budaya Minangkabau, seperti rumah gadang dan ukiran khas Minang.',
    caraMembuat: 'Batik Minang dibuat dengan teknik tulis yang detail, menggunakan pewarna alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Gorontalo',
    asal: 'Gorontalo',
    kota: 'Gorontalo',
    image: batik1, // Repeated image
    filosofi: 'Batik Gorontalo menampilkan motif tumbuhan dan hewan khas Gorontalo seperti burung maleo.',
    caraMembuat: 'Batik ini dibuat dengan teknik cap dan tulis, menggunakan pewarna alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Toraja',
    asal: 'Sulawesi Selatan',
    kota: 'Makassar',
    image: batik2, // Repeated image
    filosofi: 'Batik Toraja menampilkan motif ukiran khas suku Toraja yang melambangkan kehidupan dan kematian.',
    caraMembuat: 'Batik Toraja dibuat dengan teknik tulis dan pewarnaan alam dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Bugis',
    asal: 'Sulawesi Barat',
    kota: 'Mamuju',
    image: batik3, // Repeated image
    filosofi: 'Batik Bugis menampilkan motif khas dari budaya Bugis yang kuat, dengan warna-warna cerah.',
    caraMembuat: 'Batik Bugis dibuat dengan teknik cap dan tulis yang mewakili semangat masyarakat Bugis.',
  },
  {
    nama: 'Batik Maluku',
    asal: 'Maluku',
    kota: 'Ambon',
    image: batik4, // Repeated image
    filosofi: 'Batik Maluku menampilkan motif-motif flora dan fauna khas Maluku, seperti pala dan cengkih.',
    caraMembuat: 'Batik Maluku dibuat dengan teknik batik tulis yang menggambarkan kekayaan alam Maluku.',
  },
  {
    nama: 'Batik Tidore',
    asal: 'Maluku Utara',
    kota: 'Sofifi',
    image: batik5, // Repeated image
    filosofi: 'Batik Tidore terinspirasi dari kekayaan laut Maluku Utara, dengan motif perahu dan ikan.',
    caraMembuat: 'Batik ini dibuat dengan teknik cap dan tulis menggunakan pewarna alami dari bahan lokal.',
  },
  {
    nama: 'Batik Palembang',
    asal: 'Sumatera Selatan',
    kota: 'Palembang',
    image: batik6, // Repeated image
    filosofi: 'Batik Palembang terkenal dengan motif songket yang rumit dan penuh dengan filosofi kemakmuran.',
    caraMembuat: 'Batik Palembang dibuat dengan teknik gabungan cap dan tulis dengan warna-warna cerah dan mewah.',
  },
  {
    nama: 'Batik Manado',
    asal: 'Sulawesi Utara',
    kota: 'Manado',
    image: batik1, // Repeated image
    filosofi: 'Batik Manado menggambarkan flora dan fauna khas Sulawesi Utara, seperti bunga cengkeh dan burung tarsius.',
    caraMembuat: 'Batik Manado dibuat dengan teknik tulis dan pewarnaan alami dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Minahasa',
    asal: 'Sulawesi Utara',
    kota: 'Tomohon',
    image: batik2, // Repeated image
    filosofi: 'Batik Minahasa terinspirasi dari budaya suku Minahasa dengan motif-motif geometris yang unik.',
    caraMembuat: 'Batik ini dibuat dengan teknik batik tulis, menggunakan pewarnaan alami dari bahan lokal.',
  },
  {
    nama: 'Batik Mandar',
    asal: 'Sulawesi Barat',
    kota: 'Mamuju',
    image: batik3, // Repeated image
    filosofi: 'Batik Mandar menampilkan motif-motif khas dari budaya pesisir Mandar, melambangkan kelautan dan keberanian.',
    caraMembuat: 'Batik Mandar dibuat menggunakan teknik cap dan tulis dengan pewarna alami dari bahan lokal.',
  },
  {
    nama: 'Batik Sangir',
    asal: 'Sulawesi Utara',
    kota: 'Tahuna',
    image: batik4, // Repeated image
    filosofi: 'Batik Sangir menggambarkan kekayaan laut dan budaya pesisir di Sulawesi Utara, dengan motif ikan dan kapal.',
    caraMembuat: 'Batik Sangir dibuat dengan teknik tulis, menggunakan pewarna alami dari bahan lokal.',
  },
  {
    nama: 'Batik Saluang',
    asal: 'Sumatera Barat',
    kota: 'Bukittinggi',
    image: batik5, // Repeated image
    filosofi: 'Batik Saluang mengambil inspirasi dari alat musik tradisional Minangkabau, menggambarkan kekayaan budaya.',
    caraMembuat: 'Batik ini dibuat dengan teknik gabungan cap dan tulis, menggunakan pewarna alami dari tanaman lokal.',
  },
  {
    nama: 'Batik Mandailing',
    asal: 'Sumatera Utara',
    kota: 'Panyabungan',
    image: batik6, // Repeated image
    filosofi: 'Batik Mandailing menampilkan motif ulos yang merupakan bagian penting dari adat istiadat suku Mandailing.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap, sering kali menggunakan warna hitam, merah, dan putih.',
  },
  {
    nama: 'Batik Tanimbar',
    asal: 'Maluku',
    kota: 'Saumlaki',
    image: batik1, // Repeated image
    filosofi: 'Batik Tanimbar terinspirasi dari motif tenun tradisional dengan sentuhan modern, melambangkan kekuatan dan keharmonisan.',
    caraMembuat: 'Batik Tanimbar dibuat dengan teknik tulis dan cap, menggunakan pewarna alami dari tumbuhan.',
  },
  {
    nama: 'Batik Tobelo',
    asal: 'Maluku Utara',
    kota: 'Halmahera Utara',
    image: batik2, // Repeated image
    filosofi: 'Batik Tobelo menggambarkan kekayaan flora dan fauna Maluku Utara, dengan motif burung dan tumbuhan endemik.',
    caraMembuat: 'Batik ini dibuat dengan teknik cap dan pewarnaan alami dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Anoa',
    asal: 'Sulawesi Tenggara',
    kota: 'Kendari',
    image: batik3, // Repeated image
    filosofi: 'Batik Anoa menampilkan motif hewan endemik Sulawesi Tenggara, yaitu anoa, yang melambangkan kekuatan dan keindahan alam.',
    caraMembuat: 'Batik Anoa dibuat dengan teknik tulis dan cap, menggunakan pewarna alami dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Banten',
    asal: 'Banten',
    kota: 'Serang',
    image: batik4, // Repeated image
    filosofi: 'Batik Banten terinspirasi dari budaya Kerajaan Banten dengan motif geometris dan flora yang melambangkan kejayaan masa lampau.',
    caraMembuat: 'Batik ini dibuat menggunakan teknik cap dan tulis, pewarna alami digunakan untuk memberikan sentuhan tradisional.',
  },
  {
    nama: 'Batik Nias',
    asal: 'Sumatera Utara',
    kota: 'Gunungsitoli',
    image: batik5, // Repeated image
    filosofi: 'Batik Nias menggambarkan kekuatan budaya masyarakat Nias, dengan motif-motif ukiran batu megalitikum.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap, menggunakan pewarna alami yang berasal dari bahan lokal.',
  },
  {
    nama: 'Batik Sigi',
    asal: 'Sulawesi Tengah',
    kota: 'Palu',
    image: batik6, // Repeated image
    filosofi: 'Batik Sigi menggambarkan kekayaan budaya Kaili dan alam Sulawesi Tengah, dengan motif geometris yang khas.',
    caraMembuat: 'Batik Sigi dibuat dengan teknik batik tulis yang menggunakan pewarna alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Sumbawa',
    asal: 'Nusa Tenggara Barat',
    kota: 'Sumbawa Besar',
    image: batik1, // Repeated image
    filosofi: 'Batik Sumbawa terkenal dengan motif kerbau dan flora khas yang mencerminkan kehidupan masyarakat Sumbawa.',
    caraMembuat: 'Batik ini dibuat dengan teknik cap dan tulis menggunakan pewarna alami dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Donggala',
    asal: 'Sulawesi Tengah',
    kota: 'Donggala',
    image: batik2, // Repeated image
    filosofi: 'Batik Donggala menggambarkan flora dan fauna khas Donggala, dengan motif yang melambangkan kemakmuran.',
    caraMembuat: 'Batik ini dibuat dengan teknik batik tulis, menggunakan pewarna alami yang ramah lingkungan.',
  },
  {
    nama: 'Batik Bima',
    asal: 'Nusa Tenggara Barat',
    kota: 'Bima',
    image: batik3, // Repeated image
    filosofi: 'Batik Bima menggabungkan unsur tradisional dan modern dengan motif khas Nusa Tenggara yang unik.',
    caraMembuat: 'Batik ini dibuat menggunakan teknik cap dan tulis, menggunakan pewarnaan alami yang ramah lingkungan.',
  },
  {
    nama: 'Batik Banyuwangi',
    asal: 'Jawa Timur',
    kota: 'Banyuwangi',
    image: batik4, // Repeated image
    filosofi: 'Batik Banyuwangi menampilkan motif gajah oling yang melambangkan kekuatan dan ketahanan.',
    caraMembuat: 'Batik Banyuwangi dibuat dengan teknik cap dan tulis menggunakan pewarna alami yang ramah lingkungan.',
  },
  {
    nama: 'Batik Kerinci',
    asal: 'Jambi',
    kota: 'Sungai Penuh',
    image: batik5, // Repeated image
    filosofi: 'Batik Kerinci menampilkan motif flora dan fauna khas Kerinci seperti bunga raflesia dan harimau sumatera.',
    caraMembuat: 'Batik ini dibuat dengan teknik batik tulis, menggunakan pewarna alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Pagaralam',
    asal: 'Sumatera Selatan',
    kota: 'Pagaralam',
    image: batik6, // Repeated image
    filosofi: 'Batik Pagaralam terkenal dengan motif flora dan fauna yang mencerminkan kekayaan alam di daerah Pagaralam.',
    caraMembuat: 'Batik ini dibuat dengan teknik cap dan tulis dengan pewarnaan alami dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Ternate',
    asal: 'Maluku Utara',
    kota: 'Ternate',
    image: batik1, // Repeated image
    filosofi: 'Batik Ternate menampilkan motif pala dan cengkih yang merupakan komoditas utama daerah tersebut.',
    caraMembuat: 'Batik Ternate dibuat dengan teknik cap dan tulis, menggunakan pewarna alami dari bahan lokal.',
  },
  {
    nama: 'Batik Kapuas',
    asal: 'Kalimantan Tengah',
    kota: 'Palangkaraya',
    image: batik2, // Repeated image
    filosofi: 'Batik Kapuas terinspirasi dari kekayaan alam hutan dan sungai Kapuas dengan motif flora dan fauna.',
    caraMembuat: 'Batik ini dibuat dengan teknik batik tulis, menggunakan pewarna alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Dayak',
    asal: 'Kalimantan Timur',
    kota: 'Samarinda',
    image: batik3, // Repeated image
    filosofi: 'Batik Dayak menggambarkan kekuatan dan keindahan budaya Dayak, dengan motif ukiran khas suku Dayak.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap, sering menggunakan pewarna alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Kutai',
    asal: 'Kalimantan Timur',
    kota: 'Kutai Kartanegara',
    image: batik4, // Repeated image
    filosofi: 'Batik Kutai terkenal dengan motif flora dan fauna yang mencerminkan budaya Kutai Kartanegara.',
    caraMembuat: 'Batik Kutai dibuat dengan teknik cap dan tulis menggunakan pewarna alami dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Paser',
    asal: 'Kalimantan Selatan',
    kota: 'Tana Paser',
    image: batik5, // Repeated image
    filosofi: 'Batik Paser menampilkan motif khas budaya Paser dengan simbol-simbol keberanian dan keindahan alam.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap, sering menggunakan pewarna alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Sintang',
    asal: 'Kalimantan Barat',
    kota: 'Sintang',
    image: batik1, // Repeated image
    filosofi: 'Batik Sintang terinspirasi dari alam Kalimantan dengan motif flora dan fauna yang khas.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Hulu Sungai',
    asal: 'Kalimantan Selatan',
    kota: 'Amuntai',
    image: batik2, // Repeated image
    filosofi: 'Batik Hulu Sungai menampilkan motif ikan patin dan flora sungai yang mencerminkan kehidupan masyarakat lokal.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis, menggunakan pewarna alami dari bahan lokal.',
  },
  {
    nama: 'Batik Landak',
    asal: 'Kalimantan Barat',
    kota: 'Ngabang',
    image: batik3, // Repeated image
    filosofi: 'Batik Landak menggambarkan kekayaan hutan tropis dengan motif fauna seperti landak dan tumbuhan liar.',
    caraMembuat: 'Batik ini dibuat dengan teknik cap dan pewarna alami dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Balikpapan',
    asal: 'Kalimantan Timur',
    kota: 'Balikpapan',
    image: batik4, // Repeated image
    filosofi: 'Batik Balikpapan terinspirasi dari kehidupan masyarakat pesisir, dengan motif perahu dan laut.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap, menggunakan pewarna alami dari bahan lokal.',
  },
  {
    nama: 'Batik Paser',
    asal: 'Kalimantan Timur',
    kota: 'Tana Paser',
    image: batik5, // Repeated image
    filosofi: 'Batik Paser menampilkan motif flora dan fauna hutan tropis serta simbol suku Paser yang melambangkan keharmonisan dengan alam.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Tidung',
    asal: 'Kalimantan Utara',
    kota: 'Tarakan',
    image: batik6, // Repeated image
    filosofi: 'Batik Tidung mencerminkan kekayaan budaya suku Tidung, dengan motif-motif seperti burung enggang dan flora lokal.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap, menggunakan pewarna alami dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Kubu Raya',
    asal: 'Kalimantan Barat',
    kota: 'Sungai Raya',
    image: batik1, // Repeated image
    filosofi: 'Batik Kubu Raya terkenal dengan motif kehidupan sungai dan flora endemik dari hutan Kalimantan Barat.',
    caraMembuat: 'Batik ini dibuat dengan teknik cap dan tulis menggunakan pewarna alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Hulu Sungai Tengah',
    asal: 'Kalimantan Selatan',
    kota: 'Barabai',
    image: batik2, // Repeated image
    filosofi: 'Batik Hulu Sungai Tengah menampilkan motif tumbuhan lokal dan binatang air tawar yang hidup di sekitar daerah ini.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Bengkayang',
    asal: 'Kalimantan Barat',
    kota: 'Bengkayang',
    image: batik3, // Repeated image
    filosofi: 'Batik Bengkayang mencerminkan kehidupan suku Dayak, dengan motif flora dan fauna hutan tropis.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap, menggunakan pewarna alami dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Penajam',
    asal: 'Kalimantan Timur',
    kota: 'Penajam Paser Utara',
    image: batik4, // Repeated image
    filosofi: 'Batik Penajam menampilkan motif-motif khas pesisir dan perairan, menggambarkan kehidupan masyarakat nelayan.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Singkawang',
    asal: 'Kalimantan Barat',
    kota: 'Singkawang',
    image: batik5, // Repeated image
    filosofi: 'Batik Singkawang terkenal dengan motif budaya Tionghoa yang dipadukan dengan motif flora dan fauna lokal.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis menggunakan pewarna alami dari bahan-bahan lokal.',
  },
  {
    nama: 'Batik Banjar',
    asal: 'Kalimantan Selatan',
    kota: 'Banjarmasin',
    image: batik6, // Repeated image
    filosofi: 'Batik Banjar terinspirasi dari motif flora sungai Barito dan budaya Banjar yang kaya akan tradisi.',
    caraMembuat: 'Batik Banjar dibuat dengan teknik tulis dan cap menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Kapuas Hulu',
    asal: 'Kalimantan Barat',
    kota: 'Putussibau',
    image: batik1, // Repeated image
    filosofi: 'Batik Kapuas Hulu menggambarkan kekayaan hutan tropis dan kehidupan masyarakat di hulu sungai Kapuas.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Berau',
    asal: 'Kalimantan Timur',
    kota: 'Berau',
    image: batik2, // Repeated image
    filosofi: 'Batik Berau terkenal dengan motif penyu dan flora laut yang mencerminkan kekayaan pesisir Berau.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap, menggunakan pewarna alami dari bahan lokal.',
  },
  {
    nama: 'Batik Murung Raya',
    asal: 'Kalimantan Tengah',
    kota: 'Puruk Cahu',
    image: batik3, // Repeated image
    filosofi: 'Batik Murung Raya menampilkan motif-motif khas suku Dayak yang melambangkan kekuatan dan keindahan alam.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Melawi',
    asal: 'Kalimantan Barat',
    kota: 'Nanga Pinoh',
    image: batik4, // Repeated image
    filosofi: 'Batik Melawi menggambarkan kehidupan masyarakat adat di hutan tropis dengan motif flora dan fauna lokal.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Tabalong',
    asal: 'Kalimantan Selatan',
    kota: 'Tanjung',
    image: batik5, // Repeated image
    filosofi: 'Batik Tabalong menampilkan motif flora dan fauna sungai yang menjadi pusat kehidupan masyarakat lokal.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Barito',
    asal: 'Kalimantan Tengah',
    kota: 'Muara Teweh',
    image: batik6, // Repeated image
    filosofi: 'Batik Barito menampilkan motif flora dan fauna yang hidup di sepanjang aliran sungai Barito.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Sambas',
    asal: 'Kalimantan Barat',
    kota: 'Sambas',
    image: batik1, // Repeated image
    filosofi: 'Batik Sambas terkenal dengan motif ukiran Melayu yang melambangkan kejayaan masa lalu kerajaan Sambas.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis menggunakan pewarna alami dari tumbuhan lokal.',
  },
  {
    nama: 'Batik Tapin',
    asal: 'Kalimantan Selatan',
    kota: 'Rantau',
    image: batik2, // Repeated image
    filosofi: 'Batik Tapin menampilkan motif-motif khas suku Banjar yang melambangkan keberanian dan kekuatan.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Barito Kuala',
    asal: 'Kalimantan Selatan',
    kota: 'Marabahan',
    image: batik3, // Repeated image
    filosofi: 'Batik Barito Kuala menampilkan motif flora dan fauna dari kawasan pesisir sungai Barito.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Ketapang',
    asal: 'Kalimantan Barat',
    kota: 'Ketapang',
    image: batik4, // Repeated image
    filosofi: 'Batik Ketapang terkenal dengan motif flora dan fauna khas hutan tropis Kalimantan.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Hulu Sungai Selatan',
    asal: 'Kalimantan Selatan',
    kota: 'Kandangan',
    image: batik5, // Repeated image
    filosofi: 'Batik Hulu Sungai Selatan menampilkan motif kehidupan masyarakat pesisir dan flora lokal.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Malinau',
    asal: 'Kalimantan Utara',
    kota: 'Malinau',
    image: batik6, // Repeated image
    filosofi: 'Batik Malinau mencerminkan kehidupan suku Dayak dengan motif flora dan fauna hutan tropis.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Pontianak',
    asal: 'Kalimantan Barat',
    kota: 'Pontianak',
    image: batik1, // Repeated image
    filosofi: 'Batik Pontianak menampilkan motif Tugu Khatulistiwa yang melambangkan kekhasan Pontianak sebagai kota di garis ekuator.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Banjarbaru',
    asal: 'Kalimantan Selatan',
    kota: 'Banjarbaru',
    image: batik2, // Repeated image
    filosofi: 'Batik Banjarbaru menampilkan motif khas pesisir dan budaya Banjar yang kaya akan tradisi maritim.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Lamandau',
    asal: 'Kalimantan Tengah',
    kota: 'Lamandau',
    image: batik3, // Repeated image
    filosofi: 'Batik Lamandau menggambarkan flora dan fauna lokal yang melambangkan keharmonisan antara manusia dan alam.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis menggunakan pewarna alami dari bahan lokal.',
  },
  {
    nama: 'Batik Seruyan',
    asal: 'Kalimantan Tengah',
    kota: 'Kuala Pembuang',
    image: batik4, // Repeated image
    filosofi: 'Batik Seruyan terkenal dengan motif sungai dan flora tropis yang menjadi ciri khas daerah tersebut.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Kutai Barat',
    asal: 'Kalimantan Timur',
    kota: 'Sendawar',
    image: batik5, // Repeated image
    filosofi: 'Batik Kutai Barat menampilkan motif flora dan fauna hutan Kalimantan yang kaya akan keanekaragaman hayati.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Katingan',
    asal: 'Kalimantan Tengah',
    kota: 'Kasongan',
    image: batik6, // Repeated image
    filosofi: 'Batik Katingan menggambarkan kehidupan masyarakat Dayak di daerah pedalaman dengan motif alam dan budaya lokal.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis menggunakan pewarna alami.',
  },
  {
    nama: 'Batik Pangkalan Bun',
    asal: 'Kalimantan Tengah',
    kota: 'Pangkalan Bun',
    image: batik1, // Repeated image
    filosofi: 'Batik Pangkalan Bun menampilkan motif flora dan fauna dari Taman Nasional Tanjung Puting yang terkenal dengan orangutannya.',
    caraMembuat: 'Batik ini dibuat dengan teknik tulis dan cap menggunakan pewarna alami.',
  },
];

export default batiksData;
