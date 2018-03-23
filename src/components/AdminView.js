import React, {Component} from 'react';
import ProductList from './ProductList'
import ProductForm from './ProductForm'
const AdminView = props => {

    return (
      <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        <ProductList productList={props.productList} showAdminView={props.showAdminView} deleteProduct={props.deleteProduct}/>

        <h2>Create a New Product</h2>
        <ProductForm addNewProductToProductList={props.addNewProductToProductList}/>
      </div>
    )

}

export default AdminView;
