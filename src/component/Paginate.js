import React from 'react'
import { connect } from 'react-redux';
import { loadPage } from '../actions';
import { UNLOAD_PAGE } from '../actions/types';
import Paginator from './Paginator';


const Paginate = ({ data, loadPage, onClick, type }) => {
  const { current_page, last_page, to, from, total, path } = data

  const getPage = async num => {
    await loadPage(UNLOAD_PAGE);
    await onClick(`${path}?page=${num}`, type);
    await loadPage();
  }

  return (
    <section className="container d-md-flex justify-content-between align-items-center bg-white py-4">
      <h5>Showing {from} to {to} of {total} enteries</h5>
      <nav aria-label="Page navigation example">
        <Paginator currPage={current_page} lastPage={last_page} onChange={getPage}/>
        </nav>
  </section>
  )
}
export default connect(null, { loadPage })(Paginate); 