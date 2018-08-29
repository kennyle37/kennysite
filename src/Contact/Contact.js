import React from 'react';
import { Grid, Header, Image, Segment} from 'semantic-ui-react'

const Contact = () => (
  <Segment style={{ padding: '20em 20em' }} vertical>
    <Grid container stackable>
      <Grid.Row>
        <Grid.Column width={4}></Grid.Column>
        <Grid.Column width={8}>
          <Header as='h3' style={{ fontSize: '2em' }} textAlign='center'>
            Contact Me:
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </Grid.Column>
        <Grid.Column width={4}></Grid.Column>
      </Grid.Row>
      <Grid.Row>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Contact;