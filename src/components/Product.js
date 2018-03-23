import React, {Component} from 'react';

const Product = props => {

    return (
        <div>
          <h3>{props.productName}</h3>
          <div>{props.description}</div>
          <div>{props.price}</div>
          {
            props.showAdminView ?
            <button onClick={() => props.deleteProduct( props.index)}>
              Delete Product
            </button>
            : ""
          }
        </div>
    );

}

export default Product;
