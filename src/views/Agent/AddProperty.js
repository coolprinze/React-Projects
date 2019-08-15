import React, { Component } from 'react';
import { connect } from "react-redux"
import { Link, Redirect } from 'react-router-dom';
import { Input, TextArea, Select } from '../../common/Form';
import { getCountries, getStates, getLocalities, saveProperty, getProperty, loadPage } from '../../actions';


class AddProperty extends Component {
    state = {
        states:[],
        countries:[],
        localities:[],
        title:"",
        price: '',
        description:"",
        address:"",
        state_id:"",
        locality_id:"",
        furnished:"",
        serviced:"",
        parking: 0,
        total_area:0,
        covered_area:0,
        country: '',
        bedrooms: 0,
        bathrooms:0,
        toilets:0,
        errors: {},
        reset: false,
        status_id:1,
        type_id:2,
        slug: false,
    }

    
    async componentDidMount() {
        const slug = await this.props.match.params.slug
        if (slug !== undefined){
            await this.props.getProperty(slug);
            await this.setState({ ...this.props.property, slug: true })
        }
        await this.props.getCountries()
        await this.props.getStates()  
        await this.props.loadPage();
    }
    
    onChange = e =>{
        let { errors } = this.state
        if (e.target.value === ''){
          errors = {...errors, [e.target.name]: `This field is required`}
        } else {
            delete errors[e.target.name]
            if (e.target.id === "state_id"){
                this.props.getLocalities(parseInt(e.target.value))
            }
        }
        this.setState({[e.target.name]: e.target.value, errors})
    }

    onSave = async () => {
        if (this.state.slug){
            const { title, price, description, status_id, type_id, bedrooms, bathrooms, toilets, address, state_id, locality_id, furnished, serviced, parking, total_area, covered_area, id } = await this.state;
    
            await this.props.saveProperty({ title, price, description, status_id, type_id, bedrooms, bathrooms, toilets, address, state_id, locality_id, furnished, serviced, parking, total_area, covered_area, id });

            await this.setState({ edited: this.props.status })

            await this.props.history.goBack()

        } else {
            const { title, price, description, status_id, type_id, bedrooms, bathrooms, toilets, address, state_id, locality_id, furnished, serviced, parking, total_area, covered_area } = await this.state;
    
            await this.props.saveProperty({ title, price, description, status_id, type_id, bedrooms, bathrooms, toilets, address, state_id, locality_id, furnished, serviced, parking, total_area, covered_area });

            this.resetForm.bind(this);
        }

        

    }

    resetForm = () => {        
        if(this.props.reset) {
            this.setState({
                states:[],
                countries:[],
                localities:[],
                title:"",
                price: '',
                description:"",
                address:"",
                state_id:"",
                locality_id:"",
                furnished:"",
                serviced:"",
                parking: 0,
                total_area:0,
                covered_area:0,
                country: '',
                bedrooms: 0,
                bathrooms:0,
                toilets:0,
                errors: {},
                reset: false,
                status_id:1,
                type_id:2
            })
        }
    }

    checkError = () => this.state.errors.hasOwnProperty('gender')? this.state.errors.gender: null


