// About.tsx
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-intro">Take a look at my projects below!</div>
      <div className="project-container">
        <a href="https://github.com/jacksonwanggg/aceverse" rel="noopener noreferrer">
          <div className="project-picture">
            <img src="./aceversebanner.png" alt="Aceverse Screenshot" />
          </div>
          <div className="project-title">AceVerse - Backend Developer</div>
        </a>
        <div className="project-description">
          (Coming Soon!) - AceVerse is a social media platform aimed at gamers
          to share their gaming acheivements!
        </div>
      </div>
      <div className="project-container">
        <a href="https://williamyang.netlify.app/" rel="noopener noreferrer">
          <div className="project-picture">
            <img src="./PersonalPortfolio.png" alt="Personal Portfolio" />
          </div>
          <div className="project-title">My Portfolio - Summer 2023</div>
        </a>
        <div className="project-language">
          Typescript, React, Vite, CSS, Web3Forms
        </div>
        <div className="project-description">Just my portfolio lol</div>
      </div>
      <div className="project-container">
        <a
          href="https://wouldyouratherwilliamyang.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-picture">
            <img src="./Wouldyourather.png" alt="Would you rather screenshot" />
          </div>
          <div className="project-title">Would You Rather - Dec 2023</div>
        </a>
        <div className="project-language">
          Next.js, Firebase (Realtime Database), CSS
        </div>
        <div className="project-description">
          A website which is a would you rather game where users can see how
          their choices compare to other people's choices. (Database got taken down,
          so percentages won't be shown unfortunately)

        </div>
      </div>
      <div className="project-container">
        <a
          href="https://unswcomputersciencecoursereview.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-picture">
            <img src="./CourseReview.png" alt="Course Review Screenshot" />
          </div>
          <div className="project-title">UNSW Course Review - Aug 2023</div>
        </a>
        <div className="project-language">HTML, CSS</div>
        <div className="project-description">
          A project that rates Computer science courses at UNSW, aimed to help
          students prepare and manage their expectations for the courses.
        </div>
      </div>
    </div>
  );
};

export default Projects;
