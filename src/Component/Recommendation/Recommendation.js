import React from 'react'
import './Recommendation.css'
import RecommendationItem from './RecommendationItem'
import { useEffect, useState } from "react";

function Recommendation() {

    const [productData, setproductData] = useState([]);
    const [errors, setErrors] = useState(null);
  
    const getProducts = async () => {
      try {
        const resp = await fetch(
          "https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
        );
        if (!resp.ok) {
          throw new Error("Something went wrong!");
        }
        const modifiedResponse = await resp.json();
        const pdtInfo = [];
        for (const key in modifiedResponse) {
          console.log(modifiedResponse[key]);
          pdtInfo.push(modifiedResponse[key]);
        }
        setproductData(pdtInfo);
      } catch (err) {
        setErrors(err);
      }
    };
  
    useEffect(() => {
      getProducts();
    }, []);
  return (
    <div className='recommendation-container'>
        <div className='recommendation-header'>
            Products
        </div>
        <div className='recommendation-list'>
            {
                productData.map( item => 
                    <RecommendationItem 
                    id={item.id} 
                    newPrice={item.newPrice}  
                    oldPrice={item.oldPrice}
                    productImage={item.productImage}
                    productName={item.productName}
                    /> 
                )
            }
        </div>
    </div>
  )
}

export default Recommendation