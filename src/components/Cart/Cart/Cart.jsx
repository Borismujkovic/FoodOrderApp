import { Modal } from "../../UI/Modal/Modal";
import { CartContext } from "../../../store/cart-context";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import { useContext } from "react";

export const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1})
  };

  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((e) => (
        <CartItem
          key={e.id}
          name={e.name}
          amount={e.amount}
          price={e.price}
          onRemove={cartItemRemoveHandler.bind(null, e.id)}
          onAdd={cartItemAddHandler.bind(null, e)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};
