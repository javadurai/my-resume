import React from "react";

export default class ContactDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;
    if (data == undefined) return <div />;

    return (
      <div class="card mb-3 d-md-block">
        <div class="card-body text-center">
          <div className="Address">
            <h2 className="text-uppercase">Contact</h2>
            <address>
              {data.address}
              <br />
              Mobile :{data.mobile}
              <span> E-Mail{data.email}</span>
            </address>
          </div>
        </div>
      </div>
    );
  }
}
