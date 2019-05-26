import React from "react";
import SocialMediaLink from "./social-media-link";

export default class SocialMediaLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    if (data == undefined) return <div />;

    return (
      <footer className="bg-light">
        <hr />
        <div className="text-center center-block text-secondary">
          <p className="txt-railway">- Contact @ -</p>
          {data.map(social => {
            return <SocialMediaLink key={social.toString()} data={social} />;
          })}
        </div>
        <hr />
      </footer>
    );
  }
}
