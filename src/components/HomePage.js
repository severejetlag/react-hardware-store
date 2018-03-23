import React, {Component} from 'react';
import AdminView from './AdminView'
import ShopView from './ShopView'

class HomePage extends Component {
  state = {
    itemCurrentlyOnSale: 'A Hammer',
    editSaleItem: false,
    showAdminView: false,
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
    ]
  };

  toggleEditSaleButton = () => {
    const editSaleItem = !this.state.editSaleItem
    this.setState({editSaleItem})
  }

  toggleShowAdmin = () => {
    const showAdminView = !this.state.showAdminView
    this.setState({showAdminView})
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

  deleteProduct = (event, index) => {
    const productList = [...this.state.productList]
    productList.splice(index, 1)
    this.setState({productList})
  }
  render() {
    const shopView = <ShopView productList={this.state.productList}/>
    const adminView = <AdminView
      productList={this.state.productList}
      addNewProductToProductList={this.addNewProductToProductList}
      deleteProduct={this.deleteProduct}
      showAdminView={this.state.showAdminView}/>

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
            <button onClick={this.toggleShowAdmin}>
              {
                  this.state.showAdminView ?
                  'Hide Admin View'
                  : 'Show Admin View'
              }
            </button>
            {
              this.state.showAdminView ?
              adminView :
              shopView
            }
            </article>
          </div>
        );
      }
    }

    export default HomePage;
