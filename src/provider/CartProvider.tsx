import { createContext, useReducer } from "react";
import { IProvider } from "../types/context/IProvider";
import { ICartContext } from "../types/context/ICartContext";
import { cartReducer, initialState } from "../reducer/CartReducer";

export const CartContext = createContext<ICartContext>({
  cartItems: [],
  totalPrice: 0,
  dispatch: () => {},
});

export function CartProvider({ children }: IProvider) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
 
  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        totalPrice: state.totalPrice,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
