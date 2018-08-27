import React from 'react'
import { Parallax } from 'react-parallax'
import ProfileDisplay from './ProfileDisplay'

/*
This function adds our background banner and add the parralax scrolling effect to it.
*/
const Banner = () => (
  <div>
     <Parallax 
      bgImage={'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}
      strength={500}>
      <div style={{height: 750}}>
        <ProfileDisplay />
      </div>
    </Parallax>
  </div>
)

export default Banner;

