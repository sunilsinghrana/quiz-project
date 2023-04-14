import React from "react";
import Link from "next/link";
import questions from "./Questions";

const TotalScore = ({ answer }: any) => {

    function giveResult():any {
      let cnt = 0;
      for (let i = 0; i < 4; i++) {
        if (answer[i] === questions[i].ans) cnt++;
      }
      return cnt;
    }

    function Reset() {
      for (let i = 0; i < questions.length; i++) {
        let arr1 = questions[i].background;
        arr1 = ["#252D4A", "#252D4A", "#252D4A", "#252D4A"];
        let arr2 = questions[i].color;
        arr2 = ["white", "white", "white", "white"];
        questions[i].background = arr1;
        questions[i].color = arr2;
      }
    }

  return (
    <div className="bg-[#252D4A] min-h-[50%] h-fit w-[50%] p-4 rounded-2xl flex flex-col justify-start items-start shadow-2xl mb-3">
      <p className="text-white text-3xl my-3 text-center w-full">
        You scored {giveResult()} out of 4
      </p>

      <div className="showing-result flex flex-col justify-start items-start">
        <div>
          <p className="text-white text-xl">Q1. {questions[0].title}</p>
          <p className={`${answer[0] === questions[0].ans ? 'text-green-600' : 'text-red-600'} text-lg ml-8`}>{answer[0] === questions[0].ans ? questions[0].answerOptions[answer[0]] : (<p className="text-red-600 text-lg">Not seleted any Answer</p>)}</p>
        </div>
        <div>
          <p className="text-white text-xl">Q2. {questions[0].title}</p>
          <p className={`${answer[1] === questions[1].ans ? 'text-green-600' : 'text-red-600'} text-lg ml-8`}>{answer[1] === questions[1].ans ? questions[1].answerOptions[answer[1]] : (<p className="text-red-600 text-lg">Not seleted any Answer</p>)}</p>
        </div>
        <div>
          <p className="text-white text-xl">Q3. {questions[0].title}</p>
          <p className={`${answer[2] === questions[2].ans ? 'text-green-600' : 'text-red-600'} text-lg ml-8`}>{answer[2] === questions[2].ans ? questions[2].answerOptions[answer[2]] : (<p className="text-red-600 text-lg">Not seleted any Answer</p>)}</p>
        </div>
        <div>
          <p className="text-white text-xl">Q4. {questions[0].title}</p>
          <p className={`${answer[3] === questions[3].ans ? 'text-green-600' : 'text-red-600'} text-lg ml-8`}>{answer[3] === questions[3].ans ? questions[3].answerOptions[answer[3]] : (<p className="text-red-600 text-lg">Not seleted any Answer</p>)}</p>
        </div>
      </div>
      <div className="w-full text-center my-16">
      <Link onClick={()=>Reset()} className="text-white border border-gray-400 p-2 my-3 text-center" href="/">
        Start again
      </Link>
      </div>
    </div>
  );
}

export default TotalScore;
