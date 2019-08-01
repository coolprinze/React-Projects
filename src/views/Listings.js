import React, { Component } from 'react';
import Header from '../component/Header'
import Metrics from '../component/Metrics'
import Footer from '../component/Footer'
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact'

class Listings extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  render() {
    const columns = [
      {
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'First',
        field: 'first',
        sort: 'asc'
      },
      {
        label: 'Last',
        field: 'last',
        sort: 'asc'
      },
      {
        label: 'Handle',
        field: 'handle',
        sort: 'asc'
      }
    ];

    const rows_regular_btn = [
      {
        'id': 1,
        'first': <MDBBtn name="button" className="btn-dark" color="purple" size="sm">View</MDBBtn>,
        'last': 'Otto',
        'handle': '@mdo'
      },
      {
        'id': 2,
        'first': 'Jacob',
        'last': <MDBBtn color="purple" size="sm">Button</MDBBtn>,
        'handle': '@fat'
      },
      {
        'id': 3,
        'first': 'Larry',
        'last': 'the Bird',
        'handle': <MDBBtn color="purple" size="sm">Button</MDBBtn>
      }
    ];
    return (
      <React.Fragment>
        <Header />
        <Metrics active={[true, "text", "text", "text", "text"]} />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <MDBTable btn striped small>
                <MDBTableHead columns={columns} />
                <MDBTableBody rows={rows_regular_btn} />
              </MDBTable>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Listings;