import React from "react";

class ProfessionalExperience extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div className="card mb-3 d-md-block">
        <div className="card-body text-center">
          <div className="professional-experience">
            <h2 className="text-uppercase text-main text-underlined">
              Professional Experience
            </h2>
            <ul>
              {data.map(rec => {
                return <li key={rec.toString()}>{rec}</li>;
              })}
            </ul>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfessionalExperience;
