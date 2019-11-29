
function changeBorder() {
    var bordersize;
    var err = 0;
    bordersize = prompt("Select a table border size (between 0 and 8 inclusive): ");

    if (bordersize && bordersize >= 0 && bordersize <= 8) {
        document.getElementById("myTable").border = bordersize;
    } else {
        alert("Wrong value!");
        changeBorder();
    }
}


function changeBackground() {
    document.getElementById("myTable").style = "background-color:#aa8833";
}
