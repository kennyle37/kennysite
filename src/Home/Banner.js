import React from 'react'
import { Parallax } from 'react-parallax'
import ProfileDisplay from './ProfileDisplay'
import { Segment } from 'semantic-ui-react'

/*
This function adds our background banner and add the parralax scrolling effect to it.
*/
const img = 'https://www.wallpaperflare.com/static/918/649/206/nature-mountains-landscape-forest-wallpaper.jpg';

class Banner extends React.Component {
  render() {
    return (
      <Parallax 
        bgImage={img}
        bgHeight={'500'}
        strength={200}>
        <div style={{height: 800}}
      >
        <ProfileDisplay />
        </div>
      </Parallax>
    )
  }
}

export default Banner;
