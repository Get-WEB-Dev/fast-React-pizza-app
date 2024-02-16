import React from "react";
import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="upper">
        <Avater />
        <Name />
      </div>
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avater() {
  return (
    <div className="avater">
      <img src="logo192.png" alt="react picture" />
    </div>
  );
}

function Name() {
  return (
    <div className="identity">
      <h1>Getaneh wendwesen</h1>
      <p>Web Developer</p>
    </div>
  );
}

function Intro() {
  return (
    <div className="intro">
      <p>
        This template provides a minimal setup to get React working in Vite with
        HMR and some ESLint rules.This template provides a minimal setup to get
        React working in Vite with HMR and some ESLint rules.This template
        provides a minimal setup to get React working in Vite with HMR and some
        ESLint rules.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skills">
      <Skill name="HTML+CSS 👍" className="s1" />
      <Skill name="JavaScript ☝" className="s2" />
      <Skill name="Web Design 🤛" className="s1" />
      <Skill name="Git and Github 👌" className="s1" />
      <Skill name="React 💪" className="s1" />
      <Skill name="Svelte 💪" className="s1" />
    </div>
  );
}

function Skill(props) {
  return <h2>{props.name}</h2>;
}

export default App;
