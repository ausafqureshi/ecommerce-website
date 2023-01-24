import React, { useState } from "react";
import Form from "./Form_validation";
import { FiSearch } from "react-icons/fi";
import { BsChevronDown, BsCartDash } from "react-icons/bs";
import ecom from "./img/ecom.png"

function NavBar(props) {
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");

  const handleOpenModal = (val) => {
    setOpenModal(val);
    props.sentFromNav(val);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <img
            alt="logo"
            className="logo-img"
            src={ecom}
          />
        </div>{" "}
        <p> {name} </p>
        <div className="searchBar">
          <input
            className="intpt"
            type="text"
            placeholder="serarch for product, brands and more"
            onChange={(inputVal) => handleInput(inputVal)}
          />
          <span className="FiSearch">
            <FiSearch />
          </span>
        </div>
        <div className="login">
          <button id="loginBtn" onClick={() => handleOpenModal(true)}>
            Log In
          </button>
        </div>
        <div className="seller">
          <a href="become a seller" className="seller-tag">
            {" "}
            become a seller{" "}
          </a>
        </div>
        <div className="more-dv">
          <p className="more">
            More{" "}
            <span className="BsChevronDown">
              <BsChevronDown />
            </span>
          </p>
        </div>
        <div className="cart">
          <p className="cart-para">
            <span className="BsCartDash">
              <BsCartDash />
            </span>
            <sup className="sup-cart-length">{props.cart.length === 0 ? "" : props.cart.length} </sup>
          </p>
        </div>
      </div>
      {openModal && <Form closeModal={(val) => handleOpenModal(val)} />}
    </>
  );
}
export default NavBar;
