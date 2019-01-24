(function(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/https://services.odata.org/V4/(S(4bctqhjqdedzwim1pxenlomc))/TripPinServiceRW/People('keithpinckney')?$expand=Friends",
        "method": "GET",
    };

    $.ajax(settings).done(function (response) {

        $("#data").append('<tr><td>'+response.FirstName+'</td><td>'+
            response.LastName+'</td><td>'+response.Gender+
            '</td><td>');
        Array.from(response.Friends).forEach(function(element){
            $("#data td:last-child").append(element.FirstName+'   '+element.LastName+', ');
        });
        $("#data").append('</td></tr>');
    });

})();