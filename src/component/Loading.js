import React, { Component, Fragment } from 'react';
import { RingLoader, FadeLoader, BarLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { agent } from '../assets/img';
import PropTypes from 'prop-types'


const override = css`
  
`;

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100vh',
        widows: '100%',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        background: '#e8e8e8'
      }}>
        <RingLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color={'#FF8C00'}
          load
        />
      </div> 
    )
  }
}

export class ImageLoader extends Component{ 
  state = {
    loaded: false
  }
  
  render(){

    return <Fragment>
        <div className={`spinner-item ${this.state.loaded? 'd-none': ''}`} style={this.props.style}>
            <FadeLoader
                sizeUnit={"px"}
                color={'#FF8C00'}                                
            /> 
        </div>
        <img className={`w-100 ${this.state.loaded? '': 'd-none'}`} src={this.props.image === ""? agent: this.props.image} onLoad={() => this.setState({ loaded: true })}  alt=""/>
      </Fragment>

  }
}
  

export class ItemLoading extends Component{ 
static propTypes = {
  wrapperStyle: PropTypes.object,
  wrapperClasses: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.number,
}
  
  render(){

    return (
      <div className={`d-flex flex-column justify-content-center align-items-center ${this.props.wrapperClasses}`} style={this.props.wrapperStyle}>
          <BarLoader
            color={'#FF8C00'}                                
          /> 
          <span className="mt-3">{this.props.text}</span>
      </div>)

  }
}
  
    


export default Loading;
