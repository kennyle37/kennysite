import React from 'react';
import Zoom from 'react-reveal/Zoom'

class ProfileDisplay extends React.Component {
  render() {
    return (
      <div>
        <div style={{height: 50}} />
        <Zoom>
          <img src="https://i.imgur.com/5qOsb70.jpg" width="300" height="300" alt="profile" />
        </Zoom>
      </div>
    )
  }
}

export default ProfileDisplay;