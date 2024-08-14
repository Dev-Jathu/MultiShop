import React from 'react'
import Carousal from "../components/product/ProductCarousal"
import ProductCard from "../components/product/ProductCard"
import OfferCard from "../components/product/OfferCard"
import Categories from '../components/product/categories.jsx'


function home() {
  return (
    <div >
      <Carousal />    
      <ProductCard />
      <OfferCard />
      <Categories/>
      
    
    </div>
  )
}

export default home