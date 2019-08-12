import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Redirect, Link} from 'react-router-dom'
import config from '../../config'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'
import { searchProperties, getAdverts } from '../../actions';
import Newsletter from '../../component/Newsletter';
import { property, leftArrow, rightArrow } from '../../assets/img';
import { GET_SCHOOLS, GET_LANDS, GET_HOUSES, GET_APARTMENTS } from '../../actions/types';
import FeaturedPosts from '../../component/FeaturedPosts';


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            featured:[],
            propertyTypes : [],
            states:[],
            localities:[],
            categories:[],
            propertyType:{},
            bedroom:{},
            state:{},
            locality:4,
            bathroom:{},
            toilet:{},
            category:{},
            minPrice:{},
            maxPrice:{},
            searchResult:["x"],
            filterSearchTerm:"",
            status_id:1
        }
        this.getPropertyTypes = this.getPropertyTypes.bind(this)
        this.getStates = this.getStates.bind(this)
        this.getLocalityByState = this.getLocalityByState.bind(this)
        this.getCategories = this.getCategories.bind(this)
        this.processSearch = this.processSearch.bind(this)
        this.getFeatures = this.getFeatures.bind(this)
        this.getFeatures()
        this.searchByArea("")
        props.getAdverts()
        props.searchProperties({ type_id: 19 }, GET_SCHOOLS);
        props.searchProperties({ type_id: 15 }, GET_LANDS);
        props.searchProperties({ type_id: 14 }, GET_HOUSES);
        props.searchProperties({ type_id: 2 }, GET_APARTMENTS);
    }
    componentDidMount() {
        this.getPropertyTypes()
        this.getStates()
        this.getCategories()
    }

    handlePropertyType = (propertyType) => {
        this.setState({
            propertyType
        })
    }
    handleBedroom = (bedroom) => {
        this.setState({
            bedroom
        })
    }
    handleLocality = (locality) => {
        this.setState({
            locality
        })
    }
    handleBathroom = (bathroom) => {
        this.setState({
            bathroom
        })
    }
    handleToilet = (toilet) => {
        this.setState({
            toilet
        })
    }
    handleCategory = (category) => {
        this.setState({
            category
        })
    }
    handleMinP = (minPrice) => {
        this.setState({
            minPrice
        })
    }
    handleMaxP = (maxPrice) => {
        this.setState({
            maxPrice
        })
    }
    onSearchChange = (filterSearchTerm) => {
        this.setState({filterSearchTerm})
        this.searchByArea(filterSearchTerm)
        return filterSearchTerm
    }
    getPropertyTypes = async () => {
        const res = await fetch(`${config.BASE_URL}/property_types`,{
            method:'GET',
            header:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                propertyTypes:payload.data,
            })
        }else{
            alert('Something went wrong')
        }
    }
    getStates = async () => {
        const res = await fetch(`${config.BASE_URL}/states`,{
            method:'GET'
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                states:payload.data,
            })
        }else{
            alert('Something went wrong')
        }
    }
    getLocalityByState = async (id) => {
        const res = await fetch(`${config.BASE_URL}/cities/${id}`,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Çontent-Type':'application/json'
            }
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                localities:payload.data,
            })
        }else{
            alert('Something went wrong')
        }
    }
    getCategories = async () => {
        const res = await fetch(`${config.BASE_URL}/property_statuses`,{
            method:'GET'
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                categories:payload.data,
            })
        }else{
            alert('Something went wrong')
        }
    }
    processSearch = async () => {
        const params = {
            bedrooms: this.state.bedroom.value,
            state_id:this.state.state.value,
            locality_id:this.state.locality.value,
            status_id:this.state.status_id,
            type_id:this.state.propertyType.value,
            min_price: this.state.minPrice.value,
            max_price:this.state.maxPrice.value,
            bathrooms:this.state.bathroom.value,
            toilets:this.state.toilet.value
        }
        console.log(params)
        this.props.searchProperties(params);

    }
    getFeatures = async () => {
        const res = await fetch(`${config.BASE_URL}/adverts`,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        const payload = await res.json();
        if (payload.status === 1){
            console.log(payload)
            this.setState({
                featured:payload.data.data,
            })
        }else{
            alert('Something went wrong')
        }
    }
    searchByArea = async (param) => {
        const res = await fetch(`${config.BASE_URL}/properties/filter?search=${param}`,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                localities:payload.data,
            })
            return
        }else{
            alert('Something went wrong')
        }
    }
    loadOptions = async (value, callback) => {
        await this.searchByArea(value)
        setTimeout(() => {
          callback(this.state.localities);
        }, 1000);
    };
    render() {
        if (this.state.searchResult.length < 1 ){
            return (
                <Redirect to={{
                    pathname: '/search',
                    state:{properties:this.state.searchResult}
                }}/>
            )
        }
        let defaultOptions = this.state.localities.map((item)=>{
            return {
                value:item.id,
                label:item.label
            }
        })
        const {propertyType, bedroom, state, locality, bathroom, toilet, category, minPrice, maxPrice} = this.state
        var f = this.state.featured.slice(0,4)
        let features = f.map((item)=>{
            return (
                <div className="col-lg-3 py-3" key={item.id}>
                    <div className="card" style={{minHeight: '509px', background: `${item.image}`, backgroundSize: 'cover'}}>
                        <div className="overlay"></div>
                        <Link to={`/adverts/${item.id}`}>
                            <h5 className="text-center" style={{position: 'absolute', right: '0', left: '0', bottom: '72px', color: '#ffffff'}}>
                                {item.title}
                            </h5>
                        </Link>
                    </div>
                </div>
            )
        })
        let pTypes = this.state.propertyTypes.map((item)=>{
            return {
                value:item.id, label:item.name 
            }
        })
        let bedrooms = [
            {value:1,label:"1"},
            {value:2,label:"2"},
            {value:3,label:"3"},
            {value:4,label:"4"},
            {value:5,label:"5"},
            {value:6,label:"6"},
            {value:7,label:"7"},
        ]
        let states = this.state.states.map((item)=>{
            return {
                value:item.id,label:item.name
            }
        })
        let localities = this.state.localities.map((item)=>{
            return {
                value:item.id, label:item.name
            }
        })
        let categories = this.state.categories.map((item)=>{
            return {
                value:item.id, label:item.name
            }
        })
        let prices = [
            {value:0, label:"0"},
            {value:100000, label:"₦ 100,000"},
            {value:250000, label:"₦ 250,000"},
            {value:1000000, label:"₦ 1,000,000"},
            {value:2000000, label:"₦ 2,000,000"},
            {value:5000000, label:"₦ 5,000,000"},
            {value:10000000, label:"₦ 10,000,000"},
            {value:20000000, label:"₦ 20,000,000"},
            {value:40000000, label:"₦ 40,000,000"},
            {value:60000000, label:"₦ 60,000,000"},
            {value:80000000, label:"₦ 80,000,000"},
            {value:100000000, label:"₦ 100,000,000"},
            {value:150000000, label:"₦ 150,000,000"},
        ]
        let searchBar = (category) => {
            return (
            <div>
                <section className="container" >
                    <ul className="row d-flex flex-row justify-content-between align-items-center px-lg-4">
                        <li className="col-lg-2">
                            <div className="">
                                <label htmlFor="propertyType" style={{color:"white"}}>Property Type</label>
                                <Select
                                    value={propertyType}
                                    name="propertyType"
                                    onChange={this.handlePropertyType}
                                    options={pTypes}
                                />
                            </div>
                        </li>
                        <li className="col-lg-2">
                            <div className="">
                                <label htmlFor="mobileno" style={{color:"white"}}>Bedrooms</label>
                                <Select
                                    options={bedrooms}
                                    value={bedroom}
                                    name="bedroom"
                                    onChange={this.handleBedroom}
                                />
                            </div>
                        </li>
                        <li className="col-lg-2">
                            <div className="">
                                <label htmlFor="mobileno" style={{color:"white"}}>Bathrooms</label>
                                <Select
                                    options={bedrooms}
                                    value={bathroom}
                                    name="bathroom"
                                    onChange={this.handleBathroom}
                                />
                            </div>
                        </li>
                        <li className="col-lg-2">
                            <div className="">
                                <label htmlFor="mobileno" style={{color:"white"}}>Toilets</label>
                                <Select
                                    options={bedrooms}
                                    value={toilet}
                                    name="toilet"
                                    onChange={this.handleToilet}
                                />
                            </div>
                        </li>
                        {/* <li className="col-lg-2">
                            <div className="">
                                <label htmlFor="category" style={{color:"white"}}>Category</label>
                                <Select
                                    options={categories}
                                    value={category}
                                    name="category"
                                    onChange={this.handleCategory}
                                />
                            </div>
                        </li> */}
                        <li className="col-lg-2" >
                            <div className="">
                                <label htmlFor="mobileno" style={{color:"white"}}>Min Price</label>
                                    <Select
                                        options={prices}
                                        value={minPrice}
                                        name="minPrice"
                                        onChange={this.handleMinP}
                                    />
                            </div>
                        </li>
                        <li className="col-lg-2" >
                            <div className="">
                                <label htmlFor="mobileno" style={{color:"white"}}>Max Price</label>
                                    <Select
                                        options={prices}
                                        value={maxPrice}
                                        name="maxPrice"
                                        onChange={this.handleMaxP}
                                    />
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="container"  style={{paddingBottom:"20px"}}>
                    <ul className="row d-flex flex-row justify-content-between align-items-center px-lg-4">
                        <li className="col-lg-2">
                            <button onClick={this.processSearch} className="btn btn-lg text-white search-btn d-flex justify-content-center align-items-center">
                                <i className="fa fa-search"></i>
                            </button>
                        </li>
                    </ul>
                </section>
            </div>
            )
        }
        const { lands, schools, houses, apartments } = this.props.explore
        return ( 
            <div>
                <section className="slider">
                    <div id="osahanslider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active" style={{backgroundImage: "url('assets/img/banner2.jpg')"}}>
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-form">
                        <div className="container">
                            <h1 className="text-center text-white mb-5">Discover the best property deals in Nigeria</h1>

                        </div>
                    </div>
                    <ul className=" container nav nav-pills mb-3 search-type d-flex align-items-center justify-content-center" id="pills-tab" role="tablist" style={{height: '76px'}}>
                        <li className="nav-item d-flex align-content-center">
                            <Link className="nav-link py-4 active" onClick={()=>this.setState({status_id:1})} id="pills-home-tab" data-toggle="pill" to="#pills-sale" role="tab" aria-controls="pills-home" aria-selected="true">Sale</Link>
                        </li>
                        <li className="nav-item d-flex align-content-center">
                            <Link className="nav-link py-4"  onClick={()=>this.setState({status_id:2})} id="pills-profile-tab" data-toggle="pill" to="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Rent</Link>
                        </li>
                        <li className="nav-item d-flex align-content-center">
                            <Link className="nav-link py-4"  onClick={()=>this.setState({status_id:3})} id="pills-contact-tab" data-toggle="pill" to="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Short Let</Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <Link className="nav-link py-4"  onClick={()=>this.setState({status_id:4})} id="pills-contact-tab" data-toggle="pill" to="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Joint Venture</Link>
                        </li>
                    </ul>
                    <div className=" container tab-content" id="pills-tabContent" >
                        <div  className="container search-home tab-pane fade show active" id="pills-sale" role="tabpanel" aria-labelledby="pills-sale-tab">
                            <form action="" className="d-flex justify-content-center align-items-center">
                                <div className="col-md-9 form-group form-group px-lg-5 py-4 mb-0">
                                    <AsyncSelect
                                        cacheOptions
                                        loadOptions={this.loadOptions}
                                        defaultOptions={defaultOptions}
                                        onInputChange={this.updateLocalities}
                                    />
                                </div>
                            </form>
                            {searchBar()}
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"style={{backgroundColor:"#1C2431"}}>
                            <form action="" className="d-flex justify-content-center align-items-center">
                                <div className="col-md-9 form-group form-group px-lg-5 py-4 mb-0">
                                    <AsyncSelect
                                        cacheOptions
                                        loadOptions={this.loadOptions}
                                        defaultOptions={defaultOptions}
                                        onInputChange={this.updateLocalities}
                                    />
                                </div>
                            </form>
                            {searchBar()}
                        </div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" style={{backgroundColor:"#1C2431"}}>
                            <form action="" className="d-flex justify-content-center align-items-center">
                                <div className="col-md-9 form-group form-group px-lg-5 py-4 mb-0">
                                    <AsyncSelect
                                        cacheOptions
                                        loadOptions={this.loadOptions}
                                        defaultOptions={defaultOptions}
                                        onInputChange={this.updateLocalities}
                                    />
                                </div>
                            </form>
                            {searchBar()}
                        </div>
                    </div>
                </section>

                <section className="container section-padding">
                    <div className="row px-4 pb-3">
                        <div className="col-sm-6">
                            <h3 className="py-2">Featured Adverts</h3>
                        </div>

                        <div className="col-sm-2">
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {features}
                        </div>
                    </div>
                </section>


                <section>
                    <div className="container slider">
                        <div id="osahanslider" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#osahanslider" data-slide-to="0" className="active"></li>
                                <li data-target="#osahanslider" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active" style={{backgroundImage: "url('assets/img/castlemag.jpg')"}}>
                                    <div className="overlay"></div>
                                </div>
                                <div className="carousel-item" style={{backgroundImage: "url('assets/img/highbrow.jpg')"}}>
                                    <div className="overlay"> </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-form">
                            <div className="container">
                                <h1 className="text-center text-white mb-5" style={{fontSize: '2rem'}}><strong>Professional Insight into Property Market in Nigeria</strong></h1>

                                <h3 className="text-center">
                                    Download<Link to="/download-magazine" style={{fontWeight: '800'}}> Castles Magazine</Link> | <Link to="#" style={{fontWeight: '800'}}>Highbrow</Link>
                                </h3>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding footer mt-5">
                    <div className="container ">
                        <h3 className="mb-4 text-center">Explore Property</h3>
                        <h5 className="text-center text-muted pb-5">We provide various type, Find propertiesin your city</h5>
                        <div className="row ">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 py-2">
                                        <Link to="propertylisting.html">
                                            <div className="card" style={{minHeight: '320px', background: "url('assets/img/explore/1.png')", backgroundSize:'cover'}}>
                                                <div className="overlay"></div>
                                                <div className="text-center" style={{position: 'absolute', right: '0', left: '0', bottom:'130px', color: '#ffffff'}}>
                                                    <h5 className="text-white">Schools</h5>
                                                    <h6 className="text-white"><span style={{color: '#FE8C00'}}>{schools}</span> Properties</h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>


                                    <div className="col-lg-3 py-2">
                                        <Link to="propertylisting.html">
                                            <div className="card" style={{minHeight: '320px', background: "url('assets/img/explore/2.png')", backgroundSize:'cover'}}>
                                                <div className="overlay"></div>
                                                <div className="text-center" style={{position: 'absolute', right: '0', left: '0', bottom:'130px', color:' #ffffff'}}>
                                                    <h5 className="text-white">Lands</h5>
                                                    <h6 className="text-white"><span style={{color: '#FE8C00'}}>{lands}</span> Properties</h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-lg-3 py-2">
                                        <Link to="propertylisting.html">
                                            <div className="card" style={{minHeight: '320px', background: "url('assets/img/apartment.jpg')", backgroundSize:'cover'}}>
                                                <div className="overlay"></div>
                                                <div className="text-center" style={{position: 'absolute', right: '0', left: '0', bottom:'130px', color: '#ffffff'}}>
                                                    <h5 className="text-white">Apartment</h5>
                                                    <h6 className="text-white"><span style={{color: '#FE8C00'}}>{apartments}</span> Properties</h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="col-lg-3 py-2">
                                        <Link to="propertylisting.html">
                                            <div className="card" style={{minHeight: '320px', background: "url('assets/img/house.jpg')", backgroundSize:'cover'}}>
                                                <div className="overlay"></div>
                                                <div className="text-center" style={{position: 'absolute', right: '0', left: '0', bottom:'130px', color: '#ffffff'}}>
                                                    <h5 className="text-white">Houses</h5>
                                                    <h6 className="text-white"><span style={{color: '#FE8C00'}}>{houses}</span> Properties</h6>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>




                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-4 bg-grey">
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3 className="mb-4">Property News</h3>
                                <h5 className="text-muted pb-5">Latest update of Nigerian real estate market </h5>
                            </div>
                        </div>

                        
                    </div>
                </section>
                
                <Newsletter />
            </div>
        )

    }

}
const mapStateToProps = state => ({
    adverts: state.utility.adverts,
    explore: state.utility.explore,
})

export default connect(mapStateToProps, { searchProperties, getAdverts })(Home);