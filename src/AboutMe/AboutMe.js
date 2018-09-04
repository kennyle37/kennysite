import React from 'react';
import { Grid, Header, Responsive, Image, Segment } from 'semantic-ui-react'

const img = 'https://clip2art.com/images/drawn-wallpaper-artistic-art-5.jpg';

const About = () => (

  <Responsive>
    <Grid container stackable verticalAlign='middle' style={{ padding: '12em 2em' }}>
      <Grid.Row>
        <Grid.Column width={8}  mobile={16} tablet={8} computer={8}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            About me:
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            <p>Hello, my name is Kenny!</p>

            <p>I am a Full-Stack Software Engineer with a passion for clean, modular, and scalable applications. 
            I have a growth driven mentality, and difficult challenges fuel my passion as a developer. 
            Currently, I am sharpening my coding skills by completing daily challenges on Leetcode and HackeRank, 
            and improving on my critical thinking mindset by devouring data structure and algorithm books. 
            I built this website so that I would have a place to reflect on my journey and growth as a developer, 
            and uses it as a domain to record my challenges and achievements.</p>

            <p>I am experienced in using MySQL, Mongo, and Node.js/Express to create RESTful APIs and service-oriented architecture, 
            as well as React, Angular, JavaScript, HTML, and CSS for a dynamic and intuitive frontend experience. 
            My tool belt also includes jQuery, JavaScript, HTML, Redux, React Router, Semantic-UI, 
            Babel, Webpack, Heroku, AWS, Mocha, Chai, Jest, TDD, Git, and many more! 
            I am currently learning Python and picking up additional frameworks to make me a more competitive candidate 
            as well as broadening my own horizon. During my free time, I frequently read coding and life-guide books
            and will wind down the day by reading a Fantasy or Science Fiction novel. 
            I am a travel enthusiast. It is my goal to visit as many countries as possible, especially the “Instagram famous” spots :). </p>

            <p>I hope you enjoy my website, and if you have any questions, please do not hesitate to contact me!</p>
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
