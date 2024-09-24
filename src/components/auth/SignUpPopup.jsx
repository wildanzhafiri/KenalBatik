import React, { useState } from 'react';
import axios from 'axios';
import sideImage from '../../assets/signup-image.png';
import Logo from '../../assets/logo.svg';
import googleImage from '../../assets/Google Logo.svg';

export default function SignUpPopup({ onClose }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-backend-url.com/auth/register', {
        email,
        username,
        password,
      });
      console.log('Sign up successful:', response.data);
      onClose(); // Tutup modal sign up
    } catch (error) {
      console.error('Sign up failed:', error.response ? error.response.data : error.message);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = 'https://your-backend-url.com/auth/google';
  };

  // Tutup popup jika pengguna mengklik di luar modal
  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlay') {
      onClose();
    }
  };

  return (
    <div
      id="overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick} // Event untuk menutup jika klik di luar modal
    >
      <div className="bg-[#f7f2ed] rounded-xl shadow-lg flex w-[1200px] h-[600px]  transform transition-transform duration-300 ease-in-out scale-100">
        <div className="w-[600px] p-8 relative flex flex-col justify-center items-center">
          <img src={Logo} width={40} height={40} alt="Kenal Batik" className="mb-8 absolute top-6 left-6" />

          <div className="w-[400px]">
            <h2 className="text-xl font-semibold text-[#333]">Daftar</h2>
            <p className="mb-6 text-gray-500 text-sm">Daftar akun untuk meningkatkan pengetahuan batikmu!</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Alamat Email</label>
                <input type="email" className="border rounded-lg w-full py-2 px-4 focus:outline-none focus:border-green-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">User name</label>
                <input type="text" className="border rounded-lg w-full py-2 px-4 focus:outline-none focus:border-green-500" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Kata Sandi</label>
                <input type="password" className="border rounded-lg w-full py-2 px-4 focus:outline-none focus:border-green-500" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              <button type="submit" className="bg-[#092fb5] text-white mt-1 py-3 px-4 w-full rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                Daftar
              </button>
            </form>
            <div className="text-center border-[0.5px] border-black/30 w-full my-6"></div>
            <div className="flex justify-center">
              <button onClick={handleGoogleLogin} className="bg-white border rounded-lg py-2 px-4 flex items-center text-gray-700 hover:bg-gray-100 transition duration-200">
                <img src={googleImage} alt="Google" className="w-5 mr-2" />
                Continue with Google
              </button>
            </div>
          </div>
        </div>

        <div className="bg-cover flex items-center justify-end p-6">
          <img src={sideImage} alt="Batik Image" className="object-cover rounded-xl h-full" />
        </div>
      </div>
    </div>
  );
}
