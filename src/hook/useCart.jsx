import { useContext } from "react";
import CartContext from "../context/cartcontext";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;