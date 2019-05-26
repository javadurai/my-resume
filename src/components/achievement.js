import React from "react";

export default class Achievements extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div className="achievements">
        <h2 className="text-uppercase text-main text-center text-underlined">
          Achievements
        </h2>
        <ul>
          {data.map(achievement => {
            return <li>{achievement}</li>;
          })}
        </ul>
      </div>
    );
  }
}
