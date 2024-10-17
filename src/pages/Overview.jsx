import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';
import Tokopedia from '../assets/tokopedia.png';
import Shopee from '../assets/shopee.png';
import LoginPopup from '../components/auth/LoginPopup';
import SignUpPopup from '../components/auth/SignUpPopup';
import ForgotPasswordPopup from '../components/auth/ForgotPasswordPopup';

const Overview = () => {
  const { id } = useParams(); // Mengambil 'id' dari URL params
  const navigate = useNavigate();
  const [batikDetail, setBatikDetail] = useState(null); // Untuk menyimpan detail batik yang dipilih
  const [isLoading, setIsLoading] = useState(true); // Status loading
  const [error, setError] = useState(null); // Status error
  const [relatedBatiks, setRelatedBatiks] = useState([]); // Batik terkait

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); // Menyimpan data pengguna

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      fetchUserProfile(token); // Panggil fungsi untuk memuat profil
    }
  }, []);

  const fetchUserProfile = async (token) => {
    try {
      const response = await axios.get('/api/users/profile', {
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

  // Fetch detail batik berdasarkan id
  useEffect(() => {
    const fetchBatikDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/batiks/${id}`); // Memfetch batik berdasarkan id
        setBatikDetail(response.data.data); // Set detail batik dari response

        // Fetch batik lainnya untuk tampil di bagian "Lihat Batik Lainnya"
        const relatedResponse = await axios.get(`/api/batiks`);
        setRelatedBatiks(relatedResponse.data.data.filter((batik) => batik.id !== parseInt(id))); // Filter batik yang sedang ditampilkan
      } catch (err) {
        setError('Error fetching batik data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBatikDetails();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Navbar onLoginClick={toggleLoginPopup} isLoggedIn={isLoggedIn} onLogout={handleLogout} userData={userData} />
      {isLoginOpen && <LoginPopup onClose={toggleLoginPopup} onLogin={handleLogin} onSignUpClick={toggleSignUpPopup} onForgotPasswordClick={toggleForgotPasswordPopup} />}
      {isSignUpOpen && <SignUpPopup onClose={toggleSignUpPopup} />}
      {isForgotPasswordOpen && <ForgotPasswordPopup onClose={toggleForgotPasswordPopup} />}

      <div className="mt-10 px-4 lg:px-0 mx-auto lg:mx-20">
        <div className="flex flex-col md:flex-row justify-between">
          {batikDetail && (
            <>
              <div className="md:w-1/2 flex flex-col items-center mb-10 md:mb-0">
                <div className="flex justify-center w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-white p-3 rounded-[30px]">
                  <img src={batikDetail.link_image} alt={`gambar-${batikDetail.name}`} className="w-full object-cover rounded-[22px] shadow-lg" />
                </div>
                <button
                  className="w-[290px] lg:w-[390px] hover:bg-emerald-300/20 transition duration-300 ease-in-out border-2 lg:border-4 border-[#47b750] bg-white mt-5 px-6 py-2 rounded-2xl font-sofiasans shadow-2xl text-lg lg:text-2xl flex justify-between items-center"
                  onClick={() => (window.location.href = `https://www.tokopedia.com/search?q=${encodeURIComponent(batikDetail.name)}`)}
                >
                  Cari Batik ini di Tokopedia
                  <img className="w-7 h-7 lg:w-9 lg:h-9" src={Tokopedia} alt="tokopedia-img" />
                </button>
                <button
                  className="w-[290px] lg:w-[390px] hover:bg-orange-300/20 transition duration-300 ease-in-out border-2 lg:border-4 border-[#ee4d2d] bg-white mt-3 px-6 py-2 rounded-2xl font-sofiasans shadow-2xl text-lg lg:text-2xl flex justify-between items-center"
                  onClick={() => (window.location.href = `https://www.shopee.co.id/search?keyword=${encodeURIComponent(batikDetail.name)}`)}
                >
                  Cari Batik ini di Shopee
                  <img className="w-8 h-8 lg:w-10 lg:h-10" src={Shopee} alt="shopee-img" />
                </button>
              </div>

              <div className="md:w-1/2 md:pr-10 md:py-5">
                <h1 className="md:text-6xl text-4xl font-vidaloka md:mb-2">{batikDetail.name}</h1>
                <p className="md:text-3xl text-xl  mb-6 font-vidaloka">
                  {batikDetail.province}, {batikDetail.city}
                </p>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Filosofi</h2>
                  <p className="leading-relaxed text-justify">{batikDetail.description}</p>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="w-full border-[1px] border-black/20 mt-20"></div>

        <div className="mt-12">
          <h2 className="text-center text-xl mb-16 cursor-pointer font-normal hover:underline" onClick={() => navigate('/catalog')}>
            LIHAT BATIK LAINNYA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:mx-10 lg:mx-0 lg:grid-cols-3 gap-6">
            {relatedBatiks.slice(0, 3).map((batik, index) => (
              <div key={index} className="font-vidaloka cursor-pointer" onClick={() => navigate(`/overview/${batik.id}`)}>
                <img src={batik.link_image} alt={`gambar-${batik.name}`} className="w-full h-60 object-cover rounded-lg shadow-md mb-4" />
                <h3 className="text-4xl">{batik.name}</h3>
                <p className="text-xl">{batik.province}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Overview;
