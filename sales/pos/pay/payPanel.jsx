import React from 'react'
import { connect } from "react-redux"

import PayMethod from './payMethod.jsx'
import PayCash from './payCahs.jsx'
import PaySideBar from './paySideBar.jsx'

@connect((store) => {
  return {panelVisible: store.pay.isVisible};
})
export default class PayPanel extends React.Component{

    hidePanel(){

        this.props.dispatch({ type:'HIDE_PAY_PANEL', payload:-1})
    }

    render(){

        let isVisible = (this.props.panelVisible) ? 'pay-panel is-visible' : 'pay-panel'

        return <div className={isVisible}>

                <div className='pay-panel-main'>
                    <div className='pay-panel-header'>
                        Registrar Pago
                        <i onClick={this.hidePanel.bind(this)} className="fa fa-times" aria-hidden="true"></i>
                    </div>

                    <PayMethod></PayMethod>

                    <div className='pay-area-container' >

                        <PayCash></PayCash>

                        <PaySideBar></PaySideBar>

                    </div>

                </div>

               </div>

    }

}
