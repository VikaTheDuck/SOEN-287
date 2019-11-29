var i = 123;
function write_array(array) {
	var i;
	for (i = 0; i < array.length; i++) {
		document.write(array[i] + "<br/>");
	}
}

function write_array2(array) {
	for (var i in array) {
		document.write(array[i] + "<br/>");
	}
}

function write_ul_array(array) {
	document.write("<ul>");
	for (var i = 0; i < array.length; i++) {
		document.write("<li>" + array[i] + "</li>");
	}
	document.write("</ul>");
}