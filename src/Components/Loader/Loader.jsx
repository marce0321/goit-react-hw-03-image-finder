import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loader = () =>(
<BallTriangle
  align="center"
  height={400}
  width={250}
  radius={5}
  color="#8a62d3"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
  rigth={100}
  clear="right"
  
/>
  );

export default Loader;