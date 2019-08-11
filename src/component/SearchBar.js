import React from 'react'
import { connect } from 'react-redux'
import $ from 'jquery';
import { searchDb } from '../actions';


const SearchBar = ({ searchDb, searchResult }) => {

  const onSearch = e => {
    if(/\S/.test(e.target.value)){
      searchDb(e.target.value);
      $('.search').removeClass('d-none')
    } else {
      $('.search').addClass('d-none')
    }
  } 

  const renderSearchResult = searchResult => {
    return searchResult.map(result => <div>
          <p className="mb-0">
              {searchResult.label}
          </p>
          <hr className="my-1" />
        </div>)
     
  }

  console.log(searchResult)

  return (
    <div className="row">
        <div className="col-sm-12 pb-3">
            <div className="card" height="18rem">
                <h5 className=" px-3 py-3">
                    Search Castles
                </h5>
                <div className="card-footer" style={{ background: "#FF8C00" }}>
                    <input onChange={onSearch} type="text" placeholder="e.g Lekki, Lagos" className="form-control" style={{ minHeight: '50px'}} />
                    <div className="relative mt-1 search d-none">
                      <div className="card p-2" style={{ zIndex: 3, position: 'absolute', width: '90%' }}>
       
                        {searchResult.length? renderSearchResult() : <p>No result for your search</p>}
                      </div>
                        
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

const mapState = state => ({
  searchResult: state.utility.searchResult,
})

const mapDispatch = dispatch => ({ 
  searchDb: searchParam => dispatch(searchDb({searchParam}))
})

export default connect(mapState, mapDispatch)(SearchBar);