    render() {
        const { countries, states, localities } = this.props;
        const countryOptions = countries.map((item)=>{
            return <option key={item.id} value={item.phonecode}>{item.name}</option>
        })
        const stateOptions = states.map((item)=>{
            return <option key={item.id} value={item.id}>{item.name}</option>
        })
        const localityOptions = localities.map((item)=>{
            return <option key={item.id} value={item.id}>{item.name}</option>
        })
        if(this.state.edited){
            return <Redirect to="/agent/agent-listing" />
        }
        return ( 
            <React.Fragment>
                <section className="container-fluid bg-grey">
                    <div className="container py-5">
                        <div className="row bg-dark px-3 py-3 text-white nav-pills">
                            <div className="col-sm-3">
                                <Link to="" className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#editDetails" role="tab" aria-controls="v-pills-home" aria-selected="true">Property Details</Link>
                            </div>
                            <div className="col-sm-3 text-muted">
                                <Link to="" className="nav-link" id="v-pills-edit-tab" data-toggle="pill" href="#pictures" role="tab" aria-controls="v-pills-home" aria-selected="true">Pictures</Link>
                            </div>
                        </div>
                        <div className="row bg-white px-3 py-3 tab-content" id="v-pills-tabContent">
                            <div className="col-sm-12 tab-pane fade show active" id="editDetails" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col col-sm-4">
                                            <Input 
                                                label="Title"
                                                name="title" inputClass="form-control-lg bg-white" 
                                                value={this.state.title}
                                                onChange={this.onChange}
                                                error={this.state.errors.hasOwnProperty('title')? this.state.errors.title: null} 
                                            />
                                        </div>
                                        <div className="col col-sm-4">
                                            <Input 
                                                label="Address"
                                                name="address" inputClass="form-control-lg bg-white" 
                                                value={this.state.address}
                                                onChange={this.onChange}
                                                error={this.state.errors.hasOwnProperty('address')? this.state.errors.address: null} 
                                            />
                                        </div>
                                        <div className="col col-sm-4">
                                            <Input 
                                                label="Price"
                                                name="price" 
                                                type="number"
                                                inputClass="form-control-lg bg-white" 
                                                value={this.state.price}
                                                onChange={this.onChange}
                                                error={this.state.errors.hasOwnProperty('price')? this.state.errors.price: null} 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col col-sm-12">
                                            <TextArea 
                                                label="Description"
                                                name="description" inputClass="form-control-lg bg-white" 
                                                value={this.state.description}
                                                onChange={this.onChange}
                                                error={this.state.errors.hasOwnProperty('description')? this.state.errors.description: null} 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <Select
                                                label="Country"
                                                name="country" 
                                                selectClass="form-control-lg bg-white" 
                                                selectedValue={this.state.country}
                                                onChange={this.onChange.bind(this)}
                                                error={this.state.errors.hasOwnProperty('country')? this.state.errors.country: null} 
                                                options={null}
                                                defaultValue="Select country"
                                            >
                                                {countryOptions}
                                            </Select>
                                        </div>
                                        <div className="col">
                                            <Select
                                                label="State"
                                                name="state_id" 
                                                selectClass="form-control-lg bg-white" 
                                                selectedValue={this.state.state_id}
                                                onChange={this.onChange.bind(this)}
                                                error={this.state.errors.hasOwnProperty('state_id')? this.state.errors.state_id: null} 
                                                options={null}
                                                defaultValue="Select state"
                                            >
                                                {stateOptions}
                                            </Select>
                                        </div>
                                        <div className="col">
                                            <Select
                                                label="Locality"
                                                name="locality_id" 
                                                selectClass="form-control-lg bg-white" 
                                                selectedValue={this.state.locality_id}
                                                onChange={this.onChange.bind(this)}
                                                error={this.state.errors.hasOwnProperty('locality_id')? this.state.errors.locality_id: null} 
                                                options={null}
                                                defaultValue="Select city"
                                            >
                                                {localityOptions}
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <Input 
                                                label="Bedrooms"
                                                type="number"
                                                name="bedrooms" inputClass="form-control-lg bg-white" 
                                                value={this.state.bedrooms}
                                                onChange={this.onChange}
                                                error={this.state.errors.hasOwnProperty('bedrooms')? this.state.errors.bedrooms: null} 
                                            />                                           
                                        </div>
                                        <div className="col">
                                            <Input 
                                                label="Bathrooms"
                                                type="number"
                                                name="bathrooms" inputClass="form-control-lg bg-white" 
                                                value={this.state.bathrooms}
                                                onChange={this.onChange}
                                                error={this.state.errors.hasOwnProperty('bathrooms')? this.state.errors.bathrooms: null} 
                                            />                                            
                                        </div>
                                        <div className="col">
                                            <Input 
                                                label="Toilets"
                                                type="number"
                                                name="toilets" inputClass="form-control-lg bg-white" 
                                                value={this.state.toilets}
                                                onChange={this.onChange}
                                                error={this.state.errors.hasOwnProperty('toilets')? this.state.errors.toilets: null} 
                                            />                                                 
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <Select
                                                label="Furnished"
                                                name="furnished" 
                                                selectClass="form-control-lg bg-white" 
                                                selectedValue={this.state.furnished}
                                                onChange={this.onChange.bind(this)}
                                                error={this.state.errors.hasOwnProperty('furnished')? this.state.errors.furnished: null} 
                                                options={null}
                                            >
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </Select>                                          
                                        </div>
                                        <div className="col">
                                            <Select
                                                label="Serviced"
                                                name="serviced" 
                                                selectClass="form-control-lg bg-white" 
                                                selectedValue={this.state.serviced}
                                                onChange={this.onChange.bind(this)}
                                                error={this.state.errors.hasOwnProperty('serviced')? this.state.errors.serviced: null} 
                                                options={null}
                                            >
                                                <option value={true}>Yes</option>
                                                <option value={false}>No</option>
                                            </Select> 
                                        </div>
                                        <div className="col">
                                            <Input 
                                                label="Covered Area"
                                                type="number"
                                                name="covered_area" inputClass="form-control-lg bg-white" 
                                                value={this.state.covered_area}
                                                onChange={this.onChange}
                                                error={this.state.errors.hasOwnProperty('covered_area')? this.state.errors.covered_area: null} 
                                            />                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group pt-4">
                                    <div className="row">
                                        <div className="col">
                                            <Input 
                                                label="Total Area"
                                                type="number"
                                                name="total_area" inputClass="form-control-lg bg-white" 
                                                value={this.state.total_area}
                                                onChange={this.onChange}
                                                error={this.state.errors.hasOwnProperty('total_area')? this.state.errors.total_area: null} 
                                            />                                                
                                        </div>
                                        <div className="col">
                                            <Input 
                                                label="Parking Area"
                                                type="number"
                                                name="parking" inputClass="form-control-lg bg-white" 
                                                value={this.state.parking}
                                                onChange={this.onChange}
                                                error={this.state.errors.hasOwnProperty('parking')? this.state.errors.parking: null} 
                                            />                                              
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group py-2">
                                    <button className="btn bg-orange px-5 pull-right text-white"  onClick={this.onSave.bind(this)}>Save changes</button>
                                </div>
                            </div>
                            <div className="col-sm-12 tab-pane fade show" id="pictures" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="form-group files">
                                    <label>Upload Your File </label>
                                    <input type="file" className="form-control" multiple=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    countries: state.utility.countries,
    states: state.utility.states,
    localities: state.utility.localities,
    reset: state.utility.reset,
    property: state.properties.property,
    status: state.properties.status,
})

export default connect(mapStateToProps, { getCountries, getStates, getLocalities, saveProperty, getProperty, loadPage })(AddProperty);