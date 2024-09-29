import React from 'react';
import tier from '../assets/Tier 5.svg';
import profil from '../assets/profil.svg';

const Profil = ({ onLogout }) => {
  return (
    <div className="absolute right-0 mt-2 w-[280px] sm:w-[350px] md:w-[450px] bg-white shadow-lg rounded-lg z-50 p-3 sm:p-4 md:p-5">
      <div className="bg-[#ffdfad] rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col sm:flex-row gap-2">
        <div className="w-full sm:basis-4/5">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-2 sm:mb-0">
              <img src={profil} alt="Profile" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full mb-2 sm:mb-0 sm:mr-3" />
              <div>
                <h2 className="text-base sm:text-lg font-bold text-black">rendraganteng</h2>
                <p className="text-xs sm:text-sm text-black">rendra@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center sm:justify-end gap-2 sm:gap-4 items-center my-2">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-black">Batik Rookie</h3>
          </div>
          <div className="flex items-center">
            <span className="text-xs sm:text-sm mr-2 text-black">60/150</span>
            <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4">
              <div className="bg-[#37b991] h-3 sm:h-4 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
        <div className="w-full sm:basis-1/5 flex justify-center items-center sm:items-end mt-2 sm:mt-0">
          <img src={tier} alt="Batik Rookie Badge" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
        </div>
      </div>
      {/* Stats */}
      <div className="mt-3 sm:mt-4 bg-[#ffdfad] grid grid-cols-3 p-2 sm:p-3 md:p-4 rounded-2xl text-center text-black">
        <div>
          <p className="text-xs sm:text-sm">Soal Terjawab</p>
          <p className="text-lg sm:text-xl md:text-2xl font-vidaloka">17</p>
        </div>
        <div>
          <p className="text-xs sm:text-sm">Jawaban Benar</p>
          <p className="text-lg sm:text-xl md:text-2xl font-vidaloka">15</p>
        </div>
        <div>
          <p className="text-xs sm:text-sm">Akurasi Jawaban</p>
          <p className="text-lg sm:text-xl md:text-2xl font-vidaloka">80%</p>
        </div>
      </div>
      {/* Tombol Logout */}
      <button onClick={onLogout} className="bg-red-500 text-white px-4 py-2 mt-3 sm:mt-4 rounded-lg w-full text-sm sm:text-base font-semibold hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Profil;
