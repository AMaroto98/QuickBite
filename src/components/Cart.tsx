import { useContext, useEffect } from "react";
import { LocationContext } from "../provider/LocationProvider";
import { CartContext } from "../provider/CartProvider";
import { IFood } from "../types/IFood";

export function Cart() {
  const { setLocation } = useContext(LocationContext);
  const { cartItems, totalPrice, dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [cartItems, dispatch]);

  function handleChangeLocation(cartLocation: string) {
    setLocation(cartLocation);
  }

  function handleAddItemCart(item: IFood) {
    dispatch({ type: "ADD_ITEM", item });
  }

  function handleRemoveItemCart(item: IFood) {
    dispatch({ type: "REMOVE_ITEM", item });
  }

  return (
    <>
      <h2>Your Cart</h2>
      <ul>
        {cartItems
          .filter((item) => item.quantity && item.quantity > 0)
          .map((item, index) => (
            <li key={index}>
              <div className="cart-item">
                {item.name} - {item.quantity} x ${item.price}
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveItemCart(item)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => handleAddItemCart(item)}>+</button>
                </div>
              </div>
            </li>
          ))}
      </ul>

      <p className="cart-total">${totalPrice.toFixed(2)}</p>

      <div className="modal-actions">
        <button
          className="text-button"
          onClick={() => handleChangeLocation("Landing")}
        >
          Close
        </button>

        {totalPrice >= 1 && (
          <button
            className="button"
            onClick={() => handleChangeLocation("Checkout")}
          >
            Go to Checkout
          </button>
        )}
      </div>
    </>
  );
}
