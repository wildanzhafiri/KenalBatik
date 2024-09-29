import Hero from '../sections/Hero.jsx';
import SectionQuotes from '../sections/SectionQuotes.jsx';
import Footer from '../sections/Footer.jsx';
import { useState, useRef } from 'react';
import LoginPopup from '../components/auth/LoginPopup.jsx';
import SignUpPopup from '../components/auth/SignUpPopup.jsx';
import ForgotPasswordPopup from '../components/auth/ForgotPasswordPopup.jsx';
import Peta from '../sections/Peta.jsx';
import IntroQuiz from '../sections/IntroQuiz.jsx';
import Navbar from '../components/Navbar.jsx';

function Homepage() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State untuk login pop-up
  const [isSignUpOpen, setIsSignUpOpen] = useState(false); // State untuk sign-up pop-up
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false); // State untuk forgot password pop-up
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk melacak status login

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

  const handleLogout = () => {
    setIsLoggedIn(false); // Logout
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Melakukan login dummy
    setIsLoginOpen(false); // Tutup Login Popup setelah login
  };

  const sectionQuotesRef = useRef(null);

  const scrollToSectionQuotes = () => {
    sectionQuotesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="bg-bg-pattern bg-cover bg-center">
      {/* Mengirim status login ke Navbar */}
      <Navbar onLoginClick={toggleLoginPopup} isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      {/* Mengirim status login ke Hero */}
      <Hero onExploreClick={scrollToSectionQuotes} isLoggedIn={isLoggedIn} />

      {/* Pop-up untuk login */}
      {isLoginOpen && (
        <LoginPopup
          onClose={toggleLoginPopup}
          onLogin={handleLogin}
          onSignUpClick={toggleSignUpPopup} // Buka sign-up saat "Daftar sekarang" diklik
          onForgotPasswordClick={toggleForgotPasswordPopup} // Buka forgot password saat diklik
        />
      )}

      {/* Pop-up untuk sign up */}
      {isSignUpOpen && <SignUpPopup onClose={toggleSignUpPopup} />}

      {/* Pop-up untuk forgot password */}
      {isForgotPasswordOpen && <ForgotPasswordPopup onClose={toggleForgotPasswordPopup} />}

      <SectionQuotes ref={sectionQuotesRef} />

      <Peta />

      <IntroQuiz isLoggedIn={isLoggedIn} />

      <Footer />
    </div>
  );
}

export default Homepage;
