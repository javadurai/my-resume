import React from "react";

export default class ProfileSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div className="summary">
        <h2 className="text-uppercase">Summary</h2>
        <ul>
          {data.map(rec => {
            return <li key={rec.toString()}>{rec}</li>;
          })}
        </ul>
      </div>
    );
  }
}
