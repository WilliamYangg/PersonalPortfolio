import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Journal from "./Journal";
import Contact from "./Contact";
import "./App.css";

const App = () => {
  // State to manage the current active section
  const [activeSection, setActiveSection] = useState("Home");

  // Function to render the active component
  const renderActiveSection = () => {
    switch (activeSection) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Journal":
        return <Journal />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <div className="nav-container">
        {/* Navigation items here */}
        <p
          onClick={() => setActiveSection("Home")}
          style={{ cursor: "pointer" }}
        >
          Home
        </p>
        <p
          onClick={() => setActiveSection("About")}
          style={{ cursor: "pointer" }}
        >
          About
        </p>
        <p
          onClick={() => setActiveSection("Projects")}
          style={{ cursor: "pointer" }}
        >
          Projects
        </p>
        <p
          onClick={() => setActiveSection("Journal")}
          style={{ cursor: "pointer" }}
        >
          Journal
        </p>
        <p
          onClick={() => setActiveSection("Contact")}
          style={{ cursor: "pointer" }}
        >
          Contact
        </p>
      </div>
      <div className="right-container">
        {/* Render the active component */}
        {renderActiveSection()}
      </div>
    </div>
  );
};

export default App;
