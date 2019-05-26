import React from "react";
import Image from "react-image-resizer";

export default class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    if (data == undefined) return <div />;

    return (
      <div className="text-center mt-4 mb-4">
        <img src={data.url} class="rounded-circle" height={320} width={320} />
      </div>
    );
  }
}
