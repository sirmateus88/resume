import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chip from "material-ui/Chip";
import { blue300, lightGreen400 } from "material-ui/styles/colors";
import PersonalInfoAndSkills from './SubComponents/PersonalInfoAndSkills';
import ExperienceAndEducation from './SubComponents/ExperienceAndEducation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Matthew Appleby</h1>
          <h3 className="App-subheader">
            Software Engineer and Product Manager
          </h3>
        </header>
        <div className="ResumeBody">
          <ExperienceAndEducation />
          <PersonalInfoAndSkills />
        </div>
      </div>
    );
  }
}

export default App;
