import { createContext, useState } from "react";
import { prodInfo } from "../constants";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id, size) {
    const quantity = cartProducts.find(
      (product) => product.id === id && product.size === size
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id, size) {
    const quantity = getProductQuantity(id, size);

    if (quantity === 0) {
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
          size: size,
        },
      ]);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id && product.size === size
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromCart(id, size) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id || currentProduct.size != size;
      })
    );
  }

  function getProductInfo(id) {
    let productData = prodInfo.find((product) => product.id === id);

    if (productData == undefined) {
      console.log("Product data does not exist for ID: " + id);
      return undefined;
    }

    return productData;
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductInfo(cartItem.id);
      totalCost += productData.priceint * cartItem.quantity;
    });
    return totalCost;
  }

  function increaseQuantity(id, size) {
    const product = cartProducts.find(
      (product) => product.id === id && product.size === size
    );
    if (product == undefined) {
      console.log("Product not found");
      return undefined;
    }
    setCartProducts(
      cartProducts.map((product) =>
        product.id === id && product.size === size
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  function decreaseQuantity(id, size) {
    const product = cartProducts.find(
      (product) => product.id === id && product.size === size
    );
    if (product == undefined) {
      console.log("Product not found");
      return undefined;
    }
    if (product.quantity > 1) {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id && product.size === size
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    } else {
      deleteFromCart(id, size);
    }
  }

  const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
