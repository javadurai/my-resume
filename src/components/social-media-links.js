import React from "react";
import SocialMediaLink from "./social-media-link";

export default class SocialMediaLinks extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <footer className="bg-light">
        <hr />
        <div className="text-center text-main center-block text-secondary">
          <p className="txt-railway">- Contact @ -</p>
          {data.map(social => {
            return <SocialMediaLink key={social.type} data={social} />;
          })}
        </div>
        <hr />
      </footer>
    );
  }
}
