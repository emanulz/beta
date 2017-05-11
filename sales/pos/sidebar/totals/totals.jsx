/*
 * Module dependencies
 */
import React from 'react';

import { connect } from "react-redux"


@connect((store) => {
  return {
    subtotal: store.cart.cartSubtotal,
    iv: store.cart.cartIv,
  };
})
export default class Totals extends React.Component {

    // Main Layout
    render(){

        return <div style={{'padding':'0'}} className="col-xs-12">
                <div style={{'paddingTop':'0', 'marginTop':'0'}} className="bg-white right-item"><span><b>Totales:</b></span><br/><br/>
                    <table className="table table-totals">
                        <tbody>
                        <tr>
                            <th>Descuento %</th>
                            <td style={{'padding':'0'}} className="sale_global_discount">
                            <input type="number" style={{'width':'50%','height':'100%', 'padding':'0 0 0 10px', 'border':'0'}} className="sale_global_discount_input"/>
                            </td>

                        </tr>
                        <tr>
                            <th>Sub-Total:</th>
                            <td className="price sale_subtotal">₡ {this.props.subtotal.toFixed(2)}</td>

                        </tr>
                        <tr>
                            <th>IV:</th>
                            <td className="price sale_iv_amount">₡ {this.props.iv.toFixed(2)}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>

        }

}
