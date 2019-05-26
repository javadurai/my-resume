import React from "react";
import Project from "./project";

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.data;
    if (data == undefined) return <div />;

    return (
      <div className="projects">
        <h2 className="text-uppercase">Projects</h2>
        {data.map(project => {
          return <Project key={project.toString()} data={project} />;
        })}
      </div>
    );
  }
}
