import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product,removeFromCart }) => {
    const { name,img,price,shipping,quantity} = product;
    return (
        <div className='review-item'>
            <div>
            <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className="review-item-details">
                    <h3>{name}</h3>
                    <p><small>Price: <span>{ price}</span></small></p>
                    <p><small>Shipping: <span>{ shipping}</span></small></p>
                    <p><small>Quantity: <span>{ quantity}</span></small></p>
                </div>
                <div className="delete-container">
                    <button onClick={()=>removeFromCart(product)} className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ReviewItem;