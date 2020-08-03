import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import React, { Component } from 'react'
import './slidershow.css';

export default class Slideshow extends Component {
  render() {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div className="img1">
            </div>
          </div>
          <div className="each-slide">
            <div className="img2">
            </div>
          </div>
          <div className="each-slide">
            <div className="img3">
            </div>
          </div>
        </Slide>
      </div>
    )
  }
}
