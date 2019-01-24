(function(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://services.odata.org/V4/%28S%28n4ioim2z2ysivtsnaxgakjx4%29%29/TripPinServiceRW/People?$top=5&$orderby=FirstName%20desc&$search=Female",
        "method": "GET",
    }

    $.ajax(settings).done(function (response) {
        Array.from(response.value).forEach(function(element){
            $("#data").append('<tr><td>'+element.FirstName+'</td><td>'+
                element.LastName+'</td><td>'+element.Gender+'</td></tr>');
        });
    });

})();