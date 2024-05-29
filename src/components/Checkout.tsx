import { useContext, useState } from "react";
import { LocationContext } from "../provider/LocationProvider";
import { CartContext } from "../provider/CartProvider";

export function Checkout() {
  const { setLocation } = useContext(LocationContext);
  const { totalPrice } = useContext(CartContext);

  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (form.checkValidity()) {
      setIsValid(true);
      setLocation("Success");
    } else {
      setIsValid(false);
    }
  };

  function handleChangeLocation(checkoutLocation: string) {
    setLocation(checkoutLocation);
  }

  return (
    <>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="control">
          <p>Total Amount: ${totalPrice} </p>

          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" required minLength={3} maxLength={25} />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" required />
          </div>

          <div className="input-group">
            <label htmlFor="street">Street</label>
            <input type="text" required minLength={5} maxLength={55} />
          </div>

          <div className="input-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input type="text" required minLength={3} />
          </div>

          <div className="input-group">
            <label htmlFor="city">City</label>
            <input type="text" required minLength={3} />
          </div>
        </div>
        <div className="modal-actions">
          <button
            className="text-button"
            onClick={() => handleChangeLocation("Landing")}
          >
            Close
          </button>
          <button className="button" type="submit">
            Submit Order
          </button>
        </div>
      </form>
    </>
  );
}
