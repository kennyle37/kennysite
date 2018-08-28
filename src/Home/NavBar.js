import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import PropTypes from 'prop-types'
import Banner from './Banner'


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home'}
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed, activeItem } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 800, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item 
                  name='home' 
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                >
                  Home
                </Menu.Item>
                <Menu.Item                   
                  name='aboutMe' 
                  active={activeItem === 'aboutMe'}
                  onClick={this.handleItemClick}
                >
                  About Me
                </Menu.Item>
                <Menu.Item
                  name='portfolio' 
                  active={activeItem === 'portfolio'}
                  onClick={this.handleItemClick}
                >
                  Porfolio
                </Menu.Item>
                <Menu.Item
                  name='skill' 
                  active={activeItem === 'skill'}
                  onClick={this.handleItemClick}
                >
                  Skill
                </Menu.Item>
                <Menu.Item
                  name='practiceProbs' 
                  active={activeItem === 'practiceProbs'}
                  onClick={this.handleItemClick}
                >
                  Practice Problems
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Contact Me
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <Banner />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

const Routes = () => {
  <Router>
    <Route exact path='/' Component={Banner}></Route>
  </Router>
}

NavBar.propTypes = {
  children: PropTypes.node,
}

export default NavBar;