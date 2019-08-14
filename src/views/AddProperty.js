import React, { Component, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Input, TextArea, Select } from '../component/Form';
import { getGlobal, useGlobal } from 'reactn'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import '../notifications.css'

// import '../addProperty.css'
import API from '../utils/api';
const api = new API();

const AddProperty = (props) => {
  const [property, setProperty] = useState({
    locality_id: "",
    title: "",
    price: '',
    description: "",
    address: "",
    state_id: "",
    locality_id: "",
    furnished: "",
    serviced: "",
    parking: 0,
    total_area: 0,
    covered_area: 0,
    country: '',
    bedrooms: 0,
    bathrooms: 0,
    toilets: 0,
    errors: {},
    reset: false,
    status_id: 1,
    type_id: 2,
    slug: false,
    tab: "1"
  });
  let countries = getGlobal().countries;
  let states = getGlobal().states;
  const [localities] = useGlobal('localities');
  if (!!props.props.location.state && Object.keys(props.props.location.state.property).length > 0) {
    if (property.slug !== props.props.location.state.property.slug) {
      return setProperty({
        ...props.props.location.state.property,
        agent_id: props.props.location.state.property.agent.id,
        tab: "1",
        status_id: 1,
        type_id: 2,
        errors: {}
      });
    }
  }

  const onChange = e => {
    let { errors } = property
    if (e.target.value === '') {
      errors = { ...errors, [e.target.name]: `This field is required` }
    } else {
      delete errors[e.target.name]
      if (e.target.name === "state_id") {
        api.getLocalities(parseInt(e.target.value));
      }
    }
    setProperty({ ...property, [e.target.name]: e.target.value, errors });
  }
  // if (property.edited) {
  //   return <Redirect to="/agent/agent-listing" />
  // }
  return (
    <React.Fragment>
      <Header />
      <section className="container-fluid bg-grey">
        <div className="container py-5">

          <div className="row bg-dark px-3 py-3 text-white ">
            <div className="container-fluid">
              <nav className="navbar bg-dark container" style={{ borderRadius: "4px 4px 0px 0px", marginLeft: "-25px" }}>
                <p className="navbar-brand myp"> Add/Edit Property</p>
                <div className="" >
                  {/* <span className="form-inline">
                    <div className="drop">
                      <Link to={"/property/add"}> Add Property</Link>
                    </div>
                  </span> */}
                </div>
              </nav>
            </div>
            <span className={["nav-link", property.tab === "1" ? "active bg-orange" : ""].join(" ")} name="tab" value="1"
              style={{ cursor: "pointer" }}
              onClick={() => setProperty({ ...property, tab: "1" })}
            >Property Details</span>
            <span className={["nav-link", property.tab === "2" ? "active bg-orange" : ""].join(" ")}
              style={{ cursor: "pointer" }}
              onClick={() => setProperty({ ...property, tab: "2" })}
            >Pictures</span>
          </div>

          <div className="row bg-white px-3 py-3 tab-content" id="v-pills-tabContent">
            {property.tab === "1" ? <AddPropertyDetails onChange={onChange}
              countries={countries}
              states={states}
              localities={localities}
              property={property}
              setProperty={setProperty}
            /> :
              <AddPicture property={property} />}
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  )
}
// }

