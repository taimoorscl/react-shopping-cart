import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DragDropUi from "./components/drag_drop_ui/DragDropUi";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" component={ShoppingCart} exact />
          <Route path="/drag_drop" component={DragDropUi} />
        </Router>
      </>
    );
  }
}

export default App;
