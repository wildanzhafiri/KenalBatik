import Navbar from '../components/navbar';
import { Hero } from '../sections/hero';
import { Introduction } from '../sections/Introduction';
import Footer from '../sections/Footer';
import { useState } from 'react';
import LoginPopup from '../components/auth/LoginPopUp';
import SignUpPopup from '../components/auth/SignUpPopUp';
import ForgotPasswordPopup from '../components/auth/ForgotPasswordPopup';

function Homepage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State untuk login pop-up
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); // State untuk sign-up pop-up
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false); // State untuk forgot password pop-up

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
  return (
    <>
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

      <Hero />

      <Introduction />

      <Footer />
    </>
  );
}

export default Homepage;
