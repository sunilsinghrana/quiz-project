import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-[#252D4A] h-[35%] w-[40%] p-4 rounded-2xl flex flex-col justify-around items-center shadow-2xl">
        <div className="flex flex-col text-center justify-around items-center">
          <h1 className="text-[#C9D1D9] text-2xl md:text-4xl my-4">
            Welcome to the Challenge!
          </h1>
          <h2 className="text-xl md:text-2xl text-white my-3">
            You will be presented with 4 MCQs
          </h2>
          <h2 className="text-white md:text-xl my-2">Can you score 100%?</h2>
        </div>
        <div className="my-4">
          <Link href="/quizPage" className="text-white border border-gray-400 p-2">Start Quiz</Link>
        </div>
      </div>
    </div>
  );
}
