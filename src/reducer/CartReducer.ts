import { IFood } from "../types/IFood";

export type State = {
  cartItems: IFood[];
  totalPrice: number;
};

export type Action =
  | { type: "ADD_ITEM"; item: IFood }
  | { type: "REMOVE_ITEM"; item: IFood }
  | { type: "CALCULATE_TOTAL" };

export const initialState: State = {
  cartItems: [],
  totalPrice: 0,
};

export const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.cartItems.find(
        (prevItem) => prevItem.id === action.item.id
      );
      const updatedItems = existingItem
        ? state.cartItems.map((prevItem) =>
            prevItem.id === action.item.id
              ? { ...prevItem, quantity: (prevItem.quantity || 1) + 1 }
              : prevItem
          )
        : [...state.cartItems, { ...action.item, quantity: 1 }];
      return {
        ...state,
        cartItems: updatedItems,
      };
    }
    case "REMOVE_ITEM": {
      const updatedItems = state.cartItems
        .map((prevItem) =>
          prevItem.id === action.item.id
            ? { ...prevItem, quantity: (prevItem.quantity || 1) - 1 }
            : prevItem
        )
        .filter((item) => item.quantity && item.quantity > 0);
      return {
        ...state,
        cartItems: updatedItems,
      };
    }
    case "CALCULATE_TOTAL": {
      const totalPrice = state.cartItems.reduce((total, item) => {
        return total + Number(item.price) * (item.quantity || 1);
      }, 0);
      return {
        ...state,
        totalPrice,
      };
    }
    default:
      return initialState;
  }
};
