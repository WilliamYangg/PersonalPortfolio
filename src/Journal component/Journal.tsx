// About.tsx
import "./Journal.css";

const Journal = () => {
  return (
    <div>
      <h1>Journal</h1>
      <div className="Life-summary">My whole University life is below</div>
      <div className="years">2023</div>
      <div className="months">Dec</div>
      <div className="listing">
        <li>Started a new project called RISKIT</li>
        <li>Binged Jujutsu Kaisen</li>
        <li>Contracted to develop a website</li>
      </div>
      <div className="months">Sep-Nov</div>
      <div className="listing">
        <li>Sweated Data Structures and Algorithms class</li>
        <li>Became a Director for Digital Society at UNSW</li>
        <li>Hit silver elite in Counter Strike</li>
      </div>
      <div className="months">May-Aug</div>
      <div className="listing">
        <li>Started learning programming (C)</li>
        <li>Ate lots of malatang</li>
        <li>Got a sick perm</li>
        <li>Found my passion for coding</li>
      </div>
      <div className="months">Feb-April</div>
      <div className="listing">
        <li>Drowned in math</li>
        <li>Explored Sydney's beaches</li>
        <li>Met so many friendly people</li>
        <li>Joined the Chess Club's Marketing Subcom</li>
        <li>Watched Demon Slayer</li>
      </div>
      <div className="months">January</div>
      <div className="listing">
        <li>Got accepted to UNSW</li>
        <li>Worked full time in Queenstown</li>
        <li>Enjoyed life</li>
        <li>Took the Harvard's CS50 course</li>
      </div>
    </div>
  );
};

export default Journal;
