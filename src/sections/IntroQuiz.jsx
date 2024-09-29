const IntroQuiz = () => {
  return (
    <section className="w-full px-4 md:px-10 py-4 my-44">
      <div className="flex flex-col justify-center">
        <h2 className="text-center text-4xl font-vidaloka md:text-6xl md:leading-10 lg:text-8xl lg:leading-10">
          Gimana, <br />
          <span className="text-xl md:text-2xl lg:text-3xl">Udah siap tes pengetahuanmu tentang batik?</span>
        </h2>

        <div className="flex justify-center mt-5">
          <button className="bg-[#e4666c] lg:text-xl md:text-lg text-white px-5 py-2 rounded-xl shadow-lg">Mulai Kuis</button>
        </div>
      </div>
    </section>
  );
};

export default IntroQuiz;
