import React from "react";

export default class ProfileSummary extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div className="summary">
        <h2 className="text-uppercase text-main text-center text-underlined">
          Summary
        </h2>
        <ul>
          {data.map(rec => {
            return (
              <li key={rec.toString()}>
                <i className="fa fa-java" />
                {rec}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
