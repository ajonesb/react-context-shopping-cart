import React from "react";
import "./App.css";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div>
      <ShoppingCartProvider>
        <main>
          <ShoppingCart />
        </main>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
