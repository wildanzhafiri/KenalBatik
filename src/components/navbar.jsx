import Logo from '../assets/logo.svg';

function Navbar({ onLoginClick }) {
  return (
    <nav className="bg-[#F7F2ED] flex items-center px-20 relative">
      <div className="container mx-auto flex items-center justify-between border-b-[1px] border-black/40 py-6">
        <ul className="flex space-x-16 font-vidaloka text-2xl font-normal text-[#E4676C]">
          <li>
            <a href="#" className="hover:text-[#c95745]">
              Beranda
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#c95745]">
              Produk
            </a>
          </li>
        </ul>

        <div>
          <a href="#" className="absolute top-3 left-1/2 transform -translate-x-1/2 flex text-center justify-center font-upakarti leading-[0.8] text-5xl font-normal text-[#E4676C] tracking-widest">
            <img src={Logo} height={80} width={80} className="pb-3" alt="logo-batik-kita" />
          </a>
        </div>

        <ul className="flex space-x-16 font-vidaloka text-2xl font-normal text-[#E4676C] justify-end">
          <li>
            <a href="#" className="hover:text-[#c95745]">
              Tentang Kami
            </a>
          </li>
          <li>
            <button onClick={onLoginClick} className="hover:text-[#c95745]">
              Login
            </button>
          </li>
        </ul>
      </div>

      <div className="border-t border-gray-300 mt-10"></div>
    </nav>
  );
}

export default Navbar;
