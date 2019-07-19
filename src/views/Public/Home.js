import React, { Component } from 'react';


class Home extends Component {

    componentDidMount() {

    }

    render() {

      return ( 
    <div>
        <section class="slider">
            <div id="osahanslider" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active" style={{backgroundImage: "url('assets/img/banner2.jpg')"}}>
                        <div class="overlay"></div>
                    </div>
                </div>
            </div>
            <div class="slider-form">
                <div class="container">
                    <h1 class="text-center text-white mb-5">Discover the best property deals in Nigeria</h1>

                </div>
            </div>
              <ul class=" container nav nav-pills mb-3 search-type d-flex align-items-center justify-content-center" id="pills-tab" role="tablist" style={{height: '76px'}}>
                  <li class="nav-item d-flex align-content-center">
                      <a class="nav-link py-4 active" id="pills-home-tab" data-toggle="pill" href="#pills-sale" role="tab" aria-controls="pills-home" aria-selected="true">Sale</a>
                  </li>
                  <li class="nav-item d-flex align-content-center">
                      <a class="nav-link py-4" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Rent</a>
                  </li>
                  <li class="nav-item d-flex align-content-center">
                      <a class="nav-link py-4" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Short Lent</a>
                  </li>
                  <li class="nav-item d-flex align-items-center">
                      <a class="nav-link py-4" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Joint Venture</a>
                  </li>
              </ul>

              <div class=" container tab-content" id="pills-tabContent">
                  <div class="container search-home tab-pane fade show active" id="pills-sale" role="tabpanel" aria-labelledby="pills-sale-tab">
                      <form action="" class="d-flex justify-content-center align-items-center">
                          <div class="col-md-9 form-group form-group px-lg-5 py-4 mb-0">
                              <input type="search" name="" class="form-control py-4" id="" placeholder="Search the area you want the house" />
                          </div>
                      </form>
                      <section class="container">
                          <ul class="row d-flex flex-row justify-content-between align-items-center px-lg-4">
                              <li class="col-lg-2 d-flex flex-column justify-content-center align-items-start px-0 text-left">
                                  <div class="custom-select">
                                      <select name="tid" class="form-control">
                                          <option value="0">Types</option>
                                          <option value="0">All Types</option>
                                          <option value="1">Flat</option>
                                          <option value="2">House</option>
                                          <option value="5">Land</option>
                                          <option value="3">Commercial Property</option>
                                          <option value="6">Event Centre / Venue</option>
                                      </select>
                                  </div>
                              </li>
                              <li class="col-lg-2 d-flex flex-column justify-content-center align-items-start px-0 text-left">
                                  <div class="custom-select">
                                      <select name="bedrooms" id="bedrooms">
                                          <option value="0">Bedrooms</option>
                                          <option value="0">Any</option>
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                          <option value="6">6+</option>
                                      </select>
                                  </div>
                              </li>
                              <li class="col-lg-2 d-flex flex-column justify-content-center align-items-start px-0 text-left">
                                  <div class="custom-select">
                                      <select name="minprice" id="minprice">
                                          <option value="0">Min Price</option>
                                          <option value="0">No Min</option>
                                          <option value="100000">₦ 100,000</option>
                                          <option value="250000">₦ 250,000</option>
                                          <option value="500000">₦ 500,000</option>
                                          <option value="750000">₦ 750,000</option>
                                          <option value="1000000">₦ 1,000,000</option>
                                          <option value="2000000">₦ 2,000,000</option>
                                          <option value="5000000">₦ 5,000,000</option>
                                          <option value="10000000">₦ 10,000,000</option>
                                          <option value="20000000">₦ 20,000,000</option>
                                          <option value="40000000">₦ 40,000,000</option>
                                          <option value="60000000">₦ 60,000,000</option>
                                          <option value="80000000">₦ 80,000,000</option>
                                          <option value="100000000">₦ 100,000,000</option>
                                          <option value="150000000">₦ 150,000,000</option>
                                      </select>
                                  </div>
                              </li>
                              <li class="col-lg-2 d-flex flex-column justify-content-center align-items-start px-0 text-left">
                                  <div class="custom-select">
                                      <select name="minprice" id="minprice">
                                          <option value="0">Max Price</option>
                                          <option value="0">No Max</option>
                                          <option value="100000">₦ 100,000</option>
                                          <option value="250000">₦ 250,000</option>
                                          <option value="500000">₦ 500,000</option>
                                          <option value="750000">₦ 750,000</option>
                                          <option value="1000000">₦ 1,000,000</option>
                                          <option value="2000000">₦ 2,000,000</option>
                                          <option value="5000000">₦ 5,000,000</option>
                                          <option value="10000000">₦ 10,000,000</option>
                                          <option value="20000000">₦ 20,000,000</option>
                                          <option value="40000000">₦ 40,000,000</option>
                                          <option value="60000000">₦ 60,000,000</option>
                                          <option value="80000000">₦ 80,000,000</option>
                                          <option value="100000000">₦ 100,000,000</option>
                                          <option value="150000000">₦ 150,000,000</option>
                                      </select>
                                  </div>
                                </li>
                              <li class="col-lg-2 d-flex justify-content-end align-items-center">
                                  <button class="btn btn-lg text-white search-btn d-flex justify-content-center align-items-center">
                                      <i class="fa fa-search"></i></button>
                              </li>
                          </ul>
                      </section>
                  </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
              </div>
          </section>

          <section class="container section-padding">
              <div class="row px-4 pb-3">
                  <div class="col-sm-6">
                      <h3 class="py-2">Featured Adverts</h3>
                  </div>

                  <div class="col-sm-2">
                      <div class="line"></div>
                  </div>
              </div>
              <div class="container">
                  <div class="row">
                      <div class="col-lg-3 py-3">
                          <div class="card" style={{minHeight: '509px', background: "url('assets/img/featured-properties/1.png')", backgroundSize: 'cover'}}>
                              <div class="overlay"></div>
                              <h5 class="text-center" style={{position: 'absolute', right: '0', left: '0', bottom: '72px', color: '#ffffff'}}>
                                      4 Bedroom Duplex
                                  </h5>
                          </div>
                      </div>

                      <div class="col-lg-3 py-3">
                          <div class="card" style={{minHeight: '509px', background: "url('assets/img/featured-properties/2.png')", backgroundSize: 'cover'}}>
                              <div class="overlay"></div>
                              <h5 class="text-center" style={{position: 'absolute', right: '0', left: '0', bottom: '72px', color: '#ffffff'}}>
                                      2 Bedroom Duplex
                                  </h5>
                          </div>
                      </div>

                      <div class="col-lg-3 py-3">
                          <div class="card" style={{minHeight: '509px', background: "url('assets/img/featured-properties/3.png')", backgroundSize: 'cover'}}>
                              <div class="overlay"></div>
                              <h5 class="text-center" style={{position: 'absolute', right: '0', left: '0', bottom: '72px', color: '#ffffff'}}>
                                      4 Bedroom Duplex
                                  </h5>
                          </div>
                      </div>

                      <div class="col-lg-3 py-3">
                          <div class="card" style={{minHeight: '509px', background: "url('assets/img/featured-properties/2.png')", backgroundSize: 'cover'}}>
                              <div class="overlay"></div>
                              <h5 class="text-center" style={{position: 'absolute', right: '0', left: '0', bottom: '72px', color: '#ffffff'}}>
                                      2 Bedroom Duplex
                                  </h5>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section>
            <div class="container slider">
                <div id="osahanslider" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#osahanslider" data-slide-to="0" class="active"></li>
                        <li data-target="#osahanslider" data-slide-to="1"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active" style={{backgroundImage: "url('assets/img/castlemag.jpg')"}}>
                            <div class="overlay"></div>
                        </div>
                        <div class="carousel-item" style={{backgroundImage: "url('assets/img/highbrow.jpg')"}}>
                            <div class="overlay"> </div>
                        </div>
                    </div>
                </div>
                <div class="slider-form">
                    <div class="container">
                        <h1 class="text-center text-white mb-5" style={{fontSize: '2rem'}}><strong>Professional Insight into Property Market in Nigeria</strong></h1>

                        <h3 class="text-center">
                            Download<a href="#" style={{fontWeight: '800'}}> Castles Magazine</a> | <a href="#" style={{fontWeight: '800'}}>Highbrow</a>
                        </h3>

                    </div>
                </div>
            </div>
        </section>

        <section class="section-padding footer mt-5">
        <div class="container ">
            <h3 class="mb-4 text-center">Explore Property</h3>
            <h5 class="text-center text-muted pb-5">We provide various type, Find propertiesin your city</h5>
            <div class="row ">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 py-2">
                            <a href="propertylisting.html">
                                <div class="card" style={{minHeight: '320px', background: "url('assets/img/explore/1.png')", backgroundSize:'cover'}}>
                                    <div class="overlay"></div>
                                    <div class="text-center" style={{position: 'absolute', right: '0', left: '0', bottom:'130px', color: '#ffffff'}}>
                                        <h5 class="text-white">Schools</h5>
                                        <h6 class="text-white"><span style={{color: '#FE8C00'}}>24</span> Properties</h6>
                                    </div>
                                </div>
                            </a>
                        </div>


                        <div class="col-lg-3 py-2">
                            <a href="propertylisting.html">
                                <div class="card" style={{minHeight: '320px', background: "url('assets/img/explore/2.png')", backgroundSize:'cover'}}>
                                    <div class="overlay"></div>
                                    <div class="text-center" style={{position: 'absolute', right: '0', left: '0', bottom:'130px', color:' #ffffff'}}>
                                        <h5 class="text-white">Lands</h5>
                                        <h6 class="text-white"><span style={{color: '#FE8C00'}}>24</span> Properties</h6>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="col-lg-3 py-2">
                            <a href="propertylisting.html">
                                <div class="card" style={{minHeight: '320px', background: "url('assets/img/apartment.jpg')", backgroundSize:'cover'}}>
                                    <div class="overlay"></div>
                                    <div class="text-center" style={{position: 'absolute', right: '0', left: '0', bottom:'130px', color: '#ffffff'}}>
                                        <h5 class="text-white">Apartment</h5>
                                        <h6 class="text-white"><span style={{color: '#FE8C00'}}>24</span> Properties</h6>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="col-lg-3 py-2">
                            <a href="propertylisting.html">
                                <div class="card" style={{minHeight: '320px', background: "url('assets/img/house.jpg')", backgroundSize:'cover'}}>
                                    <div class="overlay"></div>
                                    <div class="text-center" style={{position: 'absolute', right: '0', left: '0', bottom:'130px', color: '#ffffff'}}>
                                        <h5 class="text-white">Houses</h5>
                                        <h6 class="text-white"><span style={{color: '#FE8C00'}}>24</span> Properties</h6>
                                    </div>
                                </div>
                            </a>
                        </div>




                    </div>

                </div>
            </div>
        </div>
    </section>

    <section class="section-padding footer mt-5">
        <div class="container ">
            <h3 class="mb-4 text-center text-uppercase">To get latest update subscribe to our </h3>
            <h5 class="text-center text-muted pb-5 text-uppercase">newsletter</h5>
            <div class="row ">
                <div class="col-lg-6 col-md-6 offset-sm-3 ">
                    <div class="row">
                        <div class="col-sm-9 px-0">
                            <input type="text" name="newsletter" class="form-control py-3" id="newsletter" style={{background: 'rgb(32, 32, 54)', height: '80px', color: '#ffffff', fontSize: '1.5rem'}} placeholder="EMAIL ADDRESS"/>
                        </div>
                        <div class="col-sm-3 px-0 py-2 align-middle">
                            <button class="btn btn-lg bg-orange btn-subscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </div>
        )

    }

}

export default Home;