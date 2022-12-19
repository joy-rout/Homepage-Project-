/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Slider.css";
import leftArrow from "./Images/left-arrow.png";
import rightArrow from "./Images/right-arrow.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}