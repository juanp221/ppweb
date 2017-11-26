var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'json/listaData.json');
request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
        var items = JSON.parse(request.responseText);
        var path = window.location.pathname;
        var page = path.split("/").pop();
        console.log(page);
        //Print all items
        console.log(items);
        var output = '';
        for (var key = 0; key < 3; key++) {
            output += '<li><a href=' + items[key].link + '>' + items[key].name + '</a></li>';
        }
        document.getElementById('listSoluciones').innerHTML = output;

        output = '';
        for (var key2 = key; key2 < 6; key2++) {
            output += '<li><a href=' + items[key2].link + '>' + items[key2].name + '</a></li>';
        }
        document.getElementById('listProductos').innerHTML = output;

    }
}
request.send();