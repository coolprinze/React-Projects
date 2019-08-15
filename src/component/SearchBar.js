import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import $ from 'jquery';
import { searchDb, searchProperties } from '../actions';
import { UPDATE_SEARCH_PARAM, UPDATE_SEARCH_TERM } from '../actions/types';


const SearchBar = ({ searchDb, searchResult, updateSearchTerm, updateSearchParams, searchTerm, searchedParam, searchProperties }) => {

  const onSearch =  e => {
    if(/\S/.test(e.target.value)){
      updateSearchTerm(e.target.value)
      searchDb(e.target.value);
      $('.search').removeClass('d-none')
    } else {
      updateSearchTerm(e.target.value)
      searchProperties({})
      $('.search').addClass('d-none')
    }
  } 

  const updateSearch = async (val) => {
    let data
    if (val.locality_id !== undefined){
      data = { locality_id: val.locality_id, state_id: val.state_id }
    }else{
      data = { state_id: val.state_id }
    }
    updateSearchTerm(val.label)
    $('.search').addClass('d-none')
    await updateSearchParams(data)
    await searchProperties({...searchedParam, ...data})
  } 


  const renderSearchResult = searchResult => {
    return searchResult.map((result, index) => 
    
      <Link key={index} onClick={() => updateSearch(result)} className="dropdown-item" to="/propertylisting">{result.label}</Link>
    )
     
  }

  console.log(searchedParam)
  return (
    <Fragment>
        <input onChange={onSearch} type="search" placeholder="e.g Lekki, Lagos" value={searchTerm} className="form-control px-2" />
        <div className="w-100 relative mt-1 search d-none">
          <div className="card p-2 text-left" style={{ zIndex: 3, position: 'absolute', width: '100%', maxHeight: '350px', overflow: 'auto' }}>

            {searchResult.length? renderSearchResult(searchResult) : <p>No result for your search</p>}
            </div>
            
        </div>
    </Fragment>
  )
}

const mapState = state => ({
  searchResult: state.utility.searchResult,
  searchedParam: state.utility.searchedParam,
  searchTerm: state.utility.searchTerm,
})

const mapDispatch = dispatch => ({ 
  searchDb: searchParam => dispatch(searchDb(searchParam)),
  searchProperties: searchParam => dispatch(searchProperties(searchParam)),
  updateSearchParams: searchParam => dispatch({type: UPDATE_SEARCH_PARAM, payload: searchParam}),
  updateSearchTerm: searchTerm => dispatch({type: UPDATE_SEARCH_TERM, payload: searchTerm})
})

export default connect(mapState, mapDispatch)(SearchBar);
