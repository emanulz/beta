import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { Provider } from "react-redux"


import Main from './main/main.jsx'
//import PeopleContainer from './people/components/PeopleContainer.jsx'


//import store from "./store.js"

// ReactDOM.render(
//         <Provider store={store}>
//
//             <Main></Main>
//
//         </Provider>,
//
//     document.getElementById('app-main-container')
// );


ReactDOM.render(


    <Main></Main>,



    document.getElementById('main-content')
);
