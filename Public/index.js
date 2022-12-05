var random;
function color() {
    random = (Math.floor(Math.random() * 13244552)).toString(16);
    document.body.style.backgroundColor = "#" + random;
    var rcolor = document.querySelector(".text");
    rcolor.innerHTML = "#" + random;
}
function copy() {
    alert("code is copied : #" + random);
}