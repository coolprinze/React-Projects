import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import config from '../../config'
import Header from "../../component/Header/UserHeader"


class AddProperty extends Component {
    constructor(props){
        super(props)
        this.state = {
            states:[],
            countries:[],
            localities:[],
            title:"",
            price:0,
            desc:"",
            address:"",
            state:"",
            locality:"",
            furnished:"",
            serviced:"",
            parking:"",
            totalArea:0,
            coveredArea:"",
            selectedCountry:0,
            selectedState:0,
            locality:0,
            bedroomNum: 0,
            bathroomNum:0,
            toiletNum:0
        }
        this.getStates = this.getStates.bind(this)
        this.getCountries = this.getCountries.bind(this)
        this.save = this.save.bind(this)
    }
    componentWillMount(){
        this.getStates()
        this.getCountries()
    }
    save(){
        console.log(this.state)
    }
    onChange =(e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
        if (e.target.id === "state"){
            this.getLocalityByState(parseInt(e.target.value))
        }
        if (e.target.id === "state"){
            this.getLocalityByState(parseInt(e.target.value))
        }
    }

    getCountries = async () => {
        const res = await fetch(`${config.BASE_URL}/countries`,{
            method:'GET'
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                countries:payload.data,
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
            method:'GET'
        })
        const payload = await res.json();
        if (payload.status === 1){
            this.setState({
                locality:payload.data,
            })
        }else{
            alert('Something went wrong')
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    render() {
        let countries = this.state.countries.map((item)=>{
            return <option value={item.phonecode}>{item.name}</option>
        })
        let states = this.state.states.map((item)=>{
            return <option value={item.id}>{item.name}</option>
        })
        let localities = this.state.localities.map((item)=>{
            return <option value={item.id}>{item.name}</option>
        })
        return ( 
            <React.Fragment>
                <Header />
                <section class="container-fluid bg-grey">
                    <div class="container py-5">
                        <div class="row bg-dark px-3 py-3 text-white nav-pills">
                            <div class="col-sm-3">
                                <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#editDetails" role="tab" aria-controls="v-pills-home" aria-selected="true">Property Details</a>
                            </div>
                            <div class="col-sm-3 text-muted">
                                <a class="nav-link" id="v-pills-edit-tab" data-toggle="pill" href="#pictures" role="tab" aria-controls="v-pills-home" aria-selected="true">Pictures</a>
                            </div>
                        </div>
                        <div class="row bg-white px-3 py-3 tab-content" id="v-pills-tabContent">
                            <div class="col-sm-12 tab-pane fade show active" id="editDetails" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div class="form-group pt-4">
                                    <div class="row">
                                        <div class="col col-sm-4">
                                            <label for="title">Title</label>
                                            <input type="text" class="form-control form-control-lg bg-white"  value={this.state.title} id="title" onChange={this.onChange}/>
                                        </div>
                                        <div class="col col-sm-4">
                                            <label for="address">Address</label>
                                            <input type="text" class="form-control form-control-lg bg-white" value={this.state.address} id="address" onChange={this.onChange}/>
                                        </div>
                                        <div class="col col-sm-4">
                                            <label for="price">Price</label>
                                            <input type="number" class="form-control form-control-lg bg-white" id="price" value={this.state.price} onChange={this.onChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group pt-4">
                                    <div class="row">
                                        <div class="col col-sm-12">
                                            <label for="description">Description</label>
                                            <textarea type="text" class="form-control form-control-lg bg-white" id="desc" onChange={this.onChange} value={this.state.desc}></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group pt-4">
                                    <div class="row">
                                        <div class="col">
                                            <label for="mobileno">Country</label>
                                            <select class="form-control" id="country" onChange={this.onChange} value={this.state.selectedCountry} class="form-control form-control-lg bg-white">
                                                {countries}
                                            </select>
                                        </div>
                                        <div class="col">
                                            <label for="mobileno">State</label>
                                            <select class="form-control" id="state" onChange={this.onChange} value={this.state.selectedState} class="form-control form-control-lg bg-white">
                                                {states}
                                            </select>
                                        </div>
                                        <div class="col">
                                            <label for="mobileno">Locality</label>
                                            <select class="form-control" id="localities" value={this.state.selectedLocality} class="form-control form-control-lg bg-white">
                                                {localities}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group pt-4">
                                    <div class="row">
                                        <div class="col">
                                            <label for="mobileno">Bedrooms</label>
                                            <input type="number" class="form-control form-control-lg bg-white" id="bedroomNum" value={this.state.bedroomNum} onChange={this.onChange} value={this.state.bedroomNum}/>                                            
                                        </div>
                                        <div class="col">
                                            <label for="mobileno">Bathrooms</label>
                                            <input type="number" class="form-control form-control-lg bg-white" id="bathroomNum" value={this.state.bathroomNum} onChange={this.onChange} value={this.state.bathroomNum}/>                                            
                                        </div>
                                        <div class="col">
                                            <label for="mobileno">Toilets</label>
                                            <input type="number" class="form-control form-control-lg bg-white" id="toiletNum" value={this.state.toiletNum} onChange={this.onChange} value={this.state.toiletNum}/>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group pt-4">
                                    <div class="row">
                                        <div class="col">
                                            <label for="mobileno">Furnished</label>
                                            <select class="form-control" id="furnished" value={this.state.furnished} onChange={this.onChange} class="form-control form-control-lg bg-white">
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </select>                                            
                                        </div>
                                        <div class="col">
                                            <label for="mobileno">Serviced</label>
                                            <select class="form-control" id="serviced" value={this.state.serviced} onChange={this.onChange} class="form-control form-control-lg bg-white">
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </select> 
                                        </div>
                                        <div class="col">
                                            <label for="mobileno">Covered Area</label>
                                            <input type="number" class="form-control form-control-lg bg-white" id="coveredArea" onChange={this.onChange} value={this.state.coveredArea}/>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group pt-4">
                                    <div class="row">
                                        <div class="col">
                                            <label for="totalArea">Total Area</label>
                                            <input type="number" class="form-control form-control-lg bg-white" id="totalArea" value={this.state.totalArea} onChange={this.onChange} value={this.state.totalArea}/>                                            
                                        </div>
                                        <div class="col">
                                            <label for="parking">Total Area</label>
                                            <input type="number" class="form-control form-control-lg bg-white" id="parking" value={this.state.parking} onChange={this.onChange} value={this.state.parking}/>                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group py-2">
                                    <button class="btn bg-orange px-5 pull-right text-white"  onClick={this.save}>Save changes</button>
                                </div>
                            </div>
                            <div class="col-sm-12 tab-pane fade show" id="pictures" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div class="form-group files">
                                    <label>Upload Your File </label>
                                    <input type="file" class="form-control" multiple=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default AddProperty;