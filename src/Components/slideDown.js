import React, { useState } from "react";
import "./slidedown.css";

function Slide() {
  return (
    <div>
      <input type="checkbox" name="toggle" id="toggle" />
      <label for="toggle"></label>

      <div class="container">
        <h1>Pure CSS3 Slide Down Toggle Demo</h1>
        <h2> Click the Open button to see hidden mesage.</h2>
      </div>

      <div class="message">
        <h1> hello, I'm a hidden message. You found it.</h1>
        <h2>Now Click the Heart button in the bottom to support CSS3</h2>
      </div>
    </div>
  );
}

export default Slide;
