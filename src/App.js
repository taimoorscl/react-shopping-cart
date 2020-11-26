import React, { Component } from 'react'
import data from './data.json'
import Products from './components/products'


class  App extends Component {
  constructor(){
    super();
    this.state={
      products: data.products,
      size: "",
      sort: ""
    }
  }
  render() {
  return (
    <div className="grid-container">
      <header>
        <a href='/'>React Shopping cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={this.state.products}/>
          </div>
          <div className="sidebar">cartitems</div>
        </div>
      </main>
      <footer>All rigth is reserved</footer>
    </div>
  );
  }
}

export default App;
