import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginPopup from '../components/auth/LoginPopup';
import SignUpPopup from '../components/auth/SignUpPopup';
import ForgotPasswordPopup from '../components/auth/ForgotPasswordPopup';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import arrowRight from '../assets/arrow-right.svg';
import arrowLeft from '../assets/arrow-left.svg';

const Catalog = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); // Menyimpan data pengguna
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [batikData, setBatikData] = useState([]); // Store all batik data
  const [filteredBatikData, setFilteredBatikData] = useState([]); // Store filtered batik data
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(1); // Track total pages
  const batikPerPage = 9; // Number of batiks to display per page

  const [islands, setIslands] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selectedIsland, setSelectedIsland] = useState('');
  const [selectedProvince, setSelectedProvince] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      fetchUserProfile(token); // Panggil fungsi untuk memuat profil
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get('http://20.2.139.54/api/v1/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`, // Kirim token sebagai header Authorization
        },
      });
      setUserData(response.data.data);
      // Set data pengguna dari respons API
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleSignUpPopup = () => {
    setIsSignUpOpen(!isSignUpOpen);
    setIsLoginOpen(false);
  };

  const toggleForgotPasswordPopup = () => {
    setIsForgotPasswordOpen(!isForgotPasswordOpen);
    setIsLoginOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null); // Hapus data pengguna setelah logout
    localStorage.removeItem('authToken'); // Hapus token dari localStorage
    window.location.reload(); // Refresh page setelah logout
  };

  const handleLogin = (token) => {
    localStorage.setItem('authToken', token); // Simpan token ke localStorage
    setIsLoggedIn(true);
    fetchUserProfile(token); // Ambil data pengguna setelah login
    setIsLoginOpen(false);
  };
  const navigate = useNavigate();

  // Fetch islands and provinces on component mount
  const fetchIslands = async () => {
    try {
      const response = await axios.get('http://20.2.139.54/api/v1/islands');
      setIslands(response.data.data);
    } catch (error) {
      console.error('Error fetching islands:', error);
    }
  };

  const fetchProvinces = async () => {
    try {
      const response = await axios.get('/api/provinces');
      setProvinces(response.data.data);
    } catch (error) {
      console.error('Error fetching provinces:', error);
    }
  };

  const fetchBatiks = async () => {
    try {
      const response = await axios.get('http://20.2.139.54/api/v1/batiks'); // Fetch all batik data
      setBatikData(response.data.data); // Store batik data
    } catch (error) {
      console.error('Error fetching batik data:', error);
    }
  };

  // Handle filtering based on selected island and province
  const filterBatik = () => {
    let filteredData = batikData;

    if (selectedIsland) {
      filteredData = filteredData.filter((batik) => batik.island === selectedIsland);
    }

    if (selectedProvince) {
      filteredData = filteredData.filter((batik) => batik.province === selectedProvince);
    }

    setFilteredBatikData(filteredData);
    setTotalPages(Math.ceil(filteredData.length / batikPerPage)); // Recalculate total pages
  };

  // Fetch batik data when component mounts
  useEffect(() => {
    fetchIslands();
    fetchProvinces();
    fetchBatiks();
  }, []);

  // Filter batik data when selectedIsland, selectedProvince, or batikData changes
  useEffect(() => {
    filterBatik();
  }, [selectedIsland, selectedProvince, batikData]);

  const handleIslandChange = (e) => {
    setSelectedIsland(e.target.value);
    setSelectedProvince(''); // Reset province when island changes
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  const handleProvinceChange = (e) => {
    const province = e.target.value;
    setSelectedProvince(province);

    // Update selected island based on selected province
    const provinceData = provinces.find((prov) => prov.name === province);
    if (provinceData) {
      setSelectedIsland(provinceData.island_name); // Automatically update island
    }
    setCurrentPage(1); // Reset to page 1 when filter changes
  };

  // Pagination logic
  const indexOfLastBatik = currentPage * batikPerPage;
  const indexOfFirstBatik = indexOfLastBatik - batikPerPage;
  const currentBatikData = filteredBatikData.slice(indexOfFirstBatik, indexOfLastBatik);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Create an array of page numbers to show in pagination
  const getPageNumbers = () => {
    const maxVisiblePages = 7;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  return (
    <section className="w-full">
      <Navbar onLoginClick={toggleLoginPopup} isLoggedIn={isLoggedIn} onLogout={handleLogout} userData={userData} />
      {isLoginOpen && <LoginPopup onClose={toggleLoginPopup} onLogin={handleLogin} onSignUpClick={toggleSignUpPopup} onForgotPasswordClick={toggleForgotPasswordPopup} />}
      {isSignUpOpen && <SignUpPopup onClose={toggleSignUpPopup} />}
      {isForgotPasswordOpen && <ForgotPasswordPopup onClose={toggleForgotPasswordPopup} />}

      <div className="max-w-full mb-10 font-vidaloka mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48">
        <h2 className="text-center text-2xl md:text-5xl lg:text-6xl mt-6 md:mt-10">Koleksi Batik Indonesia</h2>
        <p className="text-center md:text-2xl lg:text-3xl mb-10">Temukan Keunikan Setiap Motif</p>

        {/* Filter Section */}
        <div className="flex justify-center gap-4 mb-6">
          <select value={selectedIsland} onChange={handleIslandChange} className="border p-2 rounded">
            <option value="">Semua Pulau</option>
            {islands.map((island) => (
              <option key={island.id} value={island.name}>
                {island.name}
              </option>
            ))}
          </select>

          <select value={selectedProvince} onChange={handleProvinceChange} className="border p-2 rounded">
            <option value="">Semua Provinsi</option>
            {provinces.map((province) => (
              <option key={province.id} value={province.name}>
                {province.name}
              </option>
            ))}
          </select>
        </div>

        {/* Display Filtered Batiks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBatikData.length > 0 ? (
            currentBatikData.map((batik, index) => (
              <div key={index} className="cursor-pointer" onClick={() => navigate(`/overview/${batik.id}`)}>
                <img src={batik.link_image} alt={`gambar-${batik.name}`} className="w-full rounded-2xl h-64 md:h-52 xl:h-60 object-cover" />
                <h3 className="mt-5 text-2xl sm:text-3xl">{batik.name}</h3>
                <p className="text-lg sm:text-xl">
                  {batik.province}/{batik.city}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-xl">Batik tidak ditemukan.</p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10">
          <nav className="inline-flex bg-gray-100 rounded-full shadow-md py-2 px-4">
            <button onClick={() => handlePageChange(currentPage - 1)} className={`px-3 py-1 rounded-full ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-black'}`} disabled={currentPage === 1}>
              <img src={arrowLeft} alt="Previous" />
            </button>

            {getPageNumbers().map((page) => (
              <button key={page} onClick={() => handlePageChange(page)} className={`px-3 py-1 rounded-full ${currentPage === page ? 'bg-red-400 text-white' : 'text-gray-700'}`}>
                {page}
              </button>
            ))}

            <button onClick={() => handlePageChange(currentPage + 1)} className={`px-3 py-1 rounded-full ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-black'}`} disabled={currentPage === totalPages}>
              <img src={arrowRight} alt="Next" />
            </button>
          </nav>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Catalog;
