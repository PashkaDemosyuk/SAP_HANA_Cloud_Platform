function GETRequest() {
    var data = JSON.stringify(false);

    var xhr = new XMLHttpRequest();
    //xhr.withCredentials = true;

    xhr.open("GET", "https://cors-anywhere.herokuapp.com/http://services.odata.org/V4/TripPinService/People");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "5d270113-0c88-4d27-8b8d-aca62836d56c");
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
            $("#data tbody").remove();
            var el = document.getElementById("data");

            Array.from(json.value).forEach(element => {
                el.innerHTML += '<tr>' +
                    '<td><button class="btn btn-dark" id="' + element.UserName + '" onclick="DataUpdate(this)">Update</button></td>' +
                    '<td><button class="btn btn-dark" id="' + element.UserName + '" onclick="DataDelete(this)">Delete</button></td>' +
                    '<td>' + element.UserName + '</td>' +
                    '<td>' + element.FirstName + '</td>' +
                    '<td>' + element.LastName + '</td>' +
                    '<td>' + element.Gender + '</td></tr>';
            });

        }
    });
    xhr.send(data);
}

function POSTRequest() {
    var formElements = document.getElementById("Form").elements;
    var data = {};
    for (var i = 0; i < formElements.length; i++) {
        data[formElements[i].name] = formElements[i].value;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://cors-anywhere.herokuapp.com/http://services.odata.org/V4/TripPinService/People");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert(data.UserName + ' was added (затычка)');
            var el = document.getElementById("data");
            var json = JSON.parse(xhr.responseText);
            Array.from(json.value).forEach(element => {
                el.innerHTML += '<tr>' +
                    '<td><button class="btn btn-dark" id="' + element.UserName + '" onclick="DataUpdate(this)">Update</button></td>' +
                    '<td><button class="btn btn-dark" id="' + element.UserName + '" onclick="DataDelete(this)">Delete</button></td>' +
                    '<td>' + element.UserName + '</td>' +
                    '<td>' + element.FirstName + '</td>' +
                    '<td>' + element.LastName + '</td>' +
                    '<td>' + element.Gender + '</td></tr>';
            });

        }
    });

    xhr.send(data);

}

function DataUpdate(obj) {
    var formElements = document.getElementById("Form").elements;
    var data = {};
    for (var i = 0; i < formElements.length; i++) {
        data[formElements[i].name] = formElements[i].value;
    }

    var xhr = new XMLHttpRequest();
    var url = "https://services.odata.org/V4/(S(4bctqhjqdedzwim1pxenlomc))/TripPinServiceRW/People"
    xhr.open("PUT", url + '\'(' + obj.id + '\')');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert(obj.id + ' updated (затычка)');
        }
    });

    xhr.send(data);
}

function DataDelete(obj) {
    var xhr = new XMLHttpRequest();
    var url = "https://services.odata.org/V4/(S(4bctqhjqdedzwim1pxenlomc))/TripPinServiceRW/People"
    xhr.open("DELETE", url + '\'(' + obj.id + '\')');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            alert(obj.id + ' deleted (затычка)');
        }
    });

    xhr.send(data);
}


