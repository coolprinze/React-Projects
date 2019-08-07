import React, { Fragment, Component } from 'react'
import Chart from 'chart.js'
import {Link} from 'react-router-dom'
import Header from '../../component/Header/Header';
import Footer from '../../component/Footer';

class AgentListingStats extends Component {
  componentDidMount(){
    
    const ctxL = document.getElementById("lineChart").getContext('2d');
    const myLineChart = new Chart(ctxL, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "My First dataset",
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: [
                    'rgba(105, 0, 132, 0)',
                ],
                borderColor: [
                    'rgba(200, 99, 132, .7)',
                ],
                borderWidth: 2
            }, {
                label: "My Second dataset",
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: [
                    'rgba(0, 137, 132, 0)',
                ],
                borderColor: [
                    'rgba(0, 10, 130, .7)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true
        }
    });
  }
  render() {
    return (
      <Fragment>

        <Header />
        <div className="container-fluid search-bar d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12 py-3 px-0 d-flex justify-content-start">
                            <Link className="btn" to="/agent">Back</Link>
                            <h4 className="text-white ml-3">All Listing Statistics</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="container-fluid bg-grey py-5">
    
            <section className="container slider bg-white px-5 py-5">
                <div className="row mb-5 pb-5">
                    <div className="col-sm-4">
                        <button className="btn bg-orange" style={{ borderRadius: 0, color: '#ffffff', border:'1px solid #909090' }}>Views</button>
                        <button className="btn" style={{ borderRadius: 0, border: '1px solid #909090' }}>Views</button>
                    </div>
                </div>
                <canvas id="lineChart"></canvas>
            </section>
        </section>
        <Footer />
      </Fragment>
    )
  }
}

export default  AgentListingStats;
