import React, { useState, useEffect } from 'react';
import kuisData from '../components/data/KuisData';
import Navbar from '../components/Navbar';
import badge from '../assets/Tier 5.svg';
import done from '../assets/done.svg';

function Kuis() {
  const [answers, setAnswers] = useState(Array(kuisData.length).fill(null));
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const totalPoints = kuisData.reduce((acc, question) => acc + question.points, 0);

  const handleAnswerClick = (selectedAnswer, questionIndex) => {
    const correctAnswer = kuisData[questionIndex].correctAnswer;
    const currentAnswer = answers[questionIndex];

    let updatedAnswers = [...answers];

    // Jika jawaban yang sama diklik dua kali, hapus jawaban
    if (currentAnswer === selectedAnswer) {
      updatedAnswers[questionIndex] = null;
      setAnswers(updatedAnswers);

      // Kurangi skor jika jawaban benar sebelumnya
      if (selectedAnswer === correctAnswer) {
        setScore(score - kuisData[questionIndex].points);
      }
    } else {
      // Update jawaban pengguna
      updatedAnswers[questionIndex] = selectedAnswer;
      setAnswers(updatedAnswers);

      // Update skor hanya jika jawaban benar
      if (selectedAnswer === correctAnswer && currentAnswer !== correctAnswer) {
        setScore(score + kuisData[questionIndex].points);
      } else if (currentAnswer === correctAnswer) {
        // Jika jawaban lama benar, kurangi skor karena diganti dengan jawaban yang salah
        setScore(score - kuisData[questionIndex].points);
      }
    }
  };

  const handleSubmit = () => {
    // Pastikan semua pertanyaan telah dijawab sebelum menyelesaikan kuis
    const allAnswered = answers.every((answer) => answer !== null);
    if (allAnswered) {
      setIsQuizCompleted(true);
    } else {
      alert('Silakan jawab semua pertanyaan sebelum menyelesaikan kuis.');
    }
  };

  useEffect(() => {
    if (isQuizCompleted) {
      const progressBar = document.querySelector('.progress-bar-inner');
      progressBar.style.width = `${(score / totalPoints) * 100}%`;
    }
  }, [isQuizCompleted, score, totalPoints]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10 p-4">
        {!isQuizCompleted ? (
          <div className="w-full max-w-4xl mx-auto shadow-lg rounded-lg p-4 flex flex-col gap-10">
            {kuisData.map((questionData, questionIndex) => (
              <div key={questionIndex} className="w-full max-w-4xl md:max-w-[700px] lg:max-w-[1000px] shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-between mx-auto">
                {/* Pertanyaan */}
                <div className="w-full md:w-1/2 md:pr-4 mb-4 md:mb-0 h-full flex flex-col justify-center">
                  <div className="flex justify-between mb-4 lg:text-xl">
                    <span>
                      0{questionIndex + 1}/{kuisData.length}
                    </span>
                    <span>Pertanyaan {questionIndex + 1}</span>
                    <span>{questionData.points} Poin</span>
                  </div>
                  <div className="w-full border-[0.5px] border-black/50 mb-2"></div>

                  <h2 className="font-vidaloka tracking-wider text-2xl lg:text-3xl font-bold mb-4">{questionData.question}</h2>
                </div>

                {/* Opsi jawaban */}
                <div className="w-full md:w-1/2 flex flex-col h-full justify-center">
                  <div className="grid grid-cols-1 gap-4 w-full">
                    {questionData.options.map((option, index) => (
                      <button
                        key={index}
                        className={`font-vidaloka border rounded-2xl text-lg lg:text-2xl py-2 px-4 w-full bg-[#f8a071]/30 hover:bg-orange-200 ${answers[questionIndex] === option ? 'bg-green-300' : ''}`}
                        onClick={() => handleAnswerClick(option, questionIndex)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Tombol submit */}
            <div className="w-full flex justify-center">
              <button
                className={`bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 ${answers.includes(null) ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleSubmit}
                disabled={answers.includes(null)} // Disable button jika ada soal yang belum dijawab
              >
                Selesai
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-5 md:text-4xl lg:text-7xl">Kerja bagus!</h2>
              <p className="text-xl mb-3 md:text-2xl lg:text-3xl">Kamu mendapatkan {score} Poin</p>
              <div className="flex justify-center relative mb-5 lg:mb-0">
                <div className="w-44 h-44 md:w-56 md:h-56 lg:w-80 lg:h-80 rounded-full bg-orange-400 border-white border-[10px] flex justify-center items-center">
                  <img src={done} className="w-24 h-24 md:w-28 md:h-28 lg:w-44 lg:h-44" />
                </div>
              </div>
              {/* Progress bar */}
              <div className="flex flex-col items-center">
                <div className="flex">
                  <div className="flex basis-3/4 items-end">
                    <div>
                      <p className="font-semibold text-end text-lg lg:text-2xl mb-2">Batik Pemula</p>

                      <div className="flex">
                        <p className="mr-2 text-lg lg:text-2xl">
                          {score}/{totalPoints}
                        </p>
                        <div className="relative w-[200px] md:w-[500px] lg:w-[900px] bg-gray-300 rounded-full h-6">
                          <div className="absolute top-0 left-0 h-6 bg-green-500 rounded-full progress-bar-inner transition-all duration-500" style={{ width: 0 }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex basis-1/4 justify-center">
                    <img src={badge} alt="Batik Pemula" className="w-14 h-14 lg:w-24 lg:h-24 ml-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Kuis;
