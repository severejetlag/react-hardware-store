import React, {Component} from 'react'
import ProductList from './ProductList'

const ShopView = props => {

    return(
      <div>
        <h1>Shop View</h1>
        <h2>Products</h2>
        <ProductList productList={props.productList}/>
      </div>
    )
}

export default ShopView
