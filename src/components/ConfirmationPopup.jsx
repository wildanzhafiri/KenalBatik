import React from 'react';

const ConfirmationPopup = ({ onClose, onLogin }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:w-[400px] mx-4">
        <h2 className="text-center text-xl font-bold mb-4 font-vidaloka">Konfirmasi</h2>
        <p className="text-start text-black mb-6">Kamu Harus masuk atau daftar akun dulu sebelum menggunakan fitur kuis!</p>
        <div className="flex justify-between">
          <button onClick={onClose} className="border border-black px-6 py-2 rounded-lg">
            Batal
          </button>
          <button onClick={onLogin} className="bg-[#e4666c] text-white px-6 py-2 rounded-lg">
            Ya, Masuk Akun
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
