
export function hidePanel(){

    return {type: "CLIENT_HIDE_PANEL", payload: -1}
}

export function searchClient(val, clients){

    let text = val.split('%')
    let name
    let matchs = []

    $.each(clients, function(i) {

        name = clients[i].name.toString() + ' ' +clients[i].last_name.toString();
        var control = true;

        $.each(text, function(i) {

        var index = name.toLowerCase().indexOf(text[i].toLowerCase());

        if (index == -1){
            control = false;
            return false;
        }

        });

        if (control == true){
            matchs.push(clients[i])
        }

    });

    let res = (matchs.length)
            ? {type: "CLIENT_SEARCH_SUCCESS", payload: matchs}
            : {type: "CLIENT_SEARCH_FAIL", payload: -1}

    return res
}


export function clientSelected(code, clients) {

    const clientSelected = clients.findIndex(client => client.code == code)//checks if product exists

    let res = (clientSelected == -1 )//if not exists dispatch Not Found, if exists check if already in cart
            ? {type: "CLIENT_NOT_FOUND", payload: -1}
            : {type: "CLIENT_SELECTED", payload: {client:clients[clientSelected]}}

    return res

}
