package database

import (
	"kenalbatik-be/internal/domain"

	"gorm.io/gorm"
)

func SeedData(db *gorm.DB) {
	var totalProvinces int64

	if err := db.Model(domain.Province{}).Count(&totalProvinces).Error; err != nil {
		panic(err)
	}

	if totalProvinces == 0 {
		generateProvince(db)
	}

	var totalIslands int64

	if err := db.Model(domain.Island{}).Count(&totalIslands).Error; err != nil {
		panic(err)
	}

	if totalIslands == 0 {
		generateIsland(db)
	}

	var totalBatiks int64

	if err := db.Model(domain.Batik{}).Count(&totalBatiks).Error; err != nil {
		panic(err)
	}

	if totalBatiks == 0 {
		generateBatik(db)
	}

	var totalQuizzes int64

	if err := db.Model(domain.Quiz{}).Count(&totalQuizzes).Error; err != nil {
		panic(err)
	}

	if totalQuizzes == 0 {
		generateQuiz(db)
	}

}

func generateBatik(db *gorm.DB) {
	batikSeeder := &[]domain.Batik{
		{
			Name:        "Batik Betawi",
			Description: "Batik khas Betawi dari Jakarta dengan motif yang terinspirasi dari kebudayaan Betawi.",
			ProvinceID:  11,
			IslandID:    1,
			Link_Image:  "",
		},
		{
			Name:        "Batik Ondel-Ondel",
			Description: "Batik yang menggambarkan simbol ondel-ondel, ciri khas Jakarta.",
			ProvinceID:  11,
			IslandID:    1,
			Link_Image:  "",
		},
		{
			Name:        "Batik Surabaya",
			Description: "Batik dengan motif alam dan budaya yang berasal dari Surabaya, Jawa Timur.",
			ProvinceID:  16,
			IslandID:    1,
			Link_Image:  "",
		},
		{
			Name:        "Batik Madura",
			Description: "Batik dengan motif yang kaya warna dari Pulau Madura, Jawa Timur.",
			ProvinceID:  16,
			IslandID:    1,
			Link_Image:  "",
		},
		{
			Name:        "Batik Malang",
			Description: "Batik dengan motif bunga dan gunung yang menggambarkan wilayah Malang.",
			ProvinceID:  16,
			IslandID:    1,
			Link_Image:  "",
		},
		{
			Name:        "Batik Padang",
			Description: "Batik dari Sumatera Barat yang terinspirasi dari alam Minangkabau.",
			ProvinceID:  3,
			IslandID:    2,
			Link_Image:  "",
		},
		{
			Name:        "Batik Minang",
			Description: "Batik yang menggambarkan kekayaan budaya Minangkabau dari Padang.",
			ProvinceID:  3,
			IslandID:    2,
			Link_Image:  "",
		},
		{
			Name:        "Batik Pucuk Rebung",
			Description: "Batik dengan motif pucuk rebung yang umum di Padang.",
			ProvinceID:  3,
			IslandID:    2,
			Link_Image:  "",
		},
		{
			Name:        "Batik Batavia",
			Description: "Batik dengan motif yang mencerminkan sejarah dan budaya Batavia (Jakarta).",
			ProvinceID:  11,
			IslandID:    1,
			Link_Image:  "",
		},
		{
			Name:        "Batik Tanjung Bumi",
			Description: "Batik dengan motif khas pesisir yang berasal dari Madura, Jawa Timur.",
			ProvinceID:  16,
			IslandID:    1,
			Link_Image:  "",
		},
	}

	if err := db.CreateInBatches(batikSeeder, 10).Error; err != nil {
		panic(err)
	}
}

