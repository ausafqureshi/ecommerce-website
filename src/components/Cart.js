import React from "react";

function Cart(props) {
  return (
    <div className="cart_container">
      {props.carts.map((e, i) => {
        return (
          <div className="cartBox" key={i}>
            <p>Your Cart</p>
            <img className="cart-img" alt="photos" src={e.image} />
            <p>
              {" "}
              <button
                className="smallBtn"
                onClick={() => props.handleIncDec(e, "minus")}
              >
                -
              </button>{" "}
              {e.item}{" "}
              <button
                className="smallBtn"
                onClick={() => props.handleIncDec(e, "plus")}
              >
                +
              </button>{" "}
            </p>
            <button
              className="btn-cancel"
              onClick={() => props.handleCancel(i)}
            >
              Cancel
            </button>
            <button className="btn-payment">Proceed to payment</button>
            <span>Total ₹ {e.MRP * e.item} </span>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
