import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAdvice, getArticlesCategory, loadPage } from '../../actions';
import FeaturedPosts from '../../component/FeaturedPosts';


class Advice extends Component {

  constructor(props){
    super(props);
    
    this.adviceSlug = this.props.match.params.advice
    this.catSlug = this.props.match.params.category
  }

  async componentDidMount(){      
    this.props.getAdvice(this.adviceSlug);
    this.props.getArticlesCategory(this.catSlug);
    this.props.loadPage();
  }

  createMarkup = data => {
    return {__html: data};
  }

  render() {
    const { article, category } = this.props

    const relatedPosts = category.data.length? <FeaturedPosts articles={category.data} nullId={article.id} />: <p>There are no related post</p>
    return (
      <div>
      <section className="container slider mt-4">
          <div id="osahanslider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox" style={{ height: '300px' }}>
                  <div className="carousel-item active" style={{ backgroundImage: `url('${article.image}')` }}>
                      <div className="overlay"></div>
                  </div>
              </div>
          </div>
  
          <ul className="col-sm-12 d-flex flex-row justify-content-between align-items-center px-lg-4" style={{ background: '#000000', height: '72px' }}>
              <li className="nav-item text-white">
                  {article.created_at}
              </li>
              <li className="nav-item text-white">
                  Castles Property
              </li>
              <li className="nav-item text-white">
                  Posted in { article.category }
              </li>
              <li className="nav-item text-white">
                  {article.comments.length} Comment
              </li>
          </ul>
      </section>
  
      <section className="container-fluid bg-grey ">
          <div className="container py-5">
              <h3>{article.title}</h3>
              <p dangerouslySetInnerHTML={this.createMarkup(article.text)} />
              
              <p style={{ fontSize: '20px', lineHeight: '36px' }} className="py-3">
                  Read Also: {article.previous? <Link to={`/propertyadvice/${article.category_slug}/${article.previous.slug}`}>{article.previous.title}</Link> : ''}
              </p>
  
              <hr />
              <div className=" container py-2 text-right">
                  <a href="# " className="footer "><i className="fa fa-facebook px-2 "></i></a>
                  <a href="# " className="footer "><i className="fa fa-instagram px-2 "></i></a>
                  <a href="# " className="footer "><i className="fa fa-google px-2 "></i></a>
              </div>
              <hr />
              <div className="container">
                  <div className="row">
                      <div className="col-sm-6 text-left">
                          <p style={{ fontSize: '20px', lineHeight: '30px' }}>
                            {article.previous? <span>Previous Post: <Link to={`/propertyadvice/${article.category_slug}/${article.previous.slug}`}>{article.previous.title}</Link></span> : ''}
                          </p>
                      </div>
                      <div className="col-sm-6 text-right">
                          <p style={{ fontSize: '20px', lineHeight: '30px' }}>
                            {article.next? <span>Next Post: <Link to={`/propertyadvice/${article.category_slug}/${article.next.slug}`}>{article.next.title}</Link></span> : ''}
                          </p>
                      </div>
                  </div>
              </div>
              <hr />
  
              <div className="container py-3">
                  <div className="row">
                      <div className="col-sm-2 text-left">
                          <p className="d-flex align-content-center justify-content-center" style={{ width: '120px', height: '120px', background: '#ffffff', borderRadius: '50%' }}>
                              <img src="../img/icon/user-tsp.png" alt="" className="my-4" />
                          </p>
                      </div>
                      <div className="col-sm-6 text-left py-3">
                          <p style={{ fontSize: '20px', lineHeight: '30px', fontWeight: 600}}>
                              Castle Property
                          </p>
  
                          <p style={{ fontSize: '20px', lineHeight: '30px' }}>
                              First and Best Source of Information on Real Estate
                          </p>
                      </div>
                  </div>
              </div>
  
              <hr />
  
              <div className="container py-3">
                  <div className="row">
                      <div className="col-sm-12 text-left py-3 px-0 d-flex">
                          <p style={{ fontSize: '20px', lineHeight: '30px', fontWeight: '500' }}>
                              Leave a Reply
                          </p>
                          <div className="mx-3 mt-3" style={{ width: '94px', height: '2px', background: '#FE8C00' }}>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-sm-12">
                          <div className="form-group">
                              <label htmlFor="comment">Comment</label>
                              <textarea name="comment" className="form-control" id="comment" rows="10" style={{ background: '#ffffff' }}></textarea>
                          </div>
                          <button className="btn bg-orange pull-right text-white">Post a Comment</button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  
      <section className="py-4 bg-grey">
          <div className="container ">
              <div className="row">
                  <div className="col-sm-6">
                      <h3 className="mb-4">Related Posts</h3>
                  </div>
  
              </div>
              {relatedPosts}
          </div>

      </section>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  article: state.advice.article,
  category: state.advice.category
})

export default connect(mapStateToProps, { getAdvice, getArticlesCategory, loadPage })(Advice);