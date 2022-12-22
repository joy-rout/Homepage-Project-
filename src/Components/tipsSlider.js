import React, { Component } from "react";
import "./tipsSlider.css";
import Slider from "react-slick";
import Tip1 from "./Images/tips-1.svg";
import Tip2 from "./Images/tips-2.svg";
import Tip3 from "./Images/tips-3.svg";
import Tip4 from "./Images/tips-4.svg";
import Tip5 from "./Images/tips-5.svg";
import Tip6 from "./Images/tips-6.svg";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      dots: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="tipSlider">
        <h2>See All Tips</h2>
        <Slider {...settings}>
          <div className="tip">
            <div className="tip1">
              <img className="tipImage" alt="tips" src={Tip1} />
              <h3>Learn More..</h3>
            </div>
          </div>
          <div className="tip">
            <div className="tip2">
              <img className="tipImage" alt="tips" src={Tip2} />
              <h3>Learn More..</h3>
            </div>
          </div>
          <div className="tip">
            <div className="tip3">
              <img className="tipImage" alt="tips" src={Tip3} />
              <h3>Learn More..</h3>
            </div>
          </div>
          <div className="tip">
            <div className="tip4">
              <img className="tipImage" alt="tips" src={Tip4} />
              <h3>Learn More..</h3>
            </div>
          </div>
          <div className="tip">
            <div className="tip5">
              <img className="tipImage" alt="tips" src={Tip5} />
              <h3>Learn More..</h3>
            </div>
          </div>
          <div className="tip">
            <div className="tip6">
              <img className="tipImage" alt="tips" src={Tip6} />
              <h3>Learn More..</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
