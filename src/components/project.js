import React from "react";

export default class Project extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div className="project-detail mb-3">
        <div className="card">
          <h5 class="card-header">{data.title}</h5>
          <div className="card-body">
            <table>
              <tr>
                <th>Period</th>
                <td>{data.priod}</td>
              </tr>
              <tr>
                <th>Tools Used</th>
                <td>{data.tools}</td>
              </tr>
              <tr>
                <th>Responsibilities</th>
                <td>{data.responsibilities}</td>
              </tr>
              <tr>
                <th>Technologies Used</th>
                <td>{data.technologies}</td>
              </tr>
              <tr>
                <th>Team Size</th>
                <td>{data.teamsize}</td>
              </tr>
              <tr>
                <th>Roles Played</th>
                <td>{data.role}</td>
              </tr>
              <tr>
                <th>Client</th>
                <td>{data.client}</td>
              </tr>
            </table>
            <div className="project-summary card-footer mt-3">
              <span className="font-weight-bold">Project Summary</span>
              <hr />
              <p>{data.summary}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
