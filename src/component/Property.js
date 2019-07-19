import React, { Component } from 'react';


class App extends Component {
    state = {
        properties: []
      }

    componentDidMount() {

        fetch('http://api.castles.com.ng/api/properties')
        .then(res => res.json())
        .then((properties) => {
        this.setState({ properties: properties.data.data })
        console.log(this.state.properties)
        })
        .catch(console.log)
      
    }

    render() {

        return ( 
            <React.Fragment>
            {this.state.properties.map((property) => (
                  <div className="row pb-3">
                        <div className="col-sm-8">
                            <div className="row">
                                <div className="col-sm-8 col-lg-8 px-0 py-0">
                                    <div style={{background: "url('assets/img/properties/1.png')", width: '100%', minHeight: '296px'}}></div>
                                </div>
                                <div className="col-sm-4 col-lg-4 px-0 py-0 hidden">
                                    <div style={{background: "url('assets/img/properties/2.png')",  width: '100%', minHeight: '148px'}}></div>
                                    <div style={{background: "url('assets/img/properties/3.png')", width: '100%', minHeight: '148px'}}></div>
                                </div>
                            </div>
                            </div>
                        
                        <div className="col-sm-4 px-0 py-0 bg-white">
                            <div className="col-sm-12 py-2 px-2">
                                <h5>{property.title}</h5>
                                <span className="text-small">{property.bedroom} Bedroom | {property.bathroom} Bathroom | {property.toilet} Toilet | {property.parking} Parking</span>
                                <h6 className="px-0 py-0">Ajah</h6>
                                <span>{property.description}</span>
                                <button className="btn btn-dark btn-listing" style={{width: '100%'}}>N{property.price}</button>
                                <div className="d-flex">
                                    <div className="mr-auto p-2"><span>Added 2days ago</span></div>
                                    <div className="p-2"><i className="fa fa-share"></i></div>
                                    <div className="p-2"><i className="fa fa-heart-o"></i></div>
                                </div>

                                <hr className="mx-0 py-1 my-0"/>
                                <div className="row">
                                    <div className="col-sm-3 hidden"><img src="assets/img/properties/1.png" className="img rounded-circle" alt=""/></div>
                                    <div className="col-sm-9">
                                        <span>D properties Consult</span>
                                        <div className="d-flex justify-content-between">
                                            <span>08178883933</span>
                                            <span>View listing</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
            </React.Fragment>
            
          
        )

    }

}

export default App;