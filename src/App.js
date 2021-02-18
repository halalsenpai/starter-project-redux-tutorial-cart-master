import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  // cart setup

  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <CartContainer />
      </Provider>
    </div>
  );
}

export default App;
