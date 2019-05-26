import React from "react";

export default class ContactDetails extends React.Component {
  render() {
    const data = this.props.data;
    if (data === undefined) return <div />;

    return (
      <div class="card mb-3">
        <div class="card-body text-center">
          <div className="Address">
            <h2 className="text-uppercase text-main text-underlined">
              Contact
            </h2>
            <address>
              {data.address}
              <br />
              <span>
                <i class="fa fa-phone-square" />{" "}
                <a
                  className="text-secondary text-decoration-none"
                  href={"tel:" + data.mobile}
                >
                  {data.mobile}
                </a>
              </span>
              <br />
              <span>
                <i class="fa fa-envelope-square" />{" "}
                <a
                  className="text-secondary text-decoration-none"
                  href={"mailto:" + data.email}
                >
                  {data.email}
                </a>
              </span>
            </address>
          </div>
        </div>
      </div>
    );
  }
}
