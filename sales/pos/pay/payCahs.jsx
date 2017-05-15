import React from 'react'
import { connect } from "react-redux"

@connect((store) => {
  return {

  };
})
export default class PayCash extends React.Component{

    render(){

        return <div className='pay-method-body'>

                <div className='pay-method-body-header'> <span>Efectivo</span> </div>

                <div className='pay-method-body-content'>


                    <div className='pay-tag left'>EFECTIVO:</div>
                    <input type='Number' className='form-control'></input>

                    <br/>
                    <br/>


                </div>


               </div>

    }

}
