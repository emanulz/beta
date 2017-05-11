
export function updateTotals(inCart){

    let subtotal = 0
    let iv = 0
    let total = 0

    inCart.forEach((item)=>{

        subtotal = subtotal + item.subtotal
        let ivCalc = (item.product.usetaxes) ? item.subtotal*(item.product.taxes/100) : 0
        iv = iv + ivCalc

    })

    total = subtotal+iv

    return {type: "UPDATE_CART_TOTALS", payload: {subtotal:subtotal, iv:iv, total:total}}

}
