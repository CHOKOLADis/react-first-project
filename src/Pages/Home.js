import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel"
import CarouselBox from "../Components/CarouselBox"
import {Container,CardDeck,Card, Button} from "react-bootstrap"

export default class Home extends Component {
  render() {
    return (
      <div className="content">
        
        <h1> home page</h1>
        <div className="slider">
          <CarouselBox/>
        </div>
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardDeck className="m-4">
            <Card>
              <Card.Img 
                variant="top"
                src="https://www.siennaedge.com/wp-content/uploads/2018/03/start-up-programming-team-960x640@2x.jpg"
                />
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  <Card.Text>
                    Exercitation Lorem ipsum velit id quis cupidatat veniam nulla labore eiusmod tempor.
                  </Card.Text>
                  <Button variant="primary">About team</Button>
                </Card.Body>      
            </Card>
            <Card border="primary">
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  <Card.Text>
                    Exercitation Lorem ipsum velit id quis cupidatat veniam nulla labore eiusmod tempor.
                  </Card.Text>
                  <Button variant="primary">About team</Button>
                </Card.Body>   
                <Card.Img 
                variant="bottom"
                src="https://www.siennaedge.com/wp-content/uploads/2018/03/start-up-programming-team-960x640@2x.jpg"
                />   
            </Card>
            <Card>
              <Card.Img 
                variant="top"
                src="https://www.siennaedge.com/wp-content/uploads/2018/03/start-up-programming-team-960x640@2x.jpg"
                />
                <Card.Body>
                  <Card.Title>Developers</Card.Title>
                  <Card.Text>
                    Exercitation Lorem ipsum velit id quis cupidatat veniam nulla labore eiusmod tempor.
                  </Card.Text>
                  <Button variant="primary">About team</Button>
                </Card.Body>      
            </Card>
          </CardDeck>
        </Container>
      </div>
    );
  }
}
