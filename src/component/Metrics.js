import React, { Component } from 'react';
import { getGlobal } from 'reactn'
import { Link } from 'react-router-dom';

class Metrics extends Component {
  render() {
    let active = this.props.active;
    const propertiesCount = getGlobal().properties.length;
    const usersCount = getGlobal().users.length;
    const requestsCount = getGlobal().requests.length;
    const reportsCount = getGlobal().reports.length;
    const agentsCount = getGlobal().agents.length;
    return (
      <div className="container">
        <div className="row">
          <Link to={"/"} className={`${active[0]} col` }>
            <div className="">
              <h1>{propertiesCount}</h1>
              <p>total lists</p>
            </div>
          </Link>
          <Link to={"/agents"} className={`${active[1]} col` }>
            <div>
              <h1>{agentsCount}</h1>
              <p>Agent Lists</p>
            </div>
          </Link>
          <Link to={"/requests"} className={`${active[2]} col` }>
            <div>
              <h1>{requestsCount}</h1>
              <p>Requests</p>
            </div>
          </Link>
          <Link to={"/users"} className={`${active[3]} col` }>
            <div>
              <h1>{usersCount}</h1>
              <p>Users</p>
            </div>
          </Link>
          <Link to={"/reports"} className={`${active[4]} col` }>
            <div>
              <h1>{reportsCount}</h1>
              <p>Reports</p>
            </div>
          </Link>

        </div>
      </div>
    )
  }
}

export default Metrics;