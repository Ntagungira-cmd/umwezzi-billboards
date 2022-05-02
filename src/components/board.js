import React from "react";
import "../styles/Board.css"
import boards from "./../app/boards";
import cardCover from "../assets/figma-neumorphism-cards.jpg";

function board(props) {
  return (
    <div className="card">
      <img
        src={cardCover}
        alt="Board Poster"
        className="card-img-top imageSize"
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p>2 x 3</p>
        <p>availaility:20</p>
        <div className="subCards">
          <div>
            <h6>price:20000frw</h6>
          </div>
          <div>
            <button className="cardButton">lent board</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default board;
