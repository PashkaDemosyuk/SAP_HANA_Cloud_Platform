var newElement = document.createElement("p");
var Name = prompt("Please enter your Name")


var Num = /[0-9]/;
var isContainNumber = Num.test(Name);
if (isContainNumber === true) {
    var tempArr = Name.split("");

    for (var i = 0; i < tempArr.length; i += 2) {
        tempArr[i] = tempArr[i].toString().toUpperCase();
    }

    for (var i = 1; i < tempArr.length; i += 2) {
        tempArr[i] = tempArr[i].toString().toLowerCase();
    }

    Name = tempArr.join('');
} else {
    Name = Name.split("").reverse().join("");
}

newElement.innerHTML = Name;


document.getElementById("Name").appendChild(newElement);


function goToPage() {
    var Url = "Task2.html";
    window.location.replace(Url);
}