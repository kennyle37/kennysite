import React, { Component } from 'react'
import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import { Link, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import PropTypes from 'prop-types'
import Banner from './Banner'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home'};
    this.scrollToTop = this.scrollToTop.bind(this);
  }

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

  scrollToElement() {
    scroller.scrollTo('aboutMe', {
      activeClass: 'active',
      duration: 1000,
      smooth: true,
      spy: true,
      offset: 70
    })
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
                  onClick={this.handleItemClick}
                >
                  <Link onClick={this.scrollToTop}>
                    Home
                  </Link>
                </Menu.Item>
         

                {/* About Me Section */}
                <Menu.Item                   
                    name='aboutMe' 
                    active={activeItem === 'aboutMe'}
                    onClick={this.handleItemClick}
                  >
                  <Link
                    activeClass='active' 
                    to='aboutMe' 
                    spy={true} 
                    smooth={true} 
                    duration={1000} 
                    offset={70}
                    onSetActive={this.handleSetActive}
                  >
                    About Me
                  </Link>
                </Menu.Item>

                {/* Skill Section */}
                <Menu.Item
                    name='skill' 
                    active={activeItem === 'skill'}
                    onClick={this.handleItemClick}
                  >
                  <Link
                    activeClass='active' 
                    to='skill' 
                    spy={true} 
                    smooth={true} 
                    duration={1000}
                    offset={-350} 
                    onSetActive={this.handleSetActive}
                  >
                    Skill
                  </Link>
                </Menu.Item>

                {/* Portfolio Section */}
                <Menu.Item
                  name='portfolio' 
                  active={activeItem === 'portfolio'}
                  onClick={this.handleItemClick}
                >
                  <Link
                    activeClass='active' 
                    to='portfolio' 
                    spy={true} 
                    smooth={true} 
                    duration={1000} 
                    offset={0}
                    onSetActive={this.handleSetActive}
                  >
                    Porfolio
                  </Link>
                </Menu.Item>
               

                {/* Practice Section */}
                <Menu.Item
                  name='practiceProbs' 
                  active={activeItem === 'practiceProbs'}
                  onClick={this.handleItemClick}
                >
                  <Link
                  activeClass='practiceProbs' 
                  to='practiceProbs' 
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-250}
                  onSetActive={this.handleSetActive}
                >
                    Practice Problems
                  </Link>
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