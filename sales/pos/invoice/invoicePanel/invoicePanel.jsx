import React from 'react'
import { connect } from "react-redux"

import FullInvoice from '../fullInvoice/fullInvoice.jsx'

@connect((store) => {
  return {
            panelVisible: store.invoice.isVisible,
            payMethod: store.pay.payMethod,
  };
})
export default class InvoicePanel extends React.Component{

    hidePanel(){

        this.props.dispatch({ type:'HIDE_INVOICE_PANEL', payload:-1})
        //printDiv('full-invoice-print')
    }

    render(){

        let isVisible = (this.props.panelVisible) ? 'invoice-panel is-visible' : 'invoice-panel'


        return <div className={isVisible}>


                <div className='invoice-panel-main'>
                    <div className='invoice-panel-header'>
                        Factura de Venta
                        <i onClick={this.hidePanel.bind(this)} className="fa fa-times" aria-hidden="true"></i>
                    </div>


                    <div id="full-invoice-print" className='invoice-panel-container'>

                            <FullInvoice></FullInvoice>

                    </div>

                </div>

               </div>

    }

}
