import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../CustomHooks/useCart";
import useProducts from "../../CustomHooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const removeFromCart = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            removeFromCart={removeFromCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/shipment">
            <button>Procced Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
