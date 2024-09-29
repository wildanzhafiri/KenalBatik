import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import batiksData from '../components/data/BatiksData';

const Overview = () => {
  const { batikName } = useParams(); // Mengambil nama batik dari URL
  const navigate = useNavigate();
  const [batikDetail, setBatikDetail] = useState(null);

  // Menggunakan useEffect untuk memuat ulang data setiap kali nama batik di URL berubah
  useEffect(() => {
    const selectedBatik = batiksData.find((batik) => batik.nama === decodeURIComponent(batikName));
    setBatikDetail(selectedBatik);
  }, [batikName]); // Berganti setiap kali batikName berubah

  const batikLainnya = batiksData.filter((batik) => batik.nama !== batikDetail?.nama); // Batik lainnya

  if (!batikDetail) {
    return <p>Batik tidak ditemukan</p>;
  }

  return (
    <div className="mb-10">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-10 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Bagian kiri untuk gambar dan tombol */}
          <div className="md:w-1/2 flex flex-col items-center mb-10 md:mb-0">
            <div className="flex justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-white p-5 rounded-[30px]">
              <img src={batikDetail.image} alt={`gambar-${batikDetail.nama}`} className="object-cover rounded-[22px] shadow-lg" />
            </div>
            <button className="bg-white mt-5 px-6 py-2 rounded-lg shadow-2xl text-lg md:text-2xl">
              Cari Batik ini di <span className="italic">Marketplace</span>
            </button>
          </div>

          {/* Bagian kanan untuk detail */}
          <div className="md:w-1/2 md:pr-10 md:py-5">
            <h1 className="md:text-6xl text-4xl font-vidaloka md:mb-2">{batikDetail.nama}</h1>
            <p className="md:text-3xl text-xl  mb-6 font-vidaloka">
              {batikDetail.asal}, {batikDetail.kota}
            </p>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Filosofi</h2>
              <p className="leading-relaxed">{batikDetail.filosofi}</p>
            </div>
          </div>
        </div>

        <div className="w-full border-[1px] border-black/20 mt-20"></div>

        {/* Bagian bawah: Lihat Batik Lainnya */}
        <div className="mt-12">
          <h2 className="text-center text-xl mb-16 cursor-pointer font-normal hover:underline" onClick={() => navigate('/catalog')}>
            LIHAT BATIK LAINNYA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {batikLainnya.slice(0, 3).map((batik, index) => (
              <div
                key={index}
                className="font-vidaloka cursor-pointer"
                onClick={() => navigate(`/overview/${encodeURIComponent(batik.nama)}`)} // Navigasi ke detail batik lainnya
              >
                <img src={batik.image} alt={`gambar-${batik.nama}`} className="w-full rounded-lg shadow-md mb-4" />
                <h3 className="text-4xl">{batik.nama}</h3>
                <p className="text-xl">{batik.asal}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
