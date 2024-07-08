import "./Homepage.css";
import { useState } from "react";

export function Homepage() {
  const [username, setUsername] = useState("Gast");
  const [message, setMessage] = useState("Gast");

  const handleSubmit = (event) => {
    event.preventDefault();
    // check if input is not empty
    if (username.trim() !== "") {
      setMessage(username);
    }
    // `${}` - can use this for stylepoints
    // 👇️ Clear all input values in the form
    setUsername(" ");
  };

  return (
    <>
      <div className="homepagediv">
        <span>
          <h3>Willkommen, {message}, in QuizGame von Powerpuffs!</h3>
        </span>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">
            Hey, wie ist Ihr Name: <br />{" "}
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) =>
              setUsername(
                event.target.value
                  .replace(/[^a-z]/gi, "")
                  .charAt(0)
                  .toUpperCase() + event.target.value.slice(1).toLowerCase()
                // controlled input settings
              )
            }
          />
          <button type="submit">Submit</button>

          <span>
            <br />
            (wir geben Ihre Daten an niemanden weiter)
          </span>
        </form>
        <div className="rules-container">
          <p> 👇🏻 Regeln: </p>
          <ul>
            <li>
              Das Quiz besteht aus 8 Fragen. <br /> Geben Sie allen Antworten.
            </li>
            <li>Es gibt keine zeitliche Begrenzung.</li>
            <li> Kein Google! 🙈</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Homepage;
