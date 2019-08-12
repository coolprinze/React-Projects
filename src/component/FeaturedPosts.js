import React from 'react'
import { Link } from 'react-router-dom';
import { leftArrow, rightArrow, property } from '../assets/img';
import $ from 'jquery';
import PropTypes from 'prop-types'


const FeaturedPosts = ({ articles, nullId, catSlug }) => {

  const posts = articles.map(post => post.id !== nullId? <div className="slide" key={post.id}>
        <div className="card bg-white" height="18rem">
          <Link to={`/propertyadvice/${catSlug}/${post.slug}`}>
            <img src={post.image} height="227px" className="card-img-top" alt={post.title} style={{ height: '224px' }} />
            <div className="card-footer bg-white">
                <h5 className="card-subtitle mb-2 text-wrap">{post.title}</h5>
                <p className="pt-2 pull-right">By Reachmond Estate</p>
            </div>
          </Link>
        </div>
      </div> : null)
  
  const slideRight = e => {
    e.preventDefault();
    $('#carousel').animate({
        scrollLeft: "+=310px"
    }, "slow");
  };

  const slideLeft = e => {
      e.preventDefault();
      $('#carousel').animate({
          scrollLeft: "-=100px"
      }, "slow");
  };

  return (
      <div className="row ">
          
          <div className="container">
              <div className="row">

                  <div className="col-sm-2 offset-sm-4">
                      <div className="row">
                          <div className="col-sm-3 offset-sm-6 px-0">
                              <img src={leftArrow} id="left-btn" className="px-1 pointer" alt=" " onClick={slideLeft} />
                          </div>
                          <div className="col-sm-3 px-0">
                              <img src={rightArrow} id="right-btn" className="px-1 pointer" alt=" " onClick={slideRight} />
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div id="carousel">
            {posts}
          </div>

      </div>
  )
}

export default FeaturedPosts