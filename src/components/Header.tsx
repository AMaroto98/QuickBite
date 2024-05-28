import { useContext } from "react";
import { LocationContext } from "../provider/LocationProvider";
import { Dialog } from "./Dialog";
import { Cart } from "./Cart";
import { Checkout } from "./Checkout";
import { Success } from "./Success";
import { CartContext } from "../provider/CartProvider";

export function Header() {
  const { location, setLocation } = useContext(LocationContext);
  const { cartItems } = useContext(CartContext);

  function handleChangeLocation() {
    setLocation("Cart");
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src="src/assets/logo.jpg" alt="Logo ReactFood" />
        <h1>REACTFOOD</h1>
      </div>
      <button className="text-button" onClick={handleChangeLocation}>
        Cart ({cartItems.length})
      </button>

      {(location === "Cart" ||
        location === "Checkout" ||
        location === "Success") && (
        <Dialog>
          {location === "Cart" ? (
            <Cart />
          ) : location === "Checkout" ? (
            <Checkout />
          ) : location === "Success" ? (
            <Success />
          ) : null}
        </Dialog>
      )}
    </header>
  );
}
