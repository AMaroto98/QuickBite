import { useContext } from "react";
import { LocationContext } from "../provider/LocationProvider";

export function Success() {
  const { setLocation } = useContext(LocationContext);

  function handleChangeLocation(successLocation: string) {
    setLocation(successLocation);
  }

  return (
    <div>
      <h2>Success!</h2>
      <p>Your order was submited successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <div className="modal-actions">
        <button
          className="button"
          onClick={() => handleChangeLocation("Landing")}
        >
          Okay
        </button>
      </div>
    </div>
  );
}
