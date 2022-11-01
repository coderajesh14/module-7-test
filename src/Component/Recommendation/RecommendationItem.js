import React from 'react'
import './RecommendationItem.css'
import { useSelector, useDispatch } from 'react-redux';
import { cart } from "../Store/Store";

function RecommendationItem({id,newPrice,oldPrice,productImage,productName})
 {
    const dispatch = useDispatch();

    const addToCart = (e) => {
      e.preventDefault();
      dispatch(cart.updateCart(e.target.id))
    }

  return (
    <div className='item-container' >
        <img src={productImage} alt = "dummy"/>
        <div className='item-info'>
            <div className='item-title'>
                {productName}
            </div>

            <div className='item-description'>
                <div className='item-rating'>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                    </svg>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                    </svg>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                    </svg>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                    </svg>
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z" fill="#FFAC4B"/>
                    </svg>
                </div>
                <div className='item-footer'>
                    <div className='item-price'>
                        {oldPrice}
                    </div>
                    <div className='item-old-price'>
                        {newPrice}/-
                    </div>
                    </div>
                </div>

            <div className='item-footer-btn'>
                <button className='item-card-btn btn-primary' onClick={addToCart}>
                    ADD TO CART
                </button>
            </div>
        </div>
    </div>
  )
}

export default RecommendationItem