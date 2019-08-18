import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format'
import { property } from '../assets/img';
import { ImageLoader } from './Loading';

const PropertyView = ({ data, user }) => {
    const deleteListing = async (id) => {
        if (window.confirm("Are you sure you want to delete this listing?")){
            await this.props.deleteProperty(id)
        }
    }

    const actionButtons = user && user.role.id === 2 && user.id === data.agent.id? <div className="row  mt-2">
        <div className="col-6">
            <Link to={`/agent/edit-property/${data.slug}`} className="btn btn-orange btn-sm">Edit</Link>
        </div>
        <div className="col-6">
            <Link to="" onClick={() => deleteListing(data.id)} className="btn text-danger">Delete</Link>
        </div>
    </div>: ''

  return (
    <div className="row py-3" >
        <div className="col-sm-8 pr-sm-0">
            <div className="row">
                <div className="col-md-8 px-0 py-0">
                    <ImageLoader image={data.image} style={{ minHeight: '240px' }} />
                </div>
                <div className="col-md-4 row px-0 py-0">
                    <div className="col col-md-12 p-0">
                        <ImageLoader image={data.image} />
                    </div>
                    <div className="col col-md-12 p-0">
                        <ImageLoader image={data.image} />
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-4 pl-sm-0-0 py-0 bg-white">
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
                <h6 className="px-0 py-0">{data.locality}</h6>
                <span>{data.description}</span>
                <span className="btn btn-dark btn-listing">                    
                    <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} />
                </span>
                <div className="row py-1">
                    <div className="col-md-9">
                        <span>Added {data.created_at}</span>
                    </div>
                    <div className="col-6 col-md-1">
                        <i className="fa fa-share"></i>
                    </div>
                    <div className="col-6 col-md-1">
                        <i className="fa fa-heart-o"></i>
                    </div>
                </div>
                <hr className="mx-0 py-0 my-0"/>
                <div className="row">
                    <div className="col-sm-3 hidden">
                        <img src={data.image === "" ? property:data.image} className="img rounded-circle" alt=""/>
                    </div>
                    <div className="col-sm-9">
                        <div className="">
                            <span>
                                <Link to={`/agent/listing/${data.agent.id}`}>
                                    {data.agent.name}
                                </Link>
                            </span>
                            <div className="d-flex justify-content-between">
                                <span>{data.agent.phone === null ? "No Number":data.agent.phone}</span>

                                <span>
                                    <Link to={`/agent/listing/${data.agent.id}`}>View listing</Link>
                                </span>
                            </div>
                        </div>

                    </div>
                        {actionButtons}
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
