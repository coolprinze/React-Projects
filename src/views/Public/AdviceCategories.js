import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { agency, agent, bg } from '../../assets/img';
import { connect } from 'react-redux';
import { getAdviceCategories } from '../../actions/AdviceActions';
import Newsletter from '../../component/Newsletter';


class AdviceCategories extends Component {
  constructor(props) {
    super(props);
    this.props.getAdviceCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <Fragment>
      <section className="slider ">
          <div id="osahanslider " className="carousel slide " data-ride="carousel ">
              <div className="carousel-inner " role="listbox" style={{ height: '300px' }}>
                  <div className="carousel-item active " style={{ backgroundImage: `url(${bg})` }}>
                      <div className="overlay "></div>
                  </div>
              </div>
          </div>
          <div className="slider-form ">
              <div className="container ">
                  <h1 className="text-center text-white mb-5 ">Tropical Information on Nigeria Real Estate Arranged in Categories</h1>
  
              </div>
          </div>
  
      </section>
  
      <section className="container-fluid bg-grey ">
          <div className="container ">
              <div className="row pt-5 pb-3 ">
                  <div className="col-sm-6 ">
                      <h3 className="py-3 ">Categories</h3>
                  </div>
                  
                  <div className="col-sm-2 ">
                      <div className="line "></div>
                  </div>
              </div>
  
              <div className="row ">
                  <div className="col-sm-8 ">
                      <div className="row py-4 ">
                        { categories.map(category =>
                        <div className="col-lg-6 py-2 ">
                            <Link key={category.id} to={`/propertyadvice/${category.slug}`}>
                                <div className="card bg-white mx-3 ">
                                    <img alt="" src={agency} />
                                    <div className="card-footer bg-white ">
                                        <h6 className="card-subtitle mb-2 text-muted ">{ category.name }</h6>
                                    </div>
                                </div>
                          </Link> 
                        </div>
                        ) }
                        
                      </div>
  
                  </div>
  
                  <div className="col-sm-4 ">
                      <div className="row ">
                          <div className="col-sm-12 pb-3 ">
                              <div className="card ml-5 " height="18rem ">
                                  <h5 className=" px-3 py-3 ">
                                      Search Castles
                                  </h5>
                                  <div className="card-footer " style={{ background: '#FF8C00' }}>
                                      <input type="text " placeholder="e.g Lekki, Lagos " className="form-control " style={{  minHeight: '50px' }}/>
                                  </div>
                              </div>
                          </div>
                      </div>
  
                      <div className="row ">
                          <div className="col-sm-12 py-3 ">
                              <div className="card ml-5 " height="18rem ">
                                  <img src={agent} height="227px " className="card-img-top " alt="... " style={{ height: '227px' }} />
                                  <div className="card-footer btn btn-outline-dark " style={{ background: '#FF8C00'}}>
                                      View properties for sale at Ikoyi
                                  </div>
                              </div>
                          </div>
  
                      </div>
  
                      <div className="row ">
                          <div className="col-sm-12 py-3 ">
                              <div className="card ml-5 " height="18rem ">
                                  <img src={agent} height="227px " className="card-img-top " alt="... " style={{  height: '227px'}} />
                                  <div className="card-footer btn btn-outline-dark " style={{ background: '#FF8C00'}}>
                                      View properties for sale at Ikoyi
                                  </div>
                              </div>
                          </div>
  
                      </div>
  
                  </div>
              </div>
          </div>
  
      </section>

      <Newsletter />
        
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  categories: state.advice.categories
})

export default connect(mapStateToProps, { getAdviceCategories })(AdviceCategories)