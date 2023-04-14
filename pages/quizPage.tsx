import React, { useEffect, useState } from "react";
import TotalScore from "@/components/TotalScore";
import questions from "@/components/Questions";
import QuestionPage from "@/components/QuestionPage";
import ReviewPage from "@/components/ReviewPage";

function QuizPage() {
  const [answer, setAnswer] = useState<Array<number>>([]);
  const [number, setNumber] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);
  const [isSelect, setIsSelect] = useState(false);

  const handleAnswer = (id: number, ans: number) => {
    answer[id] = ans    
    
    function Reset() {
      let arr1 = questions[id].background;
      arr1 = ["#252D4A", "#252D4A", "#252D4A", "#252D4A"];
      let arr2 = questions[id].color;
      arr2 = ["white", "white", "white", "white"];
      questions[id].background = arr1;
      questions[id].color = arr2;
    }
    Reset();
    
    questions[id].background[ans] = "#9ca3af";
    questions[id].color[ans] = "black";
    setIsSelect(true);
  };

  // session based timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  // run for next question
  const handleNextQuestion = () => {
    if (number === 4) return;
   if(isSelect){
     setNumber(number + 1);
     setIsSelect(false);
    }
  };
  // run for previous question
  const handlePreviousQuestion = () => {
    if(number === 0) return;
    setNumber(number - 1);
    setIsSelect(true);
  };

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
      {/* showing score */}
      {number === 4 || (minutes === 0 && seconds < 2)  ? (
          <TotalScore answer={answer} setIsSelect={setIsSelect}/>
      ) : (
        <>
          {/* showing questions */}
          <div className="bg-[#252D4A] h-fit w-[45%] p-4 rounded-2xl flex flex-col items-start shadow-2xl mb-3">
            <div className="time mb-3 px-3">
              <h1 className="text-white">
                Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}{" "}
              </h1>{" "}
            </div>
            <QuestionPage
              question={questions[number]}
              handleAnswer={handleAnswer}
            />
            <div className="w-full flex justify-center items-center py-5">
              <button
                onClick={() => handlePreviousQuestion()}
                className={` ${
                  number === 0
                    ? 
                    "text-gray-500 border border-gray-500 cursor-default"
                    : 
                    "border border-gray-400 text-white"
                } p-2 mr-3 rounded-md px-5`}
              >
                Back
              </button>
              <button
                onClick={() => handleNextQuestion()}
                className={`${
                  isSelect
                    ? 
                    "border border-gray-400 text-white"
                    :
                     "text-gray-500 border border-gray-500 cursor-default"
                } p-2 ml-3 rounded-md px-5`}
              >
                Next
              </button>
            </div>
          </div>

          {/* for review answers */}
          <ReviewPage answer={answer} number={number} />
        </>
      )}
    </div>
  );
}

export default QuizPage;
