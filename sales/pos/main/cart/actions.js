
//------------------------------------------------------------------------------------------
//EXPORT FUNCTIONS USED IN COMPONENTS
//------------------------------------------------------------------------------------------

// This function updates totals the cart store item, generates new values according cart item objects, then push the to store
export function updateTotals(inCart){

    let subtotal = 0
    let subTotalNoDiscount = 0
    let taxes = 0
    let total = 0
    let discountTotal = 0;

    //for Each element adds the values to get totals
    inCart.forEach((item)=>{

        subTotalNoDiscount = subTotalNoDiscount + item.subTotalNoDiscount

        subtotal = subtotal + item.subtotal

        let taxesCalc = (item.product.usetaxes) ? item.subtotal*(item.product.taxes/100) : 0
        taxes = taxes + taxesCalc

        discountTotal = discountTotal + item.discountCurrency // this is the value in currency

    })

    total = subtotal+taxes

    //returs a dispatch with a payload of the obtained values
    return {type: "UPDATE_CART_TOTALS", payload: {subtotal:subtotal,
                                                  taxes:taxes, total:total,
                                                  discountTotal:discountTotal,
                                                  subTotalNoDiscount:subTotalNoDiscount}}

}
