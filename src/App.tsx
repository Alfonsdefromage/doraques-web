import densetsuLogo from "./assets/Densetsu Gaijin.png";
import doraquesLogo from "./assets/Doraques Logo 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="YouTube">
          <div className="buttons">
            <div className="a7cb24">
              <a href="https://www.youtube.com/@igoigoru" target="_blank">
                <img
                  src={densetsuLogo}
                  className="logo"
                  alt="Densetsu Gaijin logo"
                />
              </a>
              <h2>Lifestyle Japan Channel </h2>
            </div>
            <div className="a7cb24">
              <a href="https://www.youtube.com/@doraques" target="_blank">
                <img
                  src={doraquesLogo}
                  className="logo"
                  alt="Densetsu Gaijin logo"
                />
              </a>
              <h2>Gaming Channel</h2>
            </div>
          </div>
        </div>
        <div className="links">
          <a
            href="https://www.twitter.com/densetsugaijin"
            target="_blank"
            className="external-link"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              size="2xl"
              style={{ color: "#5a6891" }}
            />
          </a>
          <a
            href="https://instagram.com/densetsugaijin/"
            target="_blank"
            className="external-link"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              style={{ color: "#5a6891" }}
            />
          </a>
          <a
            href="https://www.twitch.tv/doraques"
            target="_blank"
            className="external-link"
          >
            <FontAwesomeIcon
              icon={faTwitch}
              size="2xl"
              style={{ color: "#5a6891" }}
            />
          </a>
          <a
            href="https://www.tiktok.com/@densetsugaijin?_t=ZS-8xeXoIv2Xke&_r=1"
            target="_blank"
            className="external-link"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              size="2xl"
              style={{ color: "#5a6891" }}
            />
          </a>
        </div>
        <div className="mail">
          <h2>Anfragen: contact@doraques.de</h2>
        </div>
      </div>
    </>
  );
}

export default App;
