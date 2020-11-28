import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React Shopping cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products />
              </div>
              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <footer>All rigth is reserved</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
