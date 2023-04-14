import React from 'react'

function QuestionPage({question, handleAnswer}: any) {
    const {title, answerOptions, id, background, color} = question
  return (
    <div className="flex flex-col w-full justify-between px-3 my-3 lg:flex-row">
              <div className="questions w-full lg:w-[50%] md:text-center">
                <h1 className="text-white my-2">
                  <span className="text-3xl">
                    {" "}
                    Question {id + 1}/
                  </span>
                  4
                </h1>
                <p className="text-white text-2xl my-3">
                  {title}
                </p>
              </div>
                <div className="options flex flex-col justify-center items-start w-full lg:w-[50%]">
                <button
                    style={{backgroundColor: background[0], color: color[0]}}
                      className={`text-white border border-gray-400 focus:border-green-500 w-full text-left my-2 rounded-xl p-2 hover:bg-gray-600`}
                      onClick={()=> handleAnswer(id, 0)}
                    >
                      {answerOptions[0]}
                    </button>
                <button
                    style={{backgroundColor: background[1], color: color[1]}}
                      className={`text-white border border-gray-400 focus:border-green-500 w-full text-left my-2 rounded-xl p-2 hover:bg-gray-600`}
                      onClick={()=> handleAnswer(id, 1)}
                    >
                      {answerOptions[1]}
                    </button>
                <button
                    style={{backgroundColor: background[2], color: color[2]}}
                      className={`text-white border border-gray-400 focus:border-green-500 w-full text-left my-2 rounded-xl p-2 hover:bg-gray-600`}
                      onClick={()=> handleAnswer(id, 2)}
                    >
                      {answerOptions[2]}
                    </button>
                <button
                    style={{backgroundColor: background[3], color: color[3]}}
                      className={`text-white border border-gray-400 focus:border-green-500 w-full text-left my-2 rounded-xl p-2 hover:bg-gray-600`}
                      onClick={()=> handleAnswer(id, 3)}
                    >
                      {answerOptions[3]}
                    </button>
                </div>
            </div>
  )
}

export default QuestionPage
