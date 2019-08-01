import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

class Metrics extends Component {
  render() {
    let active = this.props.active;
    console.log(active[0])
    return (
      <div className="container">
        <div className="row">
          <Link to={"/dashboard"} className={`${active[0]} col` }>
            <div className="">
              <h1>1300</h1>
              <p>total lists</p>
            </div>
          </Link>
          <Link to={"/agents"} className={`${active[1]} col` }>
            <div>
              <h1>1300</h1>
              <p>Agent Lists</p>
            </div>
          </Link>
          <Link to={"/requests"} className={`${active[2]} col` }>
            <div>
              <h1>1300</h1>
              <p>Requests</p>
            </div>
          </Link>
          <Link to={"/users"} className={`${active[3]} col` }>
            <div>
              <h1>68</h1>
              <p>Users</p>
            </div>
          </Link>
          <Link to={"/reports"} className={`${active[4]} col` }>
            <div>
              <h1>930</h1>
              <p>Reports</p>
            </div>
          </Link>

        </div>
      </div>
    )
  }
}

export default Metrics;