import { useState } from "react";
import quizData from "../data/quizzData";
import "./Quizz.css";
// import { clsx } from "clsx";

export function Quizz({ onCorrectAnswer, onQuizzFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  let currentQuestion = quizData[currentQuestionIndex];

  const [selectedAnswer, setSelectedAnswer] = useState(-1); //state to compare selected answer to correct one (color buttons after)
  const isAnswered = selectedAnswer > -1; //boolean: if > 1, then "true", else "false"

  const handleNextClick = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // clear the state for disable and color for next question
      setSelectedAnswer(-1);
    } else {
      onQuizzFinish(); // event function in main that opens advertising screen also need disable btn
    }
    return currentQuestion;
  };

  const handleAnswerClick = (index, correctAnswerIndex) => {
    setSelectedAnswer(index); // we put in this variable option that was clicked
    if (index === correctAnswerIndex) {
      onCorrectAnswer();
    }
  };

  // we compare correct answer to the option that was clicked and put it in variable isCorrect
  // result will be eather TRUE if they equal, or FALSE if the didnt match
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  return (
    <>
      <div className="progressBar">
        {currentQuestion.id} {"/"} {quizData.length}
        <progress max={quizData.length} value={currentQuestionIndex + 1} />
      </div>

      <h3 className="question">{currentQuestion.question}</h3>
      <div className="btn-container">
        {currentQuestion.options.map((option, index) => {
          return (
            <button
              key={index}
              onClick={() =>
                handleAnswerClick(index, currentQuestion.correctAnswer)
              }
              disabled={isAnswered}
              // to decide what color would be in the button, we check to decide what classname we will give to it
              // Check for is answer is given at all(true or false), is this button
              className={clsx("option-btn", {
                correct: isAnswered && index === currentQuestion.correctAnswer,
                incorrect: !isCorrect && index === selectedAnswer,
              })}
            >
              {option}
            </button>
          );
        })}
      </div>
      <button
        className="next-btn"
        disabled={!isAnswered}
        onClick={handleNextClick}
      >
        {currentQuestion.id === quizData.length ? "Finish" : "Nächste Frage"}
      </button>
    </>
  );
}

export default Quizz;

// TO-DO:
// - CorrectAnswer logic and change color of the buttons. - semi done, team approval and need to merge it into Quiz
// - Result variable that we send to other Component - Monday task = count a result and send it to result page
// - Send a username from App.jsx to Result.jsx
// - work on disabling buttons - done

// progress bar variant 2
// let filled = [1];
// filled = [...filled, quizData.length + 1];
// {/* <h2>I am the progressBar</h2> */}
//     {/* <div className="progress-container">
//       <div className="progress-element">
//         {" "}
//         <div className="loading" style={{ width: 50 }}>
//           {currentQuestionIndex} {quizData.length}
//           progress:{progress} Text:
//           {currentQuestionIndex + 1} of {quizData.length}

//         </div>
//       </div>
//     </div> */}

// Here will be the Progressbar
// const ProgressBar = () => {
//   const loadingProgress = () => {
//   let filled = [];
//   for (let i = 0; i < quizData.length; i++) filled.push();
//   return filled;
// }
// ;

// return (

// let progress = 0;
// progress = ((currentQuestionIndex + 1) * 100) / quizData.length;
// let progressWidth = "width:" + { progress };
