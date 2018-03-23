import React, {Component} from 'react';
import AdminView from './AdminView'

class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: 'A Hammer',
    editSaleItem: true,
    productList: [
      {
        productName: 'Hammer',
        description: 'Itsa hammer',
        price: 12.3,
      },
      {
        productName: 'Nail',
        description: 'Itsa nail',
        price: 0.12,
    }
  ]};

  toggleEditSaleButton = () => {
    const editSaleItem = !this.state.editSaleItem
    this.setState({editSaleItem})
  }

  updateSaleItem = (event) => {
    const saleItem = event.target.value
    this.setState({saleItem})
  }

  addNewProductToProductList = (newProduct) => {
      const productList = [...this.state.productList];
      productList.push(newProduct);
      this.setState({productList});
  };
  render() {
    return (
      <div>
        <h1>My Hardware Store</h1>
        <h2>Item On Sale: {this.state.saleItem}</h2>
        <div>
          <button onClick={this.toggleEditSaleButton}>
            {
              this.state.editSaleItem ?
              'Hide Input'
              : 'Edit Sale Item'
            }
          </button>
        </div>
        <div>
          { this.state.editSaleItem ?
            <div>
              <input type="text" onChange={this.updateSaleItem}
                value={this.state.saleItem}/>
              </div>
              : null
            }
        </div>
        <article>
          <AdminView
            productList={this.state.productList} 
            addNewProductToProductList={this.addNewProductToProductList}/>
        </article>
      </div>
    );
  }
}

export default HomePage;
