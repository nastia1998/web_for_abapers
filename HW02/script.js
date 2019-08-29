function goToGoogle() {
    window.location.href = "https://google.com";
}

function deleteContent() {
    document.body.innerHTML = "";
}

var name =  prompt("Please enter your name");
var matches = name.match(/\d+/);
var newName = "";
if (matches != null) {
    alert(name.split("").reverse().join(""));
} else {
    for (var i = 0; i < name.length; i++) {
        if (i % 2 == 0) {
            newName += name[i].toUpperCase();
        } else {
            newName += name[i].toLowerCase();
        }
    }
    alert(newName);
}
