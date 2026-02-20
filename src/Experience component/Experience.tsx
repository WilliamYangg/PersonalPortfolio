// About.tsx
import "./Experience.css";

const Experience = () => {
  return (
    <div>
    <h1>Experience</h1>
      <div className="project-container">
        <a href="https://www.commbank.com.au/" rel="noopener noreferrer">
          <div className="project-picture">
            <img src="./commbanklogo.jpg" alt="CommBank" />
          </div>
          <div className="project-title">Technology Engineering Intern</div>
        </a>
        <div className="project-description">
          Built features for the Organisation Repository platform used by risk executives to assess global 
          credit exposure and improve lending decisions. Delivered the Light-Weight Credit Risk experience 
          in React & TypeScript, reducing credit report review time by up to 70%.
        </div>
      </div>
      <div className="project-container">
        <a href="https://dappa.fashion/" rel="noopener noreferrer">
          <div className="project-picture">
            <img src="./dappabanner.webp" alt="DAPPA Screenshot" />
          </div>
          <div className="project-title">DAPPA - Backend Developer Intern</div>
        </a>
        <div className="project-description">
        DAPPA Clip is an AI-powered Chrome extension that lets users try on outfits 
        virtually by pasting clothing image links. It generates realistic images of the user wearing 
        the outfit, allowing them to swipe through looks, save favorites, and explore their 
        style more easily.
        </div>
      </div>
      <div className="project-container">
        <a href="https://www.unsw.edu.au" rel="noopener noreferrer">
          <div className="project-picture">
            <img src="./unswbanner.png" alt="UNSW Banner Screenshot" />
          </div>
          <div className="project-title">UNSW - Casual Academic</div>
        </a>
        <div className="project-description">
           Tutoring COMP2521 (Data Structures and Algorithms). Preparing tutorial slides,
           marking assignments, weekly labs and final exams. 
        </div>
      </div>
      <div className="project-container">
        <a href="https://riskit.vercel.app/" rel="noopener noreferrer">
          <div className="project-picture">
            <img src="./Placeholder.png" alt="RISKIT Screenshot" />
          </div>
          <div className="project-title">RISKIT - Backend Developer Intern</div>
        </a>
        <div className="project-description">
          RISKIT is a gambling website which contains many minigames played with
          fake money, the purpose of this website was to challenge players to
          see if they could make a profit against the house when the odds are
          against them.
        </div>
      </div>
      
    </div>
  );
};

export default Experience;
