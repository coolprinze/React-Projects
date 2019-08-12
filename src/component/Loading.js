import React, { Component } from 'react';
import { RingLoader } from 'react-spinners';
import { css } from '@emotion/core';

const override = css`
  
`;

class Loading extends React.Component {
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

export default Loading;
