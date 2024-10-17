import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroImage from '../assets/mascoot.png';
import backgroundImage from '../assets/background-hero.png';
import batik1 from '../assets/hero/background1.png';
import batik2 from '../assets/hero/background2.png';
import batik3 from '../assets/hero/background3.png';
import batik4 from '../assets/hero/background4.png';
import appbi from '../assets/appbi.png';
import dekranas from '../assets/dekranas.png';
import bekraf from '../assets/bekraf.png';
import ybi from '../assets/ybi.png';
import bubleTail from '../assets/hero/bubbletail.svg';
import ConfirmationPopup from '../components/ConfirmationPopup';

const Hero = ({ isLoggedIn, onExploreClick }) => {
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleQuizClick = () => {
    if (!isLoggedIn) {
      setShowPopup(true);
    } else {
      navigate('/prequiz');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <section className="w-full relative md:mt-20 lg:mt-32">
      {/* Overlay dengan efek blur di bagian atas */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={slideInFromLeft}>
        <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-20 py-4">
          <div className="container mx-auto items-center">
            <div className="py-7 md:flex justify-center lg:gap-10">
              <div>
                <h2 className="font-vidaloka text-[32px] lg:text-[55px]">Ayo Kenali</h2>
                <h2 className="font-vidaloka text-[40px] lg:text-[65px] leading-5 md:leading-10 mb-2 md:mb-4">Batik Nusantara!</h2>

                <p className="text-start text-[16px] md:text-[20px] lg:text-xl font-medium font-vidaloka mb-8 md:pr-10 lg:pr-20">Jelajahi Kekayaan Warisan Budaya Indonesia Melalui Batik.</p>

                <div className="flex justify-start gap-4 my-8 font-sofiasans">
                  <button onClick={handleQuizClick} className="bg-[#e4666c] text-white px-3 py-3 rounded-xl text-[14px] md:text-[16px] shadow-lg">
                    Belajar Lewat Kuis Seru!
                  </button>
                  <button onClick={onExploreClick} className="bg-white text-[14px] md:text-[16px] px-3 py-3 rounded-xl shadow-lg">
                    Mulai Eksplorasi!
                  </button>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="absolute z-10 font-sofiasans bg-white p-3 rounded-xl w-80 md:text-sm left-1/2 transform -translate-x-1/2 md:-translate-x-64 md:z-30 md:-translate-y-10 md:hidden lg:top-0 lg:left-11 lg:hidden">
                  Batik bukan hanya sebuah kain, tapi juga sebuah cerita tentang tradisi, seni, dan sejarah yang diwariskan dari generasi ke generasi.
                </div>

                <img src={bubleTail} alt="bubletail" className="w-8 h-8 absolute z-10 top-[98px] left-32 md:top-5 md:left-16 md:w-8 md:h-8 md:z-20 lg:top-[14px] md:hidden lg:left-[88px] lg:hidden" />
                <img src={heroImage} alt="maskot" className="mt-32 md:mt-10 lg:-mt-7 w-[300px] md:w-[380px] lg:w-[500px] object-cover z-10" />
                <img src={batik1} alt="batik1" className="hidden md:block absolute md:z-10 md:-left-16 lg:-left-32 lg:-top-32 md:-top-7 w-[80px] md:w-[180px] lg:w-[300px]" />
                <img src={batik2} alt="batik2" className="hidden md:block absolute md:-right-10 md:z-0 lg:-right-6 md:-top-10 lg: md:w-[180px] lg:w-[210px]" />
                <img src={batik3} alt="batik3" className="hidden md:block absolute md:-left-20 md:z-10 md:-bottom-0 lg:bottom-0 lg:-left-14 md:w-[180px] lg:w-[210px]" />
                <img src={batik4} alt="batik4" className="hidden md:block absolute md:-right-10 md:-bottom-10 lg:-bottom-10 lg:-right-14 md:w-[180px] lg:w-[230px] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Background image diatur menggunakan Tailwind CSS */}
        <div
          className="-mt-[500px] md:-mt-48 lg:-mt-80 bg-cover bg-center h-[500px] md:h-[300px] lg:h-[400px] z-0"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Ganti dengan path gambar yang benar
          }}
        ></div>

        <div className="-mt-[505px] md:-mt-[310px] lg:-mt-[405px] h-[300px] bg-gradient-to-b from-[#f7f2ed] to-transparent z-0"></div>

        <div className="bg-white flex justify-center items-center p-4 gap-8 lg:gap-32 md:mt-0 lg:mt-24 mt-52 mb-10 shadow-2xl">
          <img className="w-10 h-10 lg:w-16 lg:h-16" src={appbi} alt="appbi" />
          <img className="w-10 h-10 lg:w-16 lg:h-16" src={dekranas} alt="dekranas" />
          <img className="w-14 h-10 lg:w-24 lg:h-16" src={bekraf} alt="bekraf" />
          <img className="w-12 h-12 lg:w-20 lg:h-16" src={ybi} alt="ybi" />
        </div>
      </motion.div>
      {showPopup && <ConfirmationPopup onClose={handleClosePopup} onLogin={handleClosePopup} />}
    </section>
  );
};

export default Hero;
