const stateConst = {
    isVisible:true,
}

export default function reducer(state=stateConst, action) {

    switch (action.type) {

        case "SHOW_INVOICE_PANEL": {
            return {...state, isVisible: true}
        }//case

        case "HIDE_INVOICE_PANEL": {
            return {...state, isVisible: false}
        }//case


    }// switch

    return state //default return

}// reducer
