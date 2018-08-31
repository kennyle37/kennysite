import React from 'react';
import { Grid, Header, Responsive, Image } from 'semantic-ui-react'

const About = () => (
  <Responsive>
    <Grid container verticalAlign='middle' style={{ padding: '27em 5em' }}>
      <Grid.Row>
        <Grid.Column width={8}  mobile={16} tablet={8} computer={8}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            About me:
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </Grid.Column>
        <Grid.Column floated='right' width={6} mobile={12} tablet={6} computer={6}>
          <Image bordered rounded size='large' src='https://i.imgur.com/l99p2C7.jpg' height='600' width='600' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      </Grid.Row>
    </Grid>
  </Responsive>
)

export default About;
