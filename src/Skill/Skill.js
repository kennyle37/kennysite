import React from 'react'
import { Grid, Header, Image, Label, Segment } from 'semantic-ui-react'

const Skill = () => (
  <Grid container columns={2}>
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
)

export default Skill;
