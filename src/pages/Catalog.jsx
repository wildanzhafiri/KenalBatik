import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import pulauData from '../components/data/PulauData'; // Import data batik dari file eksternal
import LoginPopup from '../components/auth/LoginPopup';
import SignUpPopup from '../components/auth/SignUpPopup';
import ForgotPasswordPopup from '../components/auth/ForgotPasswordPopup';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

const Catalog = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleSignUpPopup = () => {
    setIsSignUpOpen(!isSignUpOpen);
    setIsLoginOpen(false); // Tutup login saat membuka sign-up
  };

  const toggleForgotPasswordPopup = () => {
    setIsForgotPasswordOpen(!isForgotPasswordOpen);
    setIsLoginOpen(false); // Tutup login saat membuka forgot password
  };

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pulau = queryParams.get('pulau'); // Ambil query parameter 'pulau'

  const [filteredBatiks, setFilteredBatiks] = useState([]);
  const [selectedPulau, setSelectedPulau] = useState(pulau || 'Semua');
  const [selectedAsal, setSelectedAsal] = useState('Semua');

  useEffect(() => {
    const allBatiks = Object.values(pulauData).flat(); // Mengambil semua batik
    let filtered = allBatiks;

    if (selectedPulau !== 'Semua') {
      filtered = pulauData[selectedPulau] || [];
    }

    if (selectedAsal !== 'Semua') {
      filtered = filtered.filter((batik) => batik.asal === selectedAsal);
    }

    setFilteredBatiks(filtered);
  }, [selectedPulau, selectedAsal]);

  const uniqueAsal = [
    'Semua',
    ...new Set(
      Object.values(pulauData)
        .flat()
        .map((batik) => batik.asal)
    ),
  ];

  return (
    <section className="w-full">
      <Navbar onLoginClick={toggleLoginPopup} />

      {/* Pop-up untuk login */}
      {isLoginOpen && (
        <LoginPopup
          onClose={toggleLoginPopup}
          onSignUpClick={toggleSignUpPopup} // Buka sign-up saat "Daftar sekarang" diklik
          onForgotPasswordClick={toggleForgotPasswordPopup} // Buka forgot password saat diklik
        />
      )}

      {/* Pop-up untuk sign up */}
      {isSignUpOpen && <SignUpPopup onClose={toggleSignUpPopup} />}

      {/* Pop-up untuk forgot password */}
      {isForgotPasswordOpen && <ForgotPasswordPopup onClose={toggleForgotPasswordPopup} />}

      <div className="max-w-full font-vidaloka mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48">
        <h2 className="text-center text-4xl sm:text-5xl md:text-6xl mt-6 md:mt-10 md:mb-10">Eksplorasi Batik</h2>

        {/* Dropdown Filter Pulau dan Asal */}
        <div className="mb-8 text-center">
          {/* Filter Pulau */}
          <select value={selectedPulau} onChange={(e) => setSelectedPulau(e.target.value)} className="mt-4 mb-4 px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 mx-2">
            <option value="Semua">Semua Pulau</option>
            {Object.keys(pulauData).map((pulau, index) => (
              <option key={index} value={pulau}>
                {pulau}
              </option>
            ))}
          </select>

          {/* Filter Asal */}
          <select value={selectedAsal} onChange={(e) => setSelectedAsal(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 mx-2">
            <option value="Semua">Semua Provinsi</option>
            {uniqueAsal
              .filter((asal) => asal !== 'Semua') // Pastikan "Semua" tidak muncul dua kali
              .map((asal, index) => (
                <option key={index} value={asal}>
                  {asal}
                </option>
              ))}
          </select>
        </div>

        {/* Display Filtered Batiks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBatiks.length > 0 ? (
            filteredBatiks.map((batik, index) => (
              <div key={index} className="cursor-pointer" onClick={() => navigate(`/overview/${batik.nama}`)}>
                <img src={batik.image} alt={`gambar-${batik.nama}`} className="w-full rounded-2xl h-auto object-cover" />
                <h3 className="mt-5 text-2xl sm:text-3xl">{batik.nama}</h3>
                <p className="text-lg sm:text-xl">{batik.asal}</p>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-xl">Batik tidak ditemukan untuk pilihan filter ini.</p>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Catalog;
