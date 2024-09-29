import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk navigasi
import heroImage from '../assets/mascoot.png';
import batik1 from '../assets/hero/background1.png';
import batik2 from '../assets/hero/background2.png';
import batik3 from '../assets/hero/background3.png';
import batik4 from '../assets/hero/background4.png';
import bubleTail from '../assets/hero/bubbletail.svg';
import ConfirmationPopup from '../components/ConfirmationPopup';
import LoginPopup from '../components/auth/LoginPopup';
import SignUpPopup from '../components/auth/SignUpPopUp';
import ForgotPasswordPopup from '../components/auth/ForgotPasswordPopup';

const Hero = ({ isLoggedIn }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false); // State untuk kontrol LoginPopup
  const [showSignUpPopup, setShowSignUpPopup] = useState(false); // State untuk kontrol SignUpPopup
  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false); // State untuk kontrol ForgotPasswordPopup

  const navigate = useNavigate(); // useNavigate untuk berpindah halaman

  const handleQuizClick = () => {
    if (!isLoggedIn) {
      setShowPopup(true); // Tampilkan konfirmasi jika belum login
    } else {
      navigate('/kuis'); // Jika sudah login, arahkan ke halaman kuis
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Menutup ConfirmationPopup
  };

  const handleLoginRedirect = () => {
    setShowPopup(false); // Tutup ConfirmationPopup
    setShowLoginPopup(true); // Tampilkan Login Popup
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false); // Menutup LoginPopup
  };

  const handleSignUpRedirect = () => {
    setShowLoginPopup(false); // Tutup LoginPopup
    setShowSignUpPopup(true); // Tampilkan SignUpPopup
  };

  const handleForgotPasswordRedirect = () => {
    setShowLoginPopup(false); // Tutup LoginPopup
    setShowForgotPasswordPopup(true); // Tampilkan ForgotPasswordPopup
  };

  const handleCloseSignUpPopup = () => {
    setShowSignUpPopup(false); // Menutup SignUpPopup
  };

  const handleCloseForgotPasswordPopup = () => {
    setShowForgotPasswordPopup(false); // Menutup ForgotPasswordPopup
  };

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-4 md:mt-20 lg:mt-32 mb-20">
      <div className="container mx-auto items-center">
        {/* Bagian Teks */}
        <div className="py-7 md:flex justify-center lg:gap-10">
          <div>
            <h2 className="font-vidaloka text-[32px] lg:text-[55px]">Ayo Kenali</h2>
            <h2 className="font-vidaloka text-[40px] lg:text-[65px] leading-5 md:leading-10 mb-2 md:mb-4">Batik Nusantara!</h2>

            <p className="text-start text-[16px] md:text-[20px] lg:text-xl font-medium font-vidaloka mb-8 md:pr-10 lg:pr-20">Jelajahi Kekayaan Warisan Budaya Indonesia Melalui Batik.</p>

            <div className="flex justify-start gap-4 my-8 font-sofiasans">
              <button onClick={handleQuizClick} className="bg-[#e4666c] text-white px-2 py-3 rounded-xl text-[14px] md:text-[16px] lg:text-xl shadow-lg">
                Belajar Lewat Kuis Seru!
              </button>
              <button className="bg-white text-[14px] md:text-[16px] lg:text-xl px-5 py-3 rounded-xl shadow-lg">Mulai Eksplorasi!</button>
            </div>
          </div>
          {/* Bagian Gambar */}
          <div className="relative flex justify-center">
            <div className="absolute z-10 font-sofiasans bg-white p-3 rounded-xl w-80 md:text-sm left-1/2 transform -translate-x-1/2 md:-translate-x-64 md:z-30 md:-translate-y-10 lg:top-0 lg:left-11">
              Batik bukan hanya sebuah kain, tapi juga sebuah cerita tentang tradisi, seni, dan sejarah yang diwariskan dari generasi ke generasi.
            </div>

            {/* Gambar Maskot */}
            <img src={bubleTail} alt="bubletail" className="w-8 h-8 absolute z-10 top-[98px] left-32 md:top-5 md:left-16 md:w-8 md:h-8 md:z-20 lg:top-[14px] lg:left-[88px]" />
            <img src={heroImage} alt="maskot" className="mt-32 md:mt-10 lg:-mt-7 w-[300px] md:w-[380px] lg:w-[500px] object-cover z-10" />

            {/* Gambar Batik */}
            <img src={batik1} alt="batik1" className="hidden md:block absolute md:z-10 md:-left-16 lg:-left-32 lg:-top-32 md:-top-7 w-[80px] md:w-[180px] lg:w-[300px]" />
            <img src={batik2} alt="batik2" className="hidden md:block absolute md:-right-10 md:z-0 lg:-right-6 md:-top-10 lg: md:w-[180px] lg:w-[210px]" />
            <img src={batik3} alt="batik3" className="hidden md:block absolute md:-left-20 md:z-10 md:-bottom-0 lg:bottom-0 lg:-left-14 md:w-[180px] lg:w-[210px]" />
            <img src={batik4} alt="batik4" className="hidden md:block absolute md:-right-10 md:-bottom-10 lg:-bottom-10 lg:-right-14 md:w-[180px] lg:w-[230px] rounded-full" />
          </div>
        </div>
      </div>

      {/* Popup Konfirmasi */}
      {showPopup && <ConfirmationPopup onClose={handleClosePopup} onLogin={handleLoginRedirect} />}

      {/* Popup Login */}
      {showLoginPopup && (
        <LoginPopup
          onClose={handleCloseLoginPopup}
          onSignUpClick={handleSignUpRedirect} // Buka SignUp Popup
          onForgotPasswordClick={handleForgotPasswordRedirect} // Buka ForgotPassword Popup
        />
      )}

      {/* Popup SignUp */}
      {showSignUpPopup && <SignUpPopup onClose={handleCloseSignUpPopup} />}

      {/* Popup ForgotPassword */}
      {showForgotPasswordPopup && <ForgotPasswordPopup onClose={handleCloseForgotPasswordPopup} />}
    </section>
  );
};

export default Hero;
