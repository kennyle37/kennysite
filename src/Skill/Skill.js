import React from 'react'
import { Grid, Header, Label, Segment } from 'semantic-ui-react'

const Skill = () => (
  <Segment className='skill-section' style={{ padding:'15em 15em' }}>
    <Header 
      textAlign='center' 
      as='h3' 
      style={{ fontSize: '2em', padding: '1em 1em'}}
    >
      Skills
    </Header>
    <Grid container columns={2} verticalAlign='middle'>
      <Grid.Column>
        <Segment raised>
          <Label as='a' color='teal' ribbon>
            Frontend
          </Label>
            <Segment vertical>
              JavaScript(ES5, ES6), React, Redux, Angular, jQuery, HTML, CSS, SemanticUI
            </Segment>

          <Label as='a' color='blue' ribbon>
            Backend
          </Label>
            <Segment vertical>
              MySQL, MongoDB, Mongoose, Knex, Bookshelf, NodeJS, Express
            </Segment>

        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment raised>
          <Label as='a' color='blue' ribbon='right'>
            Testing
          </Label>
            <Segment vertical>
              Jest, Travis CI, Mocha, Chai
            </Segment>

          <Label as='a' color='teal' ribbon='right'>
            Miscellaneous
          </Label>
          <Segment vertical>
            API, Heroku, Git flow, NPM, Yarn, Agile methodology
          </Segment>

        </Segment>
      </Grid.Column>
    </Grid>
  </Segment>
)

export default Skill;