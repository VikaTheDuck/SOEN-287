var topLevel = 0;

function toTop(image) {
    var imageStyle = document.getElementById(image).style;
    imageStyle.zIndex = ++topLevel;
}
