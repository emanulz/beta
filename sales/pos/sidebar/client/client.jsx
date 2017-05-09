/*
 * Module dependencies
 */
import React from 'react';


export default class Client extends React.Component {

    // Main Layout
    render(){

        return <div style={{'padding':'0'}} className="col-xs-12">
                <div style={{'height':'160px', 'paddingBottom':'0', 'marginBottom':'0'}} className="bg-white right-item"><span><b>Datos del Cliente:  <span><i className="fa fa-edit btn-client-search"></i></span></b></span><br/><br/>
                    <div>
                        <div style={{'padding':'0'}} className="col-xs-2"><img src="/static/img/profile.jpg" className="avatar btn-client-search"/></div>
                        <div style={{'padding':'0'}} className="col-xs-10"><span><b>Código : </b></span>
                            <input type="text" style={{'width':'100px'}} className="client_code_field"/><i style={{'marginLeft':'5px'}} className="fa fa-street-view"></i><br/>
                            <span><b>Nombre : </b></span>
                            <span className="client-name-span">Cliente de Contado</span>
                            <br/>
                            <span><b>Crédito : </b></span>
                            <span>
                            <i><span className="client-credit-span has-credit-icon fa fa-times-circle"></span>
                            </i>
                            </span>
                            <br/>
                            <span><b>Balance : </b></span>
                            <span className="debt-amount-span credit-status credit-positive">₡ 0</span>
                        </div>
                    </div>
                </div>
            </div>

        }

}
