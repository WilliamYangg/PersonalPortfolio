// About.tsx

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-intro">Take a look at my projects below!</div>
      <div className="project-container">
        <div className="project-picture">
          <img src="./Placeholder.png" alt="William's Profile" />
        </div>
        <div className="project-title">RISKIT - Summer 2023</div>
        <div className="project-language">React, Typescript, CSS, Vite</div>
        <div className="project-description">
          RISKIT is a gambling website which contains many minigames played with
          fake money, the purpose of this website was to challenge players to
          see if they could make a profit against the house when the odds are
          against them.
        </div>
      </div>
      <div className="project-container">
        <div className="project-picture">
          <img src="./Placeholder.png" alt="William's Profile" />
        </div>
        <div className="project-title">My Portfolio - Summer 2023</div>
        <div className="project-language">
          Typescript, React, Vite, CSS, Web3Forms
        </div>
        <div className="project-description">Just my portfolio lol</div>
      </div>
      <div className="project-container">
        <div className="project-picture">
          <img src="./Placeholder.png" alt="William's Profile" />
        </div>
        <div className="project-title">UNSW Course Review - Aug 2023</div>
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
