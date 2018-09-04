import React from 'react'
import NavBar from './Home/NavBar'
import About from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Skill from './Skill/Skill'
import Contact from './Contact/Contact'
import { Element } from 'react-scroll'
import { Parallax } from 'react-parallax' 

const img = 'https://clip2art.com/images/drawn-wallpaper-artistic-art-5.jpg';

class App extends React.Component {
  render() {
    return (
      <div>
        <Element name='home' className='element'>
          <NavBar />
        </Element>

        <Element name='aboutMe' className='element'>
          <About />
        </Element>

        <Element name='skill' className='element'>
          <Skill />
        </Element>

        <Element name='portfolio' className='element'>
          <Portfolio />
        </Element>

        <Contact />
      </div>
    )
  }
}

export default App;
