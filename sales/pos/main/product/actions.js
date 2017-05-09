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

export function productSelected(code, qty, products) {

    const productSelected = products.findIndex(product => product.code == code)

    let val = (productSelected == -1 )
            ? {type: "PRODUCT_NOT_FOUND", payload: -1}
            : {type: "ADD_TO_TABLE", payload: {product:products[productSelected],
                                               qty:qty}}
   return val

}
