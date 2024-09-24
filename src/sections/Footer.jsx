import Logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="w-full h-[400px] bg-white text-center flex flex-col justify-center items-center rounded-t-[300px]">
        <h4 className="text-4xl w-96 mb-4 font-vidaloka">Budaya pada Budaya, Digerakkan oleh Inovasi</h4>
        <p className="md:w-[600px] font-normal text-lg">
          Kenal Batik adalah inisiatif non-profit yang bertujuan mengenalkan batik sebagai warisan budaya bangsa. Kami percaya bahwa setiap motif memiliki cerita, dan melalui pendekatan yang kreatif, kami ingin masyarakat lebih memahami dan
          mencintai batik.
        </p>

        <div className="flex gap-6 text-lg mt-6">
          <button className="bg-[#F7F9FB] px-3 py-2 rounded-xl text-center">👀 Cerita Kenal Batik</button>
          <button className="bg-[#F7F9FB] px-3 py-2 rounded-xl text-center">👋 Sapa Kami</button>
        </div>
      </div>
      <div className="bg-white w-full">
        <div className="border-2 mx-20"></div>
        <div className="flex justify-center p-3 gap-14 items-center h-[100px]">
          <img src={Logo} width={80} height={80} alt="logo" />
          <p>{'\u00a9'} 2024 Kenal Batik. Semua Hak Dilindungi. Berkontribusi untuk Melestarikan Batik.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
