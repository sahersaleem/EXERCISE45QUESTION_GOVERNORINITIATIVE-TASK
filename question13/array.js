/*Your own Array : Think of your favourite mode of transportation ,such as motorcycle or a car , and make a list that stores several examples .use
your list to print a series odf statements about these ityems ,such as "i would like to own a honda motorcycle "*/
var favouriteTransport = [];
favouriteTransport.push([" car", "honda"]);
favouriteTransport.push([" motorcycle", "honda"]);
favouriteTransport.push(["bus", "honda"]);
favouriteTransport.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    return console.log("i would like to own ".concat(brand, " ").concat(transport));
});
