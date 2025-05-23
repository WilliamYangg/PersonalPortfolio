import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const extraCurricular = [
  "Vice President Operations at UNSW Digital Society 💻",
  "Marketing Director🎨 at UNSW Development Society",
  "Media Director🤖 at UNSW Digital Society",
  "Peer mentoring at Computer science💻 Society✨",
  "Marketing Subcommittee at ♛UNSW Chess Club♛",
];

const Home = () => {
  const [currentExtraCurricularIndex, setCurrentExtraCurricularIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out
  
      // After fade-out completes (0.5s), change text and fade in
      setTimeout(() => {
        setCurrentExtraCurricularIndex(prev => (prev + 1) % extraCurricular.length);
        setFade(true); // Fade back in
      }, 500);
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <div className="main-container">
        <h1>Discover William's Haven!</h1>
        <div className="intro">
          Hello! My name is William, and I'm currently studying CS at UNSW,
          Australia. I'm 20 years old and heavily passionate about programming and
          the online world and I love building stuff!
        </div>
        <div className="Extracurricular">
          Some Extracurriculars I'm involved in at UNSW include{" "}
          <span className={`hobby-highlight fade-text ${fade ? '' : 'hidden'}`}>
            {extraCurricular[currentExtraCurricularIndex]}
          </span>
        </div>


        <div className="picture-box">
          <img src="/Pictureofme.JPG" alt="William's Profile" className="profile-pic" />
          {/* Left side words */}
          <div className="floating-word word-left-1">Poker</div>
          <div className="floating-word word-left-2">Board Games</div>
          <div className="floating-word word-left-3">Python</div>
          <div className="floating-word word-left-4">UNSW</div>
          <div className="floating-word word-left-5">Gym</div>

          {/* Right side words */}
          <div className="floating-word word-right-1">Anime</div>
          <div className="floating-word word-right-2">Stocks</div>
          <div className="floating-word word-right-3">Brawl Stars</div>
          <div className="floating-word word-right-4">LOL</div>
          <div className="floating-word word-right-5">Malatang</div>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/william-yang-a28092250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "black" }} />
          </a>
          <a
            href="https://github.com/WilliamYangg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "black" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
