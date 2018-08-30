import React from 'react';
import { Container, Grid, Header, List, Segment} from 'semantic-ui-react'

const Contact = () => (
  <Segment inverted vertical style={{ padding: '2em 0em' }}>
  <Container>
    <Grid divided inverted stackable>
      <Grid.Row>
        <Grid.Column width={3}></Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h4' content='Info' />
          <List link inverted>
            <List.Item as='a' href='mailto:kennyle37@gmail.com' target='_blank'>Contact Me</List.Item>
            <List.Item as='a' href='https://www.linkedin.com/in/kle37/' target='_blank'>LinkedIn</List.Item>
            <List.Item as='a' href='https://github.com/kennyle37' target='_blank'>Github</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header as='h4' inverted>
            Questions?
          </Header>
          <p>
            Please contact me for my most up to date resume!
          </p>
        </Grid.Column>
        <Grid.Column width={3}></Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
</Segment>
)

export default Contact;