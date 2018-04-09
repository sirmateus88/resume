import React from "react";

function ExperienceAndEducation() {
  return (
    <div className="ExperienceEducation">
      <div className="Projects">
        <h3>Projects</h3>
        <div className="underline" />

        <div className="ProjectItem">
          <div className="ProjectItemHeader">
            <div className="topHeader">
              <h5>Paynless</h5>
              <h5>April 2018</h5>
            </div>
            <h6>A food service centric, point-of-sale app that allows customers to pay merchants
              without reaching for their credit card or tapping their
              phone on a terminal</h6>
          </div>
          <ul>
            <li>
              Built the bar tab component using firestore and react which allows for instantaneous updates on both the customer and merchant interface when tabs are opened, updated, and closed.
            </li>
            <li>
              Created a "favorites" component that allows users to quickly and easily access their favorite merchants.
            </li>
            <li>
              Integrated firestore functions with the checkout functionality in react, including loading state and error handling.
            </li>
            <li>
              Deployed at https://paynless.co
            </li>
          </ul>
        </div>

        <div className="ProjectItem">
          <div className="ProjectItemHeader">
            <div className="topHeader">
              <h5>Recipily</h5>
              <h5>March 2018</h5>
            </div>
            <h6>A mobile, smart recipe viewer that gives users a hands free way to scroll through recipes</h6>
          </div>
          <ul>
            <li>
              Learned react native to build a mobile recipe viewer which uses sensor data to allow for touchless scrolling.
            </li>
            <li>
              Created web scraper to download recipes from SmittenKitchen.com using mercury to download html content.
            </li>
          </ul>
        </div>

        <div className="ProjectItem">
          <div className="ProjectItemHeader">
            <div className="topHeader">
              <h5>React Real Time Form Validation</h5>
              <h5>February 2018</h5>
            </div>
            <h6>Library that allows you to add real-time input validation to react
              forms</h6>
          </div>
          <ul>
            <li>
              Built and published npm module react-real-time-form-validation, which was downloaded 477 times in its first month.
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
              Guided Mariana Tek Software from idea to launch, resulting in
              Mariana’s first recurring revenue and contracts signed with 2
              national brands.
            </li>
            <li>
              Implemented creative and lean solutions to payroll and label
              printing, saving over a month of development time on launching
              Barry’s Bootcamp while reducing Barry’s time spent doing payroll
              by almost 2 workdays.
            </li>
            <li>
              Worked with a cross functional team of designers, engineers, and
              project managers to define requirements, write actionable user
              stories, and assist in testing new features.
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
              Developed innovative first-to-market mobile business intelligence
              application for our partners from inception to deployment.
            </li>
            <li>
              Built, designed, and developed innovative, internally facing tools
              and dashboards that helped shift the company from a pure product and sales
              company into a data analytics driven company.
            </li>
            <li>
              Owned the priority roadmap of company dashboards, data migrations,
              and data modeling.
            </li>
            <li>
              Created and executed data-driven solution to reduce false alarm
              volume by half.
            </li>
            <li>
              Created externally facing tools to allow our partners to manage
              their customer base and troubleshoot their network.
            </li>
          </ul>
        </div>

        <div className="Education">
          <h3>Education</h3>
          <div className="underline" />
          <div className="EducationItem">
            <div className="topHeader">
              <h5>Fullstack Academy</h5>
              <h5>Graduated April 2018</h5>
            </div>
            <ul>
              <li>Learned full-stack javascript software development.</li>
            </ul>
          </div>
          <div className="EducationItem">
            <div className="topHeader">
              <h5>Colby College</h5>
              <h5>Bachelor​ ​of​ ​Arts,​ ​May​ ​2012</h5>
            </div>
            <ul>
              <li>Major: Mathematical Sciences</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceAndEducation;
