/*
 * Module dependencies
 */
import React from 'react';
import { connect } from "react-redux"

import { fetchProducts, productSelected } from "./actions"

@connect((store) => {
  return {
    products: store.products.products,
    inCart: store.cart.cartItems,
  };
})
export default class Product extends React.Component {

    componentWillMount() {

      this.props.dispatch(fetchProducts())//fetch products before mount, send dispatch to reducer.
    }

    inputKeyPress(ev){
        //if Key pressed id Enter
        if(ev.key=='Enter'){

            let code = ev.target.value.split('*')[0] //Split val [0] is code [1] is qty
            let qty = ev.target.value.split('*')[1]
            qty = (isNaN(qty)) ? 1 : parseFloat(qty)//if no qty sets to 1

            this.props.dispatch(productSelected(code, qty, this.props.products, this.props.inCart))// dispatchs action according to result
        }

    }


    // Render the product
    render(){

            return <div className="bg-white left-item form-group"><span><b>Producto:</b></span>
                        <div className="inner-addon right-addon"><i style={{'paddingRight':'60px'}} className="fa fa-barcode"></i>
                        <button style={{'height':'48px', 'width':'48px'}} className="btn btn-success product-search-btn"><span><i style={{'paddingBottom':'8px'}} className="fa fa-search"></i></span></button>
                        <input onKeyDown={this.inputKeyPress.bind(this)} type="text" placeholder="Ingrese el Código del Producto" className="form-control input-lg product_code_field mousetrap"/>
                        </div>
                    </div>

        }

}