const AddPropertyDetails = ({ property, onChange, countries, states, localities, setProperty }) => {

  const countryOptions = countries.map((item) => {
    return <option key={item.id} value={item.phonecode}>{item.name}</option>
  })
  const stateOptions = states.map((item) => {
    return <option key={item.id} value={item.id}>{item.name}</option>
  })
  const localityOptions = localities.map((item) => {
    return <option key={item.id} value={item.id}>{item.name}</option>
  })
  return (
    <div className="col-sm-12 tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
      <div className="form-group">
        <div className="row">
          <div className="col">
            <Input
              label="Title"
              name="title" inputClass="form-control-lg bg-white"
              value={property.title}
              onChange={onChange}
              error={property.errors.hasOwnProperty('title') ? property.errors.title : null}
            />
          </div>
          <div className="col">
            <Input
              label="Address"
              name="address" inputClass="form-control-lg bg-white"
              value={property.address}
              onChange={onChange}
              error={property.errors.hasOwnProperty('address') ? property.errors.address : null}
            />
          </div>
          <div className="col">
            <Input
              label="Price"
              name="price"
              type="number"
              inputClass="form-control-lg bg-white"
              value={property.price}
              onChange={onChange}
              error={property.errors.hasOwnProperty('price') ? property.errors.price : null}
            />
          </div>
        </div>
      </div>
      {/* <div className="form-group pt-4"> */}
      {/* <div className="row"> */}
      <div className="col col-sm-12">
        <TextArea
          label="Description"
          name="description" inputClass="form-control-lg bg-white"
          value={property.description}
          onChange={onChange}
          error={property.errors.hasOwnProperty('description') ? property.errors.description : null}
        />
      </div>
      {/* </div> */}
      {/* </div> */}
      {/* <div className="form-group pt-4"> */}
      <div className="row">
        <div className="col">
          <Select
            label="Country"
            name="country"
            selectClass="bg-white"
            selectedValue={property.country}
            onChange={onChange}
            error={property.errors.hasOwnProperty('country') ? property.errors.country : null}
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
            selectClass="browser-default custom-select bg-white"
            selectedValue={property.state_id}
            onChange={onChange}
            error={property.errors.hasOwnProperty('state_id') ? property.errors.state_id : null}
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
            selectClass="bg-white"
            selectedValue={property.locality_id}
            onChange={onChange}
            error={property.errors.hasOwnProperty('locality_id') ? property.errors.locality_id : null}
            options={null}
            defaultValue="Select city"
          >
            {localityOptions}
          </Select>
        </div>
      </div>
      {/* </div> */}
      {/* <div className="form-group pt-4"> */}
      <div className="row">
        <div className="col">
          <Input
            label="Bedrooms"
            type="number"
            name="bedrooms" inputClass="form-control-lg bg-white"
            value={property.bedrooms}
            onChange={onChange}
            error={property.errors.hasOwnProperty('bedrooms') ? property.errors.bedrooms : null}
          />
        </div>
        <div className="col">
          <Input
            label="Bathrooms"
            type="number"
            name="bathrooms" inputClass="form-control-lg bg-white"
            value={property.bathrooms}
            onChange={onChange}
            error={property.errors.hasOwnProperty('bathrooms') ? property.errors.bathrooms : null}
          />
        </div>
        <div className="col">
          <Input
            label="Toilets"
            type="number"
            name="toilets" inputClass="form-control-lg bg-white"
            value={property.toilets}
            onChange={onChange}
            error={property.errors.hasOwnProperty('toilets') ? property.errors.toilets : null}
          />
        </div>
      </div>
      {/* </div> */}
      {/* <div className="form-group pt-4"> */}
      <div className="row">
        <div className="col">
          <div className="pt-2">

            <Select
              label="Furnished"
              name="furnished"
              selectClass="bg-white"
              selectedValue={property.furnished}
              onChange={onChange}
              error={property.errors.hasOwnProperty('furnished') ? property.errors.furnished : null}
              options={null}
              defaultValue="Is the property furnished?"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </Select>
          </div>
        </div>
        <div className="col">
          <div className="pt-2">
            <Select
              label="Serviced"
              name="serviced"
              selectClass="bg-white"
              selectedValue={property.serviced}
              onChange={onChange}
              error={property.errors.hasOwnProperty('serviced') ? property.errors.serviced : null}
              options={null}
              defaultValue="Is the property serviced?"

            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </Select>
          </div>
        </div>
        <div className="col">
          <Input
            label="Covered Area"
            type="number"
            name="covered_area" inputClass="bg-white"
            value={property.covered_area}
            onChange={onChange}
            error={property.errors.hasOwnProperty('covered_area') ? property.errors.covered_area : null}
          />
        </div>
      </div>
      {/* </div> */}
      {/* <div className="form-group pt-4"> */}
      <div className="row">
        <div className="col">
          <Input
            label="Total Area"
            type="number"
            name="total_area" inputClass="form-control-lg bg-white"
            value={property.total_area}
            onChange={onChange}
            error={property.errors.hasOwnProperty('total_area') ? property.errors.total_area : null}
          />
        </div>
        <div className="col">
          <Input
            label="Parking Area"
            type="number"
            name="parking" inputClass="form-control-lg bg-white"
            value={property.parking}
            onChange={onChange}
            error={property.errors.hasOwnProperty('parking') ? property.errors.parking : null}
          />
        </div>
        <div className="col">
        </div>
      </div>
      {/* </div> */}
      <div className="row justify-content-sm-right">
        <div className="col">

          <button
            name="tab"
            value="2"
            className="btn bg-orange px-5  text-white"
            onClick={() => setProperty({ ...property, tab: "2" })}
          >Next </button> </div>
      </div>
    </div>
  )
}
const AddPicture =  ({ property }) => {
  const saveProperty = async () => {
    let result = await api.saveProperty(property);
    if (result) {
      await NotificationManager.success('Success', 'Property saved')
    }
    else {
      NotificationManager.error('Error', 'Property not saved')

    }
  }
  return (
    <>
      <NotificationContainer />
      <div className="col-sm-12" >
        <div className="form-group files">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroupFileAddon01">
                Upload
    </span>
            </div>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
              />
              <label className="custom-file-label" htmlFor="inputGroupFile01">
                Choose file
    </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-sm-right">
        <div className="col">

          <button
            name="tab"
            value="2"
            className="btn bg-orange px-5  text-white"

            onClick={() => {
              if (Object.keys(property.errors).length === 0) {
                return saveProperty()
              }
              else {
                return NotificationManager.error("Error", "Some key fields are empty")
              }
            }}
          >Save Property </button> </div>
      </div>
    </>
  )
}
export default AddProperty;