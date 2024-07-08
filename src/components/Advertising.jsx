import "./Advertising.css";
export function Advertising() {
  return (
    <>
      <h3 className="title">Letzter Schritt vor Ihrem Ergebnis</h3>
      <p>
        Klicken Sie auf das Taktsoft Logo, um sich für das IT-Bootcamp
        anzumelden!
      </p>

      <div className="imageLink">
        <a
          href="https://talents.taktsoft.com/bewerbung?bootcamp=0"
          target="_blank"
        >
          <img src="images.png" />
        </a>
      </div>
    </>
  );
}
export default Advertising;
