// About.tsx

const About = () => {
  return (
    <div className="about-container">
      <h1>Get to know me more</h1>
      <div className="pic-intro">
        The person below me is trying very hard to act cool for the camera
      </div>
      <div className="profile-section">
        <div className="picture">
          <img src="./Pictureofme.JPG" alt="William's Profile" />
        </div>
        <div className="profile-text">
          <p>
            I'm someone whos passionate about many things, but recently the
            development of AI has caught my attention so what better way to
            fully capture how scary AI is than to spend 33 dollars a month to
            buy a personal tutor who's available 24/7 except if you text them
            more than 50 messages in 3 hours, they'll stop replying to you.
          </p>
        </div>
      </div>
      <div className="More-waffle">
        Always hit me up if you're missing a person for a game of poker.
      </div>
      <div className="More-waffle">
        Now if you've read this far, you may as well hire me at this point :
        {")"}
      </div>
      <div className="More-waffle">
        Thats enough waffling from me, how about you take a look at my projects
        and try to win some fake 💰money💰
      </div>
    </div>
  );
};

export default About;
