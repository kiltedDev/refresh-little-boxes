import React from 'react';
import List from './List'


const Picture = props => {
  return (
    <div className='box picture'>
      <h1>Look at This Picture</h1>
      <img alt={props.altText} src={props.image}/>
      <List />
    </div>
  )
}

export default Picture;