func generateQuiz(db *gorm.DB) {
	var quizzes = []domain.Quiz{
		// Easy questions
		{Question: "Dari mana asal motif Batik Parang?", Answer: "A", OptionA: "Jawa Tengah", OptionB: "Bali", OptionC: "Sumatra", OptionD: "Kalimantan", Difficulty: "easy", Image_Link: ""},
		{Question: "Warna apa yang paling umum ditemukan dalam Batik tradisional?", Answer: "B", OptionA: "Hijau", OptionB: "Cokelat", OptionC: "Ungu", OptionD: "Merah Muda", Difficulty: "easy", Image_Link: ""},
		{Question: "Hewan apa yang sering digambarkan dalam Batik Megamendung?", Answer: "D", OptionA: "Singa", OptionB: "Harimau", OptionC: "Rusa", OptionD: "Awan", Difficulty: "easy", Image_Link: ""},
		{Question: "Alat apa yang digunakan untuk menerapkan lilin dalam proses Batik?", Answer: "A", OptionA: "Canting", OptionB: "Alat Tenun", OptionC: "Kuasa", OptionD: "Gunting", Difficulty: "easy", Image_Link: ""},
		{Question: "Batik Tulis adalah jenis Batik yang dibuat dengan?", Answer: "B", OptionA: "Mencap", OptionB: "Menggambar dengan tangan", OptionC: "Mesin", OptionD: "Menenun", Difficulty: "easy", Image_Link: ""},
		{Question: "Motif Batik apa yang biasa dikenakan oleh keluarga kerajaan Indonesia?", Answer: "C", OptionA: "Kawung", OptionB: "Lasem", OptionC: "Parang", OptionD: "Sekar Jagad", Difficulty: "easy", Image_Link: ""},
		{Question: "Motif Batik dengan bentuk geometris sering disebut?", Answer: "D", OptionA: "Floral", OptionB: "Burung", OptionC: "Awan", OptionD: "Kawung", Difficulty: "easy", Image_Link: ""},
		{Question: "Pulau mana yang menjadi asal Batik Lasem?", Answer: "A", OptionA: "Jawa", OptionB: "Sumatra", OptionC: "Kalimantan", OptionD: "Sulawesi", Difficulty: "easy", Image_Link: ""},
		{Question: "Warna berikut yang BUKAN merupakan warna tradisional Batik adalah?", Answer: "C", OptionA: "Indigo", OptionB: "Sogan", OptionC: "Hijau Neon", OptionD: "Merah", Difficulty: "easy", Image_Link: ""},
		{Question: "Batik diakui oleh UNESCO sebagai warisan?", Answer: "B", OptionA: "Lukisan Tradisional", OptionB: "Warisan Budaya Takbenda", OptionC: "Sastra", OptionD: "Arsitektur", Difficulty: "easy", Image_Link: ""},

		// Medium questions
		{Question: "Motif Batik apa yang melambangkan kesuburan dan pertumbuhan, sering menggambarkan bunga dan tanaman?", Answer: "A", OptionA: "Sekar Jagad", OptionB: "Parang", OptionC: "Kawung", OptionD: "Lasem", Difficulty: "medium", Image_Link: ""},
		{Question: "Apa perbedaan utama antara Batik Tulis dan Batik Cap?", Answer: "B", OptionA: "Batik Tulis menggunakan lilin, sedangkan Batik Cap menggunakan pewarna", OptionB: "Batik Tulis digambar dengan tangan, sedangkan Batik Cap dicap", OptionC: "Batik Tulis menggunakan kuas, sedangkan Batik Cap menggunakan alat canting", OptionD: "Tidak ada perbedaan", Difficulty: "medium", Image_Link: ""},
		{Question: "Motif Batik 'Garuda' terinspirasi oleh tokoh mitologi apa?", Answer: "C", OptionA: "Harimau", OptionB: "Elang", OptionC: "Garuda", OptionD: "Naga", Difficulty: "medium", Image_Link: ""},
		{Question: "Daerah mana yang terkenal dengan Batik yang menggunakan warna-warna cerah dan non-tradisional?", Answer: "D", OptionA: "Jawa Tengah", OptionB: "Bali", OptionC: "Sumatra Barat", OptionD: "Pekalongan", Difficulty: "medium", Image_Link: ""},
		{Question: "Teknik Batik apa yang melibatkan pewarnaan kain beberapa kali untuk mendapatkan warna berbeda?", Answer: "A", OptionA: "Pewarnaan Resist", OptionB: "Mencap", OptionC: "Batik Tenun", OptionD: "Sablon", Difficulty: "medium", Image_Link: ""},
		{Question: "Motif Batik apa yang dilarang dikenakan oleh rakyat jelata pada zaman dahulu?", Answer: "B", OptionA: "Batik Pekalongan", OptionB: "Batik Larangan", OptionC: "Batik Pesisir", OptionD: "Batik Palembang", Difficulty: "medium", Image_Link: ""},
		{Question: "Simbolisme apa yang ada di balik motif Batik Ceplok?", Answer: "C", OptionA: "Kekuasaan dan Keagungan", OptionB: "Harmoni dan Keseimbangan", OptionC: "Keteraturan dan Struktur", OptionD: "Kekayaan dan Kemakmuran", Difficulty: "medium", Image_Link: ""},
		{Question: "Di daerah mana warna cokelat 'Sogan' sering digunakan dalam Batik?", Answer: "D", OptionA: "Bali", OptionB: "Sumatra", OptionC: "Pekalongan", OptionD: "Yogyakarta", Difficulty: "medium", Image_Link: ""},
		{Question: "Motif Batik yang menggambarkan lautan dan ombak dikenal sebagai?", Answer: "A", OptionA: "Megamendung", OptionB: "Parang", OptionC: "Garuda", OptionD: "Cendrawasih", Difficulty: "medium", Image_Link: ""},
		{Question: "Motif Batik 'Kawung' diyakini melambangkan apa?", Answer: "B", OptionA: "Perlindungan", OptionB: "Kemurnian dan Keadilan", OptionC: "Kekuatan", OptionD: "Kekayaan", Difficulty: "medium", Image_Link: ""},

		// Hard questions
		{Question: "Apa yang dilambangkan motif Batik 'Sawunggaling' yang menggambarkan ayam jantan?", Answer: "D", OptionA: "Kemenangan", OptionB: "Keagungan", OptionC: "Cinta", OptionD: "Kekuatan dan Keberanian", Difficulty: "hard", Image_Link: ""},
		{Question: "Teknik Batik apa yang menggunakan cap tembaga yang dikombinasikan dengan elemen gambar tangan?", Answer: "A", OptionA: "Batik Kombinasi", OptionB: "Batik Tulis", OptionC: "Batik Cap", OptionD: "Batik Printing", Difficulty: "hard", Image_Link: ""},
		{Question: "Motif Batik 'Ceplok' sering dikaitkan dengan konsep kosmologi apa dalam budaya Jawa?", Answer: "C", OptionA: "Keseimbangan hidup", OptionB: "Siklus reinkarnasi", OptionC: "Alam semesta dan keabadian", OptionD: "Perjalanan jiwa", Difficulty: "hard", Image_Link: ""},
		{Question: "Batik Lasem unik karena menggunakan warna apa yang jarang ditemukan dalam tradisi Batik lainnya?", Answer: "B", OptionA: "Cokelat Sogan", OptionB: "Merah Tua", OptionC: "Biru Indigo", OptionD: "Kuning Pucat", Difficulty: "hard", Image_Link: ""},
		{Question: "Motif 'Parang Rusak' dulu dilarang dikenakan oleh siapa?", Answer: "C", OptionA: "Kaum Bangsawan", OptionB: "Para Pendeta", OptionC: "Rakyat Jelata", OptionD: "Para Pedagang", Difficulty: "hard", Image_Link: ""},
		{Question: "Peristiwa sejarah apa yang menyebabkan perkembangan besar dalam pola Batik, terutama di daerah pesisir seperti Cirebon dan Lasem?", Answer: "A", OptionA: "Penjajahan Belanda", OptionB: "Munculnya Kerajaan Mataram", OptionC: "Migrasi Tiongkok", OptionD: "Masuknya Islam", Difficulty: "hard", Image_Link: ""},
		{Question: "Batik Madura dikenal dengan pola dan warna-warna berani. Faktor lingkungan apa yang mempengaruhi ciri khas ini?", Answer: "D", OptionA: "Komposisi tanah", OptionB: "Dekat dengan laut", OptionC: "Daerah pegunungan", OptionD: "Iklim kering dan gersang", Difficulty: "hard", Image_Link: ""},
		{Question: "Motif Batik mana yang diyakini memiliki kekuatan magis untuk melindungi pemakainya?", Answer: "C", OptionA: "Batik Lasem", OptionB: "Batik Garuda", OptionC: "Batik Parang", OptionD: "Batik Kawung", Difficulty: "hard", Image_Link: ""},
		{Question: "Motif Batik mana yang menjadi simbol perlawanan melawan penjajahan kolonial di Indonesia?", Answer: "B", OptionA: "Batik Megamendung", OptionB: "Batik Parang", OptionC: "Batik Kawung", OptionD: "Batik Lasem", Difficulty: "hard", Image_Link: ""},
		{Question: "Motif apa yang banyak digunakan dalam Batik Keraton dan sering mengandung makna filosofis yang dalam?", Answer: "A", OptionA: "Batik Parang", OptionB: "Batik Sekar Jagad", OptionC: "Batik Megamendung", OptionD: "Batik Garuda", Difficulty: "hard", Image_Link: ""},
	}

	if err := db.CreateInBatches(quizzes, 30).Error; err != nil {
		panic(err)
	}
}

