(function(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/https://services.odata.org/V4/%28S%284bctqhjqdedzwim1pxenlomc%29%29/TripPinServiceRW/People?$select=FirstName,%20LastName",
        "method": "GET",
    };

    $.ajax(settings).done(function (response) {
        Array.from(response.value).forEach(function(element){
            $("#data").append('<tr><td>'+element.FirstName+'</td><td>'+
                element.LastName+'</td><td>'+element.Gender+'</td></tr>');
        });
    });

})();