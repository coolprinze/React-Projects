import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { agency, bg } from '../../assets/img';
import { connect } from 'react-redux';
import { getAdviceCategories, loadPage } from '../../actions';
import Newsletter from '../../component/Newsletter';
import SideBar from '../../component/SideBar';
import config from '../../config';


class AdviceCategories extends Component {

    async componentDidMount() {
        document.title = await `${config.pageTitle} Articles Categories`;
        await this.props.getAdviceCategories();
        await this.props.loadPage();

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
                    <div className="col-md-8 ">
                        <div className="row py-4 ">
                        { categories.map(category =>
                        <div key={category.id} className="col-lg-4 col-sm-6 py-2 ">
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

                    <SideBar />


                
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

export default connect(mapStateToProps, { getAdviceCategories, loadPage })(AdviceCategories)