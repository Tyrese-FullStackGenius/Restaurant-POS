import React from "react";
// import Foods from "./Foods";
export default React.createContext({
    cart: [],
    addProductToCart: product => {},
    removeProductFromCart: productId => {}
});