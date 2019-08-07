import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux';
import { paBg, agency } from '../../assets/img';
import { Link } from 'react-router-dom';
import { getArticlesCategory } from '../../actions/AdviceActions';

class AdviceCategory extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    const slug = this.props.match.params.category
    this.props.getArticlesCategory(slug);
  }


  render() {
    const { category } = this.props;

    const articles = category.length? category.map(article => 
      
      <div className="col-lg-4 py-2 ">
        <div className="card mx-3" style={{ minHeight: '323px', background: 'none', border: 'none' }}>
            <img src={agency} alt="" />
            <div className="card-footer text-center" style={{ background: 'none'}}>
                <h6 className="card-subtitle mb-2 text-muted" style={{ fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>Decoration/Luxury: A New Idea of Safe by Agresti</h6>
                <p className="pt-2" style={{ fontSize: '14px', lineHeight: '24px' }}>Agresti is a 6o year old Italian company which has come to be known for stylish safes </p>
                <p style={{ fontSize: '12px', lineHeight: '24px', textAlign: 'center', color: '#FE8C00' }}>June 13, 2019 | 5 comments | 10 min read</p>
            </div>
        </div>
      </div>      
    ): <p>There are no article in this category</p>

    return (
      <Fragment>
      <section className="container slider mt-4">
          <div id="osahanslider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox" style={{ height: '300px' }}>
                  <div className="carousel-item active" style={{ backgroundImage: `url(${paBg})` }}>
                      <div className="overlay"></div>
                  </div>
              </div>
          </div>
          <div className="slider-form">
              <div className="container">
                  <h1 className="text-center text-white mb-5" style={{ fontSize: '40px' }}>DECORE & ARCHITECTURE</h1>
                  <p className="text-center text-white" style={{ fontSize: '32px', lineHeight: '36px' }}>Read about Architecture & Interior Design with a Nigerian thrust.</p>
  
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
                  <div className="col-sm-12 ">
                      <div className="row py-4 ">
                        {articles}
                      </div>
                  </div>
              </div>
          </div>
  
      </section>
  
      <section className="container d-flex justify-content-between align-items-center bg-white py-4">
          <h5>Showing 1 to 5 of 40 enteries</h5>
          <nav aria-label="Page navigation example">
              <ul className="pagination">
                  <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                      </Link>
                  </li>
                  <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                  <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                  <li className="page-item">
                      <Link className="page-link" to="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                      </Link>
                  </li>
              </ul>
          </nav>
      </section>
        
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  category: state.advice.category
})

export default connect(mapStateToProps, { getArticlesCategory })(AdviceCategory)
