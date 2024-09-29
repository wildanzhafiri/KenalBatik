import Megamendung from '../assets/megamendung-batik.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import React from 'react';

// Gunakan forwardRef untuk menerima ref dari komponen induk
const SectionQuotes = React.forwardRef((props, ref) => {
  const [text] = useTypewriter({
    words: [
      '“Simbol kekuatan dan kebijaksanaan yang menyatukan kita dengan warisan budaya Jawa.”',
      '“Dalam setiap motif batik, tersimpan kekuatan jiwa dan kebijaksanaan leluhur yang mengikat kita pada akar budaya.”',
      '“Kebijaksanaan leluhur adalah obor yang menerangi jalan kita, mengingatkan kita pada identitas dan kekuatan budaya yang kita miliki.”',
    ],
    loop: {},
    typeSpeed: 60,
    deleteSpeed: 30,
  });

  return (
    <section ref={ref} className="w-full px-4 md:px-20 py-4 my-8 md:my-24">
      <div className="container mx-auto bg-[#fff1e3] rounded-[24px] md:rounded-[48px] shadow-2xl lg:h-[600px]">
        <div className="flex flex-col md:flex lg:flex-row">
          <div className="lg:basis-1/2 p-5 md:p-9 flex flex-col justify-between">
            <h2 className="text-[#e4666c] text-3xl md:text-5xl font-vidaloka">
              {text}
              <Cursor />
            </h2>

            <div className="mt-10">
              <h3 className="font-vidaloka text-xl md:text-2xl">Batik Megamendung ꦩꦺꦒꦩꦼꦤ꧀ꦢꦸꦁ</h3>
              <p className="font-vidaloka text-md md:text-lg">Cirebon</p>
              <a className="underline" href="#">
                Klik disini untuk pelajari batik ini lebih lanjut {'>'}{' '}
              </a>
            </div>
          </div>
          <div className="p-5 md:p-10 lg:p-0 lg:basis-1/2">
            <img src={Megamendung} alt="gambar-batik" className="object-cover w-full h-[300px] md:h-[400px] rounded-[24px] lg:h-[600px] md:rounded-[24px] lg:rounded-r-[50px] lg:rounded-l-none" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default SectionQuotes;
