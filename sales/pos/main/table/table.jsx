/*
 * Module dependencies
 */
import React from 'react';


export default class Table extends React.Component {

    // Main Layout
    render(){

            return <div style={{'marginTop':'10px'}} className="bg-white left-item product-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Cód</th>
                                    <th>Art</th>
                                    <th style={{'width':'10%'}}>Can</th>
                                    <th>P.Un</th>
                                    <th>Des%</th>
                                    <th>IV</th>
                                    <th>Sub</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="table-body">

                            </tbody>
                        </table>
                 </div>

        }

}
