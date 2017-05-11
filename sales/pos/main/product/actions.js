import axios from "axios";

export function fetchProducts() {

  return function(dispatch) {
    axios.get("/sales/api/products/")
      .then((response) => {
        dispatch({type: "FETCH_PRODUCTS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_PRODUCTS_REJECTED", payload: err})
      })
  }
}

export function productSelected(code, qty, products, inCart) {

    const productSelected = products.findIndex(product => product.code == code)//checks if product exists

    let res = (productSelected == -1 )//if not exists dispatch Not Found, if exists check if already in cart
            ? {type: "PRODUCT_NOT_FOUND", payload: -1}
            : checkIfInCart(code, qty, products, inCart, productSelected)

    return res

}

function checkIfInCart(code, qty, products, inCart, productSelected){

    const productInCart = inCart.findIndex(cart => cart.product.code == code) //check if product in cart

    let res = (productInCart == -1 )//if not exists in cart Dispats ADD_TO_TABLE, if exists dispatch Update
            ? {type: "ADD_TO_CART", payload: {product:products[productSelected], qty:qty}}
            : {type: "UPDATE_CART_ADD", payload: {qty:qty, index:productInCart}}

    return res

}
