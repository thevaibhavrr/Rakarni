import React from 'react'
import ProductHeader from '../components/product/ProductHeader'
import ProductDetails from '../components/product/ProductDetails'
import ProductService from '../components/product/productService'

function Product() {
  return (
    <div>
        <ProductHeader/>
        <ProductDetails/>
        <ProductService/>
    </div>
  )
}

export default Product