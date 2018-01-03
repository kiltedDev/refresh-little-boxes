import React from 'react';
import Numbers from './Numbers';
import Picture from './Picture'

const Wrapper = props => {
  return (
    <div className='box wrapper'>
      <h1>{props.header}</h1>
      <p>{props.paragraph}</p>
      <Numbers />
      <Box
        boxClass="picture"
        altText='Clever EEs'
        image='https://s3.amazonaws.com/horizon-production/images/react-clever-ees.png'/>
    </div>
  )
}

export default Wrapper;
