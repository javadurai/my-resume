import React from "react";

export default class AcademicDetails extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div className="academic">
        <h2 className="text-uppercase text-main text-center text-underlined">
          Academic Details
        </h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th className="align-middle">Course</th>
              <th className="align-middle">Institution</th>
              <th className="align-middle">Passed</th>
              <th className="align-middle">GPA</th>
            </tr>
          </thead>
          <tbody>
            {data.map(academic => {
              return (
                <tr className="text-secondary">
                  <td>{academic.course}</td>
                  <td>{academic.institution}</td>
                  <td>{academic.month_Year}</td>
                  <td>{academic.gPA}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
