import React from 'react'
import { connect } from "react-redux"

@connect((store) => {
  return {
      total:store.cart.cartTotal
  };
})
export default class PaySideBar extends React.Component{



    render(){

        let num = 515123456.124

        return <div className='pay-side-bar'>
                <div className='pay-method-body-header'>
                    <span>Pago</span>
                </div>

                <div className='pay-method-body-content'>

                    <div className='pay-tag left' > TOTAL :</div>
                    <div className='pay-tag right' > ₡ {this.props.total.formatMoney(2,',','.')}</div>

                    <div className='pay-tag left'>VUELTO :</div>
                    <div className='pay-tag right' > ₡ {this.props.total.formatMoney(2,',','.')}</div>

                    <br/>

                    <div className='pay-tag tag-button'>
                        Pagar <i className="fa fa-credit-card" aria-hidden="true"></i>
                    </div>



                </div>

               </div>

    }

}
