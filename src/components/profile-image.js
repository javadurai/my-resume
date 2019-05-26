import React from "react";

export default class ProfileImage extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div className="text-center mt-4 mb-4">
        <img
          src={data.url}
          className="rounded-circle"
          height={320}
          width={320}
          alt="Jabadurai Selvaraj"
        />
      </div>
    );
  }
}
