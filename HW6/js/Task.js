function GETRequest() {
    var el = document.getElementById("data");
    var url = "http://localhost:3000/data";
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            $("#data tbody").remove();
            console.log(this.responseText);
            var json = JSON.parse(xhr.responseText);
            Array.from(json).forEach(element => {
                el.innerHTML += '<tr>' +
                    '<td><button class="btn btn-dark" id="' + element.id + '" onclick="DataUpdate(this)">Update</button></td>' +
                    '<td><button class="btn btn-dark" id="' + element.id + '" onclick="DataDelete(this)">Delete</button></td>' +
                    '<td>' + element.userId + '</td>' +
                    '<td>' + element.id + '</td>' +
                    '<td>' + element.title + '</td>' +
                    '<td>' + element.body + '</td>' +
                    '</tr>';
            });
        }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function POSTRequest() {
    var url = "http://localhost:3000/data";
    var formElements = document.getElementById("Form").elements;
    var data = {};
    for (var i = 0; i < formElements.length; i++) {
        data[formElements[i].name] = formElements[i].value;
    }
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4 && xhr.status === 200) {

        }
    });

    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    GETRequest();
}

function DataUpdate(obj) {
    sessionStorage.setItem('idUpdate', obj.id);
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/data";
    var itemId = sessionStorage.getItem('idUpdate');
    var formElements = document.getElementById("Form").elements;
    var data = {};
    for (var i = 0; i < formElements.length; i++) {
        data[formElements[i].name] = formElements[i].value;
    }

    xhr.open("PUT", url + '/' + itemId, false);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
        }
    };

    xhr.send(JSON.stringify(data));
    GETRequest();
}

function DataDelete(obj) {
    sessionStorage.setItem('idDelete', obj.id);
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/data";
    var itemId = sessionStorage.getItem('idDelete');

    xhr.open("DELETE", url + '/' + itemId, false);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
        }
    };
    xhr.send();
    GETRequest()
}


