import "./Result.css";
import quizData from "../data/quizzData";

export function Result({ score }) {
  const resultsMessage =
    score >= 5 ? `Fabulous!` : `Versuchen Sie es noch einmal!`;

  return (
    <>
      <h3>Sie haben das Quiz beendet ✅</h3>

      <div className="score-container">
        Korrekte Antworten: {score} von {quizData.length}
      </div>

      {resultsMessage === "Fabulous!" ? (
        <img src="/powerpuffHappy.jpg" alt="happy Powerpuff girls" />
      ) : (
        <img src="/powerpuffAngry.png" alt="angry Powerpuff girls" />
      )}
      <span>{resultsMessage}</span>
    </>
  );
}

export default Result;
