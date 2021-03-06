import React from 'react';
import { Button, Header, Grid, Image } from 'semantic-ui-react'

const Portfolio = () => (
  <Grid columns='three' stackable textAlign='center' style={{ padding:'10em 5em' }} className='portfolio-section'>
    <Header as='h3' style={{ fontSize: '2em', padding: '1em 1em'}}>
      Portfolio
    </Header>

    <Grid.Row>

      <Grid.Column mobile={16} tablet={8} computer={4}>
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
        <Button basic color='black' content='Demo' href='https://nameless-falls-51335.herokuapp.com/login' target="_blank"/>
        <Button basic color='black' content='Code' href='https://github.com/team-alloy/payMe' target="_blank" />
      </Grid.Column>

      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image 
          centered 
          bordered 
          src='https://photos.google.com/photo/AF1QipO9-IKaYcn8zLd-Rt660AqM-V1vtaRysD_Ue6jw' 
          height='250' 
          width='250' 
        />
        <h1><strong>KitchenTime</strong></h1>
        <p style={{ fontSize: '1.33em' }}>An app that recommends cooking recipes based on user's grocery list.</p>
        <Button basic color='black' content='Code' href='https://github.com/TeamAppleJacks/pantry-patron' target="_blank"/>
      </Grid.Column>

      <Grid.Column mobile={16} tablet={8} computer={4}>
        <Image 
          centered 
          bordered 
          src='https://photos.google.com/photo/AF1QipOQcEBFYwhMItRKe5POje1FsI9iFX20Zz8L8rDS' 
          height='250' 
          width='250' 
        />
        <h1><strong>Quiz 'o Saurus</strong></h1>
        <p style={{ fontSize: '1.33em' }}>A dinosaur-themed quizlet app for kids.</p>
        <Button basic color='black' content='Code' href='https://github.com/TeamAppleJacks/TeamAppleJacks' target="_blank"/>
      </Grid.Column>

    </Grid.Row>

  </Grid>
)

export default Portfolio;
