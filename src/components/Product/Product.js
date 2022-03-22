import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
    const { handleAddToCart,product } = props;
  const { name, price, ratings, seller, img } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <p>hello</p>
      <div className="product-info">
        <h3 className="pd-name">{name}</h3>
        <h5 className="pd-price">Price: ${price}</h5>
        <p>Manufacturer : {seller}</p>
        <p>
          <small>Rating: {ratings} stars</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="cart-btn">
        <span>Add To Cart</span>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
