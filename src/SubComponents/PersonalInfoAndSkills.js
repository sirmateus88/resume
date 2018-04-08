import React from "react";
import Chip from "material-ui/Chip";
import { blue300, lightGreen400 } from "material-ui/styles/colors";

function PersonalInfoAndSkills() {
  return (
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
          <p>linkedin.com/in/matthew-appleby</p>
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
  );
}

export default PersonalInfoAndSkills;
