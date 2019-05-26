import React from "react";

export default class Achievements extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    if (data == undefined) return <div />;

    return (
      <div className="achievements">
        <h2 className="text-uppercase">Achievements</h2>
        <ul>
          {data.map(achievement => {
            return <li>{achievement}</li>;
          })}
        </ul>
      </div>
    );
  }
}
