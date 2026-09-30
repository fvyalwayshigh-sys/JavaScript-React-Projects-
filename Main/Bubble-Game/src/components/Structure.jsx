import React from 'react';
import { useState } from 'react';

const Structure = () => {
  const [HitNum, setHitNum] = useState(Math.floor(Math.random() * 105));
  const [gameOver, setGameOver] = useState(false);
  const [score, setscore] = useState(0);

  function resetGame() {
    setHitNum(Math.floor(Math.random() * 105));
    setGameOver(false);
    setscore(0);
  }

  function bubbleCreation() {
    return Array.from({ length: 105 }).map((_, index) => {
      const rndmBubble = Math.floor(Math.random() * 105);

      return (
        <div
          key={index}
          onClick={e => {
            const selectedNum = Number(e.target.innerText);
            console.log(HitNum);

            if (selectedNum === HitNum) {
              setGameOver(true);
            } else {
              setscore(prev => prev + 1);
            }
          }}
          className="bubble cursor-pointer w-15 h-15 p-5 rounded-full bg-[#8fbcbb] shadow-md transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-xl active:scale-95 select-none">
          {rndmBubble}
        </div>
      );
    });
  }

  return (
    <>
      {gameOver ? (
        <>
          <div className="upper flex items-center justify-center">
            <nav className="upper flex items-center justify-center mt-10 rounded-2xl bg-[#4c566a] h-20 w-7xl">
              <h2 className="text-[#e5e9f0] uppercase font-bold">
                Final Score: <span>{score}</span>
              </h2>
            </nav>
          </div>
          <div className="upper flex items-center justify-center">
            <div className="mx-auto flex flex-col items-center justify-center p-10 rounded-2xl bg-[#d8dee9] h-150 w-7xl">
              <h1 className="text-5xl font-bold text-red-600">GAME OVER</h1>
            </div>
          </div>
          <div className="flex items-center justify-center mt-20 ">
            <button
              onClick={resetGame}
              className="inline bg-[#81a1c1] py-5 px-6 rounded-full shadow-md transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-xl active:scale-95 font-bold text-1xl">
              PLAY AGAIN!
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="upper flex items-center justify-center">
            <nav className="upper flex items-center justify-center mt-10 rounded-2xl bg-[#4c566a] h-20 w-7xl">
              <h2 className="text-[#e5e9f0] uppercase font-bold">
                Score: <span>{score}</span>
              </h2>
            </nav>
          </div>

          <div className="mx-auto flex flex-row p-10 rounded-2xl bg-[#d8dee9] h-150 w-7xl flex-wrap overflow-hidden gap-5">
            {bubbleCreation()}
          </div>
        </>
      )}
    </>
  );
};

export default Structure;
