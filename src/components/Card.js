import React from "react";
import Data from "./Data.json";
function Card(props) {
  return (
    <div className="cardContainer">
      {Data.boatHead.map((e, i) => {
        return (
          <div className="card" key={i}>
            <img
              className="cardImg"
              alt="photos"
              src={e.image}
              onClick={() => props.handleAddToCart(e, i)}
            />
            <div className="tagline">
              <span className="tagName">{e.name}</span>
              <span className="tagColor">{e.color}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Card;
