import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux';
import { paBg, agency } from '../../assets/img';
import { Link } from 'react-router-dom';
import { getArticlesCategory, loadPage } from '../../actions';
import Paginate from '../../component/Paginate';

class AdviceCategory extends Component {
    constructor(props) {
        super(props);
        this.slug = this.props.match.params.category
    }

    async componentDidMount() {
        await this.props.getArticlesCategory(this.slug);
        await this.props.loadPage();

    }


    render() {
    const { category } = this.props;

    const articles = category.data.length? category.data.map(article => 
        
        <div className="col-lg-4 py-2 " key={article.id}>
        <div className="card mx-3" style={{ minHeight: '323px', background: 'none', border: 'none' }}>
            <Link to={`/propertyadvice/${this.slug}/${article.slug}`}>
                <img src={article.image} alt="" />
                <div className="card-footer text-center" style={{ background: 'none'}}>
                    <h6 className="card-subtitle mb-2 text-muted" style={{ fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>{article.title}</h6>
                    <p className="pt-2" style={{ fontSize: '14px', lineHeight: '24px' }}>{article.text.substring(0, 70)} </p>
                    <p style={{ fontSize: '12px', lineHeight: '24px', textAlign: 'center', color: '#FE8C00' }}>{article.created_at} | {article.comments_count} comments</p>
                </div>
            </Link>
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
                    <h1 className="text-center text-white mb-5" style={{ fontSize: '40px' }}>Viewing A Category of Articles</h1>
                    {/* <p className="text-center text-white" style={{ fontSize: '32px', lineHeight: '36px' }}>Read about Architecture & Interior Design with a Nigerian thrust.</p> */}

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

        <Paginate data={this.props.category} />  
        </Fragment>
    )
    }
}

const mapStateToProps = state => ({
  category: state.advice.category
})

export default connect(mapStateToProps, { getArticlesCategory, loadPage })(AdviceCategory)
