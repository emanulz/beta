const stateConst = {
    cartHasItems:false,
    cartItems: [],
    cartSubtotal:0,
    cartIv:0,
    cartTotal:0,
}

export default function reducer(state=stateConst, action) {

    switch (action.type) {

        case "ADD_TO_CART": {

            let item = action.payload
            item.subtotal = item.qty*item.product.price

            return {...state,
                    cartHasItems:true,
                    cartItems: [...state.cartItems, item]
                }
        }//case

        case "UPDATE_CART_ADD": {

            let newCart = [...state.cartItems]
            let newQty = newCart[action.payload.index].qty + action.payload.qty

            newCart[action.payload.index].qty = newQty
            newCart[action.payload.index].subtotal = newQty*newCart[action.payload.index].product.price

            return {...state,
                    cartItems:newCart
                }
        }//case

        case "UPDATE_CART_TOTALS": {

            return {...state,
                    cartSubtotal:action.payload.subtotal,
                    cartIv:action.payload.iv,
                    cartTotal:action.payload.total
                }
        }//case


    }// switch

    return state //default return

}// reducer
