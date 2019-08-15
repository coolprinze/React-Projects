import React, { Component, Fragment } from 'react';
import { RingLoader, FadeLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { agent } from '../assets/img';

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
  
    


export default Loading;
