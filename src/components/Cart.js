import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useState } from "react";
import cartempty from "../utils/cartempty.gif";
import emptyCart from "../utils/emptyCart.gif";
import adc from "../utils/adc.png";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const [showbutton, setShowButton] = useState(true);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    setShowButton(false);
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  return (
    <div className="m-4 p-4 font-bold text-xl text-center">
      {showbutton && (
        <button
        className="m-2 p-3 bg-red-700 text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      )}
      <div>
        {/* {cartItems.length === 0 && <h1>Add items to the cart !!</h1>} */}
        <div>
          {cartItems.length === 0 && (
            <div>
            <img className="w-1/3 h-1/3 hover:cursor-pointer place self-center" src={adc} alt="" />
            <h1>Add items to cart</h1>
            </div>
          )}
        </div>
        <ItemList items={cartItems} />
        {showbutton && (
          <button
            className="m-2 p-2 bg-black text-white rounded-lg"
            onClick={handleRemoveItem}
          >
            Remove Item
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
