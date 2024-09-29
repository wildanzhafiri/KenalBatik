import Logo from '../assets/logo.svg';
import Lampu from '../assets/lampu.png';
import Footer from '../sections/Footer';
import Navbar from '../components/Navbar';

const Cerita = () => {
  return (
    <section className="w-full">
      <Navbar />
      <div className="my-5 mx-5 md:mx-10 lg:mx-20">
        <h2 className="text-center font-vidaloka lg:text-5xl lg:mt-20 text-3xl md:text-4xl md:mt-10 lg:mb-10">Cerita di Balik Kenal Batik</h2>
        <div className="lg:flex lg:items-center lg:mb-20">
          <div className="flex justify-center lg:basis-2/6">
            <img src={Logo} alt="logo" className="w-64 h-64 lg:w-80 lg:h-80" />
          </div>

          <div className="lg:basis-4/6 font-sofiasans md:text-xl">
            <p className="mb-5 text-justify">
              Dalam arus modernisasi, budaya asli kita, termasuk batik, sering kali terpinggirkan. Kami di Kenal Batik hadir untuk menjawab tantangan ini dengan cara melestarikan batik di era digital. Dengan platform interaktif dan relevan,
              kami berusaha menghidupkan kembali batik serta menjangkau generasi muda yang belum akrab dengan warisan ini.
            </p>
            <p className="text-justify"> Kenal Batik bukan hanya katalog motif, tetapi sebuah perjalanan memahami makna batik dan menyampaikan warisan ini ke masa depan.</p>
          </div>
        </div>

        <div className="lg:flex flex-row-reverse">
          <div className="flex justify-center lg:basis-2/6 lg:items-center">
            <img src={Lampu} alt="lampu" className="lg:w-96 lg:h-96 w-80 h-80" />
          </div>
          <div className="lg:basis-4/6 md:text-xl font-sofiasans">
            <p className="mb-4 text-justify">
              Kenal Batik lahir dari kecintaan dan keprihatinan. Kami menyadari bahwa batik, lebih dari sekadar kain, adalah cerita. Setiap motif dan warna memiliki makna, menyimpan sejarah, dan membawa identitas daerah asalnya. Namun,
              dalam era globalisasi ini, sering kali warisan budaya kita terpinggirkan oleh arus budaya asing yang masuk dengan begitu kuat.
            </p>
            <p className="mb-4 text-justify">
              Sebagai generasi yang tumbuh di tengah perkembangan teknologi, kami tidak ingin hanya diam melihat budaya kita perlahan memudar. Kami ingin membawa batik ke panggung global, dengan cara yang relevan bagi generasi sekarang,
              tanpa melupakan akar tradisi yang mendalam. Teknologi adalah alat, namun batik adalah jiwanya.
            </p>
            <p className="mb-4 text-justify">
              Lewat Kenal Batik, kami ingin menyampaikan pesan bahwa tradisi dan inovasi bisa berjalan beriringan. Kami percaya, melestarikan batik tidak harus dengan cara lama. Kami ingin memanfaatkan teknologi digital untuk membuka
              jendela baru bagi dunia, memperkenalkan batik sebagai bagian tak terpisahkan dari kekayaan budaya kita, yang patut dibanggakan, dipahami, dan diapresiasi oleh semua kalangan.
            </p>
            <p className="mb-4 text-justify">
              Setiap langkah dalam perjalanan ini, dari desain hingga pengembangan situs, adalah upaya untuk menjawab satu pertanyaan besar, Bagaimana kita bisa membuat generasi muda bangga dengan warisan budaya mereka? Jawabannya adalah
              dengan menghadirkan batik secara interaktif, modern, dan menyenangkan, sesuai dengan gaya hidup mereka saat ini
            </p>
            <p className="mb-4 text-justify">
              Bagi kami, Kenal Batik adalah jembatan antara masa lalu yang penuh sejarah dan masa depan yang penuh inovasi. Kami berharap situs ini tidak hanya menjadi tempat belajar, tetapi juga menjadi sarana untuk mengenal lebih dalam
              warisan budaya yang telah diwariskan kepada kita.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Cerita;
