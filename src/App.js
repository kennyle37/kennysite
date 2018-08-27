import React from 'react'
import NavBar from './Home/NavBar'
import About from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio'

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <About />
        <Portfolio />
      </div>
    )
  }
}

export default App;
