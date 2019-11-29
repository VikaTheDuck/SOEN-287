var count = 1;

function changeParagraph() {
    document.getElementById("demo").innerHTML += " Paragraph changed.";
}

function changeList() {
    count += 1;
    document.getElementById("list1").innerHTML +=
        "<li>Item " + count + "</li>";
}