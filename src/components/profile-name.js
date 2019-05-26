import React from "react";

export default class ProfileName extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div className="text-center">
        <h1 className="display-4">
          <span class="profile-name text-main text-uppercase">
            {data.firstname} {data.lastname}
          </span>
        </h1>
      </div>
    );
  }
}
