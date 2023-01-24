import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);

  const handleAddToCart = (data) => {
    let filterArray = cart.filter((e) => {
      return e.id === data.id;
    });
    if (filterArray.length === 0) {
      let newCart = [...cart];
      newCart.push(data);
      setCart(newCart);
    } else {
      const index = cart.findIndex((e) => {
        return e.id === data.id;
      });
      let newObj = { ...cart[index] };
      newObj.item = newObj.item + 1;
      let newArr = [...cart];
      newArr[index] = newObj;
      setCart(newArr);
    }
  };

  const handleIncDec = (data, type) => {
    const index = cart.findIndex((e) => {
      return e.id === data.id;
    });
    let newObj = { ...cart[index] };
    if (type === "minus" && newObj.item > 1) {
      newObj.item -= 1;
    }
    if (type === "plus") {
      newObj.item += 1;
    }
    let newArr = [...cart];
    newArr[index] = newObj;
    setCart(newArr);
  };

  const handleCancel = (i) => {
    let newCart = [...cart];
    newCart.splice(i, 1);
    setCart(newCart);
  };

  return (
    <div className="App">
      <NavBar sentFromNav={(val) => setShow(!val)} cart={cart} />
      {show && (
        <>
          {" "}
          <Card handleAddToCart={(data) => handleAddToCart(data)} />
          <Cart
            carts={cart}
            handleCancel={(i) => handleCancel(i)}
            handleAddToCart={handleAddToCart}
            handleIncDec={(e, type) => handleIncDec(e, type)}
          />
          <Footer />
        </>
      )}
    </div>
  );
}
export default App;
