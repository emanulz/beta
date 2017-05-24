import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { Provider } from "react-redux"

//utils
import alertify from 'alertifyjs';
import formatMoney from '../utils/formatMoney.js'
import printDiv from '../utils/printDiv.js'

window.alertify = alertify;
formatMoney()
window.printDiv = printDiv

//components
import Main from './main/main.jsx'
import Sidebar from './sidebar/sidebar.jsx'
import SearchClient from './search/clients/searchPanel.jsx'
import SearchProduct from './search/products/searchPanel.jsx'
import Footer from './footer/footer.jsx'
import PayPanel from './pay/payPanel.jsx'
import InvoicePanel from './invoice/InvoicePanel/invoicePanel.jsx'





import store from "./store.js"


ReactDOM.render(<Provider store={store}>
                    <div style={{'marginTop':'5px'}} className="row blur-div">

                        <Main></Main>
                        <Sidebar></Sidebar>
                        <SearchClient></SearchClient>
                        <SearchProduct></SearchProduct>
                        <PayPanel></PayPanel>
                        <InvoicePanel></InvoicePanel>

                    </div>
                </Provider>,

                document.getElementById('main-content')
);

ReactDOM.render(<Provider store={store}>

                    <Footer></Footer>

                </Provider>,

    document.getElementById('footer')
);