func generateProvince(db *gorm.DB) {
	var provinces = []domain.Province{
		{Name: "Aceh"},
		{Name: "Sumatera Utara"},
		{Name: "Sumatera Barat"},
		{Name: "Riau"},
		{Name: "Kepulauan Riau"},
		{Name: "Jambi"},
		{Name: "Sumatera Selatan"},
		{Name: "Bangka Belitung"},
		{Name: "Bengkulu"},
		{Name: "Lampung"},
		{Name: "DKI Jakarta"},
		{Name: "Jawa Barat"},
		{Name: "Banten"},
		{Name: "Jawa Tengah"},
		{Name: "DI Yogyakarta"},
		{Name: "Jawa Timur"},
		{Name: "Bali"},
		{Name: "Nusa Tenggara Barat"},
		{Name: "Nusa Tenggara Timur"},
		{Name: "Kalimantan Barat"},
		{Name: "Kalimantan Tengah"},
		{Name: "Kalimantan Selatan"},
		{Name: "Kalimantan Timur"},
		{Name: "Kalimantan Utara"},
		{Name: "Sulawesi Utara"},
		{Name: "Gorontalo"},
		{Name: "Sulawesi Tengah"},
		{Name: "Sulawesi Barat"},
		{Name: "Sulawesi Selatan"},
		{Name: "Sulawesi Tenggara"},
		{Name: "Maluku"},
		{Name: "Maluku Utara"},
		{Name: "Papua"},
		{Name: "Papua Barat"},
		{Name: "Papua Tengah"},
		{Name: "Papua Pegunungan"},
		{Name: "Papua Selatan"},
		{Name: "Papua Barat Daya"},
	}

	if err := db.CreateInBatches(provinces, len(provinces)).Error; err != nil {
		panic(err)
	}
}

func generateIsland(db *gorm.DB) {
	island := []domain.Island{
		{
			Name: "Jawa",
		},
		{
			Name: "Sumatra",
		},
		{
			Name: "Kalimantan",
		},
		{
			Name: "Sulawesi",
		},
		{
			Name: "Papua",
		},
	}

	if err := db.CreateInBatches(island, len(island)).Error; err != nil {
		panic(err)
	}
}
