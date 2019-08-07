import React from 'react'

const SubHeader = ({username}) => {
    return (
        <div className="container-fluid search-bar d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-12 py-3 px-0">
                            <h4 className="text-white">Hi, {username}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SubHeader;


