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
    </div>
  );
};

export default Projects;
