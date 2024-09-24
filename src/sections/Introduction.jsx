import { useState } from 'react';
import batik1 from '../assets/batiks/batik-1.png';
import batik2 from '../assets/batiks/batik-2.png';
import batik3 from '../assets/batiks/batik-3.png';
import batik4 from '../assets/batiks/batik-4.png';
import batik5 from '../assets/batiks/batik-5.png';
import batik6 from '../assets/batiks/batik-6.png';

export const Introduction = () => {
  const batiksData = [
    {
      nama: 'Batik Parang',
      asal: 'Yogyakarta',
      image: batik1,
    },
    {
      nama: 'Batik Aselole',
      asal: 'Jawa Timur',
      image: batik2,
    },
    {
      nama: 'Batik Makmur',
      asal: 'Kalimantan Utara',
      image: batik3,
    },
    {
      nama: 'Batik Kachaw',
      asal: 'Papua',
      image: batik4,
    },
    {
      nama: 'Batik Emyu',
      asal: 'Sumatera Utara',
      image: batik5,
    },
    {
      nama: 'Batik Ragam',
      asal: 'Jawa Barat',
      image: batik6,
    },
  ];

  const [filteredBatiks, setFilteredBatiks] = useState(batiksData);

  const handleFilterChange = (e) => {
    const selectedAsal = e.target.value;

    if (selectedAsal === 'Semua') {
      setFilteredBatiks(batiksData);
    } else {
      const filtered = batiksData.filter((batik) => batik.asal === selectedAsal);
      setFilteredBatiks(filtered.length ? filtered : null);
    }
  };

  return (
    <section className="mx-4 md:mx-20 mb-20">      <div className="container max-w-full font-vidaloka">
        <h2 className="text-center text-5xl md:mt-32 md:mb-14">Eksplorasi Batik</h2>

        <div className="flex justify-end my-4">
          <label className="mx-2" htmlFor="daerah">
            Filter:{' '}
          </label>
          <select className="text-center" id="daerah" onChange={handleFilterChange}>
            <option value="Semua">Semua</option>
            <option value="Jawa Timur">Jawa Timur</option>
            <option value="Jawa Barat">Jawa Barat</option>
            <option value="Yogyakarta">Yogyakarta</option>
            <option value="Kalimantan Utara">Kalimantan Utara</option>
            <option value="Sumatera Utara">Sumatera Utara</option>
            <option value="Papua">Papua</option>
            <option value="Malaysia">Malaysia</option>
          </select>
        </div>

        {filteredBatiks === null ? (
          <p className="text-center text-2xl mt-10">Batik tidak ditemukan</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredBatiks.map((batik, index) => (
              <div key={index} className="md:basis-1/3">
                <img src={batik.image} alt={`gambar-${batik.nama}`} className="w-full" />
                <h3 className="mt-5 text-3xl">{batik.nama}</h3>
                <p className="text-xl">{batik.asal}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
