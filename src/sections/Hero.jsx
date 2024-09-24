import Megamendung from '../assets/megamendung-batik.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const Hero = () => {
  const [text] = useTypewriter({
    words: [
      '“Simbol kekuatan dan kebijaksanaan yang menyatukan kita dengan warisan budaya Jawa.”',
      '“Dalam setiap motif batik, tersimpan kekuatan jiwa dan kebijaksanaan leluhur yang mengikat kita pada akar budaya.”',
      '“Kebijaksanaan leluhur adalah obor yang menerangi jalan kita, mengingatkan kita pada identitas dan kekuatan budaya yang kita miliki.”',
    ],
    loop: {},
    typeSpeed: '60',
    deleteSpeed: '30',
  });

  return (
    <section className="w-full px-4 md:px-20 py-4 my-10">
      <div className="container mx-auto bg-[#fff1e3] rounded-[24px] md:rounded-[48px]">
        <div className="flex flex-col md:flex-row">
          <div className="md:basis-1/2 p-5 md:p-9 flex flex-col">
            <h2 className="text-[#e4666c] text-3xl md:text-5xl font-vidaloka">
              {text}
              <Cursor />
            </h2>

            <div className="mt-10 xl:mt-auto">
              <h3 className="font-vidaloka text-xl md:text-2xl">Batik Megamendung ꦩꦺꦒꦩꦼꦤ꧀ꦢꦸꦁ</h3>
              <p className="font-vidaloka text-md md:text-lg">Cirebon</p>
              <a className="underline" href="#">
                Klik disini untuk pelajari batik ini lebih lanjut {'>'}{' '}
              </a>
            </div>
          </div>
          <div className="p-5 md:p-0 md:basis-1/2 ">
            <img src={Megamendung} alt="gambar-batik" className="object-cover md:round w-full rounded-b-[24px] md:rounded-r-[48px] md:rounded-bl-none" />
          </div>
        </div>
      </div>
    </section>
  );
};
