import React from "react";
import questions from "./Questions";

function ReviewPage({ answer }: any) {

  return (
    <div className="bg-[#252D4A] h-fit w-[45%] p-4 rounded-2xl flex flex-col justify-around items-center shadow-2xl mt-3">
      {answer.length !== 0 ? (
        <>

        <button
        className={`text-white text-xl ${answer[0] ? 'border border-gray-400' : 'bg-transparent text-transparent'} w-full text-left my-2 pl-4 rounded py-4 hover:bg-gray-600`}
        >
          #1 {questions[0].answerOptions[answer[0]]}
        </button>
        <button
          className={`text-white text-xl ${answer[1] ? 'border border-gray-400' : 'bg-transparent text-transparent'} w-full text-left my-2 pl-4 rounded py-4 hover:bg-gray-600`}
          >
          #2 {questions[1].answerOptions[answer[1] ? answer[1] : '']}
        </button>
        <button
          className={`text-white text-xl ${answer[2] ? 'border border-gray-400' : 'bg-transparent text-transparent'} w-full text-left my-2 pl-4 rounded py-4 hover:bg-gray-600`}
          >
         #3 {questions[2].answerOptions[answer[2] ? answer[2] : '']}
        </button>
        <button
          className={`text-white text-xl ${answer[3] ? 'border border-gray-400' : 'bg-transparent text-transparent'} w-full text-left my-2 pl-4 rounded py-4 hover:bg-gray-600`}
        >
         #4 {questions[3].answerOptions[answer[3] ? answer[3] : '']}
        </button>

        </>
      ) : (
        <div className="text-center flex flex-col justify-start items-center">
          <h1 className="text-white text-3xl">Reviewed Answer</h1>
        </div>
      )}
    </div>
  );
}

export default ReviewPage;
