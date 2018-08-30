import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react'
import { Element } from 'react-scroll'

const Portfolio = () => (
  <Element name='portfolio' className='element' >
    <Grid columns='three' divided textAlign='center' style={{ padding:'15em 15em' }}>
      <Header as='h3' style={{ fontSize: '2em', padding: '1em 1em'}}>
        Portfolio
      </Header>

      <Grid.Row>

        <Grid.Column>
          <Image 
            centered 
            bordered 
            src='https://s3.amazonaws.com/poly-screenshots.angel.co/Project/71/788234/d796385db90f6711ad4390017215136c-original.PNG' 
            alt='payme' 
            height='250' 
            width='250' 
          />
          <h1><strong>PayMe</strong></h1>
          <p style={{ fontSize: '1.33em' }}>An app that helps user negotiate their salary.</p>
        </Grid.Column>

        <Grid.Column>
          <Image 
            centered 
            bordered 
            src='https://s3.amazonaws.com/poly-screenshots.angel.co/Project/4b/787514/6a8cf9ee74e865b0db326367dfab1340-original.jpeg' 
            height='250' 
            width='250' 
          />
          <h1><strong>KitchenTime</strong></h1>
          <p style={{ fontSize: '1.33em' }}>An app that recommends cooking recipes based on user's grocery list.</p>
        </Grid.Column>

        <Grid.Column>
          <Image 
            centered 
            bordered 
            src='https://s3.amazonaws.com/poly-screenshots.angel.co/Project/8a/787523/53bcefb73bda63b82a2dde9cd7e743af-original.jpeg' 
            height='250' 
            width='250' 
          />
          <h1><strong>Quiz 'o Saurus</strong></h1>
          <p style={{ fontSize: '1.33em' }}>A dinosaur-themed quizlet app for kids.</p>
        </Grid.Column>

      </Grid.Row>

    </Grid>
    </Element>
)

export default Portfolio;
