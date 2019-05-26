import React from "react";

export default class ContactDetails extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div class="card mb-3">
        <div class="card-body text-center">
          <div className="Address">
            <h2 className="text-uppercase text-underlined">Contact</h2>
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
