(function(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://services.odata.org/V4/%28S%28n4ioim2z2ysivtsnaxgakjx4%29%29/TripPinServiceRW/People?$filter=FirstName%20eq%20%27Sallie%27%20and%20LastName%20eq%20%27Sampson%27%20and%20startswith%28FirstName,%27Sa%27%29",
        "method": "GET",
    }

    $.ajax(settings).done(function (response) {
        Array.from(response.value).forEach(function(element){
            $("#data").append('<tr><td>'+element.FirstName+'</td><td>'+
                element.LastName+'</td><td>'+element.Gender+'</td></tr>');
        });
    });

})();