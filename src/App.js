import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Chip from "material-ui/Chip";
import { blue300, lightGreen400 } from "material-ui/styles/colors";

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
          <div className="ExperienceEducation">
            <div className="Projects">
              <h3>Projects</h3>
              <div className="underline" />

              <div className="ProjectItem">
                <div className="ProjectItemHeader">
                  <div className="topHeader">
                    <h5>Paynless</h5>
                    <h5>March 2018</h5>
                  </div>
                  <h6>Developer</h6>
                </div>
                <ul>
                  <li>
                    A point-of-sale app that allows users to pay their merchant
                    without ever reaching for their credit cards or tapping
                    their phone on a terminal.
                  </li>
                  <li>
                    Built as a progressive web app using react, material UI and
                    firebase firestore.
                  </li>
                </ul>
              </div>

              <div className="ProjectItem">
                <div className="ProjectItemHeader">
                  <div className="topHeader">
                    <h5>Recipily</h5>
                    <h5>March 2018</h5>
                  </div>
                  <h6>Sole Developer</h6>
                </div>
                <ul>
                  <li>
                    A mobile smart recipe viewer that allows the user to scroll
                    through the recipe without touching the screen!
                  </li>
                  <li>
                    Built in 4 days at Fullstack Academy's hackathon using react
                    native.
                  </li>
                </ul>
              </div>

              <div className="ProjectItem">
                <div className="ProjectItemHeader">
                  <div className="topHeader">
                    <h5>React Real Time Form Validation</h5>
                    <h5>March 2018</h5>
                  </div>
                  <h6>Sole Developer</h6>
                </div>
                <ul>
                  <li>
                    Library that allows you to add real time validation to your
                    react forms with some quick boilerplate, simple rules setup,
                    and some helpful components to display errors.
                  </li>
                  <li>
                    https://www.npmjs.com/package/react-real-time-form-validation
                  </li>
                </ul>
              </div>
            </div>

            <div className="Experience">
              <h3>Work Experience</h3>
              <div className="underline" />
              <div className="ExperienceItem">
                <div className="ExperienceItemHeader">
                  <div className="topHeader">
                    <h5>Mariana Tek</h5>
                    <h5>Jan​ ​2016-Nov​ ​2017</h5>
                  </div>
                  <h6>Product Manager - Business Intelligence Lead</h6>
                </div>
                <ul>
                  <li>
                    Guided Mariana Tek Software from idea to launch, resulting
                    in Mariana’s first recurring revenue and contracts signed
                    with 2 national brands.
                  </li>
                  <li>
                    Implemented creative and lean solutions to payroll and label
                    printing, saving over a month of development time on
                    launching Barry’s Bootcamp while reducing Barry’s time spent
                    doing payroll by almost 2 workdays.
                  </li>
                  <li>
                    Worked with a cross functional team of designers, engineers,
                    and project managers to define requirements, write
                    actionable user stories, and assist in testing new features.
                  </li>
                  <li>
                    Drove user experience improvements to inventory management,
                    leading to a greater than 5-fold increase in usage.
                  </li>
                </ul>
              </div>

              <div className="ExperienceItem">
                <div className="ExperienceItemHeader">
                  <div className="topHeader">
                    <h5>Alarm.com</h5>
                    <h5>June​ ​2012-Dec​ ​2015</h5>
                  </div>
                  <h6>
                    ​Senior Product Management Associate - Business Intelligence
                  </h6>
                </div>
                <ul>
                  <li>
                    Developed innovative first-to-market mobile business
                    intelligence application for our partners from inception to
                    deployment.
                  </li>
                  <li>
                    Built, designed, and developed innovative internally facing
                    tools and dashboards turning company from a pure product and
                    sales company into a data analytics driven company.
                  </li>
                  <li>
                    Owned the priority roadmap of company dashboards, data
                    migrations, and data modeling.
                  </li>
                  <li>
                    Created and executed data-driven solution to reduce false
                    alarm volume by half.
                  </li>
                  <li>
                    Created externally facing tools to allow our partners to
                    manage their customer base and troubleshoot their network.
                  </li>
                </ul>
              </div>

              <div className="Education">
                <h3>Education</h3>
                <div className="underline" />
                <div className="EducationItem">
                  <div className="topHeader">
                    <h5>Fullstack Academy</h5>
                    <h5>March 2018</h5>
                  </div>
                  <ul>
                    <li>Learned full-stack javascript software development.</li>
                    <li>
                      Worked with Node.js, Sequelize, Express, React, Redux,
                      React Native, PostgreSQL, and Firebase to create various
                      full-stack software applications.
                    </li>
                  </ul>
                </div>
                <div className="EducationItem">
                  <div className="topHeader">
                    <h5>Colby College</h5>
                    <h5>Bachelor​ ​of​ ​Arts,​ ​May​ ​2012</h5>
                  </div>
                  <ul>
                    <li>Major: Mathematical Sciences</li>
                    <li>
                      Relevant Courses: Partial Differential Equations,
                      Mathematical Modeling, Introduction to Python
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="PersonalAndSkills">
            <div className="PersonalInfo">
              <h3>Personal Info</h3>
              <div className="underline" />
              <div>
                <h5>Email: </h5>
                <p>mappleby1@me.com</p>
              </div>
              <div>
                <h5>Phone: </h5>
                <p>617-460-1979</p>
              </div>
              <div>
                <h5>City: </h5>
                <p>New York, New York</p>
              </div>
              <div>
                <h5>Linkedin: </h5>
                <p>linkedin.com/in/matthew-appleby-01a17336</p>
              </div>

              <div>
                <h5>Github: </h5>
                <p>https://github.com/sirmateus88</p>
              </div>
            </div>
            <div className="Skills">
              <h3>Skills</h3>
              <div className="underline" />
              <h5>Proficient:</h5>
              <div className="SkillPills">
                <Chip backgroundColor={blue300}>Javascript</Chip>
                <Chip backgroundColor={blue300}>Node.js</Chip>
                <Chip backgroundColor={blue300}>React</Chip>
                <Chip backgroundColor={blue300}>Redux</Chip>
                <Chip backgroundColor={blue300}>SQL</Chip>
                <Chip backgroundColor={blue300}>Express</Chip>
                <Chip backgroundColor={blue300}>Sequelize</Chip>
                <Chip backgroundColor={blue300}>Firebase</Chip>
                <Chip backgroundColor={blue300}>Material UI</Chip>
                <Chip backgroundColor={blue300}>HTML</Chip>
                <Chip backgroundColor={blue300}>CSS</Chip>
                <Chip backgroundColor={blue300}>Agile</Chip>
              </div>
              <h5>Familiar:</h5>
              <div className="SkillPills">
                <Chip backgroundColor={lightGreen400}>JQuery</Chip>
                <Chip backgroundColor={lightGreen400}>PostgreSQL</Chip>
                <Chip backgroundColor={lightGreen400}>React Native</Chip>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
