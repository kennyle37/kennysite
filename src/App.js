import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomePageLayout from './Home/Home';
import About from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Practice from './Practice/Practice';
import Contact from './Contact/Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
      <div>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About Me</Link></li>
          <li><Link to ="/portfolio">Portfolio</Link></li>
          <li><Link to ="/practice">Practice Blog</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
        </ul>
        
      <hr/> 
        <Route path="/" component={HomePageLayout}/>  
        <Route path="/about" component={About}/> 
        <Route path="/portfolio" component={Portfolio}/>  
        <Route path="/practice" component={Practice}/> 
        <Route path="/contact" component={Contact}/>   
      </div>

      </Router>
      </div>
    );
  }
}

export default App;


// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/topics">Topics</Link></li>
//       </ul>

//       <hr/>

//       <Route exact path="/" component={Home}/>
//       <Route path="/about" component={About}/>
//       <Route path="/topics" component={Topics}/>
//     </div>
//   </Router>
// )