import React from 'react'
import { Link } from 'react-router-dom'

export default function Paginate({ data }) {
  const {  first_page_url, last_page_url, to, from, total } = data
  return (
    <section className="container d-flex justify-content-between align-items-center bg-white py-4">
      <h5>Showing {from} to {to} of {total} enteries</h5>
      <nav aria-label="Page navigation example">
          <ul className="pagination">
              <li className="page-item">
                  <Link className="page-link" to={first_page_url} aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                  </Link>
              </li>
              <li className="page-item"><Link className="page-link" to="#">1</Link></li>
              <li className="page-item"><Link className="page-link" to="#">2</Link></li>
              <li className="page-item"><Link className="page-link" to="#">3</Link></li>
              <li className="page-item">
                  <Link className="page-link" to={last_page_url}aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                  </Link>
              </li>
          </ul>
      </nav>
  </section>
  )
}
