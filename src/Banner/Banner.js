import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
/*
This function adds our background banner and add the parralax scrolling effect to it.
*/
const Banner = () => (
  <div>
     <Parallax 
      blur={{min: -10, max: 10}}
      bgImage={'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}
      strength={500}>
      <div style={{height: 600}}>
        {/* {Contact me button} */}
      </div>
    </Parallax>
    <Parallax 
      blur={{min: -10, max: 10}}
      bgImage={'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}
      strength={500}>
      <div style={{height: 600}}>
        {/* {Contact me button} */}
      </div>
    </Parallax>
    <Parallax 
      blur={{min: -10, max: 10}}
      bgImage={'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}
      strength={500}>
      <div style={{height: 600}}>
        {/* {Contact me button} */}
      </div>
    </Parallax>
  </div>
)

class HeaderBar extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

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
            style={{ minHeight: 700, padding: '1em 0em' }}
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
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Home</Menu.Item>
                <Menu.Item as='a'>About Me</Menu.Item>
                <Menu.Item as='a'>Porfolio</Menu.Item>
                <Menu.Item as='a'>Practice Problems</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Contact
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

HeaderBar.propTypes = {
  children: PropTypes.node,
}

export default HeaderBar;

