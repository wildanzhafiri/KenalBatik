import React, { useState } from 'react';
import axios from 'axios';
import sideImage from '../../assets/login-image.png'; 
import googleImage from '../../assets/Google Logo.svg';
import Logo from '../../assets/logo.svg'; 

export default function LoginPopup({ onClose, onSignUpClick, onForgotPasswordClick }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-backend-url.com/auth/login', {
        username,
        password,
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('authToken', response.data.token);
      onClose(); // Tutup modal login
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://your-backend-url.com/auth/google';
  };


  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlay') {
      onClose();
    }
  };

  return (
    <div id="overlay" className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleOverlayClick}>
      <div className="bg-[#f7f2ed] rounded-xl shadow-lg flex w-[1200px] h-[600px] transform transition-transform duration-300 ease-in-out scale-100">

        <div className="w-[600px] p-8 relative flex flex-col justify-center items-center">
          {/* Logo Kenal Batik */}
          <img src={Logo} width={40} height={40} alt="Kenal Batik" className="mb-8 absolute top-6 left-6" />

          <div className="w-[400px]">
            {/* Heading Masuk */}
            <h2 className="text-xl font-semibold text-[#333]">Masuk</h2>
            <p className="mb-6 text-gray-500 text-sm">Masuk untuk melihat progress levelmu!</p>

            {/* Form Login */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-600 font-semibold mb-1">User name</label>
                <input type="text" className="border border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-red-500" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>

              <div>
                <label className="block text-gray-600 font-semibold mb-1">Kata Sandi</label>
                <input type="password" className="border border-gray-300 rounded-lg w-full py-2 px-3 focus:outline-none focus:border-red-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              {/* Checkbox dan Lupa Kata Sandi */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <label className="text-gray-600">Ingat saya</label>
                </div>
                <button onClick={onForgotPasswordClick} className="text-sm text-gray-600 hover:underline">
                  Lupa Kata Sandi?
                </button>
              </div>

              {/* Tombol Masuk */}
              <button type="submit" className="bg-[#092fb5] text-white py-4 px-4 w-full rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                Masuk
              </button>
            </form>

            <div className="text-center border-[0.5px] border-black/30 w-full my-6"></div>

            {/* Tombol Google Login */}
            <div className="flex justify-center">
              <button onClick={handleGoogleLogin} className="bg-white border rounded-lg py-2 px-4 flex items-center text-gray-700 hover:bg-gray-100 transition duration-200">
                <img src={googleImage} alt="Google" className="w-5 mr-2" />
                Continue with Google
              </button>
            </div>

            {/* Link Sign Up */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Belum punya akun?{' '}
                <button onClick={onSignUpClick} className="text-blue-500 hover:underline">
                  Daftar sekarang
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Bagian Kanan (Gambar) */}
        <div className="bg-cover flex items-center justify-end p-6">
          <img src={sideImage} alt="Batik Image" className="object-cover rounded-xl h-full" />
        </div>
      </div>
    </div>
  );
}
