import "./App.css";
import { Quizz } from "./components/Quizz";
import { Homepage } from "./components/Homepage";
import { Advertising } from "./components/Advertising";
import { Result } from "./components/Result";
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Homepage");
  const [showResult, setShowResult] = useState(false);

  let componentToDisplay;
  let buttontext = "Quizz starten";

  const [score, setScore] = useState(0);

  function handleCorrectAnswer() {
    setScore(score + 1);
  }

  const onQuizzFinish = () => {
    setShowResult(true); // quizz is finished, showResult = true
  };

  function navigator() {
    if (currentPage === "Homepage") {
      setCurrentPage("Quizz");
    } else if (currentPage === "Quizz" && showResult) {
      setCurrentPage("Advertising");
    } else if (currentPage === "Advertising") {
      setCurrentPage("Result");
    } else if (currentPage === "Result") {
      setCurrentPage("Homepage");
      setShowResult(false);
      setScore(0);
    }
  }

  if (currentPage === "Homepage") {
    componentToDisplay = <Homepage />;
    buttontext = "Quizz starten";
  } else if (currentPage === "Quizz") {
    componentToDisplay = (
      <Quizz
        onCorrectAnswer={handleCorrectAnswer}
        onQuizzFinish={onQuizzFinish}
      />
    );
    buttontext = "Ergebnis anzeigen";
  } else if (currentPage === "Advertising") {
    componentToDisplay = <Advertising />;
    buttontext = "Ergebnis anzeigen";
  } else if (currentPage === "Result") {
    componentToDisplay = <Result score={score} />;
    buttontext = "Noch einmal spielen";
  }

  return (
    <>
      <div className="container">
        <h1>👾 QuizGame</h1>

        <div className="card">{componentToDisplay}</div>

        {currentPage !== "Quizz" || showResult ? (
          <button
            className="button-navigation"
            onClick={navigator}
            // disabled={currentPage === "Quizz" && !showResult}
          >
            {buttontext}
          </button>
        ) : undefined}
      </div>

      <footer>
        <span>Made with 🩷 by Gladys, Natalie, Maria</span>
      </footer>
    </>
  );
};
export default App;
