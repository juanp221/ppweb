var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'json/listObj.json');
request.onreadystatechange = function() {
    if ((request.readyState === 4) && (request.status === 200)) {
        var items = JSON.parse(request.responseText);
        var path = window.location.pathname;
        var page = path.split("/").pop();
        console.log(page);
        //Print all items
        console.log(items);
        var output = '';
        var key = 0;
        if (page == "sol1.html") {
            key = 0;
            output = '<div class=' + "col-md-6" + '><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-md-6"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src=' + items[key].link + '></iframe></div></div' + '>';
            document.getElementById('listContent').innerHTML = output;
        }
        if (page == "sol2.html") {
            key = 1;
            output = '<div class=' + "col-md-6" + '><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-md-6"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src=' + items[key].link + '></iframe></div></div' + '>';
            document.getElementById('listContent').innerHTML = output;
        }
        if (page == "sol3.html") {
            key = 2;
            output = '<div class=' + "col-md-6" + '><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-md-6"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src=' + items[key].link + '></iframe></div></div' + '>';
            document.getElementById('listContent').innerHTML = output;
        }
        if (page == "pro1.html") {
            key = 3;
            output = '<div class=' + "col-md-6" + '><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-md-6"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src=' + items[key].link + '></iframe></div></div' + '>';
            document.getElementById('listContent').innerHTML = output;
        }
        if (page == "pro2.html") {
            key = 4;
            output = '<div class=' + "col-md-6" + '><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-md-6"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src=' + items[key].link + '></iframe></div></div' + '>';
            document.getElementById('listContent').innerHTML = output;
        }
        if (page == "pro3.html") {
            key = 5;
            output = '<div class=' + "col-md-6" + '><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-md-6"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src=' + items[key].link + '></iframe></div></div' + '>';
            document.getElementById('listContent').innerHTML = output;
        }
        if (page == "clientes.html") {
            key = 6;
            //output = '<div class=' + "col-md-6" + '><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-md-6"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src=' + items[key].link + '></iframe></div></div' + '>';
            output = '<div class="col-md-6"' + '><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-md-6"> <a href=' + items[key].link + ' ' + '> <img src=' + items[key].img + ' ' + 'class="img-responsive"></div' + '></a>';
            document.getElementById('listContent').innerHTML = output;
            key = 7;
            output = '';
            for (var key2 = key; key2 < 9; key2++) {
                output += '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><h4>' + items[key2].title + '</h4><p>' + items[key2].content + '</p></div><div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"> <a href=' + items[key2].link + ' ' + '> <img src=' + items[key2].img + ' ' + 'class="img-responsive"></div' + '></a>';
            }
            //output = '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"> <a href=' + items[key].link + ' ' + '> <img src=' + items[key].img + ' ' + 'class="img-responsive"></div' + '></a>';
            document.getElementById('listContent2').innerHTML = output;
        }
        if (page == "socios.html") {
            key = 9;
            //output = '<div class=' + "col-md-6" + '><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-md-6"><div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" src=' + items[key].link + '></iframe></div></div' + '>';
            output = '<div class="col-md-6"' + '><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-md-6"> <a href=' + items[key].link + ' ' + '> <img src=' + items[key].img + ' ' + 'class="img-responsive"></div' + '></a>';
            document.getElementById('listContent').innerHTML = output;
            key = 10;
            output = '';
            for (var key2 = key; key2 < 12; key2++) {
                output += '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><h4>' + items[key2].title + '</h4><p>' + items[key2].content + '</p></div><div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"> <a href=' + items[key2].link + ' ' + '> <img src=' + items[key2].img + ' ' + 'class="img-responsive"></div' + '></a>';
            }
            //output = '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"><h4>' + items[key].title + '</h4><p>' + items[key].content + '</p></div><div class="col-lg-3 col-md-3 col-sm-6 col-xs-12"> <a href=' + items[key].link + ' ' + '> <img src=' + items[key].img + ' ' + 'class="img-responsive"></div' + '></a>';
            document.getElementById('listContent2').innerHTML = output;
        }
    }
}
request.send();