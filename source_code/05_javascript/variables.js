var count = 10;
function increment() {
    count += 1;
    if ((count % 2) === 0) {
        document.getElementById("header1").innerHTML += count;
    }
    console.log(2 == '2')
    console.log(2 === '2')
}