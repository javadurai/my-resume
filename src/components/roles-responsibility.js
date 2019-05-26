import React from "react";

export default class RolesResponsibility extends React.Component {
  render() {
    if (this.props.roles === undefined) {
      return <div />;
    }

    return (
      <div className="roles-responsibility">
        <h2 className="text-uppercase">Roles & Responsibilities</h2>
        <ul>
          {this.props.roles.map(rolesresp => {
            return <li>{rolesresp}</li>;
          })}
        </ul>
      </div>
    );
  }
}
