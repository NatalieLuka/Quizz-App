import quizData from "../data/quizzData";
import "./ProgressBar.css";
// import { clsx } from "clsx";

export const ProgressBar = () => {
  const currentQuestionIndex = 0;
  let currentQuestion = quizData[currentQuestionIndex];

  const loadingProgress = () => {
    let filled = [];
    for (let i = 0; i < quizData.length; i++)
      filled.push(<div className={("loading", i <= currentQuestion)}></div>);
    return filled;
  };
  return (
    <>
      <h2>I am the progressBar on progressbar.jsx</h2>
      <div className="progress-container">
        <div className="progress-element">
          {currentQuestionIndex + 1} of {quizData.length}{" "}
          <div className="loading-container">{loadingProgress()}</div>
        </div>
      </div>
    </>
  );
};
export default ProgressBar;
