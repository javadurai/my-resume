import React from "react";
import ReactDOM from "react-dom";
import ProfileSummary from "./components/profile-summary";
import ProfessionalExperience from "./components/professional-experience";
import Projects from "./components/projects";
import AcademicDetails from "./components/academic-details";
import Achievements from "./components/achievement";
import ProfileName from "./components/profile-name";
import ContactDetails from "./components/contact-details";
import ProfileImage from "./components/profile-image";
import SocialMediaLinks from "./components/social-media-links";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import axios from "axios";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: {}
    };
  }

  componentWillMount() {
    axios
      .get(
        `https://raw.githubusercontent.com/javadurai/my-resume-data/master/data.json`
      )
      .then(res => {
        const resume = res.data;
        this.setState({ resume });
      });
  }

  render() {
    const data = this.state.resume;
    if (data === undefined) {
      return <div className="container" />;
    }

    return (
      <div className="container">
        <div className="App">
          <div className="row">
            <div className="col-sm-4 bg-secondary text-secondary">
              <ProfileImage data={data.picture} />
              <ContactDetails data={data.contact} />
              <hr className="bg-white" />
              <ProfessionalExperience data={data.professionalexperience} />
            </div>
            <div className="col-sm-8 bg-white ">
              <div className="right-panel text-secondary">
                <ProfileName data={data.name} />
                <hr />
                <ProfileSummary data={data.summary} />
                <hr />
                <Projects data={data.projects} />
                <hr />
                <AcademicDetails data={data.academic} />
                <hr />
                <Achievements data={data.achievements} />
              </div>
              <SocialMediaLinks data={data.social} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
