import React from "react";

export default class SocialMediaLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    if (data == undefined) return <div />;

    return (
      <a href={data.url} className="mr-2 ml-2 text-secondary">
        <i class={"fa fa-" + data.type + "-square fa-3x social"} />
      </a>
    );
  }
}
