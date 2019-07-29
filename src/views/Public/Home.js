import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import config from '../../config'
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

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
            filterSearchTerm:""
        }
        this.getPropertyTypes = this.getPropertyTypes.bind(this)
        this.getStates = this.getStates.bind(this)
        this.getLocalityByState = this.getLocalityByState.bind(this)
        this.getCategories = this.getCategories.bind(this)
        this.processSearch = this.processSearch.bind(this)
        this.getFeatures = this.getFeatures.bind(this)
    }
    componentWillMount(){
        this.getFeatures()
        this.searchByArea("lekki")
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
    componentDidMount() {
        this.getPropertyTypes()
        this.getStates()
        this.getCategories()
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
        let params = {
            bedrooms: this.state.bedroom.value,
            state_id:this.state.state.value,
            locality_id:this.state.locality,
            status_id:this.state.category.value,
            type_id:this.state.propertyType.value,
            min_price: this.state.minPrice.value,
            max_price:this.state.maxPrice.value,
            bathrooms:this.state.bathroom.value,
            toilets:this.state.toilet.value
        }
        var url = new URL(`${config.BASE_URL}/search`)
        Object.keys(params).forEach(key=> url.searchParams.append(key,params[key]))
        const res = await fetch(url.href,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                searchResult:payload.data.data,
            })
        }else{
            alert('Something went wrong')
        }
    }
    getFeatures = async () => {
        const res = await fetch(`${config.BASE_URL}/features`,{
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                featured:payload.data,
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
        const {propertyType, bedroom, state,locality, bathroom, toilet, category, minPrice, maxPrice} = this.state
        var f = this.state.featured.slice(0,8)
        let features = f.map((item)=>{
            return (
                <div class="col-lg-3 py-3" key={item.id}>
                    <div class="card" style={{minHeight: '509px', background: "url('assets/img/featured-properties/1.png')", backgroundSize: 'cover'}}>
                        <div class="overlay"></div>
                        <h5 class="text-center" style={{position: 'absolute', right: '0', left: '0', bottom: '72px', color: '#ffffff'}}>
                            {item.name}
                        </h5>
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
        let searchBar = () => {
            return (
            <div>
                <section class="container" >
                    <ul class="row d-flex flex-row justify-content-between align-items-center px-lg-4">
                        <li class="col-lg-2">
                            <div class="">
                                <label for="propertyType" style={{color:"white"}}>Property Type</label>
                                <Select
                                    value={propertyType}
                                    onChange={this.handlePropertyType}
                                    options={pTypes}
                                />
                            </div>
                        </li>
                        <li class="col-lg-2">
                            <div class="">
                                <label for="mobileno" style={{color:"white"}}>Bedrooms</label>
                                <Select
                                    options={bedrooms}
                                    value={bedroom}
                                    onChange={this.handleBedroom}
                                />
                            </div>
                        </li>
                        <li class="col-lg-2">
                            <div class="">
                                <label for="mobileno" style={{color:"white"}}>Bathrooms</label>
                                <Select
                                    options={bedrooms}
                                    value={bathroom}
                                    onChange={this.handleBathroom}
                                />
                            </div>
                        </li>
                        <li class="col-lg-2">
                            <div class="">
                                <label for="mobileno" style={{color:"white"}}>Toilets</label>
                                <Select
                                    options={bedrooms}
                                    value={toilet}
                                    onChange={this.handleToilet}
                                />
                            </div>
                        </li>
                        <li class="col-lg-2">
                            <div class="">
                                <label for="category" style={{color:"white"}}>Category</label>
                                <Select
                                    options={categories}
                                    value={category}
                                    onChange={this.handleCategory}
                                />
                            </div>
                        </li>
                        <li class="col-lg-2" >
                            <div class="">
                                <label for="mobileno" style={{color:"white"}}>Min Price</label>
                                    <Select
                                        options={prices}
                                        value={minPrice}
                                        onChange={this.handleMinP}
                                    />
                            </div>
                        </li>
                    </ul>
                </section>
                <section class="container"  style={{paddingBottom:"20px"}}>
                    <ul class="row d-flex flex-row justify-content-between align-items-center px-lg-4">
                        <li class="col-lg-2" >
                            <div class="">
                                <label for="mobileno" style={{color:"white"}}>Max Price</label>
                                    <Select
                                        options={prices}
                                        value={maxPrice}
                                        onChange={this.handleMaxP}
                                    />
                            </div>
                        </li>
                        <li class="col-lg-2">
                            <button onClick={this.processSearch} class="btn btn-lg text-white search-btn d-flex justify-content-center align-items-center">
                                <i class="fa fa-search"></i>
                            </button>
                        </li>
                    </ul>
                </section>
            </div>
            )
        }
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
                            <div class=" container tab-content" id="pills-tabContent" >
                                <div  class="container search-home tab-pane fade show active" id="pills-sale" role="tabpanel" aria-labelledby="pills-sale-tab">
                                    <form action="" class="d-flex justify-content-center align-items-center">
                                        <div class="col-md-9 form-group form-group px-lg-5 py-4 mb-0">
                                            {/* <Select
                                                options={prices}
                                                value={maxPrice}
                                                onChange={this.handleMaxP}
                                            /> */}
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
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"style={{backgroundColor:"#1C2431"}}>
                                    <form action="" class="d-flex justify-content-center align-items-center">
                                        <div class="col-md-9 form-group form-group px-lg-5 py-4 mb-0">
                                            <input type="search" name="" class="form-control py-4" id="" placeholder="Search the area you want the house" />
                                        </div>
                                    </form>
                                    {searchBar()}
                                </div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" style={{backgroundColor:"#1C2431"}}>
                                    <form action="" class="d-flex justify-content-center align-items-center">
                                        <div class="col-md-9 form-group form-group px-lg-5 py-4 mb-0">
                                            <input type="search" name="" class="form-control py-4" id="" placeholder="Search the area you want the house" />
                                        </div>
                                    </form>
                                    {searchBar()}
                                </div>
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
                                    {features}
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