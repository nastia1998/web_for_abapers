function goToGoogle() {
    window.location.href = "https://google.com";
}

function deleteContent() {
    document.body.innerHTML = "";
}

var name =  prompt("Please enter your name");
var matches = name.match(/\d+/);
if (matches != null) {
    alert(name.split("").reverse().join(""));
} else {

}
