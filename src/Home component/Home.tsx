// Home.tsx
import { useState } from "react";

const hobbies = [
  "go to the gym🏋️",
  "watch mr beast on youtube📺",
  "play 🔫counter strike🔫",
  "go outside for 🚶‍♂️walks🚶‍♂️ along my neighbourhood",
  "go all in when i have 7, 2 in 🃏poker🃏",
  "watch my girlfriend 🧶crochet🧶 something cute",
  "scroll on instagram reels for an hour before 💤sleeping💤",
];

const extraCurricular = [
  "Director of Media📹 at Digital Society✨",
  "Peer mentoring at Computer science💻 Society✨",
  "Marketing Subcommittee at ♛UNSW Chess Club♛",
];

const Home = () => {
  const [currentHobbyIndex, setCurrentHobbyIndex] = useState(0);
  const [currentExtraCurricularIndex, setCurrentExtraCurricularIndex] =
    useState(0);

  const changeHobby = () => {
    const nextIndex = (currentHobbyIndex + 1) % hobbies.length;
    setCurrentHobbyIndex(nextIndex);
  };

  const changeExtraCurricular = () => {
    const nextIndex =
      (currentExtraCurricularIndex + 1) % extraCurricular.length;
    setCurrentExtraCurricularIndex(nextIndex);
  };

  return (
    <div>
      <h1>Discover William's Haven!</h1>
      <div className="intro">
        Hello! My name is William, and I'm currently studying CS at UNSW,
        Australia. I'm 18 years old and heavily passionate about programming and
        the online world and I love building stuff!
      </div>
      <div className="Hobbies">
        When I have free time I like to{" "}
        <span onClick={changeHobby} className="hobby-highlight">
          {hobbies[currentHobbyIndex]}
        </span>
      </div>
      <div className="Extracurricular">
        Some Extracurriculars I'm involved in at UNSW include{" "}
        <span onClick={changeExtraCurricular} className="hobby-highlight">
          {extraCurricular[currentExtraCurricularIndex]}
        </span>
      </div>
      <div className="more-facts">
        Here are some fun facts about me if you haven't gotten bored yet
        <li>I completed grade 8 piano at 13</li>
        <li>My favourite anime is Demon Slayer</li>
        <li>
          I played french horn in one of auckland's best secondary school
          orchestras and best concert band (Both won Gold for 3 years
          consecutively)
        </li>
        <li>I can solve the rubix cube in 2 minutes!</li>
        <li>I used to be part of a competitive rifle shooting club</li>
        <li>I sang in Auckland's best boys choir for 4 years</li>
        <li>I am currently hardstuck champ1 in Rocket league</li>
        <li>I aspire to hit gold nova in counter strike one day</li>
        <li>The concept of gambling fascinates me hence my proudest project</li>
      </div>
    </div>
  );
};

export default Home;
