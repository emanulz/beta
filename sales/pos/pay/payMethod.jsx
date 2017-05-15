import React from 'react'
import { connect } from "react-redux"

@connect((store) => {
  return {

  };
})
export default class PayMethod extends React.Component{

    render(){

        return <div className='pay-method-select'>

                    <div className='pay-method-select-item selected' >

                        <div className='pay-method-select-item-header'> <span>Efectivo</span> </div>

                        <i class="fa fa-money" aria-hidden="true"></i>


                    </div>

                    <div className='pay-method-select-item'>

                        <div className='pay-method-select-item-header'> <span>Tarjeta</span> </div>

                        <i class="fa fa-credit-card" aria-hidden="true"></i>

                    </div>

                    <div className='pay-method-select-item'>

                        <div className='pay-method-select-item-header'> <span>Crédito</span> </div>

                        <i class="fa fa-users" aria-hidden="true"></i>

                    </div>

                    <div className='pay-method-select-item'>

                        <div className='pay-method-select-item-header'> <span>Otro</span> </div>

                        <i class="fa fa-share" aria-hidden="true"></i>

                    </div>

               </div>

    }

}
