import React, { Component } from 'react'

import Carousel from 'react-bootstrap/Carousel'

export class BootstrapCarousel extends Component {
    render() {


        return (
            <div>
               <Carousel>
  <Carousel.Item>
    <img
      className="first"
      src="dl.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3  className="test">First slide label</h3>
      <p  className="test">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="second"
      src="logo192.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="third"
      src="download.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }

}
export default BootstrapCarousel;