import React, { Component } from 'react'

import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

import Banner from './Banner'

class NavBar extends Component {
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
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
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

NavBar.propTypes = {
  children: PropTypes.node,
}

export default NavBar;