import React from 'react';
import { Grid, Header, Image, Segment } from 'semantic-ui-react'
import { Element } from 'react-scroll'

const About = () => (

  // <Segment style={{ padding: '26em 15em' }}>
    <Element name='aboutMe' className='element'>
    <Grid container stackable verticalAlign='middle' style={{ padding: '24em 5em' }}>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            About me:
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </Grid.Column>
        <Grid.Column floated='right' width={6}>
          <Image bordered rounded size='large' src='https://i.imgur.com/l99p2C7.jpg' height='400' width='400' />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
      </Grid.Row>
    </Grid>
    </Element>
  // </Segment>

)

export default About;
