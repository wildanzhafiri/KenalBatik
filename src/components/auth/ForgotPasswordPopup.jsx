import React, { useState } from 'react';
import axios from 'axios';
import sideImage from '../../assets/forgotpass.png'; // Gambar yang sesuai dengan desain
import Logo from '../../assets/logo.svg';
import Eye from '../../assets/eye.svg';

export default function ForgotPasswordPopup({ onClose }) {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSendCode = async () => {
    try {
      const response = await axios.post('https://your-backend-url.com/auth/send-verification-code', {
        email,
      });
      console.log('Verification code sent:', response.data);
      setError('');
    } catch (error) {
      setError('Gagal mengirim kode verifikasi. Cek kembali email Anda.');
      console.error('Error sending code:', error.response ? error.response.data : error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-backend-url.com/auth/reset-password', {
        email,
        verificationCode,
        newPassword,
      });
      console.log('Password reset successful:', response.data);
      onClose(); // Tutup modal setelah berhasil reset password
    } catch (error) {
      setError('Gagal mereset password. Pastikan kode verifikasi benar.');
      console.error('Error resetting password:', error.response ? error.response.data : error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle visibility
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
      <div className="bg-[#f7f2ed] rounded-xl shadow-lg flex w-[1200px] h-[700px] transform transition-transform duration-300 ease-in-out scale-100">
        {/* Bagian kiri form */}
        <div className="w-[600px] p-12 relative flex flex-col justify-center items-center">
          <img src={Logo} width={40} height={40} alt="Kenal Batik" className="mb-12 absolute top-6 left-6" />
          <div className="w-[450px]">
            <h2 className="text-xl font-bold text-gray-800">Lupa Kata Sandi</h2>
            <p className="mb-3 text-[#b8b8b8] text-sm">Gapapa kok, namanya juga manusia suka lupa.</p>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Form Alamat Email */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Alamat Email</label>
              <input type="email" className="border border-gray-300 rounded-lg w-full mb-4 py-3 px-4 focus:outline-none focus:border-blue-500" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <button onClick={handleSendCode} className="bg-[#092fb5] text-white py-4 mb-2 px-4 w-full rounded-lg">
                Kirim Kode Verifikasi
              </button>
            </div>

            {/* Divider */}
            <div className="text-center border-[0.5px] border-black/30 w-full my-6"></div>

            {/* Form Kode Verifikasi */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Kode Verifikasi</label>
              <input type="text" className="border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:border-red-500" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} required />
            </div>

            {/* Form Kata Sandi Baru */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Kata Sandi Baru</label>
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'} // Toggle between 'text' and 'password'
                  className="border border-gray-300 rounded-lg w-full py-3 px-4 focus:outline-none focus:border-red-500"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <span
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" // Positioning the icon at the center vertically
                  onClick={togglePasswordVisibility}
                >
                  {/* Icon untuk melihat kata sandi */}
                  <img src={Eye} alt="visible-icon" className="w-5 h-5" />
                </span>
              </div>
            </div>

            {/* Tombol Konfirmasi Kata Sandi */}
            <button onClick={handleResetPassword} className="bg-[#092fb5] text-white py-4 px-4 w-full rounded-lg">
              Konfirmasi Kata Sandi Baru
            </button>
          </div>
        </div>

        {/* Bagian Kanan (Gambar) */}
        <div className="w-[600px] bg-cover flex items-center justify-end p-6">
          <img src={sideImage} alt="Batik Image" className="object-cover rounded-xl" />
        </div>
      </div>
    </div>
  );
}
