import React from 'react';
import Mouse from './Mouse';
import Cat from './Cat';

function MouseTracker() {
  return <Mouse render1={(mouse) => <Cat mouse={mouse}/>}/>;
}

export default MouseTracker;
