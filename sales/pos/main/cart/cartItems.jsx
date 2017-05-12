/*
 * Module dependencies
 */
import React from 'react';
import { connect } from "react-redux"
import { updateTotals } from './actions'
import { updateItemDiscount } from '../product/actions'

@connect((store) => {
  return {
    inCart: store.cart.cartItems,
    globalDiscount : store.cart.globalDiscount
  };
})
export default class CartItems extends React.Component {

    //On component update (The cart has been modified) calls the update totals method in actions file.
    componentDidUpdate(){
        this.props.dispatch(updateTotals(this.props.inCart))

    }

    discountInputKeyPress(code, ev){

        if(ev.key=='Enter'){
            ev.preventDefault()
            let discount = (ev.target.value) ? ev.target.value : 0
            this.props.dispatch(updateItemDiscount(this.props.inCart, code, discount, this.props.globalDiscount))

        }

    }


    // Render the items in cart using table rows

    render(){
        const cartItems = this.props.inCart

        let items = cartItems.map((item) =>{

                let taxesText = (item.product.usetaxes) ?  `${item.product.taxes}%` : `0%`

                return <tr key={item.product.code}>
                        <td> {item.product.code} </td>
                        <td> {item.product.description} </td>
                        <td> {item.qty} </td>
                        <td> ₡ {parseFloat(item.product.price).toFixed(2)} </td>
                        <td style={{'padding':'0'}}>
                            <input onKeyPress={this.discountInputKeyPress.bind(this, item.product.code)} type="number" className="form-control" style={{'width':'65px', 'height':'37px' }} />
                        </td>
                        <td> {taxesText} </td>
                        <td> ₡ {item.totalWithIv.toFixed(2)} </td>
                        <td> - </td>
                      </tr>
            })

            return <tbody className="table-body">
                    {items}
                   </tbody>

        }

}
