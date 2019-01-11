function goToPage() {
    var Url = "Task2.html";
    window.location.replace(Url);
}

function clearContent() {
    document.body.innerHTML = '';
    load_layout();
}

function load_layout() {
    var newContainer = document.createElement("p");
    newContainer.setAttribute("id", "content");
    document.body.appendChild(newContainer);
    document.getElementById("content").innerHTML =
        '<div class="flex-container">' +
        '<div>' + '<img src="source/leverx.png">' + '<p>LeverX</p>' + '</div>' +
        '<div>' + '<img src="source/leverx.png">' + '<p>LeverX</p>' + '</div>' +
        '<div>' + '<img src="source/leverx.png">' + '<p>LeverX</p>' + '</div>' +
        '<div>' + '<img src="source/leverx.png">' + '<p>LeverX</p>' + '</div>' +
        '<div>' + '<img src="source/leverx.png">' + '<p>LeverX</p>' + '</div>' +
        '<div>' + '<img src="source/leverx.png">' + '<p>LeverX</p>' + '</div>' +
        '<div>' + '<img src="source/leverx.png">' + '<p>LeverX</p>' + '</div>' +
        '<div>' + '<img src="source/leverx.png">' + '<p>LeverX</p>' + '</div>' +
        '</div>';
}