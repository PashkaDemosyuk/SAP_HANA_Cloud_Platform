function count(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/https://services.odata.org/V4/%28S%28yt0upbmwzltrojcjtrpv5i1f%29%29/TripPinServiceRW/People/$count",
        "method": "GET",

    };

    $.ajax(settings).done(function (response) {
        alert(response);
    });
}
