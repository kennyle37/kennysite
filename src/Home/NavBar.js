import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

import PropTypes from 'prop-types'
import Banner from './Banner'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  state = {};

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  componentWillunmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  handleItemClick = ({ name }) => this.setState({ activeItem: name });
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
            style={{ minHeight: 800, padding: '.2em 0em' }}
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
                {/* Home Section */}
                <Menu.Item 
                  name='home' 
                  active={activeItem === 'home'}
                  spy={true}
                  onClick={this.handleItemClick}
                  as={Link}
                  to='home'
                  smooth={true} 
                  duration={1000} 
                  offset={0}
                >
                  Home
                </Menu.Item>
         
                {/* About Me Section */}
                <Menu.Item
                  name='aboutMe' 
                  active={activeItem === 'aboutMe'}
                  spy={true} 
                  onClick={this.handleItemClick}
                  as={Link}
                  to='aboutMe'
                  activeClass='active'
                  onSetActive={this.handleSetActive}
                  smooth={true} 
                  duration={1000} 
                  offset={50}
                >
                  About Me
                </Menu.Item>

                {/* Skill Section */}
                <Menu.Item
                  name='skill' 
                  active={activeItem === 'skill'}
                  spy={true} 
                  onClick={this.handleItemClick}
                  as={Link}
                  to='skill' 
                  smooth={true} 
                  duration={1000}
                  offset={70} 
                >
                  Skill
                </Menu.Item>

                {/* Portfolio Section */}
                <Menu.Item
                  name='portfolio' 
                  active={activeItem === 'portfolio'}
                  activeClass='active'
                  spy={true} 
                  onClick={this.handleItemClick}
                  as={Link}
                  to='portfolio' 
                  smooth={true} 
                  duration={1000} 
                  offset={90}
                >
                  Porfolio
                </Menu.Item>
               
                {/* Practice Section */}
                <Menu.Item
                  name='practiceProbs' 
                  active={activeItem === 'practiceProbs'}
                  onClick={this.handleItemClick}
                  as={Link}
                  to='practiceProbs' 
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-250}
                >
                  Practice Problems
                </Menu.Item>
                
                {/* Contact Section */}
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed} href='mailto:kennyle37@gmail.com' target='_blank'>
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

NavBar.propTypes = {
  children: PropTypes.node,
}

export default NavBar;