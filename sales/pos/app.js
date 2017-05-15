import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { Provider } from "react-redux"

import alertify from 'alertifyjs';
window.alertify = alertify;


import Main from './main/main.jsx'
import Sidebar from './sidebar/sidebar.jsx'
import SearchClient from './search/clients/searchPanel.jsx'
import SearchProduct from './search/products/searchPanel.jsx'
import Footer from './footer/footer.jsx'
import PayPanel from './pay/payPanel.jsx'
//import PeopleContainer from './people/components/PeopleContainer.jsx'


import store from "./store.js"

Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

ReactDOM.render(<Provider store={store}>
                    <div style={{'marginTop':'5px'}} className="row blur-div">

                        <Main></Main>
                        <Sidebar></Sidebar>
                        <SearchClient></SearchClient>
                        <SearchProduct></SearchProduct>
                        <PayPanel></PayPanel>

                    </div>
                </Provider>,

                document.getElementById('main-content')
);

ReactDOM.render(<Provider store={store}>

                    <Footer></Footer>

                </Provider>,

    document.getElementById('footer')
);
