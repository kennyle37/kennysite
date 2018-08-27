import React from 'react';
import Zoom from 'react-reveal/Zoom'

class ProfileDisplay extends React.Component {
  render() {
    return (
      <div>
        <div style={{height: 50}} />
        <Zoom>
          <img className='profile-pic' src="https://i.imgur.com/5qOsb70.jpg" width="300" height="300" alt="profile" />
        </Zoom>
        <h1><strong>Kenny Le</strong></h1>
        <h2>Software Engineer</h2>  
      </div>
    )
  }
}

export default ProfileDisplay;