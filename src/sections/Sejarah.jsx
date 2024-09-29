const Sejarah = () => {
  return (
    <section className="relative w-full px-4 py-20 my-20">
      <div className="mb-44 font-vidaloka">
        <h2 className="text-center text-6xl mb-4">Menggali Asal Usul Batik</h2>
        <p className="text-center text-2xl">Dari Warisan Leluhur Hingga Warisan Budaya yang Mendunia.</p>
      </div>

      <div>
        {/* Garis tengah timeline, dimulai setelah lingkaran pertama */}
        <div className="absolute top-1/2 translate-y-36 left-[calc(14.5%+25px)] right-0 border-b-2 border-black"></div>

        {/* Sinar Oranye */}
        <div className="absolute top-1/2 left-0 w-full h-[200px] translate-y-12 bg-gradient-to-r from-[#f68c62]/50 via-[#f68c62]/30 to-[#f68c62]/50 blur-3xl z-0"></div>

        <div className="flex justify-between items-center w-full relative z-10">
          {/* Item pertama (Teks di bawah lingkaran) */}
          <div className="relative text-center w-1/5">
            <div className="absolute top-1/2 left-1/2 transform translate-x-5 -translate-y-1/2 w-[80px] h-[80px] bg-[#f68c62] rounded-full z-20 "></div>
            <div className="mt-20 translate-x-14 translate-y-28">
              <h3 className="font-vidaloka text-4xl mb-4">1817</h3>
              <p className="font-vidaloka text-sm">
                Batik pertama kali tercatat dalam buku sejarah oleh Sir Thomas Stamford Raffles, yang merupakan gubernur Hindia Belanda. Dalam bukunya yang berjudul "The History of Java", Raffles mencatat keberadaan batik sebagai kain yang
                dihiasi dengan motif-motif indah.
              </p>
            </div>
          </div>

          {/* Item kedua (Teks di atas lingkaran) */}
          <div className="relative text-center w-1/5">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-9 -translate-y-1/2 w-[80px] h-[80px] bg-[#f68c62] rounded-full z-20 "></div>
            <div className="mb-20 translate-x-1 -translate-y-24 ">
              <p className="font-vidaloka text-sm">
                Batik pertama kali tercatat dalam buku sejarah oleh Sir Thomas Stamford Raffles, yang merupakan gubernur Hindia Belanda. Dalam bukunya yang berjudul "The History of Java", Raffles mencatat keberadaan batik sebagai kain yang
                dihiasi dengan motif-motif indah.
              </p>
              <h3 className="font-vidaloka text-4xl mt-4">1817</h3>
            </div>
          </div>

          {/* Item ketiga (Teks di bawah lingkaran) */}
          <div className="relative text-center w-1/5">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-9 -translate-y-1/2 w-[80px] h-[80px] bg-[#f68c62] rounded-full z-20 "></div>
            <div className="mt-20 translate-x-1 translate-y-28">
              <h3 className="font-vidaloka text-4xl mb-4">1817</h3>
              <p className="font-vidaloka text-sm">
                Batik pertama kali tercatat dalam buku sejarah oleh Sir Thomas Stamford Raffles, yang merupakan gubernur Hindia Belanda. Dalam bukunya yang berjudul "The History of Java", Raffles mencatat keberadaan batik sebagai kain yang
                dihiasi dengan motif-motif indah.
              </p>
            </div>
          </div>

          {/* Item keempat (Teks di atas lingkaran) */}
          <div className="relative text-center w-1/5">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-9 -translate-y-1/2 w-[80px] h-[80px] bg-[#f68c62] rounded-full z-20 "></div>
            <div className="mb-20 translate-x-1 -translate-y-24">
              <p className="font-vidaloka text-sm">
                Batik pertama kali tercatat dalam buku sejarah oleh Sir Thomas Stamford Raffles, yang merupakan gubernur Hindia Belanda. Dalam bukunya yang berjudul "The History of Java", Raffles mencatat keberadaan batik sebagai kain yang
                dihiasi dengan motif-motif indah.
              </p>
              <h3 className="font-vidaloka text-4xl mt-4">1817</h3>
            </div>
          </div>

          {/* Item kelima (Teks di bawah lingkaran) */}
          <div className="relative text-center w-1/5">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-14 -translate-y-1/2 w-[80px] h-[80px] bg-[#f68c62] rounded-full z-20 "></div>
            <div className="mt-20 -translate-x-4 translate-y-28">
              <h3 className="font-vidaloka text-4xl mb-4">1817</h3>
              <p className="font-vidaloka text-sm">
                Batik pertama kali tercatat dalam buku sejarah oleh Sir Thomas Stamford Raffles, yang merupakan gubernur Hindia Belanda. Dalam bukunya yang berjudul "The History of Java", Raffles mencatat keberadaan batik sebagai kain yang
                dihiasi dengan motif-motif indah.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;
