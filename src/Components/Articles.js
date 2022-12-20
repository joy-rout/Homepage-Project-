import React, { Component } from "react";
import "./Articles.css";
import Slider from "react-slick";
import Article1 from "./Images/article1.svg";
import Article2 from "./Images/article2.svg";
import Article3 from "./Images/article3.svg";
import Article4 from "./Images/article4.svg";
import Article5 from "./Images/article5.svg";
import Article6 from "./Images/article6.svg";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      dots: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
        autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      speed: 500,
      rtl: true,
    };
    return (
      <div className="ArticleSlider">
        <h2>Articles </h2>
        <Slider {...settings}>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article1} />
              <h3>Advantages of good sleep</h3>
              <h5 class="alignleft">Medium</h5>
              <h5 class="alignright">2 days ago.</h5>
            </div>
          </div>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article2} />
              <h3>5 steps of healthy life</h3>
              <h5 class="alignleft">Medium</h5>
              <h5 class="alignright">3 days ago.</h5>
            </div>
          </div>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article3} />
              <h3>improve your mental health</h3>
              <h5 class="alignleft">Medium</h5>
              <h5 class="alignright">4 days ago.</h5>
            </div>
          </div>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article4} />
              <h3>work on your sleep cycle</h3>
              <h5 class="alignleft">Medium</h5>
              <h5 class="alignright">A day ago.</h5>
            </div>
          </div>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article5} />
              <h3>yeeyyy games kheloo</h3>
              <h5 class="alignleft">Medium</h5>
              <h5 class="alignright">2 days ago.</h5>
            </div>
          </div>
          <div>
            <div className="Article">
              <img className="ArticleImage" alt="Articles" src={Article6} />
              <h3>spotify pe gana suno aur soo jao</h3>

              <h5 class="alignleft">Medium</h5>
              <h5 class="alignright">6 days ago.</h5>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
