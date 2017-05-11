/*
 * Module dependencies
 */
import React from 'react';
import { connect } from "react-redux"
import {updateTotals} from './actions'

@connect((store) => {
  return {
    inCart: store.cart.cartItems,
  };
})
export default class CartItems extends React.Component {

    componentDidUpdate(){
        this.props.dispatch(updateTotals(this.props.inCart))

    }

    // Main Layout

    render(){
        const cartItems = this.props.inCart

        let items = cartItems.map((item) =>{

                let taxesText = (item.product.usetaxes) ?  'G' : 'E'

                return <tr key={item.product.code}>
                        <td> {item.product.code} </td>
                        <td> {item.product.description} </td>
                        <td> {item.qty} </td>
                        <td> ₡ {parseFloat(item.product.price).toFixed(2)} </td>
                        <td> 0 </td>
                        <td> {taxesText} </td>
                        <td> ₡ {item.subtotal.toFixed(2)} </td>
                        <td> - </td>
                      </tr>
            })

            return <tbody className="table-body">
                    {items}
                   </tbody>

        }

}
