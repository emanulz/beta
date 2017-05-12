const stateConst = {
    isVisible:false,
}

export default function reducer(state=stateConst, action) {

    switch (action.type) {

        case "SHOW_PAY_PANEL": {
            return {...state, isVisible: true}
        }//case

        case "HIDE_PAY_PANEL": {
            return {...state, isVisible: false}
        }//case

    }// switch

    return state //default return

}// reducer
