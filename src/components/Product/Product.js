import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, ratings, seller, img } = props.product;
    console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='pd-name'>{ name}</p>
        </div>
    );
};

export default Product;