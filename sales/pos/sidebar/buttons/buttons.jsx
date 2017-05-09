/*
 * Module dependencies
 */
import React from 'react';


export default class Buttons extends React.Component {

    // Main Layout
    render(){

        return <div style={{'padding':'0'}} className="col-xs-12">
                <div className="bg-white right-item"><span><b>Pago:<br/></b></span>
                    <div className="btns">
                        <button style={{'height':'48px', 'width':'49%', 'marginTop':'10px'}} className="btn btn-default btn-confirm">Confirmar  <span><i style={{'paddingBottom':'8px'}} className="fa fa-rotate-right"></i></span></button>
                        <button style={{'height':'48px', 'width':'49%', 'marginTop':'10px'}} className="btn btn-default btn-pay">Pagar  <span><i style={{'paddingBottom':'8px'}} className="fa fa-credit-card"></i></span></button>
                    </div>
                </div>
              </div>

        }

}
