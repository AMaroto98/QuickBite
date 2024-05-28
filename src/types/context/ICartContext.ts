import { Action } from "../../reducer/CartReducer";
import { IFood } from "../IFood";
import { Dispatch } from "react";
export interface ICartContext {
  cartItems: IFood[];
  totalPrice: number;
  dispatch: Dispatch<Action>;
}