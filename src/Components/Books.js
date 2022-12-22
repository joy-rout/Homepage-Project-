import React, { Component } from "react";
import "./Books.css";
import Slider from "react-slick";
import Books1 from "./Images/Books1.svg";
import Books2 from "./Images/Books2.svg";
import Books3 from "./Images/Books3.svg";
import Books4 from "./Images/Books4.svg";
import Books5 from "./Images/Books5.svg";
import Books6 from "./Images/Books6.svg";
import Books7 from "./Images/Books7.svg";
import Books8 from "./Images/Books8.svg";

export default class CenterMode extends Component {
  render() {
    

    const settings = {
      className: "books",
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
      <div  className="booksSlider">
        <h2>Books</h2>
        <Slider {...settings}>
          <div >
            <div className="Books">
              <img className="BooksImage" alt="Bookss" src={Books1} />
              <h3>Maybe You Should talk to someone</h3>
            </div>
          </div>
          <div >
            <div className="Books">
              <img className="BooksImage" alt="Bookss" src={Books2} />
              <h3>The Body keeps the score</h3>
            </div>
          </div>
          <div >
            <div className="Books">
              <img className="BooksImage" alt="Bookss" src={Books3} />
              <h3>Stop Overthinking</h3>
            </div>
          </div>
          <div >
            <div className="Books">
              <img className="BooksImage" alt="Bookss" src={Books4} />
              <h3>Don't CAll me crazy</h3>
            </div>
          </div>
          <div >
            <div className="Books">
              <img className="BooksImage" alt="Bookss" src={Books5} />
              <h3>Maybe You Should talk to someone</h3>
            </div>
          </div>
          <div >
            <div className="Books">
              <img className="BooksImage" alt="Bookss" src={Books6} />
              <h3>The Body keeps the score</h3>
            </div>
          </div>
          <div >
            <div className="Books">
              <img className="BooksImage" alt="Bookss" src={Books7} />
              <h3>Stop Overthinking</h3>
            </div>
          </div>
          <div >
            <div className="Books">
              <img className="BooksImage" alt="Bookss" src={Books8} />
              <h3>Don't CAll me crazy</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
