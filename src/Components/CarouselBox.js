import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel"
import forest from "../assets/forest.jpg"
import forest2 from "../assets/forest2.jpg"
import forest3 from "../assets/forest3.jpg"

export default class CarouselBox extends Component {
  render() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"    
                    src={ forest }
                    alt="img"
                />
                <Carousel.Caption>
                    <h3>Mount img</h3>
                    <p>Eu ut exercitation dolor amet tempor nulla adipisicing esse.</p>                        
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"    
                    src={ forest2 }
                    alt="img"
                />
                <Carousel.Caption>
                    <h3>Pesok img</h3>
                    <p>Eu ut exercitation dolor amet tempor nulla adipisicing esse.</p>                        
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"    
                    src={ forest3 }
                    alt="img"
                />
                <Carousel.Caption>
                    <h3>Palma img</h3>
                    <p>Eu ut exercitation dolor amet tempor nulla adipisicing esse.</p>                        
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  }
}
