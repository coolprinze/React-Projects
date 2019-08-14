import React from 'react';
import { getGlobal, useGlobal, global } from 'reactn'
import { Link } from 'react-router-dom';

const Metrics = (props) =>  {
    let active = props.active;
    const [global] = useGlobal();
    const propertiesCount = global.totalProperties || 0;
    const usersCount = global.totalUsers || 0;
    const requestsCount = global.totalRequests || 0;
    const reportsCount = global.totalReports || 0;
    const agentsCount = global.totalAgents || 0;
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

export default Metrics;