import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAdvice, getArticlesCategory, loadPage, postComment } from '../../actions';
import FeaturedPosts from '../../component/FeaturedPosts';
import { UNLOAD_PAGE } from '../../actions/types';
import config from '../../config';


class Advice extends Component {

  constructor(props){
    super(props);
    
    this.adviceSlug = this.props.match.params.advice
    this.catSlug = this.props.match.params.category
  }

  state = {
    name: '',
    email: '',
    comment: '',
    article_id: ''
  }

  handleInput = e => this.setState({ [e.target.name]: e.target.value });

  async componentDidMount(){    
      await this.props.getAdvice(this.adviceSlug);
      document.title = await `${config.pageTitle} ${this.props.article.title}`;  
    await this.props.getArticlesCategory(this.catSlug);
    await this.props.loadPage();
    if(this.props.user !== null) {
        await this.setState({
            name: this.props.user.name,
            email: this.props.user.email,
        })
    }else{
        await this.setState({
            name: '',
            email: '',
        })
    }
    await this.setState({
        article_id: this.props.article.id,
    })
  }

  saveComment = async e => {
    e.preventDefault();
    await this.props.loadPage(UNLOAD_PAGE);
    await this.props.postComment(this.state);
    await this.props.getAdvice(this.adviceSlug);
    await this.setState({
        name: '',
        email: '',
        comment: ''
      })
    await this.props.loadPage();     
  }

  createMarkup = data => {
    return {__html: data};
  }

  render() {
    const { article, category } = this.props

    const comments = article.comments.length? article.comments.map(comment => 
        <div key={comment.id} className="row">
            <div className="col-sm-2 text-left">
                <p className="d-flex align-content-center justify-content-center" style={{ width: '120px', height: '120px', background: '#ffffff', borderRadius: '50%' }}>
                    <img src="../img/icon/user-tsp.png" alt="" className="my-4" />
                </p>
            </div>
            <div className="col-sm-6 text-left py-3">
                <p style={{ fontSize: '20px', lineHeight: '30px', fontWeight: 600}}>
                    {comment.user.name}
                </p>

                <p style={{ fontSize: '20px', lineHeight: '30px' }}>
                    {comment.comment}
                </p>
            </div>
            <div className="col-12">
                <hr />
            </div>
        </div>
        ): <p>There are no comment for this article</p>

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
                {comments}
              </div>
  
  
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
                      <form onSubmit={this.saveComment} className="col-sm-12">
                          <div className="form-group">
                              <label htmlFor="comment">Comment</label>
                              <textarea onChange={this.handleInput} value={this.state.comment} name="comment" className="form-control" required id="comment" rows="10" style={{ background: '#ffffff' }}></textarea>
                          </div>
                          {this.props.user === null? <div className="form-group">
                              <input required onChange={this.handleInput} placeholder="Enter name" type="text" name="name" value={this.state.name} className="my-2 bg-white form-control"/>

                              <input required onChange={this.handleInput} placeholder="Enter email address" type="email" name="email" value={this.state.email} className="my-2 bg-white form-control"/>
                          </div>: null}

                          <button className="btn bg-orange pull-right text-white">Post Comment</button>
                      </form>
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
  user: state.auth.user,
  article: state.advice.article,
  category: state.advice.category
})

export default connect(mapStateToProps, { getAdvice, getArticlesCategory, loadPage, postComment })(Advice);