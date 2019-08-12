import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { property, agent, img3 } from '../assets/img';

const PropertyView = ({ data, onDelete, user }) => {

    const actionButtons = user.role.id === 2? <div className="d-flex justify-content-between mt-2">
        <span>
            <Link to={`/agent/edit-property/${data.slug}`} className="btn btn-orange btn-sm">Edit</Link>
        </span>
        <span>
            <button onClick={onDelete} className="btn btn-danger btn-sm">Delete</button>
        </span>
    </div>: ''

  return (
    <div className="row py-3" >
        <div className="col-sm-8">
            <div className="row">
                <div className="col-sm-8 col-lg-8 px-0 py-0">
                    <img src={property} alt=""/>
                </div>
                <div className="col-sm-4 col-lg-4 px-0 py-0">
                    <img src={data.image === "" ? agent:data.image} alt=""/>
                    <img src={data.image === "" ? img3:data.image} alt=""/>
                </div>
            </div>
        </div>
        <div className="col-sm-4 px-0 py-0 bg-white">
            <div className="col-sm-12 py-2 px-2">
                <Link to={`/property/${data.slug}`}>
                    <h5>{data.title}</h5>
                </Link>
                <span className="text-small">
                    {data.bedrooms === null ? 0: data.bedrooms} Bedrooms | 
                    {data.bathrooms === null ? 0: data.bathrooms} Bathrooms | 
                    {data.toilets === null ? 0: data.toilets} Toilets | 
                    {data.parking === null ? 0: data.parking} Parking
                </span>
                <h6 className="px-0 py-0">Ajah</h6>
                <span>{data.description}</span>
                <button className="btn btn-dark btn-listing">N {data.price}</button>
                <div className="row py-1">
                    <div className="col-sm-8 col-lg-8">
                        <span>Added {data.created_at}</span>
                    </div>
                    <div className="col-sm-2 col-lg-2">
                        <i className="fa fa-share"></i>
                    </div>
                    <div className="col-sm-2 col-lg-2">
                        <i className="fa fa-heart-o"></i>
                    </div>
                </div>
                <hr className="mx-0 py-0 my-0"/>
                <div className="row">
                    <div className="col-sm-3 mt-2 pr-1"><img src={data.image === "" ? property:data.image} className="img rounded-circle" alt=""/></div>
                    <div className="col-sm-9">
                        <div className="d-flex justify-content-between">
                            <span>{data.agent.name}</span>
                            <span>{data.agent.phone === null ? "No Number":data.agent.phone}</span>
                            <span>View listing</span>
                        </div>

                        {actionButtons}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

const mapState = state => ({
    user: state.auth.user
})

export default connect(mapState)(PropertyView) 
