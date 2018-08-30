import React from 'react'
import { Parallax } from 'react-parallax'
import ProfileDisplay from './ProfileDisplay'

/*
This function adds our background banner and add the parralax scrolling effect to it.
*/
const Banner = () => (
  <Parallax 
    bgImage={'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}
    strength={500}>
    <div style={{height: 800}}>
      <ProfileDisplay />
    </div>
  </Parallax>
)

export default Banner;

