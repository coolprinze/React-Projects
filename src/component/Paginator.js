import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


class Paginator extends Component{

  static propTypes = {
    currPage: PropTypes.number.isRequired,
    lastPage: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  prevPageClicked = (evt) => {
      evt.preventDefault();

      if (this.props.currPage > 1) {
          this.props.onChange(Number(this.props.currPage) - 1);
      }
  }

  nextPageClicked = (evt) => {
      evt.preventDefault();

      if (this.props.currPage < this.props.lastPage) {
          this.props.onChange(Number(this.props.currPage) + 1);
      }
  } 

  pageClicked = (pageNum, evt) => {
      evt.preventDefault();

      if (this.props.currPage !== pageNum) {
          this.props.onChange(Number(pageNum));
      }
  }
  renderPrevious = () => {
      var classStr = this.props.currPage <= 1? 'disabled': '';
      return (
          <li key="prev" className={`page-item ${classStr}`}>
              <Link className="page-link" to="#" rel="prev" onClick={this.prevPageClicked}>«</Link>
          </li>
      );
  }
  renderNext = () => {
      var classStr = this.props.currPage >= this.props.lastPage? 'disabled': '';
      return (
          <li key="next" className={`page-item ${classStr}`}>
              <Link className="page-link" to="#" rel="next" onClick={this.nextPageClicked}>»</Link>
          </li>
      );
  }
  renderDots = (key) => {
      return <li key={key} className="page-item disabled"><span>...</span></li>;
  }
  renderNumber = (num) => {
      var classStr =this.props.currPage === num? 'active': '';
      return (
          <li key={num} className={`page-item ${classStr}`}>
              <Link className="page-link" to="#" onClick={this.pageClicked.bind(this, num)}>{num}</Link>
          </li>
      );
  }
  renderRange = (firstNum, lastNum) => {
      var pages = [];
      for (var i = firstNum; i <= lastNum; i++) {
          pages.push(this.renderNumber(i));
      }
      return pages;
  }
  renderStart = () => {
      var pages = this.renderRange(1, 2);
      pages.push(this.renderDots('dots-start'));

      return pages;
  }
  renderFinish = () => {
      var pages = this.renderRange(this.props.lastPage-1, this.props.lastPage);
      pages.unshift(this.renderDots('dots-finish'));

      return pages;
  }
  renderAdjacentRange = () => {
      return this.renderRange(this.props.currPage-2, this.props.currPage+2);
  }
  renderSlider = () => {
      var sliderNum = 6;
      var buttons = [];

      if (this.props.currPage <= sliderNum) {
          buttons = buttons.concat(this.renderRange(1, sliderNum+2));
          buttons = buttons.concat(this.renderFinish());
      }

      else if (this.props.currPage >= this.props.lastPage - sliderNum) {
          buttons = buttons.concat(this.renderStart());
          buttons = buttons.concat(this.renderRange(this.props.lastPage-sliderNum, this.props.lastPage));
      }

      else {
          buttons = buttons.concat(this.renderStart());
          buttons = buttons.concat(this.renderAdjacentRange());
          buttons = buttons.concat(this.renderFinish());
      }

      return buttons;
  }
  render = () => {
      var buttons = [];

      buttons.push(this.renderPrevious());

      if (this.props.lastPage <= 13) {
          buttons = buttons.concat(this.renderRange(1, this.props.lastPage));
      }
      else {
          buttons = buttons.concat(this.renderSlider());
      }

      buttons.push(this.renderNext());

      return (
          <div className="text-center">
              <ul className="pagination">{buttons}</ul>
          </div>
      );
  }
}

export default Paginator