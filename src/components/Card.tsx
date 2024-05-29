import { useContext } from "react";
import { CartContext } from "../provider/CartProvider";
import { IFood } from "../types/IFood";

export function Card({ name, price, description, image, id }: IFood) {
  const { dispatch } = useContext(CartContext);

  function addToCart(item: IFood) {
    dispatch({ type: "ADD_ITEM", item });
  }

  return (
    <div className="meal-item" id={`${id}`}>
      <article>
        <img src={`${image}`} alt={`${name}`} />
        <h3>{name}</h3>
        <div className="meal-item-description">
          <div className="meal-item-price">${price}</div>
          <p>{description}</p>
        </div>
        <div className="meal-item-actions">
          <button
            className="button"
            onClick={() => addToCart({ name, price, description, image, id })}
          >
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
}
