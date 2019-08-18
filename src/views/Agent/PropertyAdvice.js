import React, { Component } from 'react';
import config from '../../config'
import bg from "./agent-listing-images/img/bg.png"
import agency from "./agent-listing-images/img/agency.png"
import img1 from "./agent-listing-images/properties/2.png"



class PropertyAdvice extends Component {
    constructor(props){
        super(props)
        this.state = {
            articleCategories:[],
            subEmail:""
        }
    }
    componentDidMount() {
        this.getArticleCategories()
    }
    getArticleCategories = async () => {
        const res = await fetch(`${config.BASE_URL}/property_advise`,{
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          method:'GET'
      })
        const payload = await res.json();
        if (res.status === 200 && payload.status === 1){
            this.setState({
                articleCategories:payload.data
            })
        }else{
            alert('Something went wrong')
        }
      }
    render() {
      const headerStyle = {
        backgroundImage:`url(${bg})`
      };
      let articleCategories = this.state.articleCategories.map((item)=>{
            return (
                <div class="col-lg-6 py-2 ">
                    <div class="card bg-white mx-3 " key={item.id}>
                        <img src={agency} alt=""/>
                        <div class="card-footer bg-white ">
                            <h6 class="card-subtitle mb-2 text-muted ">{item.name}</h6>
                            {/* <p class="pt-2 ">By Reachmond Estate</p> */}
                        </div>
                    </div>
                </div>
            )
      })
      return ( 
            <React.Fragment>
              <section class="slider ">
                <div id="osahanslider " class="carousel slide " data-ride="carousel ">
                    <div class="carousel-inner " role="listbox" style={{height:"300px"}}>
                        <div class="carousel-item active " style={headerStyle}>
                            <div class="overlay "></div>
                        </div>
                    </div>
                </div>
                <div class="slider-form ">
                    <div class="container ">
                        <h1 class="text-center text-white mb-5 ">Tropical Information on Nigeria Real Estate Arranged in Categories</h1>
                    </div>
                </div>
            </section>
            <section class="container-fluid bg-grey ">
              <div class="container ">
                  <div class="row pt-5 pb-3 ">
                      <div class="col-sm-6 ">
                          <h3 class="py-3 ">Categories</h3>
                      </div>
                      <div class="col-sm-2 offset-sm-2 ">
                          <p>View All</p>
                      </div>
                      <div class="col-sm-2 ">
                          <div class="line "></div>
                      </div>
                  </div>
                  <div class="row ">
                      <div class="col-sm-8 ">
                            <div class="row py-4 ">
                                {articleCategories}
                            </div>
                      </div>
                      <div class="col-sm-4 ">
                          <div class="row ">
                              <div class="col-sm-12 pb-3 ">
                                  <div class="card ml-5 " height="18rem ">
                                      <h5 class=" px-3 py-3 ">
                                          Search Castles
                                      </h5>
                                      <div class="card-footer " style={{background:"#FF8C00"}}>
                                          <input type="text " placeholder="e.g Lekki, Lagos " class="form-control " style={{minHeight:"50px"}}/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="row ">
                              <div class="col-sm-12 py-3 ">
                                  <div class="card ml-5 " height="18rem ">
                                      <img src={img1} height="227px " class="card-img-top " alt="... " style={{height:"227px"}}/>
                                      <div class="card-footer btn btn-outline-dark " style={{background:"#FF8C00"}}>
                                          View properties for sale at Ikoyi
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="row ">
                              <div class="col-sm-12 py-3 ">
                                  <div class="card ml-5 " height="18rem ">
                                      <img src={img1} height="227px " class="card-img-top " alt="... " style={{height:"227px"}}/>
                                      <div class="card-footer btn btn-outline-dark " style={{background:"#FF8C00"}}>
                                          View properties for sale at Ikoyi
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
            </section>
            <section class="section-padding footer mt-5 ">
                <div class="container ">
                    <h3 class="mb-4 text-center ">To get latest update subscribe to our </h3>
                    <h5 class="text-center text-muted pb-5 text-uppercase ">newsletter</h5>
                    <div class="row ">
                        <div class="col-lg-6 col-md-6 offset-sm-3 ">
                            <div class="row ">
                                <div class="col-sm-9 px-0 ">
                                    <input type="text " name="newsletter " class="form-control py-3 " id="newsletter " style={{background:"rgb(32, 32, 54)", height:"80px",color:"#ffffff",fontSize:"1.5rem"}}/>
                                </div>
                                <div class="col-sm-3 px-0 py-2 align-middle ">
                                    <button class="btn btn-lg bg-orange btn-subscribe ">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </section>
            </React.Fragment>
        )
    }
}

export default PropertyAdvice;