import React from 'react'
import NavBar from './Home/NavBar'
import About from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'
import Skill from './Skill/Skil';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
        <Portfolio />
        <Skill />
      </div>
    )
  }
}

export default App;
