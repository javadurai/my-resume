import React from "react";

class NatureOfWork extends React.Component {
  render() {
    return (
      <div class="card mb-5 rounded-pill text-center">
        <div class="card-body bg-secondary">
          <div className="natureOfWork">
            <h2 className="text-uppercase">Nature Of Work</h2>
            {this.props.natureofwork}
          </div>
        </div>
      </div>
    );
  }
}

export default NatureOfWork;
