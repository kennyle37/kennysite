import React from 'react'
import { Form, Card, Grid, Header, Label, Segment } from 'semantic-ui-react'

const img = 'https://wallpapercave.com/wp/no4OgdQ.jpg';

const Skill = () => (
  <Segment style={{ padding: '27em 5em'}}>
    <Grid className='skill-list' stackable columns={4}>
      <Grid.Row stretched>
        <Grid.Column className='front-end'>
          <Segment raised >
            <Label as='a' color='teal' content='Front End' ribbon />
              <Segment vertical>
                JavaScript(ES5, ES6), React, Redux, Angular, jQuery, HTML, CSS, SemanticUI
              </Segment>
          </Segment>
        </Grid.Column>


        <Grid.Column className='back-end'>
          <Segment raised >
            <Label as='a' color='blue' content='Back End' ribbon />
              <Segment vertical>
                MySQL, MongoDB, Mongoose, Knex, Bookshelf, NodeJS, Express
              </Segment>
          </Segment>
        </Grid.Column>

        <Grid.Column className='testing'>
          <Segment raised >
            <Label as='a' color='teal' content='Testing' ribbon='right' />
              <Segment vertical>
                Jest, Travis CI, Mocha, Chai
              </Segment>
          </Segment>
        </Grid.Column>

        <Grid.Column className='misc'>
          <Segment raised >
            <Label as='a' color='blue' content='Misc' ribbon='right' />
              <Segment vertical>
                API, Heroku, Git flow, NPM, Yarn, Agile methodology
              </Segment>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default Skill;
