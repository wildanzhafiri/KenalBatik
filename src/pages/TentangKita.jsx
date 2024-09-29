import imageWildan from '../assets/tentangkita/wildan.png';
import imageRendra from '../assets/tentangkita/rendra.png';
import imageNaufal from '../assets/tentangkita/naufal.png';
import Navbar from '../components/Navbar';
import LoginPopup from '../components/auth/LoginPopup';
import SignUpPopup from '../components/auth/SignUpPopUp';
import ForgotPasswordPopup from '../components/auth/ForgotPasswordPopup';
import { useState } from 'react';
import ppnaufal from '../assets/ppnaufal.png';
import pprendra from '../assets/pprendra.png';
import ppwildan from '../assets/ppwildan.png';
import Footer from '../sections/Footer';

const TentangKita = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);

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
  return (
    <div className="max-w-full md:h-screen   flex flex-col">
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

      <div className="w-full md:h-full my-10 lg:my-24 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-32 text-center font-vidaloka">
        <div className="flex flex-col items-center">
          <img src={ppwildan} alt="wildan" className="w-[170px] h-[170px] lg:w-[220px] lg:h-[220px] rounded-full" />
          <p className="text-2xl  mt-5">Wildan Zhafiri</p>
          <p className="text-lg">Front-end Programming</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={pprendra} width={170} height={170} alt="rendra" className="w-[170px] h-[170px] lg:w-[220px] lg:h-[220px] rounded-full" />
          <p className="text-2xl mt-5">Rarendra Adi</p>
          <p className="text-lg">Web Design</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={ppnaufal} width={170} height={170} alt="naufal" className="w-[170px] h-[170px] lg:w-[220px] lg:h-[220px] rounded-full" />
          <p className="text-2xl mt-5">Naufal Haris</p>
          <p className="text-lg">Back-end Programming</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TentangKita;
