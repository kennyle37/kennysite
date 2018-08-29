import React from 'react'
import NavBar from './Home/NavBar'
import About from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Skill from './Skill/Skill'
import Contact from './Contact/Contact'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
      </div>
    )
  }
}

export default App;
